<template>
    <div class="bg-primary flex justify-center w-full">
        <div class="flex flex-col max-w-[1440px] xl:px-20 px-4  w-full">
            <ContDegrade class="xl:px-8 px-3 text-center xl:text-start text-[24px] xl:text-[33px] self-start my-[75px] ml-6">SERVICIOS PENSADOS PARA VOS</ContDegrade>
            <div class="flex flex-row gap-5 mb-[-4px]">
                <div class="flex flex-col items-center gap-4">
                    <ServiciosServicio class="!w-full !h-full"  @click="activa = 1" :class="activa === 1 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''"></ServiciosServicio>
                    <svg v-show="activa === 1" xmlns="http://www.w3.org/2000/svg" width="89.645" height="68.758" viewBox="0 0 89.645 68.758">
                     <path id="Trazado_112" data-name="Trazado 112" d="M4436.373,824.812l89.645,68.758h-78.513Z" transform="translate(-4436.373 -824.812)" fill="#fff"/>
                    </svg>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <ServiciosServicio2  class="!w-full !h-full"  @click=" activa = 2"  :class="activa === 2 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''"></ServiciosServicio2>
                    <svg v-show="activa === 2" xmlns="http://www.w3.org/2000/svg" width="89.645" height="68.758" viewBox="0 0 89.645 68.758">
                    <path id="Trazado_112" data-name="Trazado 112" d="M4526.018,824.812l-89.645,68.758h78.513Z" transform="translate(-4436.373 -824.812)" fill="#fff"/>
                    </svg>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <ServiciosServicio3  class="!w-full !h-full"  @click="activa = 3" :class="activa === 3 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''"></ServiciosServicio3>
                    <svg v-show="activa === 3" xmlns="http://www.w3.org/2000/svg" width="89.645" height="68.758" viewBox="0 0 89.645 68.758">
                    <path id="Trazado_112" data-name="Trazado 112" d="M4526.018,824.812l-89.645,68.758h78.513Z" transform="translate(-4436.373 -824.812)" fill="#fff"/>
                    </svg>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <ServiciosServicio4  class="!w-full !h-full"  @click="activa = 4"  :class="activa === 4 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''"></ServiciosServicio4>
                    <svg v-show="activa === 4" xmlns="http://www.w3.org/2000/svg" width="89.645" height="68.758" viewBox="0 0 89.645 68.758">
                    <path id="Trazado_112" data-name="Trazado 112" d="M4526.018,824.812l-89.645,68.758h78.513Z" transform="translate(-4436.373 -824.812)" fill="#fff"/>
                    </svg>
                </div>
                
            </div>
            <div class="flex flex-col px-6" v-show="activa === 1">
            <div  class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
«El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos.» – Michael Jordan

¿Te preguntas cómo construir una base sólida de confianza entre los miembros de tu equipo? ¿Te interesa fomentar un ambiente de seguridad psicológica donde cada miembro del equipo pueda expresarse libremente? ¿Quieres potenciar el talento individual y canalizarlo hacia un gran esfuerzo colectivo?

A partir de mi formación de equipos de alto rendimiento y mi experiencia de más de 20 años, he transitado junto a distintos equipos en Latinoamérica un proceso transformacional. A partir del mismo, la humanidad, la construcción de confianza, la comunicación sincera y transparente, la colaboración y la gestión de los focos claves en la gestión de un equipo, pasan a ser los hábitos centrales en el funcionamiento de los equipos.
Creo en los procesos que transforman de manera silenciosa, cuidada y que se mantienen en el tiempo. Creo en las conversaciones sinceras y profundas que incomodan, porque la incomodidad muchas veces es el primer impulso para el desarrollo personal y grupal. Creo en los vínculos colaborativos, en la construcción de una red, que nos permita convencernos de que con otros podemos siempre más.
            </div>
             </div>
             <div class="flex flex-col px-6" v-show="activa === 2">
            <div  class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
                «La inversión en desarrollo personal es el camino hacia la excelencia en el trabajo y la clave para desbloquear tu máximo potencial.» – Brian Tracy

¿Te gustaría un cambio significativo en tu vida laboral, en tu liderazgo, en tu manera de vincularte? ¿Deseas alcanzar tus metas profesionales y personales de una manera auténtica?

Te acompaño en un proceso donde puedas sumergirte en tu mundo, comprendiendo tus deseos, desafíos y aspiraciones. Desde la empatía y la escucha activa, podemos trabajar juntos para descubrir tus fortalezas y potenciarlas. 
En cada sesión, exploramos tus valores más profundos y alineamos tus objetivos con tu propósito laboral y de vida. Con herramientas y técnicas diagnósticas, te acompaño en cada paso del proceso, iluminando tus habilidades y desafiando los pensamientos limitantes que te puedan surgir.
El proceso de coaching y desarrollo personal/profesional es un viaje de autodescubrimiento y crecimiento, para manifestar tu potencial al máximo.           </div>
             </div>
             <div class="flex flex-col px-6" v-show="activa === 3">
            <div  class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
El liderazgo verdadero se nutre de la pasión por el crecimiento personal y la capacidad de inspirar a otros a brillar en su máximo esplendor.» – Tony Robbins

Cada año ayudo a impulsar el crecimiento y el bienestar de miles de personas para la formación de líderes y desarrollo personal en más de 20 países.
Creo que la formación en el liderazgo es un pilar fundamental para la transformación positiva de la sociedad. Los líderes bien preparados, dotados de habilidades emocionales, comunicativas y estratégicas, tienen el poder de inspirar y guiar a otros hacia un futuro más inclusivo y próspero. Al invertir en su desarrollo, se convierten en agentes de cambio capaces de abordar desafíos complejos, promover la equidad y fomentar una cultura de colaboración y respeto. Estos líderes impulsan innovaciones significativas y construyen comunidades resilientes que contribuyen al progreso colectivo. La formación en liderazgo es el motor que impulsa la evolución positiva de nuestra sociedad. Es por esto que desarrollamos formaciones para que los líderes puedan potenciar su autoconocimiento y hacerse cargo de su impacto transformador.         </div>
             </div>
             <div class="flex flex-col px-6" v-show="activa === 4">
            <div  class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
«El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos.» – Michael Jordan

¿Te preguntas cómo construir una base sólida de confianza entre los miembros de tu equipo? ¿Te interesa fomentar un ambiente de seguridad psicológica donde cada miembro del equipo pueda expresarse libremente? ¿Quieres potenciar el talento individual y canalizarlo hacia un gran esfuerzo colectivo?

A partir de mi formación de equipos de alto rendimiento y mi experiencia de más de 20 años, he transitado junto a distintos equipos en Latinoamérica un proceso transformacional. A partir del mismo, la humanidad, la construcción de confianza, la comunicación sincera y transparente, la colaboración y la gestión de los focos claves en la gestión de un equipo, pasan a ser los hábitos centrales en el funcionamiento de los equipos.
Creo en los procesos que transforman de manera silenciosa, cuidada y que se mantienen en el tiempo. Creo en las conversaciones sinceras y profundas que incomodan, porque la incomodidad muchas veces es el primer impulso para el desarrollo personal y grupal. Creo en los vínculos colaborativos, en la construcción de una red, que nos permita convencernos de que con otros podemos siempre más.
            </div>
             </div>
        </div>

    </div>
</template>
<script setup>
const activa = ref(1)
</script>