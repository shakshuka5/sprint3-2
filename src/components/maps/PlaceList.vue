<template>
  <section v-if="places">
  
    <!--<book-filter @set-filter="setFilter"></book-filter>-->
    <h2>We have {{places.length}} places</h2>
    <!--<button @click="isCreateMode=true">+</button>-->
    <ul>
      <place-preview v-for="currPlace in placesToShow" :key="currPlace.id" @click.native="selectPlace(currPlace)" @edit="editPlace(currPlace)" :place="currPlace">
      </place-preview>
      <!--<place-preview v-for="currPlace in placesToShow" :key="currPlace.id" @click.native="selectPlace(currPlace)" @edit="editPlace(currPlace)" @delete="deletePlace(currPlace)" @add-to-cart="addToCart(currPlace)" :place="currPlace">
      </place-preview>-->
    </ul>
    <place-details v-if="selectedPlace" @close="resetSelected" :place="selectedPlace">
    </place-details>
    <!--<book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
    </book-details>-->
  
    <!--<book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook">
    </book-edit>-->
  
  </section>
</template>

<script>
import placeService from '../../services/place.service'
// import cartService from '../cart.service'
import PlacePreview from './PlacePreview'
import PlaceDetails from './PlaceDetails'
// import BookFilter from './BookFilter'
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
    //   editedplace: null,
    //   isCreateMode: false,
    //   bookFilter: null
    }
  },
  computed: {
    placesToShow() {
      return this.places;
      // if (!this.bookFilter) return this.places;
      // return this.places.filter(place => {
      //   return place.title.includes(this.placeFilter.byText)
      // });
    }
  },
  components: {
    PlacePreview,
    // BookFilter,
    PlaceDetails
  },
  methods: {
    selectPlace(place) {
      this.selectedPlace = place;
      console.log(this.selectedPlace);
    },
    resetSelected() {
      this.selectedPlace = null;
    }//,
    // selectNext() {
    //   this.selectedBook = placeservice.getNext(this.selectedBook);
    // },
    // editBook(book) {
    //   console.log('Editing the book', book)
    //   this.editedBook = book;
    // },
    // deleteBook(book) {
    //   placeservice.deleteBook(book);
    // },
    // saveBook(book) {
    //   placeService.saveBook(book);
    //   this.editedBook = null;
    //   this.isCreateMode = false;
    // },
    // setFilter(newFilter) {
    //   console.log('newFilter', newFilter);
    //   this.bookFilter = newFilter;
    // },
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