<template>
    <div>
      <Myheader />
      <Nuxt />
      <Myfooter />
    </div>
  </template>

    <script>
    import Myheader from '~/components/inc/Myheader.vue';
    import Myfooter from '~/components/inc/Myfooter.vue';

    export default {
        name: 'default',
        components: {
            Myheader,
            Myfooter,
        }
    }
    </script>