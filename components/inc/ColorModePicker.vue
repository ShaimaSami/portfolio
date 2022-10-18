<template>
    <div>
      <ul>
        <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">
          <component :is="`icon-${color}`" @click="$colorMode.preference = color" :class="getClasses(color)"/>
          
        </li>
      </ul>
    </div>
  </template>

<script>

import IconLight from 'static/images/light-svgrepo-com1.svg?inline'
import IconDark from 'static/images/moon-svgrepo-com1.svg?inline'

export default {
  components: {
      IconLight,
      IconDark
  }, 

  data() {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  },
}
</script>
