<template>
  <section v-if="this.placesToShow">
  
    <ul>
      <place-preview v-for="currPlace in placesToShow" 
                      :key="currPlace.id" 
                      @click.native="selectPlace(currPlace)" 
                      @edit="editPlace(currPlace)" 
                      @delete="deletePlace(currPlace)" :place="currPlace">
      </place-preview>
    </ul>
      
  </section>
</template>

<script>

import placeService from '../../services/place.service'
import PlacePreview from './PlacePreview'

export default {
  name: 'place-list',
  created() {
  },
  props: ['placesToShow'],
  components: {
    PlacePreview,
  },
  methods: {
    selectPlace(place) {
      console.log(place);
      this.$emit('selectPlace', place);
    },
    editPlace(place) {
      console.log(place);
      this.$emit('editPlace', place);
    },
    deletePlace(place) {
      // console.log('deletePlace in list', place);
      this.$emit('deletePlace', place);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  .place-preview {
      /*list-style: none;*/
      /*display: inline-block;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 5px;
      border: 1px solid gray;
      /*text-align: center;*/
      background-color: white;
      cursor: pointer;
  }
  .place-preview:not(:last-of-type) {
    border-bottom: none;
  }
</style>