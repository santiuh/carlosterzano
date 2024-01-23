<template>
    <div class="flex flex-col tracking-[0.2px] font-lexend " style="scroll-behavior: smooth;">
      <HeaderHero id="Header" fondo="header_servicios.png" frase="/header_servicios_frase.svg"></HeaderHero>
      <ServiciosSeccion></ServiciosSeccion>
      <Cuadricula></Cuadricula>
      <Carrucel :fotos="carrServicios" carouselId="carousel_servicios"></Carrucel>
      <NuestroCatering></NuestroCatering>
      <Carrucel :fotos="carrCatering"  carouselId="carousel_catering"></Carrucel>
      <EventosCorporativos></EventosCorporativos>
      <EventosSociales></EventosSociales>
      <Carrucel :fotos="carrEventos"  carouselId="carousel_eventos"></Carrucel>

      <Footer id="Contacto"></Footer>
    
    </div>
</template>
<script setup>
const carrServicios = ['carr_servicios_1.png','carr_servicios_2.png','carr_servicios_3.png']
const carrCatering = ['carr_catering_1.png','carr_catering_2.png','carr_catering_3.png']
const carrEventos = ['carr_eventos_1.png','carr_eventos_2.png','carr_catering_3.png']

</script>