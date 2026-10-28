// Navigation: aktives Kapitel markieren + Tastenkürzel 1–5
const chapters = [...document.querySelectorAll(".chapter")];
const links = [...document.querySelectorAll("[data-nav]")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { threshold: 0.6 });
chapters.forEach((c) => observer.observe(c));

document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const i = parseInt(e.key, 10) - 1;
  if (chapters[i]) chapters[i].scrollIntoView({ behavior: "smooth" });
});
// Countdown bis zum Hochzeitstag (Datum steht in index.html im data-date Attribut)
const countdown = document.querySelector(".countdown");
if (countdown) {
  const target = new Date(countdown.dataset.date).getTime();
  const units = { days: 864e5, hours: 36e5, minutes: 6e4, seconds: 1e3 };
  const tick = () => {
    let diff = target - Date.now();
    if (diff <= 0) {
      countdown.className = "countdown--done";
      countdown.textContent = "Wir haben geheiratet!";
      return clearInterval(timer);
    }
    for (const [name, ms] of Object.entries(units)) {
      const value = Math.floor(diff / ms);
      diff -= value * ms;
      countdown.querySelector(`[data-unit="${name}"]`).textContent = String(value).padStart(name === "days" ? 1 : 2, "0");
    }
  };
  const timer = setInterval(tick, 1000);
  tick();
}