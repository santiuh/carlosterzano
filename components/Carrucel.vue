<template>
    <section class="flex justify-center" >
      <div :id="carouselId" class="glide py-10 px-4 xl:px-[192px] max-w-[1440px] overflow-hidden">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" v-for="(foto, index) in fotos" :key="index">
              <NuxtImg :src="foto"></NuxtImg>
            </li>
          </ul>
        </div>
        <div :data-glide-el="'controls-' + carouselId" class="h-0">
          <NuxtImg
            width="32px"
            src="/chevron-left.svg"
            :data-glide-dir="'<'"
            class="absolute top-[45%] left-0 xl:ml-[180px] z-10 text-white font-semibold hover:scale-150 active:scale-125 transition-transform">
          </NuxtImg>
          <NuxtImg
            width="32px"
            src="/chevron-right.svg"
            :data-glide-dir="'> '"
            class="absolute top-[45%] right-0 xl:mr-[180px] z-10 text-white font-semibold hover:scale-150 active:scale-125 transition-transform">
          </NuxtImg>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import Glide from "@glidejs/glide";
  
  const { fotos, carouselId } = defineProps(["fotos", "carouselId"]);
  
  onMounted(() => {
    new Glide(`#${carouselId}`, {
      type: "carousel",
      autoplay: 0,
      animationDuration: 300,
      animationTimingFunc: "linear",
      perView: 3,
      breakpoints: {
    1280: {
      perView: 1
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
  