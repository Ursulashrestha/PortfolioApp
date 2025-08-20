<template>
  <section class="min-h-screen w-full" ref="skillsSection" id="skills-section">
<div
  class="relative flex py-5 items-center
  transition-all motion-reduce:transition-none duration-500"
  :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']"
>
  <h1 class="text-3xl font-bold pr-2 sm:pr-5">Skills</h1>
  <div class="flex-grow border-t border-black dark:border-white border-1"></div>
</div>

<!-- Grid content -->
<div class="container mx-auto px-4 sm:px-6">
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full
    transition-all motion-reduce:transition-none duration-500 delay-300"
    :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']"
  >
    <div
      v-for="(tech, index) in techStack"
      :key="index"
      class="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300"
    >
      <img
        :src="getImageUrl(tech.icon)"
        :alt="tech.name"
        class="w-16 h-16 object-contain mb-3 transition-transform duration-300 group-hover:rotate-6"
      />
      <span class="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
        {{ tech.name }}
      </span>
    </div>
  </div>
</div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import portfolio from '../portfolio'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
  content: Object,
  transitions: Object
})

const showPreview = true
const showMore = ref(false)
const skillsSection = ref({})

const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ? onIntersect(skillsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
  : true

let toggleShowMore = () => {
  showMore.value = !showMore.value
}

const images = import.meta.glob('@/assets/images/*', { eager: true })
const getImageUrl = (path) => {
  const key = `/src/assets/${path}`
  return images[key]?.default || ''
}

const techStack = portfolio.techStack
</script>
