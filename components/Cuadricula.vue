<template>
    <section class="flex flex-col w-full mb-[93px]" style="background: linear-gradient(90deg, #FBF5F5 0%, #EFE1E1 100%);">
        <div class="xl:max-w-[1440px]  flex-wrap flex px-4 xl:px-[192px] gap-5 text-white self-center py-10  bg-[url(/fondo_cuadricula.svg)] bg-no-repeat bg-contain bg-[center_right_200px]">
            <button v-for="dato in data" class="p-6 hover:scale-105 hover:bg-secondary transition-all flex rounded-[32px] gap-[16px] justify-center items-center flex-col bg-primary w-[328px] h-[233px] " style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);">
                <NuxtPicture :src="dato.url"></NuxtPicture>
                <div class="font-bold tracking-[0.48px] text-center text-2xl">{{dato.texto }}</div>
            </button>
        </div>
    </section>
</template>
<script setup>
 const data = [{url:'/grupo.svg',texto:'Capacidad para 120 personas.'},{url:'/lamparita.svg',texto:'Iluminación robótica de última generación.'},{url:'/parlante.svg',texto:'Sonido de última generación.'},{url:'/cable.svg',texto:'Grupo electrógeno.'},{url:'/latido.svg',texto:'Asistencia médica.'},{url:'/vestido.svg',texto:'Suite privada y camarín.'},{url:'/seguridad.svg',texto:'Seguridad privada.'},{url:'/coche.svg',texto:'Estacionamiento interno'},{url:'/catering.svg',texto:'Catering exclusivo. '},]
</script>