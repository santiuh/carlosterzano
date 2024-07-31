<template>
  <div class="bg-primary flex flex-col items-center w-full pt-20 xl:pt-0">
    <div
      class="flex flex-col max-w-[1440px] xl:px-20 px-4 pb-20 w-full gap-6 xl:gap-0"
    >
      <ContDegrade
        class="xl:px-8 px-3 py-1 items-center text-center xl:text-start text-xl xl:text-4xl self-center xl:self-start xl:my-16 xl:ml-6"
        >SERVICIOS PENSADOS PARA VOS</ContDegrade
      >
      <div
        class="flex flex-row xl:hidden justify-around w-full bg-[#867e9741] py-3 rounded-3xl"
      >
        <NuxtImg @click="activa = 1" src="/ctLogGlob.svg"></NuxtImg>
        <NuxtImg @click="activa = 2" src="/ctLogGlob2.svg"></NuxtImg>
        <NuxtImg @click="activa = 3" src="/ctLogGlob3.svg"></NuxtImg>
        <NuxtImg @click="activa = 4" src="/ctLogGlob4.svg"></NuxtImg>
      </div>
      <div class="hidden xl:flex flex-row gap-5 mb-[-4px]">
        <div class="flex flex-col items-center gap-4">
          <ServiciosServicio
            class="!w-full !h-full hover:cursor-pointer hover:scale-105 transition-all"
            @click="activa = 1"
            :class="
              activa === 1 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''
            "
          ></ServiciosServicio>
          <svg
            v-show="activa === 1"
            xmlns="http://www.w3.org/2000/svg"
            width="89.645"
            height="68.758"
            viewBox="0 0 89.645 68.758"
          >
            <path
              id="Trazado_112"
              data-name="Trazado 112"
              d="M4436.373,824.812l89.645,68.758h-78.513Z"
              transform="translate(-4436.373 -824.812)"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="flex flex-col items-center gap-4">
          <ServiciosServicio2
            class="!w-full !h-full hover:cursor-pointer hover:scale-105 transition-all"
            @click="activa = 2"
            :class="
              activa === 2 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''
            "
          ></ServiciosServicio2>
          <svg
            v-show="activa === 2"
            xmlns="http://www.w3.org/2000/svg"
            width="89.645"
            height="68.758"
            viewBox="0 0 89.645 68.758"
          >
            <path
              id="Trazado_112"
              data-name="Trazado 112"
              d="M4526.018,824.812l-89.645,68.758h78.513Z"
              transform="translate(-4436.373 -824.812)"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="flex flex-col items-center gap-4">
          <ServiciosServicio3
            class="!w-full !h-full hover:cursor-pointer hover:scale-105 transition-all"
            @click="activa = 3"
            :class="
              activa === 3 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''
            "
          ></ServiciosServicio3>
          <svg
            v-show="activa === 3"
            xmlns="http://www.w3.org/2000/svg"
            width="89.645"
            height="68.758"
            viewBox="0 0 89.645 68.758"
          >
            <path
              id="Trazado_112"
              data-name="Trazado 112"
              d="M4526.018,824.812l-89.645,68.758h78.513Z"
              transform="translate(-4436.373 -824.812)"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="flex flex-col items-center gap-4">
          <ServiciosServicio4
            class="!w-full !h-full hover:cursor-pointer hover:scale-105 transition-all"
            @click="activa = 4"
            :class="
              activa === 4 ? 'shadow-[#8DA1FA] drop-shadow rounded-3xl' : ''
            "
          ></ServiciosServicio4>
          <svg
            v-show="activa === 4"
            xmlns="http://www.w3.org/2000/svg"
            width="89.645"
            height="68.758"
            viewBox="0 0 89.645 68.758"
          >
            <path
              id="Trazado_112"
              data-name="Trazado 112"
              d="M4526.018,824.812l-89.645,68.758h78.513Z"
              transform="translate(-4436.373 -824.812)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col px-6" v-show="activa === 1">
        <div class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
          <p class="font-bold flex xl:hidden">
            Formación de equipos de alto rendimiento
          </p>
          <br />
          <p class="italic">
            «El talento gana partidos, pero el trabajo en equipo y la
            inteligencia ganan campeonatos.»
          </p>
          <p>-Michael Jordan</p>
          <br />
          <p>
            ¿Te preguntas cómo construir una
            <strong> base sólida de confianza</strong> entre los miembros de tu
            equipo? ¿Te interesa fomentar un
            <strong> ambiente de seguridad psicológica</strong> donde cada
            miembro del equipo pueda expresarse libremente? ¿Querés potenciar el
            talento individual y canalizarlo hacia un gran esfuerzo colectivo?
          </p>
          <br />
          <p>
            A partir de mi formación de equipos de alto rendimiento y mi
            experiencia de más de 20 años, he transitado junto a distintos
            equipos en Latinoamérica un
            <strong> proceso transformacional </strong> transformacional. A
            partir del mismo, la <strong> humanidad</strong>, la construcción de
            <storng>confianza</storng>, la
            <strong>comunicación sincera</strong> y transparente, la
            colaboración y la gestión de los focos claves en la gestión de un
            equipo, pasan a ser los hábitos centrales en el funcionamiento de
            los equipos.
          </p>
          <br />
          <p>
            Creo en los procesos que transforman de manera silenciosa, cuidada y
            que se mantienen en el tiempo. Creo en las conversaciones sinceras y
            profundas que incomodan, porque la incomodidad muchas veces es el
            primer impulso para el desarrollo personal y grupal. Creo en los
            vínculos colaborativos, en la construcción de una red, que nos
            permita convencernos de que <strong> con otros podemos más.</strong>
          </p>
        </div>
      </div>
      <div class="flex flex-col px-6" v-show="activa === 2">
        <div class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
          <p class="font-bold flex xl:hidden">Coaching y desarollo personal</p>
          <br />
          <p class="italic">
            «La inversión en desarrollo personal es el camino hacia la
            excelencia en el trabajo y la clave para desbloquear tu máximo
            potencial.»
          </p>
          <p>– Brian Tracy</p>
          <br />
          <p>
            ¿Te gustaría un <storng>cambio significativo</storng> en tu vida
            laboral, en tu liderazgo, en tu manera de vincularte? ¿Deseas
            alcanzar tus <strong> metas profesionales y personales</strong> de
            una manera auténtica?
          </p>
          <br />
          <p>
            Te acompaño en un proceso donde puedas sumergirte en tu mundo,
            comprendiendo tus
            <strong>deseos, desafíos y aspiraciones.</strong> Desde la empatía y
            la escucha activa, podemos trabajar juntos para descubrir tus
            fortalezas y potenciarlas.
          </p>
          <br />
          <p>
            En cada sesión, exploramos tus valores más profundos y alineamos tus
            objetivos con tu propósito laboral y de vida. Con herramientas y
            técnicas diagnósticas, te acompaño en cada paso del proceso,
            <strong
              >iluminando tus habilidades y desafiando los pensamientos
              limitantes
            </strong>
            que te puedan surgir.
          </p>
          <br />
          <p>
            El proceso de coaching y desarrollo personal/profesional es un viaje
            de
            <strong class="underline"
              >autodescubrimiento y crecimiento, para manifestar tu potencial al
              máximo.</strong
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col px-6" v-show="activa === 3">
        <div class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
          <p class="font-bold flex xl:hidden">Formación de líderes</p>
          <p class="italic">
            «El liderazgo verdadero se nutre de la pasión por el crecimiento
            personal y la capacidad de inspirar a otros a brillar en su máximo
            esplendor.»
          </p>
          <p>– Tony Robbins</p>
          <br />
          <p>
            Cada año ayudo a impulsar el
            <strong>crecimiento y el bienestar de miles de personas</strong>
            para la formación de líderes y desarrollo personal en más de 20
            países.
          </p>
          <br />
          <p>
            Creo que la formación en el liderazgo es un pilar fundamental para
            la transformación positiva de la sociedad. Los líderes bien
            preparados, dotados de habilidades emocionales, comunicativas y
            estratégicas, tienen el poder de
            <strong>inspirar y guiar a otros</strong> hacia un futuro más
            inclusivo y próspero. Al invertir en su desarrollo, se convierten en
            <strong>agentes de cambio</strong> capaces de abordar desafíos
            complejos, promover la equidad y fomentar una cultura de
            colaboración y respeto. Estos líderes impulsan
            <strong>innovaciones significativas</strong> y construyen
            <strong>comunidades resilientes</strong> que contribuyen al progreso
            colectivo.
            <strong class="underline">
              La formación en liderazgo es el motor que impulsa la evolución
              positiva de nuestra sociedad.
            </strong>
            Es por esto que desarrollamos formaciones para que los líderes
            puedan potenciar su autoconocimiento y hacerse cargo de su impacto
            transformador.
          </p>
        </div>
      </div>
      <div class="flex flex-col px-6" v-show="activa === 4">
        <div class="xl:px-16 px-4 py-4 xl:py-12 bg-white rounded-3xl">
          <p class="font-bold flex xl:hidden">Charlas y conferencias</p>
          <br />
          <p>
            Hace años brindo charlas y conferencias para equipos de empresas y
            ONGS de toda latinoamérica y Europa, adaptadas a las
            <strong>necesidades particulares </strong> de cada grupo de trabajo,
            aplicando metodología que ayude a incorporar el bienestar como una
            variable fundamental en la gestión del negocio y las personas.
          </p>
          <br />
          <p>
            En estos encuentros trabajamos de manera específica con las
            necesidades <strong>de cada cliente</strong>, llevando a cabo
            procesos profundos para lograr la potenciación de la efectividad y
            los vínculos en los equipos de trabajo, y llegar así al máximo
            rendimiento de los mismos.
          </p>
        </div>
      </div>
    </div>
    <ServiciosTestimonios></ServiciosTestimonios>
  </div>
</template>
<script setup>
const activa = ref(1);
</script>
