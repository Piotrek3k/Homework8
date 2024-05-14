class Order {
    // class that represents an Order object. It has following properties:

    // user - User object
    // books - Cart object
    // price - number
    constructor(user,books){
        this.user = user;
        this.books = books;
        this.price = books.calculateTotalPrice()
    }
}

module.exports = Order;