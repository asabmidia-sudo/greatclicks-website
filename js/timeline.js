/**
 * Modern Timeline - animate progress line and bars on scroll
 */
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.timeline-wrapper');
  if (!wrapper) return;

  const progressLine = wrapper.querySelector('.timeline-progress');
  const bars = wrapper.querySelectorAll('.timeline-bar');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Animate the vertical progress line
        if (progressLine) progressLine.classList.add('animate');

        // Animate each progress bar with stagger
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width;
          }, 800 + i * 200);
        });

        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(wrapper);
});
