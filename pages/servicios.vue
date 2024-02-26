<template>
    <div class="flex flex-col tracking-[0.2px] font-lexend " style="scroll-behavior: smooth;">
      <HeaderHero id="Header" fondo="portada2.png" frase="/header_servicios_frase.svg" filtro="rgba(79, 59, 48, 0.70)"></HeaderHero>
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
const carrServicios = ['carr_servicios_4.png','carr_servicios_5.png','carr_servicios_6.png','carr_servicios_7.jpg','carr_servicios_8.jpg','carr_servicios_9.jpg','carr_servicios_10.jpg','carr_servicios_11.jpg','carr_servicios_12.jpg']
const carrCatering = ['carr_catering_1.png','carr_catering_2.png','carr_catering_3.png','carr_catering_4.jpg','carr_catering_5.jpg','carr_catering_6.jpg']
const carrEventos = ['carr_eventos_4.png','carr_eventos_5.png','carr_eventos_6.png','carr_eventos_7.jpg','carr_eventos_8.jpg','carr_eventos_9.jpg']

</script>