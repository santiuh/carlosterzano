<template>
    <section class="flex flex-col xl:max-w-[1440px] self-center px-4 xl:px-[192px] xl:pt-[60px] pb-[100px]">
        <div class="text-title text-center xl:text-start text-[64px] tracking-[1.28px] py-[94px] xl:py-0">Contacto</div>
        <div class="font-bold text-xl leading-10 xl:pt-[55px] text-center xl:text-start">¡Estamos para ayudarte!<br class="flex xl:hidden"> Hacé tu consulta. </div>
        <br>
        <div class="text-xl text-justify leading-10">
            Completá el formulario y recibí asesoramiento personalizado. Consultá por fechas disponibles para tu evento y presupuestos. <strong> Comenzá a vivir #TuFiestaSoñada.</strong>
        </div>

        <!-- FORMULARIO -->
        <div class="bg-[#F9F3F3] flex flex-col px-4 xl:px-[60px] pt-[34px] pb-[48px] rounded-xl mt-[70px] gap-[26px]">
            <div class="flex flex-col xl:flex-row gap-[26px] xl:gap-[60px]">
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Nombre y Apellido</div>
                    <input class="h-[60px] focus:border-primary outline-none transition-all duration-300 px-5 rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Tipo de Evento</div>
                    <div class="flex w-full relative">
                        <select class="h-[60px] hover:cursor-pointer focus:border-primary outline-none transition-all duration-300 w-full pl-6 rounded-[4px] appearance-none border border-[#DBD2D2]" name="" id="">
                            <option disabled selected value="">Seleccione una opción</option>
                            <option value="">Selecciaa una opción</option>
                        </select>
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
               </div>
            </div>            <div class="flex flex-col xl:flex-row  gap-[26px] xl:gap-[60px]">
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Correo Electrónico</div>
                    <input class="h-[60px] px-5 focus:border-primary outline-none transition-all duration-300  rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Cantidad de Invitados</div>
                    <div class="flex w-full relative">
                        <select class="h-[60px]  hover:cursor-pointer focus:border-primary outline-none transition-all duration-300 w-full pl-6 rounded-[4px] appearance-none border border-[#DBD2D2]" name="" id="">
                            <option disabled selected value="">Seleccione una opción</option>
                            <option value="">Selecciaa una opción</option>
                        </select>
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col xl:flex-row  gap-[26px] xl:gap-[60px]">
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Teléfono</div>
                    <input  class="h-[60px] px-5 focus:border-primary outline-none transition-all duration-300  rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Fecha del Evento</div>
                    <div class="flex w-full relative">
                        <input class="h-[60px] focus:border-primary outline-none transition-all duration-300 w-full pl-5 pr-6 rounded-[4px] border border-[#DBD2D2]" type="date" name="" id="">
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="text-xl font-bold leading-10">Mensaje</div>
                <input class="h-[60px] px-5 focus:border-primary outline-none transition-all duration-300 rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
            </div>
            <BotonesBoton class="mt-[20px]" texto="Enviar formulario"></BotonesBoton>
        </div>

    </section>
</template>
<style>
select {
    background-image: url("/chevron.svg");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2em;
}
</style>