/* ═══════════════════════════════════════════════════
   app.js — Main Application Orchestrator
   XP System · Router · All Module Content Builders
═══════════════════════════════════════════════════ */

/* ─── XP System ─── */
let totalXP = parseInt(localStorage.getItem('nf_xp') || '0');
const MAX_XP = 1500;

window.addXP = function (pts) {
  totalXP = Math.min(MAX_XP, totalXP + pts);
  localStorage.setItem('nf_xp', totalXP);
  document.getElementById('xp-bar').style.width = (totalXP / MAX_XP * 100) + '%';
  document.getElementById('xp-value').textContent = totalXP + ' XP';
};

function initXP() {
  document.getElementById('xp-bar').style.width = (totalXP / MAX_XP * 100) + '%';
  document.getElementById('xp-value').textContent = totalXP + ' XP';
}

/* ─── Router ─── */
window.navigateTo = function (sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(a => a.classList.remove('active'));
  const section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  const navItem = document.getElementById('nav-' + sectionId);
  if (navItem) navItem.classList.add('active');

  // Lazy render sections
  if (sectionId === 'roadmap') renderRoadmap();
  if (sectionId === 'nlp') renderModule('nlp');
  if (sectionId === 'classical') renderModule('classical');
  if (sectionId === 'rnn') renderModule('rnn');
  if (sectionId === 'transformer') renderModule('transformer');
  if (sectionId === 'cnn') renderModule('cnn');
  if (sectionId === 'imdb') renderIMDBProject();
  if (sectionId === 'crypto') renderCryptoProject();
  if (sectionId === 'viva') renderVivaPage();
  if (sectionId === 'present') renderPresentationKit();
};

document.querySelectorAll('.nav-item').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const sec = a.getAttribute('data-section');
    if (sec) navigateTo(sec);
  });
});

