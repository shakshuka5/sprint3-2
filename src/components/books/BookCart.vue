<template>
  <section class="cart">
    <h1>Cart</h1>
    <ul>
      <li class="clean-list" v-for="item in items">
        {{item.title}} 
      <br><br>
        Quantity: {{item.quantity}}
        <br><br>
      </li>
    </ul>
    <p>Total: {{total}}$</p>
    <button>Checkout</button>
  </section>
</template>

<script>
import cartService from '../../services/BookCart.service'

export default ('book-cart', {
  data() {
    return {
      items: cartService.getCartItems()
    }
  },
  computed: {
    total() {
      this.items
      return cartService.getCartTotal()
    }

  },
  methods: {

  }
})
</script>

<style scoped>
h2 {
  font-size: 5em;
  margin-bottom: 0px;
  color: #42b983;
  margin-top: 10%;
}
li{
  list-style: none;
}

button {
  background-color: #42b983;
  color: white;
  border: 0;
  border-radius: 20px;
  padding: 14px 40px;
  margin: 0;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

a {
  color: #42b983;
}
</style>
