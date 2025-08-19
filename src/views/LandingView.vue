<template>
    <section class="min-h-[calc(100vh*0.80)] w-full flex justify-center" id="landing-page">
        <div class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 flex-col md:flex-row m-auto">
            <img
        :class="[ 
            'max-w-[20rem] max-h-[20rem] md:max-w-[22rem] md:max-h-[22rem] lg:max-w-[28rem] lg:max-h-[28rem] transition-all motion-reduce:transition-none duration-500 delay-[400ms]',
            showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0',
            'float' // floating effect
        ]"
        :src="getImageUrl(content.portraitLink)"
        style="object-fit: contain;" 
    />


            <div class="flex flex-col space-y-3 text-center md:text-left">
                <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-500 delay-[500ms]"
                   :class="showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'">
                   {{ content.intro }}
                </p>

                <!-- Typing Effect -->
                <h1 class="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#A886E4] to-[#dd1eeb] bg-clip-text text-transparent transition-all duration-500 delay-[550ms]">
                {{ typedName }}<span class="inline-block w-[1ch]" :class="{ 'opacity-100': cursorVisible, 'opacity-0': !cursorVisible }">|</span>
            </h1>



                <p class="text-sm lg:text-base text-gray-500 dark:text-gray-400 transition-all duration-500 delay-[600ms]"
                   :class="showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'">
                   {{ content.message }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    content: Object,
    showTransition: Boolean
});

const typedName = ref('');
const cursorVisible = ref(true);

const images = import.meta.glob('@/assets/images/*', { eager: true });

const getImageUrl = (path) => {
  const key = `/src/assets/${path}`;
  return images[key]?.default || '';
};

// Terminal-like typing effect
const typeEffect = (text, speed = 100, pauseBeforeErase = 1500) => {
    let i = 0;
    let isErasing = false;
    let pauseCounter = 0;

    const interval = setInterval(() => {
        if (!isErasing) {
            if (i < text.length) {
                typedName.value += text[i];
                i++;
            } else {
                // Start pause before erasing
                pauseCounter += speed;
                if (pauseCounter >= pauseBeforeErase) {
                    isErasing = true;
                    pauseCounter = 0;
                }
            }
        } else {
            if (i > 0) {
                typedName.value = text.substring(0, i - 1);
                i--;
            } else {
                isErasing = false;
            }
        }
    }, speed);
};


// Cursor blink effect
setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
}, 500);

// Start typing when transition shows
watchEffect(() => {
    if (props.showTransition && props.content?.name) {
        typedName.value = ''; // Reset text
        typeEffect(props.content.name, 120, 1500);
    }
});
</script>


<style>
/* Blinking Cursor */
@keyframes blink {
    50% { opacity: 0; }
}
.animate-blink {
    display: inline-block;
    animation: blink 0.8s step-end infinite;
}
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); } /* Move up 10px at midpoint */
}

.float {
    animation: float 3s ease-in-out infinite;
}

</style>
