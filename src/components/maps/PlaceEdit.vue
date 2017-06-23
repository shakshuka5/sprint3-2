<template>
  <section class="popup place-edit">
        <h1 v-if="place">Editing place</h1>
        <h1 v-else>New Place</h1>
        <!--lat: 35+i,
            lng: 34+i,
            tags: ['fun','super fun']-->
        <label> name: </label>
        <input type="name" v-model="placeToEdit.name" />
        <label> lat: </label>       
        <input type="lat" v-model="placeToEdit.lat" />
        <label> lng: </label>
        <input type="lng" v-model="placeToEdit.lng" />
        <label> tags: </label>
        <input type="tags" v-model="placeToEdit.tags" />

        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
    </section>
</template>

<script>
export default {
    name: 'place-edit',
    props: ['place'],
    data() {
        return {
        placeToEdit: null
        }
    },
    created() {
        this.placeToEdit = Object.assign({}, this.place)
    },
    methods: {
        save() {
            console.log('Saving', this.placeToEdit);
            this.$emit('save', this.placeToEdit);
        },
        cancel() {
            console.log('Cancel');
            this.$emit('cancel', this.placeToEdit);
        }
    }
}
</script>

<style scoped>

</style>
