// class library{
//     constructor(){
//         this.books = []
//     }
//     addBook(book) {
//         this.books.push(book);
//     }
//     listAllBooks() {
//         this.books.forEach(function (book) {
//             console.log(book);
            
//         })
//     }
// }

// let MPlibrary = new library()
// MPlibrary.addBook("Do epic shit")
// MPlibrary.addBook("wealth")
// MPlibrary.addBook("wealth is health")
// MPlibrary.listAllBooks();


// class Book{
//     constructor(name, isbn, price, author) {
//         this.name = name;
//         this.isbn = isbn;
//         this.price = price;
//         this.author = author
//     }
// }


// let Book1 = new Book("Wealth is life", "2sfdg4rs", 120, "ankit")


class MobileShop{
    constructor() {
        this.mobiles = []
    }
    addMobile(mobile){
        this.mobiles.push(mobile)
    }
    listAllMobiles() {
        this.mobiles.forEach(function(mb){
            console.log(mb.brand);
            console.log(mb.model);
            console.log(mb.price);
            console.log(mb.color);
        })
    }
}

class Mobile{
    constructor(brand, model, price, color) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.sims = []
    }
    getMobileIndo() {
        console.log(`${this.brand} -${this.model} = ${this.price} -${this.color}`
            );
        }
        insertSim(sim) {
            if(this.sims.length === 2) {
                console.log("sorry you already have 2 sims");
                return;
            }
            this.sims.push(sim);
        }
}

class Sim{
    constructor(brand, balance) {
        this.brand = brand;
        this.balance = balance;
    }
    addbalance(balance) {
        if(balance < 0) {
            console.log("to add balance give amount>0");
            return;
        }
        this.balance += balance;
    }
}

let mymobileshop = new MobileShop();
let samsung = new Mobile("samsung", "ultra 23", 12000, "black")
let jio = new Sim("jio", 899)

samsung.insertSim(jio);

mymobileshop.addMobile(samsung);