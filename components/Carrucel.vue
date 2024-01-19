<template>    
    <div class="glide flex flex-row gap-2 bg-secondary py-10">
        <div
        data-glide-el="controls"
        class="self-center flex xl:hidden">
        <button class="text-[40px] pr-2 text-white font-semibold hover:scale-150 transition-transform z-30" data-glide-dir="<">&lt;</button>
        </div>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta2.jpg"></NuxtPicture>
                </li>            
                <li class="glide__slide  rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta3.jpg"></NuxtPicture>
                </li>
                <li class="glide__slide  rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta4.jpg"></NuxtPicture>
                </li>  
                <li class="glide__slide rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta6.jpg"></NuxtPicture>
                </li>

            </ul>
        </div>
        <div data-glide-el="controls" class="self-center flex xl:hidden">
            <button
                data-glide-dir=">"
                class="text-[40px] pl-2 text-white font-semibold hover:scale-150 transition-transform z-30">
                >
            </button>
        </div>
    </div>
</template>
  
  <script setup>
  import { onMounted } from "vue";
  import Glide from "@glidejs/glide";

  onMounted(() => {
    new Glide(".glide" ,{
        type: 'carousel',
        autoplay: 1,
        animationDuration: 7000,
        animationTimingFunc: 'linear',
        perView: 3,
        gap: 20,
    }).mount();
  });
  </script>
  
  <style>
  /* Importa los estilos CSS de Glide.js aquí */
  @import "@glidejs/glide/dist/css/glide.core.min.css";
  @import "@glidejs/glide/dist/css/glide.theme.min.css";
  /* Otros estilos específicos de tu carrusel, si es necesario */
  </style>