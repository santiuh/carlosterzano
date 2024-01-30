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
                    <input v-model="mensaje.cliente" class="h-[60px] focus:border-primary outline-none transition-all duration-300 px-5 rounded-[4px] border border-[#DBD2D2]" type="text" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Tipo de Evento</div>
                    <div class="flex w-full relative">
                        <select v-model="mensaje.tipodeevento" class="h-[60px] hover:cursor-pointer focus:border-primary outline-none transition-all duration-300 w-full pl-6 rounded-[4px] appearance-none border border-[#DBD2D2]" name="" id="">
                            <option disabled selected value="">Seleccione una opción</option>
                            <option value="Bar Mitzvá">Bar Mitzvá</option>
                        </select>
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
               </div>
            </div>            <div class="flex flex-col xl:flex-row  gap-[26px] xl:gap-[60px]">
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Correo Electrónico</div>
                    <input v-model="mensaje.correo" class="h-[60px] px-5 focus:border-primary outline-none transition-all duration-300  rounded-[4px] border border-[#DBD2D2]" type="email" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Cantidad de Invitados</div>
                    <div class="flex w-full relative">
                        <select v-model="mensaje.cantidaddeinvitados" class="h-[60px]  hover:cursor-pointer focus:border-primary outline-none transition-all duration-300 w-full pl-6 rounded-[4px] appearance-none border border-[#DBD2D2]" name="" id="">
                            <option disabled selected value="">Seleccione una opción</option>
                            <option value="200">200</option>
                        </select>
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col xl:flex-row  gap-[26px] xl:gap-[60px]">
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Teléfono</div>
                    <input v-model="mensaje.telefono"  class="h-[60px] px-5 focus:border-primary outline-none transition-all duration-300  rounded-[4px] border border-[#DBD2D2]" type="number" name="" id="">
                </div>
                <div class="flex flex-col xl:w-1/2">
                    <div class="text-xl font-bold leading-10">Fecha del Evento</div>
                    <div class="flex w-full relative">
                        <input v-model="mensaje.fechadelevento" class="h-[60px] focus:border-primary outline-none transition-all duration-300 w-full pl-5 pr-6 rounded-[4px] border border-[#DBD2D2]" type="date" name="" id="">
                        <div class="border-l absolute top-[1px] right-[64px] h-[97%] border-[#DBD2D2] "></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col h-fit">
                <div class="text-xl font-bold leading-10">Mensaje</div>
                <textarea v-model="mensaje.mensaje" class="overflow-auto p-5 focus:border-primary outline-none transition-all duration-300 rounded-[4px] border border-[#DBD2D2]" type="text" name="" id=""></textarea>
            </div>
            <div class="h-0 overflow-hidden transition-all text-red-700 font-bold" :class="mostrarDiv? 'h-[2em]' : ''">Debe completar todos los campos para enviar el formulario.</div>
            <BotonesBoton :class="formularioDesactivado ? '!bg-gray-400 hover:!scale-100' : ''" class=" mt-[20px]"  texto="Enviar formulario" @click="formularioDesactivado? prevenirClick() : enviarCorreo()"></BotonesBoton>
        </div>
  </section>
</template>
<script setup >

useHead({
  script: [{  src: 'https://smtpjs.com/v3/smtp.js'}],
});

const mensaje = ref({
  cliente:'',
  correo:'',
  telefono:'',
  tipodeevento:'',
  cantidaddeinvitados:'',
  fechadelevento:'',
  mensaje:'',

})

const mostrarDiv = ref(false)
const formularioDesactivado = computed(() => {
      const m = mensaje.value;
      return (
        m.mensaje === '' ||
        m.cliente === '' ||
        m.tipodeevento === '' ||
        m.telefono === '' ||
        m.fechadelevento === '' ||
        m.cantidaddeinvitados === '' ||
        m.correo === ''
      );
    });

const prevenirClick = () => {
     if(formularioDesactivado.value === true){
        mostrarDiv.value = true
     }

}


const enviarCorreo = () => {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "santiagogirolami@gmail.com",
    Password : "4A54422E39799892650AD5DE47382BA4FC98",
    To : 'santiagogirolami@gmail.com',
    From : "santiagogirolami@gmail.com",
    Subject : mensaje.value.cliente +'-'+mensaje.value.tipodeevento,
    Body: '" <div style="background-color: palevioletred; color: white; text-align:center; font-size: x-large; font-weight: bold; padding: 12px;"> SOLICITUD DE CONTACTO</div><div style="background-color: #F9F3F3; padding-left: 10rem; padding-right: 10rem; padding-top: 1rem; padding-bottom: 4rem;">       <div style="font-size: large; padding: 5px;"><span>Nombre:</span> <strong>'+mensaje.value.cliente+'</strong></div><div style="font-size: large; padding: 5px;"><span>Correo:</span> <strong>'+mensaje.value.correo+'</strong></div> <div style="font-size: large; padding: 5px;"><span>Teléfono:</span> <strong>'+mensaje.value.telefono+'</strong></div><div style="font-size: large; padding: 5px;"><span>Tipo de evento:</span> <strong>'+mensaje.value.tipodeevento+'</strong></div><div style="font-size: large; padding: 5px;"><span>Fecha del Evento:</span> <strong>'+mensaje.value.fechadelevento+'</strong></div><div style="font-size: large; padding: 5px;"><span>Cantidad de Invitados:</span> <strong>'+mensaje.value.cantidaddeinvitados+'</strong> </div> <div style="font-size: large; padding: 5px;">Mensaje:</div><div style="background-color: white; padding: 1rem; border-radius: 10px; margin-top: 1rem;">'+mensaje.value.mensaje+'</div>   </div>   "'}).then(
  message => alert(message)
);
    }
</script>
<style>
select {
    background-image: url("/chevron.svg");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2em;
}
</style>