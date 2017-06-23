<template>
  <section class="maps-app">
    <h1>my Mapped Places...</h1>
    <place-list></place-list>
    <map-cmp></map-cmp>
  </section>
</template>

<script>
import PlaceList from './PlaceList'
import MapCmp from './MapCmp'
export default {
  components: {
    PlaceList,
    MapCmp
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
