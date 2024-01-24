<template>
    <button class="text-white text-center tracking-[0.4px] leading-10 text-xl font-bold bg-primary rounded-[100px] gap-2.5 px-5 xl:px-[28px] py-[12px] xl:min-w-0 min-w-[70vw] xl:w-fit hover:bg-secondary hover:scale-105 transition-all duration-300">
        {{texto}}
    </button>
</template>
<script setup>
const props = defineProps (['texto'])
</script>