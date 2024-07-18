<template>
<div id="carouselTestimonios" class="glide py-10 px-4 xl:px-[192px] max-w-[1440px] overflow-hidden xl:hidden">
                <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo class="!w-full "></PiensoGlobo>
                    </li>
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo2 class="!w-full "></PiensoGlobo2>
                    </li>
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo3 class="!w-full "></PiensoGlobo3>
                    </li>
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo4 class="!w-full "></PiensoGlobo4>
                    </li>
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo5 class="!w-full "></PiensoGlobo5>
                    </li>
                    <li class="glide__slide rounded-[24px] overflow-hidden h-[311px]" >
                        <PiensoGlobo6 class="!w-full "></PiensoGlobo6>
                    </li>
                </ul>
                </div>
                <div :data-glide-el="'controls-carouselTestimonios'" class="h-0">
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
</template>

  
<script setup>
import { onMounted } from "vue";
import Glide from "@glidejs/glide";
  
onMounted(() => {
  new Glide(`#carouselTestimonios`, {
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