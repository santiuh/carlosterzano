<template>
    <header class="h-[300px] xl:h-[680px] xl:pt-9 justify-center flex bg-cover relative" :style="backgroundStyles">
        <div class="xl:max-w-[1440px] xl:px-[192px] flex flex-col w-full">
            <HeaderNavbar></HeaderNavbar>
            <div class="h-full w-full flex items-center justify-center px-4 xl:px-0">
                <NuxtImg v-if="props.frase !== ''" class="z-10" :src="props.frase"></NuxtImg>

            </div>
        </div>
        <div class="h-[300px] xl:h-[680px] w-full absolute top-0" :style="'background:'+props.filtro"></div>
        <NuxtPicture class="absolute bottom-[-82px] z-10 " src="/sello.svg"></NuxtPicture>

    </header>
</template>
<script setup>

const props = defineProps(['fondo','frase','filtro'])

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(props.fondo, { format:'webp' })
  return { backgroundImage: `url('${imgUrl}')`,
  backgroundPositionY: '30%',   
}
})
    
</script>
<style scoped>
img{
    width: 100% !important;
}
</style>