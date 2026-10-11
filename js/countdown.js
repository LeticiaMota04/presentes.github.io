// ---------- Countdown ----------
const targetDate = new Date("2027-01-09T16:00:00-03:00").getTime();

function updateCountdown() {
  const diff = Math.max(0, targetDate - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const set = function(id, v) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(v).padStart(2, "0");
  };
  set("cd-days", d); set("cd-hours", h); set("cd-min", m); set("cd-sec", s);
}

export function startCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
