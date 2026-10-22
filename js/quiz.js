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
,
  // ── Google Drive Super Learner & Interview Vault ──
  {
    id: 'gd_stat1', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'When do you use a Student\'s t-test versus a Normal distribution (Z-test)?',
    a: `Use a <strong>Student\'s t-test</strong> when:
<br><br>1. Sample size is small (<strong>n < 30</strong>), AND
<br>2. The true population standard deviation (σ) is <strong>unknown</strong> (estimated via sample standard deviation s).
<br><br>• <strong>Why t-distribution?</strong> Because s is an estimate of σ, there is extra sampling error. The t-distribution accounts for this with <strong>fatter tails</strong>, requiring a larger critical value to reject the null hypothesis.
<br>• <strong>Convergence:</strong> As sample size n increases (n ≥ 30 by the Central Limit Theorem), degrees of freedom (df = n - 1) increase, and the t-distribution converges directly to the standard normal Z-distribution.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat2', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'What is the difference between a Chi-Square (χ²) Goodness-of-Fit test and a Test of Independence?',
    a: `Both use the formula: <code>χ² = Σ [ (O - E)² / E ]</code> (where O = Observed, E = Expected frequency), but answer different questions:
<br><br>• <strong>Goodness-of-Fit</strong>: Tests a <strong>single categorical variable</strong> against a known or theoretical distribution. Example: <em>"Are user signups equally distributed across all 7 days of the week?"</em> Degrees of freedom: <code>df = k - 1</code>.
<br><br>• <strong>Test of Independence</strong>: Tests whether <strong>two categorical variables</strong> are related or independent in a contingency table. Example: <em>"Is customer churn rate independent of customer subscription tier (Basic, Pro, Enterprise)?"</em> Degrees of freedom: <code>df = (rows - 1) × (cols - 1)</code>.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat3', topic: 'Statistics & Probability', difficulty: 'hard', isGDrive: true,
    q: 'What is the Poisson distribution and when do you choose it over a Binomial distribution?',
    a: `The <strong>Poisson distribution</strong> models the probability of a given number of events occurring in a <strong>fixed interval of time or space</strong>:
<br><br><code>P(X = k) = (λ^k · e^(-λ)) / k!</code>
<br><br>• <strong>Key Property:</strong> <strong>Mean = Variance = λ</strong> (the average arrival rate).
<br>• <strong>When to choose Poisson over Binomial:</strong> Use Poisson when trials n is very large and success probability p is very small (n → ∞, p → 0, with np = λ constant).
<br>• <strong>Real-world examples:</strong> Server 500 error spikes per minute, website visitor arrivals per hour, machine failures per month, call center incoming queries.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat4', topic: 'Statistics & Probability', difficulty: 'easy', isGDrive: true,
    q: 'What is the exact definition of a p-value? What is the common interview trap?',
    a: `<strong>Exact Definition:</strong> A p-value is the probability of obtaining test results at least as extreme as the observed results, <strong>assuming that the null hypothesis (H₀) is strictly true</strong>: <code>P(Data ≥ Observed | H₀ is true)</code>.
<br><br>⚠️ <strong>Common Interview Gotchas / Misconceptions:</strong>
<br>1. <em>WRONG:</em> "The p-value is the probability that the null hypothesis is true." (Never say this!).
<br>2. <em>WRONG:</em> "1 - p is the probability that the alternative hypothesis is true."
<br><br>• <strong>Decision Rule:</strong> If p-value < α (usually 0.05), the observed data is too unlikely under H₀, so we <strong>reject H₀</strong>. Setting α = 0.05 means we accept a 5% chance of a False Positive (Type I Error).
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat5', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'Explain the difference between Point Estimation and Interval Estimation (Confidence Intervals).',
    a: `• <strong>Point Estimation:</strong> Provides a single numerical value as the best guess of an unknown population parameter (e.g., sample mean x̄ = 42.5 ms latency). Computed via Maximum Likelihood Estimation (MLE) or Method of Moments.
<br><br>• <strong>Interval Estimation (Confidence Interval):</strong> Provides a plausible range of values with an associated confidence level: <code>CI = x̄ ± (Critical_Value × Standard_Error)</code>.
<br><br>• <strong>Why Interval is Superior in Business:</strong> A point estimate conveys false certainty and hides volatility. Reporting: <em>"Our model inference takes 42ms"</em> is misleading if the 95% CI is [10ms, 250ms]. Confidence intervals communicate sample precision and risk bounds to engineering leadership.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_ab1', topic: 'Statistics & Probability', difficulty: 'hard', isGDrive: true,
    q: 'How do you design an A/B test? What is the Minimum Detectable Effect (MDE)?',
    a: `<strong>A/B Testing Framework:</strong>
<br><br>1. <strong>Hypothesis:</strong> H₀: Conversion(B) = Conversion(A); H₁: Conversion(B) > Conversion(A).
<br>2. <strong>Metrics:</strong> Primary metric (e.g., Checkout Conversion) + Guardrail metrics (e.g., Latency, Cancellation rate).
<br>3. <strong>Sample Size Determination:</strong> Based on:
<br>&nbsp;&nbsp;• Significance level (α = 0.05 → False Positive rate)
<br>&nbsp;&nbsp;• Statistical Power (1 - β = 0.80 → 80% chance of detecting a true effect)
<br>&nbsp;&nbsp;• Baseline conversion rate (p₀)
<br>&nbsp;&nbsp;• <strong>Minimum Detectable Effect (MDE):</strong> The smallest percentage uplift that is practically meaningful to the business (e.g., +2% checkout uplift).
<br><br>• <strong>Math Law:</strong> Sample size scales inversely with MDE squared: <code>N ∝ 1 / MDE²</code>. Detecting a tiny 0.5% effect requires 16× more users than detecting a 2.0% effect!
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_ab2', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'Distinguish Type I and Type II errors. Which is worse in Healthcare vs E-Commerce?',
    a: `• <strong>Type I Error (α / False Positive):</strong> Rejecting H₀ when H₀ is actually TRUE. "Crying wolf" — saying a drug works or fraud happened when it didn\'t.
<br><br>• <strong>Type II Error (β / False Negative):</strong> Failing to reject H₀ when H₀ is actually FALSE. Missing the reality — failing to diagnose cancer or missing fraudulent theft.
<br><br>• <strong>Healthcare / Pathology (HuBMAP):</strong> <strong>Type II is far worse</strong>. Missing malignant glomerulosclerosis or cancerous tissue can be fatal. We tune models for maximum <strong>Recall</strong>.
<br>• <strong>E-Commerce / Feature Launch (UberEats):</strong> <strong>Type I is often worse</strong>. Rolling out a buggy recommendation algorithm to 10M live users damages brand trust and infrastructure.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql1', topic: 'SQL & Data Engineering', difficulty: 'medium', isGDrive: true,
    q: 'What is the exact difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL Window Functions?',
    a: `All three are window functions evaluated over <code>OVER (PARTITION BY ... ORDER BY col DESC)</code>:
<br><br>Given scores: [100, 90, 90, 80]:
<br>• <code>ROW_NUMBER()</code>: Assigns strictly sequential unique integers: <strong>1, 2, 3, 4</strong> (arbitrary tie-break).
<br>• <code>RANK()</code>: Assigns same rank to ties, then <strong>SKIPS</strong> next rank count: <strong>1, 2, 2, 4</strong>.
<br>• <code>DENSE_RANK()</code>: Assigns same rank to ties, but <strong>DOES NOT SKIP</strong>: <strong>1, 2, 2, 3</strong>.
<br><br>• <strong>Superpower of Window Functions:</strong> They compute aggregate and ranking values across partitions <strong>WITHOUT collapsing rows</strong>, preserving full row-level detail.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql2', topic: 'SQL & Data Engineering', difficulty: 'easy', isGDrive: true,
    q: 'Explain the mechanics, row counts, and NULL behavior of all major SQL joins.',
    a: `• <strong>INNER JOIN:</strong> Returns only rows where the join predicate matches in BOTH tables. Unmatched rows in either table are discarded.
<br>• <strong>LEFT JOIN:</strong> Returns ALL rows from the left table. If no match in right table, right columns are filled with <code>NULL</code>.
<br>• <strong>RIGHT JOIN:</strong> Returns ALL rows from the right table, filling left columns with <code>NULL</code> where unmatched.
<br>• <strong>FULL OUTER JOIN:</strong> Returns all rows from both tables, filling with <code>NULL</code> on whichever side lacks a key match.
<br>• <strong>CROSS JOIN (Cartesian Product):</strong> Pairs every row of Table A (M rows) with every row of Table B (N rows), returning <code>M × N</code> rows. No join key needed.
<br><br>⚠️ <strong>Interview Gotcha:</strong> If you filter a LEFT JOIN using a <code>WHERE right_table.column = 'X'</code>, you inadvertently convert it into an INNER JOIN because NULLs are excluded! Put the condition in the <code>ON</code> clause instead.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql3', topic: 'SQL & Data Engineering', difficulty: 'medium', isGDrive: true,
    q: 'What is the execution order difference between WHERE and HAVING? DDL vs DML?',
    a: `• <strong>WHERE vs HAVING:</strong>
<br>&nbsp;&nbsp;• <code>WHERE</code> filters <strong>individual raw rows BEFORE</strong> any aggregation occurs. It cannot contain aggregate functions like <code>SUM()</code> or <code>AVG()</code>.
<br>&nbsp;&nbsp;• <code>HAVING</code> filters <strong>summarized groups AFTER</strong> the <code>GROUP BY</code> clause has collapsed rows.
<br>&nbsp;&nbsp;• <em>SQL Logical Execution Order:</em> FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT.
<br><br>• <strong>DDL vs DML:</strong>
<br>&nbsp;&nbsp;• <strong>DDL (Data Definition Language):</strong> <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> — defines/modifies database schema structures. Auto-commits in most RDBMS.
<br>&nbsp;&nbsp;• <strong>DML (Data Manipulation Language):</strong> <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> — queries and manipulates row data inside tables.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql4', topic: 'SQL & Data Engineering', difficulty: 'hard', isGDrive: true,
    q: 'Write the SQL query to find the top 3 highest-spending customers per city (UberEats Schema).',
    a: `Use a Common Table Expression (CTE) with <code>DENSE_RANK()</code>:
<pre><code>WITH CitySpenders AS (
  SELECT 
    r.city,
    o.customer_id,
    SUM(o.total_amount) AS total_spent,
    DENSE_RANK() OVER (
      PARTITION BY r.city 
      ORDER BY SUM(o.total_amount) DESC
    ) AS rank_pos
  FROM orders o
  JOIN restaurants r ON o.restaurant_id = r.restaurant_id
  WHERE o.status = 'DELIVERED'
  GROUP BY r.city, o.customer_id
)
SELECT city, customer_id, total_spent, rank_pos
FROM CitySpenders
WHERE rank_pos <= 3
ORDER BY city, rank_pos;</code></pre>
<br>• <strong>Why DENSE_RANK()?</strong> Ensures exactly the top 3 spending tiers are included without skipping ranks if customers tie.
<br><br><em>Source: Google Drive · uberproject1 (ubereats.db)</em>`
  },
  {
    id: 'gd_py1', topic: 'Python & Pandas Pitfalls', difficulty: 'medium', isGDrive: true,
    q: 'In Python, what happens when you write b = a and modify b? How do you create true independent copies?',
    a: `In Python, variables do not store values directly; they store <strong>memory references</strong> to objects.
<br><br><code>a = [1, 2, 3]
b = a
b.append(4)
print(a)  # Output is [1, 2, 3, 4]! Both names point to the SAME object.</code>
<br><br>• <strong>To create an independent copy:</strong>
<br>1. <strong>Shallow Copy:</strong> <code>b = a.copy()</code> or <code>b = list(a)</code> or <code>b = a[:]</code>. (Copies the outer container, but nested mutable objects inside are still shared!).
<br>2. <strong>Deep Copy:</strong> For nested structures (lists of dictionaries), use: <code>import copy; b = copy.deepcopy(a)</code>.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py2', topic: 'Python & Pandas Pitfalls', difficulty: 'easy', isGDrive: true,
    q: 'What is the critical difference between .loc[] and .iloc[] in Pandas?',
    a: `• <code>.iloc[]</code> is <strong>integer-position based</strong> (0 to N-1). Follows standard Python slicing rules: <strong>the stop index is EXCLUSIVE</strong>.
<br>&nbsp;&nbsp;Example: <code>df.iloc[0:3]</code> returns rows 0, 1, 2 (3 rows).
<br><br>• <code>.loc[]</code> is <strong>label/index based</strong>. In <code>.loc[]</code>, <strong>the stop boundary is INCLUSIVE</strong>!
<br>&nbsp;&nbsp;Example: <code>df.loc['2026-01-01':'2026-01-03']</code> returns the 1st, 2nd, AND 3rd of January.
<br><br>⚠️ <strong>Gotcha:</strong> If a DataFrame has integer index labels that are shuffled (e.g. [5, 2, 8]), <code>df.loc[2]</code> looks for label 2, whereas <code>df.iloc[2]</code> looks for the 3rd physical row.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py3', topic: 'Python & Pandas Pitfalls', difficulty: 'hard', isGDrive: true,
    q: 'Why is simple Mean or Median imputation dangerous in machine learning? What are the alternatives?',
    a: `<strong>3 Critical Dangers of Mean/Median Imputation:</strong>
<br><br>1. <strong>Artificially Compresses Variance:</strong> Replacing 20% missing values with the exact mean shrinks standard deviation, creating false certainty.
<br>2. <strong>Distorts Covariance & Feature Correlations:</strong> It introduces a constant, weakening the mathematical relationship between the feature and other predictors.
<br>3. <strong>Creates Bizarre Probability Spikes:</strong> It transforms continuous smooth bells into sharp Dirac delta spikes at the mean.
<br><br>• <strong>Production Alternatives:</strong>
<br>• Add a companion binary indicator column: <code>df['col_was_missing'] = df['col'].isna().astype(int)</code>
<br>• Use <code>IterativeImputer</code> (MICE - Multivariate Imputation by Chained Equations) or <code>KNNImputer</code>.
<br>• Use gradient boosted trees (LightGBM/XGBoost) that natively route missing values to optimal split branches.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py4', topic: 'Python & Pandas Pitfalls', difficulty: 'easy', isGDrive: true,
    q: 'Why should you call df.reset_index(drop=True) after filtering rows in Pandas?',
    a: `When filtering a DataFrame (e.g., <code>df_filtered = df[df['score'] > 80]</code>), Pandas <strong>retains the original row index labels</strong> (e.g., index 0, 4, 9, 23).
<br><br>• <strong>Why this breaks downstream code:</strong>
<br>1. If you iterate with <code>for i in range(len(df_filtered)): df_filtered.loc[i]</code>, it crashes with <code>KeyError</code> because index 1, 2, 3 do not exist!
<br>2. If you concatenate or assign a new Series, Pandas aligns on index labels, producing unexpected <code>NaN</code> values on mismatched rows.
<br><br>• <strong>Solution:</strong> <code>df_filtered = df_filtered.reset_index(drop=True)</code> re-indexes from 0 to N-1 and drops the old index column.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_eda1', topic: 'EDA & Visualization', difficulty: 'medium', isGDrive: true,
    q: 'When should you use IQR outlier filtering instead of Z-scores? How do they behave on skewed data?',
    a: `• <strong>Z-Score:</strong> <code>Z = (X - μ) / σ</code>. Assumes data is normally distributed.
<br>&nbsp;&nbsp;⚠️ <strong>Flaw:</strong> Both mean (μ) and standard deviation (σ) are extremely sensitive to outliers! A massive outlier inflates μ and σ, which artificially lowers its own Z-score.
<br><br>• <strong>IQR (Interquartile Range):</strong> <code>IQR = Q3 - Q1</code>. Bounds: <code>[Q1 - 1.5×IQR, Q3 + 1.5×IQR]</code>.
<br>&nbsp;&nbsp;• <strong>Why IQR is Superior for Skewed Data:</strong> Percentiles (Q1, Q3) are based on order ranks, making them <strong>robust and immune</strong> to extreme outlier magnitudes.
<br>&nbsp;&nbsp;• In our verified Internship Studio telemetry audit (14,102 rows), we used IQR filtering on heart-rate and duration to eliminate sensor transmission spikes without skewing baseline physiology.
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_eda2', topic: 'EDA & Visualization', difficulty: 'easy', isGDrive: true,
    q: 'Explain the difference between Exploratory Data Analysis (EDA) visuals and Explanatory stakeholder visuals.',
    a: `• <strong>Exploratory Visuals (For the Data Scientist):</strong>
<br>&nbsp;&nbsp;• High-density diagnostic tools: Pairplots, missingness heatmaps, correlation matrices, boxplots across all features.
<br>&nbsp;&nbsp;• Goal: Discover unknown patterns, anomalies, multicollinearity, and test modeling hypotheses. Messy and complex.
<br><br>• <strong>Explanatory Visuals (For Stakeholders & Evaluators):</strong>
<br>&nbsp;&nbsp;• Minimalist, high-impact storytelling: Single focal point, annotated milestone bars, high contrast.
<br>&nbsp;&nbsp;• Goal: Answer <em>"So What?"</em> and drive executive action (e.g., "Feature X reduced customer churn by 14%").
<br>&nbsp;&nbsp;• <em>Rule of Thumb:</em> If a stakeholder cannot understand the chart within 5 seconds, it is an exploratory chart that should not be in an executive presentation deck!
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_eda3', topic: 'EDA & Visualization', difficulty: 'medium', isGDrive: true,
    q: 'Compare a Boxplot and a Violin Plot. When does a Boxplot fail to reveal distribution shape?',
    a: `• <strong>Boxplot:</strong> Displays 5-number summary: Min, Q1, Median, Q3, Max, plus individual outlier points beyond 1.5×IQR.
<br>&nbsp;&nbsp;⚠️ <strong>Major Blindspot:</strong> A Boxplot is <strong>completely blind to multi-modality</strong>! A bimodal distribution (two distinct clusters) and a uniform flat distribution look identical in a boxplot if their medians and quartiles match.
<br><br>• <strong>Violin Plot:</strong> Combines a boxplot with a <strong>Kernel Density Estimate (KDE)</strong> plotted symmetrically on both sides.
<br>&nbsp;&nbsp;• Visually reveals peaks, valleys, multi-modality, and asymmetric probability density across continuous ranges.
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_quant1', topic: 'Quantitative & Telemetry', difficulty: 'hard', isGDrive: true,
    q: 'In physical sensor telemetry (Fitbit & Internship Studio), how did you engineer metabolic features from physiological signals?',
    a: `Rather than relying solely on raw sensor readings (heart rate, step count, duration), we engineered domain features grounded in physical exercise thermodynamics:
<br><br>1. <strong>Metabolic Equivalent of Task (MET) Non-Linear Interaction:</strong>
<br>&nbsp;&nbsp;<code>MET_Interaction = Heart_Rate × Duration × Body_Temp</code>
<br>&nbsp;&nbsp;Caloric burn is non-linear; exercising at 160 bpm for 30 minutes burns exponentially more calories than 80 bpm for 60 minutes due to anaerobic threshold shifts.
<br>2. <strong>Heart Rate Reserve (HRR):</strong> <code>HRR = Current_HR - Resting_HR</code>, isolating true physical exertion from baseline cardiovascular fitness.
<br>3. <strong>Unsupervised Activity Regime Clustering:</strong> Used PCA + K-Means on sensor variance to assign records to discrete behavioral states (Sedentary, Active Endurance, Peak Exertion), feeding regime embeddings into our Random Forest. Slashed MAE by 89.2% (34.97 → 3.78 kcal, R² = 0.9979).
<br><br><em>Source: Google Drive · Colab Notebooks/FITBIT project & Internship Studio</em>`
  },
  {
    id: 'gd_quant2', topic: 'Quantitative & Telemetry', difficulty: 'medium', isGDrive: true,
    q: 'What is the mathematical and practical difference between a Simple Moving Average (SMA) and an Exponential Moving Average (EMA)?',
    a: `• <strong>Simple Moving Average (SMA):</strong> Applies equal 1/N weight to all past N observations:
<br><code>SMA_t = (1 / N) × Σ P_(t-i)</code>
<br>⚠️ <em>Problem:</em> Exhibits heavy lag and the "drop-off effect" — when an old extreme price point drops out of the N-day window, the SMA line artificially jumps even if current prices are stable.
<br><br>• <strong>Exponential Moving Average (EMA):</strong> Applies exponentially decreasing weights, giving highest priority to recent prices:
<br><code>EMA_t = α · P_t + (1 - α) · EMA_(t-1)</code>, where smoothing factor <code>α = 2 / (N + 1)</code>.
<br><br>• <strong>Practical Advantage:</strong> For N=20, α = 2/21 ≈ 0.095. Recent price movements register immediately without the drop-off artifact. Essential for algorithmic momentum trading and volatility modeling.
<br><br><em>Source: Google Drive · ## Stock Analysis Project - Live Evaluation Ready.gdoc</em>`
  }

