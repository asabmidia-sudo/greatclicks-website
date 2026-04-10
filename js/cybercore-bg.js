/**
 * Cybercore Background - Vanilla JS adaptation
 * Rising light beams with floor grid and central glow
 * Light theme variant using blue palette
 */
class CybercoreBackground {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.beamCount = options.beamCount || 70;
    this.isVisible = false;

    this.build();
    this.observe();
  }

  build() {
    // Scene wrapper
    const scene = document.createElement('div');
    scene.className = 'cybercore-scene';
    scene.setAttribute('aria-hidden', 'true');

    // Floor with animated grid
    const floor = document.createElement('div');
    floor.className = 'cybercore-floor';
    scene.appendChild(floor);

    // Central glow column
    const column = document.createElement('div');
    column.className = 'cybercore-column';
    scene.appendChild(column);

    // Light beams container
    const beamContainer = document.createElement('div');
    beamContainer.className = 'cybercore-beams';

    for (let i = 0; i < this.beamCount; i++) {
      const beam = document.createElement('div');
      const riseDur = Math.random() * 3 + 5; // 5-8s
      const type = Math.random() < 0.15 ? 'secondary' : 'primary';

      beam.className = `cybercore-beam ${type}`;
      beam.style.left = `${Math.random() * 100}%`;
      beam.style.width = `${Math.floor(Math.random() * 2) + 1}px`;
      beam.style.animationDelay = `${Math.random() * 6}s`;
      beam.style.animationDuration = `${riseDur}s, ${riseDur}s`;

      beamContainer.appendChild(beam);
    }

    scene.appendChild(beamContainer);
    this.container.prepend(scene);
    this.scene = scene;
  }

  observe() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
        if (this.scene) {
          this.scene.style.animationPlayState = this.isVisible ? 'running' : 'paused';
          // Pause all beam animations when not visible
          const beams = this.scene.querySelectorAll('.cybercore-beam');
          beams.forEach(b => {
            b.style.animationPlayState = this.isVisible ? 'running' : 'paused';
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(this.container);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new CybercoreBackground('cta', { beamCount: 70 });
});
