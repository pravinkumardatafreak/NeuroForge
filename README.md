# ⚡ NeuroForge Academy — AI/DS Evaluation & Learning SaaS Engine

An interactive, cognitive-science-driven **Data Science & AI Learning Platform & Live Evaluation Readiness Suite**.

Built specifically to bridge the gap between building raw Data Science models and **explaining, presenting, and defending every design decision live** in technical interviews and GUVI HCL Capstone evaluations.

---

## 🌟 Strategic Value & Product Vision

Most Data Science portfolios consist of static `.ipynb` Jupyter notebooks that showcase model code but fail to demonstrate **technical communication, architectural justification, or product thinking**.

**NeuroForge Academy** elevates Data Science work into an interactive, SaaS-ready learning product that:
1. **Teaches Core AI/DS Concepts** through cognitive science principles (Active Recall, Interleaving, Dual Coding, Elaborative Interrogation).
2. **Features Real Project Walkthroughs** for **IMDb Content-Based Recommender** (TF-IDF, SBERT, Cosine KNN, LIME Explainability) and **CryptoCast Multi-Horizon Forecaster** (PyTorch 1D-CNN, RNN, LSTM, Transformer, PatchTST).
3. **Serves as a 30-Minute Live Evaluation Preparation Engine** with 7-step (NLP) and 13-step (Deep Learning) presentation decks aligned 100% with GUVI HCL evaluation rubrics.

---

## 🧠 The 8 Cognitive Science Learning Principles Integrated

| Principle | Implementation in NeuroForge |
|---|---|
| **01. Active Recall** | Retrieval-based testing via 30+ Viva Q&A items across NLP, Classical ML, LSTMs, Transformers, and CNNs. |
| **02. Interleaving** | Interleaved module navigation to force discrimination between sequence architectures. |
| **03. Desirable Difficulty** | Fill-in-gap code challenges per module before revealing full solutions. |
| **04. Dual Coding** | Concept explanations paired with dynamic sequence animations and hand-drawn mentor chalkboard sketches. |
| **05. Feynman Technique** | "Explain to a 5-Year-Old" simplified breakdown for every mathematical formula. |
| **06. Spaced Repetition** | Structured learning roadmap based on the Ebbinghaus forgetting curve. |
| **07. Elaborative Interrogation** | "Why This Works" rationale for every hyperparameter, metric, and architecture choice. |
| **08. Worked Example Effect** | Full production code walkthroughs (PEP-8 modular scripts) before hands-on practice. |

---

## 🛠️ Project Showcase & Ground-Truth Architecture

### 🎬 1. IMDb Movie Recommendation System
* **Data Sources**: IMDb 2024 Scraped Movies (5,000+ titles via Selenium) + Top 1000 Classics.
* **Vectorization**: `TfidfVectorizer(max_features=5000, ngram_range=(1,2))` + SOTA **Sentence-BERT (`all-MiniLM-L6-v2`)** dense embeddings.
* **Similarity Search**: `NearestNeighbors(metric='cosine', algorithm='brute')` for sub-100ms lookups.
* **Hybrid Scoring**: $\text{Score} = 0.7 \times (1 - \text{Cosine\_Dist}) + 0.3 \times \left(\frac{\text{Rating}}{5.0}\right)$.
* **Explainability (XAI)**: LIME-style keyword extraction via `_get_matching_keywords()` sparse matrix overlap.

### 📈 2. CryptoCast: Multi-Horizon Bitcoin Price Forecasting
* **Dataset**: ~5,000 daily BTC records (Aug 2010 – Mar 2024) from Yahoo Finance (`data/btc_data.csv`).
* **Sequence Window**: 60-day sliding window ($N, 60, 9$).
* **Target Variable**: Stationary Log Return $r = \ln(P[t+h] / P[t])$ — avoids path-dependent $R^2$ artifacts (R² Paradox).
* **Feature Engineering**: V1 (Reactive indicators: SMA, RSI, Volatility) vs V2 (Deterministic Satoshi Nakamoto whitepaper protocol features: `Block_Reward`, `Days_Since_Halving`, `Halving_Progress`).
* **5 PyTorch Architectures**: 1D-CNN, RNN, LSTM, Transformer, and **PatchTST** (with Reversible Instance Normalization - RevIN).
* **Leaderboard Results**:
  * **1-Day Horizon**: **LSTM** (MAE: $730.98, MAPE: **2.06%**, $R^2$: 0.9921)
  * **3-Day Horizon**: **PatchTST** (MAE: $1,347.56, MAPE: **3.85%**, $R^2$: 0.9768)
  * **7-Day Horizon**: **PatchTST** (MAE: $2,097.01, MAPE: **5.93%**, $R^2$: 0.9446)
* **Backtesting & Production**: Walk-Forward Validation (`src/step4_wfv.py`), 10-page Streamlit suite (`app.py`), and Groq LLM integration (`src/llm_insights.py`).

---

## ⏱️ Live Evaluation & Presentation Kit Suite

Aligned 100% with the **GUVI HCL Capstone Guidelines**:
* **7-Step Text-Extraction Deck**: Project Intro, Objective, Scraping, NLP Preprocessing, Storage, Recommendation Algorithm, Business Solution.
* **13-Step Model Building Deck**: Domain Intro, Problem Statement, Data Preprocessing, EDA, Feature Engineering, Stationarity (ADF Test), Scaling, Base Model, 5 DL Architectures, Metrics & R² Paradox, Final Model Selection, Limitations (Data Starvation & 2140 Protocol Boundary), Business Suggestions.
* **30-Min Evaluation Timings & 60-Mark Rubric**: Self Intro (3m), Walkthrough (12m), Viva (10m), Feedback (5m).
* **15-Question EDA Audit Guide**: Structured data exploration questions from the GUVI EDA Guide.

---

## 💻 Local Quickstart

No complex dependencies required for the platform dashboard — pure Vanilla HTML5, CSS3, and ES6 JavaScript:

```bash
# Clone the repository
git clone https://github.com/pravinkumardatafreak/NeuroForge.git
cd NeuroForge

# Start local HTTP server
python -m http.server 7800
```
Open **`http://localhost:7800`** in your browser.

---

## 📜 License & Citation

Distributed under the MIT License. Developed by **Pravin Kumar** for GUVI HCL Capstone & Advanced Data Science Portfolio.
