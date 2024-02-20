<template>
    <div class="flex flex-col tracking-[0.2px] font-lexend " style="scroll-behavior: smooth;">
      <HeaderHero id="Header" fondo="/portada1.jpg" frase="/header_index_frase.svg" filtro="rgba(79, 59, 48, 0.70)"></HeaderHero>
      <Bienvenido></Bienvenido>
      <ComoHacemos></ComoHacemos>
      <Carrucel :fotos="fotos" carouselId="carousel_index"></Carrucel>

      <Formulario id="Contacto"></Formulario>
      <Footer
      ></Footer>
    
    </div>
  </template>
  <script setup>
  const fotos = ['carr_index_4.png','carr_index_5.png','carr_index_6.png','carr_index_7.jpg','carr_index_8.jpg','carr_index_9.png']
  const fotos1 = ['carr_index_1.png','carr_index_2.png','carr_index_3.png']


  </script>