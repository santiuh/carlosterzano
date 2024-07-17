<template>
    <div class="bg-primary flex relative justify-center rounded-[22px] w-fit text-secondary">
        <slot class="z-10"></slot>
    <div class="absolute w-full h-full z-0" style="background: transparent linear-gradient(90deg, #8DA1FA 0%, #8DA1FA 25%, #4DE2BB 80%, #4DE2BB 98%, #4DE2BB 100%) 0% 0% no-repeat padding-box;
     mix-blend-mode: soft-light;
     opacity: 1;    
    border-radius: 22px;">
    </div>
    </div>
   

</template>
<script setup></script>