<template>
    <header class=" h-screen xl:h-auto xl:bg-right-top bg-[left-230px] bg-cover xl:px-[195px] xl:pt-9 justify-center flex" :style="backgroundStyles">
        <div class="xl:max-w-[1440px] flex flex-col w-full">
            <HeaderNavbar></HeaderNavbar>
            <div class="flex flex-col h-full justify-center gap-4 xl:gap-9 xl:pt-[160px] xl:pb-[173px] px-4 xl:px-0 text-white text-4xl">
Creamos recuerdos para to da la vida
            </div>
        </div>
    </header>
</template>
<script setup>

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/beso.jpg', { format:'avif' })
  return { backgroundImage: `url('${imgUrl}')`,
  backgroundPositionX: '30%', 
}
})
    
</script>