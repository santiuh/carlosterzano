<template>
    <button class="text-white flex justify-center text-center tracking-[0.4px] leading-10 text-xl font-bold bg-primary rounded-[100px] gap-2.5 px-5 xl:px-[28px] py-[12px] xl:min-w-0 min-w-[70vw] xl:w-fit hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-300">
        <svg v-if="props.spin" class="animate-spin h-9 w-9 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p v-if="!props.spin">{{texto}}</p>
        
    </button>
</template>
<script setup>
const props = defineProps (['texto','spin'])
</script>