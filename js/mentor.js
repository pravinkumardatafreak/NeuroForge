/* ═══════════════════════════════════════════════════
   mentor.js — Interactive AI Mentor & LLM Model Suite
   Live Gemini & Groq LLM Inference · Built-In Offline Masterclasses
   Persona Modes · Real-time Code Teaching
═══════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY_GEMINI = 'nf_gemini_api_key';
  const STORAGE_KEY_GROQ = 'nf_groq_api_key';
  const STORAGE_KEY_PROVIDER = 'nf_llm_provider'; // 'gemini' | 'groq' | 'builtin'
  const DEFAULT_GEMINI_KEY = '';

  let currentPersona = 'teacher'; // 'teacher' | 'interviewer' | 'architect'
  let chatHistory = [
    {
      sender: 'mentor',
      text: `👋 **Hello Pravin! I am your AI Mentor & Technical Interview Coach.**

I am here to teach you concepts from first principles, review your code, and drill you with live interview questions.

Try asking:
- **"Teach me Python OOP"** — for a complete, structured masterclass with code blueprints.
- **"Explain SQL Window Functions with examples"** — to master \`ROW_NUMBER()\`, \`RANK()\`, and \`DENSE_RANK()\`.
- **"Mock interview me on Random Forest"** — for real interview trap questions.
- Or click any of the quick-action chips below!`
    }
  ];

  const PERSONAS = {
    teacher: {
      name: '👨‍🏫 Patient Concept Teacher',
      tag: 'Pedagogical & Analogy-Driven',
      systemPrompt: 'You are an elite Senior Data Science Mentor teaching Pravin Kumar R. Explain concepts using real-world analogies, step-by-step breakdowns, clean production Python code, and common interview gotchas.'
    },
    interviewer: {
      name: '💼 FAANG & Enterprise Lead Interviewer',
      tag: 'Rigorous & Trap-Question Probing',
      systemPrompt: 'You are a rigorous Technical Hiring Lead interviewing Pravin Kumar R for an AI/Data Scientist role. Challenge him with edge cases, demand first-principles mathematical justification, and grill him on potential data leakage and trade-offs.'
    },
    architect: {
      name: '🚀 Production ML Architect',
      tag: 'Scalability, Docker, PEP-8 & Latency',
      systemPrompt: 'You are a Principal ML Systems Architect. Focus on clean modular OOP code, sub-100ms latency, Docker containerization, REST API design, memory efficiency, and scalable engineering patterns.'
    }
  };

  // ── Offline Built-In Knowledge Engine ──
  function getBuiltinResponse(prompt) {
    const p = prompt.toLowerCase().trim();

    // 1. Python OOP Masterclass
    if (p.includes('python oop') || p.includes('teach me python oop') || p.includes('oop in python') || p.includes('object oriented')) {
      return `### 🐍 Masterclass: Python Object-Oriented Programming (OOP) for Data Scientists

Welcome Pravin! OOP is what separates a script-writer from a **production ML engineer**. At its heart, OOP organizes code into **reusable blueprints (Classes)** that package **Data (Attributes)** and **Actions (Methods)** together.

---

#### 1. The Blueprint Mental Model: Class vs. Object
- **Class**: The architectural blueprint (e.g., \`class ModelTrainer\`).
- **Object / Instance**: The actual physical building constructed from the blueprint (e.g., \`rf_trainer = ModelTrainer()\`).

\`\`\`python
class ModelTrainer:
    # Class attribute (shared by all instances)
    framework = "Scikit-Learn"

    # Constructor: Initializes instance attributes
    def __init__(self, model_name: str, max_depth: int = 10):
        self.model_name = model_name   # Instance attribute
        self.max_depth = max_depth
        self.is_trained = False        # State tracking

    # Instance method
    def train(self, X_train, y_train):
        print(f"Training {self.model_name} (depth={self.max_depth})...")
        self.is_trained = True
        return self
\`\`\`

---

#### 2. What is \`self\`? (The #1 Interview Question!)
Evaluators love asking: *"Why do we pass \`self\` as the first parameter in Python methods?"*
- In Python, \`self\` represents the **specific instance** of the class currently calling the method.
- When you call \`trainer1.train(X, y)\`, Python translates it under the hood to:
  \`ModelTrainer.train(trainer1, X, y)\`.
- Without \`self\`, Python wouldn't know whose attributes (\`trainer1\` vs \`trainer2\`) to read or modify!

---

#### 3. The 4 Pillars of OOP

##### A. Encapsulation (Protecting Internal State)
Use leading underscores to indicate private/protected attributes:
- \`_variable\`: Convention for internal/protected (please do not touch outside the class).
- \`__variable\`: Name mangling (Python renames it to \`_ClassName__variable\` to prevent accidental override).

\`\`\`python
class BankAccount:
    def __init__(self, owner: str, balance: float):
        self.owner = owner
        self.__balance = balance  # Private

    @property
    def balance(self) -> float:
        """Getter: read-only access"""
        return self.__balance

    def deposit(self, amount: float):
        if amount <= 0:
            raise ValueError("Deposit must be positive!")
        self.__balance += amount
\`\`\`

##### B. Inheritance (Code Reuse & Hierarchy)
Child classes inherit attributes and methods from Parent classes using \`super()\`:

\`\`\`python
class BaseForecaster:
    def __init__(self, horizon: int):
        self.horizon = horizon

    def evaluate(self, y_true, y_pred):
        # Shared evaluation logic across all models
        mae = abs(y_true - y_pred).mean()
        return {"MAE": mae}

class CryptoLSTMForecaster(BaseForecaster):
    def __init__(self, horizon: int, units: int = 50):
        super().__init__(horizon)  # Calls BaseForecaster.__init__
        self.units = units
\`\`\`

##### C. Polymorphism (Same Interface, Different Behavior)
Different classes can define the same method name, allowing interchangeable use:

\`\`\`python
class RidgePipeline:
    def fit(self, X, y): ...
    def predict(self, X): ...

class LightGBMPipeline:
    def fit(self, X, y): ...
    def predict(self, X): ...

# Polymorphism in action:
models = [RidgePipeline(), LightGBMPipeline()]
for m in models:
    m.fit(X_train, y_train)  # Same call, completely different math!
\`\`\`

##### D. Abstraction (Contracts via Abstract Base Classes)
Enforces that every subclass MUST implement specific methods using Python's \`abc\` module:

\`\`\`python
from abc import ABC, abstractmethod

class BaseDataCleaner(ABC):
    @abstractmethod
    def clean(self, df):
        """Every cleaner must implement this method!"""
        pass
\`\`\`

---

#### 4. Magic / Dunder Methods (\`__init__\`, \`__repr__\`, \`__len__\`, \`__call__\`)
Dunder ("Double Underscore") methods allow your custom Python objects to hook into native Python operations:

\`\`\`python
class SoilDataset:
    def __init__(self, images, labels):
        self.images = images
        self.labels = labels

    def __len__(self):
        # Enables len(dataset)
        return len(self.images)

    def __getitem__(self, idx):
        # Enables dataset[idx] indexing (like PyTorch Dataset!)
        return self.images[idx], self.labels[idx]

    def __repr__(self):
        # Clean debugging string
        return f"SoilDataset(samples={len(self.images)})"
\`\`\`

---

#### 5. How OOP is Applied in Real Data Science
1. **PyTorch Custom Datasets & Neural Networks**: Every PyTorch model inherits from \`torch.nn.Module\` and implements \`__init__()\` and \`forward()\`.
2. **Scikit-Learn Transformers**: You create production transformers by inheriting from \`BaseEstimator\` and \`TransformerMixin\`, implementing \`fit()\` and \`transform()\`.
3. **FastAPI & Pydantic**: In your **ERIA** and **OpenBIM** projects, requests are parsed using Pydantic OOP schemas (\`class BOQRequest(BaseModel):\`).

---

💡 **Practice Challenge for You:**
*Try writing a Python class called \`TimeSeriesScaler\` that takes \`scaler_type="minmax"\` in \`__init__\`, and provides \`fit()\` and \`transform()\` methods ensuring zero future data leakage. Ask me when you are ready to review it!*`;
    }

    // 2. SQL Window Functions
    if (p.includes('sql') && (p.includes('window') || p.includes('rank') || p.includes('row_number'))) {
      return `### 📊 Masterclass: SQL Window Functions (\`ROW_NUMBER\` vs \`RANK\` vs \`DENSE_RANK\`)

Window functions perform calculations across a set of table rows that are related to the current row **WITHOUT collapsing the rows** into a single output like \`GROUP BY\` does.

---

#### 1. The Core Syntax Anatomy
\`\`\`sql
SELECT 
    column_name,
    FUNCTION() OVER (
        PARTITION BY category_column   -- Divides rows into groups
        ORDER BY metric_column DESC     -- Sorts within each partition
    ) AS window_result
FROM table_name;
\`\`\`

---

#### 2. The Great Ranking Showdown

| Function | Behavior with Ties (Scores: 100, 90, 90, 80) | Gaps in Sequence? |
| :--- | :--- | :--- |
| **\`ROW_NUMBER()\`** | \`1, 2, 3, 4\` | **Never gaps** (strictly sequential) |
| **\`RANK()\`** | \`1, 2, 2, 4\` | **Has gaps** (skips after tie) |
| **\`DENSE_RANK()\`** | \`1, 2, 2, 3\` | **Never gaps** (next rank is immediate next integer) |

---

#### 3. Real-World Production Example (UberEats Schema)
*"Find the top 2 highest-spending customers per city:"*

\`\`\`sql
WITH RankedSpenders AS (
  SELECT 
    city,
    customer_id,
    SUM(order_total) AS total_spent,
    DENSE_RANK() OVER (
      PARTITION BY city 
      ORDER BY SUM(order_total) DESC
    ) AS spending_rank
  FROM orders
  GROUP BY city, customer_id
)
SELECT city, customer_id, total_spent
FROM RankedSpenders
WHERE spending_rank <= 2;
\`\`\`

---

#### 4. Time-Series Window Functions: \`LAG()\` & \`LEAD()\`
Used constantly in financial and telemetry modeling (like in **CryptoCast** and **Fitbit**):

\`\`\`sql
SELECT 
    timestamp,
    close_price,
    LAG(close_price, 1) OVER (ORDER BY timestamp) AS prev_day_price,
    -- Calculate daily return:
    (close_price - LAG(close_price, 1) OVER (ORDER BY timestamp)) 
      / LAG(close_price, 1) OVER (ORDER BY timestamp) AS daily_return
FROM btc_daily_prices;
\`\`\``;
    }

    // 3. Random Forest vs Gradient Boosting
    if (p.includes('random forest') || p.includes('xgboost') || p.includes('gradient boosting') || p.includes('bagging') || p.includes('boosting')) {
      return `### 🌲 Interview Drill: Random Forest (Bagging) vs Gradient Boosting (Boosting)

This is one of the most frequently asked questions in senior Data Science interviews. Let\\'s master the distinction from first principles.

---

#### 1. Core Mechanics
- **Random Forest (Bagging = Bootstrap Aggregating)**:
  - Trains multiple **independent, fully-grown decision trees in parallel**.
  - Each tree trains on a random bootstrap sample of rows + random subset of features (\`max_features = sqrt(p)\`).
  - Aggregation: Averages predictions (regression) or majority vote (classification).
  - Primary goal: **Reduces Variance** (fights overfitting).

- **Gradient Boosting (Boosting = Sequential Error Correction)**:
  - Trains shallow, weak decision trees (stumps) **sequentially**.
  - Each new tree is trained to predict the **pseudo-residuals (negative gradient of the loss function)** of all preceding trees:
    $$y - \\hat{y}_{t-1}$$
  - Primary goal: **Reduces Bias** (converts weak learners into a strong learner).

---

#### 2. Key Comparison Matrix

| Dimension | Random Forest | Gradient Boosting (XGBoost / LightGBM) |
| :--- | :--- | :--- |
| **Training Speed** | **Parallelizable** across all CPU cores | **Sequential** (tree $t$ depends on tree $t-1$) |
| **Tree Depth** | Deep trees (low bias, high individual variance) | Shallow trees (depth 3–6, high bias weak learners) |
| **Overfitting Risk** | Low (adding more trees never causes overfitting) | High (adding too many trees will overfit; requires early stopping) |
| **Sensitivity to Outliers** | Robust (bootstrap averaging dilutes outliers) | Highly sensitive (residuals amplify extreme outlier errors) |
| **Tuning Complexity** | Simple (n_estimators, max_depth, min_samples_split) | High (learning_rate $\\eta$, subsample, colsample_bytree, gamma) |

---

#### 3. Real Resume Grounding
- In your **Internship Studio Telemetry Regressor** ($R^2 = 0.9979$, MAE 3.78 kcal), Random Forest with 250 estimators was chosen because physiological biometric noise made Gradient Boosting prone to overfitting individual outlier heart spikes!`;
    }

    // 4. Default / General AI Response
    return `### 🤖 AI Mentor Response

You asked: **"${prompt}"**

Here is a structured explanation grounded in core Data Science and Software Engineering principles:

1. **First-Principles Concept**: 
   When designing data applications or answering interview questions, always anchor your thinking in the underlying mathematical objective, the data distribution, and real production constraints (latency, memory, zero leakage).

2. **Core Implementation Pattern**:
\`\`\`python
# Example production pattern in Python:
def process_data_pipeline(data: list) -> dict:
    \"\"\"
    Always include docstrings, type annotations, and defensive validation.
    \"\"\"
    if not data:
        raise ValueError("Data stream cannot be empty.")
    
    # Vectorized / functional transformation
    clean_data = [x for x in data if x is not None]
    return {
        "status": "success",
        "processed_count": len(clean_data)
    }
\`\`\`

3. **Interview Winning Strategy**:
   - Start with a direct 1-sentence executive definition.
   - Explain the mathematical/system tradeoff (e.g., Bias vs. Variance, Speed vs. Accuracy, RAM vs. Compute).
   - Anchor your answer in a real project you built (e.g., OpenBIM BOQ Engine, HuBMAP Tissue Segmentation, or CryptoCast).

---
💡 *Tip: Click **🎙️ Evaluate My Spoken Answer** above or tap the **🎙️** microphone button next to the input box to speak your answer aloud and get evaluated with **gemini-3.5-transcribe**!*`;
  }

  // ── Call Server-Side Gemini API (/api/mentor/chat) ──
  async function callServerGemini(prompt) {
    const persona = PERSONAS[currentPersona];
    const res = await fetch('./api/mentor/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        systemInstruction: persona.systemPrompt,
        temperature: currentPersona === 'interviewer' ? 0.3 : 0.6,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    if (!data.text) throw new Error('Empty response from server.');
    return data.text;
  }

  // ── Markdown Formatter ──
  function formatMarkdown(text) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Code blocks
    html = html.replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `
        <div class="mentor-code-box" style="margin:0.75rem 0;background:#0d1117;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:0.4rem 0.8rem;background:rgba(255,255,255,0.05);font-size:0.75rem;color:var(--text-muted)">
            <span>${lang || 'code'}</span>
            <button class="btn-sm accent" style="padding:0.15rem 0.5rem;font-size:0.7rem" onclick="copyMentorCode(this)">Copy</button>
          </div>
          <pre style="margin:0;padding:0.85rem;overflow-x:auto;font-family:'Fira Code',monospace;font-size:0.82rem;line-height:1.45;color:#e6edf3"><code>${code.trim()}</code></pre>
        </div>
      `;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.08);padding:0.15rem 0.35rem;border-radius:4px;color:var(--cyan);font-family:monospace;font-size:0.85em">$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h4 style="color:var(--cyan);margin:1rem 0 0.4rem 0;font-size:1.05rem">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 style="color:var(--violet);margin:1.2rem 0 0.5rem 0;font-size:1.2rem">$1</h3>');
    html = html.replace(/^# (.*$)/gim, '<h2 style="color:var(--amber);margin:1.4rem 0 0.6rem 0;font-size:1.35rem">$1</h2>');

    // Bold & Italics
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Linebreaks
    html = html.replace(/\n\n/g, '<br><br>');
    html = html.replace(/\n/g, '<br>');

    return html;
  }

  // ── Render Mentor Section ──
  window.renderMentorSection = function () {
    const el = document.getElementById('ai-mentor-content');
    if (!el) return;

    el.innerHTML = `
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem">
        <div>
          <h2>🤖 AI Mentor &amp; Voice Presentation Coach</h2>
          <p>Ask anything or speak your interview answers aloud for live transcription (<code>gemini-3.5-transcribe</code>) and tone &amp; presentation evaluation.</p>
        </div>
        <div style="display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap">
          <button class="btn-sm accent" onclick="openVoiceEvaluator()" style="font-weight:700;padding:0.45rem 0.95rem">🎙️ Evaluate My Spoken Answer</button>
        </div>
      </div>

      <!-- Persona Switcher & Status -->
      <div class="glass-card" style="padding:0.9rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;border-color:rgba(139,92,246,0.3)">
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
          <span style="font-size:0.82rem;font-weight:700;color:var(--text-secondary)">Active Persona:</span>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <button class="btn-sm ${currentPersona==='teacher'?'violet':'ghost'}" onclick="setMentorPersona('teacher',this)">👨‍🏫 Concept Teacher</button>
            <button class="btn-sm ${currentPersona==='interviewer'?'rose':'ghost'}" onclick="setMentorPersona('interviewer',this)">💼 Technical Interviewer</button>
            <button class="btn-sm ${currentPersona==='architect'?'accent':'ghost'}" onclick="setMentorPersona('architect',this)">🚀 Production Architect</button>
          </div>
        </div>
        <div style="font-size:0.78rem;color:var(--text-muted);font-style:italic">
          ${PERSONAS[currentPersona].tag}
        </div>
      </div>

      <!-- Chat Feed Card -->
      <div class="glass-card" style="display:flex;flex-direction:column;height:650px;padding:0;overflow:hidden;border-color:rgba(0,255,200,0.2)">
        
        <!-- Messages Area -->
        <div id="mentor-chat-messages" style="flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:1rem">
          ${chatHistory.map(m => renderMessageHTML(m)).join('')}
        </div>

        <!-- Quick Prompts Chips -->
        <div style="padding:0.6rem 1rem;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.06);display:flex;gap:0.5rem;overflow-x:auto;white-space:nowrap">
          <button class="tag cyan" style="cursor:pointer;border:none;background:rgba(0,255,200,0.1);padding:0.35rem 0.75rem;font-size:0.75rem" onclick="sendQuickPrompt('Teach me Python OOP')">🐍 Teach me Python OOP</button>
          <button class="tag violet" style="cursor:pointer;border:none;background:rgba(139,92,246,0.15);padding:0.35rem 0.75rem;font-size:0.75rem" onclick="sendQuickPrompt('Explain SQL Window Functions with real examples')">📊 SQL Window Functions</button>
          <button class="tag amber" style="cursor:pointer;border:none;background:rgba(245,158,11,0.15);padding:0.35rem 0.75rem;font-size:0.75rem" onclick="sendQuickPrompt('Mock interview me on Random Forest vs Gradient Boosting')">🌲 Random Forest vs XGBoost</button>
          <button class="tag green" style="cursor:pointer;border:none;background:rgba(34,197,94,0.15);padding:0.35rem 0.75rem;font-size:0.75rem" onclick="sendQuickPrompt('How do you explain the bias-variance tradeoff to a non-technical manager?')">💡 Explain Bias-Variance</button>
        </div>

        <!-- Input Area -->
        <div style="padding:1rem;background:rgba(15,23,42,0.6);border-top:1px solid rgba(255,255,255,0.1);display:flex;gap:0.6rem;align-items:flex-end">
          <button
            type="button"
            id="mentor-mic-btn"
            class="mentor-dictate-btn"
            onclick="toggleMentorMicInput(this)"
            title="Speak with microphone (transcribed via gemini-3.5-transcribe)"
            aria-label="Dictate with microphone"
          >🎙️</button>
          <textarea 
            id="mentor-user-input" 
            placeholder="Type or tap 🎙️ to speak your question or answer..." 
            rows="2"
            style="flex:1;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:0.75rem;color:#fff;font-family:inherit;font-size:0.88rem;resize:none;outline:none"
            onkeydown="if(event.key==='Enter' && !event.shiftKey){event.preventDefault();submitMentorQuestion();}"
          ></textarea>
          <button 
            id="mentor-submit-btn" 
            class="btn-primary" 
            onclick="submitMentorQuestion()"
            style="padding:0.75rem 1.4rem;height:52px;background:linear-gradient(135deg,#8b5cf6,#00ffc8);border:none;color:#0b0f19;font-weight:700;display:flex;align-items:center;gap:0.4rem"
          >
            <span>Ask</span> <span>➤</span>
          </button>
        </div>

      </div>
    `;

    // Scroll to bottom
    const msgBox = document.getElementById('mentor-chat-messages');
    if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;
  };

  function renderMessageHTML(msg) {
    const isMentor = msg.sender === 'mentor';
    return `
      <div style="display:flex;gap:0.85rem;align-items:flex-start;max-width:92%;${isMentor ? '' : 'align-self:flex-end;flex-direction:row-reverse'}">
        <div style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;background:${isMentor ? 'linear-gradient(135deg,#8b5cf6,#00ffc8)' : 'linear-gradient(135deg,#3b82f6,#6366f1)'};color:#000;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,0.3)">
          ${isMentor ? '🤖' : '👤'}
        </div>
        <div style="background:${isMentor ? 'rgba(30,41,59,0.7)' : 'rgba(99,102,241,0.2)'};border:1px solid ${isMentor ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.4)'};border-radius:12px;padding:0.9rem 1.15rem;font-size:0.86rem;line-height:1.55;color:var(--text-primary)">
          ${formatMarkdown(msg.text)}
        </div>
      </div>
    `;
  }

  window.setMentorPersona = function (pKey, btn) {
    currentPersona = pKey;
    document.querySelectorAll('#ai-mentor-content .btn-sm').forEach(b => {
      if (b.textContent.includes('Concept') || b.textContent.includes('Interviewer') || b.textContent.includes('Architect')) {
        b.className = 'btn-sm ghost';
      }
    });
    if (btn) btn.className = `btn-sm ${pKey==='teacher'?'violet':pKey==='interviewer'?'rose':'accent'}`;
    
    chatHistory.push({
      sender: 'mentor',
      text: `🔄 *Switched Persona to **${PERSONAS[pKey].name}** (${PERSONAS[pKey].tag}). Ready for your next question!*`
    });
    window.renderMentorSection();
  };

  window.sendQuickPrompt = function (text) {
    const input = document.getElementById('mentor-user-input');
    if (input) {
      input.value = text;
      submitMentorQuestion();
    }
  };

  window.submitMentorQuestion = async function () {
    const input = document.getElementById('mentor-user-input');
    const btn = document.getElementById('mentor-submit-btn');
    if (!input || !input.value.trim()) return;

    const query = input.value.trim();
    input.value = '';
    btn.disabled = true;
    btn.innerHTML = '<span>Thinking...</span>';

    chatHistory.push({ sender: 'user', text: query });
    window.renderMentorSection();

    let answer = '';
    try {
      answer = await callServerGemini(query);
    } catch (err) {
      answer = getBuiltinResponse(query);
    }

    chatHistory.push({ sender: 'mentor', text: answer });
    window.renderMentorSection();

    btn.disabled = false;
    btn.innerHTML = '<span>Ask</span> <span>➤</span>';
    window.addXP(20);
  };

  window.copyMentorCode = function (btn) {
    const code = btn.closest('.mentor-code-box').querySelector('code').innerText;
    navigator.clipboard.writeText(code);
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  };

})();