,
  // ── Google Drive Super Learner & Interview Vault ──
  {
    id: 'gd_stat1', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'When do you use a Student\'s t-test versus a Normal distribution (Z-test)?',
    a: `Use a <strong>Student\'s t-test</strong> when:
<br><br>1. Sample size is small (<strong>n < 30</strong>), AND
<br>2. The true population standard deviation (σ) is <strong>unknown</strong> (estimated via sample standard deviation s).
<br><br>• <strong>Why t-distribution?</strong> Because s is an estimate of σ, there is extra sampling error. The t-distribution accounts for this with <strong>fatter tails</strong>, requiring a larger critical value to reject the null hypothesis.
<br>• <strong>Convergence:</strong> As sample size n increases (n ≥ 30 by the Central Limit Theorem), degrees of freedom (df = n - 1) increase, and the t-distribution converges directly to the standard normal Z-distribution.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat2', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'What is the difference between a Chi-Square (χ²) Goodness-of-Fit test and a Test of Independence?',
    a: `Both use the formula: <code>χ² = Σ [ (O - E)² / E ]</code> (where O = Observed, E = Expected frequency), but answer different questions:
<br><br>• <strong>Goodness-of-Fit</strong>: Tests a <strong>single categorical variable</strong> against a known or theoretical distribution. Example: <em>"Are user signups equally distributed across all 7 days of the week?"</em> Degrees of freedom: <code>df = k - 1</code>.
<br><br>• <strong>Test of Independence</strong>: Tests whether <strong>two categorical variables</strong> are related or independent in a contingency table. Example: <em>"Is customer churn rate independent of customer subscription tier (Basic, Pro, Enterprise)?"</em> Degrees of freedom: <code>df = (rows - 1) × (cols - 1)</code>.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat3', topic: 'Statistics & Probability', difficulty: 'hard', isGDrive: true,
    q: 'What is the Poisson distribution and when do you choose it over a Binomial distribution?',
    a: `The <strong>Poisson distribution</strong> models the probability of a given number of events occurring in a <strong>fixed interval of time or space</strong>:
<br><br><code>P(X = k) = (λ^k · e^(-λ)) / k!</code>
<br><br>• <strong>Key Property:</strong> <strong>Mean = Variance = λ</strong> (the average arrival rate).
<br>• <strong>When to choose Poisson over Binomial:</strong> Use Poisson when trials n is very large and success probability p is very small (n → ∞, p → 0, with np = λ constant).
<br>• <strong>Real-world examples:</strong> Server 500 error spikes per minute, website visitor arrivals per hour, machine failures per month, call center incoming queries.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat4', topic: 'Statistics & Probability', difficulty: 'easy', isGDrive: true,
    q: 'What is the exact definition of a p-value? What is the common interview trap?',
    a: `<strong>Exact Definition:</strong> A p-value is the probability of obtaining test results at least as extreme as the observed results, <strong>assuming that the null hypothesis (H₀) is strictly true</strong>: <code>P(Data ≥ Observed | H₀ is true)</code>.
<br><br>⚠️ <strong>Common Interview Gotchas / Misconceptions:</strong>
<br>1. <em>WRONG:</em> "The p-value is the probability that the null hypothesis is true." (Never say this!).
<br>2. <em>WRONG:</em> "1 - p is the probability that the alternative hypothesis is true."
<br><br>• <strong>Decision Rule:</strong> If p-value < α (usually 0.05), the observed data is too unlikely under H₀, so we <strong>reject H₀</strong>. Setting α = 0.05 means we accept a 5% chance of a False Positive (Type I Error).
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_stat5', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'Explain the difference between Point Estimation and Interval Estimation (Confidence Intervals).',
    a: `• <strong>Point Estimation:</strong> Provides a single numerical value as the best guess of an unknown population parameter (e.g., sample mean x̄ = 42.5 ms latency). Computed via Maximum Likelihood Estimation (MLE) or Method of Moments.
<br><br>• <strong>Interval Estimation (Confidence Interval):</strong> Provides a plausible range of values with an associated confidence level: <code>CI = x̄ ± (Critical_Value × Standard_Error)</code>.
<br><br>• <strong>Why Interval is Superior in Business:</strong> A point estimate conveys false certainty and hides volatility. Reporting: <em>"Our model inference takes 42ms"</em> is misleading if the 95% CI is [10ms, 250ms]. Confidence intervals communicate sample precision and risk bounds to engineering leadership.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_ab1', topic: 'Statistics & Probability', difficulty: 'hard', isGDrive: true,
    q: 'How do you design an A/B test? What is the Minimum Detectable Effect (MDE)?',
    a: `<strong>A/B Testing Framework:</strong>
<br><br>1. <strong>Hypothesis:</strong> H₀: Conversion(B) = Conversion(A); H₁: Conversion(B) > Conversion(A).
<br>2. <strong>Metrics:</strong> Primary metric (e.g., Checkout Conversion) + Guardrail metrics (e.g., Latency, Cancellation rate).
<br>3. <strong>Sample Size Determination:</strong> Based on:
<br>&nbsp;&nbsp;• Significance level (α = 0.05 → False Positive rate)
<br>&nbsp;&nbsp;• Statistical Power (1 - β = 0.80 → 80% chance of detecting a true effect)
<br>&nbsp;&nbsp;• Baseline conversion rate (p₀)
<br>&nbsp;&nbsp;• <strong>Minimum Detectable Effect (MDE):</strong> The smallest percentage uplift that is practically meaningful to the business (e.g., +2% checkout uplift).
<br><br>• <strong>Math Law:</strong> Sample size scales inversely with MDE squared: <code>N ∝ 1 / MDE²</code>. Detecting a tiny 0.5% effect requires 16× more users than detecting a 2.0% effect!
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_ab2', topic: 'Statistics & Probability', difficulty: 'medium', isGDrive: true,
    q: 'Distinguish Type I and Type II errors. Which is worse in Healthcare vs E-Commerce?',
    a: `• <strong>Type I Error (α / False Positive):</strong> Rejecting H₀ when H₀ is actually TRUE. "Crying wolf" — saying a drug works or fraud happened when it didn\'t.
<br><br>• <strong>Type II Error (β / False Negative):</strong> Failing to reject H₀ when H₀ is actually FALSE. Missing the reality — failing to diagnose cancer or missing fraudulent theft.
<br><br>• <strong>Healthcare / Pathology (HuBMAP):</strong> <strong>Type II is far worse</strong>. Missing malignant glomerulosclerosis or cancerous tissue can be fatal. We tune models for maximum <strong>Recall</strong>.
<br>• <strong>E-Commerce / Feature Launch (UberEats):</strong> <strong>Type I is often worse</strong>. Rolling out a buggy recommendation algorithm to 10M live users damages brand trust and infrastructure.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql1', topic: 'SQL & Data Engineering', difficulty: 'medium', isGDrive: true,
    q: 'What is the exact difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL Window Functions?',
    a: `All three are window functions evaluated over <code>OVER (PARTITION BY ... ORDER BY col DESC)</code>:
<br><br>Given scores: [100, 90, 90, 80]:
<br>• <code>ROW_NUMBER()</code>: Assigns strictly sequential unique integers: <strong>1, 2, 3, 4</strong> (arbitrary tie-break).
<br>• <code>RANK()</code>: Assigns same rank to ties, then <strong>SKIPS</strong> next rank count: <strong>1, 2, 2, 4</strong>.
<br>• <code>DENSE_RANK()</code>: Assigns same rank to ties, but <strong>DOES NOT SKIP</strong>: <strong>1, 2, 2, 3</strong>.
<br><br>• <strong>Superpower of Window Functions:</strong> They compute aggregate and ranking values across partitions <strong>WITHOUT collapsing rows</strong>, preserving full row-level detail.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql2', topic: 'SQL & Data Engineering', difficulty: 'easy', isGDrive: true,
    q: 'Explain the mechanics, row counts, and NULL behavior of all major SQL joins.',
    a: `• <strong>INNER JOIN:</strong> Returns only rows where the join predicate matches in BOTH tables. Unmatched rows in either table are discarded.
<br>• <strong>LEFT JOIN:</strong> Returns ALL rows from the left table. If no match in right table, right columns are filled with <code>NULL</code>.
<br>• <strong>RIGHT JOIN:</strong> Returns ALL rows from the right table, filling left columns with <code>NULL</code> where unmatched.
<br>• <strong>FULL OUTER JOIN:</strong> Returns all rows from both tables, filling with <code>NULL</code> on whichever side lacks a key match.
<br>• <strong>CROSS JOIN (Cartesian Product):</strong> Pairs every row of Table A (M rows) with every row of Table B (N rows), returning <code>M × N</code> rows. No join key needed.
<br><br>⚠️ <strong>Interview Gotcha:</strong> If you filter a LEFT JOIN using a <code>WHERE right_table.column = 'X'</code>, you inadvertently convert it into an INNER JOIN because NULLs are excluded! Put the condition in the <code>ON</code> clause instead.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql3', topic: 'SQL & Data Engineering', difficulty: 'medium', isGDrive: true,
    q: 'What is the execution order difference between WHERE and HAVING? DDL vs DML?',
    a: `• <strong>WHERE vs HAVING:</strong>
<br>&nbsp;&nbsp;• <code>WHERE</code> filters <strong>individual raw rows BEFORE</strong> any aggregation occurs. It cannot contain aggregate functions like <code>SUM()</code> or <code>AVG()</code>.
<br>&nbsp;&nbsp;• <code>HAVING</code> filters <strong>summarized groups AFTER</strong> the <code>GROUP BY</code> clause has collapsed rows.
<br>&nbsp;&nbsp;• <em>SQL Logical Execution Order:</em> FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT.
<br><br>• <strong>DDL vs DML:</strong>
<br>&nbsp;&nbsp;• <strong>DDL (Data Definition Language):</strong> <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> — defines/modifies database schema structures. Auto-commits in most RDBMS.
<br>&nbsp;&nbsp;• <strong>DML (Data Manipulation Language):</strong> <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> — queries and manipulates row data inside tables.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_sql4', topic: 'SQL & Data Engineering', difficulty: 'hard', isGDrive: true,
    q: 'Write the SQL query to find the top 3 highest-spending customers per city (UberEats Schema).',
    a: `Use a Common Table Expression (CTE) with <code>DENSE_RANK()</code>:
<pre><code>WITH CitySpenders AS (
  SELECT 
    r.city,
    o.customer_id,
    SUM(o.total_amount) AS total_spent,
    DENSE_RANK() OVER (
      PARTITION BY r.city 
      ORDER BY SUM(o.total_amount) DESC
    ) AS rank_pos
  FROM orders o
  JOIN restaurants r ON o.restaurant_id = r.restaurant_id
  WHERE o.status = 'DELIVERED'
  GROUP BY r.city, o.customer_id
)
SELECT city, customer_id, total_spent, rank_pos
FROM CitySpenders
WHERE rank_pos <= 3
ORDER BY city, rank_pos;</code></pre>
<br>• <strong>Why DENSE_RANK()?</strong> Ensures exactly the top 3 spending tiers are included without skipping ranks if customers tie.
<br><br><em>Source: Google Drive · uberproject1 (ubereats.db)</em>`
  },
  {
    id: 'gd_py1', topic: 'Python & Pandas Pitfalls', difficulty: 'medium', isGDrive: true,
    q: 'In Python, what happens when you write b = a and modify b? How do you create true independent copies?',
    a: `In Python, variables do not store values directly; they store <strong>memory references</strong> to objects.
<br><br><code>a = [1, 2, 3]
b = a
b.append(4)
print(a)  # Output is [1, 2, 3, 4]! Both names point to the SAME object.</code>
<br><br>• <strong>To create an independent copy:</strong>
<br>1. <strong>Shallow Copy:</strong> <code>b = a.copy()</code> or <code>b = list(a)</code> or <code>b = a[:]</code>. (Copies the outer container, but nested mutable objects inside are still shared!).
<br>2. <strong>Deep Copy:</strong> For nested structures (lists of dictionaries), use: <code>import copy; b = copy.deepcopy(a)</code>.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py2', topic: 'Python & Pandas Pitfalls', difficulty: 'easy', isGDrive: true,
    q: 'What is the critical difference between .loc[] and .iloc[] in Pandas?',
    a: `• <code>.iloc[]</code> is <strong>integer-position based</strong> (0 to N-1). Follows standard Python slicing rules: <strong>the stop index is EXCLUSIVE</strong>.
<br>&nbsp;&nbsp;Example: <code>df.iloc[0:3]</code> returns rows 0, 1, 2 (3 rows).
<br><br>• <code>.loc[]</code> is <strong>label/index based</strong>. In <code>.loc[]</code>, <strong>the stop boundary is INCLUSIVE</strong>!
<br>&nbsp;&nbsp;Example: <code>df.loc['2026-01-01':'2026-01-03']</code> returns the 1st, 2nd, AND 3rd of January.
<br><br>⚠️ <strong>Gotcha:</strong> If a DataFrame has integer index labels that are shuffled (e.g. [5, 2, 8]), <code>df.loc[2]</code> looks for label 2, whereas <code>df.iloc[2]</code> looks for the 3rd physical row.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py3', topic: 'Python & Pandas Pitfalls', difficulty: 'hard', isGDrive: true,
    q: 'Why is simple Mean or Median imputation dangerous in machine learning? What are the alternatives?',
    a: `<strong>3 Critical Dangers of Mean/Median Imputation:</strong>
<br><br>1. <strong>Artificially Compresses Variance:</strong> Replacing 20% missing values with the exact mean shrinks standard deviation, creating false certainty.
<br>2. <strong>Distorts Covariance & Feature Correlations:</strong> It introduces a constant, weakening the mathematical relationship between the feature and other predictors.
<br>3. <strong>Creates Bizarre Probability Spikes:</strong> It transforms continuous smooth bells into sharp Dirac delta spikes at the mean.
<br><br>• <strong>Production Alternatives:</strong>
<br>• Add a companion binary indicator column: <code>df['col_was_missing'] = df['col'].isna().astype(int)</code>
<br>• Use <code>IterativeImputer</code> (MICE - Multivariate Imputation by Chained Equations) or <code>KNNImputer</code>.
<br>• Use gradient boosted trees (LightGBM/XGBoost) that natively route missing values to optimal split branches.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_py4', topic: 'Python & Pandas Pitfalls', difficulty: 'easy', isGDrive: true,
    q: 'Why should you call df.reset_index(drop=True) after filtering rows in Pandas?',
    a: `When filtering a DataFrame (e.g., <code>df_filtered = df[df['score'] > 80]</code>), Pandas <strong>retains the original row index labels</strong> (e.g., index 0, 4, 9, 23).
<br><br>• <strong>Why this breaks downstream code:</strong>
<br>1. If you iterate with <code>for i in range(len(df_filtered)): df_filtered.loc[i]</code>, it crashes with <code>KeyError</code> because index 1, 2, 3 do not exist!
<br>2. If you concatenate or assign a new Series, Pandas aligns on index labels, producing unexpected <code>NaN</code> values on mismatched rows.
<br><br>• <strong>Solution:</strong> <code>df_filtered = df_filtered.reset_index(drop=True)</code> re-indexes from 0 to N-1 and drops the old index column.
<br><br><em>Source: Google Drive · super learner questions.gdoc</em>`
  },
  {
    id: 'gd_eda1', topic: 'EDA & Visualization', difficulty: 'medium', isGDrive: true,
    q: 'When should you use IQR outlier filtering instead of Z-scores? How do they behave on skewed data?',
    a: `• <strong>Z-Score:</strong> <code>Z = (X - μ) / σ</code>. Assumes data is normally distributed.
<br>&nbsp;&nbsp;⚠️ <strong>Flaw:</strong> Both mean (μ) and standard deviation (σ) are extremely sensitive to outliers! A massive outlier inflates μ and σ, which artificially lowers its own Z-score.
<br><br>• <strong>IQR (Interquartile Range):</strong> <code>IQR = Q3 - Q1</code>. Bounds: <code>[Q1 - 1.5×IQR, Q3 + 1.5×IQR]</code>.
<br>&nbsp;&nbsp;• <strong>Why IQR is Superior for Skewed Data:</strong> Percentiles (Q1, Q3) are based on order ranks, making them <strong>robust and immune</strong> to extreme outlier magnitudes.
<br>&nbsp;&nbsp;• In our verified Internship Studio telemetry audit (14,102 rows), we used IQR filtering on heart-rate and duration to eliminate sensor transmission spikes without skewing baseline physiology.
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_eda2', topic: 'EDA & Visualization', difficulty: 'easy', isGDrive: true,
    q: 'Explain the difference between Exploratory Data Analysis (EDA) visuals and Explanatory stakeholder visuals.',
    a: `• <strong>Exploratory Visuals (For the Data Scientist):</strong>
<br>&nbsp;&nbsp;• High-density diagnostic tools: Pairplots, missingness heatmaps, correlation matrices, boxplots across all features.
<br>&nbsp;&nbsp;• Goal: Discover unknown patterns, anomalies, multicollinearity, and test modeling hypotheses. Messy and complex.
<br><br>• <strong>Explanatory Visuals (For Stakeholders & Evaluators):</strong>
<br>&nbsp;&nbsp;• Minimalist, high-impact storytelling: Single focal point, annotated milestone bars, high contrast.
<br>&nbsp;&nbsp;• Goal: Answer <em>"So What?"</em> and drive executive action (e.g., "Feature X reduced customer churn by 14%").
<br>&nbsp;&nbsp;• <em>Rule of Thumb:</em> If a stakeholder cannot understand the chart within 5 seconds, it is an exploratory chart that should not be in an executive presentation deck!
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_eda3', topic: 'EDA & Visualization', difficulty: 'medium', isGDrive: true,
    q: 'Compare a Boxplot and a Violin Plot. When does a Boxplot fail to reveal distribution shape?',
    a: `• <strong>Boxplot:</strong> Displays 5-number summary: Min, Q1, Median, Q3, Max, plus individual outlier points beyond 1.5×IQR.
<br>&nbsp;&nbsp;⚠️ <strong>Major Blindspot:</strong> A Boxplot is <strong>completely blind to multi-modality</strong>! A bimodal distribution (two distinct clusters) and a uniform flat distribution look identical in a boxplot if their medians and quartiles match.
<br><br>• <strong>Violin Plot:</strong> Combines a boxplot with a <strong>Kernel Density Estimate (KDE)</strong> plotted symmetrically on both sides.
<br>&nbsp;&nbsp;• Visually reveals peaks, valleys, multi-modality, and asymmetric probability density across continuous ranges.
<br><br><em>Source: Google Drive · # Interview Preparation Guide.gdoc</em>`
  },
  {
    id: 'gd_quant1', topic: 'Quantitative & Telemetry', difficulty: 'hard', isGDrive: true,
    q: 'In physical sensor telemetry (Fitbit & Internship Studio), how did you engineer metabolic features from physiological signals?',
    a: `Rather than relying solely on raw sensor readings (heart rate, step count, duration), we engineered domain features grounded in physical exercise thermodynamics:
<br><br>1. <strong>Metabolic Equivalent of Task (MET) Non-Linear Interaction:</strong>
<br>&nbsp;&nbsp;<code>MET_Interaction = Heart_Rate × Duration × Body_Temp</code>
<br>&nbsp;&nbsp;Caloric burn is non-linear; exercising at 160 bpm for 30 minutes burns exponentially more calories than 80 bpm for 60 minutes due to anaerobic threshold shifts.
<br>2. <strong>Heart Rate Reserve (HRR):</strong> <code>HRR = Current_HR - Resting_HR</code>, isolating true physical exertion from baseline cardiovascular fitness.
<br>3. <strong>Unsupervised Activity Regime Clustering:</strong> Used PCA + K-Means on sensor variance to assign records to discrete behavioral states (Sedentary, Active Endurance, Peak Exertion), feeding regime embeddings into our Random Forest. Slashed MAE by 89.2% (34.97 → 3.78 kcal, R² = 0.9979).
<br><br><em>Source: Google Drive · Colab Notebooks/FITBIT project & Internship Studio</em>`
  },
  {
    id: 'gd_quant2', topic: 'Quantitative & Telemetry', difficulty: 'medium', isGDrive: true,
    q: 'What is the mathematical and practical difference between a Simple Moving Average (SMA) and an Exponential Moving Average (EMA)?',
    a: `• <strong>Simple Moving Average (SMA):</strong> Applies equal 1/N weight to all past N observations:
<br><code>SMA_t = (1 / N) × Σ P_(t-i)</code>
<br>⚠️ <em>Problem:</em> Exhibits heavy lag and the "drop-off effect" — when an old extreme price point drops out of the N-day window, the SMA line artificially jumps even if current prices are stable.
<br><br>• <strong>Exponential Moving Average (EMA):</strong> Applies exponentially decreasing weights, giving highest priority to recent prices:
<br><code>EMA_t = α · P_t + (1 - α) · EMA_(t-1)</code>, where smoothing factor <code>α = 2 / (N + 1)</code>.
<br><br>• <strong>Practical Advantage:</strong> For N=20, α = 2/21 ≈ 0.095. Recent price movements register immediately without the drop-off artifact. Essential for algorithmic momentum trading and volatility modeling.
<br><br><em>Source: Google Drive · ## Stock Analysis Project - Live Evaluation Ready.gdoc</em>`
  },

  // ── High-Yield Enterprise Viva Bank (Moved from War Room Modules) ──
  {
    id: 'ent_ml1', topic: 'Classical ML', difficulty: 'medium',
    q: 'Explain the Bias-Variance Tradeoff. How do L1 and L2 regularization affect it?',
    a: `<strong>Bias</strong> is error from erroneous assumptions (underfitting — model is too simple, e.g., fitting a straight line to quadratic data).<br>
<strong>Variance</strong> is error from sensitivity to small fluctuations in training data (overfitting — model memorizes noise, high train accuracy but poor validation).<br><br>
<strong>Total Error = Bias² + Variance + Irreducible Error.</strong><br><br>
• <strong>Regularization adds a penalty term to the loss function</strong>:<br>
- <strong>L1 (Lasso)</strong>: Adds $\\lambda \\sum |w_i|$. Promotes sparsity by driving irrelevant feature weights strictly to zero (automatic feature selection).<br>
- <strong>L2 (Ridge)</strong>: Adds $\\lambda \\sum w_i^2$. Shrinks weights towards zero without making them exactly zero; handles multicollinearity exceptionally well.<br><br>
By increasing $\\lambda$, we slightly increase bias to dramatically reduce variance, minimizing generalization error.
<br><br>⚠️ <strong>Interview Gotcha:</strong> ElasticNet combines both penalties: essential when $p > n$ or when features are highly correlated (as in Pravin’s soil-grain-size distribution project).
<br><br>🧠 <strong>Feynman Analogy:</strong> Think of archery: High Bias = your arrows hit tightly together but far from the bullseye. High Variance = arrows fly all over the target. Good model = all arrows hit close to the center.`
  },
  {
    id: 'ent_ml2', topic: 'Quantitative & Telemetry', difficulty: 'medium',
    q: 'When should you use Precision vs Recall vs ROC-AUC vs PR-AUC? How do you handle class imbalance?',
    a: `<strong>Precision</strong> = $TP / (TP + FP)$ &rarr; Cost of False Positive is high (e.g., enterprise email spam filter marking a critical client contract as spam).<br><br>
<strong>Recall</strong> = $TP / (TP + FN)$ &rarr; Cost of False Negative is disastrous (e.g., fraud detection or critical enterprise customer churn prediction).<br><br>
<strong>F1-Score</strong> = Harmonic mean of Precision & Recall ($2 \\times P \\times R / (P + R)$); best balanced metric on skewed datasets.<br><br>
<strong>ROC-AUC vs PR-AUC</strong>:<br>
• <strong>ROC-AUC</strong> evaluates True Positive Rate vs False Positive Rate across all thresholds. However, when the negative class is massive (e.g., 99% non-fraud), ROC-AUC is deceptively optimistic because large TN keeps FPR small.<br>
• <strong>PR-AUC</strong> focuses exclusively on the minority positive class ($P$ vs $R$). Always use PR-AUC for severe class imbalance!
<br><br>⚠️ <strong>Interview Gotcha:</strong> Never claim accuracy is sufficient on 95:5 imbalanced datasets. A dummy model predicting the majority class gets 95% accuracy with 0% recall!
<br><br>🧠 <strong>Feynman Analogy:</strong> Precision is: "Of everyone I accused, how many actually committed the crime?" Recall is: "Of all actual criminals out there, how many did I catch?"`
  },
  {
    id: 'ent_ml3', topic: 'Classical ML', difficulty: 'medium',
    q: 'How does Random Forest work and why does it rarely overfit compared to a single Decision Tree?',
    a: `Random Forest is an ensemble method utilizing <strong>Bagging (Bootstrap Aggregation) + Feature Subsampling</strong>:<br><br>
1. <strong>Bootstrapping</strong>: Trains N independent deep decision trees on random samples drawn with replacement from the training set.<br>
2. <strong>Random Subspace</strong>: At each split, only a random subset of features (typically $\\sqrt{p}$) is evaluated. This decorrelates the individual trees.<br>
3. <strong>Aggregation</strong>: Averages predictions (regression) or takes majority vote (classification).<br><br>
<strong>Why it avoids overfitting</strong>: While individual decision trees have high variance, averaging $B$ uncorrelated trees reduces variance by a factor approaching $1/B$ while keeping bias constant. That is why Random Forest was ideal for Pravin’s 14,102 telemetry records at Internship Studio (89.2% error reduction).
<br><br>⚠️ <strong>Interview Gotcha:</strong> Explain Out-Of-Bag (OOB) error: roughly 36.8% of samples are left out of each bootstrap sample, providing an honest built-in validation set without needing a separate split.
<br><br>🧠 <strong>Feynman Analogy:</strong> Asking one doctor might give a biased opinion. Asking 100 independent doctors who each inspect different test results and taking their average gives a far more reliable diagnosis.`
  },
  {
    id: 'ent_ml4', topic: 'Quantitative & Telemetry', difficulty: 'hard',
    q: 'What is the R² Paradox in Time-Series Forecasting and why must you use stationary log returns?',
    a: `In non-stationary time series (like financial or energy prices with random walk drift), a trivial "Persistence Model" that simply predicts $\\hat{y}_{t+1} = y_t$ can achieve an $R^2 > 0.98$ simply because prices are auto-correlated.<br><br>
This is the <strong>R² Paradox</strong>: the model appears mathematically perfect, but has zero actual directional predictive power (it just mirrors yesterday’s price with a 1-step lag).<br><br>
<strong>How to resolve it (as in CryptoCast)</strong>:<br>
1. Formulate the target as <strong>Stationary Log Return</strong>: $r = \\ln(P_{t+h} / P_t)$ rather than raw price.<br>
2. Verify stationarity using the Augmented Dickey-Fuller (ADF) test ($p < 0.05$).<br>
3. Enforce strict <strong>Chronological Walk-Forward Validation</strong> rather than random k-fold splits, preventing future lookahead leakage.<br>
4. Achieved verified 2.06% 1-day MAPE under true out-of-sample forward horizons.
<br><br>⚠️ <strong>Interview Gotcha:</strong> Never shuffle time-series data during train/test split. Shuffling leaks future values into the past.
<br><br>🧠 <strong>Feynman Analogy:</strong> Predicting tomorrow’s weather is the same as today gives high correlation in summer, but fails completely when a storm hits. Predicting the change in weather is real forecasting.`
  },
  {
    id: 'ent_ml5', topic: 'Classical ML', difficulty: 'medium',
    q: 'How does K-Means clustering work? How do you select optimal K, and what are its core limitations?',
    a: `<strong>K-Means Algorithm</strong>:<br>
1. Initialize $K$ cluster centroids (e.g., K-Means++ to avoid poor local minima).<br>
2. <strong>Assignment step</strong>: Assign each point to its nearest centroid via Euclidean distance.<br>
3. <strong>Update step</strong>: Recalculate centroids as the mean of all points assigned to that cluster.<br>
4. Repeat until centroids converge (movement < $\\epsilon$).<br><br>
<strong>Selecting Optimal K</strong>:<br>
• <strong>Elbow Method</strong>: Plot Within-Cluster Sum of Squares (WCSS) vs $K$ to find the bend.<br>
• <strong>Silhouette Analysis</strong>: Measures how similar an object is to its own cluster ($a$) versus neighboring clusters ($b$). Range $[-1, 1]$. Score of 0.4546 in Pravin’s telemetry project indicated strong cluster separation.<br><br>
<strong>Limitations</strong>: Assumes spherical clusters of equal variance, sensitive to outliers, and requires scaling features beforehand (StandardScaler).
<br><br>⚠️ <strong>Interview Gotcha:</strong> Always scale features prior to K-Means; otherwise, variables with large numerical scales dominate the Euclidean distance calculation.
<br><br>🧠 <strong>Feynman Analogy:</strong> Imagine grouping people in a crowded room into 3 discussion circles. People step toward the circle center closest to them, the center updates its position, and you repeat until nobody moves.`
  },
  {
    id: 'ent_ml6', topic: 'NLP', difficulty: 'hard',
    q: 'In production GenAI systems (e.g., ERIA), why use a Multi-Agent architecture instead of a single prompt?',
    a: `In regulatory policy and document analysis (e.g., 50+ page legal or compliance documents), a single prompt suffers from three major flaws:<br>
1. <strong>Context hallucination & drift</strong>: Single calls easily miss nuanced clauses.<br>
2. <strong>Lack of self-correction</strong>: No verification layer to ensure assertions are grounded in document text.<br>
3. <strong>Role entanglement</strong>: Summarizing, extracting regulatory impact, and checking compliance require distinct cognitive lenses.<br><br>
<strong>Multi-Agent Architecture (as in ERIA)</strong>:<br>
• <strong>Agent 1 (Extractor)</strong>: Ingests documents, creates TF-IDF + Cosine semantic chunks, and extracts raw stakeholder impact clauses.<br>
• <strong>Agent 2 (Critic/Evaluator)</strong>: Scores output against a Grounding Rubric (target $\\ge 8.5/10$), checking citations against ground-truth text chunks.<br>
• <strong>Agent 3 (Synthesizer)</strong>: If Critic score < 8.5, sends back for correction; once approved, outputs structured Pydantic schema validation.<br>
This closed-loop system achieved sub-15s response times with verified audit accuracy.
<br><br>⚠️ <strong>Interview Gotcha:</strong> Mention Pydantic schema validation: ensures that LLM outputs conform to strict typed JSON schemas rather than unpredictable conversational markdown.
<br><br>🧠 <strong>Feynman Analogy:</strong> Instead of having one person write, proofread, and approve a legal contract in a single pass, you have a drafter, an auditor who rejects mistakes, and an executive publisher.`
  },
  {
    id: 'ent_sql1', topic: 'SQL & Data Engineering', difficulty: 'medium',
    q: 'Explain the difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL window functions.',
    a: `All three assign integer ranks ordered by a column inside a partition:<br><br>
• <strong>ROW_NUMBER()</strong>: Assigns unique sequential integers (1, 2, 3, 4) with no duplicates even for identical values.<br>
• <strong>RANK()</strong>: Assigns identical rank for ties, but skips subsequent numbers (1, 2, 2, 4).<br>
• <strong>DENSE_RANK()</strong>: Assigns identical rank for ties without skipping numbers (1, 2, 2, 3).<br><br>
<strong>Rule of Thumb:</strong> Always use <code>DENSE_RANK()</code> for "Find the Nth highest salary / metric" so rank 2 is truly the 2nd distinct value!
<br><br>⚠️ <strong>Interview Gotcha:</strong> Using <code>RANK()</code> fails if there are ties for 1st place, because the next salary becomes rank 3, returning empty for rank = 2!
<br><br>🧠 <strong>Feynman Analogy:</strong> ROW_NUMBER is a ticket counter; RANK gives shared medals but skips places; DENSE_RANK gives shared medals without leaving gaps.`
  },
  {
    id: 'ent_py1', topic: 'Python & Pandas Pitfalls', difficulty: 'medium',
    q: 'How do you find the first non-repeating character in a string in O(N) time without nested loops?',
    a: `Use <code>collections.Counter</code> or a single-pass hash map (dict):<br><br>
1. <strong>First pass:</strong> Count frequencies of all characters in $O(N)$ time.<br>
2. <strong>Second pass:</strong> Iterate through the original string and return the first character whose frequency count is 1.<br><br>
<code>Time Complexity: O(N) | Space Complexity: O(1)</code> bounded by alphabet size (26 lowercase chars).
<br><br>⚠️ <strong>Interview Gotcha:</strong> Never use <code>string.count(char)</code> inside a loop — that recalculates frequency on every character, creating an accidental $O(N^2)$ algorithm!
<br><br>🧠 <strong>Feynman Analogy:</strong> Take attendance of every letter once, then read the line again and pick the first person who only showed up once.`
  },
  {
    id: 'ent_ml7', topic: 'Classical ML', difficulty: 'hard',
    q: 'Why choose Multi-Task Elastic Net over Random Forest for small-sample high-collinear features?',
    a: `In small-sample regimes where $p > n$ with severe collinearity (like in Pravin's soil-grain-size distribution project):<br><br>
1. <strong>Random Forest failure mode:</strong> Trees split arbitrarily across collinear features, diluting feature importance and overfitting small training batches.<br>
2. <strong>Multi-Task Elastic Net advantage:</strong> Uses L1 (Lasso) penalty to enforce group sparsity (driving noise features strictly to zero) while L2 (Ridge) penalty stabilizes collinear coefficients by shrinking them together.<br>
3. <strong>Multi-task formulation:</strong> Shares the sparsity pattern across related output distribution channels, achieving superior out-of-fold generalization (55.21 Earth Mover’s Distance).
<br><br>⚠️ <strong>Interview Gotcha:</strong> Never claim "Random Forest is always better than linear models." Complex non-linear models overfit severely when samples are scarce.
<br><br>🧠 <strong>Feynman Analogy:</strong> When you have 200 clues but only 30 crime scenes, asking a group of strict linear detectives to eliminate redundant clues works much better than letting a chaotic forest guess.`
  },
  {
    id: 'ent_ml8', topic: 'Transformers', difficulty: 'hard',
    q: 'Why does PatchTST with Reversible Instance Normalization (RevIN) outperform LSTM on multi-step forecasting?',
    a: `1. <strong>Why PatchTST wins:</strong> Time series over multi-step horizons (3-day, 7-day) suffer from non-stationary distribution drift. PatchTST tokenizes continuous time steps into patches, enabling cross-time self-attention to capture multi-scale cycles, while RevIN (Reversible Instance Normalization) eliminates non-stationary mean/variance shifts. LSTM suffers from recurrent gradient saturation over long horizons.<br><br>
2. <strong>Preventing leakage:</strong> Strictly utilize <strong>Chronological Walk-Forward Validation</strong> instead of random k-fold splits, training exclusively on historical windows and testing on the subsequent unseen horizon.
<br><br>⚠️ <strong>Interview Gotcha:</strong> Never use <code>train_test_split(shuffle=True)</code> on sequential data. Shuffling leaks future values into the past.
<br><br>🧠 <strong>Feynman Analogy:</strong> LSTM reads words letter-by-letter and forgets long paragraphs; PatchTST reads whole sentences at a time and adjusts for volume changes.`
  }

];

