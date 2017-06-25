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
// let emails_data = {
//       
//        }

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
       return{
            isCreatingMode: false,
            message: null,
            subject: null
       }
    },
}
</script>

<style lang="scss" scoped>

.new-email-compose{
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: var( --main-color);
    background-color: rgba(0,0,0,0.6);
    // opacity: 0.9; 
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
      white-space:pre;
        resize: none;
    }
    height:400px;
    width:400px;
    padding: 2em;
    border: 17px solid rgba(0,0,0,0.5);
    border-radius: 1em; 
    background-color: white;
    color: var(--green-color);
}

button {
  border: 1px solid var(--main-color);
  background: inherit;
  color: var(--main-color);
  border-radius: 20px;
  padding: 0px 20px;
  line-height: 2em;
  margin: 0.5em;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.5s;
}

button:hover {
  background: #42b983;
  color: white;
}

</style>