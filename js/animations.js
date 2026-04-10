// ===== Canvas Particle Network Animation =====

class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;

    // Responsive particle count
    const width = window.innerWidth;
    if (width < 480) {
      this.canvas.style.display = 'none';
      return;
    }
    this.particleCount = width < 768 ? 30 : 70;
    this.connectionDistance = width < 768 ? 100 : 150;

    this.init();
    this.animate();
    this.setupListeners();
  }

  init() {
    this.resize();
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  setupListeners() {
    window.addEventListener('resize', () => this.resize());

    this.canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.parentElement.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Pause when not visible
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
    observer.observe(this.canvas);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction - gentle push
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += dx * 0.0003;
          p.vy += dy * 0.0003;
        }
      }

      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1) {
        p.vx *= 0.99;
        p.vy *= 0.99;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
      this.ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.connectionDistance) {
          const opacity = (1 - dist / this.connectionDistance) * 0.08;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    // Mouse connections
    if (this.mouse.x !== null) {
      this.particles.forEach(p => {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const opacity = (1 - dist / 200) * 0.1;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize all particle canvases on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.particle-canvas').forEach(canvas => {
    new ParticleNetwork(canvas.id);
  });
});
