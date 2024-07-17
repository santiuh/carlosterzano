<template>
    <div class="flex relative bg-primary w-full justify-center">
       
            <div class="flex flex-col max-w-[1440px] w-full items-center pb-[200px] pt-[165px] px-32">
                <p class=" font-bold text-[62px]">MAS DE 20 AÑOS</p>
            <ContDegrade class="text-secondary text-[38px] px-4 mb-[68px]">IMPULSANDO EL DESAROLLO DE:</ContDegrade>
         
            <div class="justify-between flex flex-row w-full pt-[18px] ">
                <div class="flex flex-col gap-[27px] items-center">
                    <div class="flex flex-row justify-center w-full">
                        <div class="w-1/2" ></div>
                        <div class="border-t border-l w-1/2 h-[45px]"></div>

                    </div>
                    <NuxtImg class="!h-[53px] !w-[53px] " src="/ctPersonas.svg"></NuxtImg>
                    <ContDegrade class="px-3 text-3xl py-1 items-center font-light">Personas</ContDegrade>
                </div>
                <div class="flex flex-col items-center gap-[27px] grow">
                    <div class="flex flex-row justify-center w-full h-[45px]">
                        <div class="border-t w-full"></div>
                        <div class="border-t border-l w-full"></div>
                    </div>
                    <NuxtImg  class="!h-[53px] !w-[53px]" src="/ctEquipos.svg"></NuxtImg>
                    <ContDegrade class="px-3 text-3xl py-1 items-center font-light">Equipos</ContDegrade>
                </div>
                <div class="flex flex-col gap-[27px] items-center ">
                    <div class="flex flex-row justify-center w-full">
                        <div class="border-t border-r w-1/2 h-[45px]"></div>
                        <div class="w-1/2" ></div>
                    </div>
                    <NuxtImg  class="!h-[53px] !w-[53px]" src="/ctOrganizaciones.svg"></NuxtImg>
                    <ContDegrade class="px-3 text-3xl py-1 items-center font-light">Organizaciones</ContDegrade>
                </div>

            </div>
            
            

        </div>
        <div class="absolute flex h-full w-full"
            style="background: transparent linear-gradient(90deg, #8DA1FA 0%, #8DA1FA 25%, #4DE2BB 80%, #4DE2BB 98%, #4DE2BB 100%) 0% 0% no-repeat padding-box;
             mix-blend-mode: soft-light;
             opacity: 1;">
        </div>
    </div>
</template>
<script>
</script>