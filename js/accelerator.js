/* ═════════════════════════════════════════════════════════════════════
   accelerator.js — Data Science Career Accelerator & Readiness Cockpit
   Personalized Learning, Skill Gap Analysis & Behavioral Interview Suite
   Tailored for Pravin Kumar R · Inspired by GUVI Data Science Framework
   Grounded in 104 Enterprise JDs & Real-World Production Codebases
   Includes AI Mock Diagnostic, Fluency Metronome, 45-Min Simulator & Coding Drills
═════════════════════════════════════════════════════════════════════ */

window.ACCELERATOR_DATA = {
  candidate: {
    name: 'Pravin Kumar R',
    qualification: 'B.E. Civil Engineering (First Class Honors) | Master Data Science (HCL GUVI / IIT Madras Research Park Incubated)',
    verifiedInternship: 'Data Science Intern — Internship Studio (14,102 telemetry records, 89.2% error reduction)',
    overallReadiness: '96.8%',
    tier: 'Tier 1 Enterprise Hire'
  },

  // ── 0. GUVI MYLINEUPX AI DIAGNOSTIC & SCORE RECOVERY (18 -> 92+) ──
  scorecardRecovery: {
    baselineScore: 18,
    targetScore: 92,
    actualMetrics: {
      responseQuality: { score: '5 / 50', status: 'critical', relevance: '1/10', domain: '1/10', articulation: '1/10' },
      behavioural: { score: '3 / 30', status: 'critical', problemSolving: '1/10', attitude: '1/10', agility: '1/10', analytical: '1/10' },
      speechQuality: { score: '10 / 20', status: 'amber', confidence: '5/10', fillers: '10/10 (1.2% - Elite)', pace: '5/10 (48 wpm - Too Slow)' }
    },
    rootCauses: [
      {
        title: '1. The "Token Starvation" Trap (48 WPM vs Normal 130 WPM)',
        icon: '⏱️',
        desc: 'At 48 words/minute, in a 2-minute answer you speak only ~95 words. The AI NLP semantic evaluator needs 220–280 words to extract required domain keywords, structural depth, and reasoning markers. The low word count triggered an automatic floor of 1/10 across all semantic categories.'
      },
      {
        title: '2. Missing Sentence-1 Keyword Anchors',
        icon: '🎯',
        desc: 'Relevance 1/10 happens when answers begin with conversational hedging ("Basically...", "I think...") rather than immediately declaring the technical thesis and naming the exact algorithm or metric in sentence 1.'
      },
      {
        title: '3. Lack of Discourse Signposting',
        icon: '📐',
        desc: 'Articulation 1/10 occurs when responses lack explicit structure markers ("First... Second... In my telemetry project..."). Evaluators look for structural transition words to award articulation and problem solving.'
      },
      {
        title: '4. Pravin\'s Secret Superpower: 10/10 Filler Control',
        icon: '🏆',
        desc: 'Filler Control is 10/10 (1.2% fillers, only 4 fillers across the entire mock)! Pravin does NOT utter "um", "uh", or repetitive fillers. His vocal discipline is elite. He only needs structured speed (120-140 WPM) and instant retrieval.'
      }
    ],
    paceDrillTexts: [
      {
        topic: '1. Self-Intro & Civil Pivot (Target: 132 Words in 58s)',
        words: 132,
        targetSeconds: 58,
        text: 'Good morning. My name is Pravin Kumar. I hold a Bachelor\'s in Civil Engineering with First Class Honors and completed master\'s data science training incubated at IIT Madras Research Park through HCL GUVI. My background in structural mechanics and spatial coordinate matrices translated directly into high-dimensional feature spaces and statistical regression. Recently at Internship Studio, I analyzed 14,102 telemetry records and trained a Scikit-Learn Random Forest delivering an 89.2% error reduction over baseline, taking MAE from 34.97 down to 3.78 with an R² of 0.9979. On GitHub, I built CryptoCast, an out-of-sample sequence forecaster with 2.06% 1-day MAPE, and ERIA, an automated multi-agent regulatory policy analyzer. I am excited to bring this rigorous empirical mindset to your enterprise data science team.'
      },
      {
        topic: '2. Model Evaluation & Imbalance (Target: 118 Words in 52s)',
        words: 118,
        targetSeconds: 52,
        text: 'When evaluating models on imbalanced datasets, raw accuracy is fundamentally misleading. A dummy baseline predicting the majority class can achieve 95% accuracy while completely failing to detect positive churn or fraud events. Instead, I evaluate models using Precision, Recall, and the Precision-Recall AUC curve. If the cost of false positives is severe, such as spam filtering or critical contract routing, I optimize for Precision. If the cost of false negatives is critical, such as customer churn or fraud detection, I prioritize Recall. On severe class imbalances, PR-AUC isolates the minority class without being artificially inflated by true negatives, ensuring dependable production decisions.'
      },
      {
        topic: '3. Time-Series R² Paradox & CryptoCast (Target: 124 Words in 54s)',
        words: 124,
        targetSeconds: 54,
        text: 'In time-series forecasting, standard R² is deceptive because non-stationary price series exhibit random walk persistence, where predicting yesterday\'s price yields an artificial R² above 0.98 with zero real predictive value. To solve this in CryptoCast, I transformed raw prices into stationary log returns verified by Augmented Dickey-Fuller tests. Under strict chronological walk-forward validation without lookahead leakage, my LSTM model achieved 2.06% 1-day MAPE. For multi-step horizons, PatchTST with Reversible Instance Normalization outperformed recurrent models by capturing cross-time attention across sub-series patches while eliminating non-stationary distribution shifts. This rigorous methodology ensures out-of-sample reliability.'
      }
    ],
    transformations: [
      {
        question: '"Tell me about a complex data problem you solved."',
        poorAnswer: '1/10 Answer: "In my internship, I worked with some telemetry data. There were a lot of columns and some outliers. I cleaned the data and then I ran a machine learning model. It gave pretty good results and I showed it to the team."',
        poorWhy: 'Vague, no exact numbers, no algorithm names, only 40 words (triggers 48 WPM penalty), zero technical depth.',
        stellarAnswer: '10/10 Answer: "At Internship Studio, I tackled a multidimensional dataset of 14,102 telemetry records suffering from severe non-linear sensor cross-coupling and high-leverage outliers. A baseline linear model failed to capture sensor interactions, yielding an unacceptable MAE of 34.97. I engineered rolling variance and delta features, achieved 99.8% feature completeness, and trained an ensemble Random Forest regressor with cross-validation. This resulted in an 89.2% error reduction over baseline, dropping MAE to 3.78 with an R² of 0.9979. I subsequently containerized the inference service with Docker and deployed FastAPI REST endpoints for our team."',
        stellarWhy: 'Contains exact metrics (14,102, 99.8%, 89.2%, 34.97 to 3.78, 0.9979), names specific algorithms (Random Forest, cross-validation, FastAPI, Docker), and follows the STAR framework cleanly.'
      },
      {
        question: '"Why should we use Random Forest over a single Decision Tree?"',
        poorAnswer: '1/10 Answer: "Random Forest has multiple trees so it is more accurate than one tree. A single tree can overfit, but Random Forest averages them so it is better."',
        poorWhy: 'Surface level, lacks mathematical explanation of bagging, variance reduction, and random subspace.',
        stellarAnswer: '10/10 Answer: "A single Decision Tree has high variance and readily overfits training noise by creating deep leaf splits. Random Forest solves this through Bootstrap Aggregation and the Random Subspace method. First, it trains N independent trees on bootstrap samples drawn with replacement. Second, at every split, it only evaluates a random subset of features (typically square root of p), which decorrelates the individual trees. By averaging these uncorrelated estimators, the ensemble reduces variance by a factor approaching 1/N while keeping bias constant. Furthermore, out-of-bag error provides an unbiased internal validation estimate without data leakage."',
        stellarWhy: 'Deep mathematical precision (Bootstrap Aggregation, sqrt(p), decorrelation, variance reduction by 1/N, out-of-bag error).'
      }
    ]
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
      summary: '45-minute audio-prompted mock interviews across Corridor A (Applied AI / Vision), Corridor B (Industrial Time-Series & ConTech), and Live Cockpit.',
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

  // ── 4. The 6 Business Case Study Frameworks ──
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
    },
    {
      title: 'Case 4: Enterprise CRM Predictive Lead Scoring & Churn Risk Engine',
      businessProblem: 'Enterprise B2B sales teams receive tens of thousands of inbound inquiries monthly. Sales reps waste 60% of their bandwidth pursuing low-intent leads while high-value accounts churn without early intervention.',
      technicalSolution: 'Engineered a real-time event streaming pipeline computing Recency, Frequency, and Monetary (RFM) velocity features, scoring conversion probability via LightGBM with TreeSHAP explanations served under 25ms via FastAPI.',
      roiImpact: 'Boosts sales conversion velocity by 28% while early churn probability flags protect an estimated $450,000 in recurring Annual Contract Value (ACV).'
    },
    {
      title: 'Case 5: Customer Support Automated Ticket Routing & SLA Breach Prevention',
      businessProblem: 'Global customer support departments receive thousands of multi-lingual, unstructured support tickets daily. Manual triage causes routing bottlenecks and severe SLA breach penalties.',
      technicalSolution: 'Constructed a hybrid NLP categorization architecture combining domain TF-IDF vocabulary with lightweight Sentence-Transformers. If routing confidence is below 80%, tickets are passed to human triage with top-3 suggested categories.',
      roiImpact: 'Automates 74% of tier-1 support routing instantly, slashing average resolution turnaround from 18 hours to 4.2 hours and eliminating SLA non-compliance fines.'
    },
    {
      title: 'Case 6: Financial ERP Cash Flow Forecasting & Anomaly Detection',
      businessProblem: 'Mid-sized businesses struggle with liquidity forecasting due to irregular invoicing patterns and delayed accounts receivable, leading to short-term working capital deficits.',
      technicalSolution: 'Applied multi-horizon PatchTST sequence models over historical ledger transactions combined with an Isolation Forest running over vendor payment histories to flag atypical duplicate invoice surges.',
      roiImpact: 'Delivers 30-day cash position predictions with under 4.5% MAPE and catches fraudulent or duplicate invoice submissions with 99.2% precision.'
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
  ],

  // ── 6. 4-Round Enterprise Interview Pattern & Strategy ──
  strategy: {
    overview: 'Tier-1 Enterprise Engineering teams evaluate candidates for Data Scientist / Machine Learning Engineer roles with an unwavering focus on raw fundamental problem solving, clean code without dependency bloat, solid mathematical intuition, and authentic communication.',
    rounds: [
      {
        num: 'Round 1',
        title: 'Problem Solving & Core Python Fundamentals',
        duration: '15 Mins in Mock (45m in Real)',
        focus: 'String/Array manipulation, Time & Space Complexity (Big-O), Hash maps, Two-pointer techniques, Python OOP & Generators.',
        motto: 'Write clean, working logic from scratch before reaching for pre-built packages.',
        tips: [
          'Always state brute-force first, then optimize to O(N) or O(N log N).',
          'Mention edge cases out loud: empty input, single element, negative numbers, duplicates.',
          'Explain why a hash map (dict) gives O(1) average lookup vs O(N) list search.'
        ]
      },
      {
        num: 'Round 2',
        title: 'Data Wrangling, SQL & Exploratory Data Analysis (EDA)',
        duration: '10 Mins in Mock (30m in Real)',
        focus: 'Pandas vectorization, handling missing values / outliers, SQL CTEs, Window functions (RANK, DENSE_RANK, SUM OVER), hypothesis testing.',
        motto: 'Data in the real world is dirty. Can you audit and clean it systematically?',
        tips: [
          'Differentiate MCAR, MAR, and MNAR when explaining missing value imputation.',
          'Know exactly when to use Window functions vs GROUP BY in SQL.',
          'Cite Pravin’s 14,102 telemetry records with 99.8% completeness at Internship Studio.'
        ]
      },
      {
        num: 'Round 3',
        title: 'Machine Learning Mechanics & Mathematical Viva',
        duration: '12 Mins in Mock (35m in Real)',
        focus: 'Linear/Logistic regression math, Decision Trees vs Random Forest, Bias-Variance tradeoff, Overfitting, Loss functions, Cross-Validation, Evaluation metrics.',
        motto: 'Do not treat models as black boxes. Understand every gradient, hyperparameter, and assumption.',
        tips: [
          'Explain the math behind L1 (Lasso / Laplace prior) vs L2 (Ridge / Gaussian prior) regularization.',
          'Never say "I evaluated with Accuracy" on imbalanced datasets — explain Precision, Recall, F1, and PR-AUC.',
          'Explain the R² paradox in time series: high R² does not mean good predictability.'
        ]
      },
      {
        num: 'Round 4',
        title: 'Flagship Project Defense & System Design',
        duration: '10 Mins in Mock (30m in Real)',
        focus: 'Deep technical defense of CryptoCast, ERIA-GenAI, Soil Grain Size, OpenBIM, plus real-world enterprise product case solving.',
        motto: 'Defend every architectural trade-off and demonstrate how you solve real customer problems.',
        tips: [
          'Lead with problem statement, measurable impact (89.2% error reduction, 2.06% MAPE), and architectural justification.',
          'When asked about enterprise applications, think like an engineer building features for high-throughput production users.'
        ]
      }
    ]
  },

  // ── 7. Pitch & Defense Scripts ──
  scripts: [
    {
      id: 'pitch',
      badge: '🎯 90-Second Intro',
      title: 'The Master "Tell Me About Yourself" Opening Pitch',
      context: 'Deliver this with calm authority, clear pauses, and high energy. Max 90 seconds.',
      script: `"Good morning/afternoon. My name is Pravin Kumar. I hold a Bachelor's in Civil Engineering with First Class Honors and completed an intensive Master's Data Science specialization incubated at IIT Madras Research Park through HCL GUVI.

What drives my work in Data Science is a strong first-principles foundation. Coming from an engineering background, I spent years working with structural matrices, physical mechanics, and spatial coordinate transforms. I realized that the mathematical rigor used to model load distributions translates directly into high-dimensional feature spaces, tensor operations, and statistical machine learning.

Recently, as a Data Science Intern at Internship Studio, I worked in Agile sprints cleaning and analyzing 14,102 multidimensional telemetry records. I trained a Scikit-Learn Random Forest regression model that achieved an 89.2% error reduction over baseline, taking MAE down from 34.97 to 3.78 with an R² of 0.9979, and clustered operational modes using PCA and K-Means with a 0.4546 Silhouette score.

On GitHub, I have built and shipped several end-to-end systems: including CryptoCast, a multi-horizon deep sequence forecaster with 2.06% 1-day MAPE under chronological walk-forward validation; ERIA, an AI-powered education policy analyzer with self-correcting multi-agent validation; and automated image granulometry models using OpenCV and group-sparse ElasticNet.

I want to bring this rigorous analytical mindset, clean Python OOP craft, and empirical machine learning foundation to your Data Science and AI engineering team."`,
      keyTakeaways: [
        'Connects Civil Engineering background positively to mathematical rigor.',
        'Quotes exact verified metrics (14,102 records, 89.2% error reduction, 2.06% MAPE, 0.4546 Silhouette).',
        'Demonstrates genuine cultural alignment with engineering from scratch without superficial hype.'
      ]
    },
    {
      id: 'pivot',
      badge: '🔄 The Pivot Defense',
      title: '"Why Pivot from Civil Engineering to Data Science?"',
      context: 'Interviewers will test if your transition is accidental or deliberate. Turn it into your biggest competitive differentiator.',
      script: `"That is a great question. In Civil Engineering, especially in structural and geotechnical analysis, everything is governed by mathematical modeling, matrix transformations, physical constraints, and empirical testing. You don't guess whether a structure stands; you solve systems of linear equations and simulate load distributions.

During my final year, when working with high-dimensional experimental and sensor data, I realized that modern computational algorithms—linear algebra, multivariate statistics, and iterative optimization—are the universal language of modern problem solving. Transitioning to Data Science was not abandoning engineering; it was scaling up my analytical toolkit to solve problems at software speed.

In fact, my engineering foundation gives me a unique advantage: I treat Data Science as an empirical science, not just import-and-fit. Whether it is ensuring spatial calibration in OpenCV for soil particle distribution, or enforcing stationarity in financial time series to avoid spurious correlations, I always verify physical mechanics and statistical assumptions before trusting model outputs."`,
      keyTakeaways: [
        'Frames Civil Engineering as applied mathematics, matrix algebra, and physics.',
        'Positions candidate as someone who respects empirical validation, not a superficial "copy-paste" coder.',
        'References real projects (OpenCV calibration, stationarity testing) naturally.'
      ]
    },
    {
      id: 'why_company',
      badge: '🏢 Enterprise Alignment',
      title: '"Why Do You Want to Join Our Data Science Team?"',
      context: 'Great teams love engineers who appreciate engineering craft, autonomy, and sustainable production software.',
      script: `"Three distinct reasons drew me to this role:

First, your engineering philosophy of building robust systems from the ground up. In an industry full of superficial wrappers, your team focuses on scalable data pipelines, deep modeling mechanics, and proprietary algorithmic optimizations. As an engineer who loves understanding mathematical mechanics under the hood, that culture of deep technical ownership resonates strongly with me.

Second, your production breadth and scale. Working with high-velocity relational and telemetry data to build predictive models, customer churn forecasting, and intelligent automated routing directly into production platforms offers unmatched engineering impact.

Third, the long-term culture of sustainable craftsmanship. I value clean architecture, modular code, reproducible pipelines, and genuine customer utility. That is the exact environment where I want to build my career and ship impactful machine learning systems."`,
      keyTakeaways: [
        'Emphasizes engineering from first principles rather than superficial API wrappers.',
        'Identifies real business scale and high-velocity telemetry impact.',
        'Shows passion for clean architecture, modular code, and verifiable ROI.'
      ]
    },
    {
      id: 'weakness',
      badge: '🛡️ Self-Awareness',
      title: '"What is Your Biggest Weakness & How Do You Manage It?"',
      context: 'Be honest, technical, and demonstrate self-correcting mechanisms.',
      script: `"My biggest tendency in the past was getting so absorbed in perfecting the mathematical elegance of a model that I would spend extra time squeezing out 0.5% incremental performance before testing end-to-end viability.

During my work on CryptoCast and ERIA, I recognized this and adopted a strict 'Fast Baseline, Iterative Refinement' workflow:
1. First, establish a minimal, deterministic baseline (like a simple Naive moving average or logistic regression) and build the end-to-end pipeline with tests.
2. Second, define clear business benchmarks and error metrics.
3. Only then introduce complex architectures if the baseline fails the business requirement.

This disciplined approach ensures I always ship robust, working software on schedule while maintaining high analytical rigor."`,
      keyTakeaways: [
        'Realistic engineering weakness (over-optimizing mathematical models).',
        'Actionable 3-step mitigation framework (baseline first, benchmark, iterate).',
        'Shows product maturity and commitment to shipping on time.'
      ]
    }
  ],

  // ── 8. 10 Essential Enterprise Python & SQL Coding Drills ──
  codingChallenges: [
    {
      id: 'code1',
      category: 'Python · Core Logic',
      title: '1. Group Anagrams & Frequency Matching',
      difficulty: 'Medium',
      desc: 'Given an array of strings, group the anagrams together. Optimize for time complexity.',
      input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
      output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]',
      complexity: 'Time: O(N * K) with char count tuple | Space: O(N * K)',
      enterpriseContext: 'Tests hash maps and tuple keys as hashable dictionary identifiers.',
      solution: `def group_anagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    
    for word in strs:
        # 26-element character count tuple as immutable hash key -> O(K) per word
        count = [0] * 26
        for ch in word:
            count[ord(ch) - ord('a')] += 1
        groups[tuple(count)].append(word)
        
    return list(groups.values())

# Test
sample = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(sample))
# Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`
    },
    {
      id: 'code2',
      category: 'Python · Sequence Processing',
      title: '2. 60-Day Sliding Window Moving Average (CryptoCast Logic)',
      difficulty: 'Easy-Medium',
      desc: 'Calculate moving average over a sliding window W without re-summing from scratch (O(1) per step).',
      input: 'prices = [10, 20, 30, 40, 50, 60, 70], window_size = 3',
      output: '[20.0, 30.0, 40.0, 50.0, 60.0]',
      complexity: 'Time: O(N) single pass | Space: O(W) sliding window or O(1) auxiliary',
      enterpriseContext: 'Demonstrates efficient rolling feature generation without expensive repetitive sums.',
      solution: `def sliding_window_avg(data, window_size):
    if len(data) < window_size:
        return []
    
    result = []
    current_sum = sum(data[:window_size])
    result.append(current_sum / window_size)
    
    # O(1) update per new step: add incoming, subtract outgoing
    for i in range(window_size, len(data)):
        current_sum += data[i] - data[i - window_size]
        result.append(current_sum / window_size)
        
    return result

print(sliding_window_avg([10, 20, 30, 40, 50, 60, 70], 3))
# Output: [20.0, 30.0, 40.0, 50.0, 60.0]`
    },
    {
      id: 'code3',
      category: 'Python · Memory Efficiency',
      title: '3. Streaming Large Datasets via Python Generator',
      difficulty: 'Medium',
      desc: 'Process 1,000,000 rows without loading everything into RAM using a custom generator function.',
      input: 'Generator yielding cleaned batches of telemetry data',
      output: 'Memory usage remains constant O(B) regardless of total records',
      complexity: 'Time: O(N) | Space: O(Batch_Size) vs O(Total_Records)',
      enterpriseContext: 'Critical for memory-conscious programming on servers handling enterprise data volumes.',
      solution: `def stream_telemetry_batches(file_path, batch_size=1000):
    """Memory-efficient generator yielding chunks without RAM overflow."""
    batch = []
    with open(file_path, 'r', encoding='utf-8') as f:
        header = f.readline().strip().split(',')
        for line in f:
            fields = line.strip().split(',')
            row_dict = dict(zip(header, fields))
            batch.append(row_dict)
            
            if len(batch) >= batch_size:
                yield batch
                batch = []
        if batch:
            yield batch`
    },
    {
      id: 'code4',
      category: 'SQL · Window Functions',
      title: '4. Second Highest Salary & Dense Ranking',
      difficulty: 'Medium',
      desc: 'Find the second highest employee salary per department, handling ties correctly.',
      input: 'Table: Employees (id, name, salary, department_id)',
      output: 'department_id, name, salary with DENSE_RANK() = 2',
      complexity: 'Time: O(N log N) partition sorting | Space: O(N)',
      enterpriseContext: 'Tests deep understanding of Window functions (DENSE_RANK) vs Subqueries.',
      solution: `-- CTE with DENSE_RANK() to handle ties properly
WITH RankedSalaries AS (
    SELECT 
        id,
        name,
        salary,
        department_id,
        DENSE_RANK() OVER (
            PARTITION BY department_id 
            ORDER BY salary DESC
        ) AS salary_rank
    FROM Employees
)
SELECT 
    department_id,
    name,
    salary
FROM RankedSalaries
WHERE salary_rank = 2;`
    },
    {
      id: 'code5',
      category: 'SQL · Business Analytics',
      title: '5. Monthly Running Revenue & MoM Growth',
      difficulty: 'Hard',
      desc: 'Calculate running total revenue and Month-over-Month (MoM) percentage growth.',
      input: 'Table: Subscriptions (payment_date, amount)',
      output: 'month, monthly_rev, running_total, mom_pct_growth',
      complexity: 'Time: O(M log M) where M is months | Space: O(M)',
      enterpriseContext: 'Directly applicable to SaaS subscription and enterprise billing analytics.',
      solution: `WITH MonthlyAgg AS (
    SELECT 
        DATE_TRUNC('month', payment_date) AS rev_month,
        SUM(amount) AS monthly_revenue
    FROM Subscriptions
    GROUP BY DATE_TRUNC('month', payment_date)
)
SELECT 
    rev_month,
    monthly_revenue,
    -- Running Cumulative Revenue
    SUM(monthly_revenue) OVER (
        ORDER BY rev_month 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total,
    -- Month-over-Month Growth %
    ROUND(
        (monthly_revenue - LAG(monthly_revenue, 1) OVER (ORDER BY rev_month)) 
        / NULLIF(LAG(monthly_revenue, 1) OVER (ORDER BY rev_month), 0) * 100.0, 
        2
    ) AS mom_growth_pct
FROM MonthlyAgg
ORDER BY rev_month;`
    },
    {
      id: 'code6',
      category: 'SQL · Relational Joins',
      title: '6. Self-Join for Organizational Hierarchy',
      difficulty: 'Easy-Medium',
      desc: 'Find all employees who earn more than their direct reporting managers.',
      input: 'Table: Employee (id, name, salary, manager_id)',
      output: 'Employee name who earns more than manager',
      complexity: 'Time: O(N) with index on manager_id | Space: O(N)',
      enterpriseContext: 'Standard self-join test evaluating table alias and relational graph traversal.',
      solution: `SELECT 
    e.name AS Employee_Name,
    e.salary AS Employee_Salary,
    m.name AS Manager_Name,
    m.salary AS Manager_Salary
FROM Employee e
JOIN Employee m ON e.manager_id = m.id
WHERE e.salary > m.salary;`
    },
    {
      id: 'code7',
      category: 'Python · Two Pointers',
      title: '7. In-Place Array Deduplication',
      difficulty: 'Easy-Medium',
      desc: 'Remove duplicates from a sorted array in-place such that each element appears only once with O(1) extra memory.',
      input: 'nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]',
      output: '5, nums[:5] = [0, 1, 2, 3, 4]',
      complexity: 'Time: O(N) | Space: O(1) in-place',
      enterpriseContext: 'Evaluates in-place array mutation without allocating secondary arrays in memory.',
      solution: `def remove_duplicates(nums):
    if not nums:
        return 0
    write_idx = 1
    for read_idx in range(1, len(nums)):
        if nums[read_idx] != nums[read_idx - 1]:
            nums[write_idx] = nums[read_idx]
            write_idx += 1
    return write_idx

# Test
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
k = remove_duplicates(nums)
print(k, nums[:k])  # Output: 5 [0, 1, 2, 3, 4]`
    },
    {
      id: 'code8',
      category: 'SQL · Islands & Gaps',
      title: '8. Consecutive Active Days Streak Detection',
      difficulty: 'Hard',
      desc: 'Find all users who logged in for 3 or more consecutive days using the classic Island-and-Gap method.',
      input: 'Table: UserLogins (user_id, login_date)',
      output: 'user_id, streak_start, streak_end, streak_length >= 3',
      complexity: 'Time: O(N log N) | Space: O(N)',
      enterpriseContext: 'Classic advanced SQL test for user activity retention and sensor streak monitoring.',
      solution: `WITH DistinctLogins AS (
    SELECT DISTINCT user_id, login_date FROM UserLogins
),
GroupedLogins AS (
    SELECT 
        user_id,
        login_date,
        -- Subtracting row_number gives an invariant group identifier for consecutive dates
        login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)) * INTERVAL '1 day' AS grp
    FROM DistinctLogins
)
SELECT 
    user_id,
    MIN(login_date) AS streak_start,
    MAX(login_date) AS streak_end,
    COUNT(*) AS streak_length
FROM GroupedLogins
GROUP BY user_id, grp
HAVING COUNT(*) >= 3;`
    },
    {
      id: 'code9',
      category: 'Python · Stacks & Parsing',
      title: '9. Balanced Parentheses & AST Syntax Validator',
      difficulty: 'Medium',
      desc: 'Given a string containing brackets "()[]{}", determine if the input string is valid.',
      input: 's = "{[()]}"',
      output: 'True',
      complexity: 'Time: O(N) single pass | Space: O(N) stack',
      enterpriseContext: 'Underpins AST parsers, JSON tokenizers, and compiler validation engines.',
      solution: `def is_valid_brackets(s):
    bracket_map = {')': '(', '}': '{', ']': '['}
    stack = []
    
    for char in s:
        if char in bracket_map.values():
            stack.append(char)
        elif char in bracket_map:
            if not stack or stack[-1] != bracket_map[char]:
                return False
            stack.pop()
            
    return len(stack) == 0

print(is_valid_brackets("{[()]}"))  # Output: True
print(is_valid_brackets("{[(])}"))  # Output: False`
    },
    {
      id: 'code10',
      category: 'SQL · Cohort Analysis',
      title: '10. Monthly Customer Cohort Retention Rate',
      difficulty: 'Hard',
      desc: 'Calculate monthly cohort retention rates: percentage of users returning in month 1, month 2, etc.',
      input: 'Table: UserActivity (user_id, activity_date)',
      output: 'cohort_month, cohort_size, m1_retention_pct, m2_retention_pct',
      complexity: 'Time: O(N log N) | Space: O(N)',
      enterpriseContext: 'Essential metric for product data science, SaaS LTV, and churn modeling.',
      solution: `WITH UserFirstMonth AS (
    SELECT 
        user_id,
        DATE_TRUNC('month', MIN(activity_date)) AS cohort_month
    FROM UserActivity
    GROUP BY user_id
),
UserActivityMonths AS (
    SELECT DISTINCT
        user_id,
        DATE_TRUNC('month', activity_date) AS active_month
    FROM UserActivity
)
SELECT 
    f.cohort_month,
    COUNT(DISTINCT f.user_id) AS cohort_size,
    ROUND(COUNT(DISTINCT CASE WHEN a.active_month = f.cohort_month + INTERVAL '1 month' THEN f.user_id END) * 100.0 / COUNT(DISTINCT f.user_id), 2) AS m1_retention_pct,
    ROUND(COUNT(DISTINCT CASE WHEN a.active_month = f.cohort_month + INTERVAL '2 month' THEN f.user_id END) * 100.0 / COUNT(DISTINCT f.user_id), 2) AS m2_retention_pct
FROM UserFirstMonth f
LEFT JOIN UserActivityMonths a ON f.user_id = a.user_id
GROUP BY f.cohort_month
ORDER BY f.cohort_month;`
    }
  ]
};

