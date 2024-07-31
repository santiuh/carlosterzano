<template>
  <div
    class="w-full flex justify-center xl:pt-[52px] xl:pb-[32px]"
    :class="route.path === '/contacto' ? 'absolute' : 'bg-primary'"
  >
    <nav
      class="xl:max-w-[1440px] px-20 hidden xl:flex gap-4 text-secondary justify-between flex-col-reverse xl:flex-row fixed xl:static w-full transition-all duration-500 z-50"
    >
      <NuxtLink
        class="hover:brightness-75 hover:cursor-pointer transition-all duration-300"
        to="/"
        ><NuxtPicture src="/ctNombre.svg"></NuxtPicture
      ></NuxtLink>
      <div class="flex font-medium justify-between w-1/2">
        <NuxtLink
          active-class="!text-tertiary"
          class="hover:brightness-90 hover:cursor-pointer transition-all duration-300"
          to="/"
          >INICIO</NuxtLink
        >
        <NuxtLink
          active-class="!text-tertiary"
          class="hover:brightness-90 hover:cursor-pointer transition-all duration-300"
          to="/sobremi"
          >SOBRE MI</NuxtLink
        >
        <NuxtLink
          active-class="!text-tertiary"
          class="hover:brightness-90 hover:cursor-pointer transition-all duration-300"
          to="/servicios"
          >SERVICIOS</NuxtLink
        >
        <NuxtLink
          active-class="!text-tertiary"
          class="hover:brightness-90 hover:cursor-pointer transition-all duration-300"
          to="/pienso"
          >PIENSO</NuxtLink
        >
        <NuxtLink
          active-class="!text-tertiary"
          class="hover:brightness-90 hover:cursor-pointer transition-all duration-300"
          to="/contacto"
          >CONTACTO</NuxtLink
        >
      </div>
    </nav>
    <nav class="flex flex-col w-full bg-primary xl:hidden fixed z-50">
      <div class="w-full flex flex-row justify-between px-4 py-3">
        <NuxtLink class="items-center flex" to="/"
          ><NuxtPicture
            :class="menu ? 'opacity-0' : 'opacity-100'"
            class="self-center transition-all duration-300"
            src="/ctNombre.svg"
          ></NuxtPicture
        ></NuxtLink>
        <NuxtPicture
          @click="menu = !menu"
          class="pt-1"
          src="/menu.svg"
        ></NuxtPicture>
      </div>
      <div
        :class="menu ? 'h-56' : 'h-0'"
        class="flex flex-col font-semibold text-xl gap-4 pl-8 overflow-hidden transition-all text-secondary"
      >
        <NuxtLink
          @click="menu = false"
          class="hover:text-primary hover:cursor-pointer transition-all duration-300"
          to="/"
          >INICIO</NuxtLink
        >
        <NuxtLink
          @click="menu = false"
          class="hover:text-primary hover:cursor-pointer transition-all duration-300"
          to="/sobremi"
          >SOBRE MI</NuxtLink
        >
        <NuxtLink
          @click="menu = false"
          class="hover:text-primary hover:cursor-pointer transition-all duration-300"
          to="/servicios"
          >SERVICIOS</NuxtLink
        >
        <NuxtLink
          @click="menu = false"
          class="hover:text-primary hover:cursor-pointer transition-all duration-300"
          to="/pienso"
          >PIENSO</NuxtLink
        >
        <NuxtLink
          @click="menu = false"
          class="hover:text-primary hover:cursor-pointer transition-all duration-300"
          to="/contacto"
          >CONTACTO</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();

const data = [
  { titulo: "INICIO", url: "/" },
  { titulo: "SOBRE MÍ", url: "sobremi" },
  { titulo: "SERVICIOS", url: "servicios" },
  { titulo: "PIENSO", url: "pienso" },
  { titulo: "CONTACTO", url: "contacto" },
];
const menu = ref(false);
</script>
