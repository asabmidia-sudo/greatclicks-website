/**
 * Glow Border Card - rotating conic gradient border that follows cursor
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.glow-border-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(y, x);
      card.style.setProperty('--rotation', `${angle}rad`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotation', '0deg');
    });
  });
});
