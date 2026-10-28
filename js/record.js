/* ═══════════════════════════════════════════════════
   record.js — Persistent Study Record & Analytics Engine
   Tracks Daily Streaks, Flashcard Mastery, Module Progress,
   and Chronological Learning Activity Journal
   ═══════════════════════════════════════════════════ */

(function () {
  const JOURNAL_KEY = 'nf_learning_journal';
  const STREAK_KEY = 'nf_study_streak_data';

  // ── 1. Activity Journal Logging ──
  window.logStudyActivity = function (actionType, title, xpEarned) {
    let journal = [];
    try {
      journal = JSON.parse(localStorage.getItem(JOURNAL_KEY) || '[]');
    } catch (e) {
      journal = [];
    }

    const entry = {
      id: 'act_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      time: new Date().toISOString(),
      type: actionType, // 'card_mastered', 'module_completed', 'voice_practice', 'mock_drill'
      title: title,
      xp: xpEarned || 0
    };

    // Keep the most recent 150 entries
    journal.unshift(entry);
    if (journal.length > 150) journal = journal.slice(0, 150);

    localStorage.setItem(JOURNAL_KEY, JSON.stringify(journal));
    updateStreakOnActivity();

    // If Record page is currently visible, re-render it smoothly
    const recordSec = document.getElementById('section-record');
    if (recordSec && recordSec.classList.contains('active')) {
      window.renderRecordPage();
    }
  };

  // ── 2. Study Streak Calculation ──
  function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function updateStreakOnActivity() {
    const today = getTodayString();
    let data = { lastDate: '', streak: 0, history: [] };
    try {
      data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
      if (!Array.isArray(data.history)) data.history = [];
    } catch (e) {
      data = { lastDate: '', streak: 0, history: [] };
    }

    if (!data.history.includes(today)) {
      data.history.push(today);
      if (data.history.length > 60) data.history = data.history.slice(-60);
    }

    if (data.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

      if (data.lastDate === yStr) {
        data.streak = (data.streak || 1) + 1;
      } else if (!data.lastDate) {
        data.streak = 1;
      } else {
        // Streak reset if missed yesterday
        data.streak = 1;
      }
      data.lastDate = today;
      localStorage.setItem(STREAK_KEY, JSON.stringify(data));
    }
  }

  window.getStudyStreak = function () {
    try {
      const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
      return data.streak || (data.history && data.history.length > 0 ? 1 : 0);
    } catch (e) {
      return 0;
    }
  };

  // ── 3. Render Learning Record Dashboard ──
  window.renderRecordPage = function () {
    const container = document.getElementById('record-content');
    if (!container) return;

    let journal = [];
    try {
      journal = JSON.parse(localStorage.getItem(JOURNAL_KEY) || '[]');
    } catch (e) {
      journal = [];
    }

    const masteredMap = JSON.parse(localStorage.getItem('nf_mastered_viva') || '{}');
    const totalMastered = Object.keys(masteredMap).length;
    const totalCards = (window.VIVA_BANK && window.VIVA_BANK.length) || 94;
    const masteryPct = Math.round((totalMastered / totalCards) * 100);

    const totalXP = parseInt(localStorage.getItem('nf_xp') || '0', 10);
    const streak = window.getStudyStreak();

    // Module completion count
    let dailyProg = { count: 0, completedIds: [] };
    try {
      dailyProg = JSON.parse(localStorage.getItem('nf_daily_study_progress') || '{}');
    } catch (e) {}
    const completedModulesCount = Array.isArray(dailyProg.completedIds) ? dailyProg.completedIds.length : 0;

    // Topic Breakdown
    const topicStats = {};
    if (window.VIVA_BANK) {
      window.VIVA_BANK.forEach(q => {
        const t = q.topic || 'General';
        if (!topicStats[t]) topicStats[t] = { total: 0, mastered: 0 };
        topicStats[t].total++;
        if (masteredMap[q.id]) topicStats[t].mastered++;
      });
    }

    // Recent 7 days activity dots
    const last7Days = [];
    const now = new Date();
    let streakData = { history: [] };
    try { streakData = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}'); } catch(e){}
    const hist = streakData.history || [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const str = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      last7Days.push({
        date: str,
        day: dayName,
        active: hist.includes(str) || (i === 0 && journal.length > 0)
      });
    }

    container.innerHTML = `
      <!-- HEADER -->
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">
        <div>
          <div class="cheatsheet-kicker">📊 PERSONAL STUDY AUDIT &amp; PROGRESS RECORD</div>
          <h2>My Learning Record</h2>
          <p>Continuous verification of your interview readiness, flashcard mastery, and daily study cadence.</p>
        </div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap">
          <button class="btn-sm accent" onclick="copyLearningSummary()" title="Copy a clean summary of your study record to share">
            📋 Copy Progress Summary
          </button>
          <button class="btn-sm" onclick="exportStudyJournal()" title="Download your complete activity log as JSON">
            📥 Export Record
          </button>
          <button class="btn-sm" onclick="clearLearningRecord()" style="border-color:rgba(244,63,94,0.3);color:#fda4af" title="Reset your local study progress">
            🔄 Reset
          </button>
        </div>
      </div>

      <!-- TOP METRIC CARDS -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(210px, 1fr));gap:1rem;margin-bottom:1.75rem">
        <!-- Streak Card -->
        <div class="glass-card" style="padding:1.25rem;border-color:rgba(245,158,11,0.35);background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(0,0,0,0.2))">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);font-weight:700">Study Streak</span>
            <span style="font-size:1.35rem">🔥</span>
          </div>
          <div style="font-size:1.85rem;font-weight:800;color:var(--amber);font-family:var(--font-mono)">${streak} ${streak === 1 ? 'Day' : 'Days'}</div>
          <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.35rem">Active learning consistency</div>
        </div>

        <!-- Mastery Card -->
        <div class="glass-card" style="padding:1.25rem;border-color:rgba(132,204,22,0.35);background:linear-gradient(135deg,rgba(132,204,22,0.08),rgba(0,0,0,0.2))">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);font-weight:700">Concept Mastery</span>
            <span style="font-size:1.35rem">✓</span>
          </div>
          <div style="font-size:1.85rem;font-weight:800;color:var(--lime);font-family:var(--font-mono)">${totalMastered} / ${totalCards}</div>
          <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.35rem">${masteryPct}% of all interview concepts</div>
        </div>

        <!-- Experience Points Card -->
        <div class="glass-card" style="padding:1.25rem;border-color:rgba(0,255,200,0.35);background:linear-gradient(135deg,rgba(0,255,200,0.08),rgba(0,0,0,0.2))">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);font-weight:700">Total XP</span>
            <span style="font-size:1.35rem">⚡</span>
          </div>
          <div style="font-size:1.85rem;font-weight:800;color:var(--cyan);font-family:var(--font-mono)">${totalXP} XP</div>
          <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.35rem">Knowledge retention score</div>
        </div>

        <!-- Modules Studied Card -->
        <div class="glass-card" style="padding:1.25rem;border-color:rgba(139,92,246,0.35);background:linear-gradient(135deg,rgba(139,92,246,0.08),rgba(0,0,0,0.2))">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);font-weight:700">Lessons Completed</span>
            <span style="font-size:1.35rem">📚</span>
          </div>
          <div style="font-size:1.85rem;font-weight:800;color:var(--violet);font-family:var(--font-mono)">${completedModulesCount}</div>
          <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.35rem">Core curriculum checkpoints</div>
        </div>
      </div>

      <!-- 7-DAY ACTIVITY CALENDAR -->
      <div class="glass-card" style="padding:1.25rem;margin-bottom:1.75rem;border-color:rgba(255,255,255,0.08)">
        <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);margin-bottom:0.85rem;display:flex;align-items:center;gap:0.5rem">
          <span>📅</span> 7-Day Study Cadence
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap">
          ${last7Days.map(d => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;flex:1;min-width:40px;padding:0.6rem 0.3rem;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid ${d.active ? 'rgba(0,255,200,0.3)' : 'rgba(255,255,255,0.04)'}">
              <span style="font-size:0.7rem;color:var(--text-muted);font-weight:600">${d.day}</span>
              <span style="width:14px;height:14px;border-radius:50%;background:${d.active ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'};box-shadow:${d.active ? '0 0 8px var(--cyan)' : 'none'}"></span>
              <span style="font-size:0.65rem;color:${d.active ? 'var(--cyan)' : 'var(--text-muted)'}">${d.active ? '✓ Active' : 'Rest'}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TWO-COLUMN LAYOUT: TOPIC BREAKDOWN & CHRONOLOGICAL ACTIVITY LOG -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem">
        <!-- LEFT: TOPIC MASTERY BARS -->
        <div class="glass-card" style="padding:1.35rem">
          <div style="font-size:0.95rem;font-weight:700;margin-bottom:1rem;color:var(--text-primary);display:flex;align-items:center;gap:0.5rem">
            <span>🎯</span> Topic-by-Topic Mastery
          </div>
          <div style="display:flex;flex-direction:column;gap:1rem">
            ${Object.entries(topicStats).map(([topic, stat]) => {
              const pct = Math.round((stat.mastered / stat.total) * 100) || 0;
              return `
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:0.35rem">
                    <span style="font-weight:600;color:var(--text-primary)">${topic}</span>
                    <span style="font-family:var(--font-mono);color:var(--text-secondary)">${stat.mastered}/${stat.total} (${pct}%)</span>
                  </div>
                  <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden">
                    <div style="height:100%;width:${pct}%;background:${pct > 50 ? 'var(--lime)' : 'linear-gradient(90deg, var(--cyan), var(--violet))'};border-radius:4px;transition:width 0.5s ease"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- RIGHT: RECENT ACTIVITY JOURNAL -->
        <div class="glass-card" style="padding:1.35rem">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
            <div style="font-size:0.95rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:0.5rem">
              <span>📜</span> Activity Journal (Last ${journal.length} actions)
            </div>
            <span style="font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono)">Auto-synced</span>
          </div>

          <div style="max-height:420px;overflow-y:auto;display:flex;flex-direction:column;gap:0.6rem;padding-right:0.3rem">
            ${journal.length === 0 ? `
              <div style="padding:2rem 1rem;text-align:center;color:var(--text-muted);font-size:0.85rem">
                🌱 No study activity recorded yet.<br/>
                Start by flipping a card in <strong>Flashcards</strong> or reading a lesson in <strong>Learn</strong>!
              </div>
            ` : journal.map(act => {
              const dateObj = new Date(act.time);
              const timeStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' · ' + dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
              let icon = '📖';
              let badgeColor = 'var(--cyan)';
              if (act.type === 'card_mastered') { icon = '✓'; badgeColor = 'var(--lime)'; }
              else if (act.type === 'voice_practice') { icon = '🎙️'; badgeColor = '#f43f5e'; }
              else if (act.type === 'module_completed') { icon = '📚'; badgeColor = 'var(--violet)'; }
              else if (act.type === 'mock_drill') { icon = '⏱️'; badgeColor = 'var(--amber)'; }

              return `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.65rem 0.85rem;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid rgba(255,255,255,0.05)">
                  <div style="display:flex;align-items:center;gap:0.65rem;flex:1;min-width:0">
                    <span style="font-size:0.9rem;color:${badgeColor};flex-shrink:0">${icon}</span>
                    <div style="min-width:0;flex:1">
                      <div style="font-size:0.82rem;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${act.title}</div>
                      <div style="font-size:0.7rem;color:var(--text-muted)">${timeStr}</div>
                    </div>
                  </div>
                  ${act.xp > 0 ? `<span style="font-size:0.75rem;font-weight:700;color:var(--cyan);font-family:var(--font-mono);flex-shrink:0">+${act.xp} XP</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  };

  // ── 4. Helper Actions ──
  window.copyLearningSummary = function () {
    const masteredMap = JSON.parse(localStorage.getItem('nf_mastered_viva') || '{}');
    const totalMastered = Object.keys(masteredMap).length;
    const totalCards = (window.VIVA_BANK && window.VIVA_BANK.length) || 94;
    const streak = window.getStudyStreak();
    const totalXP = parseInt(localStorage.getItem('nf_xp') || '0', 10);

    const summaryText = `⚡ NeuroForge Learning Record\n` +
      `Candidate: Pravin Kumar R · AI & Machine Learning Engineer\n` +
      `🔥 Active Streak: ${streak} Days\n` +
      `✓ Concept Mastery: ${totalMastered} / ${totalCards} (${Math.round((totalMastered / totalCards) * 100)}%)\n` +
      `⚡ Knowledge XP: ${totalXP} XP\n` +
      `Platform: https://pravinkumardatafreak.github.io/NeuroForge/`;

    navigator.clipboard.writeText(summaryText).then(() => {
      alert('✓ Learning Record summary copied to clipboard! Ready to share with your friend.');
    }).catch(() => {
      prompt('Copy your learning summary:', summaryText);
    });
  };

  window.exportStudyJournal = function () {
    const journal = localStorage.getItem(JOURNAL_KEY) || '[]';
    const blob = new Blob([journal], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `neuroforge_learning_record_${getTodayString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.clearLearningRecord = function () {
    if (confirm('Are you sure you want to reset your local study record and activity history?')) {
      localStorage.removeItem(JOURNAL_KEY);
      localStorage.removeItem(STREAK_KEY);
      localStorage.removeItem('nf_mastered_viva');
      localStorage.removeItem('nf_daily_study_progress');
      localStorage.setItem('nf_xp', '0');
      if (typeof window.renderRecordPage === 'function') window.renderRecordPage();
      if (typeof window.renderVivaPage === 'function') window.renderVivaPage();
      alert('Study record reset successfully.');
    }
  };
})();
