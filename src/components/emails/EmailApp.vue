<template>
<section class="email-app">
    <email-compose></email-compose>
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
// import bookService from '@/services/book.service.js'
// import cartService from '@/services/cart.service.js'
// import BookPreview from './BookPreview'

// import BookFilter from './BookFilter'
// import BookEdit from './BookEdit'
// import Cart from './Cart'

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
     emailList, emailService, emailDetails, emailCompose
   },

   data (){
       return {
           emails: emailService.getEmails(),
           selectedEmail: {subject:"hello", content:"fgfggf"}
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

    }     
}
</script>


<style lang="scss" scoped>
   .email-show {
                display: flex;
                flex-flow : row wrap;
            }
</style>


//  [
//                 {
//                     id: 1,
//                     title: 'hi, ',
//                     msg: `Hi Taly,
                    

//                   Lorem ipsum dolor sit amet, mea at graeco apeirian moderatius, vim ex populo maiestatis. Quidam pertinacia democritum ei vis. In nulla accommodare est, tota vituperata vix id. Ad vim quis inermis intellegam. At sea wisi option propriae. Tempor putent constituam eum cu.

//                   Thanks, Inbar`

//                 },
//                 {
//                     id: 2,
//                     title: 'you wom 2,000 NIS ',
//                     msg: `Hi Snir,
                    
//                     just give us your bank account deatails 

//                   Thanks, the Lotto`
//                 },
//                 {
//                     id: 3,
//                     title: 'Lorem Inspum ',
//                     msg: `Lorem ipsum dolor sit amet, cu persius efficiendi nec. Duo atqui ullum ceteros no. Quo an quando inermis instructior. Eos causae dissentiunt ei. Qui eu timeam assentior. Sea at oportere referrentur, te eleifend instructior qui, posse fabellas concludaturque ius et.


//                     Congrats, and keep in touch,
//                     Puki
                    
//                     `
//                 },
//                 {
//                     id: 4,
//                     title: 'Lorem Inspum ',
//                     msg: `hello youuuuuu
                    
                    
//                     Lorem ipsum dolor sit amet, cu persius efficiendi nec. Duo atqui ullum ceteros no. Quo an quando inermis instructior. Eos causae dissentiunt ei. Qui eu timeam assentior. Sea at oportere referrentur, te eleifend instructior qui, posse fabellas concludaturque ius et.


//                     Congrats, and keep in touch,
//                     shmuupi
                    
//                     `
//                 },
//                 {
//                     id: 5,
//                     title: 'Get a 30% discount',
//                     msg: `
//                         Hey snit members,

//                         Did you have time to check my last e-mail?

//                         I'm just letting you know, that your trial will expire in less than 24 hours and you can still get the 30% discount for the first three months on any subscription plan.

//                         Just use this promo-code to get it: “30-OFF-YOLO"

//                         Thanks,
//                         Bolek Kerous,
//                         Customer Success Manager
                    
//                     `
//                 }
//             ],