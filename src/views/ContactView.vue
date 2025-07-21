<template>
  <section class="min-h-screen w-full flex flex-col" ref="contactSection" id="contact-section">
    <!-- Header -->
    <div class="relative flex py-5 items-center"
         :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      <h1 class="text-3xl font-bold px-5">Contact</h1>
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
    </div>

    <!-- Content -->
    <div :class="['flex flex-col my-auto transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
      <div class="space-y-8 mx-auto w-full px-6 max-w-xl">
        <h1 class="text-3xl font-extrabold text-center">Get in Touch</h1>
        <h1 class="text-5xl font-extrabold text-center text-link-color block">Let's Build Together</h1>

        <p
          v-for="(msg, index) in content.externalLink.note"
          :key="index"
          class="text-slate-500 dark:text-slate-300 text-center"
        >
          {{ msg }}<br />
        </p>


        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-5 mt-8">
          <input
            v-model="form.name"
            type="text"
            placeholder="Name"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-link-color"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>

          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-link-color"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>

          <textarea
            v-model="form.message"
            rows="6"
            placeholder="Drop Your Message Here :)"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-link-color resize-none"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
        <div class="flex justify-center">
          <button
            type="submit"
            :disabled="loading"
            class="py-3 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color duration-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white rounded-full"
          >
            <span v-if="loading" class="animate-spin inline-block mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
          </div>

          <p v-if="status === 'success'" class="text-green-500 text-sm font-medium text-center">Message delivered🚀<br />I’ll reply faster than a caffeinated bot (probably)🤖.</p>
          <p v-if="status === 'error'" class="text-red-500 text-sm font-medium text-center">😬 Uh-oh... something broke. Try resending?</p>
        </form>

        <p class="text-sm mt-8 sm:mt-0 text-slate-500 dark:text-slate-300 text-center">
          {{ content.externalLink.responseTimeMessage }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
  content: Object,
  transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
  : true

// Form state
const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})
const status = ref(null)
const loading = ref(false)

// Backend endpoint
const API_URL = 'https://portfolioapp-backend-services.onrender.com/contact'

// Basic form validation
function validateForm() {
  errors.value = {}
  let valid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    valid = false
  }
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format'
    valid = false
  }
  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    valid = false
  }

  return valid
}

// Submit form
async function submitForm() {
  if (!validateForm()) return

  loading.value = true
  status.value = null

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const result = await response.json()

    if (response.ok && result.success) {
      status.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch (err) {
    console.error(err)
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>
