<template>
  <section class="email-list">
  <ul> 
      <email-preview v-for="currEmail in emails"  :email="currEmail" :key="currEmail.id" @click.native="selectEmail(currEmail)"> </email-preview>
    </ul>
     <!--<li v-for="currEmail in emails " >{{currEmail.subject}}</li>-->
    </ul>
  </section>

</template>

<script>
//import emailService from '../../services/Email.service'
import emailPreview from './EmailPreview'
export default {
    name: 'email-list',
    props: ['emails'],
    created(){
        console.log(this.emails);
    },
    components:{
       emailPreview
    },
   methods: {
      selectEmail(currEmail) {
        console.log('selceting email : ' + currEmail.id )
        this.$emit('select',currEmail )
      }
   }

 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  ul{
    padding:0;
  }
  .email-list {
    cursor: pointer; 
    margin left: 5px;
    width: 40%;
  }

</style>
