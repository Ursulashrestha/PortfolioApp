<template>
  <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
    
    <div class="flex items-center space-x-4 mb-2">
      <!-- Avatar -->
      <div class="w-16 h-16 rounded-full overflow-hidden border border-gray-300 dark:border-slate-600">
        <img :src="getImageUrl(experience.company.comp_logo)" alt="Company Logo" class="object-fit object-center w-full h-full" />
      </div>

      <!-- Position & Company -->
      <div>
        <h3 class="text-xl font-extrabold leading-snug">
          <span>{{ experience.position }}</span>
          <a :href="experience.company.link" class="text-link-color block">{{ experience.company.name }}</a>
        </h3>
      </div>
    </div>

    <p class="italic">{{ experience.duration }}</p>

    <ul class="list-['\2B50'] pl-6 pt-4 text-slate-500 dark:text-slate-300">
      <li v-for="bullet in experience.bulletPoints" class="pl-2 pb-2">{{ bullet }}</li>
    </ul>

    <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
      <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">{{ hashtag }}</p>
    </div>
  </div>
</template>


<script setup>

const props = defineProps({
    experience: Object,
})

const images = import.meta.glob('@/assets/images/*', { eager: true });

const getImageUrl = (path) => {
  const key = `/src/assets/${path}`;
  return images[key]?.default || '';
};

</script>