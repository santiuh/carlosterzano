<template>
  <div class="bg-primary flex justify-center pb-[62px] pt-[80px]">
    <div
      class="flex max-w-[1440px] w-full xl:px-34 px-4 justify-center relative xl:px-32"
    >
      <div data-aos="zoom-in-up"
        class="flex xl:rounded-[144px] rounded-3xl xl:h-[512px] overflow-hidden bg-[url('/ctHeroBg.png')] bg-cover bg-center  xl:bg-repeat-round w-full xl:pr-[90px] gap-[44px] xl:pl-[32px] justify-center"
      >
        <!-- <div class="bg-[url('/ctRetrato.svg')]  bg-no-repeat bg-bottom"></div> -->
        <NuxtImg
          src="ctRetrato.png"
          class="w-full h-full mt-[10px] object-contain"
        ></NuxtImg>
        <div
          class="xl:flex hidden text-nowrap flex-col h-fit rounded-[44px] xl:text-5xl font-medium bg-[#0e49683d] py-[53px] px-16 self-center"
        >
          <p>Al servicio</p>
          <p>de los demás.</p>
          <p class="leading-7 text-7xl">-</p>
          <p class="!text-2xl font-normal tracking-tight">
            Psicólogo y coach organizacional
          </p>
        </div>
        <div
          class="flex xl:hidden absolute flex-col h-fit rounded-3xl font-medium bg-[#0e496884] px-4 py-2 bottom-0 mb-2 self-center"
        >
          <p>Al servicio de los demás.</p>

          <p class="text-xl font-normal tracking-tight">
            Psicólogo y coach organizacional
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
