// Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total number of items inside the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayCart() {
      if (this.items.length === 0) {
        console.log("The shopping cart is empty.");
      } else {
        console.log("Shopping Cart:");
        this.items.forEach(item => {
          console.log(`- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total items: ${this.getTotalItems()}`);
      }
    }
  }
  
  // Testing the classes
  
  // Create products
  const product1 = new Product(1, 'Laptop', 999.99);
  const product2 = new Product(2, 'Smartphone', 499.99);
  const product3 = new Product(3, 'Tablet', 299.99);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  
  // Display the cart
  cart.displayCart();
  
  // Remove an item from the cart
  cart.removeItem(2);
  
  // Display the cart again
  cart.displayCart();
  