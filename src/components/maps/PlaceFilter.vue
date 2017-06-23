<template>
    <section class="place-filter">
        <h2>Places Filter</h2>
        <input type="text" v-model="placeFilter.byText" placeholder="Filter By Name" >
        <h3></h3>
    </section>
</template>

<script>
    export default {
        name: 'place-list',
        data() {
            return {
                 placeFilter: {byText: ''} //, byMaxPrice: 1000 }
            }
        },
        created() {
            this.$watch('placeFilter.byText', function (newVal, oldVal) {
                this.$emit('set-filter', this.placeFilter);
            })
        }  
    }
</script>
