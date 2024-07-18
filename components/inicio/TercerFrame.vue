<template>
    <div class="bg-[#8DA1FA] flex justify-center py-[42px] xl:py-[84px]">
        <div class="flex flex-col max-w-[1440px] xl:px-32 px-4 w-full items-center">
          <h1 class="xl:text-[33px] border rounded-full tracking-widest px-[18px] py-3 my-4">POTENCIANDO EL CRECIMIENTO</h1>
          <h2 class="xl:text-[33px] font-bold tracking-widest">PROFESIONAL Y PERSONAL DE </h2>
          <div class="flex flex-col gap-[60px] xl:gap-[100px] w-full py-[60px] xl:py-[120px]">
            <div class="grid grid-flow-row grid-cols-4 xl:grid-cols-6 xl:gap-2 items-center w-full">
                    <NuxtImg :src="dato"  v-for="dato in data"/>
            </div>
         </div>
        </div>
       
    </div>
</template>
<script setup>
const data = ['logo1.png','logo2.png','logo3.png','logo4.png','logo5.png','logo6.png','logo7.png','logo8.png','logo9.png','logo10.png','logo11.png','logo12.png','logo14.png','logo15.png','logo16.png','logo17.png','logo18.png','logo19.png','logo20.png','logo21.png','logo22.png','logo23.png','logo24.png','logo25.png']
</script>