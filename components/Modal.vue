<template>
    <div v-if="mostrar" class="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center px-4" style="background-color: rgba(14, 14, 14, 0.487);">
        <div class="bg-white px-4 pb-4 pt-7 rounded-xl flex flex-col items-center gap-4 ">
            <NuxtPicture src="/logo_negro.svg"></NuxtPicture>
            <p class="px-4 text-center text-lg py-2"> {{ props.contenido }}</p>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['contenido','mostrar'])
</script>