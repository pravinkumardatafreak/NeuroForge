/* ═══════════════════════════════════════════════════
   practice.js — Unified Hands-on Practice Hub
   Combines 7 Flagship Project Decks, 45-Min Timed Simulator,
   and Interactive Code Drills in One Clean View.
   ═══════════════════════════════════════════════════ */

(function () {
  let activePracticeTab = 'projects';

  window.renderPracticePage = function () {
    const container = document.getElementById('practice-content');
    if (!container) return;

    container.innerHTML = `
      <!-- HEADER -->
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">
        <div>
          <div class="cheatsheet-kicker">🛠️ HANDS-ON INTERVIEW WORKSHOP</div>
          <h2>Projects &amp; Practice Cockpit</h2>
          <p>Consolidated defense hub: rehearse your 7 flagship project slide decks, run timed 45-minute mock simulations, or drill live code whiteboard challenges.</p>
        </div>
        <button class="btn-sm accent" onclick="openVoiceEvaluator()" style="font-weight:700;padding:0.45rem 0.95rem">
          🎙️ Open Spoken Evaluator
        </button>
      </div>

      <!-- PRACTICE SUB-TABS -->
      <div class="warroom-nav-tabs" style="display:flex;gap:0.5rem;margin-bottom:1.75rem;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:0.75rem">
        <button class="z-tab-btn ${activePracticeTab === 'projects' ? 'active' : ''}" onclick="switchPracticeTab('projects', this)">
          🛠️ 7 Flagship Project Decks &amp; Pipelines
        </button>
        <button class="z-tab-btn ${activePracticeTab === 'simulator' ? 'active' : ''}" onclick="switchPracticeTab('simulator', this)">
          🎙️ 45-Min Timed Mock Simulator
        </button>
        <button class="z-tab-btn ${activePracticeTab === 'drills' ? 'active' : ''}" onclick="switchPracticeTab('drills', this)">
          💻 Emergency Python &amp; SQL Drills
        </button>
      </div>

      <!-- TAB CONTAINER -->
      <div id="practice-tab-container"></div>
    `;

    renderActivePracticeTab();
  };

  window.switchPracticeTab = function (tabName, btn) {
    activePracticeTab = tabName;
    document.querySelectorAll('.warroom-nav-tabs .z-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderActivePracticeTab();
  };

  function renderActivePracticeTab() {
    const target = document.getElementById('practice-tab-container');
    if (!target) return;

    if (activePracticeTab === 'projects') {
      target.innerHTML = `<div id="practice-projects-submount"></div>`;
      const sub = document.getElementById('practice-projects-submount');
      if (typeof window.renderPresentationKit === 'function') {
        // Mount presentation kit inside submount
        const originalPresentContent = document.getElementById('present-content');
        if (originalPresentContent && originalPresentContent.innerHTML.trim()) {
          sub.innerHTML = originalPresentContent.innerHTML;
        } else {
          // Temporarily redirect present-content
          window.renderPresentationKit();
          if (originalPresentContent) sub.innerHTML = originalPresentContent.innerHTML;
        }
      }
    } else if (activePracticeTab === 'simulator') {
      target.innerHTML = `
        <div class="glass-card" style="padding:1.75rem;border-color:rgba(236,72,153,0.35);background:linear-gradient(135deg,rgba(236,72,153,0.06),rgba(0,0,0,0.3))">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">
            <div>
              <div style="font-size:0.75rem;font-weight:700;color:#f472b6;letter-spacing:0.08em;text-transform:uppercase">TIMED LIVE INTERVIEW ROUND</div>
              <h3 style="margin:0.2rem 0">45-Minute Enterprise AI Engineer Simulator</h3>
              <p style="margin:0;font-size:0.85rem;color:var(--text-secondary)">Strict timed round testing technical depth, live system design, and spoken defense clarity.</p>
            </div>
            <div style="background:rgba(0,0,0,0.5);padding:0.75rem 1.25rem;border-radius:10px;border:1px solid rgba(236,72,153,0.3);text-align:center">
              <div style="font-size:0.7rem;color:var(--text-muted);font-weight:700">TIME REMAINING</div>
              <div id="sim-timer-display" style="font-size:1.75rem;font-weight:800;color:#f472b6;font-family:var(--font-mono)">45:00</div>
            </div>
          </div>

          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1.5rem">
            <button class="btn-primary" id="sim-start-btn" onclick="startPracticeSimulator()" style="background:#f472b6;border-color:#f472b6">▶ Start Timed Simulation</button>
            <button class="btn-ghost" onclick="resetPracticeSimulator()">↺ Reset Timer</button>
            <button class="btn-ghost" onclick="openVoiceEvaluator()">🎙️ Launch Voice Evaluator</button>
          </div>

          <!-- 4 SIMULATION ROUNDS -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1rem">
            <div class="glass-card" style="padding:1.1rem;background:rgba(255,255,255,0.02)">
              <div style="font-size:0.7rem;color:var(--cyan);font-weight:700">ROUND 1 (00:00 - 10:00)</div>
              <h4 style="margin:0.3rem 0">Spoken Elevator Pitch &amp; Background</h4>
              <p style="font-size:0.8rem;color:var(--text-secondary)">Deliver your 90-second AI Engineer introduction without fillers. Target 120-140 WPM.</p>
            </div>
            <div class="glass-card" style="padding:1.1rem;background:rgba(255,255,255,0.02)">
              <div style="font-size:0.7rem;color:var(--lime);font-weight:700">ROUND 2 (10:00 - 25:00)</div>
              <h4 style="margin:0.3rem 0">RAG &amp; Agentic System Design</h4>
              <p style="font-size:0.8rem;color:var(--text-secondary)">Whiteboard your 4-agent LangChain architecture, Critic reflection gate (&ge;8.5/10), and Pydantic schema validation.</p>
            </div>
            <div class="glass-card" style="padding:1.1rem;background:rgba(255,255,255,0.02)">
              <div style="font-size:0.7rem;color:var(--amber);font-weight:700">ROUND 3 (25:00 - 38:00)</div>
              <h4 style="margin:0.3rem 0">Live Python &amp; SQL Problem Solving</h4>
              <p style="font-size:0.8rem;color:var(--text-secondary)">Solve non-repeating character in O(N), write DENSE_RANK partition query, and defend KV-cache scaling.</p>
            </div>
            <div class="glass-card" style="padding:1.1rem;background:rgba(255,255,255,0.02)">
              <div style="font-size:0.7rem;color:var(--violet);font-weight:700">ROUND 4 (38:00 - 45:00)</div>
              <h4 style="margin:0.3rem 0">Candidate Questions &amp; Executive Wrap</h4>
              <p style="font-size:0.8rem;color:var(--text-secondary)">Ask high-leverage architectural questions regarding high-concurrency inference latency and vector indexing.</p>
            </div>
          </div>
        </div>
      `;
    } else if (activePracticeTab === 'drills') {
      target.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem">
          <!-- Drill 1: Python LRU Cache -->
          <div class="glass-card" style="padding:1.25rem">
            <div class="tag cyan" style="font-size:0.65rem;margin-bottom:0.5rem">PYTHON OOP DRILL</div>
            <h4 style="margin:0 0 0.5rem">O(1) LRU Cache with OrderedDict</h4>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.75rem">Implement a thread-safe Least Recently Used (LRU) memory cache bounded by capacity.</p>
            <pre class="code-block" style="background:#05050c;padding:0.75rem;border-radius:6px;font-size:0.78rem"><code>from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)</code></pre>
          </div>

          <!-- Drill 2: SQL Window Functions -->
          <div class="glass-card" style="padding:1.25rem">
            <div class="tag amber" style="font-size:0.65rem;margin-bottom:0.5rem">SQL WINDOW DRILL</div>
            <h4 style="margin:0 0 0.5rem">Consecutive Active Days &amp; Island-Gaps</h4>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.75rem">Group sequential user check-in dates into islands without gaps.</p>
            <pre class="code-block" style="background:#05050c;padding:0.75rem;border-radius:6px;font-size:0.78rem"><code>WITH numbered_dates AS (
  SELECT 
    user_id, 
    login_date,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) as rn
  FROM user_logins
),
islands AS (
  SELECT 
    user_id,
    login_date,
    (login_date - rn * INTERVAL '1 day') AS island_group
  FROM numbered_dates
)
SELECT user_id, MIN(login_date) as streak_start, MAX(login_date) as streak_end, COUNT(*) as streak_days
FROM islands
GROUP BY user_id, island_group
HAVING COUNT(*) >= 3;</code></pre>
          </div>

          <!-- Drill 3: Fast Haversine Distance -->
          <div class="glass-card" style="padding:1.25rem">
            <div class="tag rose" style="font-size:0.65rem;margin-bottom:0.5rem">SPATIAL AI DRILL</div>
            <h4 style="margin:0 0 0.5rem">Fast Vectorized Haversine Distance (km)</h4>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.75rem">Compute great-circle distances between points without slow python for-loops.</p>
            <pre class="code-block" style="background:#05050c;padding:0.75rem;border-radius:6px;font-size:0.78rem"><code>import numpy as np

def vectorized_haversine(lat1, lon1, lat2, lon2):
    R = 6371.0 # Earth radius in km
    dlat = np.radians(lat2 - lat1)
    dlon = np.radians(lon2 - lon1)
    a = (np.sin(dlat / 2.0)**2 +
         np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dlon / 2.0)**2)
    c = 2 * np.arcsin(np.sqrt(a))
    return R * c</code></pre>
          </div>
        </div>
      `;
    }
  }

  let simTimer = null;
  let simSeconds = 45 * 60;

  window.startPracticeSimulator = function () {
    const btn = document.getElementById('sim-start-btn');
    if (simTimer) {
      clearInterval(simTimer);
      simTimer = null;
      if (btn) btn.textContent = '▶ Resume Simulation';
      return;
    }
    if (btn) btn.textContent = '⏸ Pause Simulation';

    if (typeof window.logStudyActivity === 'function') {
      window.logStudyActivity('mock_drill', 'Started 45-Min Mock Interview Simulator', 15);
    }

    simTimer = setInterval(() => {
      if (simSeconds <= 0) {
        clearInterval(simTimer);
        simTimer = null;
        alert('⏰ 45-Minute Mock Interview Simulation Finished! Outstanding effort.');
        return;
      }
      simSeconds--;
      const mins = String(Math.floor(simSeconds / 60)).padStart(2, '0');
      const secs = String(simSeconds % 60).padStart(2, '0');
      const disp = document.getElementById('sim-timer-display');
      if (disp) disp.textContent = `${mins}:${secs}`;
    }, 1000);
  };

  window.resetPracticeSimulator = function () {
    if (simTimer) {
      clearInterval(simTimer);
      simTimer = null;
    }
    simSeconds = 45 * 60;
    const disp = document.getElementById('sim-timer-display');
    if (disp) disp.textContent = '45:00';
    const btn = document.getElementById('sim-start-btn');
    if (btn) btn.textContent = '▶ Start Timed Simulation';
  };
})();
