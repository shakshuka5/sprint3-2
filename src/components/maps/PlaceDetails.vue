<template>
    <section class="popup place-details">
        <button @click="closeMe">x</button>
        <h1>Details of: {{place.name}}</h1>
        <img src="http://via.placeholder.com/150x50">
        <h3>{{place.id}}</h3>
        <h3>{{place.lat}}</h3>
        <h3>{{place.lng}}</h3>
        <h3>{{place.tags}}</h3>
        <!--<button @click="requestNextBook">Next > </button>-->
    </section>
</template>

<script>
export default {
    name: 'place-details',
    props: ['place'],
    methods: {
        closeMe() {
            console.log('close me1');
            this.$emit('close');
        }//,
        // requestNextBook() {
        //     console.log('Requesting Next');
        //     this.$emit('next');
        // }
    }
}
</script>

<style>
    .place-details {
        background: lightgoldenrodyellow;
        padding: 10px;
        border-radius: 1em;
        text-align: center;
        position: absolute;
        left: 0;
        top: 50%;
    }
</style>
