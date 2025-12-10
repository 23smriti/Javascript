//object
const student= {
    fullName:"Smriti",
    marks: 94.4,
    printMarks: function (){
  console.log("marks=", this.marks);
    }, //there is comma in object
};

let arr=[1,2,3]
arr.push(5)
console.log(arr) // We never define push function in array, so where it comes from? It comes from prototype object
//JS objects have a special property called prototype.

//If we want to use one's object function in another, we can make prototype of a object

//Example,

const emp= {
    calcTax(){
        console.log("This is object with function")
    }
}

const emp1={
    salary: 100
}

emp1.__proto__ = emp
emp1.calcTax();
// Here emp1,emp2,emp3..so on can have emp.calcTax function from emp object , in protototype object



//Class

class ToyotaCar{
    constructor()
    {
        console.log("Creating new oject")
    }

    start(){
        console.log("start");
    }
//no need to separate function through comma
    stop() {
        console.log("stop");
    }
   
    setBrand(brand){
        this.brandName=brand;
        //this means each individual object
        //jo bhi class setBrand ko call kregi usi ka object
       // this.brandName is the property of object
    
    }

}

//create object from class
let fortuner = new ToyotaCar(); //invoke constructor too
fortuner.setBrand("fortuner");


class Blueprnt {
    constructor (name,age){
        this.name=name;
        this.age=age
        console.log("Constructor is invoked")
    }

    eat(){
        console.log("eats")
    }

    sleep(){
        console.log("sleeps")
    }
}

let user= new Blueprnt('Alice',10);
console.log(user);


//Inheritance
class Parent{
    hello(){
        console.log("Parent says hello");
    }
}

class Child extends Parent {
        
}
let obj = new Child();
obj.hello()


class Person{
    
    constructor(){
        console.log("Enter Parent Constructor")
        this.species="Homo sapiens"
    }

    sleep(){
        console.log("sleep")
    }
   
    eat(){
        console.log("Eat")
    }

}

class Engineer extends Person{
    work(){
        console.log("Work")
    }
}

let eng= new Engineer();
console.log(eng.sleep()) //sleep then undefined (due to console.log inside console.log)
eng.work(); //work

let p1=new Person()
console.log(p1) //Person {species: 'Homo sapiens'}
console.log(eng) //Engineer {species: 'Homo sapiens'} , inherited from parent

//super Keyword : The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.
// super( args ) // calls Parent‘s constructor
// super.parentMethod( args )

class Engineer2 extends Person {
 constructor(branch){
    console.log("Enter child Constructor")
    super() //to invoke parent class constructor and can pass parameter too 
    this.branch=branch;
    console.log("Exit child Constructor")
 }
    code(){
        super.eat()
        console.log("coding")
    }

    
}

let en2= new Engineer2("CSE") 
en2.code()
//Error: Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// Agar child class ka contructor se return krvana h toh pehle super lgana hoga to call parent's class contructor first

//Error Handling:
//try-catch block

let a=5;
let b=6;
try{
    console.log(a+c) //error code
} catch (err) //error object
{
    console.log(err, "Catch through try-catch")
}