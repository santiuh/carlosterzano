
import type BotonVue from './botones/Boton.vue';

import Boton from './botones/Boton.vue';

import type BotonVue from './botones/Boton.vue';
<template>
    <section class="xl:max-w-[1440px] px-4 xl:px-[192px]  pt-[136px] pb-[112px] flex flex-col self-center gap-[60px]">
        <div class="text-title text-[64px] text-center xl:text-start">Nosotros</div>
        <div class="flex flex-col text-xl leading-10 text-justify">
            <p>
            <strong>¡Bienvenidos!</strong> Somos Juli, Belén y Pablo, y somos los fundadores de La Guillermina y quienes llevan adelante cada celebración y evento, junto con un gran equipo detrás que nos ayuda todos los días a lograr nuestros objetivos para que todo salga tal cual lo imaginabas.
            </p>
            <br>
            La Guillermina es mucho más que un salón de eventos, es parte de nuestra historia familiar y es también un lugar donde crecimos y pasamos muchos momentos en familia. Porque es parte de nosotros, queremos hacerte sentir como en casa en tu propia celebración. Nuestro objetivo es mejorar cada día nuestro servicio un poco más y convertir cada evento realizado en un recuerdo para toda la vida.
            <br>
            <br>
            <NuxtPicture class="xl:hidden w-[90vw] self-center" src="/firma.svg"></NuxtPicture>
            <strong class="text-center xl:text-start">¡Te invitamos a descubrir La Guillermina!</strong>
            <div class="flex flex-col-reverse xl:flex-row justify-between  items-center pt-8">
                <NuxtLink class="pt-10 xl:pt-0"  to="/servicios"><BotonesBoton texto="Conocé nuestros servicios"></BotonesBoton></NuxtLink>
                <NuxtPicture class="xl:w-[440px] self-end hidden xl:flex" src="/firma.svg"></NuxtPicture>
            </div> 
        </div>
    </section>
</template>