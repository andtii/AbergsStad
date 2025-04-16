<template>
  <div class="hero">
    <video class="hero-bg-video" src="/hero-video.mp4" autoplay loop muted playsinline></video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>Welcome to Our Site</h1>
      <p>Your success starts here. Discover our services and solutions.</p>
      <button>Get Started</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any hero-specific logic here if needed
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(20,20,30,0.7) 0%, rgba(20,20,30,0.0) 100%);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
.hero button {
  background: #fff;
  color: #4f8cff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.hero button:hover {
  background: #4f8cff;
  color: #fff;
}
</style>
