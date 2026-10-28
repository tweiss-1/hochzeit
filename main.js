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
