<template>
    <section class="flex flex-col w-full bg-primary  ">
        <div class="xl:max-w-[1440px] px-4 xl:px-[192px] xl:pt-[150px] pt-[94px] pb-[94px] text-white self-center py-10  bg-[url(/fondo_como.svg)] bg-no-repeat bg-bottom xl:bg-contain xl:bg-[center_right_200px]">
            <div class="flex flex-row gap-[9px]">
                <NuxtPicture class="self-center hidden xl:flex" src="Deco.svg"></NuxtPicture>
                <div class="xl:text-[32px] xl:text-3xl text-[32px] text-center xl:text-start w-full font-extrabold tracking-[0.32px]">¿Cómo lo hacemos?</div>
            </div>
            <div class="text-justify text-xl leading-10 tracking-[0.4px] xl:pt-5 pt-[92px] pb-[73px]">
                <NuxtPicture class="float-left self-center xl:hidden mr-[1rem]" src="Deco.svg"></NuxtPicture>
                Amamos lo que hacemos y trabajamos con un equipo de profesionales con nuestra misma energía y
                profesionalidad, que te acompañan en todo el recorrido y organización de tu evento. Hacemos celebraciones a
                medida, para crear recuerdos inolvidables.<br><strong>¿Estás listo para celebrar con nosotros?</strong> 
            </div>
         <NuxtLink class="flex justify-center xl:justify-start" to="/Servicios"><BotonesBoton texto="Conocé nuestros servicios" class="border border-white"></BotonesBoton></NuxtLink>
        </div>
    </section>
</template>
