
# Project Documentation

Documentation of Homework8 - Project to simulate a bookshop

## User Class

### Description
Class representing a user. Class has three properties: name, email and userID. 
UserID is generated automatically.

### Constructor
```javascript
/**
 * Creates a new user.
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 */
constructor(name, email)
```
### Properties
```javascript
/**
 * The name of the user.
 * @type {string}
 */
this._name;

/**
 * The email address of the user.
 * @type {string}
 */
this._email;

/**
 * The ID of the user, generated automatically.
 * @type {number}
 */
this._userId;
```
### Methods

#### get name
```javascript
/**
 * Gets the name of the user.
 * @returns {string} The name of the user.
 */
get name()
```

#### set name
```javascript
/**
 * Sets the name of the user.
 * @param {string} value - The new name of the user.
 */
set name(value)
```
#### get email
```javascript
/**
 * Gets the email address of the user.
 * @returns {string} The email address of the user.
 */
get email()
```

#### set email
```javascript
/**
 * Sets the email address of the user.
 * @param {string} value - The new email address of the user.
 */
set email(value)
```
#### get userID
```javascript
/**
 * Gets the ID of the user.
 * @returns {number} The ID of the user.
 */
get userId()
```
### Static Methods

```javascript
/**
 * Generates a unique user ID.
 * @returns {number} A unique user ID.
 * @private
 */
static generateUserId()
```

## Book Class

### Description
Class representing a book. Class has five properties: title, author, ISBN number, price and availability. 
### Constructor
```javascript
/**
 * Creates a new book.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} isbn - The ISBN of the book.
 * @param {number} price - The price of the book.
 * @param {boolean} availability - The availability of the book.
 */
constructor(title, author, isbn, price, availability)
```
### Properties
```javascript
/**
 * The title of the book.
 * @type {string}
 */
this._title;

/**
 * The author of the book.
 * @type {string}
 */
this._author;

/**
 * The ISBN of the book.
 * @type {number}
 */
this._isbn;

/**
 * The price of the book.
 * @type {number}
 */
this._price;

/**
 * The availability of the book.
 * @type {boolean}
 */
this._availability;
```
### Methods

#### get title
```javascript
/**
 * Gets the title of the book.
 * @returns {string} The title of the book.
 */
get title()
```

#### set title
```javascript
/**
 * Sets the title of the book.
 * @param {string} value - The new title of the book.
 */
set title(value)
```
#### get author
```javascript
/**
 * Gets the author of the book.
 * @returns {string} The author of the book.
 */
get author()
```
#### set title
```javascript
/**
 * Sets the author of the book.
 * @param {string} value - The new author of the book.
 */
set author(value)
```

#### get isbn
```javascript
/**
 * Gets the ISBN of the book.
 * @returns {number} The ISBN of the book.
 */
get isbn()

```
#### set isbn
```javascript
/**
 * Sets the ISBN of the book.
 * @param {number} value - The new ISBN of the book.
 */
set isbn(value)
```

#### get price
```javascript
/**
 * Gets the price of the book.
 * @returns {number} The price of the book.
 */
get price()
```
#### set price
```javascript
/**
 * Sets the price of the book.
 * @param {number} value - The new price of the book.
 */
set price(value)
```
#### get availability
```javascript
/**
 * Gets the availability of the book.
 * @returns {boolean} The availability of the book.
 */
get availability()
```
#### set availability
```javascript
/**
 * Sets the availability of the book.
 * @param {boolean} value - The new availability of the book.
 */
set availability(value)
```
#### applyDiscount
```javascript
/**
 * Applies a discount to the book.
 * @param {number} value - The discount percentage to apply.
 */
applyDiscount(value)
```

## FrenchBook, EnglishBook, GermanBook Class

### Description
Classes representing a book, that has been published in specific language. Classes are derived from the Book class and have the same properties and methods as the Book class, but also they have additional language property
### Constructor
The same constructor as the Book class
### Properties

```javascript
/**
 * The title of the book.
 * @type {string}
 */
this._title;

/**
 * The author of the book.
 * @type {string}
 */
this._author;

/**
 * The ISBN of the book.
 * @type {number}
 */
this._isbn;

/**
 * The price of the book.
 * @type {number}
 */
this._price;

/**
 * The availability of the book.
 * @type {boolean}
 */
this._availability;

/**
 * The hardcoded language of the book.
 * @type {string}
 */
this._language = `${givenLanguage}` ;
```

### Methods 
The same methods as the Book class

## Cart Class

### Description
Class representing a cart. Class has one property: user - to whom the cart belongs to. 
User can buy books from the bookstore by adding them to the cart and then making the order. User can also remove books from the cart and clear the cart

### Constructor
```javascript
/**
 * Creates a new cart.
 * @param {User} user - The user to whom the cart belongs.
 */
constructor(user)
```
### Properties
```javascript
/**
 * An array of books in the cart.
 * @type {Book[]}
 */
this.books;

/**
 * The user to whom the cart belongs.
 * @type {User}
 */
this.user;
```

### Methods

#### addToCart

```javascript
/**
 * Adds a book to the cart.
 * @param {Book} book - The book to add to the cart.
 * @throws {Error} Throws an error if the book is unavailable.
 */
addToCart(book)
```

#### removeFromCart

```javascript
/**
 * Removes a book from the cart.
 * @param {Book} book - The book to remove from the cart.
 */
removeFromCart(book)
```

#### calculateTotalPrice

```javascript
/**
 * Calculates the total price of all books in the cart.
 * @returns {number} The total price of all books in the cart.
 */
calculateTotalPrice()
```

#### clearCart

```javascript
/**
 * Clears the cart, removing all books.
 */
clearCart()
```

## Order Class

### Description
Class representing an order. Class has two properties: a cart and an user to whom the cart and the order belong to. 
Order can be finalized thus proceeding to handle payments. User can also get a discount on the full order.
### Constructor 
```javascript
/**
 * Creates a new order.
 * @param {User} user - The user placing the order.
 * @param {Cart} cart - The cart containing the books to be ordered.
 */
constructor(user, cart)
```
### Properties
```javascript
/**
 * The cart containing the books to be ordered.
 * @type {Cart}
 */
this.cart;

/**
 * The total price of the order.
 * @type {number}
 */
this.price;
```
### Methods

#### finalizeOrder
```javascript
/**
 * Finalizes the order by clearing the cart if it's not empty.
 * Logs the content of the order as well as the full price
 * @throws {Error} Throws an error if the cart is empty.
 */
finalizeOrder()
```

#### applyDiscount
```javascript
/**
 * Applies a discount to the total price of the order.
 * @param {number} value - The discount percentage to apply.
 */
applyDiscount(value)
```