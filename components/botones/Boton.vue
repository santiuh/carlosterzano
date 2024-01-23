<template>
    <button class="text-white tracking-[0.4px] leading-10 text-xl font-bold bg-primary rounded-[100px] gap-2.5 px-5 xl:px-[28px] py-[12px] w-fit hover:bg-secondary hover:scale-105 transition-all duration-300">
        {{texto}}
    </button>
</template>
<script setup>
const props = defineProps (['texto'])
</script>