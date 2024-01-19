<template>
    <button class="text-white  leading-[28px] font-bold bg-primary rounded-[37px] gap-2.5 px-5 xl:px-[36px] py-[10px] w-fit hover:contrast-75 transition-all duration-300">
        {{texto}}
    </button>
</template>
<script setup>
const props = defineProps (['texto'])
</script>