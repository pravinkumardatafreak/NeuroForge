/* ═════════════════════════════════════════════════════════════════════
   presentations.js — Complete Resume Flagship Projects Presentation Kit
   Slide-by-Slide Live Decks, 2-Min Pitches & Interview Defense Q&As
   Tailored for Pravin Kumar R · Aligned with GUVI & Enterprise Rubrics
   Covers ALL 7 Flagship Projects from Pravin's Resume & Verified Stack
═════════════════════════════════════════════════════════════════════ */

window.PRESENTATION_DATA = {
  projects: [
    // ── 1. OPENBIM BOQ VARIANCE ENGINE ──
    {
      id: 'openbim',
      title: '🏗️ OpenBIM BOQ Variance Engine',
      repo: 'pravinkumardatafreak/openbim-boq-variance-engine',
      subtitle: 'Automated 3D IFC4 BIM Architectural Quantity Extraction & Schedule Rate Variance Auditing',
      tech: 'OpenBIM IFC4, IfcOpenShell, CPWD DSR 2023, Relational SQL CTEs, TreeSHAP, Three.js 3D WebGL',
      metrics: '45-second automated audit vs. 3 weeks manual; 100% detection of quantity variance errors',
      openingPitch: `"Hello everyone. In major construction projects, budget overruns of 10% to 15% routinely occur due to discrepancies between 3D Building Information Modeling (BIM) architectural models and the Central Public Works Department (CPWD) Schedule of Rates. Traditionally, quantity surveyors take 2 to 3 weeks manually cross-referencing blueprints with spreadsheets.

I built the OpenBIM BOQ Variance Engine: a production AI auditing platform that programmatically parses volumetric geometry from IFC4 architectural files using IfcOpenShell, matches components against CPWD DSR 2023 item codes using relational SQL CTE joins, and isolates budget anomalies using an Isolation Forest coupled with TreeSHAP feature attribution. Evaluators can view flagged structural elements highlighted in red inside an interactive Three.js 3D WebGL viewer. The entire audit completes in 45 seconds."`,
      slides: [
        {
          num: '01', title: '1. Project Overview & ConTech Pain Point', color: 'amber',
          summary: 'The 10–15% Construction Cost Overrun Epidemic',
          bullets: [
            'Commercial infrastructure tenders suffer severe margin erosion from undetected discrepancies between 3D designs and contractor Bill of Quantities (BOQ).',
            'Manual verification takes 14–21 days per revision and is vulnerable to human clerical oversight.',
            'Mission: Create an automated, open-standard AI auditing engine capable of parsing industry-standard IFC4 files in seconds.'
          ]
        },
        {
          num: '02', title: '2. OpenBIM Architectural Geometry Extraction', color: 'amber',
          summary: 'IfcOpenShell & Volumetric Extraction',
          bullets: [
            'Utilized IfcOpenShell to parse schema-compliant IFC4 building files without proprietary CAD licenses.',
            'Extracted structural quantities: IfcWall, IfcBeam, IfcColumn, and IfcSlab volumetric dimensions ($m^3$, $m^2$, linear meters).',
            'Extracted material associations (M25 Concrete, Structural Reinforcement Steel, Brick Masonry) directly from building element property sets (Psets).'
          ]
        },
        {
          num: '03', title: '3. Relational SQL & Rate Matching Layer', color: 'cyan',
          summary: 'Multi-Table CTE Joins with CPWD DSR 2023',
          bullets: [
            'Indexed 15,000+ items from the CPWD Delhi Schedule of Rates (DSR 2023) into a relational schema.',
            'Engineered Common Table Expression (CTE) SQL pipelines to map extracted IFC dimensional takeoffs to scheduled government pay items.',
            'Computed base cost = $\\text{IFC\\_Quantity} \\times \\text{DSR\\_Unit\\_Rate}$ alongside contractor tendered bid prices.'
          ]
        },
        {
          num: '04', title: '4. Anomaly Detection & TreeSHAP Attribution', color: 'violet',
          summary: 'Isolation Forest + Explainable AI Attribution',
          bullets: [
            'Trained an Isolation Forest on cost variance ratio, quantity markup delta, and historical regional coefficient deviations.',
            'Integrated TreeSHAP (SHapley Additive exPlanations) to explain exactly WHY an element is flagged (e.g., +28% steel density markup or mismatched mortar ratio).',
            'Transformed black-box outlier scores into actionable contractor audit reports.'
          ]
        },
        {
          num: '05', title: '5. 3D WebGL Visual Inspection Suite', color: 'rose',
          summary: 'Three.js Interactive Model Rendering',
          bullets: [
            'Built a browser-based 3D WebGL viewer using Three.js to render building geometry directly in client browsers.',
            'Anomalous elements with high TreeSHAP variance scores are dynamically highlighted in glowing red, normal elements in semi-transparent gray.',
            'Enables project managers to visually pinpoint unauthorized scope-creep billings on-screen.'
          ]
        },
        {
          num: '06', title: '6. Performance & Empirical Benchmarks', color: 'green',
          summary: 'Compressing Audit Time from 21 Days to 45 Seconds',
          bullets: [
            'Evaluated on full commercial building IFC models containing 4,500+ distinct structural components.',
            'Auditing latency reduced from 21 business days to 45 seconds on standard CPU hardware.',
            'Detected 100% of injected synthetic quantity inflation and unit-rate mismatch errors.'
          ]
        },
        {
          num: '07', title: '7. Business Impact & Production Architecture', color: 'cyan',
          summary: 'Defensible Cost Savings for EPC Contractors',
          bullets: [
            'Prevented an estimated 8% to 12% in unauthorized scope-creep claims across evaluated test tenders.',
            'Packaged with clean modular src/ code, Docker containerization, and automated Pytest test suites.',
            'Serves as Pravin\'s 1-in-10,000 competitive moat: combining B.E. Civil Engineering Honours with production AI engineering.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: Why did you use IfcOpenShell instead of proprietary APIs like Autodesk Revit API?',
          a: 'Autodesk Revit APIs require expensive proprietary desktop licenses and lock workflows into vendor silos. IfcOpenShell implements ISO 16739 (the OpenBIM IFC standard), which is open-source, platform-agnostic, and runs natively on headless Linux servers and Docker containers. This enables scalable automated cloud pipelines without software license bottlenecks.'
        },
        {
          q: 'Q2: How does TreeSHAP explain anomalies compared to raw Isolation Forest scores?',
          a: 'An Isolation Forest only outputs an anomaly score (a scalar from -1 to +1) indicating whether a data point is an outlier, but cannot explain WHY. TreeSHAP computes the Shapley value contribution of each feature to that anomaly score based on cooperative game theory. It explicitly tells the auditor: "This wall was flagged because its concrete rate is 32% above CPWD code 4.1.3, while its volume accounts for 45% of total floor variance."'
        },
        {
          q: 'Q3: How do you handle dimensional unit mismatches between CAD exports and DSR items?',
          a: 'IFC files can define length units in millimeters, meters, or inches depending on the architect\'s authoring software. In our preprocessing layer, we inspect the `IfcUnitAssignment` header entity to resolve the base scaling factor, converting all volumetric geometry into canonical SI units ($m^3$, $m^2$, $m$) before executing relational SQL joins against CPWD DSR rate items.'
        },
        {
          q: 'Q4: What SQL query pattern did you use to match complex item descriptions?',
          a: 'We utilized multi-table Common Table Expressions (CTEs) combined with window functions (`DENSE_RANK()`) and tokenized similarity joins. The first CTE extracts normalized IFC property sets; the second CTE stages CPWD item catalogs; the final query computes cosine similarity between tokenized description strings to resolve item codes with a confidence threshold $\\ge 0.85$.'
        },
        {
          q: 'Q5: How does this project reflect your background as a Civil Engineer transitioning to AI?',
          a: 'Civil Engineering gave me first-principles domain intuition for structural mechanics, concrete specifications, and BOQ estimation. Rather than abandoning this domain, I automated its most painful bottleneck using machine learning, relational databases, and 3D graphics. This makes my technical profile uniquely valuable to infrastructure, ConTech, and industrial analytics teams.'
        }
      ]
    },

    // ── 2. ERIA: EDUCATION REGULATION IMPACT ANALYZER ──
    {
      id: 'eria',
      title: '🤖 ERIA: Education Regulation Impact Analyzer',
      repo: 'pravinkumardatafreak/ERIA-Education-Analyzer',
      subtitle: 'Autonomous 4-Agent LangChain System for Structured Policy Extraction & Compliance Synthesis',
      tech: '4-Agent LangChain DAG, Groq LLaMA 3.3 70B, Critic Gate (LLM-as-a-Judge ≥ 8.5/10), Pydantic, FastAPI',
      metrics: 'Sub-15s response latency, $0.0087/run inference cost, 100% Pydantic JSON schema compliance',
      openingPitch: `"Hello everyone. When educational institutions, universities, and regulatory bodies receive multi-page policy mandates—such as UGC or AICTE circulars—human compliance teams spend days manually extracting requirements, cross-referencing deadlines, and assessing risk. Single-prompt LLM wrappers fail here because they hallucinate compliance criteria, drop critical clauses, and exceed latency budgets.

To solve this, I engineered ERIA (Education Regulation Impact Analyzer): an autonomous 4-agent LangChain system powered by Groq LLaMA 3.3 70B. Instead of a naive prompt, ERIA executes a Directed Acyclic Graph: an Extractor Agent isolates clauses; an Analyst Agent computes compliance risk indicators; a Strategic Planner Agent creates action roadmaps; and a Critic Agent acts as an automated LLM-as-a-Judge, scoring extraction grounding on a 10-point scale and forcing self-correction if the score is below 8.5/10.

Served via an asynchronous FastAPI endpoint with strict Pydantic JSON schema validation, ERIA delivers structured policy intelligence in under 15 seconds at an inference cost of only $0.0087 per document run."`,
      slides: [
        {
          num: '01', title: '1. Problem Statement: Why Single-Prompt LLMs Fail', color: 'cyan',
          summary: 'The Hallucination & Context Loss Bottleneck',
          bullets: [
            'Government educational regulations (UGC, AICTE, State Boards) span 30–80 pages of dense legalistic prose.',
            'Zero-shot single-prompt LLM calls suffer from attention degradation, hallucinating compliance requirements and missing crucial filing deadlines.',
            'Enterprise need: Deterministic schema contracts, automated fact verification, and sub-15s response latency.'
          ]
        },
        {
          num: '02', title: '2. The 4-Agent Directed Acyclic Graph (DAG)', color: 'cyan',
          summary: 'Specialized Role Division & Orchestration',
          bullets: [
            'Agent 1 (Extractor): Parses raw document chunks into structured entities (clauses, penalties, dates, affected stakeholders).',
            'Agent 2 (Analyst): Evaluates institutional exposure and assigns risk scores (Low/Medium/High/Critical).',
            'Agent 3 (Strategic Planner): Formulates actionable chronological implementation checklists.',
            'Agent 4 (Critic Gate): Acts as an adversarial evaluator verifying that every claim is grounded in original text.'
          ]
        },
        {
          num: '03', title: '3. Critic LLM-as-a-Judge Evaluation Gate', color: 'violet',
          summary: 'Autonomous Guardrailing & Self-Healing Loop',
          bullets: [
            'The Critic Agent evaluates the synthesis against three strict criteria: Grounding (Factual Faithfulness), Completeness, and Schema Adherence.',
            'Scores output on a 10-point scale; any response scoring $< 8.5/10$ is automatically rejected with actionable error feedback.',
            'Triggers an automated self-healing retry loop (capped at 2 retries), eliminating ungrounded hallucinations.'
          ]
        },
        {
          num: '04', title: '4. Strict Schema Contracts with Pydantic V2', color: 'violet',
          summary: 'Type-Safe JSON Outputs for Downstream APIs',
          bullets: [
            'Enforces strict Pydantic models for all agent outputs: `ExecutiveSummary`, `RiskMatrix`, `ComplianceActionItem`.',
            'Utilizes regex-validated date fields, ISO-8601 timestamps, and strictly bounded numeric risk indices.',
            'Guarantees 100% deterministic JSON output that can be directly ingested into enterprise databases without JSONDecodeError crashes.'
          ]
        },
        {
          num: '05', title: '5. Ultra-Low Latency Inference with Groq LLaMA 3.3 70B', color: 'rose',
          summary: 'LPU Hardware Acceleration & Token Economics',
          bullets: [
            'Powered by Groq\'s Language Processing Unit (LPU) architecture running open-weights LLaMA 3.3 70B Versatile.',
            'Generates output tokens at 280+ tokens/second, enabling 4 sequential agent handoffs to complete in sub-15 seconds.',
            'Real-time token cost profiler tracks input/output tokens, keeping inference cost at just $0.0087 per document run.'
          ]
        },
        {
          num: '06', title: '6. Asynchronous FastAPI Serving & Test Harness', color: 'green',
          summary: 'Production REST Endpoints & Pytest Coverage',
          bullets: [
            'Wrapped in an asynchronous FastAPI microservice with non-blocking async/await event loops.',
            'Includes comprehensive automated test suite (30 Pytest unit & integration tests) validating schema compliance and token limits.',
            'Containerized via multi-stage Docker build for lightweight production deployment.'
          ]
        },
        {
          num: '07', title: '7. Business Impact & Production Demonstration', color: 'amber',
          summary: 'Compressing 8 Hours of Legal Review to 15 Seconds',
          bullets: [
            'Reduced institutional policy analysis time from 8 human-hours down to under 15 seconds.',
            '100% verification accuracy: zero hallucinated regulatory penalties across 40 test policy circulars.',
            'Proves ability to architect production multi-agent systems far beyond basic ChatGPT prompt wrappers.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: How do you prevent infinite loops in multi-agent retry cycles?',
          a: 'We implement a deterministic `max_retries = 2` guardrail inside the agent supervisor state machine. If the Critic Gate rejects the output twice consecutively, the system falls back to a graceful error payload containing the Critic\'s explicit critique log and raw extracted chunks, logging a structured telemetry alert for human auditor review rather than looping indefinitely.'
        },
        {
          q: 'Q2: Why choose Groq LLaMA 3.3 70B instead of OpenAI GPT-4o?',
          a: 'While GPT-4o has strong reasoning, its API latency for multi-agent chains involving 4 sequential calls can exceed 45 to 60 seconds, which is unacceptable for interactive user experiences. Groq\'s custom LPU hardware generates tokens at over 280 tokens/second, allowing our entire 4-agent DAG to complete in under 15 seconds at a fraction of the token cost ($0.0087 vs ~$0.08 per run).'
        },
        {
          q: 'Q3: How does the Critic Agent score Grounding mathematically?',
          a: 'The Critic Agent is prompted as an automated LLM-as-a-Judge with few-shot calibration rubrics. It evaluates: (1) Token-level citation overlap: whether every named regulation and date maps to a specific source paragraph; (2) Semantic consistency: whether recommended actions contradict source clauses; and (3) Completeness: whether mandatory penalty sections were omitted. The composite score is computed on a scale from 1.0 to 10.0, requiring $\\ge 8.5$ for release.'
        },
        {
          q: 'Q4: How do Pydantic models protect against model output drift?',
          a: 'Language models occasionally return markdown code blocks (`json ...`), trailing commas, or missing keys. By passing our Pydantic schema through LangChain\'s `PydanticOutputParser` and validating with Pydantic V2, any malformed field triggers a immediate validation error that feeds into our self-correction prompt: "Your previous output failed validation on field [deadline]: expected ISO-8601 date, received string. Please rectify."'
        },
        {
          q: 'Q5: How would you scale this architecture to handle 500-page regulatory PDFs?',
          a: 'For 500-page corpora, sequential extraction exceeds context windows. We would implement a Map-Reduce chunking architecture: (1) Use semantic chunking based on document headers; (2) Execute parallel Extractor Agent worker tasks across document sections via Celery / Redis queues; (3) Pass intermediate summaries to an Aggregator Agent; and (4) Run the Critic Gate only on the unified synthesis.'
        }
      ]
    },

    // ── 3. SOIL GRAIN SIZE DISTRIBUTION ──
    {
      id: 'soil',
      title: '🔬 Soil Grain Size Distribution from Photography',
      repo: 'pravinkumardatafreak/soil-grain-size-distribution',
      subtitle: 'Predicting Full 11-Point Particle Size Distribution from Smartphone Images using Computer Vision & ML',
      tech: 'OpenCV Pixels-Per-Millimeter (PPM), Dual CNN (EfficientNet-B0 + ResNet-34), MultiTaskElasticNet, Physical CDF Layer',
      metrics: 'Out-Of-Fold MAE of 8.61%, Weighted Earth Mover\'s Distance (EMD) 55.21 (vs 86.14 baseline)',
      openingPitch: `"Hello everyone. In geotechnical and civil engineering, determining soil grain size distribution is foundational for foundation design, slope stability, and dam safety. Traditionally, engineers perform mechanical sieve analysis in laboratories—a destructive, time-consuming process requiring 24 hours of oven drying, mechanical shaking, and hydrometer sedimentation.

My Capstone project built a non-destructive machine learning system that predicts the full 11-point cumulative percentage passing curve (from 0.002 mm clay up to 200 mm cobbles) directly from smartphone photography.

The central machine learning hurdle was having only 24 distinct physical soil specimens against high-dimensional image pixels. Naive end-to-end deep networks fell into the 'Regression to the Mean' trap, plateauing at 86.14 Earth Mover's Distance.

I solved this with a 4-tier physics-grounded pipeline: (1) Sensor Pixels-Per-Millimeter (PPM) scale calibration; (2) Dual vision feature fusion combining EfficientNet-B0 for micro-texture and ResNet-34 for structural arrangement; (3) A coordinated MultiTaskElasticNet ensemble enforcing Group-Lasso sparsity across all 11 sieves simultaneously; and (4) A physical Cumulative Distribution Function (CDF) layer guaranteeing mathematical monotonicity. Our pipeline achieved an Out-of-Fold MAE of 8.61% and an EMD of 55.21."`,
      slides: [
        {
          num: '01', title: '1. The Geotechnical Engineering Problem', color: 'amber',
          summary: 'Mechanical Sieve Analysis vs Smartphone AI',
          bullets: [
            'Grain Size Distribution (GSD) curves govern soil classification (USCS/AASHTO), permeability, and shear strength.',
            'Laboratory sieve shaking takes 24 hours, requires bulky mechanical shakers, and destroys sample morphology.',
            'Objective: Predict the 11 sieve percentages [$0.002, 0.0063, 0.02, 0.063, 0.2, 0.63, 2.0, 6.3, 20.0, 63.0, 200.0$ mm] from a single smartphone photo.'
          ]
        },
        {
          num: '02', title: '2. The Core ML Trap: Regression to the Mean', color: 'rose',
          summary: 'Why End-to-End Deep Learning Failed',
          bullets: [
            'Dataset constraint: Only 24 ground-truth soil specimens available across various iPhone, Samsung, and Motorola devices.',
            'Unconstrained deep neural networks (ResNet-50 / ViT) severely overfitted, collapsing predictions to the global dataset mean.',
            'Baseline Weighted Earth Mover\'s Distance (EMD) stalled at 86.14—proving that pure deep learning without physical constraints fails on small sample regimes.'
          ]
        },
        {
          num: '03', title: '3. Physical Scale Normalization with PPM', color: 'cyan',
          summary: 'Pixels-Per-Millimeter Camera Sensor Invariance',
          bullets: [
            'Different smartphone cameras have distinct sensor dimensions, focal lengths, and ground sampling distances.',
            'Engineered Pixels-Per-Millimeter (PPM) scaling: rescaled all input images by $\\frac{\\text{Target PPM}}{\\text{Camera PPM}}$ to a canonical 15.0 PPM resolution.',
            'Guarantees that a $1\\,\\text{mm}$ soil particle occupies the exact same pixel width regardless of whether captured on an iPhone 13 or Samsung Galaxy.'
          ]
        },
        {
          num: '04', title: '4. Dual-Backbone Vision Feature Fusion', color: 'violet',
          summary: 'EfficientNet-B0 (Texture) + ResNet-34 (Structure)',
          bullets: [
            'Extracted 1,280 features from pre-trained EfficientNet-B0 (capturing fine grain color, surface roughness, and micro-texture).',
            'Extracted 512 features from ResNet-34 (capturing macroscopic spatial arrangement, void boundaries, and particle contour gradients).',
            'Fused into a rich 1,794-dimensional representation combining micro and macro morphological signals.'
          ]
        },
        {
          num: '05', title: '5. Multi-Task Elastic Net & Group-Lasso Sparsity', color: 'violet',
          summary: 'Joint Feature Selection Across All 11 Sieves',
          bullets: [
            'Standard independent regressions ignore correlations between adjacent sieve diameters.',
            'Utilized `MultiTaskElasticNet` with $L_1$ row-norm penalty: $\\mathcal{L}(W) = \\frac{1}{2N}\\|Y - XW\\|_F^2 + \\alpha \\rho \\sum_j \\|W_{j,:}\\|_2 + \\frac{\\alpha(1-\\rho)}{2}\\|W\\|_F^2$.',
            'Enforces Group-Lasso row-sparsity: all 11 sieves must agree to select or discard a visual feature together, eliminating spurious camera noise.'
          ]
        },
        {
          num: '06', title: '6. Physics-Informed Cumulative Distribution Layer', color: 'cyan',
          summary: 'Mathematical Monotonicity & Boundary Enforcement',
          bullets: [
            'Physical Axiom 1 (Monotonicity): A larger sieve can NEVER retain less cumulative soil than a smaller sieve ($F_i \\le F_{i+1}$).',
            'Physical Axiom 2 (Bounds): Cumulative passing must remain strictly bounded within $[0, 100]\\%$.',
            'Engineered a differentiable CDF layer applying monotonic sorting and boundary clipping, preventing physically impossible curves.'
          ]
        },
        {
          num: '07', title: '7. Final Out-of-Fold Validation Results', color: 'green',
          summary: 'SOTA Benchmark: 55.21 EMD & 8.61% MAE',
          bullets: [
            'Validated via 10-seed 5-fold Grouped Cross-Validation (50 total fits) to guarantee zero data leakage between photos of the same soil.',
            'Weighted Earth Mover\'s Distance slashed from 86.14 baseline down to 55.21.',
            'Out-of-Fold Median Absolute Error: 8.61% across all sieve diameters.',
            'Published as an interactive modular CLI and reproducible Kaggle pipeline.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: Why did you evaluate with Weighted Earth Mover\'s Distance (EMD) instead of standard Mean Squared Error (MSE)?',
          a: 'MSE treats errors across all sieve sizes independently, ignoring the physical ordering of particle diameters. EMD (also known as Wasserstein distance) calculates the physical "work" required to transform the predicted probability mass into the true distribution curve, weighted by the logarithmic distance between adjacent sieve diameters $\\Delta \\log_{10}(x_i)$. In geotechnical engineering, predicting that sand is silt is far less penalized by MSE than predicting that boulders are clay, whereas EMD penalizes distant physical mismatches correctly.'
        },
        {
          q: 'Q2: How does MultiTaskElasticNet enforce "Group Sparsity"?',
          a: 'In standard Elastic Net, each target column has an independent weight vector. In `MultiTaskElasticNet`, the $L_1$ penalty is computed as the sum of Euclidean norms across each feature\'s row in the weight matrix: $\\sum_{j=1}^D \\|W_{j, :}\\|_2$. If the norm is zero, that visual feature is pruned simultaneously for all 11 sieves. This ensures our 1,794 features are filtered based on shared geological signal rather than random camera artifacts.'
        },
        {
          q: 'Q3: Why was Pixels-Per-Millimeter (PPM) scaling essential for camera generalization?',
          a: 'Different smartphone sensors have different pixel pitches and optical characteristics. Without PPM scaling, a $2\\,\\text{mm}$ gravel grain photographed from 30 cm on an iPhone might span 80 pixels, but on a Samsung with high-resolution binning it might span 160 pixels. The neural network would incorrectly interpret the Samsung image as having twice as large particles. PPM normalization maps all physical dimensions to a standard 15.0 PPM scale.'
        },
        {
          q: 'Q4: How did you prevent data leakage during cross-validation?',
          a: 'Because we had multiple photographic crops taken of the same physical soil specimen from different angles and lighting, random K-Fold splitting would place crops of the same soil sample into both train and validation sets (severe data leakage). We used GroupKFold grouped strictly by physical soil sample ID, guaranteeing that validation folds contained completely unseen soil specimens.'
        },
        {
          q: 'Q5: What is the physical meaning of the Cumulative Distribution Function (CDF) layer?',
          a: 'In mechanical sieve analysis, soil is poured through a stack of progressively smaller sieves. Any soil that passes through a smaller sieve (e.g., 0.063 mm) MUST have already passed through every larger sieve above it (e.g., 0.2 mm, 2.0 mm). Therefore, cumulative percent passing must be monotonically non-decreasing. Our CDF layer enforces this physical law by sorting and clipping predictions to $[0, 100]\\%$.'
        }
      ]
    },

    // ── 4. HUBMAP TISSUE UNIT SEGMENTATION ──
    {
      id: 'hubmap',
      title: '🧬 HuBMAP Functional Tissue Unit Segmentation',
      repo: 'pravinkumardatafreak/HuBMAP-Tissue-Unit-Segmentation-SOTA',
      subtitle: 'SOTA Deep Learning Segmentation of Functional Tissue Units (FTUs) in Human Kidney Histological Scans',
      tech: 'PyTorch Swin-TransUNet, Shifted-Window Attention (W-MSA/SW-MSA), Monte Carlo Dropout (Epistemic Uncertainty), Tile Slicing',
      metrics: '0.6782 Validation Dice score; calibrated confidence heatmaps for high-stakes clinical decision support',
      openingPitch: `"Hello everyone. In clinical digital pathology and computational biology, identifying Functional Tissue Units (FTUs)—such as glomeruli in human kidney histology—is vital for staging chronic kidney disease and guiding transplants. However, Whole Slide Images (WSIs) are enormous gigapixel scans containing tens of thousands of microscopic tissue cells, where glomeruli occupy less than 2% of the pixel area.

I engineered an end-to-end biomedical segmentation pipeline in PyTorch utilizing a hybrid Vision Transformer architecture: Swin-TransUNet.

Standard Vision Transformers suffer from quadratic computational complexity $\\mathcal{O}(N^2)$ on high-resolution medical imagery. Swin Transformer solves this using Shifted-Window Self-Attention (W-MSA and SW-MSA), computing local self-attention within non-overlapping windows and cross-window connections with linear computational complexity $\\mathcal{O}(N)$.

Crucially, because medical AI cannot be a black box, I integrated Monte Carlo Dropout into the decoder. By running multiple forward passes at inference time with dropout enabled, the model generates epistemic uncertainty heatmaps alongside segmentation masks, highlighting ambiguous tissue boundaries for pathologist review. Our model achieved a state-of-the-art Validation Dice score of 0.6782."`,
      slides: [
        {
          num: '01', title: '1. The Clinical Pathology Challenge', color: 'violet',
          summary: 'Functional Tissue Unit (FTU) Glomeruli Segmentation',
          bullets: [
            'Glomeruli are the fundamental functional filtering units of the human kidney; counting and segmenting them is critical for assessing renal pathology.',
            'Whole Slide Images (WSIs) measure up to $100,000 \\times 100,000$ pixels, creating extreme memory bottlenecks for deep learning.',
            'Extreme class imbalance: FTUs occupy less than 2% of the total pixel space against dense background tissue.'
          ]
        },
        {
          num: '02', title: '2. High-Resolution Tile Slicing & Patch Extraction', color: 'violet',
          summary: 'Non-Destructive Overlapping Tile Slicing',
          bullets: [
            'Directly downsampling gigapixel scans destroys microscopic cell membranes and cellular morphology.',
            'Engineered an overlapping tile-slicing pipeline extracting $512 \\times 512$ patches with a 64-pixel stride overlap to eliminate edge boundary stitching artifacts.',
            'Filtered empty background tiles using saturation and OTSU thresholding, accelerating training by 65%.'
          ]
        },
        {
          num: '03', title: '3. Shifted-Window Self-Attention (Swin Transformer)', color: 'cyan',
          summary: 'Linear Complexity $\\mathcal{O}(N)$ Vision Transformer',
          bullets: [
            'Standard Vision Transformers (ViT) compute global self-attention across all tokens, causing quadratic memory explosion $\\mathcal{O}(N^2)$ on image patches.',
            'Swin Transformer partitions patches into local windows ($M=7$) and computes Window-based Multi-Head Self-Attention (W-MSA).',
            'Alternates with Shifted-Window Self-Attention (SW-MSA) by displacing window partitions by $(\\lfloor M/2 \\rfloor, \\lfloor M/2 \\rfloor)$, introducing cross-window connections with linear complexity.'
          ]
        },
        {
          num: '04', title: '4. Swin-TransUNet Hybrid Architecture', color: 'cyan',
          summary: 'Hierarchical Encoder + CNN Decoder Skip Connections',
          bullets: [
            'Employed Swin Transformer as the hierarchical encoder to capture long-range contextual relationships across tissue layers.',
            'Connected to a U-Net convolutional decoder via high-resolution skip connections to preserve precise microscopic boundary contours.',
            'Trained with a composite Loss = $0.5 \\times \\text{BCEWithLogitsLoss} + 0.5 \\times \\text{DiceLoss}$ to handle severe foreground/background class imbalance.'
          ]
        },
        {
          num: '05', title: '5. Monte Carlo Dropout for Epistemic Uncertainty', color: 'rose',
          summary: 'Clinical Safety: Generating Pathologist Confidence Heatmaps',
          bullets: [
            'Standard neural networks output overconfident probability scores even when presented with ambiguous or damaged histological artifacts.',
            'Integrated Monte Carlo (MC) Dropout in the decoder layers: executed $T=10$ stochastic forward passes at inference time with dropout ($p=0.2$) active.',
            'Computed predictive mean mask $\\mu = \\frac{1}{T}\\sum p_t$ and pixel-wise variance $\\sigma^2 = \\frac{1}{T}\\sum (p_t - \\mu)^2$ to map epistemic uncertainty.'
          ]
        },
        {
          num: '06', title: '6. Validation Benchmark & Leaderboard Results', color: 'green',
          summary: '0.6782 Validation Dice Score',
          bullets: [
            'Evaluated on human kidney histological scans using 5-fold cross-validation with GroupKFold by patient ID.',
            'Achieved a strong Validation Dice score of 0.6782 and an Intersection-over-Union (IoU) of 0.5131.',
            'Outperformed standard vanilla U-Net baseline (0.5841 Dice) by nearly 10 percentage points.'
          ]
        },
        {
          num: '07', title: '7. Clinical Translation & Microservice Serving', color: 'amber',
          summary: 'Production AI for Healthcare Platforms (Meditab IMS / Hospitals)',
          bullets: [
            'Provides pathologists with both the predicted mask and an uncertainty overlay—guaranteeing human-in-the-loop verification on ambiguous boundaries.',
            'Packaged with TorchScript and ONNX Runtime FP16 export for rapid hospital server deployment.',
            'Directly transferable to clinical healthcare AI roles (e.g. Meditab Intelligent Medical Software).'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: What is the difference between Epistemic Uncertainty and Aleatoric Uncertainty in medical imaging?',
          a: 'Aleatoric uncertainty is inherent noise in the data itself—such as sensor blur, poor tissue staining, or scanner illumination artifacts. It cannot be reduced by collecting more training data. Epistemic uncertainty is model ignorance—occurring when the network encounters novel tissue structures or rare pathologies not well represented in training data. By using Monte Carlo Dropout, we sample from the posterior distribution over network weights, explicitly quantifying epistemic uncertainty so clinical pathologists know when the model is guessing.'
        },
        {
          q: 'Q2: How does Shifted-Window Attention solve the quadratic complexity problem of Vision Transformers?',
          a: 'In standard ViT, computing self-attention across an image with $H \\times W$ patches requires comparing every patch to every other patch, resulting in computational complexity $\\mathcal{O}((HW)^2)$. Swin Transformer restricts self-attention to non-overlapping local windows of size $M \\times M$ ($M=7$), resulting in complexity $\\mathcal{O}(4HW \\cdot M^2)$, which is linear with respect to image size $HW$. The shifted window partition (SW-MSA) in subsequent layers bridges window boundaries without increasing complexity.'
        },
        {
          q: 'Q3: Why did you use a combined BCE + Dice loss instead of standard Cross-Entropy alone?',
          a: 'In histology slides, glomeruli FTUs occupy less than 2% of the pixels, while 98% is background stroma. If trained on binary cross-entropy (BCE) alone, a trivial model predicting 100% background would achieve 98% accuracy while being completely useless. Dice loss directly maximizes the harmonic mean of precision and recall (Intersection over Union), penalizing false negatives heavily. Combining BCE with Dice loss provides smooth gradient flow while maintaining robust segmentation of tiny foreground targets.'
        },
        {
          q: 'Q4: How do you reassemble sliced $512 \\times 512$ tiles back into a gigapixel Whole Slide Image without visible grid lines?',
          a: 'We use overlapping sliding window tile inference with a 64-pixel stride margin and a 2D Gaussian apodization weighting mask. Pixels near the center of each tile receive higher weights, while pixels near the tile boundaries receive lower weights. When tile probabilities are blended in the full-scale image accumulator, boundary stitching artifacts are completely eliminated.'
        },
        {
          q: 'Q5: How would you export this PyTorch model for real-time edge serving in a hospital scanner?',
          a: 'We trace the trained model with TorchScript (`torch.jit.trace`) and export to ONNX (Open Neural Network Exchange) with FP16 half-precision quantization. Using ONNX Runtime or TensorRT on hospital edge GPUs, inference latency per $512 \\times 512$ tile drops below 18 ms, allowing an entire Whole Slide Image to be processed in under 2 minutes.'
        }
      ]
    },

    // ── 5. INTERNSHIP STUDIO TELEMETRY REGRESSOR ──
    {
      id: 'telemetry',
      title: '📊 Production Sensor Telemetry Regressor',
      repo: 'Internship Studio (Verified Industry Experience)',
      subtitle: 'End-to-End Analytics & Predictive Modeling across 14,102 Physical Telemetry Records',
      tech: 'Python, Scikit-Learn, Robust IQR Auditing, PCA, K-Means Clustering, Random Forest, TreeSHAP',
      metrics: '89.2% error reduction (MAE 34.97 down to 3.78 kcal); R² lifted from 0.81 to 0.9979 across 14,102 records',
      openingPitch: `"Hello everyone. During my Data Science Internship at Internship Studio (Analytics & EdTech), I was tasked with solving a severe variance problem in the organization\'s student physical telemetry and calorie expenditure estimation engine.

The baseline prediction model suffered from an unacceptably high Mean Absolute Error (MAE) of 34.97 kcal and an R² of only 0.81, causing erratic reporting across daily user wellness tracking.

I built a production 4-stage machine learning pipeline across 14,102 raw telemetry records:
1. Conducted robust statistical auditing using Interquartile Range (IQR) filtering and distribution transformations to eliminate extreme sensor recording spikes.
2. Implemented unsupervised Principal Component Analysis (PCA) and K-Means clustering to uncover underlying student behavioral activity regimes.
3. Engineered non-linear interaction features combining metabolic equivalent metrics with exercise durations.
4. Trained a tuned Random Forest Regressor cross-validated with TreeSHAP feature importance.

The final model slashed MAE from 34.97 down to 3.78 kcal—an 89.2% error reduction—while lifting R² to 0.9979. The pipeline was modularized into reproducible PEP-8 Python scripts and integrated into the live reporting stack."`,
      slides: [
        {
          num: '01', title: '1. Business Context & Baseline Problem', color: 'amber',
          summary: 'High Variance in Sensor Telemetry Reporting',
          bullets: [
            'Internship Studio\'s wellness analytics platform relied on telemetry data from 14,102 participant activity sessions.',
            'Existing baseline model exhibited a high Mean Absolute Error (MAE) of 34.97 kcal and an R² of only 0.81.',
            'Erratic predictions led to customer complaints regarding calorie accuracy, demanding an 80%+ error reduction.'
          ]
        },
        {
          num: '02', title: '2. 14,102 Records Data Auditing & Cleaning', color: 'cyan',
          summary: 'Robust IQR Outlier Treatment & Transformation',
          bullets: [
            'Conducted thorough data hygiene on 14,102 records: audited missing values, checked physical feasibility boundaries, and identified sensor transmission glitches.',
            'Applied Interquartile Range (IQR) outlier filtering ($1.5 \\times \\text{IQR}$) on physiological columns (heart rate, body temperature, duration).',
            'Normalized skewed continuous variables using Box-Cox and robust standard scaling.'
          ]
        },
        {
          num: '03', title: '3. Unsupervised Behavioral Regime Segmentation', color: 'violet',
          summary: 'PCA Dimensionality Reduction + K-Means Clustering',
          bullets: [
            'Conducted Principal Component Analysis (PCA) to capture 95% of sensor variance across lower-dimensional orthogonal axes.',
            'Applied K-Means clustering (optimal $k$ determined via Elbow Method and Silhouette Analysis) to segment participants into distinct metabolic activity regimes (Sedentary, Moderate Endurance, High-Intensity Peak).',
            'Included regime cluster labels as categorical feature embeddings in the regression layer.'
          ]
        },
        {
          num: '04', title: '4. Non-Linear Interaction Feature Engineering', color: 'violet',
          summary: 'Physical Metabolic Equivalent (MET) Formulation',
          bullets: [
            'Engineered physiological domain features: Body Mass Index (BMI), heart-rate reserve percentage, and thermal exertion indices.',
            'Created metabolic interaction features: $\\text{MET\\_Interaction} = \\text{Heart\\_Rate} \\times \\text{Duration} \\times \\text{Body\\_Temp}$.',
            'Non-linear feature interactions allowed downstream trees to partition complex metabolic burn surfaces easily.'
          ]
        },
        {
          num: '05', title: '5. Model Training & Cross-Validation', color: 'rose',
          summary: 'Random Forest Regressor vs Linear & Gradient Boosting Baselines',
          bullets: [
            'Trained and evaluated multiple candidate architectures: Ridge Regression, Support Vector Regressors, Random Forest, and LightGBM.',
            'Random Forest Regressor with 250 estimators and constrained tree depth achieved optimal bias-variance balance.',
            'Tuned via 5-fold cross-validation with zero target leakage between train and test splits.'
          ]
        },
        {
          num: '06', title: '6. Quantifiable Results & Metric Validation', color: 'green',
          summary: '89.2% Error Reduction (MAE 34.97 → 3.78 kcal)',
          bullets: [
            'Mean Absolute Error (MAE) slashed from 34.97 down to 3.78 kcal (89.2% reduction in prediction error).',
            'Coefficient of Determination ($R^2$) lifted from 0.81 to 0.9979 on independent hold-out test records.',
            'Mean Squared Error (MSE) and Root Mean Squared Error (RMSE) dropped by over 93%.'
          ]
        },
        {
          num: '07', title: '7. TreeSHAP Explainability & Production Modularization', color: 'cyan',
          summary: 'Interpretable Machine Learning & Verified Deployment',
          bullets: [
            'Utilized TreeSHAP to attribute feature contributions: proved that Duration and Heart-Rate interaction drove 78% of model predictions.',
            'Packaged pipeline into modular, PEP-8 compliant Python modules (`data_prep.py`, `feature_engineering.py`, `train.py`, `evaluate.py`).',
            'Adopted by Internship Studio as the production standard for student activity telemetry reports.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: Why did you apply K-Means clustering before training the regression model?',
          a: 'Human metabolism is not a single homogeneous linear function. A person running at a heart rate of 150 bpm burns calories at a completely different rate than a person experiencing high heart rate from anxiety or fever while stationary. Applying PCA and K-Means segmented the 14,102 records into distinct behavioral regimes (Sedentary, Moderate, Peak Exertion). Feeding this regime cluster ID into the Random Forest enabled the ensemble trees to apply distinct splitting rules per metabolic state.'
        },
        {
          q: 'Q2: How did you ensure there was no data leakage when performing PCA and scaling?',
          a: 'We strictly adhered to the golden rule of machine learning preprocessing: all transformers (StandardScaler, PCA, and K-Means) were fit EXCLUSIVELY on the training split (80%). The test split (20%) was only transformed using the fitted training parameters (`transform()`, never `fit_transform()`). Fitting scalers on the entire dataset before splitting introduces target leakage by exposing the model to the test set\'s distribution variance.'
        },
        {
          q: 'Q3: Why is R² = 0.9979 reliable here, whereas in financial time series it can be a spurious artifact?',
          a: 'In financial time series (like Bitcoin price levels), high $R^2$ is often a spurious artifact of non-stationary random walks ($P_{t} \\approx P_{t-1}$). In physical sensor telemetry, however, calorie expenditure is governed by strict thermodynamic and biomechanical laws (work equals force times distance, and calories burned is a direct biological function of body mass, heart rate, and duration). Achieving $R^2 = 0.9979$ on out-of-sample data with an MAE of 3.78 kcal confirms that the ensemble model captured the true physical biomechanical relationship.'
        },
        {
          q: 'Q4: What insights did TreeSHAP provide regarding feature importance?',
          a: 'Standard Gini feature importance in Random Forests is biased toward high-cardinality continuous variables. TreeSHAP calculates exact game-theoretic Shapley values. It proved that while duration was the primary linear driver, our engineered non-linear interaction term (Heart Rate $\\times$ Duration $\\times$ Body Temp) had the highest SHAP magnitude for explaining high-calorie outliers, validating our domain feature engineering.'
        },
        {
          q: 'Q5: How does this verified internship experience validate your readiness for a full-time Data Scientist role?',
          a: 'It proves that I have worked with large, noisy real-world datasets (14,102 records), taken an inaccurate baseline model (MAE 34.97), and systematically improved it by 89.2% using rigorous statistical data cleaning, unsupervised segmentation, and cross-validated modeling. Furthermore, it demonstrates my commitment to writing clean, modular PEP-8 production code that can be deployed directly into live operations.'
        }
      ]
    },

    // ── 6. CRYPTOCAST & SPACE TELEMETRY SEQUENCE FORECASTER ──
    {
      id: 'crypto',
      title: '📈 CryptoCast & Space Telemetry Forecaster',
      repo: 'pravinkumardatafreak/cryptocast & space-telemetry-',
      subtitle: 'Multi-Horizon Time-Series Forecasting with Reversible Instance Normalization (RevIN) & Walk-Forward Validation',
      tech: 'PyTorch, Multi-Channel LSTM, PatchTST, RevIN Layer, Chronological WFV, Groq LLaMA, Streamlit',
      metrics: '1-Day MAPE of 2.06% (R²=0.9921), 3-Day MAPE 3.85%, 7-Day MAPE 5.93%, zero future lookahead',
      openingPitch: `"Hello everyone. Financial markets and industrial telemetry operate with extreme non-stationary volatility, where statistical distributions drift constantly over time. Traditional econometric models fail to capture non-linear sequence dependencies, while standard deep neural networks suffer catastrophic distribution shift when test environments deviate from training regimes.

I built CryptoCast and space-telemetry-: a multi-horizon deep learning forecasting system built in PyTorch that predicts sequence returns across 1-day, 3-day, and 7-day horizons from 60-day lookback sequences.

The critical engineering breakthrough was integrating a Reversible Instance Normalization (RevIN) layer directly before our LSTM and PatchTST networks. RevIN normalizes each input sequence instance to zero-mean and unit-variance, then reverses the affine transformation at the output head, mathematically eliminating temporal distribution drift.

Evaluated using rigorous Chronological Walk-Forward Validation (WFV) with zero future data leakage, our 1-Day LSTM achieved a test MAPE of 2.06% and an R² of 0.9921, outperforming naive random-walk baselines. Deployed as a 10-page interactive Streamlit analytics suite."`,
      slides: [
        {
          num: '01', title: '1. Domain Introduction & Volatility Dynamics', color: 'amber',
          summary: 'Continuous 24/7 Time-Series & Regime Shifts',
          bullets: [
            'Financial crypto assets and space telemetry operate 24/7 without market halts, exhibiting non-linear volatility clustering.',
            'Traditional linear ARIMA models fail to capture complex non-linear temporal correlations and regime shifts.',
            'Deep learning sequence architectures (LSTM, PatchTST) offer the expressive capacity needed to model temporal dependencies.'
          ]
        },
        {
          num: '02', title: '2. Multi-Horizon Problem Formulation', color: 'amber',
          summary: 'Predicting 1D, 3D, and 7D Ahead Simultaneously',
          bullets: [
            'Target: Predict future log returns $r = \\ln(P_{t+h} / P_t)$ for $h \\in \\{1, 3, 7\\}$ days.',
            'Lookback window: Past 60 trading days ($T=60$) capturing quarterly cyclicality.',
            'Simultaneous multi-output Dense head outputs all 3 horizon forecasts in a single unified forward pass.'
          ]
        },
        {
          num: '03', title: '3. Data Preprocessing & Zero-Leakage Law', color: 'cyan',
          summary: 'Chronological Splitting & Stationary Targets',
          bullets: [
            'Dataset: ~5,000 daily records (Yahoo Finance & Space telemetry channels).',
            'Chronological 80/20 train/test split: strictly NO random shuffling (shuffling time series causes catastrophic future leakage).',
            'MinMaxScaler fit ONLY on the first 80% training partition; transformed the 20% hold-out test partition independently.'
          ]
        },
        {
          num: '04', title: '4. Stationarity & Augmented Dickey-Fuller (ADF) Test', color: 'cyan',
          summary: 'Log Returns Eliminate Spurious Regression',
          bullets: [
            'Raw price levels are non-stationary (ADF test $p > 0.05$), which causes spurious regression artifacts and vanishing/exploding gradients.',
            'Transforming to logarithmic returns rejected the null hypothesis ($p < 0.001$), guaranteeing a strictly stationary target distribution.',
            'Proves understanding of first-principles econometric time-series theory.'
          ]
        },
        {
          num: '05', title: '5. Feature Engineering Ablation Study', color: 'violet',
          summary: 'Lagging Indicators vs Whitepaper Protocol Features',
          bullets: [
            'Version 1 (Reactive): Lagged technical indicators (RSI_14, SMA_7, SMA_30, Volatility_30).',
            'Version 2 (Protocol Grounding): Nakamoto protocol metrics (Block_Reward, Days_Since_Halving, Halving_Progress).',
            'Ablation Result: Incorporating protocol cycle features reduced test MAPE across all horizons by 18% over lagging technical indicators.'
          ]
        },
        {
          num: '06', title: '6. Reversible Instance Normalization (RevIN)', color: 'violet',
          summary: 'Eliminating Non-Stationary Distribution Shift in PyTorch',
          bullets: [
            'Standard neural networks degrade when test series mean and variance drift away from training parameters.',
            'Implemented RevIN: computes instance mean $\\mu$ and variance $\\sigma$ per input window, normalizes input to $\\mathcal{N}(0, 1)$, and un-normalizes output predictions.',
            'Maintains stable gradient updates and superior generalization across extreme volatility events.'
          ]
        },
        {
          num: '07', title: '7. Multi-Architecture Leaderboard', color: 'rose',
          summary: 'Benchmarking 1D-CNN, RNN, LSTM, Transformer, and PatchTST',
          bullets: [
            '1D-CNN: Fast local receptive field extraction; low latency baseline.',
            'LSTM: Gated memory cells (Forget, Input, Output) effectively capture 60-day sequential momentum.',
            'PatchTST: Sub-series patch-based Transformer with channel independence.',
            'Final Selection: LSTM wins 1-Day (2.06% MAPE); PatchTST wins 3-Day (3.85%) and 7-Day (5.93%).'
          ]
        },
        {
          num: '08', title: '8. Evaluation Metrics & The R² Paradox', color: 'rose',
          summary: 'Understanding Return-Level vs Price-Level R²',
          bullets: [
            'Price-level R² ($R^2 \\approx 0.99$) is largely an artifact of random-walk persistence ($P_t \\approx P_{t-1}$).',
            'Return-level R² (explaining 2% to 4% of price delta variance) represents the true quantitative predictive signal.',
            'Evaluated primarily on scale-independent Mean Absolute Percentage Error (MAPE) and Dollar MAE.'
          ]
        },
        {
          num: '09', title: '9. Walk-Forward Validation (WFV)', color: 'green',
          summary: 'Simulated Real-World Backtesting with Zero Future Leakage',
          bullets: [
            'Replaced standard static hold-out with 10 rolling Walk-Forward Validation windows.',
            'At each step, model trains on past data, forecasts the subsequent window, and slides forward.',
            'Guarantees that performance metrics reflect true production alpha rather than favorable test partition luck.'
          ]
        },
        {
          num: '10', title: '10. Streamlit Production Dashboard & AI Insights', color: 'green',
          summary: '10-Page Analytics Suite with Groq LLM Commentary',
          bullets: [
            'Built a 10-page Streamlit web suite with interactive backtesting, volatility cones, and portfolio simulation.',
            'Integrated Groq LLaMA to generate automated natural language commentary explaining forecast trends to quantitative traders.',
            'Cached model weights via `@st.cache_resource` for real-time sub-100ms dashboard refreshes.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: Why is shuffling time-series data considered catastrophic data leakage?',
          a: 'Time-series data has strict temporal causality: past states cause future states. If you shuffle data before splitting into train and test sets, observations from day $t+1$ end up in the training set while day $t$ is in the test set. The model simply interpolates between known future points, achieving artificial 99% accuracy in the lab that collapses to 0% in production.'
        },
        {
          q: 'Q2: How does Reversible Instance Normalization (RevIN) work mathematically?',
          a: 'RevIN applies a two-step affine transformation: (1) For an input sequence $x \\in \\mathbb{R}^{T \\times D}$, it calculates instance mean $\\mathbb{E}[x]$ and variance $\\text{Var}[x]$ across time, transforming $x_{\\text{norm}} = \\gamma \\frac{x - \\mathbb{E}[x]}{\\sqrt{\\text{Var}[x] + \\epsilon}} + \\beta$; (2) After passing through the neural network, the output is de-normalized using the original instance mean and variance: $\\hat{y} = \\frac{\\hat{y}_{\\text{norm}} - \\beta}{\\gamma} \\sqrt{\\text{Var}[x] + \\epsilon} + \\mathbb{E}[x]$. This removes non-stationary distribution shift while preserving trend magnitude.'
        },
        {
          q: 'Q3: What is the "R² Paradox" in financial and volatile time-series?',
          a: 'If you regress tomorrow\'s raw stock or crypto price against today\'s price, the $R^2$ will easily exceed 0.98 simply because tomorrow\'s price is usually within 1–2% of today\'s price (the random-walk persistence). However, this high $R^2$ is useless for trading. The true challenge is predicting the direction and magnitude of the change (the log return). Achieving an $R^2$ of even 2% to 5% on return series is considered exceptional in quantitative finance because it beats the market.'
        },
        {
          q: 'Q4: Why did LSTM outperform PatchTST on the 1-Day horizon, but PatchTST won on 7-Day?',
          a: 'Short horizons (1-day) are dominated by localized momentum and recent autoregressive friction, where recurrent gates in LSTMs excel at tracking immediate state transitions with low parameter overhead. Longer horizons (7-day) require capturing broader cyclical patterns across multiple sub-series patches; PatchTST\'s patch tokenization and multi-head attention effectively attend across global 60-day context without forgetting.'
        },
        {
          q: 'Q5: What are the primary structural bottlenecks of this dataset?',
          a: 'There are two key limitations: (1) Data starvation: Bitcoin has only completed 4 halving cycles in its entire history, meaning macro 4-year cyclical transitions have very few statistical samples; (2) The 2140 boundary: post-2140, block rewards drop to zero, converting protocol reward decay features from dynamic signals into static constants.'
        }
      ]
    },

    // ── 7. IMDB MOVIE RECOMMENDATION SYSTEM ──
    {
      id: 'imdb',
      title: '🎬 IMDb Movie Recommendation System',
      repo: 'pravinkumardatafreak/IMDb-Movie-Recommender',
      subtitle: 'Content-Based Filtering & Hybrid Re-Ranking Engine Built on NLP Storyline Semantics',
      tech: 'Python, Scikit-Learn, TF-IDF Vectorizer (1,2-grams), Cosine Similarity, NearestNeighbors, Streamlit',
      metrics: 'Sub-100ms inference latency, zero cold-start latency, hybrid 70% semantic + 30% rating scoring',
      openingPitch: `"Hello everyone. Modern entertainment platforms like Netflix, Spotify, and IMDb face a major content discovery bottleneck: users are overwhelmed by thousands of choices, while newly released content struggles to get discovered because traditional collaborative filtering algorithms require existing user ratings to generate recommendations.

I built the IMDb Movie Recommendation System: an end-to-end content-based recommendation engine built with Python, NLP, and Streamlit.

The pipeline transforms raw, unstructured movie storylines into 5,000-dimensional TF-IDF vectors using unigrams and bigrams. Using a NearestNeighbors model with cosine distance, the engine searches the high-dimensional plot space in sub-100 milliseconds.

To balance relevance with quality, I designed a Hybrid Re-Ranking score: combining 70% storyline semantic similarity with 30% normalized IMDb user ratings. Evaluators can search either by an existing movie title or by typing a custom free-form plot description. Because it relies on plot semantics, it completely eliminates the item cold-start problem."`,
      slides: [
        {
          num: '01', title: '1. Project Introduction & The Cold-Start Problem', color: 'cyan',
          summary: 'Content-Based Filtering vs Collaborative Filtering',
          bullets: [
            'Collaborative filtering relies on user-item interaction matrices (ratings, clicks, watch history), failing completely on brand-new movies (Item Cold Start).',
            'Content-based filtering solves this by vectorizing the intrinsic properties of the movie (storyline, genre, keywords).',
            'A movie released today can be recommended immediately without waiting for user reviews.'
          ]
        },
        {
          num: '02', title: '2. Objective & System Scope', color: 'cyan',
          summary: 'Sub-100ms Search across 5,000 Titles',
          bullets: [
            'Transform unstructured textual plot summaries into normalized numeric vectors.',
            'Provide dual search modes: Seed Title Lookup (finding movies similar to "Inception") and Custom Plot Query ("astronaut trapped in black hole").',
            'Deploy an interactive Streamlit application with real-time keyword explainability.'
          ]
        },
        {
          num: '03', title: '3. Data Acquisition & Selenium Web Scraping', color: 'violet',
          summary: 'Scraping 5,000+ Titles with Selenium WebDriver',
          bullets: [
            'Automated dynamic pagination and scraping across IMDb Advanced Search using Selenium.',
            'Extracted structured fields: Movie Title, Plot Description, IMDb Rating, Certificate, and Genre Tags.',
            'Cleaned and versioned datasets as CSV files for full offline reproducibility (`src/scraper.py`).'
          ]
        },
        {
          num: '04', title: '4. NLP Text Preprocessing Pipeline', color: 'violet',
          summary: 'Cleaning, Stopwords & Lemmatization',
          bullets: [
            'Case Normalization: Lowercases all text to ensure uniform token mapping.',
            'Punctuation Translation: Replaces punctuation with whitespace using `str.maketrans` to preserve compound words (e.g., "sci-fi" → "sci fi").',
            'NLTK Stopword Filtering: Strips 179 high-frequency English stopwords that carry zero discriminative plot signal.'
          ]
        },
        {
          num: '05', title: '5. TF-IDF Vectorization & N-Gram Architecture', color: 'rose',
          summary: '5,000 Features with Unigrams and Bigrams',
          bullets: [
            '`TfidfVectorizer(max_features=5000, ngram_range=(1, 2))` captures both single words and two-word concepts.',
            'Bigrams are essential for cinema: "space travel", "serial killer", and "haunted house" carry distinct semantic meaning that unigrams split.',
            'TF-IDF formula: $\\text{TF-IDF}(t, d) = \\text{TF}(t, d) \\times \\ln\\left(\\frac{1 + N}{1 + \\text{DF}(t)}\\right) + 1$.'
          ]
        },
        {
          num: '06', title: '6. Cosine Similarity & NearestNeighbors', color: 'rose',
          summary: 'Geometric Angle Measurement in Sub-100ms',
          bullets: [
            'Cosine similarity measures the angle between plot vectors: $\\cos(\\theta) = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}$, ignoring document length variations.',
            'Fitted a `NearestNeighbors(metric="cosine", algorithm="brute")` model over the scipy sparse matrix.',
            'Sub-100ms latency: computes top-5 nearest neighbors in milliseconds without allocating full $N \\times N$ dense memory.'
          ]
        },
        {
          num: '07', title: '7. Hybrid Re-Ranking & Streamlit Deployment', color: 'amber',
          summary: '70% Semantic Match + 30% Rating Quality Score',
          bullets: [
            'Hybrid Score = $0.7 \\times (1 - \\text{Cosine\\_Distance}) + 0.3 \\times (\\text{Rating} / 10.0)$.',
            'LIME-inspired Explainability: `_get_matching_keywords()` extracts shared TF-IDF terms so users know WHY a movie was suggested.',
            'Deployed via Streamlit with `@st.cache_resource` for instant, production-ready response times.'
          ]
        }
      ],
      vivaQuestions: [
        {
          q: 'Q1: Why did you use TF-IDF instead of simple word frequency counts?',
          a: 'Raw word frequency treats all words equally. In movie descriptions, common words like "man", "woman", or "finds" appear frequently across all genres, providing zero discriminative power. TF-IDF computes the Term Frequency multiplied by the Inverse Document Frequency, which exponentially down-weights common words and amplifies rare, genre-defining terms like "zombie", "wormhole", or "submersible".'
        },
        {
          q: 'Q2: Why is Cosine Similarity preferred over Euclidean Distance for text embeddings?',
          a: 'Euclidean distance measures the physical distance between vector endpoints, which is heavily distorted by text length. A brief 2-sentence synopsis and a detailed 5-paragraph plot of the exact same sci-fi movie will point in the exact same semantic direction, but will have very different vector magnitudes. Euclidean distance would wrongly penalize the longer text as dissimilar, whereas Cosine Similarity measures only the angle $\\theta$ between the vectors, making it completely invariant to document length.'
        },
        {
          q: 'Q3: How does your system solve the "Cold Start Problem"?',
          a: 'Collaborative filtering suffers from severe cold start because it cannot recommend a new item until multiple users have already rated it. Our system is content-based: the moment a new movie is added with an official synopsis, our NLP pipeline extracts its TF-IDF representation and places it into the vector space immediately. It can be recommended in millisecond zero-shot fashion with zero prior ratings.'
        },
        {
          q: 'Q4: What is the benefit of including Bigrams (ngram_range=(1,2))?',
          a: 'In natural language, the combination of two words often has the exact opposite or a completely distinct meaning compared to the individual words. For example, "not" and "good" as unigrams might suggest a positive sentiment if "good" is counted, whereas the bigram "not good" captures the true negative context. In film plots, bigrams like "time travel", "artificial intelligence", and "high school" provide vital semantic categorization.'
        },
        {
          q: 'Q5: Why did you use NearestNeighbors(algorithm="brute") with a sparse matrix instead of precomputing an N x N similarity matrix?',
          a: 'Storing an $N \\times N$ dense similarity matrix for 10,000 movies requires $10,000 \\times 10,000 \\times 4\\,\\text{bytes} \\approx 400\\,\\text{MB}$ of memory, which grows quadratically $\\mathcal{O}(N^2)$. Storing the sparse TF-IDF matrix takes only a few megabytes. At query time, `NearestNeighbors(algorithm="brute")` performs a sparse matrix dot product against the query vector in under 5 milliseconds, saving massive RAM and enabling dynamic catalog expansion.'
        }
      ]
    }
  ]
};

// ── Render Function for Full Presentation Kit ──
window.renderPresentationKit = function() {
  const el = document.getElementById('present-content');
  if (!el) return;

  const data = window.PRESENTATION_DATA;
  let activeProject = data.projects[0].id;

  function buildDeckHTML(proj) {
    return `
      <div class="glass-card" style="padding:1.4rem;margin-bottom:1.5rem;border-color:rgba(0,255,200,0.25)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.8rem">
          <div>
            <h3 style="color:var(--cyan);font-size:1.25rem;margin:0 0 0.25rem 0">${proj.title}</h3>
            <div style="font-size:0.82rem;color:var(--text-muted)">${proj.subtitle}</div>
          </div>
          <span class="tag cyan" style="font-size:0.7rem;font-weight:600">${proj.repo}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1rem;font-size:0.8rem">
          <span style="background:rgba(255,255,255,0.05);padding:0.3rem 0.6rem;border-radius:6px;color:var(--text-secondary)"><strong>Tech:</strong> ${proj.tech}</span>
          <span style="background:rgba(0,255,200,0.06);border:1px solid rgba(0,255,200,0.2);padding:0.3rem 0.6rem;border-radius:6px;color:var(--green);font-weight:600">🏆 ${proj.metrics}</span>
        </div>

        <!-- 2-Minute Opening Pitch -->
        <div style="background:rgba(124,58,237,0.06);border:1px solid rgba(124,58,237,0.25);border-radius:10px;padding:1rem;margin-bottom:1.5rem">
          <div style="font-size:0.82rem;color:var(--violet);font-weight:700;margin-bottom:0.4rem">🎯 2-Minute Evaluator Presentation Script (The Opening Pitch)</div>
          <div style="font-size:0.84rem;color:var(--text-primary);line-height:1.5;white-space:pre-line;font-style:italic">${proj.openingPitch}</div>
        </div>

        <!-- Slide Decks Grid -->
        <h4 style="color:var(--text-primary);font-size:1rem;margin:1.2rem 0 0.8rem 0">📑 Slide-by-Slide Live Evaluation Deck (${proj.slides.length} Slides)</h4>
        <div class="slides-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:1rem;margin-bottom:1.5rem">
          ${proj.slides.map(s => `
            <div class="slide-card glass-card" onclick="toggleSlide(this,'${proj.id}-${s.num}')" style="cursor:pointer;padding:1rem">
              <div class="slide-num" style="color:var(--${s.color});font-weight:700;font-size:0.75rem;margin-bottom:0.25rem">SLIDE ${s.num}</div>
              <h4 style="font-size:0.92rem;margin:0 0 0.35rem 0;color:var(--text-primary)">${s.title}</h4>
              <p style="font-size:0.8rem;color:var(--text-secondary);margin:0 0 0.5rem 0">${s.summary}</p>
              <div class="slide-expand" id="slide-${proj.id}-${s.num}">
                <ul style="padding-left:1.1rem;margin:0;font-size:0.78rem;color:var(--text-muted);line-height:1.45">${s.bullets.map(b=>`<li style="margin-bottom:0.35rem">${b}</li>`).join('')}</ul>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Top 5 Interview Defense Questions -->
        <h4 style="color:var(--rose);font-size:1rem;margin:1.5rem 0 0.8rem 0">🎤 Top 5 Technical Defense Questions & Winning Answers</h4>
        <div style="display:flex;flex-direction:column;gap:0.85rem">
          ${proj.vivaQuestions.map(q => `
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-left:3px solid var(--rose);border-radius:8px;padding:0.9rem">
              <div style="font-size:0.86rem;font-weight:700;color:var(--text-primary);margin-bottom:0.35rem">${q.q}</div>
              <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5">${q.a}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  el.innerHTML = `
    <div class="section-header">
      <h2>📊 Live Presentation Kit & Defense War Room</h2>
      <p>Slide-by-slide talking scripts, opening pitches, and technical defense Q&As for ALL 7 flagship projects on Pravin's resume.</p>
    </div>

    <!-- Project Tabs Navigation -->
    <div class="viva-filters" style="margin-bottom:1.5rem;flex-wrap:wrap">
      ${data.projects.map((p, idx) => `
        <button class="filter-btn ${idx===0?'active':''}" onclick="switchProjectDeck('${p.id}', this)">${p.title}</button>
      `).join('')}
      <button class="filter-btn" onclick="switchProjectDeck('eval', this)">⏱️ 30-Min Rubric</button>
      <button class="filter-btn" onclick="switchProjectDeck('eda', this)">🔍 15-Point EDA</button>
    </div>

    <!-- Project Content Views -->
    ${data.projects.map((p, idx) => `
      <div id="deck-${p.id}" class="deck-content" style="${idx===0?'display:block':'display:none'}">
        ${buildDeckHTML(p)}
      </div>
    `).join('')}

    <!-- TAB: EVALUATION RUBRIC -->
    <div id="deck-eval" class="deck-content" style="display:none">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
        <div class="glass-card" style="padding:1.25rem">
          <h3 style="color:var(--cyan);font-size:1rem;margin-bottom:1rem">⏱️ Live Evaluation Schedule (30 Mins Total)</h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.85rem">
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>1. Self Introduction & Moat</span><strong style="color:var(--cyan)">3 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>2. Problem Statement & Walkthrough</span><strong style="color:var(--violet)">12 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>3. Mock Viva Questions Defense</span><strong style="color:var(--rose)">10 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>4. Mentor Feedback & Score</span><strong style="color:var(--amber)">5 Mins</strong>
            </div>
          </div>
        </div>
        <div class="glass-card" style="padding:1.25rem">
          <h3 style="color:var(--green);font-size:1rem;margin-bottom:1rem">🏆 Evaluation Scoring Rubric (60 Marks Total)</h3>
          <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.8rem">
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Code Quality & Modular Data Engineering</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Documentation & Architecture Diagrams</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Code Reusability (PEP-8 Modular Code)</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Presentation Quality & Pitch Delivery</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Task Accomplishment & Accuracy</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding-bottom:0.4rem">
              <span>5 Mock Viva Questions Defense</span><strong>10 Marks</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB: 15-POINT EDA -->
    <div id="deck-eda" class="deck-content" style="display:none">
      <div style="padding:1rem;background:rgba(56,189,248,0.04);border:1px solid rgba(56,189,248,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.85rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">🔍 15 Core EDA Questions (GUVI EDA Guide Reference)</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Use these 15 questions to structure your exploratory data analysis narrative during the live evaluation.</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:0.75rem">
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 01</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What are the basic characteristics?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Identify observations count, variable types, and memory footprints.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 02</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What is the overall structure?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Audit categorical distributions vs continuous target distributions.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 03</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What patterns exist in the data?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Detect temporal clustering, volatility regimes, and keyword n-grams.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 04</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Are there any outliers present?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Apply IQR and Z-score filtering without discarding real physical spikes.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 05</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What are the missing values?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Differentiate MCAR, MAR, and MNAR missing mechanisms.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 06</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What is the correctness of data?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Check sensor transmission bounds and schema types.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 07</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Is there correlation between variables?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Examine Pearson vs Spearman rank correlations for collinearity.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 08</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">How does it compare to past performance?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Benchmark against naive zero-rule or random-walk baselines.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 09</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Is there seasonality present?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Analyze periodic cyclicality and seasonal subseries plots.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 10</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">How much variability exists?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Calculate coefficient of variation to guide feature scaling.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 11</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Are there discrepancies in observations?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Investigate impossible physical readings (e.g. negative calories).</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 12</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">What explains unexpected results?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Probe why simpler models outperform complex ones on small data.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 13</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">How do different subsets behave?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Slice data by demographic or behavioral cluster regimes.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 14</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Do I need to transform variables?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Apply log returns for stationarity or Box-Cox for normality.</div></div>
        <div class="glass-card" style="padding:0.9rem"><div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION 15</div><div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0">Are there gaps in understanding?</div><div style="font-size:0.78rem;color:var(--text-secondary)">Document structural regime limitations transparently.</div></div>
      </div>
    </div>
  `;

  window.switchProjectDeck = function(deckId, btn) {
    document.querySelectorAll('.deck-content').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.viva-filters .filter-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById('deck-' + deckId);
    if (target) target.style.display = 'block';
    if (btn) btn.classList.add('active');
    if (window.addXP) window.addXP(10);
  };

  window.toggleSlide = function(card, id) {
    const el = document.getElementById('slide-' + id);
    if (el) el.classList.toggle('open');
    if (window.addXP) window.addXP(5);
  };
};
