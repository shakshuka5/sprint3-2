<template>
  <li class="book-preview">
    <h2>{{book.title}}</h2>
    <img src="http://via.placeholder.com/150x150">
    <h3>${{book.price}}</h3>
    <button @click.stop="editBook">&#9998;</button>
    <button @click.stop="deleteBook">x</button>
    <button @click.stop="addToCart">Add to Cart</button>
  </li>
</template>

<script>
export default ('bookPreview', {
  props: ['book'],
  methods: {
    editBook() {
      console.log('Request Edit')
      this.$emit('edit')
    },
    deleteBook() {
      console.log('Request Delete')
      this.$emit('delete')
    },
    addToCart() {
      this.$emit('add-to-cart')
    }
  }
})

</script>

<style scoped>
li {
  display: block;
  width: 18%;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
}

button {
  border: 1px solid var(--main-color);
  background: inherit;
  color: var(--main-color);
  border-radius: 20px;
  padding: 0px 20px;
  line-height: 2em;
  margin: 0;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

button:hover {
  background: #42b983;
  color: white;
}

li:hover {
  background: whitesmoke;
  transition: 0.4s all;
}
</style>
