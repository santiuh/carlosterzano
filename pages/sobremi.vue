<template>
    <div class="bg-secondary w-full flex justify-center pt-20">
    <div class=" flex flex-col text-primary max-w-[1440px] w-full px-4 xl:px-20 pb-[165px] self-center">
        <div class="flex flex-col xl:flex-row gap-[43px] ">
            <ContDegrade class=" text-[33px] tracking-widest self-center px-4 xl:px-[22px] font-normal xl:hidden flex">SOBRE MÍ</ContDegrade>

            <NuxtImg class="xl:!w-1/2 !w-auto !h-auto" src="/ctPerfil.png"></NuxtImg>
            <div class="flex flex-col text-primary font-light text-[21px] 2xl:text-nowrap">
                <ContDegrade class=" text-[33px] tracking-widest px-[22px] font-normal mt-[25px] mb-[35px] hidden xl:flex">SOBRE MÍ</ContDegrade>
                <h2 class="font-bold mb-[25px]">Carlos Terzano. - C.E.O - Fundador </h2>
                <p>Experto en Coaching de Equipos | Especialista en Desarrollo Humano</p>
                <p class="mb-[50px]">Formación de Líderes | Tallerista y Conferencista Internacional</p>
                <p >Siempre me apasionó el desarrollo humano, busco incansablemente </p>
                <p> la forma de potenciar personas, creyendo firmemente, que estamos</p>
                <p class="mb-[50px]">destinados a lograr cosas mayores de las que podemos imaginar.</p>
                <p >Soy psicólogo de profesión, y coach organizacional. Tengo una </p>
                <p>especialización en Psicología deportiva y una maestría en mo</p>
                <p class="mb-[50px]">emprendeduriso.</p>
                <p>Fui director Ejecutivo de Formación Gerencial en la IAE Business School </p>
                <p >y Director del área de consultoría en PDA Internacional, donde fui</p>
                <p class="mb-2">certificador de la herramienta para Latinoamérica y Europa.</p>
            </div>
        </div>
        <Carrucel :fotos="['/ctSobreMiUno.png','/ctSobreMiDos.png','/ctSobreMiTres.png']" carouselId="sobremi" class="flex xl:hidden"></Carrucel>
        <div class="hidden xl:flex flex-row xl:pl-[33px] w-full gap-1 justify-between my-[66px]">
            <NuxtImg class="w-1/3" src="/ctSobreMiUno.png"></NuxtImg>
            <NuxtImg class="w-1/3" src="/ctSobreMiDos.png"></NuxtImg>
            <NuxtImg class="w-1/3" src="/ctSobreMiTres.png"></NuxtImg>
        </div>
        <div class="flex flex-col xl:pl-[33px] text-[21px] gap-[50px]">
            <p class="font-bold">Soy Socio Fundador en Utopías y en Human Growth.</p>
            <p class="font-light">Actualmente, acompaño a personas y equipos de Organizaciones Multinacionales, ONGs y emprendedores
                de diferentes países de Latinoamérica y Europa en espacios individuales, conferencias y talleres.</p>
        </div>
    </div>
</div>
</template>
<script setup></script>