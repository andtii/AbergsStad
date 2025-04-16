<template>
  <section id="hero" class="hero-section">
    <Hero />
  </section>
  <section id="about" class="about-section">
    <h2>About Us</h2>
    <p>We are a modern company focused on delivering quality solutions for our clients. Our team is passionate about technology and innovation.</p>
  </section>
  <section id="features" class="features-section">
    <h2>Features</h2>
    <img src="/clean-desktop.avif" alt="Clean Desktop" style="max-width: 400px; width: 100%; border-radius: 1rem; margin: 2rem auto; display: block; box-shadow: 0 4px 24px rgba(0,0,0,0.08);" />
    <ul>
      <li>Fast and reliable service</li>
      <li>Modern technology stack</li>
      <li>Customer-focused approach</li>
      <li>24/7 Support</li>
      <li>Scalable Solutions</li>
    </ul>
  </section>
  <section id="contact" class="contact-section">
    <h2>Contact</h2>
    <p>Get in touch with us at <a href="mailto:info@example.com">info@example.com</a>.</p>
    <p>Visit us at 123 Main Street, Cityville.</p>
  </section>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue';
import Hero from './Hero.vue';

function scrollToSection(sectionId: string) {
  if (sectionId === 'hero') {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }
  const el = document.getElementById(sectionId);
  const hero = document.getElementById('hero');
  if (el && hero) {
    const heroHeight = hero.offsetHeight;
    const y = el.getBoundingClientRect().top + window.pageYOffset - heroHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
defineExpose({ scrollToSection });
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  /* width: 100vw; */
  margin-bottom: 2rem;
  padding: 0;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
.about-section {
  min-height: 80vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
}
.features-section {
  min-height: 80vh;
  background: #e3f2fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
}
.contact-section {
  min-height: 60vh;
  background: #fff3e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
}
</style>
