/* ═══════════════════════════════════════════════════
   app.js — Main Application Orchestrator
   XP System · Router · Core Module Study Builders
═══════════════════════════════════════════════════ */

/* ─── XP System ─── */
let totalXP = parseInt(localStorage.getItem('nf_xp') || '0');
const MAX_XP = 1500;

window.addXP = function (pts) {
  totalXP = Math.min(MAX_XP, totalXP + pts);
  localStorage.setItem('nf_xp', totalXP);
  const bar = document.getElementById('xp-bar');
  const val = document.getElementById('xp-value');
  if (bar) bar.style.width = (totalXP / MAX_XP * 100) + '%';
  if (val) val.textContent = totalXP + ' XP';
};

function initXP() {
  const bar = document.getElementById('xp-bar');
  const val = document.getElementById('xp-value');
  if (bar) bar.style.width = (totalXP / MAX_XP * 100) + '%';
  if (val) val.textContent = totalXP + ' XP';
}

/* ─── Daily Study Goal Tracker ─── */
function getTodayKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getDailyGoalState() {
  const today = getTodayKey();
  const target = Math.max(1, Math.min(12, parseInt(localStorage.getItem('nf_daily_goal_target') || '5', 10)));
  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem('nf_daily_study_progress') || '{}');
  } catch (e) {
    stored = {};
  }
  if (stored.date !== today) {
    stored = { date: today, count: 0, completedIds: [] };
    localStorage.setItem('nf_daily_study_progress', JSON.stringify(stored));
  }
  if (!Array.isArray(stored.completedIds)) stored.completedIds = [];
  if (typeof stored.count !== 'number') stored.count = stored.completedIds.length;
  return { today, target, count: stored.count, completedIds: stored.completedIds };
}

function updateDailyGoalUI() {
  const { target, count, completedIds } = getDailyGoalState();
  const bar = document.getElementById('daily-goal-bar');
  const val = document.getElementById('daily-goal-value');
  const pill = document.getElementById('daily-goal-target-pill');
  const container = document.getElementById('nav-daily-goal');
  const pct = Math.min(100, Math.round((count / target) * 100));

  if (bar) bar.style.width = pct + '%';
  if (pill) pill.textContent = `Goal: ${target}`;
  if (val) {
    if (count >= target) {
      val.innerHTML = `<span style="color:var(--lime)">🔥 ${count} / ${target} Done!</span>`;
    } else {
      val.textContent = `${count} / ${target} Modules (${pct}%)`;
    }
  }
  if (container) {
    container.classList.toggle('goal-completed', count >= target);
  }

  // Restore badge indicators for modules completed today
  completedIds.forEach(id => {
    const badge = document.getElementById('badge-' + id);
    if (badge) badge.classList.add('visible');
  });
}

window.adjustDailyGoalTarget = function (delta) {
  const state = getDailyGoalState();
  const nextTarget = Math.max(1, Math.min(12, state.target + delta));
  localStorage.setItem('nf_daily_goal_target', String(nextTarget));
  updateDailyGoalUI();
};

window.completeStudyModuleToday = function (moduleId) {
  const state = getDailyGoalState();
  if (moduleId) {
    if (state.completedIds.includes(moduleId)) {
      updateDailyGoalUI();
      return;
    }
    state.completedIds.push(moduleId);
  }
  state.count += 1;
  localStorage.setItem('nf_daily_study_progress', JSON.stringify({
    date: state.today,
    count: state.count,
    completedIds: state.completedIds
  }));
  window.addXP(25);
  updateDailyGoalUI();
};

window.copyCode = function (btn) {
  const codeEl = btn.closest('.code-block')?.querySelector('code');
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.innerText).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
  });
};

/* ─── Router (Consolidates Legacy Routes into Unified Hubs) ─── */
window.navigateTo = function (sectionId) {
  // Redirect consolidated legacy routes
  if (sectionId === 'roadmap') sectionId = 'accelerator';
  if (sectionId === 'crypto') {
    if (typeof window.openProjectDirectly === 'function') {
      window.openProjectDirectly('crypto');
      return;
    }
    sectionId = 'present';
  }
  if (sectionId === 'imdb') {
    if (typeof window.openProjectDirectly === 'function') {
      window.openProjectDirectly('imdb');
      return;
    }
    sectionId = 'present';
  }

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(a => a.classList.remove('active'));
  const section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  const navItem = document.getElementById('nav-' + sectionId);
  if (navItem) navItem.classList.add('active');

  // Lazy render sections
  if (sectionId === 'accelerator') { if (typeof renderAccelerator === 'function') renderAccelerator(); }
  if (sectionId === 'corridor-a') { if (typeof renderCorridorASection === 'function') renderCorridorASection(); }
  if (sectionId === 'corridor-b') { if (typeof renderCorridorBSection === 'function') renderCorridorBSection(); }
  if (sectionId === 'zoho-mock') { if (typeof renderZohoMockSection === 'function') renderZohoMockSection(); }
  if (sectionId === 'nlp') renderModule('nlp');
  if (sectionId === 'classical') renderModule('classical');
  if (sectionId === 'rnn') renderModule('rnn');
  if (sectionId === 'transformer') renderModule('transformer');
  if (sectionId === 'cnn') renderModule('cnn');
  if (sectionId === 'viva') { if (typeof renderVivaPage === 'function') renderVivaPage(); }
  if (sectionId === 'present') {
    const el = document.getElementById('present-content');
    if (el && !el.innerHTML.trim() && typeof renderPresentationKit === 'function') {
      renderPresentationKit();
    }
  }
  if (sectionId === 'ai-mentor') { if (typeof renderMentorSection === 'function') renderMentorSection(); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('.nav-item').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const sec = a.getAttribute('data-section');
    if (sec) navigateTo(sec);
  });
});

