<template>
    <section class="xl:max-w-[1440px] px-4 xl:px-[192px] pb-[115px] flex flex-row-reverse self-center gap-[60px]">
        <div class="flex flex-col xl:w-1/2">
            <div class="text-title xl:text-[64px] text-[36px] text-center xl:text-start">Eventos Sociales</div>
            <NuxtPicture class="xl:w-1/2 flex xl:hidden" id="sociales" src="/eventos_sociales.png"></NuxtPicture>
            <div class="text-xl leading-10 text-justify pb-[30px]">
                Desde tu idea a la realidad. <strong>  Te acompañamos en todos los detalles para que tu evento sea único. </strong>
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
        <NuxtPicture class="xl:w-1/2 hidden xl:flex" id="sociales" src="/eventos_sociales.png"></NuxtPicture>
    </section>
</template>
<script setup>
const data = ['Cumpleaños de 15.','Bodas.','Comuniones.','Bautismos.']
const data2 = ['Bar y Bar Mitzvá.','Baby Shower.','Despedidas.','Fiestas Privadas.']

</script>
<style>
#sociales img{
    width: 100% !important;

}
</style>