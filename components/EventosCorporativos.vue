<template>
    <section class="xl:max-w-[1440px] px-[192px] pt-[100px] pb-[89px] flex flex-row self-center gap-[60px]">
        <div class="flex flex-col w-1/2" >
            <div class="text-title text-[64px]">Eventos Corporativos</div>
            <div class="text-xl leading-10 text-justify pb-[30px]">
                Reflejamos la cultura de tu empresa en cada detalle y adaptamos nuestro <strong>salón a las necesidades de cada evento. </strong>
            </div>
            <div class="flex flex-col gap-[34px]">
                <div class="flex flex-row text-xl font-bold gap-5" v-for="dato in data">
                    <NuxtPicture src="/Deco2.svg"></NuxtPicture>
                    <div> {{ dato }}</div>

                </div>
            </div>
        </div>
        <NuxtPicture src="/eventos_corporativos.png"></NuxtPicture>
    </section>
</template>
<script setup>
const data = ['Convenciones.','Work Shop.','Lanzamientos.','Cursos y Congresos.','Reuniones Empresariales.']
</script>