/* ─── Core Module Data (With 1-Minute Memory Cards & Zero Duplication) ─── */
const MODULE_DATA = {
  nlp: {
    title: '01 · NLP & Text AI Foundations',
    subtitle: 'TF-IDF math, bigrams, cosine angle, and sparse vectorization — applied in IMDb & ERIA',
    projectId: 'imdb',
    projectLabel: '🎬 Study IMDb Recommender Deck & Code →',
    memoryCard: {
      formula: 'TF-IDF(t,d) = TF(t,d) × log(N / df(t))  |  cos(θ) = (A·B) / (||A|| ||B||)',
      complexity: 'Brute-force Cosine on Sparse Matrix: O(N × nnz) — <5ms for 5,000 movies',
      whenToUse: 'Fast, interpretable keyword & phrase matching with zero item cold-start.',
      trap: 'Never remove "not" or "no" stopwords in Sentiment Analysis! And never fit TfidfVectorizer on the test split.'
    },
    tabs: ['1. Visual Theory & Formulas', '2. Production Code', '3. Fill-in-Blank Recall', '4. Module Viva (4 Qs)'],
    theory: `
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 10-Second Interview Hook</div>
        <p><em>"When an interviewer asks how content recommendations or RAG lexical search work, state: 'We vectorize cleaned text using TF-IDF with (1,2) n-grams so rare plot phrases like space-travel receive high log-inverse document weight, then compute Cosine Similarity so document length never distorts semantic direction.'"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Dual-Coding Visual Anchor</span>
        </div>
        <img src="assets/mentor_tfidf.png" alt="TF-IDF & Cosine Similarity Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 1: How TF-IDF weights rare plot words ("zombie", "space") &amp; Cosine similarity calculates angle between movie storyline vectors.</div>
      </div>

      <div class="theory-block">
        <h4>TF-IDF: The Core Formula</h4>
        <div class="formula-block">
TF(t, d) = (count of t in d) / (total words in d)
IDF(t)   = log( N / df(t) )
TF-IDF   = TF × IDF
<span class="why-tag">⚡ Why IDF? Words appearing in 900/1000 docs (like "the") get IDF ≈ 0 → near-zero weight. Rare words like "wormhole" in only 5 docs get high IDF → high importance.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Cosine Similarity vs Euclidean Distance</h4>
        <div class="formula-block">
cos(θ) = (A · B) / (||A|| × ||B||)
cosine_dist = 1 - cos(θ)
<span class="why-tag">⚡ Why cosine? A 2-sentence summary and a 500-word article on "space travel" point in the same direction (θ ≈ 0°). Euclidean distance wrongly penalizes length; Cosine measures only angle.</span>
        </div>
      </div>`,
    code: `<span class="cm"># Full NLP Pipeline — IMDb Hybrid Recommender</span>
<span class="kw">import</span> nltk, string
<span class="kw">from</span> sklearn.feature_extraction.text <span class="kw">import</span> TfidfVectorizer
<span class="kw">from</span> nltk.corpus <span class="kw">import</span> stopwords

STOPWORDS = <span class="fn">set</span>(stopwords.<span class="fn">words</span>(<span class="str">'english'</span>))

<span class="cm"># Step 1: Clean text</span>
<span class="kw">def</span> <span class="fn">clean</span>(text):
    text = text.<span class="fn">lower</span>()
    text = text.<span class="fn">translate</span>(
        <span class="cls">str</span>.<span class="fn">maketrans</span>(string.punctuation, <span class="str">' '</span>*<span class="fn">len</span>(string.punctuation))
    )
    <span class="kw">return</span> <span class="str">' '</span>.<span class="fn">join</span>([w <span class="kw">for</span> w <span class="kw">in</span> text.<span class="fn">split</span>() <span class="kw">if</span> w <span class="kw">not in</span> STOPWORDS])

<span class="cm"># Step 2: Vectorize (Unigrams + Bigrams)</span>
vectorizer = <span class="cls">TfidfVectorizer</span>(max_features=<span class="num">5000</span>, ngram_range=(<span class="num">1</span>,<span class="num">2</span>))
tfidf = vectorizer.<span class="fn">fit_transform</span>(df[<span class="str">'clean_desc'</span>])

<span class="cm"># Step 3: Transform unseen query (NEVER fit_transform on query!)</span>
query = <span class="str">"A hero battles evil to save the world"</span>
q_vec = vectorizer.<span class="fn">transform</span>([<span class="fn">clean</span>(query)])`,
    challenge: {
      intro: 'Fill in the blanks to complete the TF-IDF vectorization pipeline:',
      gapCode: `vectorizer = TfidfVectorizer(
    max_features=___BLANK_A___,   # cap vocabulary size
    ngram_range=(___BLANK_B___)   # unigrams + bigrams
)
tfidf_matrix = vectorizer.___BLANK_C___(df['clean_desc'])
# Output shape: (n_movies, n_features)`,
      gaps: { 'BLANK_A': '5000', 'BLANK_B': '1, 2', 'BLANK_C': 'fit_transform' }
    },
    feynman: 'Explain TF-IDF and Cosine Similarity to a non-technical manager in 2 sentences.',
    vivaIds: ['n1', 'n2', 'n3', 'n4', 'n5']
  },

  classical: {
    title: '02 · Classical ML — KNN, Random Forest & Elastic Net',
    subtitle: 'Distance geometry, Bagging variance reduction (1/N), and Group-Lasso sparsity — applied in Telemetry & Soil',
    projectId: 'telemetry',
    projectLabel: '📊 Study Telemetry Regressor (R²=0.9979) →',
    memoryCard: {
      formula: 'Hybrid = 0.7(1-dist) + 0.3(R/5)  |  ElasticNet: ||Y-XW||² + α·ρ||W||₂,₁ + α(1-ρ)||W||²_F',
      complexity: 'Random Forest Variance = σ²/N (decorrelated via √p random feature subspace)',
      whenToUse: 'Tabular telemetry (Random Forest + PCA/K-Means) or small-N high-D collinearity (MultiTaskElasticNet).',
      trap: 'Fitting StandardScaler, PCA, or K-Means BEFORE train_test_split causes catastrophic test leakage!'
    },
    tabs: ['1. Visual Theory & Formulas', '2. Production Code', '3. Fill-in-Blank Recall', '4. Module Viva (5 Qs)'],
    theory: `
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 10-Second Interview Hook</div>
        <p><em>"Know when to use which classical model on your resume: (1) For 14,102 noisy telemetry records, PCA + K-Means + Random Forest reduced variance by 1/N via √p feature decorrelation (MAE 34.97 → 3.78, R²=0.9979). (2) For 24 soil specimens with 1,794 vision features (p ≫ N), Random Forest overfits—so MultiTaskElasticNet enforced Group-Lasso row sparsity (55.21 EMD)."</em></p>
      </div>

      <div class="theory-block">
        <h4>1. K-Nearest Neighbors &amp; Hybrid Re-Ranking (IMDb)</h4>
        <div class="formula-block">
Score = α × (1 - cosine_dist) + β × (rating / 5.0)
α = 0.7 (70% semantic plot match)  |  β = 0.3 (30% quality rating)
<span class="why-tag">⚡ Why algorithm='brute' on sparse TF-IDF? KD-Trees and Ball-Trees break in D=5000 dimensions (Curse of Dimensionality), whereas sparse matrix dot-products run in &lt;5ms.</span>
        </div>
      </div>

      <div class="theory-block">
        <h4>2. Random Forest vs Single Decision Tree (Internship Studio Telemetry)</h4>
        <div class="formula-block">
Bootstrap Aggregation (Bagging) + Random Subspace (max_features = √p)
Ensemble Variance = ρ·σ² + ((1 - ρ) / B)·σ²  →  shrinks as trees decorrelate!
<span class="why-tag">⚡ By restricting each split to √p random features, trees cannot all pick the same dominant feature, slashing correlation ρ and cutting MAE by 89.2%.</span>
        </div>
      </div>

      <div class="theory-block">
        <h4>3. Multi-Task Elastic Net (Soil Granulometry)</h4>
        <div class="formula-block">
L(W) = (1/2N)||Y - XW||²_F + α·ρ ∑ ||W_{j,:}||₂ + (α(1-ρ)/2)||W||²_F
<span class="why-tag">⚡ L1 Row-Norm (Group Lasso) prunes noisy camera features across all 11 sieves simultaneously, while L2 Ridge stabilizes collinear CNN features.</span>
        </div>
      </div>`,
    code: `<span class="kw">from</span> sklearn.neighbors <span class="kw">import</span> NearestNeighbors

<span class="cm"># Fit KNN on sparse TF-IDF matrix</span>
nn = <span class="cls">NearestNeighbors</span>(metric=<span class="str">'cosine'</span>, algorithm=<span class="str">'brute'</span>)
nn.<span class="fn">fit</span>(tfidf_matrix)

<span class="kw">def</span> <span class="fn">recommend</span>(title, n=<span class="num">10</span>, alpha=<span class="num">0.7</span>, beta=<span class="num">0.3</span>):
    idx = df[df[<span class="str">'Title'</span>].<span class="fn">str</span>.<span class="fn">contains</span>(title, case=<span class="cls">False</span>)].index[<span class="num">0</span>]
    dists, idxs = nn.<span class="fn">kneighbors</span>(tfidf_matrix[idx], n_neighbors=n+<span class="num">1</span>)

    results = []
    <span class="kw">for</span> dist, i <span class="kw">in</span> <span class="fn">zip</span>(dists[<span class="num">0</span>][<span class="num">1</span>:], idxs[<span class="num">0</span>][<span class="num">1</span>:]):
        rating = <span class="fn">float</span>(df.iloc[i][<span class="str">'Rating'</span>])
        score = alpha*(<span class="num">1</span>-dist) + beta*(rating/<span class="num">5.0</span>)
        results.<span class="fn">append</span>((df.iloc[i][<span class="str">'Title'</span>], rating, <span class="fn">round</span>(score, <span class="num">4</span>)))

    <span class="kw">return</span> <span class="fn">sorted</span>(results, key=<span class="kw">lambda</span> x: x[<span class="num">2</span>], reverse=<span class="cls">True</span>)`,
    challenge: {
      intro: 'Complete the hybrid scoring calculation (cosine distance=0.2, rating=4.5/5, α=0.7, β=0.3):',
      gapCode: `dist = 0.2
rating = 4.5
alpha, beta = ___BLANK_A___

similarity = ___BLANK_B___      # convert distance to similarity
norm_rating = ___BLANK_C___     # normalize to [0, 1]

score = alpha * similarity + beta * norm_rating
# Expected: 0.7 × 0.8 + 0.3 × 0.9 = ___BLANK_D___`,
      gaps: { 'BLANK_A': '0.7, 0.3', 'BLANK_B': '1 - dist', 'BLANK_C': 'rating / 5.0', 'BLANK_D': '0.83' }
    },
    feynman: 'Explain why Random Forest beats a single Decision Tree using a "committee of doctors" analogy.',
    vivaIds: ['c1', 'c2', 'c3', 'c4', 'c5']
  },

  rnn: {
    title: '03 · RNN, Gated LSTM & RevIN Time-Series',
    subtitle: 'Vanishing gradients, 4 LSTM gates, Reversible Instance Normalization (RevIN), and Walk-Forward Validation',
    projectId: 'crypto',
    projectLabel: '📈 Study CryptoCast & Space Telemetry (2.06% MAPE) →',
    memoryCard: {
      formula: 'Log Return r_t = ln(P_{t+h} / P_t)  |  RevIN: x_norm = γ((x - μ_t)/σ_t) + β',
      complexity: 'Sequential O(T) across timesteps; 60-day lookback window predicts 1D, 3D, 7D horizons',
      whenToUse: 'Short-to-medium sequential momentum (LSTM wins 1-Day BTC forecast at 2.06% MAPE).',
      trap: 'NEVER shuffle time-series data! And never regress raw non-stationary prices (triggers the R²=0.99 Paradox).'
    },
    tabs: ['1. Visual Theory & Formulas', '2. Production Code', '3. Fill-in-Blank Recall', '4. Module Viva (4 Qs)'],
    theory: `
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 10-Second Interview Hook</div>
        <p><em>"In time-series interviews, hit 3 points immediately: (1) Vanilla RNNs vanish because 0.9⁶⁰ ≈ 0.002 during BPTT; LSTMs solve this with an additive Cell State highway and 4 gates. (2) We predict stationary Log Returns verified by ADF tests (p &lt; 0.001) to avoid the R² Paradox. (3) We wrap our PyTorch LSTM in a RevIN layer under chronological Walk-Forward Validation, achieving 2.06% 1-Day MAPE."</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Dual-Coding Visual Anchor</span>
        </div>
        <img src="assets/mentor_lstm.png" alt="LSTM Memory Gates Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 2: Handwritten breakdown of LSTM Forget, Input, Cell Update, and Output gates controlling gradient flow across time.</div>
      </div>

      <div class="theory-block">
        <h4>Why Vanilla RNNs Fail &amp; How LSTM's 4 Gates Fix It</h4>
        <div class="formula-block">
Vanilla RNN Gradient at t=0: (∂L/∂h_T) × W^(T-1)  →  If W=0.9, 0.9⁶⁰ = 0.0018 (Vanished!)
LSTM Cell State Update: C_t = f_t ⊙ C_{t-1} + i_t ⊙ C̃_t  (Additive Highway!)
<span class="why-tag">⚡ 1. Forget Gate (f_t): What to erase  |  2. Input Gate (i_t): What to write  |  3. Cell Candidate (C̃_t): New info  |  4. Output Gate (o_t): What to expose as h_t.</span>
        </div>
      </div>

      <div class="theory-block">
        <h4>Reversible Instance Normalization (RevIN) &amp; The R² Paradox</h4>
        <div class="formula-block">
1. Normalize each 60-day window: x_norm = (x - μ_window) / σ_window
2. De-normalize forecast head: y_pred = y_norm × σ_window + μ_window
<span class="why-tag">⚡ Eliminates non-stationary mean/variance drift when Bitcoin moves from $20k to $70k!</span>
        </div>
      </div>`,
    code: `<span class="cm"># Chronological Sliding Window + LSTM (Zero Future Leakage)</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># 1. Chronological 80/20 Split — NEVER shuffle!</span>
split = <span class="fn">int</span>(<span class="fn">len</span>(df) * <span class="num">0.8</span>)
train_df, test_df = df.iloc[:split], df.iloc[split:]

<span class="cm"># 2. Build 60-day Sliding Windows for Multi-Horizon (1D, 3D, 7D)</span>
WINDOW = <span class="num">60</span>
X, y = [], []
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(WINDOW, <span class="fn">len</span>(scaled_train) - <span class="num">7</span>):
    X.<span class="fn">append</span>(scaled_train[i-WINDOW : i])
    y.<span class="fn">append</span>([lr_1d[i], lr_3d[i], lr_7d[i]])`,
    challenge: {
      intro: 'Fill in the blanks for the 60-day sliding window sequence preparation:',
      gapCode: `WINDOW = 60
X, y = [], []

for i in range(___BLANK_A___, len(scaled)):
    X.append(scaled[i-WINDOW : ___BLANK_B___])
    y.append(scaled[___BLANK_C___])

X = np.array(X).reshape(-1, WINDOW, ___BLANK_D___)
# Shape: (n_samples, 60, 1)`,
      gaps: { 'BLANK_A': 'WINDOW', 'BLANK_B': 'i', 'BLANK_C': 'i', 'BLANK_D': '1' }
    },
    feynman: 'Explain the vanishing gradient problem and how LSTM solves it using a simple notebook analogy.',
    vivaIds: ['r1', 'r2', 'r3', 'r4']
  },

  transformer: {
    title: '04 · Transformers, Self-Attention & PatchTST',
    subtitle: 'Scaled dot-product Q/K/V, √d_k scaling, Positional Encoding, BERT vs GPT, and PatchTST',
    projectId: 'eria',
    projectLabel: '🤖 Study ERIA 4-Agent LangChain DAG →',
    memoryCard: {
      formula: 'Attention(Q,K,V) = softmax( (Q × Kᵀ) / √d_k ) × V',
      complexity: 'Global Self-Attention: O(N²)  |  Swin Shifted-Window: O(N)  |  PatchTST: Patch-Tokenized',
      whenToUse: 'Long-range context: LLM Multi-Agent RAG (ERIA) & 7-Day Time-Series Horizons (PatchTST 5.93% MAPE).',
      trap: 'Without dividing by √d_k, dot products grow by variance d_k, pushing softmax into flat saturation where gradients ≈ 0!'
    },
    tabs: ['1. Visual Theory & Formulas', '2. Production Code', '3. Fill-in-Blank Recall', '4. Module Viva (4 Qs)'],
    theory: `
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 10-Second Interview Hook</div>
        <p><em>"When asked how Transformers work and how you used them: 'Self-attention allows every token to attend to every other token in O(1) path length via softmax(QKᵀ/√d_k)V. Dividing by √d_k stabilizes variance to prevent softmax gradient saturation. In CryptoCast, PatchTST tokenized 16-day time patches to beat LSTM on 7-day horizons (5.93% MAPE); in ERIA, Groq LLaMA 3.3 70B powers our 4-agent DAG.'"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Dual-Coding Visual Anchor</span>
        </div>
        <img src="assets/mentor_attention.png" alt="Self-Attention Mechanism Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 3: Handwritten diagram of Query (Q), Key (K), and Value (V) attention weights connecting context words in parallel.</div>
      </div>

      <div class="theory-block">
        <h4>Scaled Dot-Product Attention &amp; Why √d_k Matters</h4>
        <div class="formula-block">
Attention(Q, K, V) = softmax( Q × Kᵀ / √d_k ) × V
Q = Query ("What I seek")  |  K = Key ("What I offer")  |  V = Value ("What I pass")
<span class="why-tag">⚡ If Q and K have unit variance, Q·Kᵀ has variance d_k. Dividing by √d_k restores unit variance=1 so softmax doesn't saturate to 0 or 1.</span>
        </div>
      </div>

      <div class="theory-block">
        <h4>BERT vs GPT vs PatchTST vs Swin</h4>
        <ul>
          <li><strong>BERT (Encoder-Only, Bidirectional)</strong>: Masked Language Modeling — ideal for classification, NER, embeddings.</li>
          <li><strong>GPT / LLaMA (Decoder-Only, Causal Mask)</strong>: Autoregressive next-token generation — used in ERIA's 4-agent workflow.</li>
          <li><strong>PatchTST (Time-Series Transformer)</strong>: Groups 16 consecutive timesteps into a single patch token — wins 3D (3.85% MAPE) and 7D (5.93% MAPE) BTC forecasts.</li>
        </ul>
      </div>`,
    code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="kw">def</span> <span class="fn">softmax</span>(x):
    e_x = np.<span class="fn">exp</span>(x - np.<span class="fn">max</span>(x, axis=-<span class="num">1</span>, keepdims=<span class="cls">True</span>))
    <span class="kw">return</span> e_x / np.<span class="fn">sum</span>(e_x, axis=-<span class="num">1</span>, keepdims=<span class="cls">True</span>)

<span class="kw">def</span> <span class="fn">scaled_dot_product_attention</span>(Q, K, V):
    d_k = Q.shape[-<span class="num">1</span>]
    scores = np.<span class="fn">matmul</span>(Q, K.swapaxes(-<span class="num">2</span>, -<span class="num">1</span>)) / np.<span class="fn">sqrt</span>(d_k)
    weights = <span class="fn">softmax</span>(scores)
    <span class="kw">return</span> np.<span class="fn">matmul</span>(weights, V), weights`,
    challenge: {
      intro: 'Given Q, K, V with d_k=64, complete the scaled dot-product attention implementation:',
      gapCode: `import numpy as np

def scaled_dot_product_attention(Q, K, V):
    d_k = ___BLANK_A___           # dimension of keys
    scores = np.dot(Q, K.T) / ___BLANK_B___   # scale by sqrt(d_k)
    weights = ___BLANK_C___(scores, axis=-1)    # normalize to probabilities
    output = np.dot(___BLANK_D___, V)
    return output, weights`,
      gaps: { 'BLANK_A': 'Q.shape[-1]', 'BLANK_B': 'np.sqrt(d_k)', 'BLANK_C': 'softmax', 'BLANK_D': 'weights' }
    },
    feynman: 'Explain Query, Key, and Value (Q/K/V) using a library book search analogy.',
    vivaIds: ['t1', 't2', 't3', 't4']
  },

  cnn: {
    title: '05 · CNN, Spatial Calibration & Swin-TransUNet',
    subtitle: 'Convolution output math, weight sharing, OpenCV 15.0 PPM calibration, and Monte Carlo Dropout',
    projectId: 'hubmap',
    projectLabel: '🧬 Study HuBMAP & Soil Vision Decks →',
    memoryCard: {
      formula: 'Output Dim = ⌊(W - F + 2P) / S⌋ + 1  |  Dice Loss = 1 - (2|X∩Y|) / (|X| + |Y|)',
      complexity: 'Weight Sharing: A 3×3×C kernel uses only 9×C weights across the entire image!',
      whenToUse: 'Spatial vision: Soil Granulometry (EfficientNet-B0 + ResNet-34 + 15.0 PPM) & HuBMAP (Swin-TransUNet 0.6782 Dice).',
      trap: 'Without OpenCV PPM calibration, a 2mm gravel grain looks 2× larger on a high-MP sensor! Always normalize physical scale first.'
    },
    tabs: ['1. Visual Theory & Formulas', '2. Production Code', '3. Fill-in-Blank Recall', '4. Module Viva (3 Qs)'],
    theory: `
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 10-Second Interview Hook</div>
        <p><em>"Connect CNN theory directly to your 2 vision repos: (1) In soil-grain-size-distribution, we fused EfficientNet-B0 (1,280 texture features) with ResNet-34 (512 structural features) after normalizing camera sensors to 15.0 Pixels-Per-Millimeter (PPM). (2) In HuBMAP kidney segmentation, we combined a Swin Transformer encoder with a U-Net CNN decoder and Monte Carlo Dropout, reaching 0.6782 Validation Dice."</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Dual-Coding Visual Anchor</span>
        </div>
        <img src="assets/mentor_cnn.png" alt="CNN Feature Detection Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 4: Handwritten illustration of 3×3 convolution sliding kernel producing spatial edge and texture feature maps.</div>
      </div>

      <div class="theory-block">
        <h4>Convolution Dimension Formula &amp; Weight Sharing</h4>
        <div class="formula-block">
Output Size = (W - F + 2P) / S + 1
W = Input width  |  F = Filter size  |  P = Padding  |  S = Stride
<span class="why-tag">⚡ Two stacked 3×3 convolutions have the exact same 5×5 receptive field as one 5×5 kernel, but use 18 weights instead of 25 and add an extra ReLU non-linearity!</span>
        </div>
      </div>

      <div class="theory-block">
        <h4>Physical Camera Calibration (15.0 PPM) &amp; Epistemic Uncertainty</h4>
        <ul>
          <li><strong>OpenCV PPM Calibration (Soil Repo)</strong>: Rescales images by <code>target_ppm / camera_ppm</code> so 1 mm always equals 15 pixels across iPhone and Samsung sensors.</li>
          <li><strong>BCE + Dice Loss (HuBMAP Repo)</strong>: Glomeruli occupy &lt;2% of gigapixel slides; Dice loss directly optimizes overlap <code>2|A∩B|/(|A|+|B|)</code>.</li>
          <li><strong>Monte Carlo Dropout</strong>: Keeps dropout active for $T=10$ forward passes at inference to compute pixel-wise variance $\sigma^2$ (epistemic uncertainty heatmap).</li>
        </ul>
      </div>`,
    code: `<span class="cm"># Dual-Backbone Feature Extraction + OpenCV PPM Calibration</span>
<span class="kw">import</span> cv2
<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="kw">def</span> <span class="fn">calibrate_image_ppm</span>(img: np.ndarray, camera_ppm: <span class="fn">float</span>, target_ppm: <span class="fn">float</span> = <span class="num">15.0</span>):
    <span class="str">"""Rescale image so 1 physical millimeter = 15.0 pixels across all cameras."""</span>
    scale = target_ppm / camera_ppm
    new_w = <span class="fn">int</span>(img.shape[<span class="num">1</span>] * scale)
    new_h = <span class="fn">int</span>(img.shape[<span class="num">0</span>] * scale)
    <span class="kw">return</span> cv2.<span class="fn">resize</span>(img, (new_w, new_h), interpolation=cv2.INTER_AREA)`,
    challenge: {
      intro: 'Calculate the output size after a conv layer: Input=28×28, Filter=5×5, Padding=0, Stride=1',
      gapCode: `# Output size formula: (W - F + 2P) / S + 1

W = ___BLANK_A___    # input size
F = ___BLANK_B___    # filter size
P = ___BLANK_C___    # padding
S = ___BLANK_D___    # stride

output_size = (W - F + 2*P) / S + 1
# Answer: (28 - 5 + 0) / 1 + 1 = 24`,
      gaps: { 'BLANK_A': '28', 'BLANK_B': '5', 'BLANK_C': '0', 'BLANK_D': '1' }
    },
    feynman: 'Explain why weight sharing and PPM camera calibration matter using a real-world magnifying glass analogy.',
    vivaIds: ['v1', 'v2', 'v3']
  }
};

