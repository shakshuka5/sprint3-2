<template>
    <section class="popup place-details">
        <button @click="closeMe">x</button>
        <h3>Details of: {{place.name}}</h3>
        <h5>Place Lat:{{place.position.lat}}</h5>
        <h5>Place Lng:{{place.position.lng}}</h5>
        <h5>Place tags:{{place.tags}}</h5>
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
        }
    }
}
</script>

<style>
    .place-details {
        background: white;
        padding: 10px;
        margin: 10px;
        border-radius: 1em;
        border: 1px solid var(--main-color);
        text-align: left;
        position: absolute;
        left: 25%;
        top: 20%;
    }
</style>
