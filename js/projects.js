/* ═══════════════════════════════════════════════════
   projects.js — IMDB & Crypto Project Showcase
   Step-by-step animated pipeline walkthroughs
═══════════════════════════════════════════════════ */

// ── IMDB Pipeline Steps ──
const IMDB_STEPS = [
  {
    icon: '🕷️', label: 'Scrape / Load',
    title: 'Step 1: Data Collection & Loading',
    explanation: `We start with two datasets: <strong>IMDb Top 1000 Classics</strong> (ratings + storylines) and a scraped <strong>2024 Movies</strong> dataset.<br><br>
The scraper uses <strong>Selenium</strong> to automate browser navigation of IMDb's Advanced Search. We store the raw data as CSV files for reproducibility.`,
    code: `<span class="cm"># Load datasets</span>
<span class="kw">import</span> pandas <span class="kw">as</span> pd

df = pd.<span class="fn">read_csv</span>(<span class="str">'data/imdb_top_1000_CLEAN.csv'</span>)
<span class="fn">print</span>(<span class="str">f"Shape: {df.shape}"</span>)  <span class="cm"># (1000, 16)</span>
df.<span class="fn">head</span>()`,
    interview: `<strong>Q: What is data leakage and how do you prevent it in preprocessing?</strong><br>
Fitting transformers (e.g., scalers, vectorizers) on the full dataset before splitting introduces data leakage. Fix: fit only on training data, transform test data.`,
    why: `Why CSV? Reproducibility. Raw data should always be versioned separately from code.`
  },
  {
    icon: '🔍', label: 'EDA',
    title: 'Step 2: Exploratory Data Analysis (EDA)',
    explanation: `Before any modeling, we audit the data: check for null values, examine distributions, understand the <strong>Description</strong> column that drives our recommendations.<br><br>
Key findings: ~3% missing descriptions (filled with empty string), ratings skewed right (most between 7–8.5).`,
    code: `<span class="cm"># Audit the data</span>
df.<span class="fn">info</span>()
<span class="fn">print</span>(df.<span class="fn">isnull</span>().<span class="fn">sum</span>())

<span class="cm"># Description length distribution</span>
df[<span class="str">'desc_len'</span>] = df[<span class="str">'Description'</span>].<span class="fn">str</span>.<span class="fn">split</span>().<span class="fn">str</span>.<span class="fn">len</span>()
<span class="fn">print</span>(df[<span class="str">'desc_len'</span>].<span class="fn">describe</span>())`,
    interview: `<strong>Q: What do you do with missing values in text data?</strong><br>
Options: (1) Fill with empty string if the column is not critical. (2) Impute with similar items. (3) Drop rows if < 1% missing. We fill with "" so TF-IDF treats it as an empty document.`,
    why: `Why EDA first? Garbage in, garbage out. EDA prevents you from building a model on bad data.`
  },
  {
    icon: '🧹', label: 'Preprocess',
    title: 'Step 3: NLP Preprocessing Pipeline',
    explanation: `We clean each movie storyline by: lowercasing, removing punctuation, and filtering stopwords. This ensures TF-IDF focuses on semantically meaningful words.<br><br>
Result: "A young lion prince is exiled..." → "young lion prince exiled..."`,
    code: `<span class="kw">import</span> string
<span class="kw">from</span> nltk.corpus <span class="kw">import</span> stopwords
STOPWORDS = <span class="fn">set</span>(stopwords.<span class="fn">words</span>(<span class="str">'english'</span>))

<span class="kw">def</span> <span class="fn">clean_storyline</span>(text):
    <span class="kw">if not</span> <span class="fn">isinstance</span>(text, <span class="cls">str</span>): <span class="kw">return</span> <span class="str">""</span>
    text = text.<span class="fn">lower</span>()
    text = text.<span class="fn">translate</span>(
        <span class="cls">str</span>.<span class="fn">maketrans</span>(string.punctuation,
                       <span class="str">' '</span> * <span class="fn">len</span>(string.punctuation))
    )
    words = text.<span class="fn">split</span>()
    <span class="kw">return</span> <span class="str">" "</span>.<span class="fn">join</span>([w <span class="kw">for</span> w <span class="kw">in</span> words <span class="kw">if</span> w <span class="kw">not in</span> STOPWORDS])

df[<span class="str">'clean_desc'</span>] = df[<span class="str">'Description'</span>].<span class="fn">fillna</span>(<span class="str">""</span>).<span class="fn">apply</span>(clean_storyline)`,
    interview: `<strong>Q: Why not use stemming/lemmatization here?</strong><br>
For TF-IDF + KNN content-based filtering, the gains are marginal. Stemming adds noise ("universi" for "university"). We get good results without it. Always justify complexity with expected benefit.`,
    why: `Desirable Difficulty: Try writing clean_storyline from memory before looking at the answer.`
  },
  {
    icon: '📊', label: 'TF-IDF',
    title: 'Step 4: TF-IDF Vectorization',
    explanation: `We transform cleaned storylines into numerical vectors using TF-IDF. Each movie becomes a point in 5000-dimensional space, where dimensions = vocabulary terms.<br><br>
<strong>ngram_range=(1,2)</strong>: Capture both "crime" and "organized crime" as features.`,
    code: `<span class="kw">from</span> sklearn.feature_extraction.text <span class="kw">import</span> TfidfVectorizer

vectorizer = <span class="cls">TfidfVectorizer</span>(
    max_features=<span class="num">5000</span>,
    ngram_range=(<span class="num">1</span>, <span class="num">2</span>)   <span class="cm"># unigrams + bigrams</span>
)

tfidf_matrix = vectorizer.<span class="fn">fit_transform</span>(df[<span class="str">'clean_desc'</span>])
<span class="cm"># Shape: (1000, 5000) — sparse matrix</span>
<span class="fn">print</span>(<span class="str">f"Matrix shape: {tfidf_matrix.shape}"</span>)
<span class="fn">print</span>(<span class="str">f"Sparsity: {1 - tfidf_matrix.nnz / (tfidf_matrix.shape[0]*tfidf_matrix.shape[1]):.2%}"</span>)`,
    interview: `<strong>Q: Why is the TF-IDF matrix sparse? Why does that matter?</strong><br>
Most movies don't use most words → most entries are 0. Sparse matrices store only non-zero values → 1000×5000 dense = 40MB, sparse version = ~2MB. Scikit-learn automatically uses scipy sparse → memory-efficient KNN.`,
    why: `Formula: TF-IDF(t,d) = TF(t,d) × log(N / df(t)). N=total docs, df=docs containing term t.`
  },
  {
    icon: '🤖', label: 'KNN Model',
    title: 'Step 5: K-Nearest Neighbors Model',
    explanation: `We fit an unsupervised NearestNeighbors model on the TF-IDF matrix using <strong>cosine metric</strong>. This finds movies whose storyline vectors point in the most similar direction.<br><br>
Cosine distance = 1 - cos(θ). Two identical descriptions → distance = 0.`,
    code: `<span class="kw">from</span> sklearn.neighbors <span class="kw">import</span> NearestNeighbors

nn = <span class="cls">NearestNeighbors</span>(
    metric=<span class="str">'cosine'</span>,
    algorithm=<span class="str">'brute'</span>   <span class="cm"># exact search on sparse data</span>
)
nn.<span class="fn">fit</span>(tfidf_matrix)
<span class="fn">print</span>(<span class="str">"KNN model fitted successfully."</span>)

<span class="cm"># Query: find 10 neighbors of The Shawshank Redemption</span>
idx = df[df[<span class="str">'Title'</span>].<span class="fn">str</span>.<span class="fn">contains</span>(<span class="str">'Shawshank'</span>)].index[<span class="num">0</span>]
distances, indices = nn.<span class="fn">kneighbors</span>(tfidf_matrix[idx], n_neighbors=<span class="num">11</span>)`,
    interview: `<strong>Q: Why algorithm='brute' for sparse data?</strong><br>
Tree-based algorithms (ball_tree, kd_tree) don't support sparse matrices and perform poorly in high dimensions. Brute-force with cosine metric on scipy sparse is actually faster for our scale (~1000 movies).`,
    why: `Why not a full N×N similarity matrix? 1000×1000 = 1M entries fine, but 50000×50000 = 2.5B entries → out of memory. KNN scales.`
  },
  {
    icon: '⚖️', label: 'Hybrid Score',
    title: 'Step 6: Hybrid Weighted Scoring',
    explanation: `Pure cosine similarity might surface an obscure but very-similar movie over a beloved classic. We blend similarity with rating quality:<br><br>
<strong>Score = α × similarity + β × (rating/5)</strong><br><br>
α=0.7 prioritizes relevance; β=0.3 adds quality. Both components are in [0,1] — no scale mismatch.`,
    code: `<span class="kw">def</span> <span class="fn">recommend</span>(title, n=<span class="num">10</span>, alpha=<span class="num">0.7</span>, beta=<span class="num">0.3</span>):
    idx = df[df[<span class="str">'Title'</span>].<span class="fn">str</span>.<span class="fn">contains</span>(title, case=<span class="cls">False</span>)].index[<span class="num">0</span>]
    distances, indices = nn.<span class="fn">kneighbors</span>(
        tfidf_matrix[idx], n_neighbors=n+<span class="num">1</span>
    )
    results = []
    <span class="kw">for</span> dist, i <span class="kw">in</span> <span class="fn">zip</span>(distances[<span class="num">0</span>][<span class="num">1</span>:], indices[<span class="num">0</span>][<span class="num">1</span>:]):
        rating = <span class="fn">float</span>(df.iloc[i][<span class="str">'Rating'</span>])
        <span class="cm"># GUVI Handbook formula</span>
        score = alpha * (<span class="num">1</span> - dist) + beta * (rating / <span class="num">5.0</span>)
        results.<span class="fn">append</span>((df.iloc[i][<span class="str">'Title'</span>], rating, score))
    <span class="kw">return</span> <span class="fn">sorted</span>(results, key=<span class="kw">lambda</span> x: x[<span class="num">2</span>], reverse=<span class="cls">True</span>)`,
    interview: `<strong>Q: How would you tune alpha and beta?</strong><br>
Grid search over α∈[0.5,0.9] with step 0.1. Evaluate with offline metrics like NDCG@10 or user study. Domain knowledge: users generally prefer relevant-first (higher α), but low-rated similar movies are unsatisfying (need some β).`,
    why: `This is your GUVI project formula. Memorize it. Know why each term is there.`
  },
  {
    icon: '🚀', label: 'Streamlit App',
    title: 'Step 7: Streamlit Deployment',
    explanation: `We wrap the recommendation engine in a beautiful Streamlit dashboard with glassmorphism HTML cards, interactive Plotly charts, and @st.cache_resource for sub-100ms responses.<br><br>
The app supports both: by movie title, and by custom plot description.`,
    code: `<span class="kw">import</span> streamlit <span class="kw">as</span> st

<span class="cls">@st.cache_resource</span>
<span class="kw">def</span> <span class="fn">load_model</span>():
    <span class="cm"># Load once, reuse for all users</span>
    df = pd.<span class="fn">read_csv</span>(<span class="str">'data/imdb_top_1000_CLEAN.csv'</span>)
    df[<span class="str">'clean_desc'</span>] = df[<span class="str">'Description'</span>].<span class="fn">fillna</span>(<span class="str">""</span>).<span class="fn">apply</span>(clean_storyline)
    vectorizer = <span class="cls">TfidfVectorizer</span>(max_features=<span class="num">5000</span>)
    matrix = vectorizer.<span class="fn">fit_transform</span>(df[<span class="str">'clean_desc'</span>])
    nn = <span class="cls">NearestNeighbors</span>(metric=<span class="str">'cosine'</span>, algorithm=<span class="str">'brute'</span>)
    nn.<span class="fn">fit</span>(matrix)
    <span class="kw">return</span> df, vectorizer, matrix, nn

<span class="cm"># Run: streamlit run src/app.py</span>`,
    interview: `<strong>Q: What does @st.cache_resource do?</strong><br>
It caches the return value across all user sessions. Without it, every page interaction reloads the CSV, re-fits TF-IDF, and re-trains KNN — 2–3 seconds per click. With it: one-time load, then <100ms lookups.`,
    why: `Production-ready practice: Always cache expensive computations. This is the Streamlit equivalent of model serving.`
  }
];

