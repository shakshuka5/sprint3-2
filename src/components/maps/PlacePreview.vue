<template>
  <li class="place-preview">
             <h2>{{place.name}}</h2>
             <h2>{{place.id}}</h2>
             <img src="http://via.placeholder.com/150x50">
             <!--<h4>{{place.lat}}</h4>
             <h4>{{place.lng}}</h4>
             <h5>{{place.tags}}</h5>-->

             <!--<h3>\${{place.tags}}</h3>-->
             <button @click.stop="editPlace">&#9998;</button>
             <button @click.stop="deletePlace">x</button>
             <!--<button @click.stop="addToCart">Add to Cart</button>-->
         </li>
</template>


<script>
    export default {
        name: 'place-preview',
        props: ['place'],
        methods: {
            editPlace(){
                console.log('Request Edit');
                this.$emit('edit');
            },
            deletePlace() {
                console.log('Request Delete');
                this.$emit('delete');
            }
        }
    }

</script>


<style scoped>

</style>
