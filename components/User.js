/**
 * Class representing a user.
 */
class User {
  /**
   * Creates a new user.
   * @param {string} name - The name of the user.
   * @param {string} email - The email address of the user.
   */
  constructor(name, email) {
    /**
     * The name of the user.
     * @type {string}
     */
    this._name = name;

    /**
     * The email address of the user.
     * @type {string}
     */
    this._email = email;

    /**
     * The ID of the user.
     * @type {number}
     * @private
     */
    this._userId = User.generateId();
  }

  /**
   * Gets the name of the user.
   * @returns {string} The name of the user.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the user.
   * @param {string} value - The new name of the user.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets the email address of the user.
   * @returns {string} The email address of the user.
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the email address of the user.
   * @param {string} value - The new email address of the user.
   */
  set email(value) {
    this._email = value;
  }

  /**
   * Gets the ID of the user.
   * @returns {number} The ID of the user.
   */
  get userId() {
    return this._userId;
  }

  /**
   * Generates a unique user ID.
   * @returns {number} A unique user ID.
   * @private
   */
  static generateId() {
    return Math.floor(Math.random() * 1000000000000);
  }
}

module.exports = User;