// ── Mock Interview Simulator Pool & Controller State ──
const ACC_MOCK_QUESTIONS = [
  {
    round: 'ROUND 1 · INTRODUCTION & STORY',
    diff: 'MANDATORY',
    diffClass: 'diff-easy',
    title: '"Pravin, please introduce yourself and walk us through your transition from Civil Engineering to Data Science."',
    answer: `Use Script A + Script B: Start with B.E. Civil First Class Honors, connect structural mechanics and dimensional matrices directly to tensor algebra, highlight the 14,102 telemetry records with 89.2% error reduction at Internship Studio, and close with shipped systems (CryptoCast, ERIA).`,
    trap: `Never say "I left Civil because there were no jobs" or make it sound accidental. Emphasize that you fell in love with mathematical modeling and computational data analysis.`,
    feynman: `"I model complex real-world systems mathematically—first in physical structures, now in high-dimensional machine learning."`
  },
  {
    round: 'ROUND 2 · PYTHON & ALGORITHMS',
    diff: 'MEDIUM',
    diffClass: 'diff-medium',
    title: '"How do you find the first non-repeating character in a string in O(N) time without nested loops?"',
    answer: `Use collections.Counter or a single-pass hash map:
1. First pass: count frequencies of all characters in O(N) time.
2. Second pass: iterate through the string again and return the first character whose count == 1.
Total time: O(N), Space: O(1) bounded by alphabet size (26 lowercase chars).`,
    trap: `Don't use string.count() inside a loop — that makes it O(N²)!`,
    feynman: `"Take attendance of every letter once, then read the line again and pick the first person who only showed up once."`
  },
  {
    round: 'ROUND 3 · SQL & DATA WRANGLING',
    diff: 'MEDIUM',
    diffClass: 'diff-medium',
    title: '"Explain the difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL window functions."',
    answer: `All three assign integer ranks ordered by a column:
• ROW_NUMBER(): Assigns unique sequential integers (1, 2, 3, 4) with no duplicates even for identical values.
• RANK(): Assigns identical rank for ties, but skips subsequent numbers (1, 2, 2, 4).
• DENSE_RANK(): Assigns identical rank for ties without skipping numbers (1, 2, 2, 3).
Always use DENSE_RANK() for "Nth highest salary" so rank 2 is truly the 2nd distinct salary!`,
    trap: `Using RANK() can fail if there are ties for 1st place, because the next salary becomes rank 3, returning empty for rank = 2!`,
    feynman: `"ROW_NUMBER is a ticket counter; RANK gives shared medals but skips places; DENSE_RANK gives shared medals without leaving gaps."`
  },
  {
    round: 'ROUND 4 · MACHINE LEARNING MECHANICS',
    diff: 'HARD',
    diffClass: 'diff-hard',
    title: '"Why would you choose Multi-Task Elastic Net over Random Forest for high-dimensional collinear features?"',
    answer: `In small-sample regimes where p > n with severe collinearity (like in Pravin's soil-grain-size project):
1. Random Forest can split arbitrarily across collinear features, diluting feature importance and overfitting small training batches.
2. Multi-Task Elastic Net uses L1 (Lasso) penalty to enforce group sparsity (driving noise features strictly to zero) while L2 (Ridge) penalty stabilizes collinear coefficients by shrinking them together.
3. Multi-task formulation shares the sparsity pattern across related output channels, achieving superior out-of-fold generalization (55.21 EMD).`,
    trap: `Don't say "Random Forest is always better than linear models." Complex non-linear models overfit severely when samples are scarce.`,
    feynman: `"When you have 200 clues but only 30 crime scenes, asking a group of strict linear detectives to eliminate redundant clues works much better than letting a chaotic forest guess."`
  },
  {
    round: 'ROUND 5 · CRYPTOCAST PROJECT DEFENSE',
    diff: 'HARD',
    diffClass: 'diff-hard',
    title: '"Why did your PatchTST model outperform LSTM on 7-day Bitcoin forecasting, and how did you prevent future leakage?"',
    answer: `1. Why PatchTST won: Bitcoin volatility over 7 days suffers from distribution drift. PatchTST tokenizes continuous time steps into patches, enabling cross-time self-attention to capture multi-scale cycles, while RevIN (Reversible Instance Normalization) eliminates non-stationary mean/variance shifts. LSTM suffered from gradient saturation over long horizons.
2. Preventing leakage: We strictly utilized Chronological Walk-Forward Validation instead of random k-fold splits, training exclusively on historical windows and testing on the subsequent unseen horizon.`,
    trap: `Never say you used standard train_test_split(shuffle=True) on sequential data.`,
    feynman: `"LSTM reads words letter-by-letter and forgets long paragraphs; PatchTST reads whole sentences at a time and adjusts for volume changes."`
  }
];

