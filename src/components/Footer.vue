<template>
  <footer>
    <h3>Copyright &copy; 2021</h3>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  a {
    color: #333
  }

  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>