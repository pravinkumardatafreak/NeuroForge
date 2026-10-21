const express = require('express');
const path = require('path');
const { GoogleGenAI, Type } = require('@google/genai');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));
app.use(express.static(path.join(__dirname)));

function getGenAIClient() {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function analyzeSpeechMetrics(transcript, durationSec) {
  const clean = (transcript || '').trim();
  const words = clean ? clean.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const safeDuration = Math.max(1, Number(durationSec) || 1);
  const wpm = wordCount > 0 ? Math.round((wordCount / safeDuration) * 60) : 0;

  const fillerPatterns = [
    /\bum+\b/gi,
    /\buh+\b/gi,
    /\berm+\b/gi,
    /\byou know\b/gi,
    /\bi mean\b/gi,
    /\bbasically\b/gi,
    /\bliterally\b/gi,
    /\bsort of\b/gi,
    /\bkind of\b/gi,
  ];
  let fillerCount = 0;
  const detectedFillers = [];
  for (const regex of fillerPatterns) {
    const matches = clean.match(regex);
    if (matches && matches.length > 0) {
      fillerCount += matches.length;
      detectedFillers.push(`${matches[0].toLowerCase()} (×${matches.length})`);
    }
  }

  return {
    wordCount,
    durationSec: Math.round(safeDuration),
    wpm,
    fillerCount,
    detectedFillers,
  };
}

// 1. Audio Transcription Endpoint using gemini-3.5-transcribe
app.post('/api/voice/transcribe', async (req, res) => {
  try {
    const { audioBase64, mimeType } = req.body || {};
    if (!audioBase64) {
      return res.status(400).json({ error: 'Missing audioBase64 payload.' });
    }

    const ai = getGenAIClient();
    const audioPart = {
      inlineData: {
        mimeType: mimeType || 'audio/webm',
        data: audioBase64,
      },
    };

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: {
        parts: [
          audioPart,
          {
            text: 'Transcribe this spoken technical interview answer accurately in English. Preserve exact technical terms (e.g., TF-IDF, RevIN, LSTM, PatchTST, Swin-TransUNet, ElasticNet, Pydantic, LangChain, OpenBIM, TreeSHAP) and include any spoken filler words (such as um, uh) if present. Output only the verbatim transcript.',
          },
        ],
      },
    });

    const transcript = (response.text || '').trim();
    return res.json({ transcript });
  } catch (err) {
    console.error('Transcription error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to transcribe audio with gemini-3.5-transcribe.',
    });
  }
});

