<template>
    <div class="flex flex-col tracking-[0.2px] font-lexend text-secondary " style="scroll-behavior: smooth;">
      <InicioHero></InicioHero>
      <!-- <Carrucel :fotos="fotos" carouselId="carousel_index"></Carrucel> -->
      <InicioSegundoFrame></InicioSegundoFrame>
      <InicioTercerFrame></InicioTercerFrame>
   
    
    </div>
  </template>
  <script setup>
  const fotos = ['carr_index_4.png','carr_index_5.png','carr_index_6.png','carr_index_7.jpg','carr_index_8.jpg','carr_index_9.png']
  const fotos1 = ['carr_index_1.png','carr_index_2.png','carr_index_3.png']


  </script>