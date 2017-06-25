<template>

  <section>
    <!--<h1>My Map</h1>-->
    <gmap-map
    :center=center 
    :zoom="11"
    style="width: 500px; height: 300px"
  >
    <!--<gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position">
    </gmap-marker>-->

    <gmap-marker
      v-for="(place, index) in places" :key="place.id"
      :position="place.position"
      :clickable="true"
      :draggable="true"
      @click="center=place.position">
    </gmap-marker>

  </gmap-map>
</section>
</template>

<script>
  ///////////////////////////////////////// 
  // New in 0.4.0 
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
 
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC76-Ly9SEdGPwUtBLowRjzhXkLo4fHudA',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input 
    }
  });
 
  export default {
    name: 'map-cmp',
    props: ['places'],
    data () {
      return {
        center: {lat: 32, lng: 35.4}
        //myPosition: {lat: currPlace.lat, lng: currPlace.lng}
        // markers: [{
        //   position: {lat: 31.05, lng: 34.85}
        // }, {
        //   position: {lat: 31.06, lng: 34.9}
        // }]
      }
    },
    created () {
      // this.center = this.places ? this.places[0].position: {lat: 31.5, lng: 34.85};
      // console.log(this.center);
    },
    mounted () {
      // this.initMapPlaces();
      // console.log('creating map');
      // console.log('map places:', this.places);
    },
   methods: {
    }
  
  
  }
</script> 
