/**
 * Class representing a book.
 */
class Book {
    /**
     * Creates a new book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} isbn - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, isbn, price, availability) {
      /**
       * The title of the book.
       * @type {string}
       * @private
       */
      this._title = title;
  
      /**
       * The author of the book.
       * @type {string}
       * @private
       */
      this._author = author;
  
      /**
       * The ISBN of the book.
       * @type {number}
       * @private
       */
      this._isbn = isbn;
  
      /**
       * The price of the book.
       * @type {number}
       * @private
       */
      this._price = price;
  
      /**
       * The availability of the book.
       * @type {boolean}
       * @private
       */
      this._availability = availability;
    }
  
    /**
     * Gets the title of the book.
     * @returns {string} The title of the book.
     */
    get title() {
      return this._title;
    }
  
    /**
     * Sets the title of the book.
     * @param {string} value - The new title of the book.
     */
    set title(value) {
      this._title = value;
    }
  
    /**
     * Gets the author of the book.
     * @returns {string} The author of the book.
     */
    get author() {
      return this._author;
    }
  
    /**
     * Sets the author of the book.
     * @param {string} value - The new author of the book.
     */
    set author(value) {
      this._author = value;
    }
  
    /**
     * Gets the ISBN of the book.
     * @returns {number} The ISBN of the book.
     */
    get isbn() {
      return this._isbn;
    }
  
    /**
     * Sets the ISBN of the book.
     * @param {number} value - The new ISBN of the book.
     */
    set isbn(value) {
      this._isbn = value;
    }
  
    /**
     * Gets the price of the book.
     * @returns {number} The price of the book.
     */
    get price() {
      return this._price;
    }
  
    /**
     * Sets the price of the book.
     * @param {number} value - The new price of the book.
     */
    set price(value) {
      this._price = value;
    }
  
    /**
     * Gets the availability of the book.
     * @returns {boolean} The availability of the book.
     */
    get availability() {
      return this._availability;
    }
  
    /**
     * Sets the availability of the book.
     * @param {boolean} value - The new availability of the book.
     */
    set availability(value) {
      this._availability = value;
    }
  
    /**
     * Applies a discount to the book.
     * @param {number} value - The discount percentage to apply.
     */
    applyDiscount(value) {
      this._price = this._price * (100 - value) / 100;
    }
  }
  
  /**
   * Class representing a French book.
   * @extends Book
   */
  class FrenchBook extends Book {
    /**
     * Creates a new French book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} isbn - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, isbn, price, availability) {
      super(title, author, isbn, price, availability);
      /**
       * The language of the book.
       * @type {string}
       * @private
       */
      this._language = "French";
    }
  }
  
  /**
   * Class representing a German book.
   * @extends Book
   */
  class GermanBook extends Book {
    /**
     * Creates a new German book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} isbn - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, isbn, price, availability) {
      super(title, author, isbn, price, availability);
      /**
       * The language of the book.
       * @type {string}
       * @private
       */
      this._language = "German";
    }
  }
  
  /**
   * Class representing an English book.
   * @extends Book
   */
  class EnglishBook extends Book {
    /**
     * Creates a new English book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} isbn - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, isbn, price, availability) {
      super(title, author, isbn, price, availability);
      /**
       * The language of the book.
       * @type {string}
       * @private
       */
      this._language = "English";
    }
  }
  
  module.exports = { Book, FrenchBook, GermanBook, EnglishBook };