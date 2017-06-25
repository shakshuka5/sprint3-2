<template>
    <section class="popup place-edit">
        <h5 v-if="place">Editing place</h5>
        <h5 v-else>New Place</h5>
        <label> name: </label>
        <input type="text" v-model="placeToEdit.name" />
        <label> lat: </label>
        <input type="text" v-model="placeToEdit.position.lat" />
        <!--<input type="text" v-model="this.placeToEdit.lat" />-->
        <label> lng: </label>
        <input type="text" v-model="placeToEdit.position.lng" />
        <!--<input type="text" v-model="this.placeToEdit.lng" />-->
        <label> tags: </label>
        <input type="text" v-model="placeToEdit.tags" />

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
        this.placeToEdit = Object.assign({}, this.place);
        console.log('lalal', this.placeToEdit);
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
