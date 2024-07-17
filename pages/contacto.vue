<template>
<div 
class="flex justify-center relative bg-primary "
>
    <div class="flex flex-col xl:flex-row justify-center max-w-[1440px] xl:px-36 px-4 gap-8 pb-[100px] xl:pb-[162px] pt-[100px] xl:pt-[200px] z-10 items-center w-full">
        <div class="rounded-3xl overflow-hidden h-[425px] w-full xl:w-2/5 bg-[url(/ctContacto.png)] bg-no-repeat bg-cover">        </div>

            <!-- <NuxtImg class="rounded-3xl !w-5/12" src="/ctContacto.png"></NuxtImg> -->
        <div class="bg-primary bg-[url(/ctContactoBg.svg)]  bg-no-repeat bg-right-bottom flex flex-col text-white leading-[38px] items-start px-4 xl:px-0 xl:pl-[75px] w-full xl:w-2/3 pt-[61px] rounded-[36px] gap-[22px] h-fit pb-[20px]">
            <p class="text-[30px] xl:text-[37px] font-medium">¡Trabajemos juntos!</p>
            <NuxtImg class="!h-auto !w-[54px]" src="/ctGuionC.svg"></NuxtImg>
            <p class="text-[24px] xl:text-[31px] font-medium">+54 9 11-21880434</p>
            <p class="text-[20px] xl:text-[31px] font-medium">hablemos@carlosterzano.com</p>
        </div> 
    </div>  
    <div class="absolute flex h-full w-full"
    style="background: transparent linear-gradient(90deg, #4DE2BB 0%, #45CEB0 17%, #309D95 50%, #104D6A 97%, #0E4968 100%) 0% 0% no-repeat padding-box;
    mix-blend-mode: soft-light;
    opacity: 1;">
    </div>    
</div>
</template>
<script setup></script>