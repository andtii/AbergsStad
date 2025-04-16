<template>
  <Header @navigate="scrollToSection" />
  <Body ref="bodyRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from './Header.vue';
import Body from './Body.vue';

const bodyRef = ref();

function scrollToSection(sectionId: string) {
  bodyRef.value?.scrollToSection(sectionId);
}
</script>
