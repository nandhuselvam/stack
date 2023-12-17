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