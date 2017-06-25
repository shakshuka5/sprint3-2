<template>
    <div id="myProgress">
     <div :style="{ width: statusBar + '%' }" id="myBar">{{statusBar}}%</div>
    </div>

</template>

<script>
export default {
    name: 'email-status',
    props: ['statusBar'] ,
    created(){
        //  console.log(this.email);
    },
    data (){
    return {
      emailread: 10 
    }
     },
    methods: {
     deleteEmail() {
      console.log('Request Delete')
      EventBus.$emit('deleteTheEmail', this.email)
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

  #myProgress {
//   width: 100vw;
  background-color: #ddd;
//   margin: 1em 4em 1em 2em;
  border-radius:20px;
  }

#myBar {
transition: all 0.5s;
  //width: 10%;
  height: 30px;
  background-color: var(--green-color);
  text-align: center;
  line-height: 2em;
  border-radius:20px;
  color: white;
}
</style>
