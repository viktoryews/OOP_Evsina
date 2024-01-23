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

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const prod1 = new Products('Phone', 500);
order.addProduct(prod1);

const prod2 = new Products('Headphones', 100);
order.addProduct(prod2);

console.log(order.getTotalPrice());

/** 3 */
class Product {
    static maxCount = 1000;
    #name;
    #price;
    #quantity;
    constructor (name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.setQuantity(quantity);
    };

    getName(){
       return this.#name;
    };

    getPrice() {
       return this.#price;
    };

    setQuantity(quantity) {
        if (quantity <= Product.maxCount) 
        {
            this.quantity = quantity;
        } else {
            console.log('Заданное количество товара больше максимального');
        }
    };

    set price(value){
        this.#price = value;
    };

    set name(value){
        this.#name = value;
    };

    print(){
        console.log(`name: ${this.#name}   price: ${this.#price}   qua: ${this.quantity}`);
    };

    //изменить цену
    changePrice(cost, sign) {
        if (sign === '+')
        return this.#price + cost;
        else if (sign === '-')
        return this.#price - cost;
    };

    //Изменить количество
    changeQuantity(volume, sign) {
        if (sign === '+')
        return this.quantity + volume;
        else if (sign === '-')
        return this.quantity - volume;
    };

    //Получить стоимость
    getCost() {
        return this.#price * this.quantity
    }
};

const product1 = new Product('Тетрадь', 50, 200);
console.log(product1.getName()); // "Тетрадь"
console.log(product1.getPrice()); // 50
console.log(product1.quantity); // 200

 console.log(product1.getCost()); // 10000
 console.log(product1.changePrice(10,'-'));
 console.log(product1.changeQuantity(100,'-'));
 const product2 = new Product('Ручка', 10, 5000); //Вывод исключения

 product1.name = 'Иван';
 product1.price = 3000;
 product1.quantity = 18;
 product1.print();


 /** 4 */
 class User {
    static getMaxAge = 120;
    #name;
    #age;
    #email;
    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }

    set age(value){
        if(value > 0 && value < User.getMaxAge) this.#age = value;
        else {
            console.log(`Возраст должен быть в допустимых пределах`);
        }
    }

    get age(){
        return this.#age;
    }

    get name() {
        return this.#name
    };

    get email() {
        return this.#email;
    }

    set name(value){
        this.#name = value;
    };

    set email(value){
        this.#email = value;
    };

 }

const user1 = new User('John', 30);
console.log(user1.name); // "John"
console.log(user1.age); //30
user1.name = 'Mike';
console.log(user1.name); // "Mike"
console.log(User.getMaxAge); // 120

user1.age = 160;

