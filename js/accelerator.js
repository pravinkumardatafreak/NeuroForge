/* ═════════════════════════════════════════════════════════════════════
   accelerator.js — Data Science Career Accelerator & Readiness Cockpit
   Personalized Learning, Skill Gap Analysis & Behavioral Interview Suite
   Tailored for Pravin Kumar R · Inspired by GUVI Data Science Framework
   Grounded in 104 Enterprise JDs & Real-World Production Codebases
═════════════════════════════════════════════════════════════════════ */

window.ACCELERATOR_DATA = {
  candidate: {
    name: 'Pravin Kumar R',
    qualification: 'B.E. Civil Engineering (First Class Honors) | Master Data Science (HCL GUVI / IIT Madras Research Park Incubated)',
    verifiedInternship: 'Data Science Intern — Internship Studio (14,102 telemetry records, 89.2% error reduction)',
    overallReadiness: '96.8%',
    tier: 'Tier 1 Enterprise Hire'
  },

  // ── 1. The 10-Step Career Accelerator Learning Path ──
  learningPath: [
    {
      step: '01',
      title: 'Python Fundamentals & Production OOP',
      badge: 'Core Syntax',
      color: 'cyan',
      hours: '30 Hours',
      status: 'Mastered',
      summary: 'Object-Oriented Programming (OOP), dunder methods, generator streaming for large CSVs, decorators, error handling, and PEP-8 modular project design.',
      keyDrill: 'Sliding window generator & schema validator without memory spikes',
      checkpoint: 'Can write clean, modular src/ package with zero monolithic script bloat'
    },
    {
      step: '02',
      title: 'SQL for Data Science & Enterprise Warehouses',
      badge: 'Data Layer',
      color: 'cyan',
      hours: '35 Hours',
      status: 'Mastered',
      summary: 'Multi-table JOINs, Common Table Expressions (CTEs), Window Functions (ROW_NUMBER, DENSE_RANK, LEAD, LAG, SUM OVER), and island-gap grouping.',
      keyDrill: 'Identify consecutive event streaks and compute 7-day rolling metrics in pure SQL',
      checkpoint: 'Can solve any medium-to-hard LeetCode SQL question in under 12 minutes'
    },
    {
      step: '03',
      title: 'Applied Statistics & Probability',
      badge: 'First Principles',
      color: 'violet',
      hours: '25 Hours',
      status: 'Mastered',
      summary: 'Central Limit Theorem, hypothesis testing (t-test, ANOVA, chi-square), Augmented Dickey-Fuller (ADF) stationarity, Earth Mover’s Distance (EMD), and p-value defense.',
      keyDrill: 'Diagnose non-stationary drift and apply first-order differencing',
      checkpoint: 'Explain statistical significance to a business stakeholder without jargon'
    },
    {
      step: '04',
      title: 'Machine Learning Foundations & Optimization',
      badge: 'Core ML',
      color: 'violet',
      hours: '40 Hours',
      status: 'Mastered',
      summary: 'Supervised & unsupervised learning: Multi-Task Elastic Net (L1/L2 penalty), Random Forest, PCA, K-Means clustering, Isolation Forest, and hyperparameter tuning.',
      keyDrill: 'Reconstruct 14,102 records with PCA + K-Means + Random Forest ($R^2 = 0.9979$)',
      checkpoint: 'Defend bias-variance trade-off and mathematical loss surfaces live on whiteboard'
    },
    {
      step: '05',
      title: 'Real-World Data Analysis & 15-Point EDA',
      badge: 'Analytics',
      color: 'amber',
      hours: '30 Hours',
      status: 'Mastered',
      summary: '15-question EDA framework, outlier detection (IQR & Z-score), missing value imputation strategy, distribution transformations, and correlation heatmaps.',
      keyDrill: 'Execute full exploratory data audit with automated anomaly attribution',
      checkpoint: 'Uncover non-obvious business anomalies from raw data in under 15 minutes'
    },
    {
      step: '06',
      title: 'Business Case Studies & ROI Translation',
      badge: 'Business Value',
      color: 'amber',
      hours: '20 Hours',
      status: 'Mastered',
      summary: 'Translating technical metrics ($R^2$, MAPE, Dice) into dollar savings, claim denial prevention, turbine downtime reduction, and construction budget variance defense.',
      keyDrill: 'Translate 2.06% time-series MAPE into $140k quarterly grid penalty avoidance',
      checkpoint: 'Frame every project in terms of bottom-line cost reduction or revenue unlock'
    },
    {
      step: '07',
      title: 'Behavioral Interview Preparation (STAR Method)',
      badge: 'Storytelling',
      color: 'rose',
      hours: '15 Hours',
      status: 'Mastered',
      summary: 'Situation-Task-Action-Result (STAR) methodology, 60-second opening hook, Civil Engineering to Data Science pivot narrative, and pacing calibration (130 WPM).',
      keyDrill: 'Rehearse Civil Engineering transition without apologetic language',
      checkpoint: 'Deliver flawless 2-minute elevator pitch with zero verbal fillers'
    },
    {
      step: '08',
      title: 'Mock Interview Simulations & War Rooms',
      badge: 'Live Readiness',
      color: 'rose',
      hours: '35 Hours',
      status: 'Mastered',
      summary: '45-minute audio-prompted mock interviews across Zoho IT Solutions, Corridor A (Applied AI / Vision), and Corridor B (Industrial Time-Series & ConTech).',
      keyDrill: 'Pass 4-round technical viva under synchronized countdown pressure',
      checkpoint: 'Score $\\ge 90\\%$ on technical accuracy and communication fluidity'
    },
    {
      step: '09',
      title: 'Project Portfolio Development & Code Packaging',
      badge: 'Engineering',
      color: 'cyan',
      hours: '30 Hours',
      status: 'Mastered',
      summary: 'Public GitHub repositories with clean commit history, professional architecture diagrams, Streamlit/FastAPI interactive web apps, Dockerfiles, and Pytest suites.',
      keyDrill: 'Deploy reproducible multi-agent application with automated test coverage',
      checkpoint: 'All GitHub project repos contain working demos and architectural readmes'
    },
    {
      step: '10',
      title: 'Job Application Readiness & Rational JD Matching',
      badge: 'Placement',
      color: 'green',
      hours: '20 Hours',
      status: 'Active',
      summary: '104 enterprise JDs analyzed, 5-Dimension Rational Scoring Formula, strict 1-page ATS-optimized resumes (< 2 MB law), and early-career band targeting (0-2 YOE).',
      keyDrill: 'Calculate objective 5-dimension rational match score before any application',
      checkpoint: 'Submit high-density tailored resumes with >90 ATS semantic alignment'
    }
  ],

  // ── 2. The 6-Dimension Skill Gap Analysis ──
  skillGaps: [
    {
      dimension: 'Python & Modular OOP',
      weight: 20,
      score: 98,
      status: 'Mastered',
      evidence: 'Clean src/ packages, generators, decorators, Pydantic schemas in ERIA and NeuroForge.',
      gap: 'None. Stronger than 95% of freshers.'
    },
    {
      dimension: 'Relational SQL & Query Architecture',
      weight: 15,
      score: 96,
      status: 'Mastered',
      evidence: 'Window functions (LEAD/LAG, DENSE_RANK), CTEs, island-gap grouping, CPWD BOQ joins.',
      gap: 'Maintain active weekly LeetCode SQL drills to keep mental retrieval latency under 30s.'
    },
    {
      dimension: 'Classical ML & Statistical Modeling',
      weight: 20,
      score: 97,
      status: 'Mastered',
      evidence: '14,102 telemetry records ($R^2=0.9979$), Multi-Task Elastic Net, PCA, K-Means, ADF tests.',
      gap: 'Ensure clear articulation of L1 (Lasso) vs L2 (Ridge) penalty geometry on whiteboards.'
    },
    {
      dimension: 'Deep Learning & Applied GenAI',
      weight: 20,
      score: 96,
      status: 'Mastered',
      evidence: 'PyTorch Swin-TransUNet, RevIN LSTM, 4-agent LangChain with Groq LLaMA 3.3 70B & Critic gates.',
      gap: 'Stay grounded in deterministic evaluation; never claim toy prompt-engineering is AI architecture.'
    },
    {
      dimension: 'Business Case Studies & ROI',
      weight: 15,
      score: 95,
      status: 'Mastered',
      evidence: '89.2% error reduction on industrial sensor telemetry, automated BOQ variance audits.',
      gap: 'Always lead with the dollar outcome before explaining technical hyperparameters.'
    },
    {
      dimension: 'Behavioral & STAR Communication',
      weight: 10,
      score: 98,
      status: 'Mastered',
      evidence: 'Structured STAR stories, pacing calibrated at 120-130 WPM, Civil Engineering moat.',
      gap: 'Practice active listening; never interrupt interviewer before fully grasping the edge case.'
    }
  ],

  // ── 3. The 4 Battle-Tested STAR Stories for Pravin ──
  starStories: [
    {
      id: 'star-1',
      title: 'The Unfair Moat: Civil Engineering Honours to Data Science Transition',
      category: 'Career Pivot / Motivation',
      situation: 'Graduated with First Class Honours in Civil Engineering from Rajalakshmi Engineering College (Anna University) with a 7.7 CGPA, working with structural calculus, spatial stress tensors, and physical materials.',
      task: 'Recognized that modern civil engineering is fundamentally limited by manual estimation, empirical tables, and unmodeled sensor telemetry. Decided to systematically transition into Data Science through the intensive Master Data Science program at HCL GUVI (IIT Madras Research Park Incubated).',
      action: 'Rather than treating my Civil Engineering degree as a sunk cost, I leveraged it as an analytical moat. I mastered Python, advanced SQL, and linear algebra, then built production systems directly at the intersection: parsing 3D IFC4 BIM architectural geometry using IfcOpenShell, predicting non-stationary sensor telemetry with PyTorch RevIN LSTM, and calibrating physical camera pixels (OpenCV PPM) to quantify soil grain distribution.',
      result: 'Graduated from GUVI with mastery across the complete Data Science and Deep Learning stack, published 8+ public GitHub production codebases, and earned top 1% technical evaluations by grounding machine learning models in real-world physical systems.'
    },
    {
      id: 'star-2',
      title: 'High-Impact Industrial Regressor at Internship Studio',
      category: 'Professional Experience / Quantitative Impact',
      situation: 'During my Data Science Internship at Internship Studio (Analytics & EdTech), the baseline prediction model for student telemetry and calorie expenditure suffered from massive variance, exhibiting a Mean Absolute Error (MAE) of 34.97 kcal and an R² of only 0.81.',
      task: 'I was assigned to build an end-to-end telemetry regressor across 14,102 records that could achieve production-grade precision, eliminate severe outliers, and explain feature importance to non-technical stakeholders.',
      action: 'I designed a 4-stage data pipeline: (1) Robust IQR data auditing and standardization across 14,102 rows; (2) Unsupervised PCA and K-Means clustering to segment user behavioral regimes; (3) Feature interaction engineering combining metabolic equivalent metrics with temporal activity durations; and (4) An optimized Random Forest Regressor tuned via 5-fold cross-validation with TreeSHAP feature attribution.',
      result: 'Slashed MAE from 34.97 down to 3.78 kcal—an 89.2% error reduction—while lifting R² to 0.9979. The model was packaged as a modular, reproducible Python pipeline and adopted by the analytics team for live reporting.'
    },
    {
      id: 'star-3',
      title: 'Eliminating Hallucinations in Multi-Agent GenAI (ERIA)',
      category: 'Applied AI / Production Architecture',
      situation: 'Traditional LLM summarization systems fail when processing dense, multi-page educational policy and regulatory documents because single-prompt zero-shot calls frequently hallucinate, omit critical compliance clauses, and exceed latency budgets.',
      task: 'Architect an autonomous multi-agent pipeline capable of parsing complex PDF regulations, extracting structured quantitative impacts, and guaranteeing factual consistency before returning insights to the user.',
      action: 'Engineered ERIA (Education Regulation Impact Analyzer) using a 4-Agent LangChain Directed Acyclic Graph (DAG) powered by Groq LLaMA 3.3 70B: (1) Extractor Agent parses text into semantic chunks; (2) Analyst Agent computes regulatory risk indicators; (3) Strategic Planner Agent recommends organizational compliance roadmaps; and (4) Critic Agent acts as an automated LLM-as-a-Judge, scoring extraction grounding on a 10-point rubric and rejecting responses below 8.5/10. Enforced strict Pydantic JSON contracts and served the pipeline via an asynchronous FastAPI microservice.',
      result: 'Achieved 100% schema compliance, eliminated ungrounded factual hallucinations, and maintained sub-15s end-to-end response latency at an inference cost of only $0.0087 per document run.'
    },
    {
      id: 'star-4',
      title: 'Automated BOQ Variance Engine with SQL & TreeSHAP',
      category: 'ConTech / Systems Engineering',
      situation: 'Construction infrastructure projects routinely incur 10% to 15% budget overruns due to discrepancies between 3D Building Information Modeling (BIM) geometry and CPWD (Central Public Works Department) Schedule of Rates.',
      task: 'Develop an automated audit engine that programmatically extracts material quantities from 3D IFC files, joins them against schedule rates, and highlights high-risk budget anomalies with explainable root causes.',
      action: 'Built openbim-boq-variance-engine: utilized IfcOpenShell to extract volumetric data from IFC4 architectural models, mapped extracted elements against CPWD DSR 2023 rates using multi-table relational SQL CTE joins, and trained an Isolation Forest coupled with TreeSHAP to attribute variance anomalies to specific contractor markups or dimensional mismatches. Built a 3D WebGL viewer using Three.js to render flagged components in red.',
      result: 'Automated a manual 3-week BOQ auditing process down to 45 seconds, detecting 100% of synthetic quantity inflation errors and providing a bulletproof demonstration of ConTech AI engineering.'
    }
  ],

  // ── 4. The 3 Business Case Study Frameworks ──
  businessCases: [
    {
      title: 'Case 1: Smart Meter Load Forecasting (Arcadia / Clean-Tech)',
      businessProblem: 'Grid operators face severe regulatory penalties when peak electricity demand exceeds contracted thresholds, costing up to $150,000 per quarterly imbalance event.',
      technicalSolution: 'Engineered a PyTorch multi-channel LSTM with Reversible Instance Normalization (RevIN) and chronological Walk-Forward Validation (WFV) to forecast hourly load without distribution shift.',
      roiImpact: 'Achieved 2.06% 1-day MAPE, allowing energy trading desks to purchase power on day-ahead markets at 30% lower spot prices and avoiding $140,000 in quarterly grid penalties.'
    },
    {
      title: 'Case 2: Claims Denial Prevention (Meditab IMS / Healthcare AI)',
      businessProblem: 'Healthcare practices lose 5% to 8% of revenue due to insurance claim rejections caused by mismatched diagnosis codes and unstructured clinical chart omissions.',
      technicalSolution: 'Implemented schema-constrained Pydantic clinical entity extraction with automated relational SQL CTE auditing to verify billing codes against diagnosis records prior to claim submission.',
      roiImpact: 'Reduces claim rejection rates by an estimated 42%, accelerating reimbursement cycles from 45 days down to 14 days and safeguarding $320,000 in annual clinic cash flow.'
    },
    {
      title: 'Case 3: Automated BOQ Discrepancy Detection (L&T / Construction Tech)',
      businessProblem: 'Commercial contractors suffer unexpected margin erosion when discrepancies between structural blueprints and subcontractor bills of quantities go undetected until construction commences.',
      technicalSolution: 'Programmatically parsed IFC4 BIM geometry with IfcOpenShell, matched elements to CPWD DSR 2023 rates via SQL, and flagged price inflation anomalies using TreeSHAP.',
      roiImpact: 'Compresses variance audit duration from 21 days to under 1 minute, preventing an average of 8% to 12% in unauthorized scope-creep billings on major commercial tenders.'
    }
  ],

  // ── 5. Project Portfolio Builder Blueprint ──
  portfolioBlueprint: [
    {
      component: '01. The Hook (GitHub README Header)',
      bestPractice: 'Lead with an animated architecture diagram or GIF demo, exact production metrics ($R^2=0.9979$, sub-15s latency, 2.06% MAPE), and a 2-sentence executive summary. Never start with "This is my course project."'
    },
    {
      component: '02. First-Principles System Design',
      bestPractice: 'Document WHY you chose your architecture over the naive baseline (e.g., why Swin-TransUNet with Monte Carlo Dropout beats vanilla U-Net, or why RevIN is necessary for non-stationary series).'
    },
    {
      component: '03. PEP-8 Modular Code Structure',
      bestPractice: 'Organize code into a clean `src/` hierarchy (`data_loader.py`, `model.py`, `train.py`, `evaluate.py`, `serve.py`). Include `pyproject.toml`, `requirements.txt`, and automated Pytest test suites.'
    },
    {
      component: '04. Interactive Demo & Serving',
      bestPractice: 'Provide a 1-click Streamlit dashboard or containerized Docker FastAPI microservice with clear `curl` test commands so any evaluator can test live inference in under 60 seconds.'
    },
    {
      component: '05. Business Impact Reporting',
      bestPractice: 'Conclude with a dedicated "Business & Production Impact" section translating model evaluation numbers into concrete time, cost, and reliability metrics.'
    }
  ]
};

