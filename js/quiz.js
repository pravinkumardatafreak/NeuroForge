/* ═══════════════════════════════════════════════════
   quiz.js — 60+ Viva Q&A Bank + Active Recall Engine
   Core Motto: "Know it cold enough to defend it live"
═══════════════════════════════════════════════════ */

window.VIVA_BANK = [
  // ── NLP ──
  {
    id:'n1', topic:'NLP', difficulty:'easy', seen:false,
    q: 'What is TF-IDF and why do we use it over raw word counts?',
    a: `TF-IDF = Term Frequency × Inverse Document Frequency.
<br><br>• <strong>TF</strong>: How often a word appears in THIS document.
<br>• <strong>IDF</strong>: Penalizes words that appear in MANY documents (like "the", "is" → near zero weight).
<br><br>Why not raw counts? A word appearing 10 times in every movie description adds no discriminative signal. TF-IDF filters out noise and amplifies unique words like "zombies" or "wormhole" that actually describe the plot.
<br><br>Formula: <code>TF-IDF(t,d) = TF(t,d) × log(N / df(t))</code>`
  },
  {
    id:'n2', topic:'NLP', difficulty:'medium',
    q: 'What is cosine similarity? How is it different from Euclidean distance?',
    a: `Cosine similarity measures the ANGLE between two vectors — not their magnitude.
<br><br><code>cos(θ) = (A · B) / (|A| × |B|)</code>
<br><br>Why cosine for text? A short tweet and a long article about the same topic will have similar angles but very different magnitudes. Cosine ignores length, focusing only on direction (topic). Euclidean distance would wrongly penalize the longer document.
<br><br>Range: -1 (opposite) to 1 (identical). In text, always 0 to 1 (no negative frequencies).`
  },
  {
    id:'n3', topic:'NLP', difficulty:'hard',
    q: 'What are n-grams? Why did we use ngram_range=(1,2) in the IMDB project?',
    a: `N-grams are contiguous sequences of N tokens. Unigrams (n=1) = single words. Bigrams (n=2) = two-word phrases.
<br><br>Example: "not good" → unigrams: ["not","good"], bigram: ["not good"]
<br><br>Using (1,2): We capture both individual words AND 2-word phrases. This is crucial because "not good" and "very good" have opposite meanings, but unigrams alone can't capture that. For storyline matching, phrases like "space travel" or "serial killer" carry more semantic meaning as bigrams.
<br><br>Trade-off: More n-grams → larger vocabulary → higher memory. That's why we cap at max_features=5000.`
  },
  {
    id:'n4', topic:'NLP', difficulty:'easy',
    q: 'What are stopwords and why do we remove them?',
    a: `Stopwords are extremely common words (the, is, at, which, on) that carry no meaningful content for similarity comparison.
<br><br>Removing them: reduces dimensionality, removes noise, and allows TF-IDF to focus on semantically rich words.
<br><br>NLTK's English stopword list has ~179 words. In our IMDB pipeline: <code>filtered = [w for w in words if w not in STOPWORDS]</code>
<br><br>⚠️ <strong>Interview Gotcha</strong>: Sometimes you should NOT remove stopwords — e.g., in sentiment analysis, "not" is a stopword but "not good" is critical meaning. Always know your task before blindly removing stopwords.`
  },
  {
    id:'n5', topic:'NLP', difficulty:'medium',
    q: 'What is the difference between stemming and lemmatization?',
    a: `Both reduce words to their base form, but differently:
<br><br><strong>Stemming</strong> (Porter/Snowball): Chops suffixes crudely. "running" → "run", "studies" → "studi" (may not be a real word). Fast but imprecise.
<br><br><strong>Lemmatization</strong> (WordNet): Returns the actual dictionary base form using grammar context. "studies" → "study", "ran" → "run". Slower but linguistically correct.
<br><br>In our IMDB project we used neither (just lowercasing + stopwords) — sufficient for TF-IDF + KNN because we're matching plot-level similarity, not doing deep NLP.`
  },

  // ── Classical ML ──
  {
    id:'c1', topic:'Classical ML', difficulty:'easy',
    q: 'What is K-Nearest Neighbors (KNN)? Is it supervised or unsupervised here?',
    a: `KNN finds the K training points closest to a query point.
<br><br>In our IMDB project, it's <strong>unsupervised</strong> (NearestNeighbors, not KNeighborsClassifier) — we're not predicting a label, we're finding similar items.
<br><br>Algorithm: (1) Transform query text with TF-IDF. (2) Find K vectors with smallest cosine distance. (3) Return those movies.
<br><br>Why KNN over storing a full similarity matrix? An N×N matrix for 5000 movies = 25M entries in RAM. KNN with brute-force + scipy sparse is memory-efficient and runs sub-100ms.`
  },
  {
    id:'c2', topic:'Classical ML', difficulty:'medium',
    q: 'Explain the hybrid scoring formula used in the IMDB project.',
    a: `Formula: <code>Score = α × (1 − cosine_dist) + β × (rating / 5)</code>
<br><br>With α=0.7, β=0.3:
<br>• 70% weight on storyline similarity (cosine similarity)
<br>• 30% weight on user rating popularity
<br><br>Why hybrid? Pure text similarity might surface an obscure but very similar movie with a 4.0 rating over a beloved 9.0 classic with slightly lower similarity. The hybrid balances relevance with quality.
<br><br>Why (rating / 5)? Normalize ratings to [0,1] so they're comparable to cosine similarity which is already in [0,1].`
  },
  {
    id:'c3', topic:'Classical ML', difficulty:'hard',
    q: 'What is the curse of dimensionality and how does it affect KNN?',
    a: `As dimensions increase, ALL points become equidistant from each other. The contrast between "near" and "far" collapses.
<br><br>In text: our TF-IDF matrix might have 5000 dimensions. KNN distances become noisy and less meaningful.
<br><br>Mitigations: (1) Dimensionality reduction (PCA, SVD/LSA). (2) Better metrics (cosine handles high-dim text better than Euclidean). (3) Sparse representations (TF-IDF is naturally sparse — most movies don't use most words).
<br><br>In our project, cosine similarity is robust in high dimensions because it normalizes for magnitude — partly why it's the standard for text retrieval.`
  },
  {
    id:'c4', topic:'Classical ML', difficulty:'medium',
    q: 'What is Latent Semantic Analysis (LSA) and when would you use it instead of TF-IDF?',
    a: `LSA applies SVD (Singular Value Decomposition) to the TF-IDF matrix to find latent topics.
<br><br>TF-IDF treats "car" and "automobile" as completely different words. LSA captures that they appear in similar contexts → similar topic vectors.
<br><br>When to use LSA: Synonymy is a problem (different words, same meaning). Polysemy is a problem (same word, different meanings). Large, noisy text corpora.
<br><br>Trade-off: LSA loses interpretability. TF-IDF vectors are explainable — you can point to specific words. LSA components are abstract.`
  },
  {
    id:'c5', topic:'Classical ML', difficulty:'easy',
    q: 'What is overfitting and how would you detect it in a recommendation system?',
    a: `Overfitting = the model memorizes training data instead of learning generalizable patterns.
<br><br>In a recommendation system, overfitting manifests as: Always recommending the same popular items (popularity bias). Recommending only items from the training distribution. Zero coverage of long-tail items.
<br><br>Detection: Split data into train/test. Use metrics like Precision@K, Recall@K, NDCG. If training metrics are great but test metrics are poor → overfit.
<br><br>In our KNN model: No hyperparameters to overfit on. Risk is more about the quality of the TF-IDF representation.`
  },

  // ── RNN / LSTM ──
  {
    id:'r1', topic:'RNN/LSTM', difficulty:'easy',
    q: 'What is the vanishing gradient problem in RNNs?',
    a: `During BPTT (Backpropagation Through Time), gradients are multiplied by the weight matrix repeatedly. If weights < 1, gradients shrink exponentially → early time steps get near-zero gradient updates → the model can't learn long-range dependencies.
<br><br>Example: "The movie, which I watched last week, was ___". A vanilla RNN forgets "movie" by the time it predicts "was".
<br><br>Solutions: LSTMs (gated memory), GRUs, gradient clipping, ResNets with skip connections.`
  },
  {
    id:'r2', topic:'RNN/LSTM', difficulty:'medium',
    q: 'Explain the 4 gates of an LSTM. What does each one do?',
    a: `LSTM has 3 gates + 1 cell state update:
<br><br><strong>1. Forget Gate</strong> (σ): "What should I erase from memory?" → multiplies cell state by 0–1.
<br><strong>2. Input Gate</strong> (σ): "What new information is worth storing?"
<br><strong>3. Cell State Update</strong> (tanh): Creates candidate values to add to memory.
<br><strong>4. Output Gate</strong> (σ): "What should I output from current memory?"
<br><br>Key insight: The cell state (long-term memory) flows through with only element-wise operations → gradients flow more freely → solves vanishing gradient problem.
<br><br>GRU simplification: Merges forget+input into one "update gate" → fewer parameters, similar performance.`
  },
  {
    id:'r3', topic:'RNN/LSTM', difficulty:'hard',
    q: 'For crypto price forecasting, how would you frame it as a supervised learning problem for LSTM?',
    a: `Frame it as a <strong>sliding window</strong> problem:
<br><br>• Choose window size W (e.g., 60 days of prices)
<br>• X = prices[t : t+W], Y = price[t+W+1]
<br>• Create many (X, Y) pairs by sliding the window
<br><br>Preprocessing: Normalize with MinMaxScaler to [0,1] (LSTMs are sensitive to scale). Reshape X to (samples, timesteps, features).
<br><br>Architecture: LSTM(50) → Dropout(0.2) → LSTM(50) → Dense(1)
<br><br>⚠️ <strong>Critical trap</strong>: Never shuffle time-series data! Train/test split must be chronological (first 80% train, last 20% test). Shuffling = data leakage from the future.`
  },
  {
    id:'r4', topic:'RNN/LSTM', difficulty:'medium',
    q: 'What metrics would you use to evaluate a crypto price forecasting model? Why not accuracy?',
    a: `This is a regression problem, not classification → Accuracy is meaningless.
<br><br>Use:<br>• <strong>MAE</strong> (Mean Absolute Error): Average prediction error in actual price units. Interpretable.
<br>• <strong>RMSE</strong> (Root Mean Squared Error): Penalizes large errors more. Better when big errors are costly.
<br>• <strong>MAPE</strong> (Mean Absolute Percentage Error): Scale-independent. Good for comparing across assets.
<br>• <strong>Directional Accuracy</strong>: Did we predict the direction (up/down) correctly? More useful for trading.
<br><br>Industry truth: Even a high-R² model may be useless for trading if it just predicts "today's price ≈ yesterday's price" (random walk baseline).`
  },

  // ── Transformers ──
  {
    id:'t1', topic:'Transformers', difficulty:'medium',
    q: 'Explain self-attention in simple terms. What problem does it solve that RNNs couldn\'t?',
    a: `Self-attention: every token in a sequence looks at EVERY other token and decides how much to attend to it.
<br><br>RNN problem: sequential processing → can't parallelize, long-range dependencies suffer from vanishing gradients.
<br><br>Attention solution: "The bank by the river" → "bank" needs to attend more to "river" than to "the". Attention weights capture these relationships directly, regardless of distance.
<br><br>In practice: Q (Query) = what am I looking for? K (Key) = what can I offer? V (Value) = what information to pass.
<br><br>Score = softmax(QKᵀ / √d_k) × V. Division by √d_k prevents gradient vanishing in high dimensions.`
  },
  {
    id:'t2', topic:'Transformers', difficulty:'hard',
    q: 'What is positional encoding and why does the Transformer need it but RNNs don\'t?',
    a: `RNNs process tokens sequentially → position is implicit in order.
<br><br>Transformers process all tokens in parallel → they're position-agnostic by design. "Cat sat on mat" and "Mat on sat cat" would look identical without position info!
<br><br>Solution: Add sinusoidal encoding to each token's embedding:
<br><code>PE(pos,2i) = sin(pos / 10000^(2i/d))</code>
<br><code>PE(pos,2i+1) = cos(pos / 10000^(2i/d))</code>
<br><br>Why sinusoidal? (1) Generalizes to longer sequences than seen in training. (2) Relative positions are easy to learn (linear relationships between sin/cos).
<br><br>Modern models (BERT) use learned positional embeddings instead.`
  },
  {
    id:'t3', topic:'Transformers', difficulty:'medium',
    q: 'BERT vs GPT — what is the architectural difference and when do you use each?',
    a: `<strong>BERT</strong> (Bidirectional Encoder):
<br>• Reads text left-to-right AND right-to-left simultaneously.
<br>• Pretrained with Masked Language Model (MLM): predict missing words.
<br>• Best for: Classification, NER, sentiment, Q&A — tasks that need full context.
<br><br><strong>GPT</strong> (Generative Pre-trained Transformer - Decoder only):
<br>• Reads left-to-right only (causal masking).
<br>• Pretrained to predict the NEXT token.
<br>• Best for: Text generation, completion, summarization.
<br><br>Rule of thumb: BERT for understanding, GPT for generation.`
  },
  {
    id:'t4', topic:'Transformers', difficulty:'hard',
    q: 'What is multi-head attention and why use multiple heads?',
    a: `Multi-head attention runs self-attention multiple times in parallel with different learned weight matrices.
<br><br>Each head can specialize: Head 1 might learn syntactic relationships (subject-verb). Head 2 might learn coreference ("it" → "the company"). Head 3 might learn semantic roles.
<br><br>Formula: <code>MultiHead(Q,K,V) = Concat(head₁,...,headₙ) × Wᴼ</code>
<br>where <code>headᵢ = Attention(Q×Wᵢᴼ, K×Wᵢᴷ, V×Wᵢᵛ)</code>
<br><br>BERT-base uses 12 heads. Each head operates in d_model/n_heads dimensions → same total computation as single-head.`
  },

  // ── CNN ──
  {
    id:'v1', topic:'CNN', difficulty:'easy',
    q: 'What is a convolution operation in a CNN?',
    a: `A small matrix (kernel/filter) slides over the input image, computing element-wise multiplications and summing them → produces a feature map.
<br><br>A 3×3 kernel on a 28×28 image → the kernel detects ONE pattern (e.g., vertical edges) across the entire image. 64 kernels → 64 feature maps, each detecting a different pattern.
<br><br>Key insight: <strong>weight sharing</strong>. The same 9 weights detect vertical edges anywhere in the image → translation invariance + massive parameter reduction vs fully-connected.
<br><br>Output size: (W - F + 2P) / S + 1 where W=input width, F=filter size, P=padding, S=stride.`
  },
  {
    id:'v2', topic:'CNN', difficulty:'medium',
    q: 'What is the receptive field and why does it matter?',
    a: `Receptive field = the region of the input image that affects a particular neuron.
<br><br>After 1 conv layer (3×3 kernel): each neuron sees a 3×3 region.
<br>After 2 conv layers: each neuron sees 5×5.
<br>After 3 conv layers: 7×7.
<br><br>Deeper networks → larger effective receptive field → neurons capture higher-level concepts (eyes → faces → people).
<br><br>Why not use one large kernel? (1) More parameters. (2) Less non-linearity. Two 3×3 layers have the same receptive field as one 5×5 but with fewer parameters and an extra ReLU in between.`
  },
  {
    id:'v3', topic:'CNN', difficulty:'medium',
    q: 'What is pooling and why do we use it?',
    a: `Pooling reduces spatial dimensions by summarizing regions:
<br>• <strong>Max Pooling</strong>: Takes the max value in each region. "Did this feature appear here?"
<br>• <strong>Average Pooling</strong>: Averages values. "How strongly was this feature present?"
<br><br>Benefits: (1) Reduces computation. (2) Creates spatial invariance (small shifts don't change output). (3) Prevents overfitting by reducing parameters.
<br><br>Modern trend: Many architectures (e.g., ResNets) use strided convolutions instead of pooling — learns what to keep rather than applying a fixed rule.`
  },
  {
    id:'v4', topic:'CNN', difficulty:'hard',
    q: 'What is batch normalization and why does it help training?',
    a: `BatchNorm normalizes each layer's activations to have mean=0, std=1 (within each mini-batch), then applies learned scale (γ) and shift (β).
<br><br>Benefits: (1) <strong>Reduces internal covariate shift</strong> — layers don't need to adapt to constantly shifting input distributions. (2) Enables higher learning rates. (3) Acts as regularization (reduces need for dropout). (4) Smoother loss landscape → more stable training.
<br><br>⚠️ Gotcha: BatchNorm behaves differently in training vs inference. During inference, use running mean/std from training, NOT mini-batch statistics. This is why model.eval() matters in PyTorch.`
  },
  {
    id:'v5', topic:'CNN', difficulty:'hard',
    q: 'How does transfer learning work with CNNs? When would you freeze vs fine-tune layers?',
    a: `Pre-trained CNNs (ResNet, VGG, EfficientNet) on ImageNet have learned feature hierarchies: edges → textures → parts → objects.
<br><br>Transfer learning strategy:
<br>• <strong>Freeze early layers</strong>: Generic features (edges, textures) apply to any image task.
<br>• <strong>Fine-tune later layers</strong>: Task-specific features adapt to your domain.
<br>• <strong>Replace final layer</strong>: Always — your classes are different from ImageNet's 1000.
<br><br>When to freeze vs fine-tune? If your dataset is small → freeze more. If your dataset is large and domain-different from ImageNet → fine-tune all.
<br><br>Rule: "Freeze early, fine-tune late, replace last."`
  },

  // ── General / System Design ──
  {
    id:'g1', topic:'General', difficulty:'medium',
    q: 'How would you handle cold start in a recommendation system?',
    a: `Cold start = new user/item with no history.
<br><br>Strategies:
<br>• <strong>Content-based</strong> (our IMDB approach): No history needed — uses item attributes (storylines). Works immediately.
<br>• <strong>Popularity-based fallback</strong>: Recommend trending/top-rated items to new users.
<br>• <strong>Onboarding quiz</strong>: Ask users for 3–5 preferences to bootstrap a profile.
<br>• <strong>Hybrid</strong>: Content-based until enough interactions → switch to collaborative filtering.
<br><br>Our IMDB system specifically avoids cold start because it's purely content-based — any new movie with a description can immediately receive recommendations.`
  },
  {
    id:'g2', topic:'General', difficulty:'hard',
    q: 'What is data leakage and give an example from a time-series project?',
    a: `Data leakage = information from outside the training distribution contaminates the model, causing artificially good metrics that fail in production.
<br><br>Time-series example (Crypto):
<br>• Wrong: shuffle data, then split 80/20 → test set includes past data, model sees "future" in training.
<br>• Correct: chronological split — train on first 80%, test on last 20%.
<br><br>Normalization leakage: fitting MinMaxScaler on ALL data (including test) before splitting → test set's min/max bleeds into training normalization.
<br>Fix: fit scaler ONLY on training data, transform test using training statistics.
<br><br>Leakage detection: suspiciously high metrics (>95% on stock prediction → almost certainly leakage).`
  },
  {
    id:'g3', topic:'General', difficulty:'medium',
    q: 'Explain precision, recall, and F1-score. Which do you optimize for fraud detection?',
    a: `• <strong>Precision</strong> = TP / (TP + FP) — "Of all positive predictions, how many were correct?"
<br>• <strong>Recall</strong> = TP / (TP + FN) — "Of all actual positives, how many did we find?"
<br>• <strong>F1</strong> = 2 × (P × R) / (P + R) — Harmonic mean, balance of both.
<br><br>For fraud detection: optimize <strong>Recall</strong>. A missed fraud (FN) is catastrophically expensive. A false alarm (FP) is a minor inconvenience. You'd rather flag 100 legitimate transactions than miss 1 fraud.
<br><br>For spam detection: Recall matters but Precision too — flagging real emails as spam is very bad (FP).
<br><br>Always ask: "What's the cost of FP vs FN in this domain?"`
  },
  {
    id:'g4', topic:'General', difficulty:'easy',
    q: 'What is the difference between parameters and hyperparameters?',
    a: `<strong>Parameters</strong>: Learned FROM data during training. E.g., neural network weights, TF-IDF vocabulary.
<br><br><strong>Hyperparameters</strong>: Set BY you BEFORE training. E.g., learning rate, number of LSTM units, K in KNN, max_features in TF-IDF, alpha/beta in our hybrid scorer.
<br><br>Hyperparameter tuning methods:
<br>• Grid Search: Exhaustive, slow
<br>• Random Search: Randomly samples, faster
<br>• Bayesian Optimization: Learns which regions are promising<br>
<br>In our IMDB project: K=10 (number of recommendations) and α=0.7, β=0.3 are hyperparameters chosen by domain knowledge/GUVI handbook.`
  },
  {
    id:'g5', topic:'General', difficulty:'hard',
    q: 'What is the bias-variance tradeoff?',
    a: `Total Error = Bias² + Variance + Irreducible Noise
<br><br><strong>High Bias</strong> (underfitting): Model is too simple, makes strong wrong assumptions. E.g., linear model on non-linear data. High training AND test error.
<br><br><strong>High Variance</strong> (overfitting): Model is too complex, memorizes training noise. Low training error, high test error.
<br><br>Sweet spot: Find model complexity where bias and variance are balanced.
<br><br>Practical controls:
<br>• Increase variance (reduce bias): more layers, more features, less regularization
<br>• Decrease variance (reduce overfitting): dropout, L1/L2 reg, less data features, early stopping`
  },

  // ── Capstone Project Specific Viva ──
  {
    id:'cc1', topic:'RNN/LSTM', difficulty:'hard',
    q: 'In CryptoCast, why predict Log Return (r = ln(P[t+h]/P[t])) instead of raw Close price? What is the R² Paradox?',
    a: `Raw BTC price is non-stationary — it has an upward/downward trend. Predicting raw price yields a misleading R² ≈ 0.99 because yesterday's price is highly predictive of today's price level (path dependence). This is the <strong>R² Paradox</strong>.
<br><br>Log return <code>r = ln(P[t+h] / P[t])</code> removes the trend, making the sequence stationary (proven via Augmented Dickey-Fuller test, p < 0.001).
<br><br>Return-level R² is 1%–3%. In quantitative finance, explaining 2% of daily return variance is considered a major success because daily returns behave like a fractal random walk (Hurst exponent H ≈ 0.53).`
  },
  {
    id:'cc2', topic:'Transformers', difficulty:'hard',
    q: 'Explain PatchTST and why it outperformed LSTM on 3-day and 7-day forecasting horizons.',
    a: `PatchTST (Patch Time Series Transformer) is a SOTA 2023 architecture with two key innovations:
<br><br>1. <strong>Patching</strong>: Groups consecutive time steps into patches (patch_len=16, stride=8), treating each patch like a token in NLP. This reduces sequence length and captures local semantic patterns while preserving global temporal attention.
<br>2. <strong>Reversible Instance Normalization (RevIN)</strong>: Removes instance-level non-stationarity per input window and restores it at prediction output.
<br><br>Why it beats LSTM at 3D and 7D: LSTM's sequential gating loses long-range context over multi-day horizons. PatchTST's self-attention across patches processes long-term temporal dependencies in parallel without degradation.
<br><br>Results: PatchTST achieved lowest MAPE on 3D (3.85%) and 7D (5.93%), while LSTM won at 1D (2.06%).`
  },
  {
    id:'cc3', topic:'General', difficulty:'medium',
    q: 'Explain your Feature Ablation Study in CryptoCast (V1 Technical Indicators vs V2 Whitepaper Features).',
    a: `We evaluated two feature sets across sequence architectures:
<br><br>• <strong>Version 1 (Technical Indicators)</strong>: [OHLCV, Change%, SMA_7, SMA_30, RSI_14, Vol_30] — reactive, lagging indicators.
<br>• <strong>Version 2 (Whitepaper Features)</strong>: [OHLCV, Change%, Block_Reward, Days_Since_Halving, Halving_Progress] — deterministic protocol features from Satoshi Nakamoto's whitepaper design.
<br><br>Finding: V2 whitepaper features reduced prediction error (MAPE) across ALL 3 horizons (1D LSTM dropped to 2.12%, 7D Transformer MAE dropped by $92).
<br><br>Why? Technical indicators only reflect past price noise. Whitepaper features anchor neural networks to Bitcoin's underlying 4-year halving supply cycles.`
  },
  {
    id:'cc4', topic:'General', difficulty:'hard',
    q: 'What are the 3 structural bottlenecks / limitations of Bitcoin price forecasting?',
    a: `During viva evaluation, be ready to defend these 3 structural limitations:
<br><br>1. <strong>Data Starvation Bottleneck</strong>: Deep learning models (especially Transformers) are data-hungry. In 15 years, BTC has only completed 4 halving cycles (~5,000 daily records total). The model has very few regime transitions to learn from.
<br>2. <strong>2140 Protocol Boundary</strong>: Around year 2140, total supply reaches 21M BTC and Block_Reward drops permanently to 0. Post-2140, supply-side cyclical features become static.
<br>3. <strong>Simulation Trap of Synthetic Data</strong>: While halving progress can be projected 1,000 years into the future with 100% mathematical certainty, human market psychology (fear, FOMO, regulations) cannot be synthetically generated.`
  },
  {
    id:'im1', topic:'NLP', difficulty:'medium',
    q: 'How does Sentence-BERT (all-MiniLM-L6-v2) improve over TF-IDF in your IMDB recommender?',
    a: `TF-IDF uses sparse lexical matching — "wizard" and "magician" are treated as completely independent dimensions.
<br><br>Sentence-BERT (SBERT) uses a 384-dimensional dense transformer embedding space trained on 1B+ sentence pairs. It encodes semantic meaning — "wizard school" and "magical academy" produce vectors with high cosine similarity even if they share zero exact words.
<br><br>Architecture in src/recommender.py: We implemented SBERT (all-MiniLM-L6-v2) as a SOTA dense embedding engine alongside TF-IDF, pre-computing embeddings to numpy arrays for sub-100ms KNN search.`
  },
  {
    id:'im2', topic:'NLP', difficulty:'medium',
    q: 'How does local explainability (_get_matching_keywords) work in your IMDB recommendation engine?',
    a: `To provide LIME-style transparency, <code>_get_matching_keywords()</code> extracts the exact terms that contribute most to the similarity score.
<br><br>Method: Takes the sparse TF-IDF query vector and computes the element-wise dot product (sparse multiply) with the candidate movie vector.
<br><br>The top non-zero overlapping column indices are mapped back to vocabulary feature names (e.g., ["superhero", "gotham", "vigilante"]), allowing the UI to display: "Recommended because of matching keywords: superhero, gotham".`
  }
];

