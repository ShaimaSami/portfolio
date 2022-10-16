<template>
    <div :dir="this.$dir()">
      <IncMyheader />
      <Nuxt />
      <IncMyfooter />
    </div>
  </template>

    <script>
    export default {
        name: 'default',
    }
    </script>