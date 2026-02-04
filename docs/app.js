const hero = document.querySelector(".hero");
const menuTrigger = document.querySelector(".menu-trigger");
const menuCloses = document.querySelectorAll("[data-menu-close]");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      hero.classList.add("show");
    }
  },
  { threshold: 0.4 }
);

if (hero) {
  observer.observe(hero);
}

if (menuTrigger) {
  menuTrigger.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuTrigger.classList.toggle("is-open", isOpen);
  });
}

menuCloses.forEach((el) => {
  el.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    if (menuTrigger) {
      menuTrigger.classList.remove("is-open");
    }
  });
});
