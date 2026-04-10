const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", navList.classList.contains("open"));
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navList.classList.remove("open"));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((link) => {
  const page = link.getAttribute("href");
  if (page === currentPage) link.classList.add("active");
});

const revealTargets = document.querySelectorAll(
  ".card, .section-title, .timeline-item, .highlight-band"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((el) => observer.observe(el));
