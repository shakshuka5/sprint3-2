<template>
<section>
    <input class="radio-btn" type="radio" id="one" value="read" v-model="picked">
    <label for="one">Read</label>
    <input class="radio-btn" type="radio" id="two" value="unread" v-model="picked">
    <label for="two">Unread</label>
    <input class="radio-btn" type="radio" id="two" value="all" v-model="picked">
    <label for="two" selected="selected">All</label>
    <!--<span>Picked: {{ picked }}</span>-->
    <input v-model="subject" placeholder="Search By Subject">
    </section>
</template>

<script>
export default {
  name: 'email-filter', 
  data (){
    return {
      picked: 'all',
      subject: null
    }
  },
  methods: {
    filterEmailsByStatus (picked){
      this.$emit('filter',picked )
    },
     filterEmailsSubject (subject){
      this.$emit('filterBySubject',subject )
    }
  },
  watch: {
    picked: function (val) {
      // console.log(val);
      this.filterEmailsByStatus(val)
    },
    subject: function (val) {
     // console.log(val);
      this.filterEmailsSubject(val)
    }
  } 
}  
</script>

<style scoped>

.radio-btn {
    border: 1px solid #bfcbd9;
    border-radius: 100%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
}
</style>
