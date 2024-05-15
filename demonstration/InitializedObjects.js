const User = require("./../components/User");
const Cart = require("./../components/Cart");
const Order = require("./../components/Order");
const {Book,FrenchBook,EnglishBook,GermanBook} = require("./../components/Book");

// initalizing example users 
const user1 = new User("John Smith", "JohnSmith276@gmail.com",1);
const user2 = new User("Ashley Johnson", "AJohnson@hotmail.com",2);
const user3 = new User("Wilfred Stone", "WilfredS99@gmail.com",3);
const user4 = new User("Megan Doe", "MeganDoe111111@umail.com",4);

// initalizing example books
const book1 = new FrenchBook("The Little Prince","Antoine de Saint-Exupery",5467278891002,15.00,true);
const book2 = new FrenchBook("In Search of Lost Time","Marcel Proust",9654222176712,35.50,false);
const book3 = new FrenchBook("The Stranger","Albert Camus",1853112030338,20.00,true);
const book4 = new FrenchBook("Journey to the End of the Night","Louis-Ferdinand Celine",2399910257129,40.00,true);
const book5 = new FrenchBook("The Horseman on the Roof","Jean Giono",2850178211900,25.00,false);
const book6 = new GermanBook("The Trial","Franz Kafka",1002112958028,20.00,true);
const book7 = new FrenchBook("Man's Fate","Andre Malraux",4846914194388,16.50,true);
const book8 = new EnglishBook("For Whom the Bell Tolls","Ernest Hemingway",4979890673252,18.00,true);
const book9 = new EnglishBook("Brave New World","Aldous Huxley",9836696800243,28.00,true);
const book10 = new EnglishBook("Heart of Darkness","Joseph Conrad",3925581378967,15.00,true);

// initalizing example carts
const cart1 = new Cart(user1)
const cart2 = new Cart(user2)
const cart3 = new Cart(user4)

// applying discount for a book

book9.applyDiscount(20) // number as percentage - 20%

cart1.addToCart(book6) // adding book6 to the cart1
cart1.addToCart(book9) // adding book9 to the cart1 
cart1.addToCart(book9) // adding book9 to the cart1 
cart1.removeFromCart(book9) // removing book2 from the cart1 
const totalPrice1 = cart1.calculateTotalPrice() // calculate total price for cart1

cart2.addToCart(book1) // adding book1 to the cart2 
cart2.clearCart(book1) // removing book1 from the cart2
const totalPrice2 = cart2.calculateTotalPrice() // calculate total price for cart2

cart3.addToCart(book3)  // adding book3 to the cart3
cart3.addToCart(book4)  // adding book4 to the cart3
cart3.addToCart(book6)  // adding book6 to the cart3
cart3.addToCart(book10) // adding book10 to the cart3
const totalPrice3 = cart3.calculateTotalPrice() // calculate total price for cart3

const order1 = new Order(user1, cart1)
const order2 = new Order(user4, cart3)

order2.applyDiscount(10) // applying 10% discount on whole order

order1.finalizeOrder()
order2.finalizeOrder()





