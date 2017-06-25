<template>
  <section v-if="email">
    <p> <strong>subject</strong>: {{email.subject }} </p>
    <hr>
    <p>  {{email.message}} </p>

  </section>
    <section v-else>
    <p> no email to preview </p>


  </section>

</template>

<script>

export default {
  name:  'email-details',
  props: ['email'],
    created(){
        console.log(this.selectedEmail);
    },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  section {
    p{
      padding: 1%;
    }
    border: 1px solid var(--main-color);
    width: 58%;
    margin: 15px 0 15px 18px;
  //  margin-left: 18px;
  //  margin-top: 15px;
  //  margin-bottom: 15px;
  }
  
</style>
