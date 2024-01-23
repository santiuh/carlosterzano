<template>
    <nav class="hidden xl:flex gap-4 text-white justify-between flex-col-reverse xl:flex-row fixed xl:static w-full transition-all duration-500 z-20">
      <NuxtLink class="hover:brightness-75 hover:cursor-pointer transition-all duration-300" to="/"><NuxtPicture src="/logo.svg"></NuxtPicture></NuxtLink>
      <div class="flex xl:gap-12 font-medium justify-between xl:justify-normal ">
        <NuxtLink class="hover:text-primary hover:cursor-pointer transition-all duration-300" to="/"> Inicio</NuxtLink>
        <NuxtLink class="hover:text-primary hover:cursor-pointer transition-all duration-300" :to="'/' + dato" v-for="dato in data">{{ dato }}</NuxtLink>
        <NuxtLink class="hover:text-primary hover:cursor-pointer transition-all duration-300" to="/#Contacto" >Contacto</NuxtLink>
        <div class="flex flex-row gap-[9px]">
          <a target="_blank" href="https://www.instagram.com/laguillerminaeventos/">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300 " src="instagram.svg" width="24px" height="24px"></NuxtPicture></a>
          <a target="_blank" href="https://www.facebook.com/laguillerminaeventos/">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer transition-all duration-300" src="facebook.svg" width="24px" height="24px"></NuxtPicture></a>
        </div>
      </div>
    </nav>
    <nav class="flex flex-col w-full bg-white xl:hidden fixed z-30 ">
      <div class="w-full flex flex-row justify-between px-4 py-3">
        <div class="w-[24px]"></div>
        <NuxtPicture :class="menu? 'opacity-0': 'opacity-100' " class="self-center transition-all duration-300" src="/logo.svg"></NuxtPicture>
        <NuxtPicture @click="menu = !menu" class="pt-1"  src="/menu.svg"></NuxtPicture>
     </div>
      <div :class="menu ? 'h-44' : 'h-0'" class="flex  flex-col font-semibold text-xl gap-4 pl-8  overflow-hidden transition-all">
          <NuxtLink @click="menu = false" class="hover:text-primary hover:cursor-pointer transition-all duration-300" to="#Header"> Inicio</NuxtLink>
          <NuxtLink @click="menu = false" class="hover:text-primary hover:cursor-pointer transition-all duration-300" :to="'#' + dato" v-for="dato in data">{{ dato }}</NuxtLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  
  const data = ['Nosotros', 'Servicios'];
  const menu = ref(false)
  </script>
  