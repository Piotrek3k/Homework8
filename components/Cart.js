/**
 * Class representing a shopping cart.
 */
class Cart {
    /**
     * Creates a new cart.
     * @param {User} user - The user to whom the cart belongs.
     */
    constructor(user) {
      /**
       * An array of books in the cart.
       * @type {Book[]}
       */
      this.books = [];
  
      /**
       * The user to whom the cart belongs.
       * @type {User}
       */
      this.user = user;
    }
  
    /**
     * Adds a book to the cart.
     * @param {Book} book - The book to add to the cart.
     * @throws {Error} If the book is unavailable.
     */
    addToCart(book) {
      if (book.availability === true) {
        this.books.push(book);
      } else {
        throw new Error("This book is unavailable");
      }
    }
  
    /**
     * Removes a book from the cart.
     * @param {Book} book - The book to remove from the cart.
     */
    removeFromCart(book) {
      let index = this.books.findIndex(singleBook => singleBook._isbn === book._isbn);
      let firstPart = this.books.slice(0, index);
      let secondPart = this.books.slice(index + 1, this.books.length);
      this.books = firstPart.concat(secondPart);
    }
  
    /**
     * Calculates the total price of all books in the cart.
     * @returns {number} The total price of all books.
     */
    calculateTotalPrice() {
      let totalPrice = 0;
      this.books.forEach(book => { totalPrice += book._price; });
      return totalPrice;
    }
  
    /**
     * Clears the cart, removing all books.
     */
    clearCart() {
      this.books = [];
    }
    /**
     * Shows what products currently the user has in their cart
     */
    showCart() {
        console.log("Books to be ordered: ")
        this.books.forEach(book => {
            console.log(book.title + " - " + book.author + " - "  + book.price )
        })
    }

  }
  
  module.exports = Cart;