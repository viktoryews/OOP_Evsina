/** 1 */
class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`${this.name} работает в отделе ${this.department}`);
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

/** 2 */
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.arrProducts = [];
        this.totalPrice = 0;
    }

    addProduct(product) {
        this.arrProducts.push(product);
    }

    getTotalPrice() {
        for (let value in this.arrProducts) {
            this.totalPrice += this.arrProducts[value].price
        }
        return this.totalPrice;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice());

/** 3 */