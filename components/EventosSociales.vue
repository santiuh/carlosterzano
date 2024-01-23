<template>
    <section class="xl:max-w-[1440px] px-[192px] pb-[115px] flex flex-row-reverse self-center gap-[60px]">
        <div class="flex flex-col">
            <div class="text-title text-[64px]">Eventos Corporativos</div>
            <div class="text-xl leading-10 text-justify pb-[30px]">
                Reflejamos la cultura de tu empresa en cada detalle y adaptamos nuestro <strong>salón a las necesidades de cada evento. </strong>
            </div>
            <div class="flex flex-row justify-between">
                <div class="flex flex-col gap-[34px]">
                    <div class="flex flex-row text-xl font-bold gap-5" v-for="dato in data">
                        <NuxtPicture src="/Deco2.svg"></NuxtPicture>
                        <div> {{ dato }}</div>

                    </div>
                </div>
                <div class="flex flex-col gap-[34px]">
                    <div class="flex flex-row text-xl font-bold gap-5" v-for="dato in data2">
                        <NuxtPicture src="/Deco2.svg"></NuxtPicture>
                        <div> {{ dato }}</div>

                    </div>
                </div>
            </div>
        </div>
        <NuxtPicture src="/eventos_corporativos.png"></NuxtPicture>
    </section>
</template>
<script setup>
const data = ['Cumpleaños de 15.','Bodas.','Comuniones.','Bautismos.']
const data2 = ['Bar y Bar Mitzvá.','Baby Shower.','Despedidas.','Fiestas Privadas.']

</script>