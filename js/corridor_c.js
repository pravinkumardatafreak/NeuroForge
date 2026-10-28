/* ═════════════════════════════════════════════════════════════════════
   corridor_c.js — Corridor C: Product AI, Hyperlocal Geolocation & Distributed Systems
   Personalized War Room for Pravin Kumar R · Data Scientist & AI Engineer
   Focus: Applied AI, LLM Document Intelligence, PostgreSQL & FastAPI Microservices
═════════════════════════════════════════════════════════════════════ */

window.CORRIDOR_C_DATA = {
  platform: {
    name: 'Enterprise Product AI & Hyperlocal Distributed Systems',
    focus: 'Full-Stack AI Microservices, Hyperlocal Geolocation, Document Intelligence & PostgreSQL Architecture',
    leadEvaluator: 'Principal Systems Architect & Engineering Lead',
    coEvaluator: 'Senior Technical Lead',
    architectureDomains: [
      { name: 'Hyperlocal Discovery & Geolocation Engine', desc: 'Real-time spatial proximity search, live tracking & merchant discovery (Flutter, ASP.NET Core, C#, PostgreSQL, SQLite, Google Maps SDK).' },
      { name: 'AI Deal-Making & Boardroom Intelligence', desc: 'Enterprise RAG pipelines, automated deal memos, document drafting & multi-agent semantic evaluation.' },
      { name: 'Automated Profile & Resume Intelligence Engine', desc: 'Autonomous profile-to-document synthesis, structured schema extraction, and hallucination-free generation.' },
      { name: 'Geospatial Trend & Telemetry Analytics', desc: 'Sentiment mining, local trend detection, spatial clustering, and time-series telemetry.' }
    ]
  },
  candidate: {
    name: 'Pravin Kumar R',
    matchScore: '97.4 / 100',
    tier: 'Tier 1 · Prime Target Match',
    moat: 'Direct solution for Automated Document Generation (ERIA Pydantic/Critic) + Civil Spatial Moat (Geospatial Proximity) + Containerized FastAPI Endpoints'
  }
};

let cMockTimerInterval = null;
let cMockSecondsLeft = 45 * 60;
let cMockIsRunning = false;

window.renderCorridorCSection = function() {
  const container = document.getElementById('section-corridor-c');
  if (!container) return;

  const data = window.CORRIDOR_C_DATA;

  container.innerHTML = `
    <!-- HERO BANNER -->
    <div class="warroom-hero-banner glass-card" style="border-color:rgba(236,72,153,0.4);background:linear-gradient(135deg, rgba(236,72,153,0.08), rgba(99,102,241,0.08))">
      <div class="warroom-hero-top">
        <div class="warroom-hero-left">
          <div class="warroom-badge-row">
            <span class="warroom-pill" style="background:rgba(236,72,153,0.2);color:#f472b6;border:1px solid rgba(236,72,153,0.4)">🚀 CORRIDOR C WAR ROOM</span>
            <span class="warroom-pill pill-cyan">🌐 PRODUCT AI &amp; DISTRIBUTED SYSTEMS</span>
            <span class="warroom-pill pill-amber">⚡ HIGH-YIELD COCKPIT</span>
          </div>
          <h2 class="warroom-hero-title" style="color:#fff">Corridor C — Product AI, Hyperlocal Geolocation &amp; Distributed Systems</h2>
          <p class="warroom-hero-sub">
            Tailored exclusively for <strong>${data.candidate.name}</strong> to master technical evaluation rounds with 
            <strong>Principal Engineering Leads &amp; System Architects</strong>. Bridges your exact production codebases (ERIA, CryptoCast, Fitbit Telemetry, Alveris-Geo-AI) with enterprise platforms (Document Intelligence, Deal-Making RAG, Hyperlocal Maps, and Geospatial Analytics).
          </p>
        </div>
        <div class="warroom-hero-right">
          <div class="warroom-score-card" style="border-color:rgba(236,72,153,0.4)">
            <div class="warroom-score-val" style="color:#f472b6">${data.candidate.matchScore}</div>
            <div class="warroom-score-lbl">Rational Match Score</div>
            <div class="warroom-score-sub">${data.candidate.tier}</div>
          </div>
        </div>
      </div>

      <!-- KEY ALIGNMENT HIGHLIGHTS -->
      <div class="warroom-candidate-bar" style="border-color:rgba(236,72,153,0.25)">
        <div class="cand-item">
          <span class="cand-k">Target Role</span>
          <span class="cand-v" style="color:var(--cyan)">AI &amp; Machine Learning Engineer (JD 102)</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Evaluator Mindset</span>
          <span class="cand-v" style="color:#f472b6">LangGraph · RAG · FastAPI · PyTorch · Docker · Vector DBs</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Production Moat</span>
          <span class="cand-v" style="color:var(--amber)">ERIA Pydantic/Critic Gate + CryptoCast Temporal Moat + FastAPI Microservices</span>
        </div>
        <div class="cand-item">
          <span class="cand-k">Execution Focus</span>
          <span class="cand-v" style="color:var(--green)">Zero Hesitation on Multi-Agent RAG, Vector Search &amp; Concurrency</span>
        </div>
      </div>
    </div>

    <!-- TABS -->
    <div class="warroom-nav-tabs">
      <button class="z-tab-btn active" onclick="switchCorridorCTab('intel', this)">🕵️ Systems Mindset &amp; Architecture</button>
      <button class="z-tab-btn" onclick="switchCorridorCTab('python', this)">🐍 Emergency Python Drills (Weakness Fix)</button>
      <button class="z-tab-btn" onclick="switchCorridorCTab('sql', this)">🐘 Emergency PostgreSQL Drills (Weakness Fix)</button>
      <button class="z-tab-btn" onclick="switchCorridorCTab('simulator', this)">🎙️ 45-Min Timed Live Simulator</button>
      <button class="z-tab-btn" onclick="switchCorridorCTab('scripts', this)">📜 Word-for-Word Spoken Scripts</button>
    </div>

    <!-- TAB CONTENTS -->
    <div id="corridor-c-tab-content" style="margin-top:1.5rem">
      <!-- Dynamic render -->
    </div>
  `;

  renderCorridorCTab('intel');
};

