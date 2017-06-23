<template>
  <li class="place-preview">
             <h2>{{place.name}}</h2>
             <h2>{{place.id}}</h2>
             <img src="http://via.placeholder.com/250x150">
             <!--<h4>{{place.lat}}</h4>
             <h4>{{place.lng}}</h4>
             <h5>{{place.tags}}</h5>-->

             <!--<h3>\${{place.tags}}</h3>-->
             <!--<button @click.stop="editBook">&#9998;</button>
             <button @click.stop="deleteBook">x</button>
             <button @click.stop="addToCart">Add to Cart</button>-->
         </li>
</template>


<script>
    export default {
        name: 'place-preview',
        props: ['place']
    }
</script>


<style scoped>

</style>
