//Objects:

let obj= {
    name: 'Sam',
    city1: 'Delhi',
    city:'GGn',
    age: 25,
    greet: function(){
        console.log("hello")
    }
}

console.log(obj)

delete obj.city1  // delete the city1 key
console.log(obj)

console.log(obj.name) //returns value of key or
console.log(obj["name"])
obj.name="John"

console.log("name" in obj)// check if name key exists in obj

obj.greet()

let keys= Object.keys(obj);
let values=Object.values(obj);

console.log(keys);
console.log(values);

console.log(Object.entries(obj))
//To create copy of Object

let newObj = Object.assign({},obj)
console.log(newObj)

obj.num=1; //This will add num key with value 1 to the obj
console.log(obj)
//If we want that our object won't modify-

Object.freeze(obj) //Now it won't add numkey key
obj.numkey=1;

console.log(obj)


//Sets:
 let set= new Set([1,2,3,3,4,5,4])
 console.log(set) //has distinct values
 console.log(set.add("10"))
 console.log(set.has(4))
 console.log(set.size)
set.clear()
console.log(set)


//Maps : have key values pair 

let userMap= new Map()
userMap.set("name","Alice")
userMap.set("age",20)
userMap.set("city","New York")
console.log(userMap)
console.log(userMap.get("name"))

//Defined a Map
let newMap= new Map ([
    ["name","Alice"],
    ["age",20],
    ["city","New York"]
]) // Square brackets inside square brackets

//Lexical scope

function outerFunc(){

    let outVAr= "This is a outer function"

    function innerFunc(){
        console.log(outVAr)
    }

    innerFunc()
}
outerFunc()

// ------------------------------------------------------------------------------------------------
//console.log will not run untill we call innerFunc from Outer func
//When we called innerFunc it look value of outVar from outside of its scope, which is called lexical scope
// //It outvar will not be found in outerFunc then it will look it out of outer function 
// //but agar outvar ko print bhar krenge and defined andar krenge to error dega, 
// apne scope se bhar function look krte h pr andar nhi
//-----------------------------------------------------------------------------------------------//

//Destructuring
let num = [1,2,3,4]

let[a,b,c]= num // This will assighn 1 to a , 2 to b, 3 to c

let [d,,e]=num //  This will assighn 1 to a , skip 2, 3 to c


console.log(a,b,c,d,e)

let x= 2 ;
let y=3 ;
 [x,y] = [y,x]

 console.log(x,y)


//object Destructuring
const obj3 ={
    name:"alice",
    age:22
}

let {name,age}=obj3; //use curly braces, in array use square bracket
console.log(name,age) 

let {fname,fage}= obj3;
console.log(fname,fage) //it will returned undefined undefined //name should match with keys

//spread operator- to make copy of array ...

let arr= [1,2,3]
let arr3=[5,6,7]
let arr2 =[...arr]
arr.push(4) //won't reflect change in arr2
console.log(arr2)

const mrgeArr= [...arr,...arr3] //merge array arr and arr3
console.log(mrgeArr)


//in array it is called rest opertor
let restOp = [1,2,3,4,5,6,7]

let[p,q,r,...s]= num // rest of the  items will go to s 

console.log(p,q,r,s)

//in Objects:

let obj4={
    "name" : "Alice",
    "age":24
}

let copy= {...obj4};
let user= {...obj4,name:"John"}
console.log(copy)
console.log(user) //override
//Similarly we can merge, overddide

// ------------------READ BELOW---------------------------------------------------------
// const user = { name: 'Alice' };
// const refCopy = user;
// refCopy.name = 'Bob';      // Affects original

// const spreadCopy = { ...user };
// spreadCopy.name = 'Charlie'; // Does NOT affect original

//---------------------------------------------------------------------------------------

//Property chaining , dot notation
const User = {
  name: 'Alice',
  address: {
    city: 'Delhi',
    zip: 110001
  }
};

console.log(User.address.city); // 'Delhi'

//Method Chaining -----------------------------------------------------------------------
// when you call multiple methods on the same object in a single line, usually by returning this from each method.

const calculator= {
   value: 0,
   add(num){
    this.value+=num;
    return this; // Enables chaining
   },

   sub(num){
    this.value-=num;
    return this;
   },
    multiply(num) {
    this.value *= num;
    return this;
  },

  divide(num) {
    if (num !== 0) this.value /= num;
    return this;
  },

  result() {
    console.log(this.value);
    return this;
  }

};

calculator.add(10).sub(2).multiply(3).divide(4).result(); // Output: 6

// ***** This - Return the same object so that the next method can continue working on it***
// If you didn't return this, you'd get undefined (or some other return value), and the next method would fail
// value persists because all methods operate on the same object, and nothing resets it unless you do it manually.

// Option Chaining

const chainObj={
  user: ()=> "Alice" //function
}

console.log(chainObj.user());
console.log(chainObj.city?.()); //prevents error 

const username= undefined; // "" (double quotes are not undefined)
console.log(username ?? "Guest"); // If LHS is undefined then print RHS


//This keyword:

// const thisObj= {
//   fname: "Aric",
// //   username: ()=> console.log(fname) //error
//     username: () => console.log(this.fname) 
//  };

//  thisObj.username();

//  Arrow functions do not have their own this context.
// They inherit this from their lexical scope — i.e., where the function is defined, not how it is called.
// In this case, this inside username does not refer to thisObj — it refers to the surrounding scope, which is likely the global object (window in browsers or undefined in strict mode).
// So this.fname is undefined.



const thisObj= {
  fname: "Aric",
    username: function() { console.log(this.fname) }
 };

 thisObj.username();


 function fa() {
  console.log(this); // window object
 } 

 fa();
 