<template>
  <section class="booksapp">
    <book-list></book-list>
    <hr/>
    <book-cart></book-cart>
  </section>
</template>

<script>
import bookList from './BookList'
import bookCart from './BookCart'

import bookService from '../../services/Book.service'
import cartService from '../../services/BookCart.service'
// import bookPreview from './BookPreview'
// import bookDetails from './BookDetails'
// import bookEdit from './BookEdit'
// import bookFilter from './BookFilter'

export default ('booksApp', {
  created() {
    bookService.getBooks().then(books => { this.books = books })
  },
  data() {
    return {
      books: null,
      selectedBook: null,
      editedBook: null,
      isCreateMode: false,
      bookFilter: null
    }
  },
  computed: {
    booksToShow() {
      if (!this.bookFilter) return this.books
      return this.books.filter(book => {
        return book.title.includes(this.bookFilter.byText)
      })
    }
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book
    },
    resetSelected() {
      this.selectedBook = null
    },
    selectNext() {
      this.selectedBook = bookService.getNext(this.selectedBook)
    },
    editBook(book) {
      console.log('Editing the book', book)
      this.editedBook = book
    },
    deleteBook(book) {
      bookService.deleteBook(book)
    },
    saveBook(book) {
      bookService.saveBook(book)
      this.editedBook = null
      this.isCreateMode = false
    },
    setFilter(newFilter) {
      console.log('newFilter', newFilter)
      this.bookFilter = newFilter
    },
    addToCart(book) {
      cartService.addToCart(book)
    }
  },
  components: {
    bookList, bookCart
  }
})

</script>

<style lang="scss" scoped>
.booksapp{
    display: flex;
    &>*{
      margin:20px;
    }
  }
</style>
