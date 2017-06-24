<template>
<section>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">Read</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <span>Picked: {{ picked }}</span>
    </section>
</template>

<script>
export default ('book-filter', {
  data() {
    return {
      bookFilter: { byText: '', byMaxPrice: 1000 }
    }
  },
  created() {
    this.$watch('bookFilter.byText', function(newVal, oldVal) {
      this.$emit('set-filter', this.bookFilter)
    })
  },
  methods: {
  }
})

</script>

<style scoped>

</style>
