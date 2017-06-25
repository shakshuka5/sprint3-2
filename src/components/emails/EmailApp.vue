<template>
<section class="email-app">
    <email-compose @newEmail="createNewEmail"></email-compose>
    <email-filter></email-filter>
    <section class="email-show">     
        <email-list :emails="emails" @select="selectEmail"></email-list>
        <email-details :email="selectedEmail"> </email-details>
    </section>
</section>
</template>

<script>

import { EventBus } from  '../../services/BusEvent'
import emailService from '../../services/Email.service'
import emailList from './EmailList'
import emailDetails from './EmailDetails'
import emailCompose from './EmailCompose'
import emailFilter from './EmailFilter'

export default {
    name: 'email-app',
    created() {
         EventBus.$on('deleteEmaill', data => {
             console.log('delete from app ' + data.id)
             emailService.deleteTheEmail(data);
            })
 //      emailService.getEmails().then(emails => {
//           this.emails = emails;
//             //this.selectedEmail = emails[0];
//           console.log('got email', emails[0]);
//       })   
    },
    components :{
     emailList, emailService, emailDetails, emailCompose, emailFilter
   },

   data (){
       return {
           emails: emailService.getEmails(),
           selectedEmail: {subject:"hello", message:"fgfggf"}
       }
   },
   methods: {
        emailStatus(email){
            email.isRead= true;
        },
        selectEmail(email) {
             this.emailStatus(email)
             email.isRead= true;
            return this.selectedEmail = email;
        },
        createNewEmail(subject,message ){
            const isRead = false;
            const newEmail= {"subject":subject, "message":message, "isRead": isRead}
            console.log(newEmail.subject, newEmail.message, newEmail.isRead);
            emailService.addNewEmail(newEmail);

        }
    }     
}
</script>


<style lang="scss" scoped>
   .email-show {
                display: flex;
                flex-flow : row wrap;
            }
</style>