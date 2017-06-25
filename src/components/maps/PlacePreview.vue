<template>
  <li class="place-preview">
    <div>
        <h6>{{place.name}}</h6>
    </div>
    <div>
        <button @click.stop="editPlace">&#9998;</button>
        <button @click.stop="deletePlace">x</button>
    </div>
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
h6 {
    margin:0px;
}
button {
    /*font-size: 10px;*/
    border: 1px solid var(--green-color);
    border-radius: 7px;
    padding: 2px 4px;
    cursor: pointer;
}
</style>