// Render Viva Mode full page
window.renderVivaPage = function () {
  const el = document.getElementById('viva-content');
  const cats = ['All', '📌 Needs Review', '🌟 GDrive Super Learner', 'Statistics & Probability', 'SQL & Data Engineering', 'Python & Pandas Pitfalls', 'EDA & Visualization', 'Quantitative & Telemetry', 'NLP', 'Classical ML', 'RNN/LSTM', 'Transformers', 'CNN', 'General'];
  let activeFilter = 'All';
  let score = 0;

  function getMasteredMap() {
    return JSON.parse(localStorage.getItem('nf_mastered_viva') || '{}');
  }

  function filteredQuestions() {
    const mastered = getMasteredMap();
    if (activeFilter === 'All') return VIVA_BANK;
    if (activeFilter === '📌 Needs Review') return VIVA_BANK.filter(q => !mastered[q.id]);
    if (activeFilter === '🌟 GDrive Super Learner') return VIVA_BANK.filter(q => q.isGDrive);
    return VIVA_BANK.filter(q => q.topic === activeFilter);
  }

  function renderCards(qs) {
    const mastered = getMasteredMap();
    if (!qs.length) {
      return `<div class="glass-card" style="padding:2rem;text-align:center;color:var(--lime);grid-column:1/-1">🎉 All flashcards in this filter have been marked as Mastered! Switch to 'All' to review anytime.</div>`;
    }
    return qs.map(q => {
      const isMastered = !!mastered[q.id];
      return `
      <div class="viva-card-full glass-card" id="vc-${q.id}" style="${isMastered ? 'border-color:rgba(132,204,22,0.45);background:rgba(132,204,22,0.03)' : ''}">
        <div class="viva-card-q" onclick="toggleVivaAnswer('${q.id}')">
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
              <span class="q-topic" style="color:${topicColor(q.topic)}">${q.topic}</span>
              ${q.isGDrive ? '<span class="tag violet" style="font-size:0.65rem;padding:0.1rem 0.4rem;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.35);color:#a78bfa">📁 Google Drive Vault</span>' : ''}
              ${isMastered ? '<span class="tag" style="font-size:0.65rem;padding:0.1rem 0.45rem;background:rgba(132,204,22,0.15);border:1px solid rgba(132,204,22,0.4);color:var(--lime)">✓ Mastered</span>' : ''}
            </div>
            <div class="q-text">${q.q}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.5rem;flex-shrink:0">
            <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;justify-content:flex-end">
              <button class="btn-sm accent" onclick="event.stopPropagation(); launchVivaVoiceEval('${q.id}')" style="font-size:0.68rem;padding:0.18rem 0.55rem" title="Speak your answer aloud and get evaluated for tone &amp; presentation">
                🎙️ Speak
              </button>
              <button class="btn-sm" onclick="event.stopPropagation(); toggleMasteredViva('${q.id}')" style="font-size:0.68rem;padding:0.18rem 0.5rem;border-color:${isMastered ? 'var(--lime)' : 'var(--border)'};color:${isMastered ? 'var(--lime)' : 'var(--text-muted)'}">
                ${isMastered ? '✓ Mastered' : '○ Mark Mastered'}
              </button>
              <span class="difficulty-badge diff-${q.difficulty}">${q.difficulty}</span>
            </div>
            <span style="font-size:0.7rem;color:var(--text-muted)">▼ reveal answer</span>
          </div>
        </div>
        <div class="viva-card-a" id="va-${q.id}">${q.a}</div>
      </div>
    `;
    }).join('');
  }

  function updateMasteryCounter() {
    const masteredCount = Object.keys(getMasteredMap()).length;
    const scoreEl = document.getElementById('viva-score');
    if (scoreEl) {
      scoreEl.textContent = `Mastered: ${masteredCount} / ${VIVA_BANK.length} · Revealed: ${score}`;
    }
  }

  el.innerHTML = `
    <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem">
      <div>
        <h2>🎤 Viva Flashcards &amp; Spaced-Repetition Vault (90+ Q&amp;As)</h2>
        <p>Active Recall Protocol: Tap <strong>🎙️ Speak</strong> on any card to record your answer aloud, transcribe it with <code>gemini-3.5-transcribe</code>, and get evaluated on your tone, WPM cadence, and technical accuracy.</p>
      </div>
      <button class="btn-sm accent" onclick="openVoiceEvaluator()" style="font-weight:700;padding:0.45rem 0.95rem">🎙️ Open Voice &amp; Tone Studio</button>
    </div>
    
    <!-- 📁 Google Drive Vault Banner -->
    <div class="glass-card" style="margin-bottom:1.25rem;padding:1.1rem;border-color:rgba(139,92,246,0.35);background:linear-gradient(135deg,rgba(139,92,246,0.08),rgba(0,255,200,0.05));border-radius:12px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem">
      <div>
        <div style="font-weight:700;color:var(--violet);font-size:0.95rem;display:flex;align-items:center;gap:0.5rem">
          <span>📁 Google Drive Interview &amp; Revision Vault Loaded</span>
          <span class="tag violet" style="font-size:0.68rem;padding:0.15rem 0.45rem">+20 Super Learner Q&amp;As</span>
        </div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.3rem">
          Sourced directly from your Google Drive notes: <strong>super learner questions.gdoc</strong>, <strong># Interview Preparation Guide.gdoc</strong>, <strong>Stock Analysis Project</strong>, <strong>Fitbit Telemetry</strong>, and <strong>ubereats.db</strong>.
        </div>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
        <button class="btn-sm" onclick="setVivaFilter('📌 Needs Review', document.querySelector('.filter-btn[data-cat=\\'📌 Needs Review\\']'))" style="border-color:var(--amber);color:var(--amber)">📌 Study Unmastered</button>
        <button class="btn-sm violet" onclick="setVivaFilter('🌟 GDrive Super Learner', document.querySelector('.filter-btn[data-cat=\\'🌟 GDrive Super Learner\\']'))">Filter GDrive Vault &rarr;</button>
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">
      <div class="viva-filters" id="viva-filters">
        ${cats.map(c => `<button class="filter-btn ${c==='All'?'active':''}" data-cat="${c}" onclick="setVivaFilter('${c}',this)">${c}</button>`).join('')}
      </div>
      <div class="viva-score" id="viva-score">Mastered: ${Object.keys(getMasteredMap()).length} / ${VIVA_BANK.length} · Revealed: 0</div>
    </div>
    <div class="viva-grid" id="viva-grid">${renderCards(VIVA_BANK)}</div>
  `;

  window.setVivaFilter = function (cat, btn) {
    activeFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-cat') === cat);
    });
    document.getElementById('viva-grid').innerHTML = renderCards(filteredQuestions());
  };

  window.toggleMasteredViva = function (id) {
    const mastered = getMasteredMap();
    if (mastered[id]) {
      delete mastered[id];
    } else {
      mastered[id] = true;
      window.addXP(20);
    }
    localStorage.setItem('nf_mastered_viva', JSON.stringify(mastered));
    updateMasteryCounter();
    document.getElementById('viva-grid').innerHTML = renderCards(filteredQuestions());
  };

  window.toggleVivaAnswer = function (id) {
    const ansEl = document.getElementById('va-' + id);
    const q = VIVA_BANK.find(x => x.id === id);
    ansEl.classList.toggle('show');
    if (ansEl.classList.contains('show') && !q.seen) {
      q.seen = true;
      score++;
      updateMasteryCounter();
      window.addXP(15);
    }
  };
};

function topicColor(topic) {
  const map = { 
    'NLP':'#00ffc8', 
    'Classical ML':'#38bdf8', 
    'RNN/LSTM':'#a78bfa', 
    'Transformers':'#f43f5e', 
    'CNN':'#f59e0b', 
    'General':'#84cc16',
    'Statistics & Probability':'#ec4899',
    'SQL & Data Engineering':'#3b82f6',
    'Python & Pandas Pitfalls':'#eab308',
    'EDA & Visualization':'#10b981',
    'Quantitative & Telemetry':'#06b6d4',
    '🌟 GDrive Super Learner':'#8b5cf6'
  };
  return map[topic] || '#fff';
}


window.filterGDriveVault = function() {
  const btn = document.querySelector('.filter-btn[data-cat="🌟 GDrive Super Learner"]');
  if (typeof window.setVivaFilter === 'function') {
    window.setVivaFilter('🌟 GDrive Super Learner', btn);
  }
};

