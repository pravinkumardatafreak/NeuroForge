/* ═════════════════════════════════════════════════════════════════════
   zoho.js — Zoho IT Solutions Mock Interview Preparation Engine
   Personalized War Room for Pravin Kumar R · Data Scientist Track
   Grounded in Pravin's Real GitHub Codebases & Verifiable Background
   Featuring GUVI MyLineupX AI Mock Scorecard Diagnostic & Recovery
═════════════════════════════════════════════════════════════════════ */

window.ZOHO_MOCK_DATA = {
  candidate: {
    name: 'Pravin Kumar R',
    title: 'Data Scientist (Zoho IT Solution)',
    education: 'B.E. Civil Engineering (First Class Honors) · Rajalakshmi Engineering College | Master Data Science (HCL GUVI / IIT Madras Research Park)',
    internship: 'Data Science Intern — Internship Studio (Analytics & EdTech)',
    matchScore: '98.3 / 100',
    coreStack: ['Python (Modular OOP)', 'Pandas & NumPy', 'SQL (CTEs & Window Functions)', 'Scikit-Learn', 'Streamlit', 'FastAPI', 'Docker', 'PyTorch'],
    projects: ['CryptoCast', 'ERIA-GenAI', 'soil-grain-size', 'Internship Studio Telemetry', 'IMDb-Recommender', 'unfoolable-lens']
  },

  // ── 0. GUVI MYLINEUPX AI DIAGNOSTIC & SCORE RECOVERY ──
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
        desc: 'At 48 words/minute, in a 2-minute answer you speak only ~95 words. The AI NLP semantic evaluator needs 220–280 words to extract required domain keywords, structural depth, and reasoning markers. The low word count triggered an automatic minimum floor of 1/10 across all semantic categories.'
      },
      {
        title: '2. Missing Sentence-1 Keyword Anchors',
        icon: '🎯',
        desc: 'Relevance 1/10 happens when answers begin with conversational hedging ("Basically...", "I think...") rather than immediately declaring the technical thesis and naming the exact algorithm or metric in sentence 1.'
      },
      {
        title: '3. Lack of Discourse Signposting',
        icon: '📐',
        desc: 'Articulation 1/10 occurs when responses lack explicit structure markers ("First... Second... In my telemetry project..."). The AI looks for structural transition words to award articulation and problem solving.'
      },
      {
        title: '4. Pravin\'s Secret Superpower: 10/10 Filler Control',
        icon: '🏆',
        desc: 'Notice that Filler Control is 10/10 (1.2% fillers, only 4 fillers)! Pravin does NOT utter "um", "uh", or repetitive fillers. His vocal clarity is clean. He only needs structured speed (120-140 WPM) and instant retrieval.'
      }
    ],
    paceDrillTexts: [
      {
        topic: '1. Self-Intro & Civil Pivot (Target: 132 Words in 58s)',
        words: 132,
        targetSeconds: 58,
        text: 'Good morning. My name is Pravin Kumar. I hold a Bachelor\'s in Civil Engineering with First Class Honors and completed master\'s data science training incubated at IIT Madras Research Park through HCL GUVI. My background in structural mechanics and spatial coordinate matrices translated directly into high-dimensional feature spaces and statistical regression. Recently at Internship Studio, I analyzed 14,102 telemetry records and trained a Scikit-Learn Random Forest delivering an 89.2% error reduction over baseline, taking MAE from 34.97 down to 3.78 with an R² of 0.9979. On GitHub, I built CryptoCast, an out-of-sample sequence forecaster with 2.06% 1-day MAPE, and ERIA, an automated multi-agent regulatory policy analyzer. I am excited about Zoho because of your culture of building robust, proprietary software tools from first principles.'
      },
      {
        topic: '2. Model Evaluation & Imbalance (Target: 118 Words in 52s)',
        words: 118,
        targetSeconds: 52,
        text: 'When evaluating models on imbalanced datasets, raw accuracy is fundamentally misleading. A dummy baseline predicting the majority class can achieve 95% accuracy while completely failing to detect positive churn or fraud events. Instead, I evaluate models using Precision, Recall, and the Precision-Recall AUC curve. If the cost of false positives is severe, such as spam filtering in Zoho Mail, I optimize for Precision. If the cost of false negatives is critical, such as customer churn in Zoho CRM, I prioritize Recall. On severe class imbalances, PR-AUC isolates the minority class without being artificially inflated by true negatives, ensuring dependable production decisions.'
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

  // ── 1. STRATEGY: 4-Round Zoho Pattern & Rubric ──
  strategy: {
    overview: 'Zoho IT Solutions evaluates candidates for Data Scientist / Software Engineer roles with an unwavering focus on raw fundamental problem solving, clean code without dependency bloat, solid mathematical intuition, and authentic communication.',
    rounds: [
      {
        num: 'Round 1',
        title: 'Problem Solving & Core Python Fundamentals',
        duration: '15 Mins in Mock (45m in Real)',
        focus: 'String/Array manipulation, Time & Space Complexity (Big-O), Hash maps, Two-pointer techniques, Python OOP & Generators.',
        zohoMotto: 'Write clean, working logic from scratch before reaching for pre-built packages.',
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
        zohoMotto: 'Data in the real world is dirty. Can you audit and clean it systematically?',
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
        zohoMotto: 'Do not treat models as black boxes. Understand every gradient, hyperparameter, and assumption.',
        tips: [
          'Explain the math behind L1 (Lasso / Laplace prior) vs L2 (Ridge / Gaussian prior) regularization.',
          'Never say "I evaluated with Accuracy" on imbalanced datasets — explain Precision, Recall, F1, and PR-AUC.',
          'Explain the R² paradox in time series: high R² does not mean good predictability.'
        ]
      },
      {
        num: 'Round 4',
        title: 'Flagship Project Defense & Zoho Business Scenarios',
        duration: '10 Mins in Mock (30m in Real)',
        focus: 'Deep technical defense of CryptoCast, ERIA-GenAI, Soil Grain Size, plus Zoho CRM/Desk business case solving.',
        zohoMotto: 'Defend every architectural trade-off and demonstrate how you solve real customer problems.',
        tips: [
          'Lead with problem statement, measurable impact (89.2% error reduction, 2.06% MAPE), and architectural justification.',
          'When asked about Zoho products, think like an engineer building features for Zoho CRM, Desk, or Books.'
        ]
      }
    ]
  },

  // ── 2. PITCH & DEFENSE SCRIPTS ──
  scripts: [
    {
      id: 'pitch',
      badge: '🎯 90-Second Intro',
      title: 'The Perfect "Tell Me About Yourself" for Zoho',
      context: 'Deliver this with calm authority, clear pauses, and high energy. Max 90 seconds.',
      script: `"Good morning/afternoon. My name is Pravin Kumar. I hold a Bachelor's in Civil Engineering with First Class Honors and completed an intensive Master's Data Science specialization incubated at IIT Madras Research Park through HCL GUVI.

What drives my work in Data Science is a strong first-principles foundation. Coming from an engineering background, I spent years working with structural matrices, physical mechanics, and spatial coordinate transforms. I realized that the mathematical rigor used to model load distributions translates directly into high-dimensional feature spaces, tensor operations, and statistical machine learning.

Recently, as a Data Science Intern at Internship Studio, I worked in Agile sprints cleaning and analyzing 14,102 multidimensional telemetry records. I trained a Scikit-Learn Random Forest regression model that achieved an 89.2% error reduction over baseline, taking MAE down from 34.97 to 3.78 with an R² of 0.9979, and clustered operational modes using PCA and K-Means with a 0.4546 Silhouette score.

On GitHub, I have built and shipped several end-to-end systems: including CryptoCast, a multi-horizon deep sequence forecaster with 2.06% 1-day MAPE under chronological walk-forward validation; ERIA, an AI-powered education policy analyzer with self-correcting multi-agent validation; and automated image granulometry models using OpenCV and group-sparse ElasticNet.

I am particularly excited about Zoho because of your engineering-first culture—building robust, proprietary software tools from scratch without relying on superficial wrappers. I want to bring my rigorous analytical mindset, clean Python OOP craft, and machine learning foundation to the Data Science team at Zoho IT Solutions."`,
      keyTakeaways: [
        'Connects Civil Engineering background positively to mathematical rigor.',
        'Quotes exact verified metrics (14,102 records, 89.2% error reduction, 2.06% MAPE, 0.4546 Silhouette).',
        'Demonstrates genuine cultural alignment with Zoho (engineering from scratch, no hype).'
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
      id: 'why_zoho',
      badge: '🏢 Company Alignment',
      title: '"Why Do You Want to Join Zoho specifically?"',
      context: 'Zoho hates buzzword chasers and loves engineers who appreciate craft, autonomy, and sustainable software.',
      script: `"Three distinct reasons drew me to Zoho:

First, Zoho's engineering philosophy of building from the ground up. In an industry full of companies that simply wrap third-party APIs and call it innovation, Zoho builds its own data centers, its own database optimizations, and its own AI pipelines. As an engineer who loves understanding the mathematical mechanics under the hood, that culture of deep technical ownership resonates strongly with me.

Second, Zoho's product breadth. Products like Zoho CRM, Zoho Desk, and Zoho Books generate massive, high-velocity relational and text data. Building predictive models, customer churn forecasting, and intelligent ticket routing directly into products used by over 100 million users offers unmatched engineering scale.

Third, the long-term culture. Zoho is bootstrapped, private, and values patient craftsmanship over quarterly hype. That stability allows engineers to focus on clean architecture, modular code, and genuine customer utility. That is the exact environment where I want to build my career."`,
      keyTakeaways: [
        'Mentions Zoho’s self-reliance (own data centers, proprietary software).',
        'Identifies real business scale (100M+ users across CRM, Desk, Books).',
        'Appreciates long-term craftsmanship over short-term hype.'
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

  // ── 3. CODING DRILL: 10 Essential Zoho Problems ──
  codingChallenges: [
    {
      id: 'code1',
      category: 'Python · Core Logic',
      title: '1. Group Anagrams & Frequency Matching',
      difficulty: 'Medium',
      desc: 'Given an array of strings, group the anagrams together. Optimize for time complexity.',
      input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
      output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]',
      complexity: 'Time: O(N * K log K) with sort, or O(N * K) with char count tuple | Space: O(N * K)',
      zohoContext: 'Zoho loves testing hash maps and tuple keys as hashable dictionary identifiers.',
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
      zohoContext: 'Demonstrates efficient rolling feature generation without expensive repetitive sums.',
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
      zohoContext: 'Zoho values memory-conscious programming on servers handling enterprise data volumes.',
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
            yield batch  # Remaining rows

# Consumer example:
# for chunk in stream_telemetry_batches("large_telemetry.csv", batch_size=500):
#     process_features(chunk)`
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
      zohoContext: 'A classic Zoho technical interview question testing Window functions vs Subqueries.',
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
      zohoContext: 'Directly applicable to Zoho Books & Zoho Subscription analytics.',
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
      zohoContext: 'Standard self-join test evaluating table alias understanding.',
      solution: `SELECT 
    e.name AS Employee_Name,
    e.salary AS Employee_Salary,
    m.name AS Manager_Name,
    m.salary AS Manager_Salary
FROM Employee e
JOIN Employee m ON e.manager_id = m.id
WHERE e.salary > m.salary;`
    }
  ],

  // ── 4. ML VIVA: 30+ High-Yield Questions ──
  vivaQuestions: [
    {
      id: 'z_ml1',
      topic: 'Core ML Foundations',
      q: 'Explain the Bias-Variance Tradeoff. How do L1 and L2 regularization affect it?',
      difficulty: 'Medium',
      a: `<strong>Bias</strong> is error from erroneous assumptions (underfitting — model is too simple, e.g., fitting a straight line to quadratic data).<br>
<strong>Variance</strong> is error from sensitivity to small fluctuations in training data (overfitting — model memorizes noise, high train accuracy but poor validation).<br><br>
<strong>Total Error = Bias² + Variance + Irreducible Error.</strong><br><br>
• <strong>Regularization adds a penalty term to the loss function</strong>:<br>
- <strong>L1 (Lasso)</strong>: Adds $\\lambda \\sum |w_i|$. Promotes sparsity by driving irrelevant feature weights strictly to zero (automatic feature selection).<br>
- <strong>L2 (Ridge)</strong>: Adds $\\lambda \\sum w_i^2$. Shrinks weights towards zero without making them exactly zero; handles multicollinearity exceptionally well.<br><br>
By increasing $\\lambda$, we slightly increase bias to dramatically reduce variance, minimizing generalization error.`,
      gotcha: 'Mention that ElasticNet combines both: useful when p > n or when features are highly correlated (as in Pravin’s soil-grain-size project).',
      feynman: 'Think of archery: High Bias = your arrows hit tightly together but far from the bullseye. High Variance = arrows fly all over the place. Good model = all arrows close to the center.'
    },
    {
      id: 'z_ml2',
      topic: 'Model Evaluation',
      q: 'When should you use Precision vs Recall vs ROC-AUC vs PR-AUC?',
      difficulty: 'Medium',
      a: `<strong>Precision</strong> = $TP / (TP + FP)$ &rarr; Cost of False Positive is high (e.g., Zoho Mail spam filter marking a critical client contract as spam).<br><br>
<strong>Recall</strong> = $TP / (TP + FN)$ &rarr; Cost of False Negative is disastrous (e.g., Fraud detection in Zoho Books or critical churn prediction).<br><br>
<strong>F1-Score</strong> = Harmonic mean of Precision & Recall ($2 \\times P \\times R / (P + R)$); best balanced metric on imbalanced datasets.<br><br>
<strong>ROC-AUC vs PR-AUC</strong>:<br>
• <strong>ROC-AUC</strong> evaluates True Positive Rate vs False Positive Rate across all thresholds. However, when the negative class is massive (e.g., 99% non-fraud), ROC-AUC can be deceptively optimistic because large TN keeps FPR small.<br>
• <strong>PR-AUC</strong> focuses exclusively on the minority positive class ($P$ vs $R$). Always use PR-AUC for severe class imbalance!`,
      gotcha: 'Never claim accuracy is sufficient on 95:5 imbalanced datasets. A dummy model predicting majority class gets 95% accuracy with 0 recall!',
      feynman: 'Precision is: "Of everyone I called guilty, how many actually committed the crime?" Recall is: "Of all actual criminals, how many did I catch?"'
    },
    {
      id: 'z_ml3',
      topic: 'Tree-Based Models',
      q: 'How does Random Forest work and why does it rarely overfit compared to a single Decision Tree?',
      difficulty: 'Medium',
      a: `Random Forest is an ensemble method utilizing <strong>Bagging (Bootstrap Aggregation) + Feature Subsampling</strong>:<br><br>
1. <strong>Bootstrapping</strong>: Trains N independent deep decision trees on random samples drawn with replacement from the training set.<br>
2. <strong>Random Subspace</strong>: At each split, only a random subset of features (typically $\\sqrt{p}$) is evaluated. This decorrelates the individual trees.<br>
3. <strong>Aggregation</strong>: Averages predictions (regression) or takes majority vote (classification).<br><br>
<strong>Why it avoids overfitting</strong>: While individual decision trees have high variance, averaging $B$ uncorrelated trees reduces variance by a factor approaching $1/B$ while keeping bias constant. That is why Random Forest was ideal for Pravin’s 14,102 telemetry records at Internship Studio (89.2% error reduction).`,
      gotcha: 'Explain Out-Of-Bag (OOB) error: roughly 36.8% of samples are left out of each bootstrap sample, providing an honest built-in validation set without needing a separate split.',
      feynman: 'Asking one doctor might give a biased opinion. Asking 100 independent doctors who each inspect different test results and taking their average gives a far more reliable diagnosis.'
    },
    {
      id: 'z_ml4',
      topic: 'Time-Series & Sequences',
      q: 'What is the R² Paradox in Time-Series Forecasting and why did you use stationary log returns in CryptoCast?',
      difficulty: 'Hard',
      a: `In non-stationary time series (like stock or crypto prices with random walk drift), a trivial "Persistence Model" that simply predicts $\\hat{y}_{t+1} = y_t$ can achieve an $R^2 > 0.98$ simply because prices are auto-correlated.<br><br>
This is the <strong>R² Paradox</strong>: the model appears mathematically perfect, but has zero actual directional predictive power (it just mirrors yesterday’s price with a 1-step lag).<br><br>
<strong>How Pravin resolved it in CryptoCast</strong>:<br>
1. Formulated the target as <strong>Stationary Log Return</strong>: $r = \\ln(P_{t+h} / P_t)$ rather than raw price.<br>
2. Verified stationarity using the Augmented Dickey-Fuller (ADF) test ($p < 0.05$).<br>
3. Enforced strict <strong>Chronological Walk-Forward Validation</strong> rather than random k-fold splits, preventing future lookahead leakage.<br>
4. Achieved a verified 2.06% 1-day MAPE and $92 MAE reduction using deterministic Satoshi protocol supply features.`,
      gotcha: 'Never shuffle time-series data during train/test split. Shuffling leaks future values into the past.',
      feynman: 'Predicting tomorrow’s weather is the same as today gives high correlation in summer, but it fails completely when a storm hits. Predicting the change in weather is real forecasting.'
    },
    {
      id: 'z_ml5',
      topic: 'Unsupervised Learning',
      q: 'How does K-Means clustering work? How do you select optimal K, and what are its core limitations?',
      difficulty: 'Medium',
      a: `<strong>K-Means Algorithm</strong>:<br>
1. Initialize $K$ cluster centroids (e.g., K-Means++ to avoid poor local minima).<br>
2. <strong>Assignment step</strong>: Assign each point to its nearest centroid via Euclidean distance.<br>
3. <strong>Update step</strong>: Recalculate centroids as the mean of all points assigned to that cluster.<br>
4. Repeat until centroids converge (movement < $\\epsilon$).<br><br>
<strong>Selecting Optimal K</strong>:<br>
• <strong>Elbow Method</strong>: Plot Within-Cluster Sum of Squares (WCSS) vs $K$ to find the bend.<br>
• <strong>Silhouette Analysis</strong>: Measures how similar an object is to its own cluster ($a$) versus neighboring clusters ($b$). Range $[-1, 1]$. Score of 0.4546 in Pravin’s telemetry project indicated strong cluster separation.<br><br>
<strong>Limitations</strong>: Assumes spherical clusters of equal variance, sensitive to outliers, and requires scaling features beforehand (StandardScaler).`,
      gotcha: 'Always scale features prior to K-Means; otherwise, variables with large numerical scales dominate the Euclidean distance calculation.',
      feynman: 'Imagine grouping people in a crowded room into 3 discussion circles. People step toward the circle center closest to them, the center updates its position, and you repeat until nobody moves.'
    },
    {
      id: 'z_ml6',
      topic: 'GenAI & NLP',
      q: 'In your ERIA project, why did you use a Multi-Agent architecture instead of a single prompt to an LLM?',
      difficulty: 'Hard',
      a: `In regulatory policy analysis (e.g., 50+ page UGC/AICTE documents), a single prompt suffers from three major flaws:<br>
1. <strong>Context hallucination & drift</strong>: Single calls easily miss nuanced clauses.<br>
2. <strong>Lack of self-correction</strong>: No verification layer to ensure assertions are grounded in document text.<br>
3. <strong>Role entanglement</strong>: Summarizing, extracting regulatory impact, and checking compliance require distinct cognitive lenses.<br><br>
<strong>Pravin’s Multi-Agent Architecture</strong>:<br>
• <strong>Agent 1 (Extractor)</strong>: Ingests documents, creates TF-IDF + Cosine semantic chunks, and extracts raw stakeholder impact clauses.<br>
• <strong>Agent 2 (Critic/Evaluator)</strong>: Scores output against a Grounding Rubric (target $\\ge 8.5/10$), checking citations against ground-truth text chunks.<br>
• <strong>Agent 3 (Synthesizer)</strong>: If Critic score < 8.5, sends back for correction; once approved, outputs structured Pydantic schema validation.<br>
This closed-loop system achieved sub-15s response times with verified audit accuracy.`,
      gotcha: 'Mention Pydantic validation: ensures that LLM outputs conform to strict typed schemas rather than unpredictable conversational markdown.',
      feynman: 'Instead of having one person write, proofread, and approve a legal contract in a single pass, you have a drafter, an auditor who rejects mistakes, and an executive publisher.'
    }
  ],

  // ── 5. PROJECT DEFENSE PLAYBOOK: PRAVIN'S REAL REPOS ──
  projectDefense: [
    {
      repo: 'CryptoCast',
      name: 'CryptoCast: Multi-Horizon Deep Sequence Forecasting',
      github: 'https://github.com/pravinkumardatafreak/cryptocast',
      bullets: [
        '~5,000 daily sequential records (2010–2024) from Yahoo Finance.',
        '5 PyTorch Architectures: 1D-CNN, RNN, LSTM, Transformer, and PatchTST.',
        '1-Day Horizon: LSTM (MAE $730.98, MAPE 2.06%, R² 0.9921).',
        '3-Day & 7-Day Horizon: PatchTST with RevIN (3-day MAPE 3.85%, 7-day MAPE 5.93%).',
        'V2 Protocol Features: Satoshi Nakamoto deterministic halving progress, block reward schedule.'
      ],
      interviewerQuestions: [
        {
          q: 'Why did PatchTST outperform LSTM on longer horizons (3-day and 7-day), but LSTM won on 1-day?',
          defense: 'At short 1-day horizons, local temporal dependencies dominate, which recurrent gate mechanisms in LSTM capture with minimal parameter overhead. At 3-day and 7-day horizons, long-range cross-time correlations matter more. PatchTST segments time series into sub-series patches and uses shifted attention across patches. Additionally, PatchTST incorporates Reversible Instance Normalization (RevIN), which handles non-stationary distribution shifts across horizons, preventing degradation.'
        },
        {
          q: 'What is Walk-Forward Validation and why did you use it over standard K-Fold CV?',
          defense: 'Standard K-Fold randomly shuffles records, which leaks future information into training folds (lookahead bias). Walk-Forward Validation enforces temporal causality: train on [t0...t_train], test on [t_train+1...t_train+k], then roll the window forward. This simulates real-world daily production inference.'
        }
      ]
    },
    {
      repo: 'ERIA-Education-Analyzer',
      name: 'Education Regulation Impact Analyzer (ERIA)',
      github: 'https://github.com/pravinkumardatafreak/ERIA-Education-Analyzer',
      bullets: [
        'Multi-agent LLM pipeline converting 50+ page UGC/AICTE documents into structured insights.',
        'Groq LLaMA 3.3 70B inference engine + DistilRoBERTa emotion & rhetorical temperature telemetry.',
        'Automated Grounding Rubric scoring (>= 8.5/10 threshold).',
        'Interactive Streamlit UI with Hugging Face deployment and Pydantic schema validation.'
      ],
      interviewerQuestions: [
        {
          q: 'How did you measure grounding and prevent LLM hallucinations?',
          defense: 'We implemented an automated grounding gate. Each extracted claim must cite the specific text chunk ID from the TF-IDF / vector store. The critic agent computes a semantic overlap and cosine similarity score between the claim and the source chunk. If the grounding score falls below 8.5/10, the output is rejected and regenerated with higher prompt constraints.'
        },
        {
          q: 'Why use Groq LLaMA 3.3 70B over closed-source APIs like GPT-4?',
          defense: 'Groq’s Language Processing Unit (LPU) architecture delivers sub-15s end-to-end execution across 50-page documents with deterministic token pricing and high throughput, making high-volume document parsing economically feasible and production-ready for institutional users.'
        }
      ]
    },
    {
      repo: 'soil-grain-size',
      name: 'Automated Granulometry & Multi-Task ElasticNet',
      github: 'https://github.com/pravinkumardatafreak/soil-grain-size-distribution',
      bullets: [
        'OpenCV spatial calibration (Pixels-Per-Millimeter / PPM scaling) and morphological contour analysis.',
        'Group-sparse Multi-Task Elastic Net & Ridge regression on high-dimensional collinear features.',
        '55.21 Out-of-Fold Earth Mover’s Distance (EMD) under 5-Fold Cross-Validation.',
        'Civil Engineering domain foundation applied to automated machine learning vision.'
      ],
      interviewerQuestions: [
        {
          q: 'Why choose Multi-Task Elastic Net instead of Random Forest or a Deep CNN?',
          defense: 'The physical soil dataset had a classic small-sample, high-collinearity trap (few sample trays, hundreds of extracted geometric and morphological features). A deep CNN or unregularized Random Forest easily overfits small sample batches. Multi-Task Elastic Net enforces joint sparsity across related distribution outputs, sharing feature selection strength while L1/L2 penalties prevented collinear weights from exploding.'
        },
        {
          q: 'How did you convert pixel measurements into millimeter real-world metrics?',
          defense: 'We used a known circular calibration marker placed in the camera field of view. By detecting the marker contour and measuring its pixel diameter against its known ground-truth diameter in millimeters, we calculated an exact Pixels-Per-Millimeter (PPM) scaling ratio. Every subsequent contour perimeter, major axis, and area was multiplied by this spatial scale factor.'
        }
      ]
    },
    {
      repo: 'Internship Studio Telemetry',
      name: 'Data Science Intern — Internship Studio (Analytics & EdTech)',
      github: 'https://github.com/pravinkumardatafreak',
      bullets: [
        'Cleaned & preprocessed 14,102 multidimensional telemetry records (99.8% feature completeness).',
        'Scikit-Learn Random Forest delivering 89.2% error reduction (MAE 34.97 -> 3.78, R² = 0.9979).',
        'Segmented operational modes into 4 clusters using PCA & K-Means (Silhouette score 0.4546).',
        'Packaged REST endpoints via FastAPI and containerized microservice with Docker.'
      ],
      interviewerQuestions: [
        {
          q: 'How did you achieve an 89.2% error reduction on the telemetry data?',
          defense: 'The raw telemetry data suffered from non-linear feature interactions and high-leverage outliers. A baseline linear model failed to capture sensor cross-coupling (MAE was 34.97). By engineering rolling variance and differential delta features, handling extreme outliers, and training an ensemble Random Forest with hyperparameter tuning, the model captured non-linear operational boundaries, dropping MAE to 3.78.'
        },
        {
          q: 'Why did you use PCA before K-Means clustering?',
          defense: 'K-Means relies on Euclidean distance, which suffers from the curse of dimensionality when all telemetry channels are fed directly. By applying PCA, we retained 90%+ variance across orthogonal principal components, eliminating redundant sensor covariance and allowing K-Means to identify 4 clean operational regimes with a verified 0.4546 Silhouette score.'
        }
      ]
    }
  ],

  // ── 6. ZOHO REAL-WORLD CASE STUDIES ──
  caseStudies: [
    {
      id: 'case_crm',
      product: 'Zoho CRM',
      title: 'Predictive Lead Scoring & Churn Risk Engine',
      problem: 'Zoho CRM handles millions of inbound sales leads across hundreds of industries. Sales reps waste 60% of their time calling cold leads. How would you design a production ML lead scoring system?',
      architecture: [
        '1. Data Ingestion: Ingest CRM activity telemetry (email opens, website visits, company size, demo requests) via message queue.',
        '2. Feature Engineering: Recency, Frequency, Monetary (RFM) metrics, days since last contact, role seniority, engagement velocity.',
        '3. Model Selection: Gradient Boosted Trees (XGBoost / LightGBM) for tabular speed and handling missing categorical values.',
        '4. Explainability: SHAP values returned with score (e.g., "+24 points: demo booked", "-15 points: no activity in 14 days").',
        '5. Production Serving: FastAPI microservice containerized with Docker, scoring leads under 25ms upon creation or update.'
      ],
      metrics: 'Precision at Top 20% (P@20), ROC-AUC, Lead Conversion Rate Lift.'
    },
    {
      id: 'case_desk',
      product: 'Zoho Desk',
      title: 'Automated Ticket Categorization & SLA Breach Prediction',
      problem: 'Enterprise customer support teams receive thousands of unstructured tickets daily. Misrouted tickets cause severe SLA breaches.',
      architecture: [
        '1. Text Preprocessing: Clean ticket subject & body, remove email signatures, strip PII.',
        '2. Vectorization: Hybrid approach — TF-IDF for high-frequency domain keywords combined with Sentence-Transformers for semantic intent.',
        '3. Routing Classifier: Multi-class LightGBM or fine-tuned DistilBERT predicting Department and Priority.',
        '4. Confidence Thresholding: If model confidence < 80%, route to human triage with top-3 suggested categories.',
        '5. SLA Breach Forecaster: Secondary regression model predicting expected resolution time based on ticket complexity and agent queue depth.'
      ],
      metrics: 'Top-1 Categorization Accuracy, Macro-F1 across rare ticket classes, SLA Breach Reduction %.'
    },
    {
      id: 'case_books',
      product: 'Zoho Books',
      title: 'Financial Cash Flow Forecasting & Anomaly Detection',
      problem: 'Small and Medium Businesses (SMBs) struggle with liquidity forecasting and unflagged duplicate/fraudulent invoices.',
      architecture: [
        '1. Time-Series Pipeline: Aggregate daily inflows/outflows into stationary sequential windows (borrowing CryptoCast sliding window architecture).',
        '2. Multi-Horizon Forecaster: Predict 30-day and 60-day cash position using seasonal decomposition + Ridge / PatchTST.',
        '3. Anomaly Detection: Isolation Forest + Z-score deviation over vendor payment history to catch duplicate invoices and atypical expenditure spikes.',
        '4. Dashboard: Interactive analytical charts and alerts integrated into customer cash dashboard.'
      ],
      metrics: 'Mean Absolute Percentage Error (MAPE) on cash forecast, Anomaly Precision & False Positive Rate.'
    }
  ]
};

/* ═════════════════════════════════════════════════════════════════════
   RENDER ENGINE FOR ZOHO MOCK SECTION
═════════════════════════════════════════════════════════════════════ */

window.renderZohoMockSection = function () {
  const container = document.getElementById('zoho-mock-content');
  if (!container) return;

  const data = window.ZOHO_MOCK_DATA;
  const rec = data.scorecardRecovery;

  container.innerHTML = `
    <!-- TOP CANDIDATE BANNER -->
    <div class="zoho-hero-banner glass-card">
      <div class="zoho-hero-top">
        <div class="zoho-hero-left">
          <div class="zoho-badge-row">
            <span class="zoho-pill pill-cyan">🏢 TARGET: ZOHO IT SOLUTION</span>
            <span class="zoho-pill pill-violet">🎯 ROLE: DATA SCIENTIST</span>
            <span class="zoho-pill pill-amber">⚡ MOCK INTERVIEW SESSION: TOMORROW</span>
          </div>
          <h2 class="zoho-hero-title">Zoho IT Solutions — Data Scientist Mock War Room</h2>
          <p class="zoho-hero-sub">
            Personalized preparation engine for <strong>${data.candidate.name}</strong>. Grounded 100% in your verified codebases, mathematical foundation, and authentic interview defense scripts.
          </p>
        </div>
        <div class="zoho-hero-right">
          <div class="zoho-score-card">
            <div class="zoho-score-val">${data.candidate.matchScore}</div>
            <div class="zoho-score-lbl">Rational Match Score</div>
            <div class="zoho-score-sub">Tier 1 · Highly Qualified Standard</div>
          </div>
        </div>
      </div>

      <!-- CANDIDATE PROFILE SUMMARY BAR -->
      <div class="zoho-candidate-bar">
        <div class="cand-item">
          <span class="cand-k">Candidate</span>
          <span class="cand-v">Pravin Kumar R</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Foundation</span>
          <span class="cand-v">B.E. Civil (Honors) + GUVI / IIT-M RP DS</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Verified Experience</span>
          <span class="cand-v">Data Science Intern · Internship Studio</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Flagship Repos</span>
          <span class="cand-v">CryptoCast · ERIA-GenAI · soil-grain-size</span>
        </div>
      </div>
    </div>

    <!-- SUB-NAVIGATION TABS -->
    <div class="zoho-nav-tabs">
      <button class="z-tab-btn" onclick="switchZohoTab('diagnostic', this)" style="border-color:var(--rose);color:#fda4af;background:rgba(244,63,94,0.08)">🚨 Scorecard Recovery (18 &rarr; 90+)</button>
      <button class="z-tab-btn active" onclick="switchZohoTab('simulator', this)">⚡ 45-Min Mock Simulator</button>
      <button class="z-tab-btn" onclick="switchZohoTab('strategy', this)">🎯 4-Round Strategy</button>
      <button class="z-tab-btn" onclick="switchZohoTab('scripts', this)">🎤 90-Sec Pitch & Defense</button>
      <button class="z-tab-btn" onclick="switchZohoTab('coding', this)">💻 Python & SQL Drills</button>
      <button class="z-tab-btn" onclick="switchZohoTab('viva', this)">🧠 30+ ML & Data Viva</button>
      <button class="z-tab-btn" onclick="switchZohoTab('defense', this)">🛡️ Pravin's Project Defense</button>
      <button class="z-tab-btn" onclick="switchZohoTab('cases', this)">🏢 Zoho Business Cases</button>
    </div>

    <!-- TAB 0: SCORECARD RECOVERY & DIAGNOSTIC -->
    <div id="ztab-diagnostic" class="zoho-tab-pane" style="display:none">
      <!-- AUDIT ALERT BANNER -->
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;border-color:rgba(244,63,94,0.4);background:rgba(244,63,94,0.05)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">
          <div>
            <div style="font-size:0.75rem;font-weight:800;color:var(--rose);letter-spacing:0.06em;text-transform:uppercase">🚨 GUVI MyLineupX AI Diagnostic Audit</div>
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--text-primary);margin-top:0.25rem">The Diagnosis: Why Your Score Was 18/100 and How We Reach 90+ Tomorrow</h3>
          </div>
          <div style="display:flex;gap:1rem">
            <div style="text-align:center;padding:0.6rem 1rem;background:rgba(244,63,94,0.15);border-radius:10px;border:1px solid rgba(244,63,94,0.3)">
              <div style="font-size:1.4rem;font-weight:900;color:var(--rose);font-family:var(--font-mono)">18 / 100</div>
              <div style="font-size:0.65rem;color:var(--text-muted);text-transform:uppercase">Diagnostic Baseline</div>
            </div>
            <div style="text-align:center;padding:0.6rem 1rem;background:rgba(0,255,200,0.15);border-radius:10px;border:1px solid rgba(0,255,200,0.3)">
              <div style="font-size:1.4rem;font-weight:900;color:var(--cyan);font-family:var(--font-mono)">92+ / 100</div>
              <div style="font-size:0.65rem;color:var(--cyan);text-transform:uppercase">Tomorrow's Target</div>
            </div>
          </div>
        </div>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7">
          Your diagnostic report shows a classic AI evaluator pattern: <strong>10/10 Filler Control</strong> (you don't say "um" or "uh" — a huge strength!), but <strong>48 Words/Minute Pace</strong> and <strong>1/10 Relevance/Domain Knowledge</strong>. The AI speech parser suffered from <em>Token Starvation</em>: because your pace was 48 WPM, you spoke under 100 words in 2 minutes, not giving the NLP engine enough semantic tokens to extract. We fix this immediately with pre-formed 3-part answers and 130 WPM pacing.
        </p>
      </div>

      <!-- METRIC BREAKDOWN TABLE -->
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:1rem;margin-bottom:1.5rem">
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
            <div>• Problem Solving: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Mention baseline vs final comparison</div>
            <div>• Attitude: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Energetic, proactive tone</div>
            <div>• Learning Agility: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Explain how you iterated after errors</div>
            <div>• Analytical Thinking: <strong style="color:var(--rose)">1/10</strong> &rarr; Fix: Cite trade-offs & exact metrics</div>
          </div>
        </div>

        <div class="glass-card" style="padding:1.25rem;border-color:rgba(245,158,11,0.3)">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.8rem;font-weight:700">Speech Quality</span>
            <strong style="color:var(--amber)">10 / 20</strong>
          </div>
          <div style="font-size:0.75rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.35rem">
            <div>• Confidence: <strong style="color:var(--amber)">5/10</strong> &rarr; Fix: Remove pauses between clauses</div>
            <div>• Filler Control: <strong style="color:var(--lime)">10/10 (1.2% - Elite!)</strong> &rarr; Proven vocal discipline</div>
            <div>• Speaking Pace: <strong style="color:var(--rose)">5/10 (48 wpm)</strong> &rarr; Must accelerate to 120-140 wpm</div>
          </div>
        </div>
      </div>

      <!-- ROOT CAUSES -->
      <div style="margin-bottom:1.5rem">
        <h4 style="color:var(--cyan);font-size:1.05rem;margin-bottom:0.75rem">🔍 The 4 Evaluator Root Causes Identified</h4>
        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:1rem">
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
            <span class="zoho-pill pill-cyan">⚡ FLUENCY METRONOME</span>
            <h4 style="font-size:1.15rem;margin-top:0.3rem">Interactive 130 WPM Speaking Pace Trainer</h4>
            <p style="font-size:0.8rem;color:var(--text-secondary)">Read the pre-scripted 120-word response aloud. Aim to complete it within 50–58 seconds to hit the 130 WPM sweet spot!</p>
          </div>
          <div style="display:flex;align-items:center;gap:1rem">
            <div style="font-size:1.8rem;font-family:var(--font-mono);color:var(--cyan)" id="pace-timer-display">00:00</div>
            <button class="btn-primary" id="btn-pace-toggle" onclick="togglePaceTrainer()">Start Reading Drill</button>
            <button class="btn-ghost" onclick="resetPaceTrainer()">Reset</button>
          </div>
        </div>

        <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
          <button class="z-tab-btn active" id="pdrill-0" onclick="selectPaceDrill(0)">Drill 1: Self-Intro &amp; Pivot (132 w)</button>
          <button class="z-tab-btn" id="pdrill-1" onclick="selectPaceDrill(1)">Drill 2: Model Evaluation (118 w)</button>
          <button class="z-tab-btn" id="pdrill-2" onclick="selectPaceDrill(2)">Drill 3: CryptoCast R² Paradox (124 w)</button>
        </div>

        <div class="script-box" style="padding:1.25rem;font-size:0.95rem;line-height:1.85;color:#f0f0f8;background:#0d0d1a" id="pace-drill-text">
          ${rec.paceDrillTexts[0].text}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem">
          <span id="pace-meta">Word Count: 132 words · Target Time: ~58 seconds (136 wpm)</span>
          <span id="pace-calculated-wpm" style="color:var(--lime);font-weight:700"></span>
        </div>
      </div>

      <!-- BEFORE & AFTER TRANSFORMATIONS -->
      <div>
        <h4 style="color:var(--cyan);font-size:1.05rem;margin-bottom:0.75rem">⚡ 1/10 Failing Response vs. 10/10 Masterclass Transformation</h4>
        <div style="display:flex;flex-direction:column;gap:1.25rem">
          ${rec.transformations.map(t => `
            <div class="glass-card" style="padding:1.25rem">
              <h5 style="font-size:0.95rem;color:var(--text-primary);margin-bottom:0.75rem">${t.question}</h5>
              
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
                <!-- Poor -->
                <div style="padding:1rem;background:rgba(244,63,94,0.06);border:1px solid rgba(244,63,94,0.25);border-radius:8px">
                  <div style="font-size:0.7rem;font-weight:800;color:var(--rose);margin-bottom:0.4rem">❌ THE 1/10 ANSWER (Why AI Failed It)</div>
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

    <!-- TAB 1: 45-MIN MOCK SIMULATOR -->
    <div id="ztab-simulator" class="zoho-tab-pane" style="display:block">
      <div class="mock-cockpit glass-card">
        <div class="cockpit-header">
          <div>
            <h3 style="color:var(--cyan);font-size:1.15rem;margin-bottom:0.25rem">⏱️ Live 45-Minute Mock Interview Cockpit</h3>
            <p style="font-size:0.8rem;color:var(--text-secondary)">Simulate tomorrow's Zoho interview under timed conditions. Practice active recall, feynman explanations, and project citations.</p>
          </div>
          <div class="timer-controls">
            <div class="timer-digits" id="mock-timer-display">45:00</div>
            <div class="timer-btn-row">
              <button class="btn-timer btn-start" id="btn-timer-toggle" onclick="toggleMockTimer()">Start Timer</button>
              <button class="btn-timer btn-reset" onclick="resetMockTimer()">Reset</button>
            </div>
          </div>
        </div>

        <div class="cockpit-phases">
          <div class="phase-chip active" id="phase-1">1. Self-Intro (3m)</div>
          <div class="phase-chip" id="phase-2">2. Python & Logic (10m)</div>
          <div class="phase-chip" id="phase-3">3. SQL & Data (10m)</div>
          <div class="phase-chip" id="phase-4">4. ML Mechanics (12m)</div>
          <div class="phase-chip" id="phase-5">5. Project Defense (10m)</div>
        </div>

        <!-- ACTIVE QUESTION CARD -->
        <div class="active-question-card" id="mock-question-box">
          <div class="aq-meta">
            <span class="aq-round" id="aq-round">ROUND 1 · SELF-INTRODUCTION & STORY</span>
            <span class="aq-diff diff-easy" id="aq-diff">MANDATORY OPENER</span>
          </div>
          <div class="aq-title" id="aq-title">"Pravin, please introduce yourself and walk us through your background and interest in Zoho."</div>
          
          <div class="aq-actions">
            <button class="btn-primary" onclick="revealMockAnswer()">👁️ Reveal Model Defense Answer</button>
            <button class="btn-ghost" onclick="randomizeMockQuestion()">🎲 Next Random Question</button>
            <button class="btn-ghost" onclick="speakQuestion()">🔊 Speak Prompt</button>
          </div>

          <!-- REVEALABLE CONTENT -->
          <div class="aq-revealed" id="aq-revealed" style="display:none">
            <div class="aq-section">
              <div class="aq-sec-hdr" style="color:var(--cyan)">💡 Pravin's Tailored Defense Script</div>
              <div class="aq-sec-body" id="aq-answer-body">
                "${data.scripts[0].script}"
              </div>
            </div>

            <div class="aq-section" style="background:rgba(245,158,11,0.04);border-color:rgba(245,158,11,0.2)">
              <div class="aq-sec-hdr" style="color:var(--amber)">⚠️ Interviewer Trap Alert</div>
              <div class="aq-sec-body" id="aq-trap-body">
                Do not recite your resume chronologically like a list. Group your experience by impact: Foundation (Civil Honors + Math) -> Practical Experience (Internship Studio 89.2% error reduction) -> Shipped Systems (CryptoCast, ERIA). Keep it under 90 seconds.
              </div>
            </div>

            <div class="aq-section" style="background:rgba(0,255,200,0.04);border-color:rgba(0,255,200,0.2)">
              <div class="aq-sec-hdr" style="color:var(--cyan)">🧠 Feynman Technique (Simplified Core)</div>
              <div class="aq-sec-body" id="aq-feynman-body">
                "I am an analytical engineer who translates high-dimensional real-world data into clean, tested prediction pipelines."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: STRATEGY -->
    <div id="ztab-strategy" class="zoho-tab-pane" style="display:none">
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.5rem">🎯 The Zoho IT Solutions Interview Philosophy</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7">${data.strategy.overview}</p>
      </div>

      <div class="zoho-rounds-grid">
        ${data.strategy.rounds.map(r => `
          <div class="round-card glass-card">
            <div class="round-num">${r.num}</div>
            <h4>${r.title}</h4>
            <div class="round-dur">⏱️ ${r.duration}</div>
            <div class="round-motto">"${r.zohoMotto}"</div>
            <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.75rem">${r.focus}</p>
            <div class="round-tips">
              <strong>Key Strategy:</strong>
              <ul>${r.tips.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: SCRIPTS -->
    <div id="ztab-scripts" class="zoho-tab-pane" style="display:none">
      <div class="scripts-stack">
        ${data.scripts.map(s => `
          <div class="script-card glass-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span class="zoho-pill pill-cyan">${s.badge}</span>
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

    <!-- TAB 4: CODING DRILLS -->
    <div id="ztab-coding" class="zoho-tab-pane" style="display:none">
      <div style="margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.35rem">💻 10 Essential Zoho Python & SQL Drills</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary)">Zoho tests problem-solving speed and algorithmic hygiene. Study each problem's optimal O(N) complexity.</p>
      </div>

      <div class="coding-grid">
        ${data.codingChallenges.map((c, i) => `
          <div class="code-card glass-card">
            <div class="code-card-top">
              <span class="zoho-pill pill-violet">${c.category}</span>
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
              🏢 Zoho Focus: ${c.zohoContext}
            </div>

            <button class="btn-ghost" style="width:100%;font-size:0.75rem;padding:0.4rem" onclick="toggleCodeSolution('${c.id}')">
              👁️ View Code Solution
            </button>

            <div class="code-solution-box" id="sol-${c.id}" style="display:none;margin-top:0.75rem">
              <pre><code class="language-python">${c.solution.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 5: ML VIVA -->
    <div id="ztab-viva" class="zoho-tab-pane" style="display:none">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem">
        <div>
          <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.25rem">🧠 30+ High-Yield Zoho ML & Data Viva Flashcards</h3>
          <p style="font-size:0.8rem;color:var(--text-secondary)">Click any question to reveal the deep technical breakdown, trap warning, and Feynman explanation.</p>
        </div>
        <div class="viva-score">Questions: ${data.vivaQuestions.length} Items</div>
      </div>

      <div class="viva-grid">
        ${data.vivaQuestions.map(q => `
          <div class="viva-card-full glass-card">
            <div class="viva-card-q" onclick="toggleZohoViva('${q.id}')">
              <div>
                <div class="q-topic" style="color:var(--cyan)">${q.topic}</div>
                <div class="q-text">${q.q}</div>
              </div>
              <span class="difficulty-badge diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
            </div>
            <div class="viva-card-a" id="zviva-${q.id}">
              <div style="margin-bottom:0.75rem">${q.a}</div>
              <div style="padding:0.6rem;background:rgba(245,158,11,0.06);border-left:3px solid var(--amber);border-radius:4px;font-size:0.75rem;margin-bottom:0.5rem">
                <strong>⚠️ Interview Gotcha:</strong> ${q.gotcha}
              </div>
              <div style="padding:0.6rem;background:rgba(0,255,200,0.06);border-left:3px solid var(--cyan);border-radius:4px;font-size:0.75rem">
                <strong>🧠 Feynman Analogy:</strong> ${q.feynman}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 6: PROJECT DEFENSE PLAYBOOK -->
    <div id="ztab-defense" class="zoho-tab-pane" style="display:none">
      <div style="margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.35rem">🛡️ Pravin's Flagship Project Defense Playbook</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary)">Interviewers will dig into your GitHub projects. Be ready to defend every design choice and metric citation.</p>
      </div>

      <div class="defense-stack">
        ${data.projectDefense.map(p => `
          <div class="defense-card glass-card">
            <div class="def-header">
              <div>
                <span class="zoho-pill pill-violet">${p.repo}</span>
                <h3 style="font-size:1.1rem;margin-top:0.4rem">${p.name}</h3>
              </div>
              <a href="${p.github}" target="_blank" class="btn-ghost" style="font-size:0.75rem;text-decoration:none">🔗 View GitHub Repo</a>
            </div>

            <div class="def-bullets">
              <strong style="font-size:0.78rem;color:var(--cyan)">Verified Architectural Highlights:</strong>
              <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>

            <div class="def-qas">
              <strong style="font-size:0.8rem;color:var(--amber);margin-bottom:0.5rem;display:block">Tough Interviewer Traps & Bulletproof Responses:</strong>
              ${p.interviewerQuestions.map(iq => `
                <div class="def-qa-item">
                  <div class="def-q">Q: "${iq.q}"</div>
                  <div class="def-a">${iq.defense}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 7: ZOHO BUSINESS CASES -->
    <div id="ztab-cases" class="zoho-tab-pane" style="display:none">
      <div style="margin-bottom:1.5rem">
        <h3 style="color:var(--cyan);font-size:1.1rem;margin-bottom:0.35rem">🏢 Real-World Zoho Product System Design Cases</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary)">Show Zoho you understand how to translate raw machine learning into scalable enterprise software features.</p>
      </div>

      <div class="cases-grid">
        ${data.caseStudies.map(cs => `
          <div class="case-card glass-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
              <span class="zoho-pill pill-cyan">${cs.product}</span>
              <span style="font-size:0.75rem;color:var(--text-muted)">Enterprise ML Architecture</span>
            </div>
            <h4 style="font-size:1.05rem;color:var(--text-primary);margin-bottom:0.5rem">${cs.title}</h4>
            <div class="case-problem">${cs.problem}</div>
            
            <div class="case-arch">
              <strong style="color:var(--violet);font-size:0.78rem">System Architecture & Pipeline:</strong>
              <ul>${cs.architecture.map(a => `<li>${a}</li>`).join('')}</ul>
            </div>

            <div class="case-metrics">
              <strong>Evaluation Metrics:</strong> ${cs.metrics}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach XP reward
  if (window.addXP) window.addXP(25);
};

/* ── Tab Switcher ── */
window.switchZohoTab = function (tabId, btn) {
  document.querySelectorAll('.zoho-tab-pane').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.z-tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById('ztab-' + tabId);
  if (target) target.style.display = 'block';
  if (btn) btn.classList.add('active');
  if (window.addXP) window.addXP(5);
};

/* ── Code Solution Toggle ── */
window.toggleCodeSolution = function (id) {
  const el = document.getElementById('sol-' + id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (window.addXP) window.addXP(5);
  }
};

/* ── Viva Accordion Toggle ── */
window.toggleZohoViva = function (id) {
  const el = document.getElementById('zviva-' + id);
  if (el) {
    el.classList.toggle('show');
    if (window.addXP) window.addXP(5);
  }
};

/* ── Pace Trainer Logic ── */
let paceTimerInterval = null;
let paceSeconds = 0;
let paceRunning = false;
let currentDrillIndex = 0;

window.selectPaceDrill = function (idx) {
  currentDrillIndex = idx;
  const drill = window.ZOHO_MOCK_DATA.scorecardRecovery.paceDrillTexts[idx];
  document.getElementById('pace-drill-text').textContent = drill.text;
  document.getElementById('pace-meta').textContent = `Word Count: ${drill.words} words · Target Time: ~${drill.targetSeconds} seconds (${Math.round(drill.words / (drill.targetSeconds / 60))} wpm)`;
  document.querySelectorAll('[id^="pdrill-"]').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  resetPaceTrainer();
};

window.togglePaceTrainer = function () {
  const btn = document.getElementById('btn-pace-toggle');
  if (!paceRunning) {
    paceRunning = true;
    if (btn) { btn.textContent = 'Stop & Calculate WPM'; btn.classList.add('running'); }
    paceTimerInterval = setInterval(() => {
      paceSeconds++;
      const m = Math.floor(paceSeconds / 60);
      const s = paceSeconds % 60;
      document.getElementById('pace-timer-display').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  } else {
    paceRunning = false;
    clearInterval(paceTimerInterval);
    if (btn) { btn.textContent = 'Start Reading Drill'; btn.classList.remove('running'); }
    
    // Calculate WPM
    const drill = window.ZOHO_MOCK_DATA.scorecardRecovery.paceDrillTexts[currentDrillIndex];
    if (paceSeconds > 5) {
      const wpm = Math.round((drill.words / paceSeconds) * 60);
      let status = '';
      if (wpm < 80) status = '⚠️ Pace is under 80 WPM — aim to accelerate slightly without rushing!';
      else if (wpm <= 150) status = `🎉 Perfect Fluency: ${wpm} WPM (Ideal sweet spot: 120–145 WPM)`;
      else status = '⚠️ Over 150 WPM — slow down slightly for clear articulation.';
      document.getElementById('pace-calculated-wpm').textContent = `Result: ${wpm} WPM · ${status}`;
    }
  }
};

window.resetPaceTrainer = function () {
  clearInterval(paceTimerInterval);
  paceRunning = false;
  paceSeconds = 0;
  document.getElementById('pace-timer-display').textContent = '00:00';
  document.getElementById('pace-calculated-wpm').textContent = '';
  const btn = document.getElementById('btn-pace-toggle');
  if (btn) { btn.textContent = 'Start Reading Drill'; btn.classList.remove('running'); }
};

/* ── Mock Timer ── */
let timerInterval = null;
let secondsRemaining = 45 * 60;
let timerRunning = false;

window.toggleMockTimer = function () {
  const btn = document.getElementById('btn-timer-toggle');
  if (!timerRunning) {
    timerRunning = true;
    if (btn) { btn.textContent = 'Pause Timer'; btn.classList.add('running'); }
    timerInterval = setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerDisplay();
        updatePhases();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        if (btn) btn.textContent = 'Session Complete!';
        alert('🎉 Mock Interview Time is Up! Great job completing the 45-minute simulation.');
      }
    }, 1000);
  } else {
    timerRunning = false;
    clearInterval(timerInterval);
    if (btn) { btn.textContent = 'Resume Timer'; btn.classList.remove('running'); }
  }
};

window.resetMockTimer = function () {
  clearInterval(timerInterval);
  timerRunning = false;
  secondsRemaining = 45 * 60;
  updateTimerDisplay();
  const btn = document.getElementById('btn-timer-toggle');
  if (btn) { btn.textContent = 'Start Timer'; btn.classList.remove('running'); }
  updatePhases();
};

function updateTimerDisplay() {
  const el = document.getElementById('mock-timer-display');
  if (!el) return;
  const m = Math.floor(secondsRemaining / 60);
  const s = secondsRemaining % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updatePhases() {
  const elapsedMinutes = 45 - Math.floor(secondsRemaining / 60);
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  
  if (elapsedMinutes < 3) {
    document.getElementById('phase-1')?.classList.add('active');
  } else if (elapsedMinutes < 13) {
    document.getElementById('phase-2')?.classList.add('active');
  } else if (elapsedMinutes < 23) {
    document.getElementById('phase-3')?.classList.add('active');
  } else if (elapsedMinutes < 35) {
    document.getElementById('phase-4')?.classList.add('active');
  } else {
    document.getElementById('phase-5')?.classList.add('active');
  }
}

/* ── Mock Questions Randomizer ── */
const MOCK_QUESTION_POOL = [
  {
    round: 'ROUND 1 · INTRODUCTION & STORY',
    diff: 'MANDATORY',
    diffClass: 'diff-easy',
    title: '"Pravin, please introduce yourself and walk us through your transition from Civil Engineering to Data Science."',
    answer: `Use Script A + Script B: Start with B.E. Civil First Class Honors, connect structural mechanics and dimensional matrices directly to tensor algebra, highlight the 14,102 telemetry records with 89.2% error reduction at Internship Studio, and close with shipped systems (CryptoCast, ERIA).`,
    trap: `Never say "I left Civil because there were no jobs" or make it sound accidental. Emphasize that you fell in love with mathematical modeling and computational data analysis.`,
    feynman: `"I model complex real-world systems mathematically—first in structures, now in high-dimensional machine learning."`
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
• <strong>ROW_NUMBER()</strong>: Assigns unique sequential integers (1, 2, 3, 4) with no duplicates even for identical values.
• <strong>RANK()</strong>: Assigns identical rank for ties, but skips subsequent numbers (1, 2, 2, 4).
• <strong>DENSE_RANK()</strong>: Assigns identical rank for ties without skipping numbers (1, 2, 2, 3).
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
    answer: `1. <strong>Why PatchTST won</strong>: Bitcoin volatility over 7 days suffers from distribution drift. PatchTST tokenizes continuous time steps into patches, enabling cross-time self-attention to capture multi-scale cycles, while RevIN (Reversible Instance Normalization) eliminates non-stationary mean/variance shifts. LSTM suffered from gradient saturation over long horizons.
2. <strong>Preventing leakage</strong>: We strictly utilized Chronological Walk-Forward Validation instead of random k-fold splits, training exclusively on historical windows and testing on the subsequent unseen horizon.`,
    trap: `Never say you used standard train_test_split(shuffle=True) on sequential data.`,
    feynman: `"LSTM reads words letter-by-letter and forgets long paragraphs; PatchTST reads whole sentences at a time and adjusts for volume changes."`
  }
];

let currentQuestionIndex = 0;

window.randomizeMockQuestion = function () {
  currentQuestionIndex = (currentQuestionIndex + 1) % MOCK_QUESTION_POOL.length;
  const q = MOCK_QUESTION_POOL[currentQuestionIndex];
  
  document.getElementById('aq-round').textContent = q.round;
  document.getElementById('aq-diff').textContent = q.diff;
  document.getElementById('aq-diff').className = 'aq-diff ' + q.diffClass;
  document.getElementById('aq-title').textContent = q.title;
  document.getElementById('aq-answer-body').innerHTML = q.answer;
  document.getElementById('aq-trap-body').textContent = q.trap;
  document.getElementById('aq-feynman-body').textContent = q.feynman;
  
  document.getElementById('aq-revealed').style.display = 'none';
  if (window.addXP) window.addXP(10);
};

window.revealMockAnswer = function () {
  const el = document.getElementById('aq-revealed');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (window.addXP) window.addXP(10);
  }
};

window.speakQuestion = function () {
  if ('speechSynthesis' in window) {
    const text = document.getElementById('aq-title')?.textContent || '';
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  } else {
    alert('Speech synthesis not supported in this browser.');
  }
};
