<template>
  <nav :class="['top-menu', { 'top-menu--hidden': isHidden, 'top-menu--scrolled': isScrolled }]">
    <ul>
      <li><a href="#" @click.prevent="navigateTo('hero')">Hero</a></li>
      <li><a href="#" @click.prevent="navigateTo('about')">About</a></li>
      <li><a href="#" @click.prevent="navigateTo('features')">Features</a></li>
      <li><a href="#" @click.prevent="navigateTo('contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

const emit = defineEmits(['navigate']);
const isHidden = ref(false);
const isScrolled = ref(false);
let lastScrollY = 0;

function onScroll() {
  if (typeof window === 'undefined') return;
  const currentY = window.scrollY;
  isHidden.value = currentY > lastScrollY && currentY > 80;
  lastScrollY = currentY;
}

function handleScroll() {
  if (typeof window === 'undefined') return;
  const hero = document.getElementById('hero');
  if (hero) {
    const heroHeight = hero.offsetHeight;
    isScrolled.value = window.scrollY > heroHeight - 80;
  } else {
    isScrolled.value = window.scrollY > 80;
  }
  onScroll(); // keep existing hide-on-scroll logic
}

function navigateTo(sectionId: string) {
  emit('navigate', sectionId);
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
  }
});
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  box-shadow: none;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.3s, transform 0.3s cubic-bezier(.4,0,.2,1);
  border-bottom: 1.5px solid rgba(255,255,255,0.85);
}
.top-menu--hidden {
  /* Remove transform so menu is always visible */
}
.top-menu--scrolled {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.06);
  border-bottom: 1.5px solid #eee;
}
.top-menu ul {
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 2rem 3rem;
  list-style: none;
  background: none;
  border-radius: 2rem;
}
.top-menu a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.top-menu--scrolled a {
  color: #222;
}
.top-menu a:hover {
  color: #42b983;
}
</style>
