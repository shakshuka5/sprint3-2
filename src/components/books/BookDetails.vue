<template>
  <section class="popup book-details">
    <button @click="closeMe">x</button>
    <h1>Details of: {{book.title}}</h1>
    <hr/>
    <img src="http://via.placeholder.com/150x150">
    <h3>\${{book.price}}</h3>
    <p>{{book.description}}</p>
    <button @click="requestNextBook">Next > </button>
  </section>
</template>

<script>
export default ('book-details', {
  props: ['book'],
  methods: {
    closeMe() {
      console.log('close me!')
      this.$emit('close')
    },
    requestNextBook() {
      console.log('Requesting Next')
      this.$emit('next')
    }
  }
})
</script>

<style lang="scss" scoped>
.book-details {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: gainsboro;
  padding: 1%;
  h1 {
    text-align: center;
  }
  p {
    text-align: left;
  }
}
</style>