// ── CryptoCast Pipeline Steps ── (real project: pravinkumardatafreak/cryptocast)
const CRYPTO_STEPS = [
  {
    icon: '📥', label: 'Data Fetch',
    title: 'Step 1: Fetch BTC-USD Data — yfinance (4-Year Window)',
    explanation: `CryptoCast fetches <strong>Bitcoin OHLCV data</strong> from Yahoo Finance using <code>yfinance</code>. The 4-year window (2020–2024) captures both the bull run and bear market, giving models exposure to diverse price regimes.<br><br>
Data is stored as a CSV and versioned separately from model code — critical for reproducibility in any DS project.`,
    code: `<span class="kw">import</span> yfinance <span class="kw">as</span> yf
<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="cm"># Fetch BTC-USD OHLCV data (4-year window)</span>
df = yf.<span class="fn">download</span>(<span class="str">'BTC-USD'</span>,
               start=<span class="str">'2020-01-01'</span>,
               end=<span class="str">'2024-01-01'</span>)

<span class="cm"># OHLCV columns: Open, High, Low, Close, Volume</span>
df = df[[<span class="str">'Open'</span>, <span class="str">'High'</span>, <span class="str">'Low'</span>, <span class="str">'Close'</span>, <span class="str">'Volume'</span>]]
df.<span class="fn">to_csv</span>(<span class="str">'data/btc_ohlcv_2020_2024.csv'</span>)
<span class="fn">print</span>(df.<span class="fn">shape</span>())  <span class="cm"># ~(1461, 5)</span>`,
    interview: `<strong>Q: Why use a 4-year window and not just recent data?</strong><br>
A 4-year window captures different market regimes: bull market (2020–2021), crash (2022), recovery (2023). A model trained only on the bull market will catastrophically fail during a bear market. Regime diversity = generalization.`,
    why: `Always baseline-compare against the naive predictor: "tomorrow = today." This is called a random walk. If your model doesn't beat it on MAPE, you need more features.`
  },
  {
    icon: '⚙️', label: 'Feature Engineering',
    title: 'Step 2: Technical Indicator Feature Engineering',
    explanation: `CryptoCast engineers <strong>7 domain-specific features</strong> derived from price data — standard indicators used by quant traders. These give models temporal context far beyond raw OHLCV prices.<br><br>
This feature ablation study is the secret sauce — the app compares models with and without these features.`,
    code: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="kw">def</span> <span class="fn">engineer_features</span>(df):
    <span class="cm"># 1. Returns (momentum)</span>
    df[<span class="str">'returns'</span>] = df[<span class="str">'Close'</span>].<span class="fn">pct_change</span>()

    <span class="cm"># 2. RSI-14 (momentum oscillator)</span>
    delta = df[<span class="str">'Close'</span>].<span class="fn">diff</span>()
    gain = delta.<span class="fn">clip</span>(lower=<span class="num">0</span>).<span class="fn">rolling</span>(<span class="num">14</span>).<span class="fn">mean</span>()
    loss = -delta.<span class="fn">clip</span>(upper=<span class="num">0</span>).<span class="fn">rolling</span>(<span class="num">14</span>).<span class="fn">mean</span>()
    df[<span class="str">'rsi'</span>] = <span class="num">100</span> - (<span class="num">100</span> / (<span class="num">1</span> + gain/loss))

    <span class="cm"># 3. SMA-7, SMA-30 (trend indicators)</span>
    df[<span class="str">'sma7'</span>] = df[<span class="str">'Close'</span>].<span class="fn">rolling</span>(<span class="num">7</span>).<span class="fn">mean</span>()
    df[<span class="str">'sma30'</span>] = df[<span class="str">'Close'</span>].<span class="fn">rolling</span>(<span class="num">30</span>).<span class="fn">mean</span>()

    <span class="cm"># 4. Bollinger Band width (volatility)</span>
    sma20 = df[<span class="str">'Close'</span>].<span class="fn">rolling</span>(<span class="num">20</span>).<span class="fn">mean</span>()
    std20 = df[<span class="str">'Close'</span>].<span class="fn">rolling</span>(<span class="num">20</span>).<span class="fn">std</span>()
    df[<span class="str">'bb_width'</span>] = (std20 * <span class="num">2</span>) / sma20

    <span class="kw">return</span> df.<span class="fn">dropna</span>()`,
    interview: `<strong>Q: What is RSI and why is it useful for a forecasting model?</strong><br>
RSI (Relative Strength Index) is a momentum oscillator (0–100). RSI > 70 = overbought (price likely to drop), RSI < 30 = oversold (likely to rise). Adding RSI gives the model information about current market momentum that raw prices alone don't capture — it encodes "how fast are we moving?"`,
    why: `Feature engineering transforms raw OHLCV into domain-informed features. This is called "whitepaper feature engineering" — using quant finance domain knowledge to help neural networks learn faster.`
  },
  {
    icon: '🏗️', label: '5 Models',
    title: 'Step 3: All 5 Model Architectures — The Core Comparison',
    explanation: `CryptoCast is a <strong>multi-model comparison dashboard</strong>. It trains and benchmarks 5 distinct deep learning architectures on the same data — this is how you conduct a proper ablation study and justify your architecture choice in an interview.<br><br>
<strong>Architectures:</strong> 1D-CNN · RNN · LSTM · Transformer · PatchTST`,
    code: `<span class="cm"># Model 1: 1D-CNN (fast pattern detector)</span>
<span class="kw">from</span> tensorflow.keras.layers <span class="kw">import</span> Conv1D, GlobalAveragePooling1D

cnn = Sequential([
    Conv1D(<span class="num">64</span>, kernel_size=<span class="num">3</span>, activation=<span class="str">'relu'</span>),
    Conv1D(<span class="num">32</span>, kernel_size=<span class="num">3</span>, activation=<span class="str">'relu'</span>),
    GlobalAveragePooling1D(),
    Dense(<span class="num">1</span>)
])

<span class="cm"># Model 2: Stacked LSTM</span>
lstm = Sequential([
    LSTM(<span class="num">64</span>, return_sequences=<span class="cls">True</span>),
    LSTM(<span class="num">32</span>, return_sequences=<span class="cls">False</span>),
    Dense(<span class="num">1</span>)
])

<span class="cm"># Model 3: PatchTST (state-of-the-art, 2023)</span>
<span class="cm"># Splits time series into patches → Transformer encoder</span>
<span class="cm"># patch_len=16, stride=8, d_model=128, n_heads=8</span>`,
    interview: `<strong>Q: Why train 5 models and not just pick the best one upfront?</strong><br>
This IS the research contribution. Without comparison, you can't claim "LSTM is best for this problem." The ablation study lets you say: "1D-CNN was 2x faster but had 15% higher MAE. PatchTST showed the lowest MAPE on 30-day horizons because its patch embedding captures longer-range patterns."`,
    why: `1D-CNN for local pattern detection, LSTM for sequential memory, PatchTST for long-range attention. Each has a structural reason to perform differently on different forecasting horizons.`
  },
  {
    icon: '🎯', label: 'Multi-Horizon',
    title: 'Step 4: Target = Log Return · Horizons = 1D / 3D / 7D (NOT 30-day)',
    explanation: `CryptoCast predicts <strong>3 future horizons: 1-day, 3-day, 7-day</strong> (not 30-day). The target is <strong>Log Return</strong>, not raw price:<br><br>
<code>r = ln(P[t+h] / P[t])</code><br><br>
Log return is <em>stationary</em> and <em>scale-invariant</em>. Raw price is non-stationary — predicting it directly creates artificially high R² scores. Each model has a 3-output head predicting all 3 horizons at once (multi-output, not multi-step).`,
    code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># Target: Log Return — r = ln(P[t+h] / P[t])</span>
<span class="cm"># Actual horizons: 1D, 3D, 7D (NOT 30-day)</span>
HORIZONS = {<span class="str">'1D'</span>: <span class="num">1</span>, <span class="str">'3D'</span>: <span class="num">3</span>, <span class="str">'7D'</span>: <span class="num">7</span>}

<span class="kw">def</span> <span class="fn">log_return</span>(prices, h):
    <span class="kw">return</span> np.<span class="fn">log</span>(prices[h:] / prices[:-h])  <span class="cm"># stationary</span>

WINDOW = <span class="num">60</span>  <span class="cm"># 60-day sliding window</span>
X, y = [], []
<span class="kw">for</span> i <span class="kw">in</span> range(WINDOW, len(data) - <span class="num">7</span>):
    X.<span class="fn">append</span>(data[i-WINDOW:i])   <span class="cm"># (60, 9) — 9 features</span>
    y.<span class="fn">append</span>([
        lr_1d[i],  <span class="cm"># +1 day log return</span>
        lr_3d[i],  <span class="cm"># +3 day log return</span>
        lr_7d[i]   <span class="cm"># +7 day log return</span>
    ])
<span class="cm"># model output: 3 log returns → invert to get price change</span>`,
    interview: `<strong>Q: Why predict log return instead of raw price?</strong><br>
Raw price is non-stationary — it drifts up/down over time. Even a naive model ("tomorrow = today") gets R²=0.99 on price levels. This is the <strong>R² Paradox</strong>. Log return removes trend (stationary), so the model must learn genuine patterns. Return-level R²=1–3% is excellent in quant finance.`,
    why: `Horizons: 1D, 3D, 7D. LSTM wins at 1D (MAPE=2.06%), PatchTST wins at 3D (3.85%) and 7D (5.93%). These are your real numbers — memorize them.`
  },
  {
    icon: '🔬', label: 'Ablation Study',
    title: 'Step 5: Ablation Study — What Actually Helps Performance?',
    explanation: `An ablation study systematically removes components to measure their individual contribution. CryptoCast compares:<br><br>
<strong>· OHLCV-only vs. OHLCV + 7 Technical Indicators</strong><br>
<strong>· No regularization vs. Dropout(0.2)</strong><br>
<strong>· Single-layer vs. Stacked architecture</strong>`,
    code: `<span class="cm"># Ablation: compare MAPE across configurations</span>
results = {}

<span class="cm"># Config A: Raw Close price only</span>
results[<span class="str">'LSTM_close_only'</span>] = <span class="fn">train_eval</span>(
    features=[<span class="str">'Close'</span>], model=<span class="str">'lstm'</span>
)

<span class="cm"># Config B: Full 7-feature engineering</span>
results[<span class="str">'LSTM_full_features'</span>] = <span class="fn">train_eval</span>(
    features=[<span class="str">'Close'</span>,<span class="str">'returns'</span>,<span class="str">'rsi'</span>,<span class="str">'sma7'</span>,<span class="str">'sma30'</span>,<span class="str">'bb_width'</span>,<span class="str">'volume'</span>],
    model=<span class="str">'lstm'</span>
)

<span class="cm"># PatchTST (best on 30-day horizon)</span>
results[<span class="str">'PatchTST_full_features'</span>] = <span class="fn">train_eval</span>(
    features=<span class="str">'all'</span>, model=<span class="str">'patchtst'</span>
)

<span class="cm"># Print comparison table</span>
pd.DataFrame(results).T.sort_values(<span class="str">'MAPE'</span>)`,
    interview: `<strong>Q: In your ablation study, which model performed best and why?</strong><br>
PatchTST achieved the lowest MAPE on 30-day horizons. PatchTST splits the time series into fixed-length patches (like tokens in NLP) and processes them with a Transformer encoder. This allows attention over longer temporal contexts than LSTM's sequential gating — particularly powerful for multi-week forecasting.`,
    why: `Ablation studies are the difference between a "I trained a model" project and a "I did DS research" project. Every design decision should be empirically justified, not assumed.`
  },
  {
    icon: '📊', label: 'Dashboard',
    title: 'Step 6: Streamlit Dashboard — 10 Interactive Pages',
    explanation: `The CryptoCast Streamlit app has <strong>10 pages</strong> organized into a full forecasting analysis suite — far beyond a basic demo.<br><br>
<strong>Pages:</strong> Overview · Data Exploration · Model Comparison · Forecast Viewer · Feature Importance · Ablation Results · Backtesting · Live Price · Portfolio Simulator · About`,
    code: `<span class="cm"># streamlit_app/app.py — multi-page setup</span>
<span class="kw">import</span> streamlit <span class="kw">as</span> st

st.<span class="fn">set_page_config</span>(
    page_title=<span class="str">"CryptoCast"</span>,
    page_icon=<span class="str">"\u20bf"</span>,  <span class="cm"># Bitcoin symbol</span>
    layout=<span class="str">"wide"</span>
)

<span class="cm"># Model comparison page</span>
<span class="kw">def</span> <span class="fn">show_model_comparison</span>():
    models = [<span class="str">'1D-CNN'</span>, <span class="str">'RNN'</span>, <span class="str">'LSTM'</span>, <span class="str">'Transformer'</span>, <span class="str">'PatchTST'</span>]
    metrics = {<span class="str">'MAE'</span>: [...], <span class="str">'RMSE'</span>: [...], <span class="str">'MAPE'</span>: [...]}
    df_compare = pd.<span class="cls">DataFrame</span>(metrics, index=models)
    st.<span class="fn">dataframe</span>(df_compare.<span class="fn">style</span>.<span class="fn">highlight_min</span>(color=<span class="str">'#00ffc8'</span>))

<span class="cm"># Cached model loading</span>
@st.<span class="fn">cache_resource</span>
<span class="kw">def</span> <span class="fn">load_all_models</span>():
    <span class="kw">return</span> {m: tf.keras.models.<span class="fn">load_model</span>(f<span class="str">"models/{m}.h5"</span>) <span class="kw">for</span> m <span class="kw">in</span> models}`,
    interview: `<strong>Q: Why build 10 pages instead of just a basic forecast chart?</strong><br>
Each page demonstrates a different DS skill: Data Exploration (EDA), Model Comparison (evaluation), Ablation Results (research rigor), Backtesting (finance domain knowledge), Portfolio Simulator (business application). Together they show you can build a complete, production-grade data product — not just fit a model.`,
    why: `The Streamlit app is your live demo during the GUVI evaluation. Launch it first, let the results speak, THEN explain the pipeline. Show → Explain → Defend.`
  }
];

