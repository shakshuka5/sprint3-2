<template>
  <section>
    <hr/>
    <div class="navbar">
      <router-link to="/books" tag="h3">Books</router-link>
      <router-link to="/emails" tag="h3">Emails</router-link>
      <router-link to="/maps" tag="h3">Maps</router-link>
      <router-link to="/about" tag="h3">About</router-link>
      <router-link to="/contact" tag="h3">Contact</router-link>
    </div>
    <hr/>
  </section>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.navbar {
  color: #42b983;
  display: flex;
  justify-content: space-around;
  margin: 0px;
}

hr {
  color: whitesmoke;
  background-color: whitesmoke;
  margin: 0px;
  padding: 0px;
}

h3 {
  display: inline-flex;
  cursor: pointer;
  margin: 0px;
  padding: 12px;
}

h3:hover {
  border-bottom: 4px solid #42b983;
  transition: 0.2s all;
  padding-bottom: 8px;
}

a {
  color: #42b983;
}
</style>
