<template>
  <section class="popup book-edit">
  
    <h1 v-if="book">Edit: {{book.title}}</h1>
    <h1 v-else>New Book</h1>
  
    Ttile:<input type="text" v-model="bookToEdit.title" />
    Price:<input type="number" v-model="bookToEdit.price" />$
    Description:<textarea type="number" v-model="bookToEdit.description" /></textarea>
    <button @click="save">Save</button>
    <button @click="cancel">Cancel</button>
  </section>
</template>

<script>
export default ('book-edit', {
  props: ['book'],
  data() {
    return {
      bookToEdit: null
    }
  },
  created() {
    this.bookToEdit = Object.assign({}, this.book)
  },
  methods: {
    save() {
      console.log('Saving', this.bookToEdit)
      this.$emit('save', this.bookToEdit)
    },
    cancel() {
      console.log('Cancel')
    }
  }
})
</script>

<style scoped>

</style>
