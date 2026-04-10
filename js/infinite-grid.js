// ===== Infinite Grid Background Animation =====
// Vanilla JS adaptation of the-infinite-grid React component
// Two-layer SVG grid: dim background + mouse-reveal bright layer

class InfiniteGrid {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    // Skip on very small screens
    if (window.innerWidth < 480) return;

    this.offsetX = 0;
    this.offsetY = 0;
    this.speedX = 0.3;
    this.speedY = 0.3;
    this.gridSize = 40;
    this.animationId = null;

    this.init();
    this.setupListeners();
    this.animate();
  }

  createGridSVG(patternId) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.position = 'absolute';
    svg.style.inset = '0';

    const defs = document.createElementNS(ns, 'defs');
    const pattern = document.createElementNS(ns, 'pattern');
    pattern.setAttribute('id', patternId);
    pattern.setAttribute('width', this.gridSize);
    pattern.setAttribute('height', this.gridSize);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('x', '0');
    pattern.setAttribute('y', '0');

    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', `M ${this.gridSize} 0 L 0 0 0 ${this.gridSize}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#2563EB');
    path.setAttribute('stroke-width', '0.75');

    pattern.appendChild(path);
    defs.appendChild(pattern);
    svg.appendChild(defs);

    const rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', `url(#${patternId})`);
    svg.appendChild(rect);

    return { svg, pattern };
  }

  init() {
    // Background grid layer (very subtle)
    const bg = this.createGridSVG('ig-bg-pattern');
    this.bgSvg = bg.svg;
    this.bgPattern = bg.pattern;
    this.bgSvg.style.opacity = '0.08';
    this.bgSvg.style.zIndex = '0';

    // Reveal grid layer (brighter, masked to mouse)
    const reveal = this.createGridSVG('ig-reveal-pattern');
    this.revealSvg = reveal.svg;
    this.revealPattern = reveal.pattern;
    this.revealSvg.style.opacity = '0.4';
    this.revealSvg.style.zIndex = '0';
    this.revealSvg.style.transition = 'mask-image 0.15s ease, -webkit-mask-image 0.15s ease';

    // Hide reveal layer initially (mask offscreen)
    this.setRevealMask(-1000, -1000);

    // Grid wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'infinite-grid-wrapper';
    wrapper.style.cssText = 'position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;';
    wrapper.appendChild(this.bgSvg);
    wrapper.appendChild(this.revealSvg);

    // Insert as first child of container
    this.container.insertBefore(wrapper, this.container.firstChild);
    this.wrapper = wrapper;
  }

  setRevealMask(x, y) {
    const radius = window.innerWidth < 768 ? 200 : 300;
    const mask = `radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(0,0,0,1) 0%, transparent 100%)`;
    this.revealSvg.style.maskImage = mask;
    this.revealSvg.style.webkitMaskImage = mask;
  }

  setupListeners() {
    // Mouse tracking for reveal layer
    this.container.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.setRevealMask(e.clientX - rect.left, e.clientY - rect.top);
    });

    this.container.addEventListener('mouseleave', () => {
      this.setRevealMask(-1000, -1000);
    });

    // Pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.animationId) this.animate();
        } else {
          if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
          }
        }
      });
    });
    observer.observe(this.container);
  }

  animate() {
    this.offsetX = (this.offsetX + this.speedX) % this.gridSize;
    this.offsetY = (this.offsetY + this.speedY) % this.gridSize;

    this.bgPattern.setAttribute('x', this.offsetX);
    this.bgPattern.setAttribute('y', this.offsetY);
    this.revealPattern.setAttribute('x', this.offsetX);
    this.revealPattern.setAttribute('y', this.offsetY);

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new InfiniteGrid('hero-section');
});
