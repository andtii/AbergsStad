<template>
  <nav :class="['top-menu', { 'top-menu--hidden': isHidden }]">
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
      <li><a href="#section4">Section 4</a></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isHidden = ref(false);
let lastScrollY = 0;

function onScroll() {
  if (typeof window === 'undefined') return;
  const currentY = window.scrollY;
  isHidden.value = currentY > lastScrollY && currentY > 80;
  lastScrollY = currentY;
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', onScroll);
  }
});
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll);
  }
});
</script>

<style scoped>
.top-menu {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s;
  z-index: 1000;
}
.top-menu--hidden {
  transform: translateY(-100%);
  box-shadow: none;
}
.top-menu ul {
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 1rem 2rem;
  list-style: none;
}
.top-menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.top-menu a:hover {
  color: #42b983;
}
</style>
