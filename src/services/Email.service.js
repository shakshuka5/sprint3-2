
// Client Side State of the store
// Kind of caching...
var emails = []


function getEmails() {
  emails = generateEmails();
  emails[0].isRead = true;
  return emails;
}

function changeEmailIsRead (email){
  email.isRead =true;
  // email.isRead = !email.isRead 
}

// function getEmails() {
//   return new Promise(resolve => {
//     // simple caching mechanism
//     if (emails.length) {
//       resolve(emails)
//     } else {
//       setTimeout(() => {
//         emails = generateEmails()

//         emails = emails.map(email => {
//           email.quantity = 0
//           email.tag = { val: 7 }
//           return email
//         })

//         resolve(emails)
//       }, 500)
//     }
//   })
// }

// function getBookById(bookId) {
//   return getBooks().then(books => {
//     const book = books.find(book => bookId === book.id);
//     return book;
//   });
// }

function deleteTheEmail(email) {
  console.log('Deleting the email', email)
  var idx = emails.indexOf(email)
  emails.splice(idx, 1)
}

function addNewEmail(email) {
  console.log('new email', email)
  setTimeout(function() {emails.unshift(email)},1000)
}
function getNext(email) {
  // select next in a cyclic way
  var idx = emails.indexOf(email)
  return (idx < emails.length - 1) ? emails[idx + 1] : emails[0]
}

function saveEmail(email) {
  var idx = emails.findIndex(currEmail => currEmail.id === email.id)
  emails.splice(idx, 1, email)
}

export default {
  getEmails,
  deleteTheEmail,
  getNext,
  saveEmail,
  addNewEmail
}

// Used to create local data with no AJAX
function generateEmails() {

  const subjects = ['Get 30% off', 'Get started with OneNote', 'Discover interesting projects on GitHub ', 'Snit, welcome', 'Lorem Inspum', ' SALE NOW ON - Up to 15% off 200,000 seats'];


  return subjects.map(generateEmail)
}

function generateEmail(subject, i) {
  return {
    id: i + 1,
    'subject': subject,
    message: `${subject},

    Lorem ipsum dolor sit amet, sit no labores forensibus, fastidii urbanitas mediocritatem eu sit. Et vix amet hendrerit mediocritatem. Mei inani tation noster ea. Quot quaestio vis ei. Te vim simul soluta placerat, per omnes ceteros voluptatum no.

    Ex nam omnium aperiri, no ius ludus minimum. Solet voluptatum scripserit ex sea, suas sanctus mei ei. Putant option cu vel. Idque utroque percipitur ad sed. Facilis deterruisset at mel. Noluisse consequat est in.
    `,
    isRead: false
  }
}

// function getProductsFromGenericAPI() {
//   const params = {
//     rows:       10,
//     id:        '{index}',
//     price:     '{number|1000}',
//     title: '{lorem|2}',
//     description: '{lore




  //   const content = [`  
  // Hey snit,

  // I was wondering, how's your workflow going with Avocode? Everything OK?
  // Do you want to get 30% off for the first three months?
  // Just add your credit card and use this special promo code.

  // You still have 3 days to figure out which paid plan suits you best. Our prices start at $6.75 per user/month.

  // Thanks for trusting Avocode with your designs.

  // – Bolek, Customer Success Manager
  // `,
  //  `	
  // Welcome and thank you for choosing OneNote. 

  // My team and I have created a note taking app to keep track of everything. I use it at work to collaborate with my team on the next big feature, and at home with my family for our grocery lists and trip planning.
  // I’d love to hear your feedback. Go to OneNote UserVoice and tell me and my team what you like, or what can be improved. We read it all.

  // Thanks,
  // - Eran
  // Corporate VP OneNote`,
  //     `There's a whole world of code waiting for you.

  // GitHub is home to the best open source projects in the world. 
  // From languages, to frameworks, to plugins, if you are looking for great code to use in your project you can find it on GitHub.`,
  //     ` Inbar, welcome to HTML5 Canvas!

  // Here's what you'll be learning:
  // Learn how you can use HTML5 Canvas to create and modify images or even interactive animations.

  // Ready to start learning? Great! And remember, accelerate if you want to, or slow down if you need to. At Udacity, you learn at your own pace. `,
  //     `Has at omnium malorum, eum ut dicat movet debitis, an alia pertinax conceptam cum. Nisl dolore id pro, nam wisi vidisse sententiae ad. Per an natum reque phaedrum, quo inani iusto partiendo ex, eam aliquip tibique in. Eam ne porro euismod efficiantur. Ei justo soleat duo, iuvaret civibus electram qui ad. `,
  //     `	
  // Holidays SALE up to £120 off
  // This offer just got even better! Discounted flights plus up to £120 off holidays everywhere, and pay just £60 pp deposit. Book now and get away...`
  //   ];