<template>
  <section v-if="places">
  
    <place-filter @set-filter="setFilter"></place-filter>
    <h2>We have {{places.length}} places</h2>
    <button @click="isCreateMode=true">+</button>
    <ul>
      <place-preview v-for="currPlace in placesToShow" :key="currPlace.id" @click.native="selectPlace(currPlace)" @edit="editPlace(currPlace)" @delete="deletePlace(currPlace)" :place="currPlace">
      </place-preview>
    </ul>
    <place-details v-if="selectedPlace" @close="resetSelected" :place="selectedPlace">
    </place-details>
    <!--<book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
    </book-details>-->
    
    <place-edit v-if="editedPlace || isCreateMode" :place="editedPlace" @save="savePlace" @cancel="cancelEdit">
    </place-edit>
    <!--<book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook">
    </book-edit>-->
  
  </section>
</template>

<script>
import placeService from '../../services/place.service'
import PlacePreview from './PlacePreview'
import PlaceDetails from './PlaceDetails'
import PlaceEdit from './PlaceEdit'
import PlaceFilter from './PlaceFilter'
export default {
  name: 'place-list',
  created() {
    placeService.getPlaces().then(places => {
      this.places = places
    })
  },
  data() {
    return {
      places: null,
      selectedPlace: null,
      editedPlace: null,
      isCreateMode: false,
      placeFilter: null
    }
  },
  computed: {
      placesToShow() {
        if (!this.placeFilter) return this.places;
        return this.places.filter(place => {
          return place.name.includes(this.placeFilter.byText);
        });
      }
  },
  components: {
    PlacePreview,
    PlaceFilter,
    PlaceDetails,
    PlaceEdit
  },
  methods: {
    selectPlace(place) {
      this.selectedPlace = place;
      console.log(this.selectedPlace);
    },
    resetSelected() {
      this.selectedPlace = null;
    },
    // selectNext() {
    //   this.selectedBook = placeservice.getNext(this.selectedBook);
    // },
    editPlace(place) {
      console.log('Editing place', place)
      this.editedPlace = place;
    },
    deletePlace(place) {
      placeService.deletePlace(place);
    },
    savePlace(place) {
      placeService.savePlace(place);
      this.editedPlace = null;
      this.isCreateMode = false;
    },
    cancelEdit(place) {
      this.editedPlace = null;
      this.isCreateMode = false;
    },
    setFilter(newFilter) {
      console.log('newFilter', newFilter);
      this.placeFilter = newFilter;
    }//,
    // addToCart(book) {
    //   cartService.addToCart(book);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .place-preview {
      list-style: none;
      display: inline-block;
      margin: 5px;
      padding: 10px;
      border: 1px solid gray;
      background: lightgray;
      text-align: center;
  }
</style>