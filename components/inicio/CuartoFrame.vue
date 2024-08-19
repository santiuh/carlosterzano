<template>
    <div class="bg-[#8DA1FA] flex flex-col items-center py-5">

        <div id="carouselIconos" class="glide max-w-[1440px] overflow-hidden">
                  <div class="glide__track" data-glide-el="track">
                  <ul class="glide__slides items-center">
                      <li class="glide__slide overflow-hidden"  v-for="dato in data" >
                          <NuxtImg class="!w-full" :src="dato"></NuxtImg>
                      </li>

                  </ul>
                  </div>
              </div>
       
    </div>



  </template>
  
    
  <script setup>
  import { onMounted } from "vue";
  import Glide from "@glidejs/glide";
  const data = ['/logo13.png','/logo14.png','/logo15.png','/logo16.png','/logo17.png','/logo18.png','/logo19.png','/logo20.png','/logo21.png','/logo22.png','/logo23.png','/logo24.png','/logo25.png']

    
  onMounted(() => {
    new Glide(`#carouselIconos`, {
      type: "carousel",
      autoplay: 1,
      direction: 'rtl',
      animationDuration: 3000,
      animationTimingFunc: "linear",
      perView: 8,
      breakpoints: {
    1280: {
      perView: 4,
    },
    },
      gap: 16,
      }).mount();
    });
  </script>
  
  <style>
  /* Importa los estilos CSS de Glide.js aquí */
  @import "@glidejs/glide/dist/css/glide.core.min.css";
  @import "@glidejs/glide/dist/css/glide.theme.min.css";
  /* Otros estilos específicos de tu carrusel, si es necesario */
  li img{
    width: 100% !important;
  }
  </style>