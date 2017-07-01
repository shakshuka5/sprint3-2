<template>
    <section class="popup place-edit">
        <!--{{placeToEdit}}-->
        <h5 v-if="place">Editing place</h5>
        <h5 v-else>New Place</h5>
        
        <div>
            <label> name: </label>
            <input type="text" v-model="placeToEdit.name" />
        </div>
            
        <div>
            <label> lat: </label>
            <input type="text" v-model="placeToEdit.position.lat" />
            <!--<input type="text" v-model="this.placeToEdit.lat" />--> 
        </div>
       
        <div>
            <label> lng: </label>
            <input type="text" v-model="placeToEdit.position.lng" />
            <!--<input type="text" v-model="this.placeToEdit.lng" />-->
        </div>
        
        <div>
           <label> tags: </label>
            <input type="text" v-model="placeToEdit.tags" /> 
        </div>
        

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
