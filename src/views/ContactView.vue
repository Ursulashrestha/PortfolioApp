<template>
  <section class="min-h-screen w-full flex flex-col" ref="contactSection" id="contact-section">
    <div class="relative flex py-5 items-center"
         :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      <h1 class="text-3xl font-bold px-5">Contact</h1>
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
    </div>

    <div :class="['flex flex-col my-auto transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
      <div class="space-y-8 mx-auto w-full px-6 max-w-xl text-center">
        <h1 class="text-3xl font-extrabold">Get in Touch</h1>
        <h1 class="text-5xl font-extrabold text-link-color block">Let's Build Together</h1>

        <p
          v-for="(msg, index) in content.externalLink.note"
          :key="index"
          class="text-slate-500 dark:text-slate-300"
        >
          {{ msg }}<br />
        </p>

        <a
        :href="socialMediaLinks.linkedin"
        target="_blank"
        class="inline-block mt-8 text-4xl transition-transform duration-300 text-black dark:text-white animate-screamJump hover:scale-125 linkedin-rays "
      >
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>


        <p class="text-sm mt-8 text-slate-500 dark:text-slate-300">
          {{ content.externalLink.responseTimeMessage }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onIntersect } from '../composables/onIntersect'
import portfolio from '../portfolio'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  content: Object,
  transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
  : true

const socialMediaLinks = portfolio.socialMediaLinks
</script>

<script>
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
/* Radial pulsing rays behind icon */
.linkedin-rays::before {
  content: '';
  position: absolute;
  inset: 50%; /* center the pseudo-element */
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(10,102,194,0.5) 0%, transparent 70%);
  opacity: 0;
  animation: pulse 0.8s infinite;
  z-index: -1;
  pointer-events: none;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.3);
  }
}
</style>