/* ─── Roadmap ─── */
function renderRoadmap() {
  const el = document.getElementById('roadmap-timeline');
  if (el.innerHTML.trim()) return;
  const steps = [
    { num:'01', color:'cyan', title:'NLP & Text AI', desc:'Learn how machines read and understand text. Master TF-IDF, tokenization, and stopwords — the backbone of the IMDB project.', tags:['TF-IDF','NLTK','Cosine Similarity','Bigrams'], section:'nlp', time:'~3 hours', milestone:'Can explain TF-IDF formula from memory' },
    { num:'02', color:'cyan', title:'Classical ML — KNN & Recommenders', desc:'Understand how similarity-based retrieval works. Implement the full IMDB hybrid scoring pipeline.', tags:['KNN','Cosine Distance','Hybrid Score','Sparse Matrix'], section:'classical', time:'~4 hours', milestone:'Can implement IMDB recommender from scratch' },
    { num:'03', color:'violet', title:'RNN & LSTM — Sequence Modeling', desc:'Understand how neural networks handle time series and sequential data. Build the Crypto price forecaster.', tags:['LSTM','BPTT','Vanishing Gradient','Sliding Window'], section:'rnn', time:'~5 hours', milestone:'Can explain all 4 LSTM gates and why they solve vanishing gradient' },
    { num:'04', color:'rose', title:'Transformers & Attention', desc:'The architecture that powers GPT, BERT, and modern AI. Understand self-attention, Q/K/V, and positional encoding.', tags:['Self-Attention','Q/K/V','BERT','Positional Encoding'], section:'transformer', time:'~5 hours', milestone:'Can draw the Transformer architecture and explain each component' },
    { num:'05', color:'amber', title:'CNN — Convolutional Networks', desc:'How neural networks see. Understand convolution, pooling, receptive fields, and transfer learning.', tags:['Convolution','Max Pooling','Feature Maps','Transfer Learning'], section:'cnn', time:'~4 hours', milestone:'Can calculate output dimensions after conv + pool layers' },
    { num:'06', color:'cyan', title:'Capstone: IMDB Recommender', desc:'Full end-to-end walkthrough. Build it, understand it, explain it. Pipeline: Load → EDA → Preprocess → TF-IDF → KNN → Hybrid Score → Streamlit.', tags:['End-to-End','Live Demo','Streamlit','7 Steps'], section:'imdb', time:'~3 hours', milestone:'Can present and defend every design decision' },
    { num:'07', color:'violet', title:'Capstone: Crypto Forecaster', desc:'Full LSTM time-series pipeline. Sliding window, normalization, model training, evaluation.', tags:['LSTM','Time Series','MinMaxScaler','MAE/RMSE'], section:'crypto', time:'~3 hours', milestone:'Can explain why you never shuffle time series data' },
    { num:'08', color:'rose', title:'Interview Mode — 60+ Viva Q&As', desc:'Active recall across all 5 modules. Cover easy → hard. Use the Feynman technique on every answer.', tags:['Active Recall','Viva Prep','Mock Interview'], section:'viva', time:'~2 hours', milestone:'Can answer any question without looking at notes' },
    { num:'09', color:'amber', title:'Presentation Kit', desc:'Slide-by-slide talking points for your live evaluation. Know exactly what to say, when to say it.', tags:['Live Evaluation','Presentation','Talking Points'], section:'present', time:'~1 hour', milestone:'Confident, fluid 10-minute project presentation' },
  ];
  el.innerHTML = steps.map(s => `
    <div class="roadmap-node">
      <div class="roadmap-dot" style="border-color:var(--${s.color});box-shadow:0 0 12px var(--${s.color})"></div>
      <div class="roadmap-card glass-card" onclick="navigateTo('${s.section}')">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
          <div style="font-size:0.65rem;font-family:var(--font-mono);color:var(--text-muted)">STEP ${s.num}</div>
          <div style="font-size:0.7rem;color:var(--text-muted)">⏱ ${s.time}</div>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div style="font-size:0.72rem;color:var(--cyan);margin-bottom:0.6rem;font-weight:600">🏆 Milestone: ${s.milestone}</div>
        <div class="roadmap-tags">${s.tags.map(t => `<span class="tag ${s.color}">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

/* ─── Module Content Builder ─── */
const MODULE_DATA = {
  nlp: {
    title: '📝 NLP & Text AI',
    subtitle: 'How machines read and understand text — the foundation of every language AI',
    tabs: ['Theory', 'Code Walkthrough', 'Challenge', 'Viva'],
    theory: `
      <div class="trend-badge">🎬 Real-World Connection: Netflix / Spotify / IMDb Recommendation Algorithms</div>
      
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 Mentor's Desk Note</div>
        <p><em>"When an interviewer asks how movie recommendations work, don't just dump formulas. Tell them: 'When you search for sci-fi space movies on Netflix, the algorithm vectorizes plot keywords and measures the angle between storylines using Cosine Similarity. That's how we match movie plots instantly!'"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Hand-sketched concept</span>
        </div>
        <img src="assets/mentor_tfidf.png" alt="TF-IDF & Cosine Similarity Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 1: How TF-IDF weights rare plot words ("zombie", "space") & Cosine similarity calculates angle between movie storyline vectors.</div>
      </div>

      <div class="theory-block">
        <h4>What is NLP?</h4>
        <p>Natural Language Processing bridges raw human text and machine-usable numbers. The pipeline for ANY text task: <strong>Raw Text → Clean → Vectorize → Model → Output</strong>.</p>
      </div>
      <div class="theory-block">
        <h4>TF-IDF: The Core Formula</h4>
        <div class="formula-block">
TF(t, d) = (count of t in d) / (total words in d)
IDF(t)   = log( N / df(t) )
TF-IDF   = TF × IDF
<span class="why-tag">⚡ Why IDF? Words appearing in 900/1000 docs (like "the") get IDF ≈ 0 → near-zero weight. Rare words like "zombie" in only 5 docs get high IDF → high importance.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Cosine Similarity</h4>
        <div class="formula-block">
cos(θ) = (A · B) / (|A| × |B|)
cosine_dist = 1 - cos(θ)
<span class="why-tag">⚡ Why cosine? Two documents about "space travel" will point in the same direction even if one is 100 words and the other is 1000 words. Cosine ignores length — only direction matters.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Preprocessing Pipeline</h4>
        <ul>
          <li><strong>Lowercase</strong>: "Movie" = "movie" — case shouldn't affect meaning</li>
          <li><strong>Remove punctuation</strong>: Punctuation adds noise to word-based models</li>
          <li><strong>Stopword removal</strong>: Remove "the, is, at, on" — they appear everywhere and add no discriminative power</li>
          <li><strong>Tokenization</strong>: Split text into individual words/tokens</li>
        </ul>
      </div>`,
    code: `<span class="cm"># Full NLP Pipeline — IMDB Recommender</span>
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

<span class="cm"># Step 2: Vectorize</span>
vectorizer = <span class="cls">TfidfVectorizer</span>(max_features=<span class="num">5000</span>, ngram_range=(<span class="num">1</span>,<span class="num">2</span>))
tfidf = vectorizer.<span class="fn">fit_transform</span>(df[<span class="str">'clean_desc'</span>])

<span class="cm"># Step 3: Cosine similarity for a query</span>
query = <span class="str">"A hero battles evil to save the world"</span>
q_vec = vectorizer.<span class="fn">transform</span>([<span class="fn">clean</span>(query)])
<span class="cm"># q_vec shape: (1, 5000) — one doc in TF-IDF space</span>`,
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
    feynman: 'How would you explain TF-IDF to a friend who has never coded?',
    vivaIds: ['n1', 'n2', 'n3', 'n4']
  },
  classical: {
    title: '📐 Classical ML — KNN & Recommenders',
    subtitle: 'Build the IMDB hybrid recommender from scratch — understand every line',
    tabs: ['Theory', 'Code Walkthrough', 'Challenge', 'Viva'],
    theory: `
      <div class="trend-badge">🍿 Content Discovery: Blending Relevance with Popularity Ratings</div>
      
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 Mentor's Desk Note</div>
        <p><em>"Notice why we combined text similarity with user ratings (α=0.7, β=0.3). In real platforms like IMDb or YouTube, if you only match topic similarity, you might recommend a poorly rated movie. Combining popularity with storyline match produces recommendations users actually enjoy!"</em></p>
      </div>

      <div class="theory-block">
        <h4>K-Nearest Neighbors (KNN)</h4>
        <p>KNN is the simplest ML model: <strong>"Find the K training points most similar to the query."</strong> No training in the traditional sense — fitting just stores the data.</p>
        <div class="formula-block">
Algorithm: Given query q
1. Compute distance(q, xᵢ) for all training points
2. Sort by distance (ascending)
3. Return top K closest points
<span class="why-tag">⚡ This is O(N×D) per query — acceptable for 1000 movies, painful for 10M. Use Approximate Nearest Neighbors (FAISS) for scale.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Hybrid Scoring — The GUVI Formula</h4>
        <div class="formula-block">
Score = α × (1 - cosine_dist) + β × (rating / 5)
α = 0.7  →  70% storyline similarity
β = 0.3  →  30% quality/popularity
<span class="why-tag">⚡ Why (rating/5)? Normalize to [0,1] so it's comparable to cosine similarity. No scale mismatch.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Why Not a Full Similarity Matrix?</h4>
        <ul>
          <li>N=1000 movies: 1000×1000 = 1M values — fine</li>
          <li>N=50,000 movies: 2.5 billion values — memory crash</li>
          <li>KNN: O(1) storage, O(N) query — scales linearly</li>
        </ul>
      </div>`,

    code: `<span class="kw">from</span> sklearn.neighbors <span class="kw">import</span> NearestNeighbors

<span class="cm"># Fit KNN on TF-IDF matrix</span>
nn = <span class="cls">NearestNeighbors</span>(metric=<span class="str">'cosine'</span>, algorithm=<span class="str">'brute'</span>)
nn.<span class="fn">fit</span>(tfidf_matrix)

<span class="kw">def</span> <span class="fn">recommend</span>(title, n=<span class="num">10</span>, alpha=<span class="num">0.7</span>, beta=<span class="num">0.3</span>):
    <span class="cm"># Find movie index</span>
    idx = df[df[<span class="str">'Title'</span>].<span class="fn">str</span>.<span class="fn">contains</span>(title, case=<span class="cls">False</span>)].index[<span class="num">0</span>]

    <span class="cm"># Get n+1 neighbors (first is the movie itself)</span>
    dists, idxs = nn.<span class="fn">kneighbors</span>(tfidf_matrix[idx], n_neighbors=n+<span class="num">1</span>)

    results = []
    <span class="kw">for</span> dist, i <span class="kw">in</span> <span class="fn">zip</span>(dists[<span class="num">0</span>][<span class="num">1</span>:], idxs[<span class="num">0</span>][<span class="num">1</span>:]):
        rating = <span class="fn">float</span>(df.iloc[i][<span class="str">'Rating'</span>])
        score = alpha*(<span class="num">1</span>-dist) + beta*(rating/<span class="num">5.0</span>)  <span class="cm"># GUVI formula</span>
        results.<span class="fn">append</span>((df.iloc[i][<span class="str">'Title'</span>], rating, <span class="fn">round</span>(score, <span class="num">4</span>)))

    <span class="kw">return</span> <span class="fn">sorted</span>(results, key=<span class="kw">lambda</span> x: x[<span class="num">2</span>], reverse=<span class="cls">True</span>)

<span class="fn">print</span>(<span class="fn">recommend</span>(<span class="str">"Shawshank"</span>, n=<span class="num">5</span>))`,
    challenge: {
      intro: 'Complete the hybrid scoring: cosine distance=0.2, rating=8.0, α=0.7, β=0.3. What is the score?',
      gapCode: `dist = 0.2
rating = 8.0
alpha, beta = ___BLANK_A___

similarity = ___BLANK_B___      # 1 - dist
norm_rating = ___BLANK_C___     # rating / 5

score = alpha * similarity + beta * norm_rating
# Expected: 0.7 × 0.8 + 0.3 × 1.6 = ___BLANK_D___`,
      gaps: { 'BLANK_A': '0.7, 0.3', 'BLANK_B': '1 - dist', 'BLANK_C': 'rating / 5', 'BLANK_D': '1.04 → capped at 1.0' }
    },
    feynman: 'Explain KNN to a 5-year-old using a real-world analogy.',
    vivaIds: ['c1', 'c2', 'c3', 'c4']
  },
  rnn: {
    title: '🔄 RNN & LSTM — Sequence Modeling',
    subtitle: 'How neural networks remember — the key to time series, language, and beyond',
    tabs: ['Theory', 'Architecture', 'Challenge', 'Viva'],
    theory: `
      <div class="trend-badge">📈 Real-World Connection: Bitcoin & Memecoin Market Volatility</div>
      
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 Mentor's Desk Note</div>
        <p><em>"Standard neural networks treat every input as independent. But crypto price action or stock trends depend heavily on past sequence context. LSTMs solve this by keeping a gated long-term memory state — like keeping a notebook of recent market trends!"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Hand-sketched concept</span>
        </div>
        <img src="assets/mentor_lstm.png" alt="LSTM Memory Gates Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 2: Handwritten breakdown of LSTM Forget, Input, and Output gates controlling information flow across time.</div>
      </div>

      <div class="theory-block">
        <h4>Why Vanilla RNNs Fail</h4>
        <p>Vanilla RNNs process sequences step by step, passing a hidden state hₜ forward. But during backpropagation through time (BPTT), gradients are multiplied by the weight matrix at each step.</p>
        <div class="formula-block">
hₜ = tanh(Wₕ × hₜ₋₁ + Wₓ × xₜ + b)
Gradient at t=0 = (∂L/∂h₁₀₀) × W⁹⁹

If W < 1 → gradient → 0 (vanishing)
If W > 1 → gradient → ∞ (exploding)
<span class="why-tag">⚡ If W=0.9: 0.9⁶⁰ ≈ 0.002. After 60 steps, the gradient is nearly zero. The model can't learn what happened 60 timesteps ago.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>LSTM: The 4 Gates</h4>
        <ul>
          <li><strong>Forget Gate</strong> (σ): What to erase from long-term memory</li>
          <li><strong>Input Gate</strong> (σ): What new info is worth storing</li>
          <li><strong>Cell Update</strong> (tanh): Candidate values to add to memory</li>
          <li><strong>Output Gate</strong> (σ): What to output from current memory state</li>
        </ul>
        <div class="formula-block">
Cell state flows with only +, × operations
→ gradients flow cleanly → no vanishing!
<span class="why-tag">⚡ The cell state is the "highway" of information. Gates decide on/off ramps. This is the key innovation of LSTMs.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Sliding Window for Time Series</h4>
        <p>Frame forecasting as supervised learning: use <strong>W past values</strong> to predict the <strong>W+1th value</strong>. Slide the window across the entire series to create many training examples.</p>
      </div>`,
    code: `<span class="cm"># LSTM for Crypto Price Forecasting</span>
<span class="kw">from</span> tensorflow.keras.models <span class="kw">import</span> Sequential
<span class="kw">from</span> tensorflow.keras.layers <span class="kw">import</span> LSTM, Dense, Dropout

<span class="cm"># Architecture</span>
model = <span class="cls">Sequential</span>([
    <span class="cls">LSTM</span>(<span class="num">50</span>, return_sequences=<span class="cls">True</span>,  <span class="cm"># pass all timesteps to next LSTM</span>
         input_shape=(WINDOW, <span class="num">1</span>)),
    <span class="cls">Dropout</span>(<span class="num">0.2</span>),
    <span class="cls">LSTM</span>(<span class="num">50</span>, return_sequences=<span class="cls">False</span>), <span class="cm"># only last timestep → Dense</span>
    <span class="cls">Dropout</span>(<span class="num">0.2</span>),
    <span class="cls">Dense</span>(<span class="num">1</span>)  <span class="cm"># predict single next price</span>
])

model.<span class="fn">compile</span>(optimizer=<span class="str">'adam'</span>, loss=<span class="str">'mse'</span>)

<span class="cm"># ⚠️ CRITICAL: chronological split — NEVER shuffle!</span>
split = <span class="fn">int</span>(<span class="fn">len</span>(df) * <span class="num">0.8</span>)
df_train = df.iloc[:split]
df_test = df.iloc[split:]`,
    challenge: {
      intro: 'Fill in the blanks for the sliding window data preparation:',
      gapCode: `WINDOW = 60
X, y = [], []

for i in range(___BLANK_A___, len(scaled)):
    X.append(scaled[i-WINDOW : ___BLANK_B___])
    y.append(scaled[___BLANK_C___])

X = np.array(X).reshape(-1, WINDOW, ___BLANK_D___)
# Shape: (n_samples, 60, 1)`,
      gaps: { 'BLANK_A': 'WINDOW', 'BLANK_B': 'i', 'BLANK_C': 'i', 'BLANK_D': '1' }
    },
    feynman: 'Explain the vanishing gradient problem using a simple non-technical analogy.',
    vivaIds: ['r1', 'r2', 'r3', 'r4']
  },
  transformer: {
    title: '🤖 Transformers & Attention',
    subtitle: 'The architecture that changed everything — BERT, GPT, and beyond',
    tabs: ['Theory', 'Architecture', 'Challenge', 'Viva'],
    theory: `
      <div class="trend-badge">💬 Generative AI: How ChatGPT, Claude & Gemini Think</div>
      
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 Mentor's Desk Note</div>
        <p><em>"Transformers powered the AI revolution. When explaining self-attention in an interview, say: 'Self-attention allows every word in a sentence to look at every other word at the exact same time. So in 'The bank by the river', 'bank' immediately connects to 'river' to know it means a riverbank, not a financial bank!'"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Hand-sketched concept</span>
        </div>
        <img src="assets/mentor_attention.png" alt="Self-Attention Mechanism Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 3: Handwritten diagram of Query (Q), Key (K), and Value (V) attention weights connecting context words.</div>
      </div>

      <div class="theory-block">
        <h4>The Core Idea: Attention</h4>
        <p>Instead of processing tokens sequentially (like RNNs), Transformers look at <strong>all tokens simultaneously</strong> and learn which tokens should "attend to" which others.</p>
        <div class="formula-block">
Attention(Q, K, V) = softmax( Q×Kᵀ / √d_k ) × V

Q = Query  → "What am I looking for?"
K = Key    → "What can I offer?"
V = Value  → "What info do I actually pass?"
<span class="why-tag">⚡ Divide by √d_k to prevent dot products from growing too large in high dimensions (which makes softmax saturate and kills gradients).</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>Why Better Than RNN?</h4>
        <ul>
          <li><strong>Parallelizable</strong>: No sequential dependency → train 10x faster on GPUs</li>
          <li><strong>Long-range dependencies</strong>: Any token attends to any other in O(1) steps (RNNs need O(N) steps)</li>
          <li><strong>Interpretable</strong>: Attention weights show what the model focuses on</li>
        </ul>
      </div>
      <div class="theory-block">
        <h4>Positional Encoding</h4>
        <p>Transformers process all tokens in parallel → they lose word order information! Positional encodings inject position-awareness:</p>
        <div class="formula-block">
PE(pos, 2i)   = sin(pos / 10000^(2i/d))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d))
<span class="why-tag">⚡ Why sinusoidal? Relative positions can be computed as linear functions of these encodings. Also generalizes to longer sequences than seen in training.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>BERT vs GPT</h4>
        <ul>
          <li><strong>BERT</strong>: Encoder only, bidirectional. Masked LM pretraining. Best for: classification, NER, Q&A</li>
          <li><strong>GPT</strong>: Decoder only, causal (left-to-right). Next-token prediction. Best for: generation, completion</li>
        </ul>
      </div>`,
    code: `<span class="kw">from</span> transformers <span class="kw">import</span> pipeline

<span class="cm"># Zero-shot sentiment analysis with BERT</span>
sentiment = <span class="fn">pipeline</span>(<span class="str">'sentiment-analysis'</span>)
result = <span class="fn">sentiment</span>(<span class="str">"The storyline was absolutely brilliant!"</span>)
<span class="cm"># [{'label': 'POSITIVE', 'score': 0.9998}]</span>

<span class="cm"># Text generation with GPT-2</span>
generator = <span class="fn">pipeline</span>(<span class="str">'text-generation'</span>, model=<span class="str">'gpt2'</span>)
<span class="fn">generator</span>(<span class="str">"The neural network predicted"</span>, max_length=<span class="num">50</span>)

<span class="cm"># Attention visualization (conceptual)</span>
<span class="cm"># Each layer: Attention(Q,K,V) = softmax(QKᵀ/√dₖ)·V</span>
<span class="cm"># 12 heads × 12 layers = 144 attention matrices in BERT-base</span>`,
    challenge: {
      intro: 'Given Q,K,V with d_k=64, write the scaled dot-product attention formula:',
      gapCode: `import numpy as np

def scaled_dot_product_attention(Q, K, V):
    d_k = ___BLANK_A___           # dimension of keys
    scores = np.dot(Q, K.T) / ___BLANK_B___   # scale
    weights = ___BLANK_C___(scores, axis=-1)    # softmax
    output = np.dot(___BLANK_D___, V)
    return output, weights`,
      gaps: { 'BLANK_A': 'Q.shape[-1]', 'BLANK_B': 'np.sqrt(d_k)', 'BLANK_C': 'softmax', 'BLANK_D': 'weights' }
    },
    feynman: 'Explain attention to someone who has never studied AI. Use a real-world analogy.',
    vivaIds: ['t1', 't2', 't3', 't4']
  },
  cnn: {
    title: '👁️ CNN — Convolutional Neural Networks',
    subtitle: 'How machines learn to see — from edges to faces to objects',
    tabs: ['Theory', 'Architecture', 'Challenge', 'Viva'],
    theory: `
      <div class="trend-badge">📷 Visual Tech: Instagram Face Filters & TikTok AI Vision</div>
      
      <div class="mentor-desk-note">
        <div class="mentor-desk-header">👨‍🏫 Mentor's Desk Note</div>
        <p><em>"Ever wonder how Instagram filters detect your nose or eyes in real time? Convolution filters slide over your camera feed, detecting edges in layer 1, features in layer 2, and face landmarks in layer 3!"</em></p>
      </div>

      <div class="sketch-card">
        <div class="sketch-card-header">
          <span class="sketch-tag">✏️ Mentor's Blackboard Diagram</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">Hand-sketched concept</span>
        </div>
        <img src="assets/mentor_cnn.png" alt="CNN Feature Detection Sketch" class="sketch-img" />
        <div class="sketch-caption">Figure 4: Handwritten illustration of 3x3 convolution sliding kernel producing edge feature maps.</div>
      </div>

      <div class="theory-block">
        <h4>The Convolution Operation</h4>
        <p>A small matrix (kernel) slides over the input, multiplying element-wise and summing → produces one value per position → feature map.</p>
        <div class="formula-block">
Output(i,j) = Σ Σ Input(i+m, j+n) × Kernel(m,n)

Output size = (W - F + 2P) / S + 1
W=input, F=filter size, P=padding, S=stride
<span class="why-tag">⚡ Weight sharing: ONE set of kernel weights detects the SAME feature everywhere in the image. 9 weights detect vertical edges across the entire image. This is why CNNs need far fewer parameters than fully-connected networks.</span>
        </div>
      </div>
      <div class="theory-block">
        <h4>What Each Layer Learns</h4>
        <ul>
          <li><strong>Layer 1</strong>: Edges, corners, basic textures</li>
          <li><strong>Layer 2</strong>: Simple shapes (circles, lines)</li>
          <li><strong>Layer 3</strong>: Complex patterns (fur, wheels, grids)</li>
          <li><strong>Layer 4–5</strong>: High-level parts (faces, eyes, wheels)</li>
          <li><strong>Final layers</strong>: Full objects, class discriminative features</li>
        </ul>
      </div>
      <div class="theory-block">
        <h4>Pooling</h4>
        <ul>
          <li><strong>Max Pooling</strong>: "Did this feature appear anywhere in this region?" — translation invariant</li>
          <li><strong>Average Pooling</strong>: "How strongly was this feature present?" — smoother</li>
          <li><strong>Global Average Pooling</strong>: Collapses spatial dims → used before final classifier</li>
        </ul>
      </div>
      <div class="theory-block">
        <h4>Transfer Learning Recipe</h4>
        <div class="formula-block">
1. Load pretrained model (ResNet50, EfficientNet)
2. Freeze early layers (generic edge/texture detectors)
3. Fine-tune last N layers (task-specific)
4. Replace final FC layer with your n_classes
5. Train with small lr (e.g., 1e-4)
<span class="why-tag">⚡ Rule: "Freeze early, fine-tune late, replace last." Small dataset → freeze more. Large dataset → fine-tune all.</span>
        </div>
      </div>`,

    code: `<span class="kw">from</span> tensorflow.keras.applications <span class="kw">import</span> ResNet50
<span class="kw">from</span> tensorflow.keras.layers <span class="kw">import</span> Dense, GlobalAveragePooling2D
<span class="kw">from</span> tensorflow.keras.models <span class="kw">import</span> Model

<span class="cm"># Transfer Learning with ResNet50</span>
base = <span class="cls">ResNet50</span>(weights=<span class="str">'imagenet'</span>,
               include_top=<span class="cls">False</span>,
               input_shape=(<span class="num">224</span>, <span class="num">224</span>, <span class="num">3</span>))

<span class="cm"># Freeze all base layers</span>
<span class="kw">for</span> layer <span class="kw">in</span> base.layers:
    layer.trainable = <span class="cls">False</span>

<span class="cm"># Add custom head for our task</span>
x = <span class="cls">GlobalAveragePooling2D</span>()(base.output)
x = <span class="cls">Dense</span>(<span class="num">256</span>, activation=<span class="str">'relu'</span>)(x)
output = <span class="cls">Dense</span>(n_classes, activation=<span class="str">'softmax'</span>)(x)

model = <span class="cls">Model</span>(base.input, output)
model.<span class="fn">compile</span>(optimizer=<span class="str">'adam'</span>, loss=<span class="str">'categorical_crossentropy'</span>)`,
    challenge: {
      intro: 'Calculate the output size after a conv layer: Input=28×28, Filter=5×5, Padding=0, Stride=1',
      gapCode: `# Output size formula: (W - F + 2P) / S + 1

W = ___BLANK_A___    # input size
F = ___BLANK_B___    # filter size
P = ___BLANK_C___    # padding
S = ___BLANK_D___    # stride

output_size = (W - F + 2*P) / S + 1
# Answer: (28 - 5 + 0) / 1 + 1 = ?`,
      gaps: { 'BLANK_A': '28', 'BLANK_B': '5', 'BLANK_C': '0', 'BLANK_D': '1' }
    },
    feynman: 'Explain why weight sharing in CNNs is such a big deal compared to fully-connected layers.',
    vivaIds: ['v1', 'v2', 'v3', 'v4']
  }
};

function renderModule(modKey) {
  const el = document.getElementById('module-' + modKey + '-content');
  if (el.innerHTML.trim()) return; // already rendered
  const m = MODULE_DATA[modKey];
  if (!m) return;

  const vivaQs = VIVA_BANK.filter(q => m.vivaIds.includes(q.id));

  el.innerHTML = `
    <div class="section-header">
      <h2>${m.title}</h2>
      <p>${m.subtitle}</p>
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
                <span class="file-label">${modKey}.py</span>
                <button class="btn-sm accent" onclick="copyCode(this)">Copy</button>
              </div>
              <pre><code>${m.code}</code></pre>
            </div>
          </div>
          <div class="tab-pane" id="tab-${modKey}-2">
            <div class="challenge-block">
              <div class="challenge-label">⚡ Desirable Difficulty Challenge</div>
              <p>${m.challenge.intro}</p>
              <div class="gap-code">${renderGapCode(m.challenge.gapCode, m.challenge.gaps)}</div>
              <div style="margin-top:0.75rem;display:flex;gap:0.5rem;flex-wrap:wrap">
                <button class="btn-sm accent" onclick="revealGaps(this,'${modKey}')">Reveal Answers</button>
                <button class="btn-sm violet" onclick="addXP(25);this.textContent='✅ +25 XP';this.disabled=true">Mark Complete (+25 XP)</button>
              </div>
            </div>
            <div class="feynman-box" style="margin-top:1rem">
              <div class="feynman-label">🧠 Feynman Technique</div>
              <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.6rem">${m.feynman}</p>
              <textarea placeholder="Write your explanation here in simple terms..."></textarea>
            </div>
          </div>
          <div class="tab-pane" id="tab-${modKey}-3">
            <div class="viva-card">
              <h4>🎤 Interview Questions for This Module</h4>
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
      <div class="module-sidebar-right">
        <div class="glass-card viva-card">
          <h4>🎤 Quick Viva</h4>
          ${vivaQs.slice(0,3).map(q=>`
            <div class="viva-q-item">
              <button class="viva-q-btn" onclick="toggleVivaCard(this,'va3-${q.id}')">
                <span style="font-size:0.78rem">${q.q}</span>
                <span class="chevron">▼</span>
              </button>
              <div class="viva-answer" id="va3-${q.id}">${q.a}</div>
            </div>
          `).join('')}
          <button class="btn-sm accent" style="margin-top:0.75rem;width:100%" onclick="navigateTo('viva')">All 60+ Questions →</button>
        </div>
        <div class="glass-card">
          <div style="font-size:0.75rem;font-weight:700;color:var(--lime);margin-bottom:0.75rem">📋 Key Takeaways</div>
          <ul style="padding-left:1rem">
            ${getKeyTakeaways(modKey).map(t=>`<li style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.5rem;line-height:1.5">${t}</li>`).join('')}
          </ul>
          <button class="btn-sm violet" style="margin-top:0.85rem;width:100%" onclick="addXP(50);this.textContent='✅ Module Complete! +50 XP';this.disabled=true;document.getElementById('badge-${modKey}').classList.add('visible')">Mark Module Done (+50 XP)</button>
        </div>
      </div>
    </div>
  `;
}

function getKeyTakeaways(mod) {
  const map = {
    nlp: ['TF-IDF = TF × log(N/df) — rare words score high', 'Cosine similarity ignores document length', 'Always fit vectorizer only on training data', 'N-grams capture multi-word phrases', 'Stopwords: remove for retrieval, keep for sentiment'],
    classical: ['KNN is unsupervised for recommendation', 'Hybrid Score = α×sim + β×(rating/5)', 'Cosine beats Euclidean for high-dim text', 'algorithm="brute" works best for sparse matrix', 'Curse of dimensionality: distances collapse at high D'],
    rnn: ['Vanilla RNN: vanishing gradient after ~10 steps', 'LSTM: cell state = gradient highway', '4 gates: Forget, Input, Cell Update, Output', 'Time series: chronological split only!', 'Window size is a key hyperparameter'],
    transformer: ['Self-attention: every token attends to all tokens', 'QKV: Query=what I seek, Key=what I offer, Value=what I pass', 'Scale by √d_k to prevent softmax saturation', 'BERT=bidirectional, GPT=causal/generative', 'Positional encoding: sinusoidal or learned'],
    cnn: ['Convolution = pattern detection + weight sharing', 'Feature map shows WHERE a pattern appears', 'Deeper layers = higher-level features', 'Max pooling = translation invariance', 'Transfer learning: freeze early, fine-tune late']
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

window.revealGaps = function (btn, modKey) {
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
  a.classList.toggle('visible');
  btn.classList.toggle('open');
};

/* ─── Presentation Kit (GUVI Evaluation PDF Aligned) ─── */
function renderPresentationKit() {
  const el = document.getElementById('present-content');
  if (el.innerHTML.trim()) return;

  const imdbSlides = [
    { num:'01', title:'1. Project Introduction', color:'cyan', summary:'Intro in 2 lines (GUVI PDF Standard)', bullets:['"IMDb Movie Recommendation System Using Storylines is an end-to-end content-based filtering engine built with Python, NLP, and Streamlit."', '"It allows users to search by movie title or custom plot ideas to instantly receive the top 5 most similar movies based on plot semantics and ratings."'] },
    { num:'02', title:'2. Objective of Project', color:'cyan', summary:'Explain objective in 2 lines', bullets:['"Primary objective: Solve the content discovery bottleneck by transforming raw unstructured storylines into 5,000-dimensional TF-IDF vectors."', '"Secondary objective: Deploy a zero-cold-start interactive Streamlit dashboard that ranks recommendations using a hybrid score of similarity (70%) and user ratings (30%)."'] },
    { num:'03', title:'3. Text Scraping & Extraction', color:'violet', summary:'Selenium web scraping process', bullets:['Automated scraping of 5,000+ movies from IMDb 2024 Advanced Search using Selenium WebDriver.', 'Extracted target fields: Movie Title, Storyline (Plot Summary), Rating, Certificate, and Genres.', 'Reference script: src/scraper.py — handles dynamic page scrolling, popups, and element waiting.'] },
    { num:'04', title:'4. Text Preprocessing & Vectorization', color:'violet', summary:'NLP pipeline techniques', bullets:['Cleaning (src/preprocess.py): Lowercasing, string.punctuation stripping with maketrans, NLTK stopword removal.', 'TF-IDF Vectorization: TfidfVectorizer(max_features=5000, ngram_range=(1,2)). Captures unigrams & bigrams.', 'Dense Embeddings (SOTA): Optional Sentence-BERT (all-MiniLM-L6-v2) embedding generator for semantic capture.'] },
    { num:'05', title:'5. Data Storage & Architecture', color:'rose', summary:'CSV versioning & modular design', bullets:['Stored scraped data as CSV (data/imdb_movies_2024.csv and data/imdb_top_1000_CLEAN.csv).', 'Modular PEP-8 codebase: preprocess.py, recommender.py, app.py, test_recommender.py.', 'Avoided monolithic notebooks — structured as a maintainable Python package.'] },
    { num:'06', title:'6. Recommendation Algorithm & Key Findings', color:'rose', summary:'KNN Cosine & Hybrid Scoring', bullets:['NearestNeighbors(metric="cosine", algorithm="brute") fits sparse TF-IDF matrix in sub-100ms.', 'Hybrid Ranking Score: Score = 0.7 × (1 - Cosine_Distance) + 0.3 × (Rating / 5.0).', 'LIME-style Explainability: _get_matching_keywords() extracts top overlapping TF-IDF terms for user transparency.'] },
    { num:'07', title:'7. Business Solution & Streamlit App', color:'amber', summary:'Deployment & production caching', bullets:['Streamlit Web App (src/app.py): Dual search modes (by Title or by Custom Plot Description).', '@st.cache_resource: One-time model load ensures sub-100ms response time for live users.', 'Business Impact: Eliminates cold-start problem — new movies with plot text can be recommended immediately without user interaction logs.'] }
  ];

  const cryptoSlides = [
    { num:'01', title:'1. Domain Introduction', color:'amber', summary:'Financial Analytics / Crypto in 3 lines', bullets:['"Cryptocurrency markets operate 24/7 with extreme volatility driven by non-linear temporal dynamics and market sentiment."', '"Accurate short-term price forecasting is critical for algorithmic trading, risk management, and quantitative asset allocation."', '"Deep learning models excel at capturing complex non-linear sequence dependencies where traditional linear econometric models fail."'] },
    { num:'02', title:'2. Problem Statement', color:'amber', summary:'Problem statement in 1 line', bullets:['"Predict multi-horizon Bitcoin log returns (1-day, 3-day, 7-day ahead) using past 60-day sequences across 5 deep learning architectures."'] },
    { num:'03', title:'3. Data Preprocessing & Leakage Prevention', color:'cyan', summary:'Handling missing values & scaling', bullets:['Dataset: ~5,000 daily BTC records (Aug 2010 – Mar 2024) from Yahoo Finance.', 'Target Variable: Log Return r = ln(P[t+h] / P[t]) — stationary and scale-invariant (prevents false trend R²).', 'Scaling: MinMaxScaler fit ONLY on training set (first 80%) — zero data leakage into test set (last 20%).', 'No Shuffling: 80/20 chronological split — shuffling time series is catastrophic data leakage.'] },
    { num:'04', title:'4. Exploratory Data Analysis (EDA)', color:'cyan', summary:'Key univariate & multivariate findings', bullets:['Price distribution is heavily right-skewed; daily log returns exhibit heavy tails (fat-tailed distribution).', 'Volatility Clustering: High volatility days cluster together (GARCH-like behavior in crypto).', 'Autocorrelation (ACF/PACF): Daily price levels show high autocorrelation, but daily returns behave like a fractal random walk (Hurst exponent H ≈ 0.53).'] },
    { num:'05', title:'5. Feature Engineering (Ablation Study)', color:'violet', summary:'V1 Technical Indicators vs V2 Protocol Features', bullets:['Version 1 (Reactive): [OHLCV, Change%, SMA_7, SMA_30, RSI_14, Vol_30].', 'Version 2 (Whitepaper Features): [OHLCV, Change%, Block_Reward, Days_Since_Halving, Halving_Progress].', 'Result: Replacing lagging indicators with Nakamoto whitepaper protocol features reduced prediction error (MAPE) across all horizons.'] },
    { num:'06', title:'6. Statistical Significance & Stationarity', color:'violet', summary:'Stationarity testing & justification', bullets:['Augmented Dickey-Fuller (ADF) Test: Proved raw BTC price is non-stationary (p > 0.05).', 'Log Return Transformation: ADF test on log return rejected null hypothesis (p < 0.001) → stationary sequence.', 'Why stationary target? Non-stationary targets lead to spurious regressions and unstable gradient updates.'] },
    { num:'07', title:'7. Data Scale & Imbalance', color:'rose', summary:'Normalizing multi-variate features', bullets:['Feature dimensions span different scales (Volume in billions, Block_Reward in units 50 to 3.125).', 'MinMaxScaler maps all 9 feature columns to [0, 1] range per window.', 'Single multi-output Dense head outputs 3 predictions (1D, 3D, 7D) simultaneously.'] },
    { num:'08', title:'8. Base Model & Naive Baseline', color:'rose', summary:'Beating the Random Walk', bullets:['Naive Baseline: Predict tomorrow\'s price = today\'s price (r_pred = 0).', 'Baseline Benchmark: Any deep learning model MUST achieve lower MAPE than the naive random walk baseline.', '1D-CNN baseline trained first for rapid benchmark iterations.'] },
    { num:'09', title:'9. Model Architectures & Hyperparameters', color:'cyan', summary:'5 Architectures compared in PyTorch', bullets:['1D-CNN: Fast local temporal pattern detection (kernel_size=3).', 'RNN: Standard sequential baseline.', 'LSTM: Gated memory cell (Forget, Input, Output gates) handles long-term sequence dependencies.', 'Transformer: Multi-head self-attention captures global temporal context.', 'PatchTST: SOTA patch-based Transformer with Reversible Instance Normalization (RevIN) (patch_len=16, stride=8).'] },
    { num:'10', title:'10. Model Evaluation Metrics', color:'cyan', summary:'MAE, RMSE, MAPE & R² Paradox', bullets:['MAE (USD): Absolute dollar error ($730.98 for 1D LSTM).', 'RMSE (USD): Penalizes large unexpected price swings ($1,136.38 for 1D LSTM).', 'MAPE (%): Scale-independent percentage error — primary model selection metric.', 'R² Paradox: High R² (~0.99) on price levels is a path-dependent artifact. Return-level R² is 1%–3% (explaining 2% of return variance is a major success in quant finance).'] },
    { num:'11', title:'11. Final Model Selection per Horizon', color:'amber', summary:'Empirical leaderboard winners', bullets:['1-Day Horizon: LSTM wins (MAE = $730.98, MAPE = 2.06%, R² = 0.9921).', '3-Day Horizon: PatchTST wins (MAE = $1,347.56, MAPE = 3.85%, R² = 0.9768).', '7-Day Horizon: PatchTST wins (MAE = $2,097.01, MAPE = 5.93%, R² = 0.9446).'] },
    { num:'12', title:'12. Conclusion & Core Limitations', color:'amber', summary:'3 Bottlenecks to defend in Viva', bullets:['Data Starvation: BTC has only completed 4 halving cycles in history — limited regime transitions.', '2140 Protocol Boundary: Block_Reward drops to 0 post-2140, turning cyclical features static.', 'Walk-Forward Validation (WFV): Backtested rolling windows prove real out-of-sample stability.'] },
    { num:'13', title:'13. Business Suggestions & Deployment', color:'rose', summary:'Streamlit 10-page suite & Groq AI', bullets:['Deployed 10-page Streamlit dashboard (app.py) with Backtesting, Live Inference & Portfolio Simulator.', 'Groq LLM Integration (src/llm_insights.py): Generates automated AI market insights on forecast trends.', 'Trading Signal Integration: Connect 1D/3D/7D predictions to automated risk management dashboards.'] }
  ];

  const edaQuestions = [
    { n:'01', q:'What are the basic characteristics of my dataset?', desc:'Determine data type, number of observations (~5,000 daily records for BTC, 5,000 for IMDB), and variable count.' },
    { n:'02', q:'What is the overall structure of my dataset?', desc:'Check categorical vs continuous distributions (e.g. IMDb ratings skewed right between 7.0–8.5).' },
    { n:'03', q:'What patterns exist in the data?', desc:'Identify trends, volatility clustering in crypto returns, or storyline bigrams in movie genres.' },
    { n:'04', q:'Are there any outliers present?', desc:'Detect extreme price spikes (e.g. 2021 BTC ATH) or abnormal text lengths.' },
    { n:'05', q:'What are the missing values in the dataset?', desc:'Audit nulls (~3% missing storyline descriptions filled with empty strings).' },
    { n:'06', q:'What is the correctness of the data?', desc:'Verify source authenticity (yfinance API, IMDb official advanced search) and deduplicate.' },
    { n:'07', q:'Is there any correlation between variables?', desc:'Examine correlations between technical indicators or TF-IDF feature co-occurrences.' },
    { n:'08', q:'How does this data compare to past performance?', desc:'Compare current price volatility or recommendation accuracy against naive baselines.' },
    { n:'09', q:'Is there any seasonality present?', desc:'Identify Bitcoin 4-year halving cycles and monthly volume seasonality.' },
    { n:'10', q:'How much variability exists within each variable?', desc:'Measure variance / standard deviation across features to guide MinMaxScaler scaling.' },
    { n:'11', q:'Are there discrepancies between observed & expected values?', desc:'Investigate data mismatches or scraping artifacts before feeding into vectorizers.' },
    { n:'12', q:'What are potential explanations for unexpected results?', desc:'Analyze why simple models beat complex ones on short horizons (e.g. LSTM vs PatchTST at 1D).' },
    { n:'13', q:'How do different subsets behave differently?', desc:'Compare bull vs bear market partitions, or classics vs 2024 scraped movies.' },
    { n:'14', q:'Do I need to transform any variables before analysis?', desc:'Apply Log Return r = ln(P[t+h]/P[t]) for stationarity, and TF-IDF for text.' },
    { n:'15', q:'Are there gaps in our understanding that need filling?', desc:'Document structural limitations (e.g. 4 halving cycles total data starvation).' }
  ];

  el.innerHTML = `
    <div class="section-header">
      <h2>📊 Presentation Kit & Evaluation Suite</h2>
      <p>Aligned 100% with GUVI HCL Capstone Guidelines, Live Evaluation Timings & Scoring Rubric.</p>
    </div>

    <!-- Presentation Tabs -->
    <div class="viva-filters" style="margin-bottom:1.5rem">
      <button class="filter-btn active" onclick="switchPresentTab('imdb', this)">🎬 IMDB Deck (7-Step)</button>
      <button class="filter-btn" onclick="switchPresentTab('crypto', this)">📈 CryptoCast Deck (13-Step)</button>
      <button class="filter-btn" onclick="switchPresentTab('eval', this)">⏱️ 30-Min Evaluation Rubric</button>
      <button class="filter-btn" onclick="switchPresentTab('eda', this)">🔍 15-Question EDA Audit</button>
    </div>

    <!-- TAB 1: IMDB DECK -->
    <div id="ptab-imdb" class="present-tab-content active">
      <div style="padding:1rem;background:rgba(0,255,200,0.04);border:1px solid rgba(0,255,200,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.8rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">📜 GUVI Text-Extraction & Recommendation Project Format</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Follows the mandatory 7-step presentation structure from page 1 of the GUVI Capstone Guideline PDF.</div>
      </div>
      <div class="slides-grid">
        ${imdbSlides.map(s => `
          <div class="slide-card glass-card" onclick="toggleSlide(this,'imdb-${s.num}')">
            <div class="slide-num" style="color:var(--${s.color})">SLIDE ${s.num}</div>
            <h4>${s.title}</h4>
            <p>${s.summary}</p>
            <div class="slide-expand" id="slide-imdb-${s.num}">
              <ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 2: CRYPTOCAST DECK -->
    <div id="ptab-crypto" class="present-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(245,158,11,0.04);border:1px solid rgba(245,158,11,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.8rem;color:var(--amber);font-weight:700;margin-bottom:0.3rem">📜 GUVI Model Building Project Format</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Follows the mandatory 13-step presentation structure from page 2 of the GUVI Capstone Guideline PDF.</div>
      </div>
      <div class="slides-grid">
        ${cryptoSlides.map(s => `
          <div class="slide-card glass-card" onclick="toggleSlide(this,'crypto-${s.num}')">
            <div class="slide-num" style="color:var(--${s.color})">SLIDE ${s.num}</div>
            <h4>${s.title}</h4>
            <p>${s.summary}</p>
            <div class="slide-expand" id="slide-crypto-${s.num}">
              <ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: EVALUATION SCHEDULE & RUBRIC -->
    <div id="ptab-eval" class="present-tab-content" style="display:none">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
        <div class="glass-card" style="padding:1.25rem">
          <h3 style="color:var(--cyan);font-size:1rem;margin-bottom:1rem">⏱️ Live Evaluation Schedule (30 Mins Total)</h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.85rem">
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>1. Self Introduction</span><strong style="color:var(--cyan)">3 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>2. Problem Statement & Walkthrough</span><strong style="color:var(--violet)">12 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>3. Mock Viva Questions (1–2 per tech)</span><strong style="color:var(--rose)">10 Mins</strong>
            </div>
            <div style="padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;justify-content:space-between">
              <span>4. Mentor Feedback</span><strong style="color:var(--amber)">5 Mins</strong>
            </div>
          </div>
        </div>
        <div class="glass-card" style="padding:1.25rem">
          <h3 style="color:var(--green);font-size:1rem;margin-bottom:1rem">🏆 Evaluation Scoring Rubric (60 Marks Total)</h3>
          <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.8rem">
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Code Quality / Data Transformations</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Documentation (Git ReadMe / Insights)</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Code Reusability (PEP-8 Modular Code)</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Presentation Quality</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.4rem">
              <span>Task Accomplishment</span><strong>10 Marks</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding-bottom:0.4rem">
              <span>5 Mock Questions Defense</span><strong>10 Marks</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="glass-card" style="padding:1.25rem">
        <h3 style="color:var(--amber);font-size:0.95rem;margin-bottom:0.75rem">📋 Mandatory Submission Checklist</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;font-size:0.82rem;color:var(--text-secondary)">
          <div>✅ Public GitHub Repo with clean commit history</div>
          <div>✅ Comprehensive README with architecture diagrams</div>
          <div>✅ PEP-8 compliant modular code structure (src/ folder)</div>
          <div>✅ Demo Video posted on LinkedIn (Mandatory)</div>
          <div>✅ Streamlit app live or runnable via simple command</div>
          <div>✅ Book slot on ZEN portal before weekend evaluation</div>
        </div>
      </div>
    </div>

    <!-- TAB 4: 15-QUESTION EDA AUDIT -->
    <div id="ptab-eda" class="present-tab-content" style="display:none">
      <div style="padding:1rem;background:rgba(56,189,248,0.04);border:1px solid rgba(56,189,248,0.15);border-radius:12px;margin-bottom:1.2rem">
        <div style="font-size:0.8rem;color:var(--cyan);font-weight:700;margin-bottom:0.3rem">🔍 15 Core EDA Questions (GUVI EDA Guide Reference)</div>
        <div style="font-size:0.82rem;color:var(--text-secondary)">Use these 15 questions to structure your data analysis narrative during the live evaluation.</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:0.75rem">
        ${edaQuestions.map(q => `
          <div class="glass-card" style="padding:0.9rem">
            <div style="font-size:0.7rem;color:var(--cyan);font-weight:700">QUESTION ${q.n}</div>
            <div style="font-size:0.85rem;font-weight:700;margin:0.2rem 0;color:var(--text-primary)">${q.q}</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.4">${q.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  window.switchPresentTab = function (tab, btn) {
    document.querySelectorAll('.present-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.viva-filters .filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('ptab-' + tab).style.display = 'block';
    btn.classList.add('active');
    addXP(5);
  };

  window.toggleSlide = function (card, num) {
    const ex = document.getElementById('slide-' + num);
    if (ex) ex.classList.toggle('open');
    addXP(5);
  };
}


/* ─── Init ─── */
initXP();
navigateTo('home');
