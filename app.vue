<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>

  </NuxtLayout>
</template>
<script setup>
useSeoMeta({
  title: 'Carlos Terzano',
  ogTitle: 'Carlos Terzano',
  description: 'Descrip Carlos Terzano',
  ogDescription: 'og Descrip Carlos Terzano',
  ogImage: '/logo.svg',
})
</script>
<style>
body, html{
  scroll-behavior: smooth !important;
}
</style>