<template>
  <header>
    <h1>User authenticated: {{ authenticated }}</h1>
    <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red': 'green'" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Button from "@/components/Button";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button,
  },
  computed: {
    ...mapState('user', {
      authenticated: 'authenticated'
    }),
    homePage() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>