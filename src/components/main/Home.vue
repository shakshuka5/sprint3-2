<template>
  <div class="hello">
    <h2>Hello!</h2>
    <h4>Welcome to <span class="green">Snit</span>™</h4>
    <h5>(if you dont know where to start , we suggest you enter
      <router-link to="/booklist">Books</router-link>)</h5>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.hello{
  text-align: center;
}
h2 {
  font-size: 5em;
  color: #42b983;
}
a {
  text-decoration: none;
  color: #42b983;
}
</style>
