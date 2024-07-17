<template>
  <div class="w-full flex flex-col bg-primary" >
    <footer class="flex flex-col pt-[57px] text-white items-center text-center xl:text-start">
        <div class="flex px-4 xl:px-20 gap-[32px] xl:max-w-[1440px] h-full w-full flex-col">
          
                <div class="text-[32px] font-extrabold tracking-[0.64px] ">Contacto</div>
                
                <div class="flex flex-row justify-between w -full">
                  <NuxtLink class="hover:brightness-75 hidden xl:flex hover:cursor-pointer transition-all duration-300" to="/"><NuxtPicture class="!h-1 !w-auto" src="/ctNombre.svg"></NuxtPicture></NuxtLink>                        

                  <div class="flex flex-col gap-2">
                    <div class=" font-medium  ">Teléfono</div>
                    <div>+54 9 11-21880434</div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="font-medium">Redes Sociales</div>
                    <div class="flex flex-row gap-5 self-center xl:self-start">
                      <a target="_blank" href="https://www.instagram.com/carlosterzanook/">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300" src="ctInstagram.svg" width="24px" height="24px"></NuxtPicture></a>
                      <a target="_blank" href="https://www.linkedin.com/in/carlosterzano">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer transition-all duration-300" src="ctLinkedIn.svg" width="24px" height="24px"></NuxtPicture></a>
                  </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class=" font-extrabold">E-mail</div>
                    <div>hablemos@carlosterzano.com</div>
                    </div>
                </div>
        </div>
    </footer>
    <div class="bg-footer2">
      <div class="flex xl:justify-center text-white">
            <div class="flex xl:flex-row flex-col-reverse items-center xl:gap-0 gap-4 xl:items-start text-center xl:text-left xl:justify-between xl:px-20 py-[50px] xl:max-w-[1440px] w-full ">
                <div class="font-space font-bold  tracking-[0.2px] px-4 xl:px-0">Hecho con amor por La Idea Agencia Creativa. 2024.</div>
                <a target="_blank" href="https://www.laidea.com.ar/"> <NuxtPicture class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300"  src="laidea_logo.svg" width="87px" height="17px"></NuxtPicture></a>
           </div>
      </div>     
    </div>
  </div>  
</template>
<script setup>

</script>