<template>
    <section class="flex flex-col w-full mb-[93px]" style="background: linear-gradient(90deg, #FBF5F5 0%, #EFE1E1 100%);">
      <div class="relative xl:max-w-[1440px] px-4  grid grid-cols-3 gap-5 text-white self-center justify-center xl:justify-start py-10  bg-[url(/fondo_cuadricula.svg)] bg-no-repeat bg-bottom bg-contain xl:bg-[center_right_200px]">
        <CardCuadricula v-for="(dato, i ) in data" :key="i" :data="dato"></CardCuadricula>
      </div>
    </section>
  </template>
  
  <script setup>
  const data = [
    {url:'/grupo.svg',texto:'Capacidad para 120 personas'},
    {url:'/lamparita.svg',texto:'Iluminación robótica de última generación'},
    {url:'/parlante.svg',texto:'Sonido de última generación'},
    {url:'/cable.svg',texto:'Grupo electrógeno'},
    {url:'/latido.svg',texto:'Asistencia médica'},
    {url:'/vestido.svg',texto:'Suite privada y camarín'},
    {url:'/seguridad.svg',texto:'Seguridad privada'},
    {url:'/coche.svg',texto:'Estacionamiento interno'},
    {url:'/catering.svg',texto:'Catering exclusivo'},
  ];
  </script>
  