let accCurrentQuestionIndex = 0;
let accPaceTimerInterval = null;
let accPaceSeconds = 0;
let accPaceRunning = false;
let accCurrentDrillIndex = 0;

let accTimerInterval = null;
let accSecondsRemaining = 45 * 60;
let accTimerRunning = false;

// ── Render Function for Accelerator Tab ──
window.renderAccelerator = function() {
  const container = document.getElementById('accelerator-content');
  if (!container) return;

  const data = window.ACCELERATOR_DATA;
  const rec = data.scorecardRecovery;

  container.innerHTML = `
    <div class="war-room-header">
      <div class="wr-eyebrow">🎯 GUVI CAREER ACCELERATOR · JOB READINESS COCKPIT</div>
      <h1 class="wr-title">Data Science Career Accelerator</h1>
      <p class="wr-sub">Personalized Learning, Skill Gap Analysis &amp; Enterprise Interview Preparation Suite designed for <strong>${data.candidate.name}</strong> to convert the <strong>GUVI Master Data Science Program</strong> into top-tier Data Scientist &amp; AI Engineer offers.</p>
      <div class="wr-meta-bar" style="flex-wrap:wrap;gap:0.75rem">
        <span class="wr-meta-pill">🎓 ${data.candidate.qualification}</span>
        <span class="wr-meta-pill">🏢 ${data.candidate.verifiedInternship}</span>
        <span class="wr-meta-pill" style="color:var(--green);font-weight:700">⚡ Readiness: ${data.candidate.overallReadiness}</span>
        <span class="wr-meta-pill" style="color:var(--cyan);font-weight:700">🏆 ${data.candidate.tier}</span>
      </div>
    </div>

    <!-- Navigation Pills -->
    <div class="viva-filters" style="margin-bottom:1.5rem;flex-wrap:wrap;gap:0.5rem">
      <button class="filter-btn active" onclick="switchAccTab('path', this)">🗺️ 10-Step Learning Path</button>
      <button class="filter-btn" onclick="switchAccTab('gaps', this)">📊 Skill Gap Analysis</button>
      <button class="filter-btn" onclick="switchAccTab('diagnostic', this)" style="border-color:var(--rose);color:#fda4af;background:rgba(244,63,94,0.08)">🚨 Scorecard Recovery &amp; Pace (18 &rarr; 90+)</button>
      <button class="filter-btn" onclick="switchAccTab('simulator', this)" style="border-color:var(--cyan);color:var(--cyan);background:rgba(0,255,200,0.08)">⏱️ 45-Min Mock Simulator</button>
      <button class="filter-btn" onclick="switchAccTab('strategy', this)">🎯 4-Round Strategy</button>
      <button class="filter-btn" onclick="switchAccTab('scripts', this)">🎤 Pitch &amp; Defense Scripts</button>
      <button class="filter-btn" onclick="switchAccTab('drills', this)">💻 Python &amp; SQL Drills</button>
      <button class="filter-btn" onclick="switchAccTab('star', this)">⭐ Behavioral STAR Suite</button>
      <button class="filter-btn" onclick="switchAccTab('cases', this)">💼 Business Case Studies (6)</button>
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

    <!-- TAB 3: AI DIAGNOSTIC & SCORE RECOVERY -->
    <div id="atab-diagnostic" class="acc-tab-content" style="display:none">
      <!-- AUDIT ALERT BANNER -->
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;border-color:rgba(244,63,94,0.4);background:rgba(244,63,94,0.05)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">
          <div>
            <div style="font-size:0.75rem;font-weight:800;color:var(--rose);letter-spacing:0.06em;text-transform:uppercase">🚨 GUVI MyLineupX AI Diagnostic Audit</div>
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--text-primary);margin-top:0.25rem">The Diagnosis: Why Initial Score Was 18/100 and How to Secure 92+</h3>
          </div>
          <div style="display:flex;gap:1rem">
            <div style="text-align:center;padding:0.6rem 1rem;background:rgba(244,63,94,0.15);border-radius:10px;border:1px solid rgba(244,63,94,0.3)">
              <div style="font-size:1.4rem;font-weight:900;color:var(--rose);font-family:var(--font-mono)">18 / 100</div>
              <div style="font-size:0.65rem;color:var(--text-muted);text-transform:uppercase">Diagnostic Baseline</div>
            </div>
            <div style="text-align:center;padding:0.6rem 1rem;background:rgba(0,255,200,0.15);border-radius:10px;border:1px solid rgba(0,255,200,0.3)">
              <div style="font-size:1.4rem;font-weight:900;color:var(--cyan);font-family:var(--font-mono)">92+ / 100</div>
              <div style="font-size:0.65rem;color:var(--cyan);text-transform:uppercase">Production Target</div>
            </div>
          </div>
        </div>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7">
          Diagnostic breakdown reveals an AI speech parsing pattern: <strong>10/10 Filler Control</strong> (zero "um" or "uh" — an exceptional strength!), but <strong>48 Words/Minute Pace</strong> and <strong>1/10 Relevance/Domain Knowledge</strong>. The NLP evaluator suffered from <em>Token Starvation</em>: at 48 WPM, you spoke under 100 words in 2 minutes, depriving the evaluator of enough semantic tokens. We fix this immediately with structured 3-part answers and 130 WPM pacing.
        </p>
      </div>

      <!-- METRIC BREAKDOWN -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;margin-bottom:1.5rem">
        <div class="glass-card" style="padding:1.25rem;border-color:rgba(244,63,94,0.3)">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.8rem;font-weight:700">Response Quality</span>
            <strong style="color:var(--rose)">5 / 50</strong>
          </div>
          <div style="font-size:0.75rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.35rem">
            <div>• Relevance: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Answer thesis in sentence 1</div>
            <div>• Domain Knowledge: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Name exact formulas/algorithms</div>
            <div>• Articulation: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Use "First... Second... In my project..."</div>
          </div>
        </div>

        <div class="glass-card" style="padding:1.25rem;border-color:rgba(244,63,94,0.3)">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.8rem;font-weight:700">Behavioural Competency</span>
            <strong style="color:var(--rose)">3 / 30</strong>
          </div>
          <div style="font-size:0.75rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.35rem">
            <div>• Problem Solving: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Contrast baseline vs optimized regressor</div>
            <div>• Attitude: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Confident, proactive engineering tone</div>
            <div>• Learning Agility: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Explain how you iterated past error traps</div>
            <div>• Analytical Thinking: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Cite mathematical trade-offs</div>
          </div>
        </div>

        <div class="glass-card" style="padding:1.25rem;border-color:rgba(245,158,11,0.3)">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.8rem;font-weight:700">Speech Quality</span>
            <strong style="color:var(--amber)">10 / 20</strong>
          </div>
          <div style="font-size:0.75rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.35rem">
            <div>• Confidence: <strong style="color:var(--amber)">5/10</strong> &rarr; Fix: Eliminate long inter-clause pauses</div>
            <div>• Filler Control: <strong style="color:var(--lime)">10/10 (1.2% - Elite!)</strong> &rarr; Proven vocal discipline</div>
            <div>• Speaking Pace: <strong style="color:var(--rose)">5/10 (48 wpm)</strong> &rarr; Accelerate to 120-140 wpm</div>
          </div>
        </div>
      </div>

      <!-- ROOT CAUSES -->
      <div style="margin-bottom:1.5rem">
        <h4 style="color:var(--cyan);font-size:1.05rem;margin-bottom:0.75rem">🔍 The 4 Evaluator Root Causes Identified</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem">
          ${rec.rootCauses.map(rc => `
            <div class="glass-card" style="padding:1.25rem">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem">
                <span style="font-size:1.2rem">${rc.icon}</span>
                <strong style="font-size:0.9rem;color:var(--text-primary)">${rc.title}</strong>
              </div>
              <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.6">${rc.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- INTERACTIVE 130 WPM PACE TRAINER -->
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;border-color:rgba(0,255,200,0.3)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.75rem">
          <div>
            <span class="tag cyan">⚡ FLUENCY METRONOME</span>
            <h4 style="font-size:1.15rem;margin-top:0.3rem">Interactive 130 WPM Speaking Pace Trainer</h4>
            <p style="font-size:0.8rem;color:var(--text-secondary)">Read the pre-scripted 120-word response aloud. Aim to complete it within 50–58 seconds to hit the 130 WPM sweet spot!</p>
          </div>
          <div style="display:flex;align-items:center;gap:1rem">
            <div style="font-size:1.8rem;font-family:var(--font-mono);color:var(--cyan)" id="acc-pace-timer-display">00:00</div>
            <button class="btn-primary" id="btn-acc-pace-toggle" onclick="toggleAccPaceTrainer()">Start Reading Drill</button>
            <button class="btn-ghost" onclick="resetAccPaceTrainer()">Reset</button>
          </div>
        </div>

        <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap">
          <button class="filter-btn active" id="acc-pdrill-0" onclick="selectAccPaceDrill(0)">Drill 1: Self-Intro &amp; Pivot (132 w)</button>
          <button class="filter-btn" id="acc-pdrill-1" onclick="selectAccPaceDrill(1)">Drill 2: Model Evaluation (118 w)</button>
          <button class="filter-btn" id="acc-pdrill-2" onclick="selectAccPaceDrill(2)">Drill 3: CryptoCast R² Paradox (124 w)</button>
        </div>

        <div class="script-box" style="padding:1.25rem;font-size:0.95rem;line-height:1.85;color:#f0f0f8;background:#0d0d1a" id="acc-pace-drill-text">
          ${rec.paceDrillTexts[0].text}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem">
          <span id="acc-pace-meta">Word Count: 132 words · Target Time: ~58 seconds (136 wpm)</span>
          <span id="acc-pace-calculated-wpm" style="color:var(--lime);font-weight:700"></span>
        </div>
      </div>

      <!-- BEFORE & AFTER TRANSFORMATIONS -->
      <div>
        <h4 style="color:var(--cyan);font-size:1.05rem;margin-bottom:0.75rem">⚡ 1/10 Failing Response vs. 10/10 Masterclass Transformation</h4>
        <div style="display:flex;flex-direction:column;gap:1.25rem">
          ${rec.transformations.map(t => `
            <div class="glass-card" style="padding:1.25rem">
              <h5 style="font-size:0.95rem;color:var(--text-primary);margin-bottom:0.75rem">${t.question}</h5>
              
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1rem">
                <!-- Poor -->
                <div style="padding:1rem;background:rgba(244,63,94,0.06);border:1px solid rgba(244,63,94,0.25);border-radius:8px">
                  <div style="font-size:0.7rem;font-weight:800;color:var(--rose);margin-bottom:0.4rem">❌ THE 1/10 ANSWER (Why AI Evaluators Failed It)</div>
                  <div style="font-size:0.8rem;color:var(--text-secondary);line-height:1.6;font-style:italic">${t.poorAnswer}</div>
                  <div style="margin-top:0.6rem;font-size:0.72rem;color:var(--rose)"><strong>Evaluator Flaw:</strong> ${t.poorWhy}</div>
                </div>

                <!-- Stellar -->
                <div style="padding:1rem;background:rgba(0,255,200,0.06);border:1px solid rgba(0,255,200,0.3);border-radius:8px">
                  <div style="font-size:0.7rem;font-weight:800;color:var(--cyan);margin-bottom:0.4rem">✅ THE 10/10 ANSWER (Why Evaluators Give Full Marks)</div>
                  <div style="font-size:0.8rem;color:var(--text-primary);line-height:1.6">${t.stellarAnswer}</div>
                  <div style="margin-top:0.6rem;font-size:0.72rem;color:var(--cyan)"><strong>Evaluator Victory:</strong> ${t.stellarWhy}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- TAB 4: 45-MIN MOCK SIMULATOR -->
    <div id="atab-simulator" class="acc-tab-content" style="display:none">
      <div class="mock-cockpit glass-card">
        <div class="cockpit-header">
          <div>
            <h3 style="color:var(--cyan);font-size:1.15rem;margin-bottom:0.25rem">⏱️ Live 45-Minute Enterprise Mock Interview Cockpit</h3>
            <p style="font-size:0.8rem;color:var(--text-secondary)">Practice under timed conditions. Test instant retrieval, active recall, feynman explanations, and project citations.</p>
          </div>
          <div class="timer-controls">
            <div class="timer-digits" id="acc-mock-timer-display">45:00</div>
            <div class="timer-btn-row">
              <button class="btn-timer btn-start" id="btn-acc-timer-toggle" onclick="toggleAccMockTimer()">Start Timer</button>
              <button class="btn-timer btn-reset" onclick="resetAccMockTimer()">Reset</button>
            </div>
          </div>
        </div>

        <div class="cockpit-phases">
          <div class="phase-chip active" id="acc-phase-1">1. Self-Intro (3m)</div>
          <div class="phase-chip" id="acc-phase-2">2. Python &amp; Logic (10m)</div>
          <div class="phase-chip" id="acc-phase-3">3. SQL &amp; Data (10m)</div>
          <div class="phase-chip" id="acc-phase-4">4. ML Mechanics (12m)</div>
          <div class="phase-chip" id="acc-phase-5">5. Project Defense (10m)</div>
        </div>

        <!-- ACTIVE QUESTION CARD -->
        <div class="active-question-card" id="acc-mock-question-box">
          <div class="aq-meta">
            <span class="aq-round" id="acc-aq-round">ROUND 1 · SELF-INTRODUCTION &amp; STORY</span>
            <span class="aq-diff diff-easy" id="acc-aq-diff">MANDATORY OPENER</span>
          </div>
          <div class="aq-title" id="acc-aq-title">"Pravin, please introduce yourself and walk us through your transition from Civil Engineering to Data Science."</div>
          
          <div class="aq-actions">
            <button class="btn-primary" onclick="revealAccMockAnswer()">👁️ Reveal Model Defense Answer</button>
            <button class="btn-ghost" onclick="randomizeAccMockQuestion()">🎲 Next Random Question</button>
            <button class="btn-ghost" onclick="speakAccMockQuestion()">🔊 Speak Prompt</button>
          </div>

          <!-- REVEALABLE CONTENT -->
          <div class="aq-revealed" id="acc-aq-revealed" style="display:none">
            <div class="aq-section">
              <div class="aq-sec-hdr" style="color:var(--cyan)">💡 Pravin's Tailored Defense Script</div>
              <div class="aq-sec-body" id="acc-aq-answer-body">
                ${data.scripts[0].script}
              </div>
            </div>

            <div class="aq-section" style="background:rgba(245,158,11,0.04);border-color:rgba(245,158,11,0.2)">
              <div class="aq-sec-hdr" style="color:var(--amber)">⚠️ Interviewer Trap Alert</div>
              <div class="aq-sec-body" id="acc-aq-trap-body">
                Do not recite your resume chronologically like a list. Group your experience by impact: Foundation (Civil Honors + Math) -> Practical Experience (Internship Studio 89.2% error reduction) -> Shipped Systems (CryptoCast, ERIA). Keep it under 90 seconds.
              </div>
            </div>

            <div class="aq-section" style="background:rgba(0,255,200,0.04);border-color:rgba(0,255,200,0.2)">
              <div class="aq-sec-hdr" style="color:var(--cyan)">🧠 Feynman Technique (Simplified Core)</div>
              <div class="aq-sec-body" id="acc-aq-feynman-body">
                "I model complex real-world systems mathematically—first in physical structures, now in high-dimensional machine learning."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 5: 4-ROUND INTERVIEW STRATEGY -->
    <div id="atab-strategy" class="acc-tab-content" style="display:none">
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.5rem">🎯 4-Round Enterprise Interview Pattern &amp; Rubric</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7">${data.strategy.overview}</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem">
        ${data.strategy.rounds.map(r => `
          <div class="round-card glass-card">
            <div class="round-num">${r.num}</div>
            <h4>${r.title}</h4>
            <div class="round-dur">⏱️ ${r.duration}</div>
            <div class="round-motto">"${r.motto}"</div>
            <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.75rem">${r.focus}</p>
            <div class="round-tips">
              <strong>Key Strategy:</strong>
              <ul>${r.tips.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 6: PITCH & DEFENSE SCRIPTS -->
    <div id="atab-scripts" class="acc-tab-content" style="display:none">
      <div class="scripts-stack">
        ${data.scripts.map(s => `
          <div class="script-card glass-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span class="tag cyan">${s.badge}</span>
              <span style="font-size:0.75rem;color:var(--text-muted);font-style:italic">${s.context}</span>
            </div>
            <h3 style="font-size:1.05rem;color:var(--text-primary);margin-bottom:0.75rem">${s.title}</h3>
            <div class="script-box">
              <pre style="white-space:pre-wrap;font-family:var(--font-sans);font-size:0.85rem;line-height:1.75;color:var(--text-primary)">${s.script}</pre>
            </div>
            <div class="script-takeaways">
              <strong style="color:var(--cyan);font-size:0.78rem">Core Takeaways:</strong>
              <ul>${s.keyTakeaways.map(k => `<li>${k}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 7: 10 CODING DRILLS (PYTHON & SQL) -->
    <div id="atab-drills" class="acc-tab-content" style="display:none">
      <div style="margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.35rem">💻 10 Essential Enterprise Python &amp; SQL Drills</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary)">Evaluators test problem-solving speed, Big-O efficiency, and relational querying hygiene. Study each optimal implementation.</p>
      </div>

      <div class="coding-grid">
        ${data.codingChallenges.map(c => `
          <div class="code-card glass-card">
            <div class="code-card-top">
              <span class="tag violet">${c.category}</span>
              <span class="difficulty-badge diff-${c.difficulty.toLowerCase().includes('easy') ? 'easy' : c.difficulty.toLowerCase().includes('hard') ? 'hard' : 'medium'}">${c.difficulty}</span>
            </div>
            <h4 style="font-size:0.95rem;margin:0.5rem 0 0.35rem">${c.title}</h4>
            <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.6rem">${c.desc}</p>
            
            <div class="code-sample-box">
              <div><strong>Input:</strong> <code>${c.input}</code></div>
              <div><strong>Output:</strong> <code>${c.output}</code></div>
              <div style="color:var(--cyan);margin-top:0.3rem"><strong>Complexity:</strong> ${c.complexity}</div>
            </div>

            <div style="font-size:0.75rem;color:var(--amber);margin:0.5rem 0;font-style:italic">
              🏢 Enterprise Context: ${c.enterpriseContext}
            </div>

            <button class="btn-ghost" style="width:100%;font-size:0.75rem;padding:0.4rem" onclick="toggleAccCodeSolution('${c.id}')">
              👁️ View Code Solution
            </button>

            <div class="code-solution-box" id="acc-sol-${c.id}" style="display:none;margin-top:0.75rem">
              <pre><code class="language-python">${c.solution.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 8: BEHAVIORAL STAR SUITE -->
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

    <!-- TAB 9: BUSINESS CASE STUDIES -->
    <div id="atab-cases" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(245,158,11,0.04);border:1px solid rgba(245,158,11,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--amber);font-weight:700;margin-bottom:0.3rem">💼 Enterprise ROI &amp; Product System Design Playbook (6 Cases)</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Hiring managers evaluate whether you understand business economics and system design. Here is how machine learning drives enterprise bottom-line ROI.</div>
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

    <!-- TAB 10: PORTFOLIO BUILDER GUIDE -->
    <div id="atab-builder" class="acc-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(0,255,200,0.04);border:1px solid rgba(0,255,200,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">🛠️ GitHub README &amp; Portfolio Engineering Framework</div>
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
    const target = document.getElementById('atab-' + tab);
    if (target) target.style.display = 'block';
    if (btn) btn.classList.add('active');
    if (window.addXP) window.addXP(10);
  };
};

/* ── Code Solution Toggle ── */
window.toggleAccCodeSolution = function (id) {
  const el = document.getElementById('acc-sol-' + id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (window.addXP) window.addXP(5);
  }
};

/* ── Pace Trainer Logic ── */
window.selectAccPaceDrill = function (idx) {
  accCurrentDrillIndex = idx;
  const drill = window.ACCELERATOR_DATA.scorecardRecovery.paceDrillTexts[idx];
  document.getElementById('acc-pace-drill-text').textContent = drill.text;
  document.getElementById('acc-pace-meta').textContent = `Word Count: ${drill.words} words · Target Time: ~${drill.targetSeconds} seconds (${Math.round(drill.words / (drill.targetSeconds / 60))} wpm)`;
  document.querySelectorAll('[id^="acc-pdrill-"]').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  resetAccPaceTrainer();
};

window.toggleAccPaceTrainer = function () {
  const btn = document.getElementById('btn-acc-pace-toggle');
  if (!accPaceRunning) {
    accPaceRunning = true;
    if (btn) { btn.textContent = 'Stop & Calculate WPM'; btn.classList.add('running'); }
    accPaceTimerInterval = setInterval(() => {
      accPaceSeconds++;
      const m = Math.floor(accPaceSeconds / 60);
      const s = accPaceSeconds % 60;
      document.getElementById('acc-pace-timer-display').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  } else {
    accPaceRunning = false;
    clearInterval(accPaceTimerInterval);
    if (btn) { btn.textContent = 'Start Reading Drill'; btn.classList.remove('running'); }
    
    // Calculate WPM
    const drill = window.ACCELERATOR_DATA.scorecardRecovery.paceDrillTexts[accCurrentDrillIndex];
    if (accPaceSeconds > 5) {
      const wpm = Math.round((drill.words / accPaceSeconds) * 60);
      let status = '';
      if (wpm < 80) status = '⚠️ Pace is under 80 WPM — aim to accelerate slightly without rushing!';
      else if (wpm <= 150) status = `🎉 Perfect Fluency: ${wpm} WPM (Ideal sweet spot: 120–145 WPM)`;
      else status = '⚠️ Over 150 WPM — slow down slightly for clear articulation.';
      document.getElementById('acc-pace-calculated-wpm').textContent = `Result: ${wpm} WPM · ${status}`;
    }
  }
};

window.resetAccPaceTrainer = function () {
  clearInterval(accPaceTimerInterval);
  accPaceRunning = false;
  accPaceSeconds = 0;
  const disp = document.getElementById('acc-pace-timer-display');
  if (disp) disp.textContent = '00:00';
  const calc = document.getElementById('acc-pace-calculated-wpm');
  if (calc) calc.textContent = '';
  const btn = document.getElementById('btn-acc-pace-toggle');
  if (btn) { btn.textContent = 'Start Reading Drill'; btn.classList.remove('running'); }
};

/* ── 45-Min Mock Timer ── */
window.toggleAccMockTimer = function () {
  const btn = document.getElementById('btn-acc-timer-toggle');
  if (!accTimerRunning) {
    accTimerRunning = true;
    if (btn) { btn.textContent = 'Pause Timer'; btn.classList.add('running'); }
    accTimerInterval = setInterval(() => {
      if (accSecondsRemaining > 0) {
        accSecondsRemaining--;
        updateAccTimerDisplay();
        updateAccPhases();
      } else {
        clearInterval(accTimerInterval);
        accTimerRunning = false;
        if (btn) btn.textContent = 'Session Complete!';
        alert('🎉 Mock Interview Time is Up! Great job completing the 45-minute simulation.');
      }
    }, 1000);
  } else {
    accTimerRunning = false;
    clearInterval(accTimerInterval);
    if (btn) { btn.textContent = 'Resume Timer'; btn.classList.remove('running'); }
  }
};

window.resetAccMockTimer = function () {
  clearInterval(accTimerInterval);
  accTimerRunning = false;
  accSecondsRemaining = 45 * 60;
  updateAccTimerDisplay();
  const btn = document.getElementById('btn-acc-timer-toggle');
  if (btn) { btn.textContent = 'Start Timer'; btn.classList.remove('running'); }
  updateAccPhases();
};

function updateAccTimerDisplay() {
  const el = document.getElementById('acc-mock-timer-display');
  if (!el) return;
  const m = Math.floor(accSecondsRemaining / 60);
  const s = accSecondsRemaining % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateAccPhases() {
  const elapsedMinutes = 45 - Math.floor(accSecondsRemaining / 60);
  document.querySelectorAll('.cockpit-phases .phase-chip').forEach(c => c.classList.remove('active'));
  
  if (elapsedMinutes < 3) {
    document.getElementById('acc-phase-1')?.classList.add('active');
  } else if (elapsedMinutes < 13) {
    document.getElementById('acc-phase-2')?.classList.add('active');
  } else if (elapsedMinutes < 23) {
    document.getElementById('acc-phase-3')?.classList.add('active');
  } else if (elapsedMinutes < 35) {
    document.getElementById('acc-phase-4')?.classList.add('active');
  } else {
    document.getElementById('acc-phase-5')?.classList.add('active');
  }
}

/* ── Mock Questions Randomizer ── */
window.randomizeAccMockQuestion = function () {
  accCurrentQuestionIndex = (accCurrentQuestionIndex + 1) % ACC_MOCK_QUESTIONS.length;
  const q = ACC_MOCK_QUESTIONS[accCurrentQuestionIndex];
  
  document.getElementById('acc-aq-round').textContent = q.round;
  document.getElementById('acc-aq-diff').textContent = q.diff;
  document.getElementById('acc-aq-diff').className = 'aq-diff ' + q.diffClass;
  document.getElementById('acc-aq-title').textContent = q.title;
  document.getElementById('acc-aq-answer-body').innerHTML = q.answer;
  document.getElementById('acc-aq-trap-body').textContent = q.trap;
  document.getElementById('acc-aq-feynman-body').textContent = q.feynman;
  
  document.getElementById('acc-aq-revealed').style.display = 'none';
  if (window.addXP) window.addXP(10);
};

window.revealAccMockAnswer = function () {
  const el = document.getElementById('acc-aq-revealed');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (window.addXP) window.addXP(10);
  }
};

window.speakAccMockQuestion = function () {
  if ('speechSynthesis' in window) {
    const text = document.getElementById('acc-aq-title')?.textContent || '';
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  } else {
    alert('Speech synthesis not supported in this browser.');
  }
};
