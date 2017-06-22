<template>
    <section v-if="books">
        <email-list></email-list>
    
        <!--<book-filter @filterSet="setFilter">
                                </book-filter>
                                <cart v-if="isCartShown" @closeCart="closeCart" @add="addToCart" @substract="substractFromCart" @clearItemFromCart="clearItemFromCart">
                                </cart>
                            
                                <h2>We have {{books.length}} Books</h2>
                                <button @click="isCreateMode=true">+</button>
                                <ul>
                                    <book-preview v-for="currBook in booksToDisplay" :key="currBook.id" @click.native="selectBook(currBook)" @edit="editBook(currBook)" @delete="deleteBook(currBook)" @addToCart="addToCart(currBook)" @substractFromCart="substractFromCart(currBook)" :book="currBook">
                                    </book-preview>
                                </ul>
                                <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
                                </book-details>
                            
                                <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook" @cancelEdit="cancelEdit">
                                </book-edit>-->
    </section>
</template>

<script>
import emailList from './EmailList'
// import bookService from '@/services/book.service.js'
// import cartService from '@/services/cart.service.js'
// import BookPreview from './BookPreview'
// import BookDetails from './BookDetails'
// import BookFilter from './BookFilter'
// import BookEdit from './BookEdit'
// import Cart from './Cart'

export default {
    name: 'email-app',
    props: selectedEmail
    created() {
        //  bookService.getBooks().then(books => this.books = books)
    },
    components: {
        BookPreview,
        BookDetails,
        BookFilter,
        BookEdit,
        Cart
    },
    data() {
        return {
            emails: [
                {
                    id: 1,
                    title: 'hi, ',
                    msg: `Hi Taly,
                    

                  Lorem ipsum dolor sit amet, mea at graeco apeirian moderatius, vim ex populo maiestatis. Quidam pertinacia democritum ei vis. In nulla accommodare est, tota vituperata vix id. Ad vim quis inermis intellegam. At sea wisi option propriae. Tempor putent constituam eum cu.

                  Thanks, Inbar`

                },
                {
                    id: 2,
                    title: 'you wom 2,000 NIS ',
                    msg: `Hi Snir,
                    
                    just give us your bank account deatails 

                  Thanks, the Lotto`
                },
                {
                    id: 3,
                    title: 'Lorem Inspum ',
                    msg: `Lorem ipsum dolor sit amet, cu persius efficiendi nec. Duo atqui ullum ceteros no. Quo an quando inermis instructior. Eos causae dissentiunt ei. Qui eu timeam assentior. Sea at oportere referrentur, te eleifend instructior qui, posse fabellas concludaturque ius et.


                    Congrats, and keep in touch,
                    Puki
                    
                    `
                },
                {
                    id: 4,
                    title: 'Lorem Inspum ',
                    msg: `hello youuuuuu
                    
                    
                    Lorem ipsum dolor sit amet, cu persius efficiendi nec. Duo atqui ullum ceteros no. Quo an quando inermis instructior. Eos causae dissentiunt ei. Qui eu timeam assentior. Sea at oportere referrentur, te eleifend instructior qui, posse fabellas concludaturque ius et.


                    Congrats, and keep in touch,
                    shmuupi
                    
                    `
                },
                {
                    id: 5,
                    title: 'Get a 30% discount',
                    msg: `
                        Hey snit members,

                        Did you have time to check my last e-mail?

                        I'm just letting you know, that your trial will expire in less than 24 hours and you can still get the 30% discount for the first three months on any subscription plan.

                        Just use this promo-code to get it: “30-OFF-YOLO"

                        Thanks,
                        Bolek Kerous,
                        Customer Success Manager
                    
                    `
                }
            ],
            selectedBook: null,
            editedBook: null,
            isCreateMode: false,
            isCartShown: false,
            filter: {}
        }
    },
    computed: {
        // TODO:    support sort by title and price together
        //          change it to native vue filter
        booksToDisplay() {
            var books = this.books;

            if (this.filter) {
                if (this.filter.byTitle) {
                    console.log('sorting by title:');
                } else if (this.filter.minPrice) {
                    console.log('sorting by price:........');
                    books = this.books.filter(book => book.price >= this.filter.minPrice);
                }
            }
            return books;
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        resetSelected() {
            this.selectedBook = null;
        },
        selectNext() {
            this.selectedBook = bookService.getNext(this.selectedBook)
        },
        editBook(book) {
            this.editedBook = book
        },
        cancelEdit() {
            this.editedBook = null
            this.isCreateMode = false
        },
        saveBook(book) {
            bookService.saveBook(book)
            this.editedBook = null
            this.isCreateMode = false
        },
        deleteBook(book) {
            bookService.deleteBook(book)
        },
        addToCart(book) {
            cartService.addToCart(book)
            this.isCartShown = true
        },
        substractFromCart(book) {
            cartService.substractFromCart(book.id)
            console.log('sent')
        },
        clearItemFromCart(book) {
            cartService.clearItem(book)
        },
        closeCart() {
            this.isCartShown = false
        },
        setFilter(filter) {
            this.filter = filter
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