// 2. Spoken Answer Transcription + Tone & Presentation Evaluation Endpoint
app.post('/api/voice/evaluate', async (req, res) => {
  try {
    const {
      audioBase64,
      mimeType,
      durationSec,
      questionText,
      referenceAnswer,
      contextLabel,
      fallbackTranscript,
    } = req.body || {};

    const ai = getGenAIClient();
    let transcript = '';

    // Step 1: Transcribe audio using gemini-3.5-transcribe
    if (audioBase64) {
      const audioPart = {
        inlineData: {
          mimeType: mimeType || 'audio/webm',
          data: audioBase64,
        },
      };

      const transRes = await ai.models.generateContent({
        model: 'gemini-3.5-transcribe',
        contents: {
          parts: [
            audioPart,
            {
              text: 'Transcribe this spoken technical interview answer accurately in English. Preserve technical acronyms (TF-IDF, RevIN, LSTM, PatchTST, Swin-TransUNet, ElasticNet, Pydantic, LangChain, OpenBIM, TreeSHAP, R², MAPE, EMD) and any spoken hesitations or filler words. Return only the transcript text.',
            },
          ],
        },
      });
      transcript = (transRes.text || '').trim();
    }

    if (!transcript && fallbackTranscript) {
      transcript = String(fallbackTranscript).trim();
    }

    const metrics = analyzeSpeechMetrics(transcript, durationSec);

    if (!transcript) {
      return res.status(200).json({
        transcript: '',
        metrics,
        evaluation: {
          overallScore: 0,
          toneScore: 0,
          presentationScore: 0,
          technicalScore: 0,
          executiveVerdict: 'No clear speech was detected in the recording.',
          toneAndDeliveryAnalysis:
            'Please check that your microphone is unmuted and speak clearly for at least 5–10 seconds.',
          structureFeedback:
            'Aim to open with your headline metric in Sentence 1, explain the math/architecture in Sentence 2, and close with production impact.',
          strengths: ['Microphone connection established'],
          improvements: [
            'Speak closer to the microphone in a quiet environment.',
            'Target 120–140 WPM with crisp metric anchoring.',
          ],
          upgradedScript:
            referenceAnswer ||
            'Start with a concrete metric (e.g., "In our 14,102-row telemetry pipeline, we reduced MAE by 89.2% to 3.78 kcal..."), explain the mathematical mechanism, and state the business outcome.',
        },
      });
    }

    // Step 2: Evaluate Tone, Presentation & Technical Accuracy
    const evalPrompt = `You are a Principal AI/Data Science Interview Bar-Raiser coaching Pravin Kumar R (B.E. Civil Engineering First Class Honors -> IIT-M Incubated GUVI Data Science).
Evaluate Pravin's spoken answer for:
1. Answering Tone & Executive Authority (Does he sound confident, direct, and engineering-driven rather than hesitant, vague, or apologetic?)
2. Presentation & Pacing (His historic baseline trap was 48 WPM token starvation; his target is 120–145 WPM with 0 filler words, opening with concrete numbers/metrics in Sentence 1, followed by First-Principles Math, and Business/Engineering ROI).
3. Technical Accuracy & Depth compared to the reference points.

Context / Module: ${contextLabel || 'Technical Viva & Presentation Defense'}
Interview Question / Prompt: ${questionText || 'Self-Introduction / Technical Defense'}
Reference Key Points: ${referenceAnswer || 'Evaluate based on first-principles Data Science, ML engineering rigor, and Pravin Kumar R flagship project metrics.'}

Candidate's Transcribed Spoken Answer:
"""
${transcript}
"""

Measured Speech Telemetry:
- Duration: ${metrics.durationSec} seconds
- Word Count: ${metrics.wordCount} words
- Speaking Pace: ${metrics.wpm} WPM (Target: 120-145 WPM; <90 WPM is too slow/token-starved; >165 WPM is rushed)
- Detected Filler Words: ${metrics.fillerCount} (${metrics.detectedFillers.join(', ') || 'None'})`;

    const evalRes = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: evalPrompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallScore: {
              type: Type.INTEGER,
              description: 'Overall interview readiness score from 0 to 100.',
            },
            toneScore: {
              type: Type.INTEGER,
              description: 'Answering tone, confidence, and executive authority score from 1 to 10.',
            },
            presentationScore: {
              type: Type.INTEGER,
              description: 'Presentation structure, metric-first framing, and WPM pacing score from 1 to 10.',
            },
            technicalScore: {
              type: Type.INTEGER,
              description: 'First-principles mathematical and engineering accuracy score from 1 to 10.',
            },
            executiveVerdict: {
              type: Type.STRING,
              description: '1-sentence punchy bar-raiser verdict on how this answer landed.',
            },
            toneAndDeliveryAnalysis: {
              type: Type.STRING,
              description: '2-3 sentences analyzing vocal authority, confidence, phrasing assertiveness, and WPM pacing.',
            },
            structureFeedback: {
              type: Type.STRING,
              description: 'Analysis of how well the answer followed Headline Metric -> Mathematical Mechanism -> Production Impact.',
            },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: '2 to 3 specific strengths in tone, pacing, or technical points.',
            },
            improvements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: '2 to 3 concrete, actionable adjustments to improve tone, speed, or missing technical anchors.',
            },
            upgradedScript: {
              type: Type.STRING,
              description: 'A word-for-word, high-impact 45-second spoken script (90-110 words) that Pravin can read aloud at 130 WPM to nail this exact question.',
            },
          },
          required: [
            'overallScore',
            'toneScore',
            'presentationScore',
            'technicalScore',
            'executiveVerdict',
            'toneAndDeliveryAnalysis',
            'structureFeedback',
            'strengths',
            'improvements',
            'upgradedScript',
          ],
        },
      },
    });

    const evaluation = JSON.parse((evalRes.text || '{}').trim());
    return res.json({
      transcript,
      metrics,
      evaluation,
    });
  } catch (err) {
    console.error('Voice evaluation error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to evaluate spoken answer.',
    });
  }
});

// 3. Server-Side AI Mentor Chat Endpoint
app.post('/api/mentor/chat', async (req, res) => {
  try {
    const { prompt, systemInstruction, temperature } = req.body || {};
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt.' });
    }

    const ai = getGenAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction:
          systemInstruction ||
          'You are an elite Senior Data Science Mentor teaching Pravin Kumar R. Explain concepts using real-world analogies, step-by-step breakdowns, clean production Python code, and common interview gotchas.',
        temperature: typeof temperature === 'number' ? temperature : 0.5,
      },
    });

    return res.json({ text: response.text || '' });
  } catch (err) {
    console.error('Mentor chat error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to generate AI Mentor response.',
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`NeuroForge Academy server running at http://0.0.0.0:${PORT}`);
});
