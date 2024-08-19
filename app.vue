<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>

  </NuxtLayout>
</template>
<script setup>
useSeoMeta({
  title: 'Carlos Terzano - Psicologo y coach organizacional',
  ogTitle: 'Carlos Terzano - Psicologo y coach organizacional',
  description: 'Fundador CEO y Fundador de Utopías y de Human Growth. Experto en Coaching de Equipos | Especialista en Desarrollo Humano | Formación de Líderes | Tallerista y Conferencista Internacional',
  ogDescription: 'Fundador CEO y Fundador de Utopías y de Human Growth. Experto en Coaching de Equipos | Especialista en Desarrollo Humano | Formación de Líderes | Tallerista y Conferencista Internacional',
  ogImage: '/ctContacto.jpg',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>