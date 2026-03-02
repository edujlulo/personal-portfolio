// // Force scroll to top on page reload
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// Fade-in on scroll
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

// Observa todos los elementos con fade-in
document
  .querySelectorAll(".fade-in")
  .forEach((el) => appearOnScroll.observe(el));

// Función para nuevos elementos dinámicos
function observeNewFade(element) {
  element.classList.add("fade-in");
  appearOnScroll.observe(element);
}

// Ejemplo: cuando agregues proyectos dinámicamente, llama:
// observeNewFade(nuevoProyectoElement);
