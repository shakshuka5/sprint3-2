<template>
  <section class="maps-app">
    <!--<h1>my Mapped Places...</h1>-->
    <map-cmp :places="places"></map-cmp>

    <!--<h2>We have {{this.places.length}} places</h2>-->
    <div class="list-filter-container">
      <place-filter @set-filter="setFilter"></place-filter>
      <place-list @selectPlace="selectPlace" 
                  @editPlace="editPlace" 
                  @deletePlace="deletePlace" 
                  :placesToShow="placesToShow">
      </place-list>
      <button @click="isCreateMode=true">+</button>
    </div>
    
    <place-details v-if="selectedPlace" @close="resetSelected" :place="selectedPlace"></place-details>
    <place-edit v-if="editedPlace || isCreateMode" @save="savePlace" @cancel="cancelEdit" :place="editedPlace">
    </place-edit>
  </section>
</template>

<script>
import placeService from '../../services/place.service'
import PlaceList from './PlaceList'
import MapCmp from './MapCmp'
import PlaceDetails from './PlaceDetails'
import PlaceEdit from './PlaceEdit'
import PlaceFilter from './PlaceFilter'
export default {
   data() {
    return {
      places: [],
      selectedPlace: null,
      editedPlace: null,
      isCreateMode: false,
      placeFilter: null
    }
   },
   created() {
    placeService.getPlaces().then(places => {
      this.places = places
      // console.log('places created:' + this.places);
    })
  },
  components: {
    PlaceList ,
    MapCmp,
    PlaceFilter,
    PlaceDetails,
    PlaceEdit
  },
  computed: {
      placesToShow() {
        if (!this.placeFilter) return this.places;
        return this.places.filter(place => {
          return place.name.includes(this.placeFilter.byText);
        });
      }
  },
  methods: {
    selectPlace(place) {
      this.selectedPlace = place;
      console.log('place selected:' + this.selectedPlace);
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
      // console.log('deletePlace in app', place);
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
    }
  }
}
</script>

<style lang="scss" scoped>
.maps-app {
  display: flex;
  &>* {
    margin: 20px;
  }
}
</style>
