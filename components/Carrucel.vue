<template>    
    <div class="glide flex flex-row gap-2 py-10 px-[75px]" style="background: linear-gradient(90deg, #FBF5F5 0%, #EFE1E1 100%);;">
        <div
        data-glide-el="controls"
        class="self-center flex xl:hidden">
        </div>
        <div class="glide__track " data-glide-el="track">
            <ul class="glide__slides">
               <!-- <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta.jpg)] bg-cover !h-[300px] !w-[400px]"></li>
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta2.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta3.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta4.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>      
               <li class="glide__slide rounded-xl overflow-hidden bg-[url(fiesta6.jpg)] bg-cover !h-[300px] !w-[400px]"> </li>       -->

                <li class="glide__slide rounded-[24px] !w-[435px] overflow-hidden"  v-for="dato in data" >
                    <NuxtPicture :src="dato" ></NuxtPicture>
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

  const data = ['carr_index_1.png','carr_index_2.png','carr_index_3.png']

  onMounted(() => {
    new Glide(".glide" ,{
        type: 'carousel',
        autoplay: 0,
        animationDuration: 7000,
        animationTimingFunc: 'linear',
        perView: 3,
        gap: 16,
    }).mount();
  });
  </script>
  
  <style>
  /* Importa los estilos CSS de Glide.js aquí */
  @import "@glidejs/glide/dist/css/glide.core.min.css";
  @import "@glidejs/glide/dist/css/glide.theme.min.css";
  /* Otros estilos específicos de tu carrusel, si es necesario */
  </style>