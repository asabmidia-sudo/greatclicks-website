/**
 * Tilt Cards - Vanilla JS adaptation of ProductHighlightCard
 * 3D tilt on mouse move with radial glow follow effect
 */
class TiltCards {
  constructor(selector) {
    this.cards = document.querySelectorAll(selector);
    if (!this.cards.length) return;
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      // Create glow overlay
      const glow = document.createElement('div');
      glow.className = 'tilt-glow';
      card.appendChild(glow);

      // Current and target rotation values for spring-like lerp
      const state = { rx: 0, ry: 0, trx: 0, try: 0, gx: 50, gy: 50, active: false };

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        state.trx = ((y - cy) / cy) * -8;  // rotateX: tilt forward/back
        state.try = ((x - cx) / cx) * 8;   // rotateY: tilt left/right
        state.gx = (x / rect.width) * 100;
        state.gy = (y / rect.height) * 100;
        state.active = true;

        glow.style.opacity = '1';
        glow.style.background = `radial-gradient(300px circle at ${state.gx}% ${state.gy}%, rgba(59, 130, 246, 0.12), transparent 60%)`;
      });

      card.addEventListener('mouseleave', () => {
        state.trx = 0;
        state.try = 0;
        state.active = false;
        glow.style.opacity = '0';
      });

      // Smooth animation loop (spring-like lerp)
      const animate = () => {
        state.rx += (state.trx - state.rx) * 0.12;
        state.ry += (state.try - state.ry) * 0.12;

        // Snap to zero when close enough
        if (Math.abs(state.rx) < 0.01 && Math.abs(state.ry) < 0.01 && !state.active) {
          state.rx = 0;
          state.ry = 0;
        }

        card.style.transform = `perspective(800px) rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale3d(${state.active ? 1.02 : 1}, ${state.active ? 1.02 : 1}, 1)`;

        requestAnimationFrame(animate);
      };
      animate();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TiltCards('.tilt-card');
});