// Render Viva Mode full page
window.renderVivaPage = function () {
  const el = document.getElementById('viva-content');
  const cats = ['All', 'NLP', 'Classical ML', 'RNN/LSTM', 'Transformers', 'CNN', 'General'];
  let activeFilter = 'All';
  let score = 0;

  function filteredQuestions() {
    return activeFilter === 'All'
      ? VIVA_BANK
      : VIVA_BANK.filter(q => q.topic === activeFilter);
  }

  function renderCards(qs) {
    return qs.map(q => `
      <div class="viva-card-full glass-card" id="vc-${q.id}">
        <div class="viva-card-q" onclick="toggleVivaAnswer('${q.id}')">
          <div style="flex:1">
            <div class="q-topic" style="color:${topicColor(q.topic)}">${q.topic}</div>
            <div class="q-text">${q.q}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.5rem;flex-shrink:0">
            <span class="difficulty-badge diff-${q.difficulty}">${q.difficulty}</span>
            <span style="font-size:0.7rem;color:var(--text-muted)">▼ reveal</span>
          </div>
        </div>
        <div class="viva-card-a" id="va-${q.id}">${q.a}</div>
      </div>
    `).join('');
  }

  el.innerHTML = `
    <div class="section-header">
      <h2>🎤 Viva Mode — Interview Ready</h2>
      <p>Click any question. Read the answer. Then explain it in your own words. That's the only way it sticks.</p>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">
      <div class="viva-filters" id="viva-filters">
        ${cats.map(c => `<button class="filter-btn ${c==='All'?'active':''}" onclick="setVivaFilter('${c}',this)">${c}</button>`).join('')}
      </div>
      <div class="viva-score" id="viva-score">Revealed: 0 / ${VIVA_BANK.length}</div>
    </div>
    <div class="viva-grid" id="viva-grid">${renderCards(VIVA_BANK)}</div>
  `;

  window.setVivaFilter = function (cat, btn) {
    activeFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('viva-grid').innerHTML = renderCards(filteredQuestions());
  };

  window.toggleVivaAnswer = function (id) {
    const ansEl = document.getElementById('va-' + id);
    const q = VIVA_BANK.find(x => x.id === id);
    ansEl.classList.toggle('show');
    if (ansEl.classList.contains('show') && !q.seen) {
      q.seen = true;
      score++;
      document.getElementById('viva-score').textContent = `Revealed: ${score} / ${VIVA_BANK.length}`;
      window.addXP(15);
    }
  };
};

function topicColor(topic) {
  const map = { 'NLP':'#00ffc8', 'Classical ML':'#38bdf8', 'RNN/LSTM':'#a78bfa', 'Transformers':'#f43f5e', 'CNN':'#f59e0b', 'General':'#84cc16' };
  return map[topic] || '#fff';
}
