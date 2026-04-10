/**
 * Schema Wave Visualizer - Vanilla JS adaptation
 * Animated wave lines behind a section (light theme blue palette)
 */
class SchemaWaves {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    this.isVisible = false;
    this.raf = null;

    this.waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.observe();
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.offsetWidth;
    this.canvas.height = parent.offsetHeight;
  }

  observe() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.raf) this.animate();
      },
      { threshold: 0.05 }
    );
    observer.observe(this.canvas);
  }

  updateWaveData() {
    this.waveData.forEach(d => {
      if (Math.random() < 0.01) d.targetValue = Math.random() * 0.7 + 0.1;
      d.value += (d.targetValue - d.value) * d.speed;
    });
  }

  draw() {
    const { ctx, canvas } = this;
    const w = canvas.width;
    const h = canvas.height;

    // Light background fill (matches bg-white)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    this.waveData.forEach((data, i) => {
      const freq = data.value * 7;
      ctx.beginPath();

      for (let x = 0; x < w; x++) {
        const nx = (x / w) * 2 - 1;
        const px = nx + i * 0.04 + freq * 0.03;
        const py = Math.sin(px * 10 + this.time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
        const y = (py + 1) * h / 2;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }

      const intensity = Math.min(1, freq * 0.3);
      // Light-theme blue palette
      const r = 37 + intensity * 22;   // 37-59
      const g = 99 + intensity * 31;   // 99-130
      const b = 235 + intensity * 10;  // 235-245
      ctx.lineWidth = 1 + i * 0.3;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.25)`;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
      ctx.shadowBlur = 4;
      ctx.stroke();
      ctx.shadowBlur = 0;
    });
  }

  animate() {
    if (!this.isVisible) {
      this.raf = null;
      return;
    }
    this.time += 0.02;
    this.updateWaveData();
    this.draw();
    this.raf = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SchemaWaves('schema-wave-canvas');
});
