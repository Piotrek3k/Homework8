/**
 * Class representing an order.
 */
class Order {
    /**
     * Creates a new order.
     * @param {User} user - The user who made the order.
     * @param {Cart} cart - The cart containing the books.
     */
    constructor(user, cart) {
      /**
       * The user who made the order.
       * @type {User}
       */
      this.user = user;
  
      /**
       * The cart containing the books.
       * @type {Cart}
       */
      this.cart = cart;
  
      /**
       * The total price of the order.
       * @type {number}
       */
      this.price = this.cart.calculateTotalPrice();
    }
  
    /**
     * Finalizes the order. Gives information about the order
     * @throws {Error} If the cart is empty.
     */
    finalizeOrder() {
      if (this.cart.books.length > 0) {
        this.cart.showCart()
        console.log("Order finalized. Amount to pay: " + this.price)
        this.cart.clearCart();
      } else {
        throw new Error("The cart is empty");
      }
    }
  
    /**
     * Applies a discount to the entire order.
     * @param {number} value - The discount percentage to apply.
     */
    applyDiscount(value) {
      this.price = this.price * (100 - value) / 100;
    }
  }
  
  module.exports = Order;