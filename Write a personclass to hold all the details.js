


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
