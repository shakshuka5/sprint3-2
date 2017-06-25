<template>
<section class="email-app">
    <div class="tools-bar">
        <email-filter  @filter="filterEmails" @filterBySubject="filterSubjectx"></email-filter>
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
            this.selectedEmail = emailService.getNext(); 
            emailService.changeEmailIsRead(this.selectedEmail);
            }),
      emailService.getEmails().then(emails => {
          this.emails = emails;
            this.selectedEmail = emails[0];
          console.log('got email', emails[0]);
      })   
    },
    components :{
     emailList, emailService, emailDetails, emailCompose, emailFilter, emailStatus
   },

   data (){
       return {
           emails: emailService.getEmails(),
           selectedEmail:null,
           filter: 'all',
           filterBySubject: null
        // emailsToShow:null
       }
   },
    computed: {
        emailsToShow() {
            var emailsCopy = this.emails;
            if (this.filterBySubject) {
              emailsCopy = emailsCopy.filter(email => {
                 return email.subject.toUpperCase().includes(this.filterBySubject.toUpperCase())
                 })
            }
      //TODO: Replace the following if's with a switch-case block
            if (this.filter==='all') return emailsCopy;
            if (this.filter === 'read'){
                 return emailsCopy.filter(email => {
                    return email.isRead === true;
                })
            } 
            if (this.filter === 'unread'){
                 return emailsCopy.filter(email => {
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
             emailService.changeEmailIsRead(email);
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
        },
        filterSubjectx(emailsToShow ){
            this.filterBySubject = emailsToShow;
            console.log('email App', this.filterBySubject);
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