/* ═══════════════════════════════════════════════════
   learn.js — Structured 4-Stage Learning Curriculum
   Linear, clean, distraction-free syllabus with lesson viewer,
   formula sheets, and automatic study journal logging.
   ═══════════════════════════════════════════════════ */

(function () {
  const CURRICULUM_STAGES = [
    {
      stageId: 'stage_1',
      num: '01',
      color: 'cyan',
      title: 'Python, SQL & Data Engineering',
      desc: 'Master production-clean OOP, advanced SQL window functions, CTEs, and rigorous exploratory data analysis.',
      lessons: [
        {
          id: 'py_oop',
          title: '01. Python OOP, Memory Streaming & Generators',
          time: '25 mins',
          tag: 'Python',
          keyFormula: 'yield vs return | O(1) memory streaming over large datasets',
          hook: 'Never load a 10GB log file into RAM with readlines(). Use a generator yield function to stream chunk by chunk.',
          code: `def stream_large_dataset(filepath, chunk_size=1024):\n    """Generator to stream massive CSVs in O(1) memory."""\n    with open(filepath, 'r') as f:\n        header = f.readline().strip().split(',')\n        chunk = []\n        for line in f:\n            chunk.append(line.strip().split(','))\n            if len(chunk) >= chunk_size:\n                yield chunk\n                chunk = []\n        if chunk:\n            yield chunk`
        },
        {
          id: 'sql_window',
          title: '02. SQL Window Functions, CTEs & Island-Gaps',
          time: '35 mins',
          tag: 'SQL',
          keyFormula: 'ROW_NUMBER() vs RANK() vs DENSE_RANK() | LEAD / LAG',
          hook: 'Always use DENSE_RANK() for "Nth highest salary" so shared ties never leave gaps in ranking.',
          code: `WITH ranked_telemetry AS (\n  SELECT \n    sensor_id,\n    recorded_at,\n    energy_kwh,\n    LAG(energy_kwh, 1) OVER (PARTITION BY sensor_id ORDER BY recorded_at) AS prev_kwh,\n    DENSE_RANK() OVER (PARTITION BY sensor_id ORDER BY energy_kwh DESC) AS rank_peak\n  FROM sensor_logs\n)\nSELECT sensor_id, recorded_at, energy_kwh, (energy_kwh - prev_kwh) AS delta_spike\nFROM ranked_telemetry\nWHERE delta_spike > 50.0;`
        },
        {
          id: 'eda_15pt',
          title: '03. 15-Point Exploratory Data Analysis & Outliers',
          time: '30 mins',
          tag: 'EDA',
          keyFormula: 'IQR = Q3 - Q1 | Outlier Filter: [Q1 - 1.5*IQR, Q3 + 1.5*IQR]',
          hook: 'Never drop outliers blindly. In sensor telemetry, an outlier is often the exact anomaly you are paid to detect.',
          code: `def audit_telemetry_iqr(df, col):\n    q1 = df[col].quantile(0.25)\n    q3 = df[col].quantile(0.75)\n    iqr = q3 - q1\n    lower_bound = q1 - (1.5 * iqr)\n    upper_bound = q3 + (1.5 * iqr)\n    anomalies = df[(df[col] < lower_bound) | (df[col] > upper_bound)]\n    print(f"Col {col}: Found {len(anomalies)} anomalies ({len(anomalies)/len(df)*100:.2f}%)")\n    return lower_bound, upper_bound`
        }
      ]
    },
    {
      stageId: 'stage_2',
      num: '02',
      color: 'violet',
      title: 'Machine Learning & Mathematical Optimization',
      desc: 'First-principles math for supervised and unsupervised algorithms, loss surfaces, and generalization metrics.',
      lessons: [
        {
          id: 'ml_elasticnet',
          title: '04. Multi-Task Elastic Net (L1/L2) vs Random Forest',
          time: '40 mins',
          tag: 'Classical ML',
          keyFormula: 'Loss = MSE + λ1||W||1 + λ2||W||2^2',
          hook: 'When p > n with severe collinearity, Random Forest splits arbitrarily. Elastic Net enforces group sparsity with L1 while stabilizing weights with L2.',
          code: `from sklearn.linear_model import MultiTaskElasticNet\n\n# L1_ratio=0.5 balances Lasso row-sparsity and Ridge coefficient grouping\nmodel = MultiTaskElasticNet(alpha=0.1, l1_ratio=0.5, max_iter=2000)\nmodel.fit(X_train_scaled, Y_multi_output_distributions)\npredictions = model.predict(X_test_scaled)`
        },
        {
          id: 'ml_clustering',
          title: '05. Unsupervised Learning: PCA & K-Means Regimes',
          time: '30 mins',
          tag: 'Clustering',
          keyFormula: 'Silhouette Score s = (b - a) / max(a, b) ∈ [-1, 1]',
          hook: 'Always scale features with StandardScaler prior to K-Means; otherwise high-variance columns dictate Euclidean distances entirely.',
          code: `from sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.cluster import KMeans\n\nX_scaled = StandardScaler().fit_transform(X_raw)\npca = PCA(n_components=3)\nX_pca = pca.fit_transform(X_scaled)\nkmeans = KMeans(n_clusters=3, random_state=42, n_init='auto').fit(X_pca)\nregimes = kmeans.labels_`
        },
        {
          id: 'ml_metrics',
          title: '06. Loss Functions & The R² Paradox in Non-Stationary Series',
          time: '30 mins',
          tag: 'Metrics',
          keyFormula: 'R² = 1 - (SS_res / SS_tot) | MAPE = (100/n) * Σ |y - ŷ| / y',
          hook: 'A naive persistence model predicting y[t] = y[t-1] on raw non-stationary stock prices easily scores R²=0.99 while failing to predict actual direction! Always predict stationary log-returns.',
          code: `import numpy as np\n\ndef compute_stationary_returns(prices):\n    """Log returns remove non-stationary mean drift."""\n    return np.log(prices[1:] / prices[:-1])`
        }
      ]
    },
    {
      stageId: 'stage_3',
      num: '03',
      color: 'amber',
      title: 'Deep Learning & Time-Series Modeling',
      desc: 'Architectures for sequential signals and computer vision: Swin-TransUNet, RevIN normalization, and PatchTST.',
      lessons: [
        {
          id: 'dl_cnn_vision',
          title: '07. Computer Vision: CNNs, Receptive Fields & Swin-TransUNet',
          time: '45 mins',
          tag: 'Vision',
          keyFormula: 'Receptive Field r_k = r_{k-1} + (f_k - 1) * s_{k-1}',
          hook: 'Swin-TransUNet uses Shifted Window local attention to maintain O(N) linear compute rather than O(N^2) quadratic global attention.',
          code: `import torch\nimport torch.nn as nn\n\nclass ConvBlock(nn.Module):\n    def __init__(self, in_c, out_c):\n        super().__init__()\n        self.conv = nn.Sequential(\n            nn.Conv2d(in_c, out_c, kernel_size=3, padding=1, bias=False),\n            nn.BatchNorm2d(out_c),\n            nn.ReLU(inplace=True)\n        )\n    def forward(self, x):\n        return self.conv(x)`
        },
        {
          id: 'dl_revin_lstm',
          title: '08. Sequential Signals: LSTM Gates & RevIN Normalization',
          time: '40 mins',
          tag: 'Time-Series',
          keyFormula: 'x_norm = (x - mean) / std | y_pred = y_norm * std + mean',
          hook: 'Reversible Instance Normalization (RevIN) strips mean/variance shifts prior to LSTM layers, then reverses the affine scaling on predictions to neutralize temporal drift.',
          code: `class RevIN(nn.Module):\n    def __init__(self, num_features, eps=1e-5):\n        super().__init__()\n        self.eps = eps\n    def forward(self, x, mode='norm'):\n        if mode == 'norm':\n            self.mean = torch.mean(x, dim=1, keepdim=True).detach()\n            self.stdev = torch.sqrt(torch.var(x, dim=1, keepdim=True, unbiased=False) + self.eps).detach()\n            return (x - self.mean) / self.stdev\n        elif mode == 'denorm':\n            return (x * self.stdev) + self.mean`
        },
        {
          id: 'dl_patchtst',
          title: '09. PatchTST: Multi-Horizon Attention over Patched Time Steps',
          time: '35 mins',
          tag: 'Transformers',
          keyFormula: 'Self-Attention: Softmax(Q K^T / sqrt(d_k)) V',
          hook: 'PatchTST aggregates contiguous time slices into token patches, capturing multi-scale seasonal cycles across 1D, 3D, and 7D horizons.',
          code: `def create_patches(time_series, patch_len=16, stride=8):\n    """Extract overlapping 1D patches for Transformer tokenization."""\n    patches = time_series.unfold(dimension=-1, size=patch_len, step=stride)\n    return patches`
        }
      ]
    },
    {
      stageId: 'stage_4',
      num: '04',
      color: 'rose',
      title: 'Generative AI, RAG & Production Systems',
      desc: 'Enterprise RAG pipelines, RAGAS automated evaluations, LangGraph multi-agent routing, and containerized FastAPI serving (JD 102).',
      lessons: [
        {
          id: 'genai_ragas',
          title: '10. The RAGAS Triad: Context Precision, Faithfulness & Relevance',
          time: '45 mins',
          tag: 'GenAI & RAG',
          keyFormula: 'Faithfulness = (Claims supported by context) / (Total claims in answer)',
          hook: 'Never deploy RAG with only manual inspection. Use RAGAS automated evaluation gates in CI/CD with Faithfulness >= 0.90.',
          code: `# Evaluating Faithfulness via NLI Premise Entailment\ndef calculate_faithfulness(retrieved_context, generated_claims):\n    supported = 0\n    for claim in generated_claims:\n        if nli_entails(premise=retrieved_context, hypothesis=claim):\n            supported += 1\n    return supported / len(generated_claims) if generated_claims else 0.0`
        },
        {
          id: 'genai_hybrid_rrf',
          title: '11. Hybrid Search & Reciprocal Rank Fusion (RRF)',
          time: '35 mins',
          tag: 'Retrieval',
          keyFormula: 'RRF_Score(d) = Σ 1 / (60 + rank_m(d))',
          hook: 'Dense bi-encoders miss exact serial codes and part numbers. Combine BM25 sparse keyword search with dense embeddings using RRF, then re-rank with a cross-encoder.',
          code: `def reciprocal_rank_fusion(dense_ranks, bm25_ranks, k=60):\n    rrf_scores = {}\n    for doc_id, r in dense_ranks.items():\n        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0) + (1.0 / (k + r))\n    for doc_id, r in bm25_ranks.items():\n        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0) + (1.0 / (k + r))\n    return sorted(rrf_scores.items(), key=lambda x: x[1], reverse=True)`
        },
        {
          id: 'genai_langgraph',
          title: '12. LangGraph StateGraph, Cyclic Agents & Critic Gates',
          time: '45 mins',
          tag: 'Agentic Workflows',
          keyFormula: 'StateGraph + Conditional Routing + recursion_limit = Safe Cycles',
          hook: 'Single prompt chains fail on complex compliance docs. Use a 4-agent graph with an Extractor, Drafter, and Critic gate (target >= 8.5/10) that loops on failure.',
          code: `from typing import TypedDict\n\nclass AgentState(TypedDict):\n    doc_chunks: list[str]\n    draft: str\n    critic_score: float\n    iteration: int\n\ndef route_critic(state: AgentState):\n    if state["critic_score"] >= 8.5 or state["iteration"] >= 5:\n        return "publish_node"\n    return "revise_node"`
        },
        {
          id: 'genai_fastapi_docker',
          title: '13. FastAPI Microservices, Pydantic Schema & Docker',
          time: '40 mins',
          tag: 'Production Serving',
          keyFormula: 'Pydantic BaseModel + Async def + Docker Multi-Stage Build',
          hook: 'Always return strictly validated Pydantic JSON from LLM endpoints so client contracts never receive raw hallucinated markdown fences.',
          code: `from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel, Field\n\napp = FastAPI(title="NeuroForge Inference Microservice")\n\nclass RAGRequest(BaseModel):\n    query: str = Field(..., min_length=3)\n    top_k: int = Field(5, ge=1, le=20)\n\nclass RAGResponse(BaseModel):\n    answer: str\n    faithfulness_score: float\n    sources: list[str]\n\n@app.post("/api/v1/query", response_model=RAGResponse)\nasync def execute_rag(req: RAGRequest):\n    return {"answer": "...", "faithfulness_score": 0.94, "sources": ["chunk_12"]}`
        }
      ]
    }
  ];

  window.renderLearnPage = function () {
    const container = document.getElementById('learn-content');
    if (!container) return;

    let dailyProg = { completedIds: [] };
    try {
      dailyProg = JSON.parse(localStorage.getItem('nf_daily_study_progress') || '{}');
    } catch (e) {}
    const completedSet = new Set(dailyProg.completedIds || []);

    const totalLessons = CURRICULUM_STAGES.reduce((acc, s) => acc + s.lessons.length, 0);
    const completedCount = completedSet.size;
    const progressPct = Math.round((completedCount / totalLessons) * 100);

    container.innerHTML = `
      <!-- TOP BANNER -->
      <div class="glass-card" style="margin-bottom:2rem;padding:1.5rem;border-color:rgba(0,255,200,0.3);background:linear-gradient(135deg,rgba(0,255,200,0.06),rgba(99,102,241,0.06));border-radius:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
          <div>
            <div class="cheatsheet-kicker">📖 STEP-BY-STEP AI &amp; ML CURRICULUM · JD 102 ALIGNED</div>
            <h2 style="margin:0.25rem 0 0.5rem">Structured Learning Syllabus</h2>
            <p style="margin:0;color:var(--text-secondary);font-size:0.9rem">
              Progress through 4 clean stages with zero duplicate noise. Each lesson includes the core mathematical formula, interview hook, and production code.
            </p>
          </div>
          <div style="background:rgba(0,0,0,0.35);padding:0.9rem 1.4rem;border-radius:12px;border:1px solid rgba(255,255,255,0.08);text-align:right">
            <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:0.06em">Overall Progress</div>
            <div style="font-size:1.75rem;font-weight:800;color:var(--cyan);font-family:var(--font-mono)">${completedCount} / ${totalLessons}</div>
            <div style="font-size:0.75rem;color:var(--lime)">${progressPct}% Completed</div>
          </div>
        </div>
      </div>

      <!-- 4 PROGRESSIVE STAGES -->
      <div style="display:flex;flex-direction:column;gap:2rem">
        ${CURRICULUM_STAGES.map(stage => `
          <div class="glass-card" style="padding:1.5rem;border-color:rgba(255,255,255,0.08);border-left:4px solid var(--${stage.color})">
            <!-- Stage Header -->
            <div style="margin-bottom:1.25rem">
              <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;color:var(--${stage.color});text-transform:uppercase">
                STAGE ${stage.num} · ${stage.lessons.length} CORE LESSONS
              </div>
              <h3 style="margin:0.25rem 0 0.4rem;font-size:1.25rem">${stage.title}</h3>
              <p style="margin:0;font-size:0.85rem;color:var(--text-secondary)">${stage.desc}</p>
            </div>

            <!-- Lessons List -->
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem">
              ${stage.lessons.map(lesson => {
                const isDone = completedSet.has(lesson.id);
                return `
                  <div class="glass-card" style="padding:1.1rem;background:rgba(255,255,255,0.02);border-color:${isDone ? 'rgba(132,204,22,0.4)' : 'rgba(255,255,255,0.06)'};display:flex;flex-direction:column;justify-content:space-between">
                    <div>
                      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem">
                        <span class="tag ${stage.color}" style="font-size:0.65rem;padding:0.15rem 0.45rem">${lesson.tag}</span>
                        <span style="font-size:0.7rem;color:var(--text-muted);font-family:var(--font-mono)">⏱ ${lesson.time}</span>
                      </div>
                      <h4 style="margin:0 0 0.5rem;font-size:0.95rem;color:var(--text-primary)">${lesson.title}</h4>
                      <div style="font-size:0.78rem;color:var(--cyan);font-family:var(--font-mono);margin-bottom:0.6rem;background:rgba(0,255,200,0.04);padding:0.35rem 0.5rem;border-radius:5px;border:1px solid rgba(0,255,200,0.15)">
                        ${lesson.keyFormula}
                      </div>
                    </div>

                    <div style="display:flex;gap:0.5rem;align-items:center;margin-top:0.75rem">
                      <button class="btn-sm" onclick="openLessonModal('${lesson.id}')" style="flex:1;font-size:0.75rem">
                        📖 Open Lesson
                      </button>
                      <button class="btn-sm" onclick="toggleCompleteLesson('${lesson.id}', '${lesson.title.replace(/'/g, "\\'")}')" style="border-color:${isDone ? 'var(--lime)' : 'var(--border)'};color:${isDone ? 'var(--lime)' : 'var(--text-muted)'};font-size:0.75rem">
                        ${isDone ? '✓ Done' : '○ Mark Done'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- LESSON VIEWER MODAL CONTAINER -->
      <div id="lesson-viewer-modal" class="pwa-modal-backdrop" onclick="if(event.target===this) closeLessonModal()" aria-hidden="true">
        <div class="pwa-modal-card glass-card" style="max-width:760px" role="dialog" aria-modal="true">
          <div class="pwa-modal-header">
            <div>
              <div class="cheatsheet-kicker" id="modal-lesson-tag">📖 LESSON STUDY VIEW</div>
              <h3 id="modal-lesson-title" style="margin:0.25rem 0 0">Lesson Title</h3>
            </div>
            <button type="button" class="pwa-modal-close" onclick="closeLessonModal()" aria-label="Close lesson">✕</button>
          </div>
          <div class="pwa-modal-body" id="modal-lesson-body" style="padding:1.5rem">
            <!-- Dynamic Content -->
          </div>
          <div class="pwa-modal-footer" style="display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem">
            <span style="font-size:0.78rem;color:var(--text-muted)">Press Esc anytime to close</span>
            <button type="button" class="btn-sm accent" id="modal-complete-btn" onclick="completeCurrentModalLesson()">✓ Mark Lesson Complete (+25 XP)</button>
          </div>
        </div>
      </div>
    `;
  };

  let activeModalLesson = null;

  window.openLessonModal = function (lessonId) {
    let found = null;
    for (const s of CURRICULUM_STAGES) {
      for (const l of s.lessons) {
        if (l.id === lessonId) { found = l; break; }
      }
      if (found) break;
    }
    if (!found) return;

    activeModalLesson = found;
    const modal = document.getElementById('lesson-viewer-modal');
    const titleEl = document.getElementById('modal-lesson-title');
    const tagEl = document.getElementById('modal-lesson-tag');
    const bodyEl = document.getElementById('modal-lesson-body');

    if (titleEl) titleEl.textContent = found.title;
    if (tagEl) tagEl.textContent = `📖 ${found.tag.toUpperCase()} · ⏱ ${found.time}`;

    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="mentor-desk-note" style="margin-bottom:1.25rem">
          <div class="mentor-desk-header">👨‍🏫 10-Second Interview Defense Hook</div>
          <p style="margin:0.35rem 0 0;font-size:0.88rem;color:var(--text)"><em>"${found.hook}"</em></p>
        </div>

        <div style="margin-bottom:1.25rem">
          <h4 style="font-size:0.85rem;color:var(--cyan);text-transform:uppercase;letter-spacing:0.06em;margin:0 0 0.4rem">Core Formula &amp; Invariant</h4>
          <div style="background:rgba(0,0,0,0.4);padding:0.75rem 1rem;border-radius:8px;font-family:var(--font-mono);font-size:0.85rem;border:1px solid rgba(0,255,200,0.2);color:var(--cyan)">
            ${found.keyFormula}
          </div>
        </div>

        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem">
            <h4 style="font-size:0.85rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin:0">Production Python Implementation</h4>
            <button class="copy-code-btn" onclick="copyCode(this)" style="font-size:0.7rem;padding:0.15rem 0.5rem">Copy</button>
          </div>
          <pre class="code-block" style="background:#05050c;padding:1rem;border-radius:8px;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);font-size:0.82rem;font-family:var(--font-mono);line-height:1.5"><code>${found.code}</code></pre>
        </div>
      `;
    }

    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  window.closeLessonModal = function () {
    const modal = document.getElementById('lesson-viewer-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
    activeModalLesson = null;
  };

  window.completeCurrentModalLesson = function () {
    if (!activeModalLesson) return;
    window.toggleCompleteLesson(activeModalLesson.id, activeModalLesson.title);
    window.closeLessonModal();
  };

  window.toggleCompleteLesson = function (lessonId, lessonTitle) {
    let dailyProg = { completedIds: [], count: 0, date: '' };
    try {
      dailyProg = JSON.parse(localStorage.getItem('nf_daily_study_progress') || '{}');
      if (!Array.isArray(dailyProg.completedIds)) dailyProg.completedIds = [];
    } catch (e) {
      dailyProg = { completedIds: [], count: 0, date: '' };
    }

    const idx = dailyProg.completedIds.indexOf(lessonId);
    if (idx === -1) {
      dailyProg.completedIds.push(lessonId);
      dailyProg.count = (dailyProg.count || 0) + 1;
      window.addXP(25);
      if (typeof window.logStudyActivity === 'function') {
        window.logStudyActivity('module_completed', 'Completed Lesson: ' + lessonTitle, 25);
      }
    } else {
      dailyProg.completedIds.splice(idx, 1);
      dailyProg.count = Math.max(0, (dailyProg.count || 1) - 1);
    }

    localStorage.setItem('nf_daily_study_progress', JSON.stringify(dailyProg));
    window.renderLearnPage();
  };
})();
