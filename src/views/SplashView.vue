<template>
    <div class="flex items-center justify-center absolute z-50 bg-white text-black dark:bg-slate-900 dark:text-slate-300 text-center w-screen h-screen">
      <div class="relative">
        <div class="relative flex items-center justify-center w-32 h-32 border-4 border-gray-300 rounded-full animate-spin">
          <!-- Progress Circle -->
          <div class="absolute flex items-center justify-center w-full h-full">
            <p class="text-xl font-bold">{{ percentage }}%</p>
          </div>
        </div>
        <p class="mt-4">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  onMounted(() => {
    progress()
  })
  
  const max = 20;
  const character = '#';
  const hashtags = ref([]);
  const message = computed(() => {
    switch (status.value) {
      case 0:
        return "⏳ LOADING..."
      case 1:
        return "💯 SUCCESS!"
    }
  })
  const percentage = computed(() => {
    return Math.floor((hashtags.value.length / max) * 100);
  })
  const status = ref(0)
  
  const progress = () => {
    if (hashtags.value.length == 0) {
      hashtags.value.push(character);
      const interval = setInterval(advance, 65);
    }
  }
  const advance = () => {
    if (hashtags.value.length >= max) {
      status.value = 1;
      clearInterval(0);
    } else {
      hashtags.value.push(character);
    }
  }
  </script>
  
  <style scoped>
  /* Customize the spin animation */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin {
    animation: spin 2s linear infinite;
  }
  </style>
  