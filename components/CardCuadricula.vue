<template>
    <button @click="oculto = !oculto" class="p-6 hover:xl:scale-105 hover:bg-secondary transition-all flex rounded-[32px] xl:gap-[16px] justify-center items-center flex-col bg-primary xl:w-[328px] xl:h-[233px]" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);">
      <NuxtPicture :src="data.url"></NuxtPicture>
      <div class="hidden xl:flex font-bold tracking-[0.48px] text-center text-2xl">{{ data.texto }}</div>
    </button>
    <Transition name="fade">
      <div @click="oculto = !oculto" v-show="!oculto" class="flex xl:hidden absolute w-full p-4 justify-center h-full items-center">
        <button class="flex h-[60%] w-[90%] p-6 hover:xl:scale-105 bg-secondary transition-all rounded-[32px] xl:gap-[16px] justify-center items-center flex-col xl:w-[328px] xl:h-[233px] shadow-2xl" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);">
          <NuxtPicture :src="data.url"></NuxtPicture>
          <div class="flex font-bold tracking-[0.48px] text-center text-2xl">{{ data.texto }}</div>
        </button>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { defineProps } from '@vue/runtime-core'
  
  const oculto = ref(true)
  const props = defineProps(['data'])
  </script>
  
    <style>
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    transform: scale(0);
  }

  .fade-enter-to, .fade-leave-from {
    transform: scale(1);
  }
  </style>
  