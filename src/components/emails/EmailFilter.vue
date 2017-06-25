<template>
<section>
    <input  type="radio" id="one" value="read" v-model="picked">
    <label for="one">Read</label>
    <input type="radio" id="two" value="unread" v-model="picked">
    <label for="two">Unread</label>
    <input type="radio" id="two" value="all" v-model="picked">
    <label for="two">All</label>
    <span>Picked: {{ picked }}</span>
    </section>
</template>

<script>
export default {
  name: 'email-filter', 
  data (){
    return {
      picked: null 
    }
  },
  methods: {
    renderEmails (){
      console.log('rendering...')
      

    }
  },
  watch: {
    picked: function (val) {
      console.log(val);
      this.renderEmails(val)
    }
  } 
}  
</script>

<style scoped>

</style>
