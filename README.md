
# Project Documentation

Documentation of Homework8 - Project to simulate the working of a bookshop

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
