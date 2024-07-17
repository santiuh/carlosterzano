<template>
    <div class="bg-[#8DA1FA] flex justify-center py-[84px]">
        <div class="flex flex-col max-w-[1440px] px-32 w-full items-center">
          <h1 class="text-[33px] border rounded-full tracking-widest px-[18px] py-3 my-4">POTENCIANDO EL CRECIMIENTO</h1>
          <h2 class="text-[33px] font-bold tracking-widest">PROFESIONAL Y PERSONAL DE </h2>
          <div class="flex flex-col gap-[100px] w-full py-[120px]">
            <div class="flex flex-row justify-between w-full" v-for="dato in data">
                 <div class="flex flex-col text-[33px]" v-for="datito in dato">
                    <NuxtImg src="/ctLogoGen.svg"/>
                    <p>{{ datito.name }}</p>
                </div>    
            </div>
         </div>
        </div>
       
    </div>
</template>
<script setup>
 const data = [[{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'}],[{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'},{src:'logo',name:'logo'}]]
</script>