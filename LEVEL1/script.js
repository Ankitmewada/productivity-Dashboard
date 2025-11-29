// function toffee(flavor, price) {
//     this.flavor = flavor
//     this.price = price;
// }

// let t1 = new toffee("vanilla", 5)
// let t2 = new toffee("strawberry",5)

// class toffee{
//     constructor(flavor, price,smell) {
//         this.flavor = flavor;
//         this.price = price;
//         this.smell = smell;
//     }
// }

// let t1 = new toffee("chocolate", 5, "good");
// let t2 = new toffee("strawberry", 50, "superb");

function candy(name,price) {
    this.name = name;
    this.price = price;
    
}
candy.prototype.test = "good"

let t1 = new candy("appenliebe",10);
let t2 = new candy("dairy milk",5);

//A prototype in JavaScript is simply another object that acts as a blueprint or fallback for another object.

//When you try to access a property or method that doesn’t exist on an object, JavaScript automatically looks for it on that object’s prototype.

function toffee(name) {
    this.name = name;
    this.printMyName = function() {
        console.log(name);
    }
}

let t3 = new toffee("kachha aam")
let t4 = new toffee("mango bite")