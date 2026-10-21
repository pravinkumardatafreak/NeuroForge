/* ═══════════════════════════════════════════════════════════════════
   voice_evaluator.js — Live Spoken Answer & Presentation Tone Evaluator
   Powered by Server-Side Gemini API (gemini-3.5-transcribe + gemini-3.8-flash)
   Includes Live WebAudio Visualizer, WPM Pacing Gauge, and Offline Fallback
═══════════════════════════════════════════════════════════════════ */

(function () {
  const PRESET_PROMPTS = [
    {
      id: 'intro_zoho',
      label: '🏢 90-Second Zoho & Enterprise Self-Introduction',
      topic: 'Executive Pitch & Career Moat',
      question: 'Tell me about yourself and why you transitioned from B.E. Civil Engineering (First Class Honors) into Data Science & Applied AI.',
      reference: 'B.E. Civil Engineering (First Class Honors) + IIT-M Incubated GUVI Master Data Science. Data Science Intern at Internship Studio: modeled 14,102 metabolic telemetry records using PCA, K-Means, and Random Forest, cutting MAE by 89.2% (34.97 to 3.78 kcal, R²=0.9979). Built 6 production AI systems including ERIA (4-agent LangChain DAG with ≥8.5/10 Critic Gate), CryptoCast (PyTorch LSTM + RevIN, 2.06% 1-Day MAPE), and OpenBIM BOQ Variance Engine (45s automated IFC4 audit).'
    },
    {
      id: 'proj_telemetry',
      label: '📊 Internship Studio Telemetry Defense (14,102 rows · R²=0.9979)',
      topic: 'Classical ML & Feature Engineering',
      question: 'Walk me through your Internship Studio Data Science project. How did you achieve an 89.2% error reduction?',
      reference: 'Audited 14,102 wearable telemetry records. Removed physiological outliers via 1.5×IQR, engineered interaction ratios, and applied PCA + K-Means (k=3 via Silhouette score) to discover 3 metabolic regimes. Trained Random Forest Regressor (√p feature decorrelation) achieving 3.78 kcal MAE (down 89.2% from 34.97 baseline) and R²=0.9979, verified with TreeSHAP.'
    },
    {
      id: 'proj_eria',
      label: '🤖 ERIA 4-Agent LangChain DAG & Critic Gate Defense',
      topic: 'Applied GenAI & Multi-Agent RAG',
      question: 'How does ERIA prevent LLM hallucinations when analyzing complex regulatory PDFs?',
      reference: 'ERIA uses a deterministic 4-Agent LangChain DAG (Extractor, Impact Analyst, Strategic Planner, and Critic) powered by Groq LLaMA 3.3 70B. Every inter-agent handoff is validated by strict Pydantic V2 schemas, and a Critic LLM-as-a-Judge gate enforces a ≥8.5/10 grounding threshold before returning output in sub-15s at $0.0087 per run.'
    },
    {
      id: 'proj_crypto',
      label: '📈 CryptoCast: RevIN LSTM, PatchTST & The R² Paradox',
      topic: 'Time-Series Forecasting',
      question: 'Why do naive LSTM price forecasters fail on Bitcoin, and how did your RevIN + Walk-Forward architecture solve it?',
      reference: 'Regressing raw non-stationary prices causes the R²=0.99 Paradox (predicting P_t ≈ P_{t-1}). We transformed prices into stationary Log Returns verified by ADF tests (p < 0.001), wrapped our PyTorch LSTM in a Reversible Instance Normalization (RevIN) layer to remove local mean/variance drift, and evaluated with chronological Walk-Forward Validation—achieving 2.06% 1-Day MAPE (LSTM) and 5.93% 7-Day MAPE (PatchTST).'
    },
    {
      id: 'proj_soil_hubmap',
      label: '👁️ Computer Vision Defense: Soil 15.0 PPM & HuBMAP Swin-TransUNet',
      topic: 'Spatial Vision & Deep Learning',
      question: 'How did you handle physical scale variation in Soil Granulometry and epistemic uncertainty in HuBMAP segmentation?',
      reference: 'In Soil Granulometry, we normalized camera images to 15.0 Pixels-Per-Millimeter (PPM) via OpenCV, fused EfficientNet-B0 + ResNet-34 features, and applied MultiTaskElasticNet (Group-Lasso row sparsity) to reach 55.21 Weighted EMD. In HuBMAP, we used Swin-TransUNet (O(N) shifted windows) with BCE+Dice loss (0.6782 Dice) and T=10 Monte Carlo Dropout passes for pixel-wise epistemic uncertainty heatmaps.'
    },
    {
      id: 'proj_openbim',
      label: '🏗️ OpenBIM BOQ Variance Engine (The 1-in-10,000 Civil + AI Moat)',
      topic: 'ConTech AI & Isolation Forest',
      question: 'Explain how your OpenBIM BOQ Variance Engine combines your Civil Engineering background with Machine Learning.',
      reference: 'Manual quantity takeoffs take 21 days and suffer 8–12% cost overruns. Our engine parses 3D IFC4 models using IfcOpenShell, maps elements to CPWD DSR 2023 benchmark rates via SQL CTEs, and runs an Isolation Forest + TreeSHAP anomaly detector in 45 seconds to flag inflated contractor line items in an interactive Three.js viewport.'
    }
  ];

  let mediaRecorder = null;
  let audioChunks = [];
  let recordStartTime = 0;
  let timerInterval = null;
  let audioContext = null;
  let analyser = null;
  let animFrameId = null;
  let activeStream = null;
  let speechRecognition = null;
  let browserTranscript = '';
  let isRecording = false;
  let lastRecordedAudioUrl = null;

  let currentEvalContext = {
    question: PRESET_PROMPTS[0].question,
    reference: PRESET_PROMPTS[0].reference,
    topic: PRESET_PROMPTS[0].topic,
  };

  function getSupportedMimeType() {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/mp4',
      'audio/ogg;codecs=opus',
      'audio/wav',
    ];
    for (const t of types) {
      if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) {
        return t;
      }
    }
    return '';
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result || '';
        const base64 = String(dataUrl).split(',')[1] || '';
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  // Local fallback evaluation when running offline or on static GitHub Pages without Node backend
  function buildLocalFallbackEvaluation(transcript, durationSec, question, reference) {
    const clean = (transcript || '').trim();
    const words = clean ? clean.split(/\s+/).filter(Boolean) : [];
    const wordCount = words.length;
    const safeDur = Math.max(1, Math.round(durationSec || 1));
    const wpm = wordCount > 0 ? Math.round((wordCount / safeDur) * 60) : 0;

    const fillerMatches = clean.match(/\b(um+|uh+|erm+|like|basically|literally|you know|sort of|kind of)\b/gi) || [];
    const fillerCount = fillerMatches.length;

    const hasNumbers = /\b(\d+(\.\d+)?%?)\b/.test(clean);
    const paceScore = wpm >= 115 && wpm <= 155 ? 9 : wpm >= 90 && wpm <= 170 ? 7 : wpm > 0 ? 5 : 0;
    const toneScore = wordCount === 0 ? 0 : Math.min(10, Math.max(4, (hasNumbers ? 8 : 6) + (fillerCount === 0 ? 1 : -1)));
    const presentationScore = wordCount === 0 ? 0 : Math.min(10, Math.round((paceScore + (wordCount >= 35 ? 8 : 5)) / 2));

    // Keyword overlap with reference
    const refWords = stripHtml(reference)
      .toLowerCase()
      .split(/\W+/)
      .filter(w => w.length > 4);
    const uniqueRef = [...new Set(refWords)];
    const lowerClean = clean.toLowerCase();
    const matched = uniqueRef.filter(w => lowerClean.includes(w));
    const coverage = uniqueRef.length ? matched.length / Math.min(12, uniqueRef.length) : 0.7;
    const technicalScore = wordCount === 0 ? 0 : Math.min(10, Math.max(4, Math.round(coverage * 9) + (hasNumbers ? 1 : 0)));
    const overallScore = wordCount === 0 ? 0 : Math.round(((toneScore + presentationScore + technicalScore) / 30) * 100);

    return {
      transcript: clean,
      metrics: {
        wordCount,
        durationSec: safeDur,
        wpm,
        fillerCount,
        detectedFillers: fillerMatches.slice(0, 5),
      },
      evaluation: {
        overallScore,
        toneScore,
        presentationScore,
        technicalScore,
        executiveVerdict:
          wpm >= 115 && hasNumbers
            ? 'Strong, metric-anchored delivery at an executive speaking cadence.'
            : 'Good technical foundation — tighten your opening metric hook and aim for 125–140 WPM.',
        toneAndDeliveryAnalysis: `You spoke ${wordCount} words in ${safeDur}s (${wpm} WPM) with ${fillerCount} detected filler words. ${
          wpm < 100
            ? 'Your pace is below the 120–145 WPM target—accelerate your transitions so the interviewer stays engaged.'
            : wpm > 160
            ? 'Your pace is slightly fast—pause briefly after quoting key metrics so numbers land with authority.'
            : 'Your speaking velocity is right in the 120–145 WPM executive sweet spot.'
        }`,
        structureFeedback: hasNumbers
          ? 'You anchored your response with quantitative metrics. Keep following Sentence 1: Headline Metric → Sentence 2: Mathematical Mechanism → Sentence 3: Production Impact.'
          : 'No exact numerical metrics were detected in your spoken answer. Always quote exact figures (e.g., 14,102 rows, 89.2% MAE reduction, 2.06% MAPE, or ≥8.5/10 Critic Gate) in Sentence 1.',
        strengths: [
          fillerCount === 0 ? 'Zero filler words detected — crisp vocal discipline' : 'Clear vocal articulation across technical terms',
          hasNumbers ? 'Included quantitative proof points in spoken delivery' : 'Addressed the core prompt directly',
        ],
        improvements: [
          !hasNumbers ? 'Anchor Sentence 1 with an exact metric from your cheat-sheet.' : 'Pause 0.5s after stating your headline metric for emphasis.',
          wpm < 115 ? 'Increase speaking velocity toward 130 WPM to avoid token starvation.' : 'Close with a 1-sentence business ROI statement.',
        ],
        upgradedScript: stripHtml(reference),
      },
    };
  }

  window.openVoiceEvaluator = function (customQuestion, customReference, customTopic) {
    if (typeof window.closeMobileSidebar === 'function') window.closeMobileSidebar();

    if (customQuestion) {
      currentEvalContext = {
        question: stripHtml(customQuestion),
        reference: stripHtml(customReference || ''),
        topic: customTopic || 'Viva Flashcard & Technical Defense',
      };
    } else {
      currentEvalContext = {
        question: PRESET_PROMPTS[0].question,
        reference: PRESET_PROMPTS[0].reference,
        topic: PRESET_PROMPTS[0].topic,
      };
    }

    const modal = document.getElementById('voice-eval-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    const qInput = document.getElementById('ve-question-input');
    const topicBadge = document.getElementById('ve-topic-badge');
    const presetSelect = document.getElementById('ve-preset-select');
    if (qInput) qInput.value = currentEvalContext.question;
    if (topicBadge) topicBadge.textContent = currentEvalContext.topic;
    if (presetSelect) {
      presetSelect.value = customQuestion ? 'custom' : PRESET_PROMPTS[0].id;
    }

    const resultArea = document.getElementById('ve-results-container');
    if (resultArea) resultArea.innerHTML = '';
    resetRecorderUI();
  };

  window.closeVoiceEvaluator = function () {
    if (isRecording) {
      stopVoiceRecording(false);
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const modal = document.getElementById('voice-eval-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  window.launchVivaVoiceEval = function (vivaId) {
    if (typeof VIVA_BANK !== 'undefined') {
      const card = VIVA_BANK.find(x => x.id === vivaId);
      if (card) {
        window.openVoiceEvaluator(card.q, card.a, `Viva Vault · ${card.topic}`);
        return;
      }
    }
    window.openVoiceEvaluator();
  };

  window.selectVoicePreset = function (presetId) {
    const found = PRESET_PROMPTS.find(p => p.id === presetId);
    if (!found) return;
    currentEvalContext = {
      question: found.question,
      reference: found.reference,
      topic: found.topic,
    };
    const qInput = document.getElementById('ve-question-input');
    const topicBadge = document.getElementById('ve-topic-badge');
    if (qInput) qInput.value = found.question;
    if (topicBadge) topicBadge.textContent = found.topic;
  };

  function resetRecorderUI() {
    const recBtn = document.getElementById('ve-record-btn');
    const statusTxt = document.getElementById('ve-status-text');
    const timerTxt = document.getElementById('ve-timer');
    const bars = document.querySelectorAll('.ve-wave-bar');
    if (recBtn) {
      recBtn.className = 've-mic-btn';
      recBtn.innerHTML = '<span>🎙️</span><span>Start Speaking Answer</span>';
      recBtn.disabled = false;
    }
    if (statusTxt) {
      statusTxt.textContent = 'Tap the microphone, speak your answer aloud (30–60s), and tap Stop for instant Gemini 3.5 transcription & tone evaluation.';
    }
    if (timerTxt) timerTxt.textContent = '00:00';
    bars.forEach(b => {
      b.style.height = '6px';
    });
  }

  function updateWaveform() {
    if (!analyser || !isRecording) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    const bars = document.querySelectorAll('.ve-wave-bar');
    bars.forEach((bar, i) => {
      const val = data[i * 2] || 0;
      const h = Math.max(6, Math.min(42, Math.round((val / 255) * 42)));
      bar.style.height = h + 'px';
    });
    animFrameId = requestAnimationFrame(updateWaveform);
  }

  window.toggleVoiceRecording = async function () {
    if (isRecording) {
      await stopVoiceRecording(true);
    } else {
      await startVoiceRecording();
    }
  };

  async function startVoiceRecording() {
    const statusTxt = document.getElementById('ve-status-text');
    const recBtn = document.getElementById('ve-record-btn');
    const resultArea = document.getElementById('ve-results-container');
    if (resultArea) resultArea.innerHTML = '';

    try {
      activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      if (statusTxt) {
        statusTxt.innerHTML = `<span style="color:var(--rose)">⚠️ Microphone access denied or unavailable (${err.message}). Please allow microphone permission in your browser.</span>`;
      }
      return;
    }

    audioChunks = [];
    browserTranscript = '';
    isRecording = true;
    recordStartTime = Date.now();

    // Start WebAudio visualizer
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();
      const source = audioContext.createMediaStreamSource(activeStream);
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      updateWaveform();
    } catch (e) {}

    // Start parallel browser SpeechRecognition as live preview / offline fallback
    try {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        speechRecognition = new SR();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en-US';
        speechRecognition.onresult = event => {
          let finalStr = '';
          for (let i = 0; i < event.results.length; i++) {
            finalStr += event.results[i][0].transcript + ' ';
          }
          browserTranscript = finalStr.trim();
          if (statusTxt && isRecording && browserTranscript) {
            statusTxt.innerHTML = `<span style="color:var(--cyan)">🎙️ Listening:</span> <em>"${browserTranscript.slice(-110)}"</em>`;
          }
        };
        speechRecognition.start();
      }
    } catch (e) {}

    const mimeType = getSupportedMimeType();
    mediaRecorder = mimeType
      ? new MediaRecorder(activeStream, { mimeType })
      : new MediaRecorder(activeStream);

    mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.start(250);

    if (recBtn) {
      recBtn.className = 've-mic-btn recording';
      recBtn.innerHTML = '<span>⏹️</span><span>Stop &amp; Evaluate My Delivery</span>';
    }
    if (statusTxt) {
      statusTxt.innerHTML = '<span style="color:var(--cyan)">🔴 Recording live audio... Speak with confidence (target: 130 WPM, Headline Metric in Sentence 1).</span>';
    }

    const timerTxt = document.getElementById('ve-timer');
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      const sec = Math.floor((Date.now() - recordStartTime) / 1000);
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (timerTxt) timerTxt.textContent = `${mm}:${ss}`;
    }, 300);
  }

  async function stopVoiceRecording(shouldEvaluate) {
    isRecording = false;
    clearInterval(timerInterval);
    if (animFrameId) cancelAnimationFrame(animFrameId);

    const durationSec = Math.max(1, (Date.now() - recordStartTime) / 1000);

    if (speechRecognition) {
      try {
        speechRecognition.stop();
      } catch (e) {}
      speechRecognition = null;
    }

    if (audioContext) {
      try {
        audioContext.close();
      } catch (e) {}
      audioContext = null;
    }

    const finalizePromise = new Promise(resolve => {
      if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        resolve();
        return;
      }
      mediaRecorder.onstop = () => resolve();
      mediaRecorder.stop();
    });

    await finalizePromise;

    if (activeStream) {
      activeStream.getTracks().forEach(t => t.stop());
      activeStream = null;
    }

    document.querySelectorAll('.ve-wave-bar').forEach(b => {
      b.style.height = '6px';
    });

    if (!shouldEvaluate) {
      resetRecorderUI();
      return;
    }

    const recBtn = document.getElementById('ve-record-btn');
    const statusTxt = document.getElementById('ve-status-text');
    if (recBtn) {
      recBtn.className = 've-mic-btn';
      recBtn.disabled = true;
      recBtn.innerHTML = '<span>⏳</span><span>Transcribing &amp; Evaluating...</span>';
    }
    if (statusTxt) {
      statusTxt.innerHTML = '<span style="color:var(--violet)">⚡ Transcribing audio with <strong>gemini-3.5-transcribe</strong> &amp; analyzing tone, WPM cadence, and structure...</span>';
    }

    const mimeType = (mediaRecorder && mediaRecorder.mimeType) || 'audio/webm';
    const audioBlob = new Blob(audioChunks, { type: mimeType });
    if (lastRecordedAudioUrl) URL.revokeObjectURL(lastRecordedAudioUrl);
    lastRecordedAudioUrl = URL.createObjectURL(audioBlob);

    const qInput = document.getElementById('ve-question-input');
    const questionText = qInput ? qInput.value.trim() : currentEvalContext.question;

    try {
      const audioBase64 = await blobToBase64(audioBlob);
      const response = await fetch('./api/voice/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64,
          mimeType: mimeType.split(';')[0] || 'audio/webm',
          durationSec,
          questionText,
          referenceAnswer: currentEvalContext.reference,
          contextLabel: currentEvalContext.topic,
          fallbackTranscript: browserTranscript,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      renderVoiceEvaluationResults(data);
      if (typeof window.addXP === 'function') window.addXP(35);
    } catch (err) {
      // Fallback if running on static GitHub Pages without Node backend
      const fallbackData = buildLocalFallbackEvaluation(
        browserTranscript,
        durationSec,
        questionText,
        currentEvalContext.reference
      );
      renderVoiceEvaluationResults(fallbackData);
      if (typeof window.addXP === 'function') window.addXP(25);
    } finally {
      if (recBtn) {
        recBtn.disabled = false;
        recBtn.innerHTML = '<span>🎙️</span><span>Record Another Take</span>';
      }
      if (statusTxt) {
        statusTxt.textContent = 'Evaluation complete! Review your tone & presentation scorecard below or record another take.';
      }
    }
  }

  function renderVoiceEvaluationResults(data) {
    const container = document.getElementById('ve-results-container');
    if (!container) return;

    const { transcript, metrics, evaluation } = data;
    const wpmColor =
      metrics.wpm >= 115 && metrics.wpm <= 155
        ? 'var(--lime)'
        : metrics.wpm >= 90 && metrics.wpm <= 170
        ? 'var(--amber)'
        : 'var(--rose)';
    const wpmTag =
      metrics.wpm >= 115 && metrics.wpm <= 155
        ? 'Optimal Executive Pace (120–150 WPM)'
        : metrics.wpm < 90
        ? 'Slow Pace (<90 WPM · Token Starvation Risk)'
        : metrics.wpm < 115
        ? 'Moderate Pace (Aim for 125–140 WPM)'
        : 'Fast Pace (>155 WPM · Add Strategic Pauses)';

    const scoreColor =
      evaluation.overallScore >= 80
        ? 'var(--cyan)'
        : evaluation.overallScore >= 65
        ? 'var(--amber)'
        : 'var(--rose)';

    container.innerHTML = `
      <div class="ve-scorecard">
        <!-- Audio Playback + Verbatim Transcript -->
        <div class="ve-transcript-box">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem">
            <span style="font-size:0.72rem;font-weight:800;color:var(--cyan);letter-spacing:0.06em;text-transform:uppercase">📝 Verbatim Transcript (gemini-3.5-transcribe)</span>
            ${
              lastRecordedAudioUrl
                ? `<audio controls src="${lastRecordedAudioUrl}" style="height:30px;max-width:220px"></audio>`
                : ''
            }
          </div>
          <p class="ve-transcript-text">${
            transcript
              ? `"${transcript}"`
              : '<em style="color:var(--text-muted)">No clear speech was captured. Make sure your mic is unmuted and try speaking for 15–45 seconds.</em>'
          }</p>
        </div>

        <!-- Telemetry Bar: WPM, Fillers, Duration -->
        <div class="ve-telemetry-grid">
          <div class="ve-stat-box">
            <span class="ve-stat-lbl">Speaking Velocity</span>
            <span class="ve-stat-val" style="color:${wpmColor}">${metrics.wpm} WPM</span>
            <span class="ve-stat-sub">${wpmTag}</span>
          </div>
          <div class="ve-stat-box">
            <span class="ve-stat-lbl">Filler Control</span>
            <span class="ve-stat-val" style="color:${metrics.fillerCount === 0 ? 'var(--lime)' : 'var(--amber)'}">${metrics.fillerCount} Fillers</span>
            <span class="ve-stat-sub">${
              metrics.fillerCount === 0
                ? '10/10 Clean Delivery'
                : (metrics.detectedFillers || []).join(', ')
            }</span>
          </div>
          <div class="ve-stat-box">
            <span class="ve-stat-lbl">Response Length</span>
            <span class="ve-stat-val" style="color:var(--sky)">${metrics.wordCount} Words</span>
            <span class="ve-stat-sub">Duration: ${metrics.durationSec}s</span>
          </div>
        </div>

        <!-- 4-Pillar Score Strip -->
        <div class="ve-pillars-grid">
          <div class="ve-pillar-card" style="border-color:${scoreColor}">
            <div class="ve-pillar-num" style="color:${scoreColor}">${evaluation.overallScore}<small>/100</small></div>
            <div class="ve-pillar-lbl">Overall Readiness</div>
          </div>
          <div class="ve-pillar-card">
            <div class="ve-pillar-num" style="color:var(--cyan)">${evaluation.toneScore}<small>/10</small></div>
            <div class="ve-pillar-lbl">Tone &amp; Authority</div>
          </div>
          <div class="ve-pillar-card">
            <div class="ve-pillar-num" style="color:var(--violet)">${evaluation.presentationScore}<small>/10</small></div>
            <div class="ve-pillar-lbl">Presentation &amp; Structure</div>
          </div>
          <div class="ve-pillar-card">
            <div class="ve-pillar-num" style="color:var(--lime)">${evaluation.technicalScore}<small>/10</small></div>
            <div class="ve-pillar-lbl">Technical Depth</div>
          </div>
        </div>

        <!-- Bar-Raiser Verdict & Tone Analysis -->
        <div class="ve-analysis-card">
          <div class="ve-verdict-banner">
            <strong>🎯 Bar-Raiser Verdict:</strong> ${evaluation.executiveVerdict}
          </div>
          <div class="ve-feedback-row">
            <div>
              <h5>🎙️ Answering Tone &amp; Vocal Authority</h5>
              <p>${evaluation.toneAndDeliveryAnalysis}</p>
            </div>
            <div>
              <h5>📐 Presentation Structure (Metric &rarr; Math &rarr; Impact)</h5>
              <p>${evaluation.structureFeedback}</p>
            </div>
          </div>
          <div class="ve-feedback-row" style="margin-top:0.85rem">
            <div class="ve-list-box good">
              <h5>✅ What Landed Well</h5>
              <ul>${(evaluation.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="ve-list-box fix">
              <h5>🔧 High-Impact Adjustments</h5>
              <ul>${(evaluation.improvements || []).map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
          </div>
        </div>

        <!-- Upgraded 130-WPM Executive Script -->
        <div class="ve-upgraded-box">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem">
            <span style="font-size:0.74rem;font-weight:800;color:var(--lime);text-transform:uppercase;letter-spacing:0.06em">⚡ Model 130-WPM Executive Answer (Read Aloud &amp; Re-Test)</span>
            <button type="button" class="btn-sm accent" onclick="speakUpgradedScript(this)">🔊 Listen at 130 WPM</button>
          </div>
          <p id="ve-upgraded-script-text" style="font-size:0.84rem;color:var(--text-primary);line-height:1.65">${evaluation.upgradedScript}</p>
        </div>
      </div>
    `;
  }

  window.speakUpgradedScript = function (btn) {
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (btn) btn.textContent = '🔊 Listen at 130 WPM';
      return;
    }
    const textEl = document.getElementById('ve-upgraded-script-text');
    if (!textEl) return;
    const utter = new SpeechSynthesisUtterance(textEl.innerText);
    utter.rate = 1.05;
    utter.onend = () => {
      if (btn) btn.textContent = '🔊 Listen at 130 WPM';
    };
    if (btn) btn.textContent = '⏹️ Stop Audio';
    window.speechSynthesis.speak(utter);
  };

  // Dictate directly into AI Mentor input using gemini-3.5-transcribe
  let mentorMicRecorder = null;
  let mentorMicStream = null;
  let mentorMicChunks = [];
  let isMentorMicRecording = false;

  window.toggleMentorMicInput = async function (btn) {
    const inputEl = document.getElementById('mentor-user-input');
    if (!inputEl) return;

    if (isMentorMicRecording) {
      isMentorMicRecording = false;
      if (btn) {
        btn.innerHTML = '⏳';
        btn.disabled = true;
      }
      const stopDone = new Promise(resolve => {
        if (!mentorMicRecorder || mentorMicRecorder.state === 'inactive') return resolve();
        mentorMicRecorder.onstop = () => resolve();
        mentorMicRecorder.stop();
      });
      await stopDone;
      if (mentorMicStream) {
        mentorMicStream.getTracks().forEach(t => t.stop());
        mentorMicStream = null;
      }
      const mimeType = (mentorMicRecorder && mentorMicRecorder.mimeType) || 'audio/webm';
      const blob = new Blob(mentorMicChunks, { type: mimeType });
      try {
        const audioBase64 = await blobToBase64(blob);
        const res = await fetch('./api/voice/transcribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            audioBase64,
            mimeType: mimeType.split(';')[0] || 'audio/webm',
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.transcript) {
            inputEl.value = (inputEl.value ? inputEl.value + ' ' : '') + data.transcript;
            inputEl.focus();
          }
        }
      } catch (e) {
        console.error('Dictation error:', e);
      } finally {
        if (btn) {
          btn.innerHTML = '🎙️';
          btn.disabled = false;
          btn.classList.remove('recording');
        }
      }
      return;
    }

    try {
      mentorMicStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mentorMicChunks = [];
      isMentorMicRecording = true;
      const mimeType = getSupportedMimeType();
      mentorMicRecorder = mimeType
        ? new MediaRecorder(mentorMicStream, { mimeType })
        : new MediaRecorder(mentorMicStream);
      mentorMicRecorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) mentorMicChunks.push(e.data);
      };
      mentorMicRecorder.start(250);
      if (btn) {
        btn.innerHTML = '⏹️';
        btn.classList.add('recording');
      }
    } catch (err) {
      if (typeof showPWAStatusToast === 'function') {
        showPWAStatusToast('⚠️ Please allow microphone access to dictate with gemini-3.5-transcribe.');
      }
    }
  };
})();
