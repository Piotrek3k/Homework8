class Book {
    // class that represents a Book object. It has following properties:
    
    // title - string
    // author - string
    // ISBN - number
    // price - number
    // availibility - boolean

    constructor(title, author, isbn, price, availability) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.availability = availability;
    }
}

module.exports = Book;