<template>
    <div class="flex flex-col tracking-[0.2px] font-lexend " style="scroll-behavior: smooth;">
      <HeaderHero id="Header" fondo="/header_index.jpeg" frase="/header_index_frase.svg"></HeaderHero>
      <Bienvenido></Bienvenido>
      <ComoHacemos></ComoHacemos>
      <Carrucel :fotos="fotos" carouselId="carousel_index"></Carrucel>

      <Formulario id="Contacto"></Formulario>
      <Footer
      ></Footer>
    
    </div>
  </template>
  <script setup>
  const fotos = ['carr_index_1.png','carr_index_2.png','carr_index_3.png']

  </script>