<template>
  <button @click='setAuth(true)' :style='{background: color}' class="btn">{{ text }}</button>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "Button",
  props: {
    text: String,
    color: String
  },
  methods: {
    ...mapMutations({
      setAuth: 'user/SET_AUTH'
    })
  }
}
</script>

<style scoped>

</style>