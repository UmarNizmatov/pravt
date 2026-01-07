// // class Person {
// //   constructor(name, surname, age) {
// //     this.name = name;
// //     this.surname = surname;
// //     this.age = age;
// //   }
// //   ___;
// //   about() {
// //     return `Ismim ${this.name} ,Familiyam ${this.surname},Yoshim,${this.age}`;
// //   }
// //   get getAge() {
// //     return this.age;
// //   }
// //   set setAge([age, name]) {
// //     this.age = age;
// //     this.name = name;
// //   }
// // }
// // let person1 = new Person("Olim", "Olimov", 43);
// // let person2 = new Person("Olim", "Olimov", 43);
// // // console.log(person1.about());
// // // console.log(person2.about());
// // person1.setAge = [22, "Komil"];
// // // console.log(person1.about())
// // class Developer extends Person {
// //   constructor(name, surname, age, work_time, work_location, salary) {
// //     super(name, surname, age);
// //     this.work_time = work_time;
// //     this.work_location = work_location;
// //     this.salary = salary;
// //   }
// //   about() {
// //     return `${super.about()},ish vaqtim ${this.work_time},ish joyim ${
// //       this.work_location
// //     },oylik ${this.salary}`;
// //   }
// // }
// // let frontend = new Developer("Olim", "Olimov", 43, 10, "Toshkent", 40000000);
// // let backtend = new Developer("Davron", "Komilov", 43, 10, "Toshkenlulu", 4560000000);
// // console.log(frontend.about());
// // console.log(backtend.about());

// class Book {
//   constructor(title, author, genre, availability) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.availability = availability;
//   }
//   get getDetails() {
//     return `Kitob nomi ${this.title},mualifi${this.author},janri${this.genre},mavjudligi ${this.availability}`;
//   }
//   markAsBorrowed() {
//     this.availability = false;
//   }
//   markAsReturnded() {
//     this.availability = true;
//   }
// }
// let book1 = new Book("Harry Poter", "Alisher Navoiy", "Fantastik", true);
// let book2 = new Book("Atomic Habbits", "MIrzo Ulug'bek", "Fantastik", false);
// class Library {
//   constructor(Library_name, book_list) {
//     this.Library_name = Library_name;
//     this.book_list = book_list;
//   }
//   get getDetails() {
//     return `Kutubxonadagi  kitoblar soni ${
//       this.book_list.length
//     },kitoblar ro'yxati ${this.Books_title()}`;
//   }
//   Books_title() {
//     let res = [];
//     for (let i = 0; i < this.book_list.length; i++) {
//       res.push(this.book_list[i].title);
//     }
//     return res;
//   }
//   addBook(book) {sxzaxs
//     if (!this.Books_title().includes(book.title)) {
//       this.book_list.push(book);
//     }
//   }
//   removeBook(book) {
//     this.book_list = this.book_list.fitter((item) => item.title !== book.title);
//   }
//   serchBookBygenre(genre) {
//     return this.book_list.filter((item) => item.genre === genre);
//   }
//   avaiblebleBooks() {
//     return this.book_list.filter((item) => item.availability);
//   }
// }

// let library = new Library("Kunji", [book1, book2]);
// library.addBook(new Book("Mansur", "Alisher Navoiy", "Fantastik", true));

// console.log(library.getDetails);
// console.log(library.serchBookBygenre("Fantastik"));

class Bus {
  constructor(id, route, seats, reserved_seats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reserved_seats = reserved_seats;
  }
  get getDetails() {
    return `Bus id ${this.id},route ${this.route},seats ${this.seats},reserved seats ${this.reserved_seats}`;
  }
  reserveSeat() {
    this.reserved_seats == this.seats
      ? console.log("Bus tola")
      : this.reserved_seats++;
  }
  chanelReservedSeat() {
    this.reserved_seats == 0
      ? console.log("Busda orin reserve bomagan")
      : this.reserved_seats--;
  }
}
let bus1 = new Bus(12, "Toshkent-Qarshi", 100, 12);
let bus2 = new Bus(13, "Toshkent-Samarqand", 200, 0);

class BusSystem {
  constructor(system_name, buses) {
    this.system_name = system_name;
    this.buses = buses;
  }
  addBus(bus) {
    if (this.buses.some((item) => item.id === bus.id)) {
      console.log("Bunday Bus id bor");
    } else {
      this.buses.push(bus);
    }
  }
  listBuses() {
    let res = "";
    for (let i = 0; i < this.buses.length; i++) {
      res = res + this.buses[i].getDetails + "\n";
    }
    return res;
  }
  searchBusByRoute(route) {
    return this.buses.filter((item) => item.route === route);
  }
  reserveSeat(bus_id) {
    this.buses.some((item) => bus_id === item.id)
      ? this.buses.filter((item) => item.id === bus_id).reserveSeat()
      : console.log("Bunday bus id yo'q");
  }
  chanelReservedSeat(bus_id) {
    this.buses.some((item) => bus_id === item.id)
      ? this.buses.filter((item) => item.id === bus_id).chanelReservedSeat()
      : console.log("Bunday bus id yo'q");
  }
}

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getDetails() {
    return `Product id ${this.id}, name ${this.name}, price ${this.price}, stock ${this.stock}`;
  }

  updateStock(quantity) {
    this.stock += quantity;
  }
}

class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculatePrice() {
    return this.product.price * this.quantity;
  }
}

class Order {
  constructor(id) {
    this.id = id;
    this.items = [];
  }

  addItem(orderItem) {
    this.items.push(orderItem);
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.calculatePrice(), 0);
  }
}

class Shop {
  constructor() {
    this.products = [];
    this.orders = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    return this.products.map((p) => p.getDetails());
  }

  createOrder(orderId) {
    let order = new Order(orderId);
    this.orders.push(order);
    return order;
  }
}
