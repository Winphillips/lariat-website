<template>
  <canvas ref="canvas" class="fireflies-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps<{
  isActive: boolean;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number;
let particles: Particle[] = [];
let width = 0;
let height = 0;

// Configuration
const PARTICLE_COUNT = 60; // Low count for performance, high enough for effect
const COLORS = ['rgba(255, 255, 150, ', 'rgba(200, 255, 150, ']; // Yellow/Greenish

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;

  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    // Slow, drifting movement
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random();
    this.pulseSpeed = 0.02 + Math.random() * 0.03;
    this.pulseOffset = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around edges to cover full page length
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // Twinkle effect using sine wave
    this.pulseOffset += this.pulseSpeed;
    this.alpha = 0.5 + 0.5 * Math.sin(this.pulseOffset);
  }

  draw() {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Pick a color and apply current alpha
    ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)] + this.alpha + ')';
    ctx.fill();
  }
}

const initParticles = () => {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
};

const animate = () => {
  if (!ctx || !canvas.value) return;
  
  // Clear rectangle
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  if (props.isActive) {
    animationFrameId = requestAnimationFrame(animate);
  }
};

const handleResize = () => {
  if (canvas.value) {
    // Get parent dimensions to cover full page length
    const parent = canvas.value.parentElement;
    if (parent) {
      width = parent.clientWidth;
      height = parent.clientHeight; // This ensures it covers scrollable height
      canvas.value.width = width;
      canvas.value.height = height;
    }
    // Re-distribute particles if size changes drastically
    if (particles.length === 0) initParticles();
  }
};

// Watcher to start/stop based on scroll position
watch(() => props.isActive, (newVal) => {
  if (newVal) {
    handleResize(); // Ensure size is correct before starting
    if (particles.length === 0) initParticles();
    animate();
  } else {
    cancelAnimationFrame(animationFrameId);
  }
});

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d');
    window.addEventListener('resize', handleResize);
    // Initial size setup
    setTimeout(handleResize, 100); 
    
    // If mounted and already active (edge case), start
    if (props.isActive) animate();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.fireflies-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 300;
}
</style>