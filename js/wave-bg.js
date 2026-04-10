// ===== WebGL Wave Background =====
// Vanilla JS adaptation of wave-background.tsx (OGL/GLSL shader)
// Light theme flowing wave effect

class WaveBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    // Skip on very small screens or no WebGL
    if (window.innerWidth < 480) return;

    this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
    if (!this.gl) return;

    this.animationId = null;
    this.init();
    this.resize();
    this.setupListeners();
    this.animate();
  }

  init() {
    const gl = this.gl;

    // Vertex shader - fullscreen triangle
    const vsSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader - flowing waves (light theme)
    const fsSrc = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform float uTime;

      vec3 palette(float t) {
        return mix(
          vec3(0.9, 0.95, 1.0),
          vec3(0.2, 0.4, 0.8),
          0.5 + 0.5 * sin(6.2831 * t)
        );
      }

      float wave(vec2 uv, float speed, float offset) {
        return sin(uv.x * 3.0 + uTime * speed + offset) * 0.3 +
               cos(uv.y * 2.0 - uTime * speed * 0.5 + offset) * 0.2;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        uv = uv * 2.0 - 1.0;
        uv.x *= uResolution.x / uResolution.y;

        float w1 = wave(uv, 1.2, 0.0);
        float w2 = wave(uv, 0.8, 2.0);
        float w3 = wave(uv, 1.5, 4.0);
        float pattern = (w1 + w2 + w3) * 0.5;

        vec3 col = palette(pattern + uTime * 0.05);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Compile shaders
    const vs = this.compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = this.compileShader(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return;

    // Link program
    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) return;

    gl.useProgram(this.program);

    // Fullscreen triangle (oversized to cover entire viewport)
    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(this.program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    this.uTime = gl.getUniformLocation(this.program, 'uTime');
    this.uResolution = gl.getUniformLocation(this.program, 'uResolution');

    this.startTime = performance.now();
  }

  compileShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
    return shader;
  }

  resize() {
    const parent = this.canvas.parentElement;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const dpr = Math.min(window.devicePixelRatio, 2) * 0.75; // scale down for perf
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  setupListeners() {
    window.addEventListener('resize', () => this.resize());

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
    const time = (performance.now() - this.startTime) / 1000;
    this.gl.uniform1f(this.uTime, time);
    this.gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WaveBackground('wave-canvas');
});