// Render IMDB Showcase
window.renderIMDBProject = function () {
  const el = document.getElementById('imdb-content');
  let activeStep = 0;

  function renderStep(i) {
    const s = IMDB_STEPS[i];
    return `
      <div class="pipeline-detail">
        <h4>${s.title}</h4>
        <p>${s.explanation}</p>
        <div class="code-block">
          <div class="code-block-header">
            <span class="file-label">src/recommender.py</span>
            <button class="btn-sm accent" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>${s.code}</code></pre>
        </div>
        <div class="challenge-block" style="margin-top:1rem">
          <div class="challenge-label">🎤 Interview Q</div>
          <p>${s.interview}</p>
        </div>
        <div style="margin-top:0.75rem;padding:0.75rem 1rem;background:rgba(245,158,11,0.05);border:1px solid rgba(245,158,11,0.15);border-radius:8px;font-size:0.78rem;color:var(--amber)">
          ⚡ <strong>Why This Works:</strong> ${s.why}
        </div>
      </div>`;
  }

  el.innerHTML = `
    <div class="section-header">
      <h2>🎬 IMDb Movie Recommender — Full Pipeline</h2>
      <p>Walk through every step end-to-end. Ground truth project: <a href="https://github.com/pravinkumardatafreak/IMDb-Movie-Recommender" target="_blank" style="color:var(--cyan);text-decoration:underline">github.com/pravinkumardatafreak/IMDb-Movie-Recommender</a></p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
      <div class="glass-card" style="padding:1rem">
        <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">Tech Stack & SOTA Upgrades</div>
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap">
          ${['Pandas','NLTK','Scikit-learn','TF-IDF','KNN','SBERT (all-MiniLM-L6-v2)','LIME Keywords','Streamlit','Selenium'].map(t=>`<span class="tag cyan">${t}</span>`).join('')}
        </div>
      </div>
      <div class="glass-card" style="padding:1rem">
        <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">Core Concept & Dual Search</div>
        <div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--cyan)">Score = 0.7 × similarity + 0.3 × (rating/5)</div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:0.3rem">Dual Search: By Movie Title OR Custom Storyline Plot Description</div>
      </div>
    </div>
    <div class="pipeline-steps" id="imdb-pipeline">
      ${IMDB_STEPS.map((s,i) => `
        <div class="pipeline-step ${i===0?'active':''}" id="pstep-${i}" onclick="setIMDBStep(${i})">
          <div class="step-bubble">${s.icon}</div>
          <div class="step-label">${s.label}</div>
        </div>
        ${i < IMDB_STEPS.length-1 ? '' : ''}
      `).join('')}
    </div>
    <div id="imdb-step-detail">${renderStep(0)}</div>
    <div style="display:flex;justify-content:space-between;margin-top:1rem">
      <button class="btn-ghost btn-sm" id="imdb-prev" onclick="stepIMDB(-1)">← Prev Step</button>
      <button class="btn-primary btn-sm" id="imdb-next" onclick="stepIMDB(1)">Next Step →</button>
    </div>
  `;

  window.setIMDBStep = function (i) {
    activeStep = i;
    document.querySelectorAll('.pipeline-step').forEach((el,idx) => el.classList.toggle('active', idx===i));
    document.getElementById('imdb-step-detail').innerHTML = renderStep(i);
    window.addXP(10);
  };
  window.stepIMDB = function (dir) {
    const next = Math.max(0, Math.min(IMDB_STEPS.length - 1, activeStep + dir));
    setIMDBStep(next);
  };
};

