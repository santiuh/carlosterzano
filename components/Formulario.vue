<template>
    <section class="flex flex-col xl:max-w-[1440px] self-center xl:px-[192px] xl:pt-[60px] pb-[100px]">
        <div class="text-title text-[64px] tracking-[1.28px]">Contacto</div>
        <div class="font-bold text-xl leading-10 pt-[55px]">¡Estamos para ayudarte! Hacé tu consulta. </div>
        <br>
        <div class="text-xl text-justify leading-10">
            Completá el formulario y recibí asesoramiento personalizado. Consultá por fechas disponibles para tu evento y presupuestos. <strong> Comenzá a vivir #TuFiestaSoñada.</strong>
        </div>

        <!-- FORMULARIO -->
        <div class="bg-[#F9F3F3] flex flex-col px-[60px] pt-[34px] pb-[48px] rounded-3xl mt-[70px] gap-[26px]">
            <div class="flex flex-row gap-[60px]">
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Nombre y Apellido</div>
                    <input class="h-[60px] rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Tipo de Evento</div>
                    <select class="h-[60px] rounded-[4px] border border-[#DBD2D2]" name="" id=""></select>
                </div>
            </div>            <div class="flex flex-row gap-[60px]">
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Correo Electrónico</div>
                    <input class="h-[60px] rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Cantidad de Invitados</div>
                    <select class="h-[60px] rounded-[4px] border border-[#DBD2D2]" name="" id=""></select>
                </div>
            </div>
            <div class="flex flex-row gap-[60px]">
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Teléfono</div>
                    <input  class="h-[60px] rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col w-1/2">
                    <div class="text-xl font-bold leading-10">Fecha del Evento</div>
                    <input class="h-[60px] rounded-[4px] border border-[#DBD2D2]" type="date" name="" id="">
                </div>
            </div>
            <div class="flex flex-col">
                <div class="text-xl font-bold leading-10">Mensaje</div>
                <input class="h-[60px] rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
            </div>
            <BotonesBoton class="mt-[20px]" texto="Enviar formulario"></BotonesBoton>
        </div>

    </section>
</template>