const CORE_MODULE_ORDER = [
  { key: 'nlp', label: '01 · NLP & TF-IDF' },
  { key: 'classical', label: '02 · Classical ML' },
  { key: 'rnn', label: '03 · RNN & RevIN LSTM' },
  { key: 'transformer', label: '04 · Transformers' },
  { key: 'cnn', label: '05 · CNN & Vision' }
];

function renderModule(modKey) {
  const el = document.getElementById('module-' + modKey + '-content');
  if (!el || el.innerHTML.trim()) return;
  const m = MODULE_DATA[modKey];
  if (!m) return;

  const vivaQs = (window.VIVA_BANK || []).filter(q => m.vivaIds.includes(q.id));

  el.innerHTML = `
    <!-- Quick Module Switcher Bar -->
    <div class="viva-filters" style="margin-bottom:1.25rem">
      ${CORE_MODULE_ORDER.map(item => `
        <button class="filter-btn ${item.key === modKey ? 'active' : ''}" onclick="navigateTo('${item.key}')">${item.label}</button>
      `).join('')}
    </div>

    <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem">
      <div>
        <h2>${m.title}</h2>
        <p>${m.subtitle}</p>
      </div>
      <button class="btn-sm accent" onclick="openProjectDirectly('${m.projectId}')">${m.projectLabel}</button>
    </div>

    <div class="module-layout">
      <div class="module-main">
        <div class="glass-card">
          <div class="tab-bar">
            ${m.tabs.map((t,i)=>`<button class="tab-btn ${i===0?'active':''}" onclick="switchTab('${modKey}',${i},this)">${t}</button>`).join('')}
          </div>
          <div class="tab-pane active" id="tab-${modKey}-0">
            ${m.theory}
          </div>
          <div class="tab-pane" id="tab-${modKey}-1">
            <div class="code-block">
              <div class="code-block-header">
                <span class="file-label">${modKey}_pipeline.py</span>
                <button class="btn-sm accent" onclick="copyCode(this)">Copy</button>
              </div>
              <pre><code>${m.code}</code></pre>
            </div>
          </div>
          <div class="tab-pane" id="tab-${modKey}-2">
            <div class="challenge-block">
              <div class="challenge-label">⚡ Desirable Difficulty — Fill-in-Blank Active Recall</div>
              <p>${m.challenge.intro}</p>
              <div class="gap-code">${renderGapCode(m.challenge.gapCode, m.challenge.gaps)}</div>
              <div style="margin-top:0.75rem;display:flex;gap:0.5rem;flex-wrap:wrap">
                <button class="btn-sm accent" onclick="revealGaps(this,'${modKey}')">Reveal Answers</button>
                <button class="btn-sm violet" onclick="addXP(25);this.textContent='✅ +25 XP';this.disabled=true">Mark Challenge Done (+25 XP)</button>
              </div>
            </div>
            <div class="feynman-box" style="margin-top:1rem">
              <div class="feynman-label">🧠 Feynman Technique (Explain Without Jargon)</div>
              <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.6rem">${m.feynman}</p>
              <textarea placeholder="Type your 2-sentence explanation here..."></textarea>
            </div>
          </div>
          <div class="tab-pane" id="tab-${modKey}-3">
            <div class="viva-card">
              <h4>🎤 Focused Viva Questions for ${m.title}</h4>
              ${vivaQs.map(q=>`
                <div class="viva-q-item">
                  <button class="viva-q-btn" onclick="toggleVivaCard(this,'va2-${q.id}')">
                    <span>${q.q}</span>
                    <span class="chevron">▼</span>
                  </button>
                  <div class="viva-answer" id="va2-${q.id}">${q.a}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar: 1-Minute Memory Card & Key Takeaways (No Duplicate Viva!) -->
      <div class="module-sidebar-right">
        <div class="glass-card" style="border-color:rgba(0,255,200,0.28)">
          <div style="font-size:0.74rem;font-weight:700;color:var(--cyan);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.75rem">📌 1-Minute Interview Memory Card</div>
          
          <div style="margin-bottom:0.75rem">
            <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.2rem">Core Equation</div>
            <div style="font-family:var(--font-mono);font-size:0.76rem;color:var(--cyan);background:rgba(0,255,200,0.06);padding:0.5rem 0.65rem;border-radius:6px;border:1px solid rgba(0,255,200,0.18)">${m.memoryCard.formula}</div>
          </div>

          <div style="margin-bottom:0.75rem">
            <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.2rem">Complexity &amp; Scale</div>
            <div style="font-size:0.78rem;color:var(--text-primary);line-height:1.45">${m.memoryCard.complexity}</div>
          </div>

          <div style="margin-bottom:0.75rem">
            <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.2rem">When to Use</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.45">${m.memoryCard.whenToUse}</div>
          </div>

          <div style="background:rgba(244,63,94,0.07);border:1px solid rgba(244,63,94,0.25);padding:0.65rem;border-radius:8px">
            <div style="font-size:0.7rem;font-weight:700;color:var(--rose);margin-bottom:0.2rem">⚠️ #1 Interviewer Trap</div>
            <div style="font-size:0.76rem;color:var(--text-primary);line-height:1.45">${m.memoryCard.trap}</div>
          </div>
        </div>

        <div class="glass-card">
          <div style="font-size:0.75rem;font-weight:700;color:var(--lime);margin-bottom:0.75rem">📋 5 Bullet Takeaways to Memorize</div>
          <ul style="padding-left:1rem">
            ${getKeyTakeaways(modKey).map(t=>`<li style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.5rem;line-height:1.5">${t}</li>`).join('')}
          </ul>
          <button class="btn-sm violet" style="margin-top:0.85rem;width:100%" onclick="addXP(50);completeStudyModuleToday('${modKey}');this.textContent='✅ Module Mastered! +50 XP';this.disabled=true;document.getElementById('badge-${modKey}')?.classList.add('visible')">Mark Module Mastered (+50 XP)</button>
        </div>
      </div>
    </div>
  `;
}

function getKeyTakeaways(mod) {
  const map = {
    nlp: [
      'TF-IDF = TF × log(N/df) — rare plot words score high',
      'Cosine similarity measures angle θ, ignoring document length',
      'Always fit TfidfVectorizer ONLY on training data',
      'ngram_range=(1,2) captures bigrams like "space travel"',
      'Keep negation words ("not", "never") for sentiment tasks'
    ],
    classical: [
      'Hybrid Score = 0.7 × cosine_sim + 0.3 × (rating / 5.0)',
      'Random Forest decorrelates trees via √p random feature splits',
      'PCA + K-Means segmented 3 metabolic regimes on 14,102 rows',
      'MultiTaskElasticNet uses L1 row-norm for Group-Lasso sparsity',
      'Always fit scalers/PCA on train split only (R²=0.9979)'
    ],
    rnn: [
      'Vanilla RNN gradients vanish: 0.9⁶⁰ ≈ 0.002 during BPTT',
      'LSTM Cell State acts as an additive gradient highway',
      '4 Gates: Forget, Input, Cell Candidate, Output',
      'Predict stationary Log Returns (ADF p < 0.001) to avoid R² Paradox',
      'RevIN normalizes each 60-day window (2.06% 1-Day MAPE)'
    ],
    transformer: [
      'Self-Attention connects any two tokens in O(1) path steps',
      'Divide QKᵀ by √d_k to prevent softmax saturation',
      'BERT = Encoder (bidirectional) | GPT/LLaMA = Decoder (causal)',
      'PatchTST groups 16 timesteps into patches (wins 3D & 7D BTC)',
      'ERIA uses a 4-Agent LangChain DAG with Critic Gate ≥ 8.5/10'
    ],
    cnn: [
      'Output size = (W - F + 2P) / S + 1',
      'Two 3×3 convs = 5×5 receptive field with fewer parameters',
      'OpenCV 15.0 PPM calibration normalizes smartphone camera scale',
      'Swin-TransUNet uses shifted windows for O(N) linear complexity',
      'Monte Carlo Dropout (T=10 passes) maps epistemic uncertainty'
    ]
  };
  return map[mod] || [];
}

function renderGapCode(code, gaps) {
  let result = code;
  Object.keys(gaps).forEach(key => {
    result = result.replace(
      '___' + key + '___',
      `<span class="gap" data-answer="${gaps[key]}" onclick="revealGap(this)">[  ?  ]</span>`
    );
  });
  return result;
}

window.revealGaps = function (btn) {
  btn.closest('.challenge-block').querySelectorAll('.gap').forEach(g => {
    g.textContent = g.dataset.answer;
    g.classList.add('revealed');
  });
  addXP(10);
};

window.revealGap = function (el) {
  el.textContent = el.dataset.answer;
  el.classList.add('revealed');
  addXP(5);
};

window.switchTab = function (mod, idx, btn) {
  document.querySelectorAll(`#tab-${mod}-0,#tab-${mod}-1,#tab-${mod}-2,#tab-${mod}-3`).forEach((p,i) => {
    p.classList.toggle('active', i === idx);
  });
  btn.closest('.tab-bar').querySelectorAll('.tab-btn').forEach((b,i) => {
    b.classList.toggle('active', i === idx);
  });
};

window.toggleVivaCard = function (btn, answerId) {
  const a = document.getElementById(answerId);
  if (a) a.classList.toggle('visible');
  if (btn) btn.classList.toggle('open');
};

/* ─── Init ─── */
initXP();
updateDailyGoalUI();
const hashSec = window.location.hash.replace('#', '');
if (hashSec) {
  navigateTo(hashSec);
} else {
  navigateTo('home');
}
