<template>
<section>
    <div v-if="isCreatingMode" class="new-email-compose"> 
        <div class="form-new-email">
             Subject: <input type="text" v-model="subject" placeholder="Subject goes here...">
             Content: <textarea type="text" v-model="message" placeholder="Content goes here...">
             </textarea>
               <button @click="save">Save</button>
              <button @click="isCreateMode">Cancel</button>
        </div>
    </div>
    <div> 
        <div>
            <button @click="isCreateMode">Compose </button>
        </div>
    </div>
</section>    
</template>

<script>
let emails_data = {
          isCreatingMode: false,
          message: null,
          subject: null
       }

export default {
    name: 'email-compose',
    methods: {
        isCreateMode(){
            this.isCreatingMode = !this.isCreatingMode;
        },
        save(){
            this.isCreatingMode = !this.isCreatingMode;
           // console.log('saving email: ' , this.subject , this.message)
            this.$emit('newEmail', this.subject, this.message)
            this.subject = "";
            this.message ="";
        }
    },
     data (){
       return emails_data;
    },
}
</script>

<style lang="scss" scoped>

.new-email-compose{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var( --main-color);
    opacity: 0.9; 
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index:1;
    top:0;
    right:0;
}

.form-new-email {
    input, textArea{
        margin: 10px 5px;
        width:95%;
    }
    textArea{
        height:60%;
    }
    height:400px;
    width:400px;
    background-color: white;
   // opacity:1;
    color: var(--green-color);
}

</style>