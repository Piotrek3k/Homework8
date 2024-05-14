class Cart {
    // class that represents a Book object. It has following properties:
    // books - an array of Book objects
    constructor() {
        this.books = []
    }
    addToCart(book) {
        // adding Book object provided as an argument to books array
        this.books.push(book)
    }
    removeFromCart(book) {
        // removing Book object provided as an argument from books array
        let index = this.books.findIndex(singleBook => singleBook.isbn === book.isbn)
        let firstPart = this.books.slice(0,index)
        let secondPart = this.books.slice(index + 1, books.length)
        this.books = firstPart.join(secondPart)
    }
    calculateTotalPrice() {
        // calculating total price of all Book objects in the books array
        let totalPrice = 0;
        this.books.forEach(book => totalPrice += book.price)
        return totalPrice
    }
}

module.exports = Book