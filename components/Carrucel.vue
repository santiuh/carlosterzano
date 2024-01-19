<template>    
    <div class="glide flex flex-row gap-2 bg-secondary py-10">
        <div
        data-glide-el="controls"
        class="self-center flex xl:hidden">
        </div>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
               <!-- <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta.jpg)] bg-cover !h-[300px] !w-[400px]"></li>
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta2.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta3.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta4.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta6.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>       -->

                <li class="glide__slide rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta2.jpg" width="439" ></NuxtPicture>
                </li>            
                <li class="glide__slide  rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta3.jpg" width="439" ></NuxtPicture>
                </li>
                <li class="glide__slide  rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta4.jpg" width="439" ></NuxtPicture>
                </li>  
                <li class="glide__slide rounded-xl overflow-hidden"  >
                    <NuxtPicture src="/fiesta6.jpg" width="439" ></NuxtPicture>
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