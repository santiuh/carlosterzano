<template>
  <div class="bg-secondary w-full flex justify-center pt-20">
    <div
      class="flex flex-col text-primary max-w-[1440px] w-full px-4 xl:px-20 pb-[165px] self-center"
    >
      <div class="flex flex-col xl:flex-row gap-[43px] w-full">
        <ContDegrade
          class="text-[33px] tracking-widest self-center px-4 xl:px-[22px] font-normal xl:hidden flex"
          >SOBRE MÍ</ContDegrade
        >

        <NuxtImg
          class="w-full h-full object-contain"
          src="/ctPerfil.png"
        ></NuxtImg>
        <div class="flex flex-col text-primary font-light text-[21px]">
          <ContDegrade
            class="text-[33px] tracking-widest px-[22px] font-normal mt-[25px] mb-[35px] hidden xl:flex"
            >SOBRE MÍ</ContDegrade
          >
          <h2 class="font-bold mb-[25px]">
            Carlos Terzano. - C.E.O - Fundador
          </h2>
          <p>Experto en Coaching de Equipos</p>
          <p>Especialista en Desarrollo Humano</p>
          <p>Formación de Líderes</p>
          <p>Tallerista y Conferencista Internacional</p>
          <br />
          <p>
            Siempre me apasionó el desarrollo humano, busco incansablemente la
            forma de potenciar personas, creyendo firmemente, que estamos
            destinados a lograr cosas mayores de las que podemos imaginar.
          </p>
          <br />
          <p>
            Soy psicólogo de profesión, y coach organizacional. Tengo una
            especialización en Psicología deportiva y una maestría
            emprendedurismo.
          </p>
          <br />
          <p>
            Fui director Ejecutivo de Formación Gerencial en la IAE Business
            School y Director del área de consultoría en PDA Internacional,
            donde fui certificador de la herramienta para
            Latinoamérica y Europa.
          </p>
        </div>
      </div>
      <Carrucel
        :fotos="[
          '/ctSobreMiUno.png',
          '/ctSobreMiDos.png',
          '/ctSobreMiTres.png',
        ]"
        carouselId="sobremi"
        class="flex xl:hidden"
      ></Carrucel>
      <div
        class="hidden xl:flex flex-row xl:pl-[33px] w-full gap-1 justify-between my-[66px]"
      >
        <NuxtImg class="w-1/3" src="/ctSobreMiUno.png"></NuxtImg>
        <NuxtImg class="w-1/3" src="/ctSobreMiDos.png"></NuxtImg>
        <NuxtImg class="w-1/3" src="/ctSobreMiTres.png"></NuxtImg>
      </div>
      <div class="flex flex-col xl:pl-[33px] text-[21px] gap-[50px]">
        <p class="font-bold">
          Soy Socio Fundador en Utopías y en Human Growth.
        </p>
        <p class="font-light">
          Actualmente, acompaño a personas y equipos de Organizaciones
          Multinacionales, ONGs y emprendedores de diferentes países de
          Latinoamérica y Europa en espacios individuales, conferencias y
          talleres.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