window.switchCorridorCTab = function(tabName, btn) {
  document.querySelectorAll('#section-corridor-c .z-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCorridorCTab(tabName);
};

function renderCorridorCTab(tabName) {
  const content = document.getElementById('corridor-c-tab-content');
  if (!content) return;

  if (tabName === 'intel') {
    content.innerHTML = getCorridorCIntelHTML();
  } else if (tabName === 'python') {
    content.innerHTML = getCorridorCPythonHTML();
  } else if (tabName === 'sql') {
    content.innerHTML = getCorridorCSQLHTML();
  } else if (tabName === 'simulator') {
    content.innerHTML = getCorridorCSimulatorHTML();
  } else if (tabName === 'scripts') {
    content.innerHTML = getCorridorCScriptsHTML();
  }
}

/* ═════════════════════════════════════════════════════════════════════
   TAB 1: ARCHITECTURE & EVALUATOR MINDSET
═════════════════════════════════════════════════════════════════════ */
function getCorridorCIntelHTML() {
  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <!-- EVALUATOR MINDSET DOSSIER -->
      <div class="glass-card" style="border-left:4px solid #f472b6">
        <h3 style="color:#f472b6;margin-bottom:0.75rem">🎯 1. Systems Dossier: Understanding the Principal Engineering Lead's Mindset</h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1rem">
          Technical evaluation leads at product companies managing full-stack mobile &amp; cloud ecosystems think like <strong>pragmatic systems architects</strong>. 
          Their core stack commonly spans <strong>ASP.NET Core (C#), PostgreSQL, SQLite, Flutter, and cloud microservices</strong>.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-bottom:1rem">
          <div style="background:rgba(0,0,0,0.3);padding:1rem;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,0.06)">
            <h4 style="color:var(--cyan);font-size:0.85rem;margin-bottom:0.4rem">💡 What Evaluators Respect (How to Stand Out)</h4>
            <ul style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5;padding-left:1.2rem">
              <li><strong>Clean API Contracts</strong>: Clear Pydantic DTOs matching strongly-typed backend models with zero schema surprises.</li>
              <li><strong>Sub-500ms Latency</strong>: Respecting the mobile UI thread (Flutter) so AI processing doesn't freeze user interaction.</li>
              <li><strong>Pragmatic Error Handling</strong>: Graceful fallbacks and circuit breakers when external LLM endpoints experience latency spikes.</li>
              <li><strong>SQL Indexing &amp; Query Efficiency</strong>: Understanding query execution plans, indexes, and why you never perform full table scans on large tables.</li>
            </ul>
          </div>

          <div style="background:rgba(0,0,0,0.3);padding:1rem;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,0.06)">
            <h4 style="color:#f43f5e;font-size:0.85rem;margin-bottom:0.4rem">⚠️ What Evaluators Penalize (Avoid at All Costs)</h4>
            <ul style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5;padding-left:1.2rem">
              <li><strong>Hand-wavy AI hype</strong>: Saying "I prompted ChatGPT" without explaining chunking, latency, token budgets, or validation.</li>
              <li><strong>Ignoring Data Persistence</strong>: Building ML in a vacuum without knowing how models read and write to PostgreSQL databases.</li>
              <li><strong>Overcomplicating simple logic</strong>: Reaching for a 70B LLM when a fast regex, in-memory set, or SQL query does the job in 2 milliseconds.</li>
            </ul>
          </div>
        </div>

        <div style="background:rgba(236,72,153,0.1);padding:1rem;border-radius:var(--radius-sm);border:1px solid rgba(236,72,153,0.3)">
          <div style="font-weight:700;color:#f472b6;font-size:0.88rem;margin-bottom:0.3rem">🔥 The Core Engineering Challenge: Profile-to-Document Synthesis &amp; Schema Drift</div>
          <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5">
            When generating structured documents, resumes, or financial memos from heterogeneous user profiles, the biggest engineering roadblock is <strong>schema drift</strong>—raw LLMs hallucinating unexpected JSON keys or dropping nested work histories.<br/>
            <strong>Your Strategic Positioning:</strong> In your <strong>ERIA</strong> project, you built an autonomous 4-agent pipeline that extracted unstructured data into strict Pydantic JSON contracts with a Critic LLM evaluation gate ($\ge 8.5/10$). You have already solved the exact problem of schema drift, profile data extraction, and structured synthesis. When you explain this, evaluators recognize an engineer who can deliver production value immediately.
          </p>
        </div>
      </div>

      <!-- PRODUCT MAPPING -->
      <div class="glass-card">
        <h3 style="color:var(--cyan);margin-bottom:0.75rem">🗺️ 2. Enterprise Product Archetypes &larr;&rarr; Pravin's Resume Crosswalk</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1rem">
          Every project on your resume directly maps into modern enterprise product domains:
        </p>

        <div style="overflow-x:auto">
          <table style="width:100%;font-size:0.78rem;border-collapse:collapse;color:var(--text-secondary)">
            <thead>
              <tr style="border-bottom:1px solid var(--border);color:var(--text-primary);text-align:left">
                <th style="padding:0.6rem">Product Domain</th>
                <th style="padding:0.6rem">Core Stack</th>
                <th style="padding:0.6rem">Your Resume Project</th>
                <th style="padding:0.6rem">Your Value Delivery Angle</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
                <td style="padding:0.6rem;font-weight:700;color:#f472b6">Automated Profile &amp; Resume Engine</td>
                <td style="padding:0.6rem">Flutter, C#, PostgreSQL, LLM</td>
                <td style="padding:0.6rem;font-weight:600;color:var(--cyan)">ERIA (Multi-Agent RAG)</td>
                <td style="padding:0.6rem">Pydantic JSON schema contracts prevent UI breaking from LLM hallucinated keys; Critic gate scores completeness before DB save.</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
                <td style="padding:0.6rem;font-weight:700;color:var(--violet)">Deal-Making &amp; Boardroom RAG</td>
                <td style="padding:0.6rem">AI Boardroom, Deal Memos, RAG</td>
                <td style="padding:0.6rem;font-weight:600;color:var(--violet)">ERIA + DistilRoBERTa</td>
                <td style="padding:0.6rem">4-agent DAG (Analyst &rarr; Critic &rarr; Refiner &rarr; Strategist) evaluates pitch decks against investor investment theses.</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
                <td style="padding:0.6rem;font-weight:700;color:var(--amber)">Hyperlocal Discovery &amp; Live Tracking</td>
                <td style="padding:0.6rem">Flutter, ASP.NET, Maps, Geolocation</td>
                <td style="padding:0.6rem;font-weight:600;color:var(--amber)">Alveris-Geo-AI + Civil Moat</td>
                <td style="padding:0.6rem">Geospatial bounding boxes, Haversine proximity queries, and spatial coordinate normalization for low-latency merchant discovery.</td>
              </tr>
              <tr>
                <td style="padding:0.6rem;font-weight:700;color:var(--green)">Geospatial Trends &amp; Telemetry</td>
                <td style="padding:0.6rem">Local Trends, Time-Series, C#</td>
                <td style="padding:0.6rem;font-weight:600;color:var(--green)">CryptoCast &amp; Fitbit Telemetry</td>
                <td style="padding:0.6rem">Time-series trend forecasting (Walk-Forward Validation) + K-Means clustering of merchant engagement tiers deployed via FastAPI Docker.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- MASTER GAME PLAN -->
      <div class="glass-card" style="border-left:4px solid var(--green)">
        <h3 style="color:var(--green);margin-bottom:0.75rem">⚡ 3. The 3-Pillar Strategy for Live Interviews</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem">
          <div>
            <div style="font-weight:700;color:var(--cyan);font-size:0.85rem;margin-bottom:0.3rem">Pillar 1: Anchor on Production Integration</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5">
              Explain that in your Internship Studio and ERIA projects, you never left models as Jupyter notebooks. You containerized with <strong>Docker</strong>, exposed clean <strong>FastAPI REST endpoints</strong>, and wrote <strong>Pydantic schema definitions</strong> designed specifically for backend teams (like C#/ASP.NET Core) to consume easily.
            </p>
          </div>
          <div>
            <div style="font-weight:700;color:#f472b6;font-size:0.85rem;margin-bottom:0.3rem">Pillar 2: Eliminate Python &amp; SQL Hesitation</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5">
              Do not worry about memorizing 500 LeetCode algorithms. Practice the <strong>6 Python drills</strong> and <strong>6 PostgreSQL drills</strong> in the next tabs. Technical leads test clean syntax, dict/list handling, window functions (<code>DENSE_RANK</code>, <code>ROW_NUMBER</code>), and query readability.
            </p>
          </div>
          <div>
            <div style="font-weight:700;color:var(--amber);font-size:0.85rem;margin-bottom:0.3rem">Pillar 3: The Collaborative Problem Solver</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5">
              When given a problem, <strong>talk out loud before typing</strong>: <em>"First, I want to clarify edge cases (empty input, null values). My approach will be O(N) time using a hash map/dictionary to keep API response times minimal."</em> Senior engineers love candidates who think in systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ═════════════════════════════════════════════════════════════════════
   TAB 2: EMERGENCY PYTHON DRILLS
═════════════════════════════════════════════════════════════════════ */
function getCorridorCPythonHTML() {
  const drills = [
    {
      id: 'cp1',
      title: 'Drill P1: Pydantic Schema Validator & Safe Parser for Profile Data',
      context: 'Document & Profile Generation Challenge: Raw profile JSON arriving from mobile clients or third-party sources has missing fields, wrong types, or malformed strings.',
      problem: 'Write a Python function using Pydantic (or pure dataclass/dict logic) that takes a raw, messy dictionary representing a candidate profile and safely validates it into a clean schema with default values, trimming whitespace, and handling missing work experiences without crashing.',
      whiteboardScript: '"In production systems where mobile clients send unstructured profile data, we cannot allow null pointer exceptions. I use Pydantic models with field validators and default factories to guarantee deterministic schemas for the backend API."',
      code: `from typing import List, Optional
from pydantic import BaseModel, Field, field_validator

class WorkExperience(BaseModel):
    company: str
    role: str
    years: float = Field(default=0.0, ge=0.0)

class CandidateProfile(BaseModel):
    full_name: str
    email: str
    skills: List[str] = Field(default_factory=list)
    experience: List[WorkExperience] = Field(default_factory=list)
    summary: Optional[str] = "No summary provided."

    @field_validator('full_name')
    @classmethod
    def clean_name(cls, v: str) -> str:
        cleaned = v.strip().title()
        if not cleaned:
            raise ValueError("Candidate name cannot be empty or whitespace.")
        return cleaned

    @field_validator('skills')
    @classmethod
    def deduplicate_skills(cls, skills: List[str]) -> List[str]:
        # Clean and deduplicate while preserving lowercased uniqueness
        seen = set()
        clean = []
        for s in skills:
            norm = s.strip().lower()
            if norm and norm not in seen:
                seen.add(norm)
                clean.append(s.strip())
        return clean

# Example Execution & Test:
raw_payload = {
    "full_name": "   pravin kumar r  ",
    "email": "pravinrajavel@gmail.com",
    "skills": ["Python", "SQL", "python", "FastAPI", "  SQL  "],
    "experience": [{"company": "Internship Studio", "role": "Data Science Intern", "years": 0.25}]
}

validated = CandidateProfile(**raw_payload)
print(validated.model_dump_json(indent=2))`,
      traps: 'Failing on missing keys (use dict.get() or Pydantic defaults); not cleaning whitespaces; casing inconsistencies in skill matching ("python" vs "Python").'
    },
    {
      id: 'cp2',
      title: 'Drill P2: Sliding-Window Document Chunker with Sentence Boundary Preservation',
      context: 'Document Intelligence & Enterprise RAG: splitting large text documents into overlapping chunks without chopping words or sentences in half.',
      problem: 'Implement a Python function `chunk_text(text: str, max_words: int = 100, overlap: int = 20) -> List[str]` that splits a long text document into chunks of at most `max_words`, overlapping by `overlap` words, without truncating sentences mid-word.',
      whiteboardScript: '"Fixed-character chunking breaks words and disrupts embedding semantics. A sliding window over word tokens with an overlap buffer ensures contextual continuity across chunk boundaries for our vector store."',
      code: `def chunk_text(text: str, max_words: int = 100, overlap: int = 20):
    if not text or not text.strip():
        return []
    
    words = text.split()
    if len(words) <= max_words:
        return [" ".join(words)]
    
    chunks = []
    step = max_words - overlap
    if step <= 0:
        raise ValueError("Overlap must be strictly smaller than max_words.")
        
    for i in range(0, len(words), step):
        chunk_words = words[i:i + max_words]
        chunks.append(" ".join(chunk_words))
        if i + max_words >= len(words):
            break
            
    return chunks

# Test verification:
sample = "Data Scientist with Civil Engineering background. " * 30
chunks = chunk_text(sample, max_words=20, overlap=5)
print(f"Total Chunks: {len(chunks)}, Chunk 0 length: {len(chunks[0].split())} words")`,
      traps: 'Infinite loop if step <= 0; empty text edge case; duplicate chunks on the final iteration.'
    },
    {
      id: 'cp3',
      title: 'Drill P3: High-Performance In-Memory Skills Matcher (Jaccard & Frequency)',
      context: 'Used in Profile Matching Engines to match candidate profiles against job requirements or investor criteria.',
      problem: 'Given a list of job required skills and a candidate profile skill list, write an O(N) function that calculates: (1) Missing skills, (2) Match Percentage, and (3) Jaccard Similarity coefficient.',
      whiteboardScript: '"Using Python sets gives us O(1) membership lookups and O(N+M) union and intersection operations, ensuring sub-millisecond evaluation even across thousands of skill tags."',
      code: `def calculate_skills_match(job_skills: list, candidate_skills: list) -> dict:
    # Normalize by trimming and lowercasing
    req_set = {s.strip().lower() for s in job_skills if s.strip()}
    cand_set = {s.strip().lower() for s in candidate_skills if s.strip()}
    
    if not req_set:
        return {"match_score": 100.0, "missing_skills": [], "jaccard_similarity": 1.0}
        
    matched = req_set.intersection(cand_set)
    missing = req_set.difference(cand_set)
    union = req_set.union(cand_set)
    
    match_pct = round((len(matched) / len(req_set)) * 100, 2)
    jaccard = round(len(matched) / len(union), 4) if union else 0.0
    
    return {
        "matched_skills": sorted(list(matched)),
        "missing_skills": sorted(list(missing)),
        "match_percentage": match_pct,
        "jaccard_similarity": jaccard
    }

# Test:
job = ["Python", "SQL", "PostgreSQL", "FastAPI", "Docker", "PyTorch"]
cand = ["python", "SQL", "FastAPI", "Docker", "Scikit-Learn"]
print(calculate_skills_match(job, cand))`,
      traps: 'Division by zero if req_set or union is empty; case sensitivity differences ("SQL" vs "sql").'
    },
    {
      id: 'cp4',
      title: 'Drill P4: Production Async FastAPI REST Endpoint with Timeout & DTO',
      context: 'Backend Integration: How your Python ML microservices communicate with enterprise ASP.NET Core backends or mobile Flutter clients.',
      problem: 'Write a production FastAPI endpoint with an async handler that takes an inference request, validates input via Pydantic, applies an asynchronous timeout (e.g. 500ms), and returns structured JSON with execution telemetry.',
      whiteboardScript: '"In an asynchronous web framework like FastAPI, long-running sync CPU tasks can block the asyncio event loop. We use async/await with asyncio.wait_for to enforce strict SLAs and keep the backend unblocked."',
      code: `import asyncio
import time
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="Enterprise AI Microservice", version="1.0.0")

class InferenceRequest(BaseModel):
    user_id: str
    query_text: str = Field(..., min_length=3, max_length=500)

class InferenceResponse(BaseModel):
    status: str
    user_id: str
    processed_result: str
    latency_ms: float

async def mock_llm_inference(text: str) -> str:
    # Simulating async I/O call to model/vector database
    await asyncio.sleep(0.08)  # 80ms
    return f"Synthesized Summary for: {text[:30]}..."

@app.post("/api/v1/synthesize", response_model=InferenceResponse)
async def synthesize_document(payload: InferenceRequest):
    start = time.perf_counter()
    try:
        # Enforce 500ms SLA timeout
        result = await asyncio.wait_for(mock_llm_inference(payload.query_text), timeout=0.5)
        duration_ms = round((time.perf_counter() - start) * 1000, 2)
        return InferenceResponse(
            status="success",
            user_id=payload.user_id,
            processed_result=result,
            latency_ms=duration_ms
        )
    except asyncio.TimeoutError:
        raise HTTPException(
            status_code=status.HTTP_504_GATEWAY_TIMEOUT,
            detail="AI Inference exceeded 500ms SLA threshold."
        )
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))`,
      traps: 'Running blocking `time.sleep()` instead of `asyncio.sleep()`; not catching `asyncio.TimeoutError`; leaking raw traceback strings to clients.'
    },
    {
      id: 'cp5',
      title: 'Drill P5: Memory-Efficient Geolocation Stream Parser with Generators',
      context: 'Hyperlocal Live Tracking: ingesting millions of latitude/longitude tracking points without blowing up server RAM.',
      problem: 'Write a Python generator function `parse_geo_stream(file_obj, min_accuracy: float = 10.0)` that yields valid `(user_id, lat, lon)` tuples one by one, skipping corrupted lines without loading the whole file into memory.',
      whiteboardScript: '"Using a generator allows us to stream gigabytes of GPS telemetry records with O(1) memory overhead because records are evaluated lazily on demand."',
      code: `import io

def parse_geo_stream(file_obj, min_accuracy: float = 10.0):
    """
    Yields (user_id, lat, lon) tuples from a line-delimited GPS log.
    Expected format: user_id,lat,lon,accuracy
    """
    for line_num, line in enumerate(file_obj, 1):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split(",")
        if len(parts) != 4:
            continue  # Corrupted record, skip
        try:
            uid, lat_s, lon_s, acc_s = parts
            lat, lon, acc = float(lat_s), float(lon_s), float(acc_s)
            
            # Validate coordinates & accuracy threshold
            if -90.0 <= lat <= 90.0 and -180.0 <= lon <= 180.0 and acc <= min_accuracy:
                yield (uid.strip(), lat, lon)
        except ValueError:
            continue  # Non-numeric coordinate, skip safely

# Test with in-memory stream:
dummy_data = """usr_1,12.9716,77.5946,5.2
usr_2,999.0,77.0,2.1
usr_3,13.0827,80.2707,8.4
corrupted_line_without_commas
usr_4,11.0168,76.9558,25.0"""

stream = io.StringIO(dummy_data)
results = list(parse_geo_stream(stream, min_accuracy=10.0))
print("Valid Parsed GPS Records:", results)`,
      traps: 'Loading file using `f.readlines()` (loads entire file into memory); unhandled ValueError on malformed float strings; invalid coordinate bounds.'
    },
    {
      id: 'cp6',
      title: 'Drill P6: Fast In-Memory LRU Cache for Embeddings & LLM Responses',
      context: 'Cost & Latency Optimization: repeated profile generation or document summary queries should hit cache instead of paying model latency.',
      problem: 'Implement an LRU (Least Recently Used) Cache class in Python with `get(key)` and `put(key, value)` operating in O(1) time complexity using `collections.OrderedDict`.',
      whiteboardScript: '"In an LLM pipeline, caching frequent prompt embeddings saves 40%+ on API bills and drops latency from 800ms to 0.1ms. OrderedDict gives us O(1) hash lookups and O(1) doubly-linked list eviction."',
      code: `from collections import OrderedDict

class LRUEmbeddingCache:
    def __init__(self, capacity: int = 100):
        if capacity <= 0:
            raise ValueError("Capacity must be positive.")
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: str):
        if key not in self.cache:
            return None
        # Move accessed key to end to mark as recently used
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: str, value: any):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Pop least recently used item (first item)
            self.cache.popitem(last=False)

# Test:
lru = LRUEmbeddingCache(capacity=2)
lru.put("profile_1", [0.12, 0.45])
lru.put("profile_2", [0.88, 0.11])
print(lru.get("profile_1"))  # Returns vector, moves profile_1 to recent
lru.put("profile_3", [0.33, 0.99])  # Evicts profile_2!
print(lru.get("profile_2"))  # None (Evicted)
print(lru.get("profile_3"))  # Found`,
      traps: 'Evicting the newest instead of oldest (`last=False` is required); not marking an item as recent during `get()`.'
    }
  ];

  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <!-- MENTAL MODEL -->
      <div class="glass-card" style="border-left:4px solid var(--cyan)">
        <h3 style="color:var(--cyan);margin-bottom:0.5rem">🧠 The 5-Step Whiteboard Protocol (How to Never Freeze)</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.75rem">
          When asked to write Python live on a screen share, follow this exact sequence:
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0.75rem;font-size:0.78rem">
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--cyan)">1. Clarify Inputs &amp; Outputs</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem">"Can inputs be None, empty, or contain duplicates?"</p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--violet)">2. State Complexity Upfront</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem">"I will target O(N) time using a dictionary/set to avoid an O(N²) nested loop."</p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--amber)">3. Write Type Hints</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem"><code>def solve(data: List[str]) -> dict:</code> proves production maturity.</p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--green)">4. Handle Edge Cases First</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem">Guard clauses at the top: <code>if not data: return {}</code></p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:#f472b6">5. Dry Run with Sample</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem">Trace line by line with a 2-element test case before saying "Done".</p>
          </div>
        </div>
      </div>

      <!-- DRILLS LIST -->
      <div style="display:flex;flex-direction:column;gap:1.25rem">
        ${drills.map((d, idx) => `
          <div class="glass-card" style="border:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.6rem;flex-wrap:wrap;gap:0.5rem">
              <div>
                <span class="tag cyan" style="margin-right:0.5rem">PYTHON DRILL ${idx + 1}</span>
                <span style="font-weight:700;font-size:0.95rem;color:var(--text-primary)">${d.title}</span>
              </div>
              <button class="btn-ghost" style="padding:0.25rem 0.6rem;font-size:0.72rem" onclick="toggleCorridorCCode('${d.id}')">Toggle Solution Code</button>
            </div>
            
            <p style="font-size:0.78rem;color:var(--amber);margin-bottom:0.4rem"><strong>📍 Production Relevance:</strong> ${d.context}</p>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.6rem"><strong>Task:</strong> ${d.problem}</p>
            
            <div style="background:rgba(0,255,200,0.05);padding:0.6rem 0.8rem;border-radius:var(--radius-sm);margin-bottom:0.6rem;border-left:3px solid var(--cyan)">
              <div style="font-size:0.72rem;font-weight:700;color:var(--cyan);text-transform:uppercase">🗣️ What to Say Out Loud (Spoken Script):</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);font-style:italic">${d.whiteboardScript}</div>
            </div>

            <div id="code-${d.id}" style="display:none;margin-top:0.75rem">
              <pre style="background:#090d16;padding:0.85rem;border-radius:var(--radius-sm);overflow-x:auto;font-family:var(--font-mono);font-size:0.75rem;color:#e2e8f0;border:1px solid rgba(255,255,255,0.1)"><code>${escapeHTML(d.code)}</code></pre>
              <div style="margin-top:0.5rem;font-size:0.72rem;color:#f43f5e"><strong>⚠️ Interviewer Traps:</strong> ${d.traps}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ═════════════════════════════════════════════════════════════════════
   TAB 3: EMERGENCY POSTGRESQL DRILLS
═════════════════════════════════════════════════════════════════════ */
function getCorridorCSQLHTML() {
  const sqlDrills = [
    {
      id: 'cs1',
      title: 'Drill S1: Hyperlocal Proximity Discovery (Haversine Distance in PostgreSQL)',
      context: 'Hyperlocal discovery core query: finding all active local stores within a 5 km radius of a user\'s current GPS coordinate.',
      problem: 'Write a PostgreSQL query given user coordinates ($lat, $lon) that calculates the distance in kilometers to merchants in a `merchants` table and filters for merchants within 5 km, ordered by closest first.',
      whiteboardScript: '"For hyperlocal discovery without heavy GIS extensions, we use the spherical Haversine formula in PostgreSQL. In high-scale production, we would index geometry columns using PostGIS GiST, but a mathematical CTE provides immediate portability."',
      code: `-- Schema: merchants(id, name, latitude, longitude, is_active, rating)
-- User location: 12.9716 (lat), 77.5946 (lon)

WITH merchant_distances AS (
    SELECT 
        id,
        name,
        rating,
        latitude,
        longitude,
        -- Haversine formula: 6371 km earth radius
        ROUND(
            (6371 * ACOS(
                LEAST(1.0, GREATEST(-1.0,
                    COS(RADIANS(12.9716)) * COS(RADIANS(latitude)) * 
                    COS(RADIANS(longitude) - RADIANS(77.5946)) + 
                    SIN(RADIANS(12.9716)) * SIN(RADIANS(latitude))
                ))
            ))::numeric, 2
        ) AS distance_km
    FROM merchants
    WHERE is_active = TRUE
)
SELECT id, name, rating, distance_km
FROM merchant_distances
WHERE distance_km <= 5.0
ORDER BY distance_km ASC
LIMIT 20;`,
      traps: 'ACOS floating point rounding errors exceeding 1.0 (causing NaN without LEAST/GREATEST); forgetting to convert degrees to radians; not filtering `is_active = TRUE` first.'
    },
    {
      id: 'cs2',
      title: 'Drill S2: Profile Revision Deduplication (Latest Record per User)',
      context: 'Document Intelligence Engine: Users save multiple drafts of their resume/profile data. We need to query the latest valid profile for each candidate without losing historical revisions.',
      problem: 'Given a `candidate_profiles` table with columns `(id, user_id, profile_json, updated_at, status)`, write a query using a Window Function that retrieves the single latest published profile for every user.',
      whiteboardScript: '"To retrieve the most recent record per group without doing an inefficient self-join, we partition by user_id and order by updated_at descending using ROW_NUMBER(). Then we filter where rn = 1."',
      code: `-- Schema: candidate_profiles(id, user_id, full_name, profile_json, updated_at, status)

WITH ranked_profiles AS (
    SELECT 
        id,
        user_id,
        full_name,
        profile_json,
        updated_at,
        ROW_NUMBER() OVER (
            PARTITION BY user_id 
            ORDER BY updated_at DESC
        ) AS rn
    FROM candidate_profiles
    WHERE status = 'PUBLISHED'
)
SELECT 
    user_id,
    id AS latest_profile_id,
    full_name,
    profile_json,
    updated_at AS last_updated
FROM ranked_profiles
WHERE rn = 1;`,
      traps: 'Using `RANK()` instead of `ROW_NUMBER()` (RANK can produce duplicate 1s if timestamps match); forgetting the outer CTE wrapper (window functions cannot be placed directly in WHERE clauses).'
    },
    {
      id: 'cs3',
      title: 'Drill S3: Top 3 Rated Merchants per Category (DENSE_RANK)',
      context: 'Hyperlocal home screen: displaying the top 3 best-rated local businesses in each category (Groceries, Dining, Services).',
      problem: 'Write a query that ranks merchants within each `category_id` by `rating` descending. Return only the top 3 merchants per category, handling ties gracefully without skipping ranks.',
      whiteboardScript: '"We use DENSE_RANK() rather than RANK() because if two merchants tie for 1st place, the next merchant receives rank 2 rather than skipping to rank 3, ensuring our UI always gets top candidate cards."',
      code: `-- Schema: merchants(id, name, category_id, rating, total_reviews)

WITH ranked_merchants AS (
    SELECT 
        m.id,
        m.name,
        c.category_name,
        m.rating,
        m.total_reviews,
        DENSE_RANK() OVER (
            PARTITION BY m.category_id 
            ORDER BY m.rating DESC, m.total_reviews DESC
        ) AS rank_in_category
    FROM merchants m
    JOIN categories c ON m.category_id = c.id
    WHERE m.is_active = TRUE AND m.total_reviews >= 5
)
SELECT 
    category_name,
    name AS merchant_name,
    rating,
    total_reviews,
    rank_in_category
FROM ranked_merchants
WHERE rank_in_category <= 3
ORDER BY category_name, rank_in_category;`,
      traps: 'Not including total_reviews as a secondary tie-breaker; forgetting the minimum review threshold filter (a store with 1 five-star review beating a store with 500 4.9-star reviews).'
    },
    {
      id: 'cs4',
      title: 'Drill S4: Inactivity Gaps & User Session Churn Detection (LAG / LEAD)',
      context: 'Geospatial User Analytics: detecting when a user goes inactive for more than 7 consecutive days.',
      problem: 'Given a `user_app_opens` table with `(user_id, opened_at)`, write a query that calculates the gap in days between consecutive app opens for each user, and identifies users with gaps >= 7 days.',
      whiteboardScript: '"LAG() allows us to access the previous record\'s timestamp within the user partition, letting us compute time deltas between events in a single scan without self-joins."',
      code: `-- Schema: user_app_opens(id, user_id, opened_at)

WITH session_gaps AS (
    SELECT 
        user_id,
        opened_at,
        LAG(opened_at) OVER (
            PARTITION BY user_id 
            ORDER BY opened_at ASC
        ) AS previous_open,
        -- Calculate difference in days
        ROUND(
            EXTRACT(EPOCH FROM (opened_at - LAG(opened_at) OVER (
                PARTITION BY user_id ORDER BY opened_at ASC
            ))) / 86400, 1
        ) AS gap_days
    FROM user_app_opens
)
SELECT 
    user_id,
    previous_open,
    opened_at AS current_open,
    gap_days
FROM session_gaps
WHERE gap_days >= 7.0
ORDER BY gap_days DESC;`,
      traps: 'Subtracting timestamps without handling NULL on the first event; assuming date subtraction returns float without using `EXTRACT(EPOCH ...)` in PostgreSQL.'
    },
    {
      id: 'cs5',
      title: 'Drill S5: Deal-Making Platform Sector Overlap Matching',
      context: 'Deal-making & investment matching: connecting startups looking for funding with investors whose investment sectors overlap.',
      problem: 'Given `startups(id, name, sectors)` where `sectors` is a text array `text[]` (e.g. `ARRAY[\'FinTech\', \'AI\']`) and `investors(id, name, target_sectors)`, write a PostgreSQL query that finds all matching investors who share at least 1 sector with a specific startup, ordered by number of shared sectors.',
      whiteboardScript: '"PostgreSQL native array operators like && (overlaps) and cardinality of array intersections provide blazing-fast matching without requiring relational cross-join tables for simple tagging."',
      code: `-- Schema: startups(id, name, sectors text[])
-- Schema: investors(id, name, target_sectors text[], max_check_size numeric)

SELECT 
    s.name AS startup_name,
    i.name AS investor_name,
    i.max_check_size,
    -- Array overlap operator (&&)
    ARRAY(
        SELECT unnest(s.sectors) 
        INTERSECT 
        SELECT unnest(i.target_sectors)
    ) AS shared_sectors,
    cardinality(ARRAY(
        SELECT unnest(s.sectors) 
        INTERSECT 
        SELECT unnest(i.target_sectors)
    )) AS overlap_count
FROM startups s
JOIN investors i ON s.sectors && i.target_sectors
WHERE s.id = 101
ORDER BY overlap_count DESC, i.max_check_size DESC;`,
      traps: 'Not knowing the `&&` overlap operator in PostgreSQL; attempting to write messy LIKE \'%FinTech%\' string matches.'
    },
    {
      id: 'cs6',
      title: 'Drill S6: Rolling 7-Day Active Orders & Conversion Metrics',
      context: 'E-commerce and merchant telemetry: calculating cumulative moving revenue and order volume by region.',
      problem: 'Write a query that calculates the daily total revenue and a rolling 7-day cumulative revenue for each region using `SUM() OVER (...)`.',
      whiteboardScript: '"Rolling aggregates require the ROWS BETWEEN 6 PRECEDING AND CURRENT ROW window frame clause, ensuring our trend lines smooth out weekend seasonality."',
      code: `-- Schema: orders(id, region_id, amount, created_at, status)

WITH daily_regional_sales AS (
    SELECT 
        region_id,
        DATE(created_at) AS order_date,
        SUM(amount) AS daily_revenue,
        COUNT(id) AS daily_order_count
    FROM orders
    WHERE status = 'COMPLETED'
    GROUP BY region_id, DATE(created_at)
)
SELECT 
    region_id,
    order_date,
    daily_revenue,
    daily_order_count,
    -- Rolling 7-day cumulative sum
    SUM(daily_revenue) OVER (
        PARTITION BY region_id 
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7day_revenue
FROM daily_regional_sales
ORDER BY region_id, order_date DESC;`,
      traps: 'Omitting the window frame specification (defaulting to RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW which gives cumulative total instead of 7-day rolling window).'
    }
  ];

  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <!-- SQL TEMPLATES -->
      <div class="glass-card" style="border-left:4px solid var(--violet)">
        <h3 style="color:var(--violet);margin-bottom:0.5rem">🐘 The 4 SQL Templates that Answer 95% of Database Questions</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.75rem">
          PostgreSQL is the industry-standard production database for modern full-stack platforms. Here is your mental blueprint:
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;font-size:0.78rem">
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--cyan)">1. The Top-N / Deduplication Pattern</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem"><code>ROW_NUMBER() OVER (PARTITION BY col ORDER BY date DESC)</code> + <code>WHERE rn = 1</code></p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--amber)">2. The Ranking Pattern</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem"><code>DENSE_RANK() OVER (PARTITION BY cat ORDER BY score DESC)</code> (no gaps for ties)</p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:var(--green)">3. The Sequential Event Pattern</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem"><code>LAG(ts) OVER (PARTITION BY user ORDER BY ts)</code> to compute time deltas</p>
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.7rem;border-radius:4px">
            <strong style="color:#f472b6">4. The Rolling Aggregate Pattern</strong>
            <p style="color:var(--text-secondary);margin-top:0.2rem"><code>SUM(val) OVER (ORDER BY dt ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)</code></p>
          </div>
        </div>
      </div>

      <!-- SQL DRILLS LIST -->
      <div style="display:flex;flex-direction:column;gap:1.25rem">
        ${sqlDrills.map((d, idx) => `
          <div class="glass-card" style="border:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.6rem;flex-wrap:wrap;gap:0.5rem">
              <div>
                <span class="tag violet" style="margin-right:0.5rem">SQL DRILL ${idx + 1}</span>
                <span style="font-weight:700;font-size:0.95rem;color:var(--text-primary)">${d.title}</span>
              </div>
              <button class="btn-ghost" style="padding:0.25rem 0.6rem;font-size:0.72rem" onclick="toggleCorridorCCode('${d.id}')">Toggle Solution Query</button>
            </div>
            
            <p style="font-size:0.78rem;color:var(--amber);margin-bottom:0.4rem"><strong>📍 Production Relevance:</strong> ${d.context}</p>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.6rem"><strong>Task:</strong> ${d.problem}</p>
            
            <div style="background:rgba(124,58,237,0.06);padding:0.6rem 0.8rem;border-radius:var(--radius-sm);margin-bottom:0.6rem;border-left:3px solid var(--violet)">
              <div style="font-size:0.72rem;font-weight:700;color:var(--violet);text-transform:uppercase">🗣️ What to Say Out Loud (Spoken Script):</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);font-style:italic">${d.whiteboardScript}</div>
            </div>

            <div id="code-${d.id}" style="display:none;margin-top:0.75rem">
              <pre style="background:#090d16;padding:0.85rem;border-radius:var(--radius-sm);overflow-x:auto;font-family:var(--font-mono);font-size:0.75rem;color:#e2e8f0;border:1px solid rgba(255,255,255,0.1)"><code>${escapeHTML(d.code)}</code></pre>
              <div style="margin-top:0.5rem;font-size:0.72rem;color:#f43f5e"><strong>⚠️ Interviewer Traps:</strong> ${d.traps}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ═════════════════════════════════════════════════════════════════════
   TAB 4: 45-MIN TIMED LIVE SIMULATOR
═════════════════════════════════════════════════════════════════════ */
function getCorridorCSimulatorHTML() {
  const simQuestions = [
    {
      phase: 'Phase 1: 00:00 – 05:00',
      title: 'Elevator Pitch & Career Transition Arc',
      prompt: 'Pravin, give us a quick 90-second overview of your background, your transition from Civil Engineering to Data Science, and why you are excited about building production AI systems.',
      modelAnswer: 'Start with the 3-part anchor: (1) B.E. Civil Engineering gives you physical grounding & mathematical rigor; (2) Master Data Science program at HCL GUVI / IIT-M gave you production ML & multi-agent RAG skills; (3) You are specifically interested in building practical, high-throughput systems where AI directly powers real-time user experiences with low latency rather than staying in research notebooks.',
      trap: 'Don\'t apologize for Civil Engineering; don\'t give a generic 5-minute resume recitation.'
    },
    {
      phase: 'Phase 2: 05:00 – 15:00',
      title: 'ERIA Deep Dive & Document Intelligence Architecture',
      prompt: 'In your ERIA project, you mentioned a Multi-Agent RAG system with a Critic LLM evaluation gate and Pydantic validation. How did you handle schema drift and prevent hallucinations when extracting structured data from unstructured documents?',
      modelAnswer: 'Explain the 3-layer guardrail: (1) Pydantic schema contracts with default factories and field validators; (2) An automated Critic Agent that scores output grounding (1–10) and forces a self-healing retry if grounding < 8.5; (3) Two-pass chunking with token telemetry ($0.0087/run). Then connect it to document synthesis: "This same architecture is what ensures profile-to-resume synthesis never drops work history or outputs invalid JSON."',
      trap: 'Don\'t say "the prompt tells it to output JSON." Prompts alone drift; Pydantic and Critic gates enforce guarantees.'
    },
    {
      phase: 'Phase 3: 15:00 – 25:00',
      title: 'Backend & FastAPI Microservice Integration SLAs',
      prompt: 'Interviewer: "Our primary backend is ASP.NET Core with PostgreSQL and a mobile client. How would you architect and deploy your Python ML models so they don\'t block our backend and stay under 300ms latency?"',
      modelAnswer: 'Highlight 4 concrete points: (1) Containerize the model with Docker; (2) Serve via asynchronous FastAPI with Gunicorn/Uvicorn workers; (3) Expose clean REST endpoints with Pydantic schemas mirroring C# DTOs; (4) Implement in-memory LRU caching / Redis for frequent embeddings, plus asyncio.wait_for() timeout thresholds so mobile clients never hang.',
      trap: 'Saying you would run Flask synchronously, or ignoring containerization and API timeout SLAs.'
    },
    {
      phase: 'Phase 4: 25:00 – 38:00',
      title: 'Live Whiteboard Challenge (Python & PostgreSQL)',
      prompt: 'Interviewer: "Let\'s write some code. We have a list of candidate profiles and job requirements. Write a Python function to compute skill match percentage, and then write a SQL query to rank merchants by rating per category."',
      modelAnswer: 'Execute Drill P3 (in-memory set intersection O(N)) and Drill S3 (DENSE_RANK OVER PARTITION BY category_id). Speak your thought process before typing, handle empty inputs and division by zero, and dry-run with sample records.',
      trap: 'Jumping into code without asking clarifying questions about duplicates or NULL handling.'
    },
    {
      phase: 'Phase 5: 38:00 – 45:00',
      title: 'The Reverse Interview (Pravin\'s Questions to Evaluators)',
      prompt: 'Interviewer: "We have a few minutes left. Do you have any questions for us?"',
      modelAnswer: 'Ask the 3 Golden Trojan Horse Questions: (1) "For live merchant tracking, as you scale active users, are you doing spatial proximity queries directly in PostgreSQL via PostGIS bounding boxes, or are you pre-caching regional clusters in Redis?" (2) "On the document generation side, what has been the primary bottleneck—LLM latency or schema drift across diverse profile structures?" (3) "How does the AI microservice handoff work between Python services and your primary backend API gateway?"',
      trap: 'Asking "What is the company culture like?" or "When will I hear back?" instead of asking deep engineering questions.'
    }
  ];

  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <!-- TIMER COCKPIT -->
      <div class="glass-card" style="border:1px solid rgba(236,72,153,0.3);background:linear-gradient(135deg,rgba(236,72,153,0.06),rgba(0,0,0,0.4))">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
          <div>
            <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;font-family:var(--font-mono)">CORRIDOR C 45-MIN SIMULATION COCKPIT</div>
            <div id="corridor-c-timer-display" style="font-size:2.8rem;font-weight:800;font-family:var(--font-mono);color:#f472b6;letter-spacing:0.05em">45:00</div>
          </div>
          <div style="display:flex;gap:0.75rem;align-items:center">
            <button id="corridor-c-timer-btn" class="btn-primary" style="background:#f43f5e;border-color:#f43f5e;padding:0.6rem 1.4rem" onclick="toggleCorridorCMockTimer()">▶ Start 45m Clock</button>
            <button class="btn-ghost" onclick="resetCorridorCMockTimer()">↺ Reset</button>
          </div>
        </div>
        <div style="margin-top:0.75rem;font-size:0.78rem;color:var(--text-secondary)">
          💡 Practice speaking aloud. Click <strong>"🔊 Voice Prompt"</strong> to have your browser synthesize the evaluator prompt, then respond in real time within the target duration.
        </div>
      </div>

      <!-- SIMULATION PHASES -->
      <div style="display:flex;flex-direction:column;gap:1rem">
        ${simQuestions.map((q, idx) => `
          <div class="glass-card" style="border-left:4px solid ${idx === 0 ? 'var(--cyan)' : idx === 1 ? '#f472b6' : idx === 2 ? 'var(--amber)' : idx === 3 ? 'var(--violet)' : 'var(--green)'}">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.5rem">
              <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:var(--cyan)">${q.phase} · ${q.title}</span>
              <button class="btn-ghost" style="padding:0.2rem 0.6rem;font-size:0.7rem;color:#f472b6" onclick="speakCorridorCPrompt('${escapeHTML(q.prompt)}')">🔊 Voice Prompt</button>
            </div>
            
            <div style="font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.6rem">
              "${q.prompt}"
            </div>

            <div style="background:rgba(0,0,0,0.3);padding:0.75rem;border-radius:var(--radius-sm);margin-bottom:0.5rem">
              <div style="font-size:0.72rem;font-weight:700;color:var(--green);text-transform:uppercase;margin-bottom:0.25rem">🎯 Recommended Model Answer Defense:</div>
              <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5">${q.modelAnswer}</p>
            </div>

            <div style="font-size:0.72rem;color:#f43f5e">
              <strong>⚠️ Trap to Avoid:</strong> ${q.trap}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ═════════════════════════════════════════════════════════════════════
   TAB 5: WORD-FOR-WORD SPOKEN SCRIPTS
═════════════════════════════════════════════════════════════════════ */
function getCorridorCScriptsHTML() {
  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <!-- SCRIPT 1: 90-SEC PITCH -->
      <div class="glass-card" style="border-left:4px solid var(--cyan)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem">
          <h3 style="color:var(--cyan);font-size:0.95rem">🎤 Script 1: The 90-Second Opening Elevator Pitch</h3>
          <button class="btn-ghost" style="font-size:0.72rem;padding:0.25rem 0.5rem" onclick="speakCorridorCPrompt(document.getElementById('script-cp1-text').innerText)">🔊 Listen</button>
        </div>
        <div id="script-cp1-text" style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;background:rgba(0,0,0,0.3);padding:1rem;border-radius:var(--radius-sm)">
          "Hi, thank you for having me today. My name is Pravin Kumar. I come with a unique dual foundation: a First-Class Honors degree in Civil Engineering from Rajalakshmi Engineering College, followed by completing the Master Data Science program at HCL GUVI, incubated at IIT Madras Research Park.<br/><br/>
          My focus is on <strong>practical, production AI systems</strong>. In my flagship project <strong>ERIA</strong>, I architected a 4-agent LangChain system powered by Groq LLaMA 3.3 70B that extracts structured intelligence from 50+ page policy documents. Crucially, I implemented an automated Critic LLM evaluation gate and strict Pydantic JSON schema contracts to eliminate hallucination and ensure deterministic API responses.<br/><br/>
          During my internship at <strong>Internship Studio</strong>, I worked on telemetry regression across 14,000+ records, driving an 89.2% error reduction and deploying containerized REST endpoints using <strong>FastAPI and Docker</strong>.<br/><br/>
          What specifically excites me is building tangible, high-impact products—from live geolocation tracking to automated document intelligence. I love building systems where AI directly powers clean, low-latency mobile and web experiences, and that is why I am eager to contribute here."
        </div>
      </div>

      <!-- SCRIPT 2: THE DOCUMENT SYNTHESIS HOOK -->
      <div class="glass-card" style="border-left:4px solid #f472b6">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem">
          <h3 style="color:#f472b6;font-size:0.95rem">🎯 Script 2: Defending Document Synthesis &amp; Schema Integrity</h3>
          <button class="btn-ghost" style="font-size:0.72rem;padding:0.25rem 0.5rem" onclick="speakCorridorCPrompt(document.getElementById('script-cp2-text').innerText)">🔊 Listen</button>
        </div>
        <div id="script-cp2-text" style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;background:rgba(0,0,0,0.3);padding:1rem;border-radius:var(--radius-sm)">
          "When building automated document or resume synthesis from profile data, the biggest engineering challenge isn't prompt engineering—it's <strong>schema drift and format consistency</strong>. When profile attributes vary wildly between users, raw LLMs hallucinate keys or drop work history.<br/><br/>
          The way I solved this in ERIA was by enforcing a <strong>two-layer contract</strong>: first, a Pydantic model with default factories and sanitizing validators that rejects malformed JSON. Second, an evaluation Critic gate that grades the synthesized output on Grounding, Consistency, and Completeness. If the score falls below 8.5/10, the system triggers a self-healing repair prompt before the output ever touches the database. This gives backend engineering teams 100% confidence that the JSON matches their database DTOs."
        </div>
      </div>

      <!-- SCRIPT 3: CIVIL TO GEOLOCATION -->
      <div class="glass-card" style="border-left:4px solid var(--amber)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem">
          <h3 style="color:var(--amber);font-size:0.95rem">⚡ Script 3: Turning Civil Engineering into an Unfair Advantage for Spatial Systems</h3>
          <button class="btn-ghost" style="font-size:0.72rem;padding:0.25rem 0.5rem" onclick="speakCorridorCPrompt(document.getElementById('script-cp3-text').innerText)">🔊 Listen</button>
        </div>
        <div id="script-cp3-text" style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;background:rgba(0,0,0,0.3);padding:1rem;border-radius:var(--radius-sm)">
          "People often ask how Civil Engineering connects to Data Science. In Civil Engineering, everything is grounded in <strong>spatial geometry, coordinate systems, and physical constraints</strong>—you cannot bluff physics. When working with hyperlocal platforms, geolocation isn't just an abstract latitude and longitude string; it involves spatial bounding boxes, geodesic distance calculations, and proximity caching.<br/><br/>
          In my <strong>Alveris-Geo-AI</strong> and <strong>soil grain analysis</strong> projects, I worked directly with spatial coordinates, digital elevation models, and OpenCV geometric calibrations. That physical intuition makes me very comfortable handling spatial data, sensor telemetry, and PostgreSQL location indexing."
        </div>
      </div>

      <!-- SCRIPT 4: THE 3 KILLER QUESTIONS -->
      <div class="glass-card" style="border-left:4px solid var(--green)">
        <h3 style="color:var(--green);font-size:0.95rem;margin-bottom:0.6rem">🏆 Script 4: The 3 "Trojan Horse" Questions to Ask Evaluators at the End</h3>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.75rem">
          When asked "Do you have any questions for us?", asking these questions proves you already think like a senior member of their engineering team:
        </p>
        <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.82rem">
          <div style="background:rgba(0,0,0,0.3);padding:0.75rem;border-radius:var(--radius-sm)">
            <strong style="color:var(--cyan)">Question 1 (On Spatial Architecture &amp; Caching):</strong><br/>
            "For merchant discovery as active users scale, are you doing spatial proximity queries directly in PostgreSQL via PostGIS bounding boxes, or are you pre-caching regional clusters in Redis to minimize database read pressure?"
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.75rem;border-radius:var(--radius-sm)">
            <strong style="color:#f472b6">Question 2 (On Document Synthesis &amp; Schema Integrity):</strong><br/>
            "On the profile-to-document synthesis side, what has been the primary friction point—model inference latency across longer contexts, or handling schema variation across heterogeneous user inputs?"
          </div>
          <div style="background:rgba(0,0,0,0.3);padding:0.75rem;border-radius:var(--radius-sm)">
            <strong style="color:var(--green)">Question 3 (On Service Handoffs):</strong><br/>
            "How does the engineering handoff currently work between your Python AI microservices and your primary backend API gateway—do you use gRPC, async REST webhooks, or direct event queues like RabbitMQ / Kafka?"
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ═════════════════════════════════════════════════════════════════════
   UTILITIES & TIMERS
═════════════════════════════════════════════════════════════════════ */
window.toggleCorridorCCode = function(id) {
  const el = document.getElementById('code-' + id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
};

window.toggleCorridorCMockTimer = function() {
  const btn = document.getElementById('corridor-c-timer-btn');
  if (cMockIsRunning) {
    clearInterval(cMockTimerInterval);
    cMockIsRunning = false;
    if (btn) {
      btn.innerText = '▶ Resume Clock';
      btn.style.background = '#10b981';
      btn.style.borderColor = '#10b981';
    }
  } else {
    cMockIsRunning = true;
    if (btn) {
      btn.innerText = '⏸ Pause Clock';
      btn.style.background = '#f43f5e';
      btn.style.borderColor = '#f43f5e';
    }
    cMockTimerInterval = setInterval(() => {
      if (cMockSecondsLeft > 0) {
        cMockSecondsLeft--;
        updateCorridorCTimerDisplay();
      } else {
        clearInterval(cMockTimerInterval);
        cMockIsRunning = false;
        alert('⏰ 45-Minute Corridor C Mock Session Completed! Review your notes.');
      }
    }, 1000);
  }
};

window.resetCorridorCMockTimer = function() {
  clearInterval(cMockTimerInterval);
  cMockIsRunning = false;
  cMockSecondsLeft = 45 * 60;
  updateCorridorCTimerDisplay();
  const btn = document.getElementById('corridor-c-timer-btn');
  if (btn) {
    btn.innerText = '▶ Start 45m Clock';
    btn.style.background = '#f43f5e';
    btn.style.borderColor = '#f43f5e';
  }
};

function updateCorridorCTimerDisplay() {
  const el = document.getElementById('corridor-c-timer-display');
  if (!el) return;
  const m = Math.floor(cMockSecondsLeft / 60);
  const s = cMockSecondsLeft % 60;
  el.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

window.speakCorridorCPrompt = function(text) {
  if (!('speechSynthesis' in window)) {
    alert('Speech synthesis not supported in this browser.');
    return;
  }
  window.speechSynthesis.cancel();
  const clean = text.replace(/<[^>]+>/g, '').trim();
  const u = new SpeechSynthesisUtterance(clean);
  u.rate = 1.0;
  u.pitch = 1.0;
  window.speechSynthesis.speak(u);
};

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
