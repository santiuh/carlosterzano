<template>
    <section class="flex flex-col w-full bg-primary  ">
        <div class="xl:max-w-[1440px] px-4 xl:px-[192px] pt-[150px] pb-[94px] text-white self-center py-10  bg-[url(/fondo_como.svg)] bg-no-repeat bg-bottom xl:bg-contain xl:bg-[center_right_200px]">
            <div class="flex flex-row gap-[9px]">
                <NuxtPicture class="self-center" src="Deco.svg"></NuxtPicture>
                <div class="xl:text-[32px] text-3xl font-extrabold tracking-[0.32px]">¿Cómo lo hacemos?</div>
            </div>
            <div class="text-justify text-xl leading-10 tracking-[0.4px] pt-5 pb-[73px]">Amamos lo que hacemos y trabajamos con un equipo de profesionales con nuestra misma energía y
                profesionalidad, que te acompañan en todo el recorrido y organización de tu evento. Hacemos celebraciones a
                medida, para crear recuerdos inolvidables.<strong>¿Estás listo para celebrar con nosotros?</strong> 
            </div>
         <NuxtLink class="flex justify-center xl:justify-start" to="/Servicios"><BotonesBoton texto="Conocé nuestros servicios" class="border border-white"></BotonesBoton></NuxtLink>
        </div>
    </section>
</template>