<template>
<section class="email-app">
    <div class="tools-bar">
        <email-filter  @filter="filterEmails"></email-filter>
        <email-compose @newEmail="createNewEmail"></email-compose>
    </div>
    <div class="email-show">     
        <email-list :emails="emailsToShow" @select="selectEmail"></email-list>
        <email-details :email="selectedEmail"> </email-details>
    </div>
    <email-status :statusBar="statusBar" ></email-status>
</section>
</template>

<script>

import { EventBus } from  '../../services/BusEvent'
import emailService from '../../services/Email.service'
import emailList from './EmailList'
import emailDetails from './EmailDetails'
import emailCompose from './EmailCompose'
import emailFilter from './EmailFilter'
import emailStatus from './EmailStatus'

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
     emailList, emailService, emailDetails, emailCompose, emailFilter, emailStatus
   },

   data (){
       return {
           emails: emailService.getEmails(),
           selectedEmail: {subject:"hello", message:"fgfggf"},
           filter: 'all'
        // emailsToShow:null
       }
   },
    computed: {
        emailsToShow() {
            console.log('computed')
            if (this.filter&&this.filter==='all') return this.emails;
            if (this.filter === 'read'){
                 return this.emails.filter(email => {
                    return email.isRead === true;
                })
            } else{
                 return this.emails.filter(email => {
                    return email.isRead === false;
                })
            }
        },
        statusBar(){
           return parseInt((emailService.calculateReadEmails()/this.emails.length)*100);
        }
    },
   methods: {
        emailStatus(email){
            emailService.changeEmailIsRead(email);
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
        },
        filterEmails(emailsToShow ){
            console.log('email App', emailsToShow);
            this.filter = emailsToShow;
        }
    }     
}
</script>


<style lang="scss" scoped>
   .email-show {
                display: flex;
                flex-flow : row wrap;
            }

    .tools-bar {
            display: flex;
            flex-flow : row nowrap;  
            justify-content: baseline;
            margin: 1em 2em;
            align-items: center;
    }

    .email-app{
      display: flex;
      flex-flow: column;   
    }
</style>