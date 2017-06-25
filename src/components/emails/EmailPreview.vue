<template>
  <section class="email-preview">
      <li :class="classObject">
          <h1 > <button @click.stop="deleteEmail"> 🗑 </button> {{email.subject}}   </h1>
          <p> {{email.message}}</p>
       
      </li>


  </section>
</template>

<script>
import { EventBus } from  '../../services/BusEvent'
export default {
    name: 'email-preview',
    props: ['email'] ,
    created(){
        //  console.log(this.email);
    },
    methods: {
     deleteEmail() {
      console.log('Request Delete')
      EventBus.$emit('deleteEmaill', this.email)
      }
    },
    computed: {
      classObject: function () {
        return {
          emailRead: this.email.isRead 
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .emailRead {
      background-color: var(--green-color);
      color:white;
  }
  
  button{
    width:15px;
    text-align: center;
    vertical-align: middle;
    // background-color: red;
    // border: 0.5px solid var(--main-color);
    padding:1px;
    margin-right: 2px;
  }

  h1 {
      margin: 0.5px;
  }
  p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  li
  {
      transition: all  0.5s;
      display:flex;
      flex-flow: column;
      width: 100%;
      border: 1px solid var(--main-color);
      padding: 1%;
      height:80px;
      flex-wrap: nowrap;
      &:hover {
         opacity: 0.8;
        }
  }

</style>
