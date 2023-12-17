class Student {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

  let Student1 = new Student('Arthu','nandhuselvam1997@gmail.com', '9489382245');

  console.log(Student1);

class Movie {
    constructor(hero, title, price) {
        this.hero = hero;
        this.title = title;
        this.price = price;
    }
}

  let Movie1 = new Movie('vijay','LEO', '200');
    console.log(Movie1);

    class Array {
        constructor(...args) {
            this.items = [...args];
        }
        toArray() {
            return this.items;
        }
    }

    let numbers = new Array(Movie);

    console.log(numbers.toArray());

    /*
    Uber task
    */

    class UberPriceCalculator {
        constructor(baseFare, costPerKilometer, costPerMinute) {

            this.baseFare = baseFare;
            this.costPerKilometer = costPerKilometer;
            this.costPerMinute = costPerMinute;
        }
    }

    let UberPriceCalculator1 = new UberPriceCalculator( '5', '10', '600');

    console.log(UberPriceCalculator1)


    /* circus radius day 6*/

    class MyClass
 {
  
    constructor(id, name, price) 
    {
      this.id = id;
      this.name = name;
      this.price = price;
    }
}
    let MyClass1 = new MyClass(2120784, 'Arthu', 200);

    console.log(MyClass1);

    // return this.price * 2;

    /* Movie task day 6 */

    class Student {
        constructor(name, email, phone) {
            this.name = name;
            this.email = email;
            this.phone = phone;
        }
    }
    
      let Student1 = new Student('Arthu','nandhuselvam1997@gmail.com', '9489382245');
    
      console.log(Student1);
    
    class Movie {
        constructor(hero, title, price) {
            this.hero = hero;
            this.title = title;
            this.price = price;
        }
    }
    
      let Movie1 = new Movie('vijay','LEO', '200');
    
      console.log(Movie1);
      console.log('Thankyou');




      /* Write a person task to hold the details      */

function Student(name, email, phone) 
{
    this.name = name;
    this.email = email;
    this.phone = phone;


this.sayHello = function() 
    {

  console.log(`Hello! Welcome ${this.name}`);
    }

    this.getDetails =  function () {
      console.log(`Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    }
    this.getEmail = function () {

      console.log(`Email: ${this.email}`);
    }
    this.getphone = function () {

      console.log(`Phone: ${this.phone}`);
    }
}

let Students = [];

Students.push(new Student('Arthu', 'nandhuselvam1997@gmail.com', 9489382245));
Students.push(new Student('Nandhu', 'nandhuselvam1997@gmail.com', 9489382245));
Students.push(new Student('selvam', 'nandhuselvam1997@gmail.com', 9489382245));
Students.push(new Student('Ezhil', 'nandhuselvam1997@gmail.com', 9489382245));
Students.push(new Student('MSD', 'nandhuselvam1997@gmail.com', 9489382245));

console.log('Get all the students');
for (Students of Students){
  Students.sayHello();

console.log('Thankyou');



}

// console.log(Students);

//   let Student1 = new Student('Arthu','nandhuselvam1997@gmail.com', '9489382245');

//     Student1.sayHello();
//     Student1.getDetails();
//     Student1.getEmail();
//     Student1.getphone();




//   function Person(name, age) 
//   {
//     this.name = name;
//     this.age = age;
//   }
//   let Person1 = new Person('Arthu', 20);

//   console.log(Person1);