// ── Render Function for Accelerator Tab ──
window.renderAccelerator = function() {
  const container = document.getElementById('accelerator-content');
  if (!container) return;

  const data = window.ACCELERATOR_DATA;

  container.innerHTML = `
    <div class="war-room-header">
      <div class="wr-eyebrow">🎯 GUVI CAREER ACCELERATOR · JOB READINESS COCKPIT</div>
      <h1 class="wr-title">Data Science Career Accelerator</h1>
      <p class="wr-sub">Personalized Learning, Skill Gap Analysis & Behavioral Interview Preparation Suite designed for <strong>${data.candidate.name}</strong> to convert the <strong>GUVI Master Data Science Program</strong> into top-tier Data Scientist & AI Engineer offers.</p>
      <div class="wr-meta-bar" style="flex-wrap:wrap;gap:0.75rem">
        <span class="wr-meta-pill">🎓 ${data.candidate.qualification}</span>
        <span class="wr-meta-pill">🏢 ${data.candidate.verifiedInternship}</span>
        <span class="wr-meta-pill" style="color:var(--green);font-weight:700">⚡ Readiness: ${data.candidate.overallReadiness}</span>
        <span class="wr-meta-pill" style="color:var(--cyan);font-weight:700">🏆 ${data.candidate.tier}</span>
      </div>
    </div>

    <!-- Navigation Pills -->
    <div class="viva-filters" style="margin-bottom:1.5rem">
      <button class="filter-btn active" onclick="switchAccTab('path', this)">🗺️ 10-Step Learning Path</button>
      <button class="filter-btn" onclick="switchAccTab('gaps', this)">📊 Skill Gap Analysis</button>
      <button class="filter-btn" onclick="switchAccTab('star', this)">⭐ Behavioral STAR Suite</button>
      <button class="filter-btn" onclick="switchAccTab('cases', this)">💼 Business Case Studies</button>
      <button class="filter-btn" onclick="switchAccTab('builder', this)">🛠️ Portfolio Builder Guide</button>
    </div>

    <!-- TAB 1: 10-STEP LEARNING PATH -->
    <div id="atab-path" class="acc-tab-content active">
      <div style="padding:1rem;background:rgba(0,255,200,0.04);border:1px solid rgba(0,255,200,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">🚀 The 10-Step GUVI Career Accelerator Curriculum</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">A rigorous, end-to-end pathway that turns theoretical learning into production-grade engineering and live interview confidence.</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:1rem">
        ${data.learningPath.map(p => `
          <div class="glass-card" style="padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
                <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--${p.color});font-weight:700">STAGE ${p.step}</span>
                <span class="tag ${p.color}" style="font-size:0.65rem">${p.badge}</span>
              </div>
              <h3 style="font-size:0.95rem;margin-bottom:0.4rem;color:var(--text-primary)">${p.title}</h3>
              <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.45;margin-bottom:0.75rem">${p.summary}</p>
            </div>
            <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:0.6rem;font-size:0.75rem">
              <div style="color:var(--cyan);font-weight:600;margin-bottom:0.2rem">🎯 Key Drill: <span style="color:var(--text-primary);font-weight:400">${p.keyDrill}</span></div>
              <div style="color:var(--green);font-weight:600">🏆 Checkpoint: <span style="color:var(--text-muted);font-weight:400">${p.checkpoint}</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 2: SKILL GAP ANALYSIS -->
    <div id="atab-gaps" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(56,189,248,0.04);border:1px solid rgba(56,189,248,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">📊 6-Dimension Objective Skill Gap Matrix</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Evaluated against 104 enterprise Job Descriptions. Every technical claim is grounded in Pravin's real GitHub repositories and verified internship data.</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        ${data.skillGaps.map(g => `
          <div class="glass-card" style="padding:1.25rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem">
              <h4 style="color:var(--cyan);font-size:1rem;margin:0">${g.dimension}</h4>
              <div style="display:flex;gap:0.75rem;align-items:center">
                <span style="font-size:0.75rem;color:var(--text-muted)">Weight: ${g.weight}%</span>
                <span class="tag green" style="font-size:0.8rem;font-weight:700">${g.score}% Match</span>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.08);border-radius:6px;height:8px;overflow:hidden;margin-bottom:0.75rem">
              <div style="background:linear-gradient(90deg,var(--cyan),var(--green));height:100%;width:${g.score}%"></div>
            </div>
            <div style="font-size:0.82rem;margin-bottom:0.4rem">
              <strong style="color:var(--text-primary)">Verified Grounding:</strong> <span style="color:var(--text-secondary)">${g.evidence}</span>
            </div>
            <div style="font-size:0.82rem">
              <strong style="color:var(--amber)">Tactical Mitigation:</strong> <span style="color:var(--text-muted)">${g.gap}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: BEHAVIORAL STAR SUITE -->
    <div id="atab-star" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(244,63,94,0.04);border:1px solid rgba(244,63,94,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--rose);font-weight:700;margin-bottom:0.3rem">⭐ Pravin's 4 Battle-Tested STAR Behavioral Stories</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Never give generic textbook answers. Use the Situation-Task-Action-Result structure grounded in your actual engineering achievements and metrics.</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:1.25rem">
        ${data.starStories.map(s => `
          <div class="glass-card" style="padding:1.4rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <h3 style="color:var(--cyan);font-size:1.05rem;margin:0">${s.title}</h3>
              <span class="tag violet" style="font-size:0.7rem">${s.category}</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr;gap:0.75rem;font-size:0.84rem;line-height:1.5">
              <div style="background:rgba(255,255,255,0.02);padding:0.75rem;border-radius:8px;border-left:3px solid var(--text-muted)">
                <strong style="color:var(--text-muted)">S (Situation):</strong> <span style="color:var(--text-secondary)">${s.situation}</span>
              </div>
              <div style="background:rgba(255,255,255,0.02);padding:0.75rem;border-radius:8px;border-left:3px solid var(--violet)">
                <strong style="color:var(--violet)">T (Task):</strong> <span style="color:var(--text-secondary)">${s.task}</span>
              </div>
              <div style="background:rgba(255,255,255,0.02);padding:0.75rem;border-radius:8px;border-left:3px solid var(--cyan)">
                <strong style="color:var(--cyan)">A (Action):</strong> <span style="color:var(--text-secondary)">${s.action}</span>
              </div>
              <div style="background:rgba(0,255,200,0.04);padding:0.75rem;border-radius:8px;border-left:3px solid var(--green)">
                <strong style="color:var(--green)">R (Result):</strong> <span style="color:var(--text-primary);font-weight:500">${s.result}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 4: BUSINESS CASE STUDIES -->
    <div id="atab-cases" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(245,158,11,0.04);border:1px solid rgba(245,158,11,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--amber);font-weight:700;margin-bottom:0.3rem">💼 Enterprise ROI & Business Impact Playbook</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Hiring managers evaluate whether you understand business economics. Here is how your code drives bottom-line profitability.</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:1rem">
        ${data.businessCases.map(c => `
          <div class="glass-card" style="padding:1.25rem;display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <h3 style="color:var(--amber);font-size:0.95rem;margin-bottom:0.75rem">${c.title}</h3>
              <div style="margin-bottom:0.75rem;font-size:0.82rem">
                <div style="color:var(--rose);font-weight:700;margin-bottom:0.2rem">⚠️ The Business Pain:</div>
                <div style="color:var(--text-secondary);line-height:1.4">${c.businessProblem}</div>
              </div>
              <div style="margin-bottom:0.75rem;font-size:0.82rem">
                <div style="color:var(--cyan);font-weight:700;margin-bottom:0.2rem">⚙️ The Technical Architecture:</div>
                <div style="color:var(--text-secondary);line-height:1.4">${c.technicalSolution}</div>
              </div>
            </div>
            <div style="background:rgba(0,255,200,0.05);border:1px solid rgba(0,255,200,0.2);padding:0.75rem;border-radius:8px;font-size:0.82rem">
              <div style="color:var(--green);font-weight:700;margin-bottom:0.2rem">💰 Bottom-Line ROI Impact:</div>
              <div style="color:var(--text-primary);font-weight:500;line-height:1.4">${c.roiImpact}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 5: PORTFOLIO BUILDER GUIDE -->
    <div id="atab-builder" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(0,255,200,0.04);border:1px solid rgba(0,255,200,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">🛠️ GitHub README & Portfolio Engineering Framework</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">How to package your codebases so technical evaluators immediately recognize professional software engineering craft.</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        ${data.portfolioBlueprint.map(b => `
          <div class="glass-card" style="padding:1.1rem">
            <h4 style="color:var(--cyan);font-size:0.95rem;margin-bottom:0.4rem">${b.component}</h4>
            <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.45;margin:0">${b.bestPractice}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  window.switchAccTab = function(tab, btn) {
    document.querySelectorAll('.acc-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.viva-filters .filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('atab-' + tab).style.display = 'block';
    btn.classList.add('active');
    if (window.addXP) window.addXP(10);
  };
};
