// ===== Animated Number Counters =====

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-counter-target]');

  if (counters.length === 0) return;

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-counter-target'), 10);
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * target);

      el.textContent = prefix + current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
