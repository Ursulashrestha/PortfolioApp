<template>
    <section class="min-h-screen w-full flex flex-col" ref="contactSection" id="contact-section">
      <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        <h1 class="text-3xl font-bold px-5">Contact</h1>
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div :class="['flex flex-col my-auto transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
        <div class="space-y-8 mx-auto">
          <h1 class="text-3xl font-extrabold text-center">Get in Touch</h1>
          <h1 class="text-5xl font-extrabold text-center" style="color: #5e17eb;">Let's Work Together</h1>
  
          <p v-for="msg in content.externalLink.note" class="text-slate-500 dark:text-slate-300 text-center">{{ msg }}<br /></p>
          <div class="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-x-5">
            <template v-if="content.externalLink.link.email">
              <button class="py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color duration-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white rounded-full" @click="openEmailClient">
                Send an Email
              </button>
              <p class="text-sm mt-8 sm:mt-0 text-slate-500 dark:text-slate-300">{{ content.externalLink.responseTimeMessage }}</p>
            </template>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { onIntersect } from '../composables/onIntersect';
  
  const props = defineProps({
    content: Object,
    transitions: Object
  })
  
  const contactSection = ref({})
  const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true
  
  function openEmailClient() {
    window.open(`mailto:${props.content.externalLink.link.email}`, '_blank');
  }
  </script>