// Render Crypto Showcase
window.renderCryptoProject = function () {
  const el = document.getElementById('crypto-content');
  let activeStep = 0;

  function renderStep(i) {
    const s = CRYPTO_STEPS[i];
    return `
      <div class="pipeline-detail">
        <h4>${s.title}</h4>
        <p>${s.explanation}</p>
        <div class="code-block">
          <div class="code-block-header">
            <span class="file-label">crypto_forecast.py</span>
            <button class="btn-sm accent" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>${s.code}</code></pre>
        </div>
        <div class="challenge-block" style="margin-top:1rem">
          <div class="challenge-label">🎤 Interview Q</div>
          <p>${s.interview}</p>
        </div>
        <div style="margin-top:0.75rem;padding:0.75rem 1rem;background:rgba(245,158,11,0.05);border:1px solid rgba(245,158,11,0.15);border-radius:8px;font-size:0.78rem;color:var(--amber)">
          ⚡ <strong>Why This Works:</strong> ${s.why}
        </div>
      </div>`;
  }

  el.innerHTML = `
    <div class="section-header">
      <h2>📈 CryptoCast — Multi-Horizon BTC Forecasting (5 Models)</h2>
      <p>Real capstone project: <a href="https://github.com/pravinkumardatafreak/cryptocast" target="_blank" style="color:var(--cyan);text-decoration:underline">github.com/pravinkumardatafreak/cryptocast</a> · 1D-CNN · RNN · LSTM · Transformer · PatchTST trained on ~5,000 daily records (Aug 2010–Mar 2024). Target = Log Return. Horizons = 1D, 3D, 7D. Built in PyTorch.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
      <div class="glass-card" style="padding:1rem">
        <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">Tech Stack</div>
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap">
          ${['PyTorch','PatchTST','LSTM','1D-CNN','Transformer','yfinance','Streamlit','Groq LLM','Walk-Forward Val'].map(t=>`<span class="tag cyan">${t}</span>`).join('')}
        </div>
      </div>
      <div class="glass-card" style="padding:1rem">
        <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">Target Variable</div>
        <div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--cyan)">r = ln(P[t+h] / P[t]) — log return</div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:0.3rem">9 features: OHLCV + Change% + Block_Reward + Days_Since_Halving + Halving_Progress</div>
      </div>
    </div>

    <div class="glass-card" style="margin-bottom:1.5rem;padding:1.25rem">
      <div style="font-size:0.8rem;font-weight:700;color:var(--rose);margin-bottom:0.75rem">🏆 Real Results — model_comparison_results.csv</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;font-size:0.78rem">
        <div style="padding:0.6rem;background:rgba(0,255,200,0.06);border:1px solid rgba(0,255,200,0.2);border-radius:8px;text-align:center">
          <div style="color:var(--cyan);font-weight:700">1-Day</div>
          <div style="color:var(--text-muted)">Best: LSTM</div>
          <div style="color:var(--green);font-weight:700">MAPE 2.06%</div>
          <div style="color:var(--text-muted);font-size:0.7rem">R²=0.9921</div>
        </div>
        <div style="padding:0.6rem;background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.2);border-radius:8px;text-align:center">
          <div style="color:var(--violet);font-weight:700">3-Day</div>
          <div style="color:var(--text-muted)">Best: PatchTST</div>
          <div style="color:var(--green);font-weight:700">MAPE 3.85%</div>
          <div style="color:var(--text-muted);font-size:0.7rem">R²=0.9768</div>
        </div>
        <div style="padding:0.6rem;background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.2);border-radius:8px;text-align:center">
          <div style="color:var(--amber);font-weight:700">7-Day</div>
          <div style="color:var(--text-muted)">Best: PatchTST</div>
          <div style="color:var(--green);font-weight:700">MAPE 5.93%</div>
          <div style="color:var(--text-muted);font-size:0.7rem">R²=0.9446</div>
        </div>
      </div>
    </div>

    <div class="pipeline-steps" id="crypto-pipeline">
      ${CRYPTO_STEPS.map((s,i) => `
        <div class="pipeline-step ${i===0?'active':''}" id="cpstep-${i}" onclick="setCryptoStep(${i})">
          <div class="step-bubble">${s.icon}</div>
          <div class="step-label">${s.label}</div>
        </div>
      `).join('')}
    </div>
    <div id="crypto-step-detail">${renderStep(0)}</div>
    <div style="display:flex;justify-content:space-between;margin-top:1rem">
      <button class="btn-ghost btn-sm" onclick="stepCrypto(-1)">← Prev</button>
      <button class="btn-primary btn-sm" onclick="stepCrypto(1)">Next →</button>
    </div>
  `;

  window.setCryptoStep = function (i) {
    activeStep = i;
    document.querySelectorAll('#crypto-pipeline .pipeline-step').forEach((el,idx) => el.classList.toggle('active', idx===i));
    document.getElementById('crypto-step-detail').innerHTML = renderStep(i);
    window.addXP(10);
  };
  window.stepCrypto = function (dir) {
    const next = Math.max(0, Math.min(CRYPTO_STEPS.length - 1, activeStep + dir));
    setCryptoStep(next);
  };
};

window.copyCode = function (btn) {
  const code = btn.closest('.code-block').querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  });
};
