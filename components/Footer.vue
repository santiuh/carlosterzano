<template>
  <div class="w-full flex flex-col bg-primary" >
    <footer class="flex flex-col pt-[57px] text-white items-center text-center xl:text-start">
        <div class="flex px-4 xl:px-20 gap-[32px] xl:max-w-[1440px] h-full w-full flex-col">
          
                <div class="text-[32px] font-extrabold tracking-[0.64px] ">Contacto</div>
                
                <div class="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between w-full">
                  <NuxtLink class="hover:brightness-75 hidden xl:flex hover:cursor-pointer transition-all duration-300" to="/"><NuxtPicture class="!h-1 !w-auto" src="/ctNombre.svg"></NuxtPicture></NuxtLink>                        

                  <div class="flex flex-col gap-2">
                    <div class=" font-medium  ">Teléfono</div>
                    <div>+54 9 11-21880434</div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="font-medium">Redes Sociales</div>
                    <div class="flex flex-row gap-5 self-center xl:self-start items-center">
                      <a target="_blank" href="https://www.instagram.com/carlosterzanook/">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300" src="ctInstagram.svg" ></NuxtPicture></a>
                      <a target="_blank" href="https://www.linkedin.com/in/carlosterzano">  <NuxtPicture class="hover:brightness-75 hover:cursor-pointer transition-all duration-300" src="ctLinkedIn.svg"></NuxtPicture></a>
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
            <div class="flex flex-row justify-center items-center xl:gap-0 xl:items-start text-center xl:text-left xl:justify-end xl:px-20 py-[50px] xl:max-w-[1440px] w-full ">
              <a target="_blank" href="https://utopias.com.ar/bienestar-y-negocio">  <NuxtImg class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300 h-12"  src="/logoUtopias.png" ></NuxtImg></a>
              <a target="_blank" href="https://humangrowth.site/">  <NuxtImg class="hover:brightness-75 hover:cursor-pointer tranisition-all duration-300 h-12" src="/logoHuman.png" ></NuxtImg></a>
            </div>
      </div>     
    </div>
  </div>  
</template>
<script setup>

</script>