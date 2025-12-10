/** var= can be re-declared and updated. Global scope 
const= cannot be re-declared or updated. Block scope 
let= cannot be re-declared but can be updated. Global scope 

if Typeof variable is object- collection of values (key value pair)

const object's key can be updated

Practise-
//not use equal sign , use colon
const Product= {
name="Pen",
Price="120 Rs",
Rating= 7.0

}

**/

const Product= {
    name:"Pen",
    Price:"120 Rs",
    Rating: 7.0
    
    }


// alert('This is an alert');
// let name= prompt("This is promt and take store below input");
// console.log(name);

// let number=prompt("Enter a number:")
// if (number%5==0)
// {
//     console.log("Divisible by 5")
// }
// else
// console.log("Not Divisible by 5")


//Lec 2 -- Operators (+,-,/,%,&&,||,! , ++var,--var) , MDN Document for theory of JS

// prompt- Take input from user and also display
// console.log()
// alert- take message and display as popup

//Lec 3 - Loops

for(let i=0;i<3;i++)
{
    console.log(i);
}

let str= "MyName"
for(let i of str)
{
    console.log("i=", i);
}

//if using === then it checks type also

//Template Literals- use backtick and embedded strings 'string ${expression}'
let output= `The cost of ${Product.name} is ${Product.Price} `;
console.log(output);

//escape characters \n- new line, \t- tab

//String Methods- trim, slice,replace

//Strings
let strng="this";
console.log(strng.length); //str length
//lenth of escape characters is 1 not 2 (/y)
console.log(strng[0]); //str index

//Template Literals : A way to have embedded expressions in strings
//String Interpolation:To create string by substitution of placeholders
let sentence=`This is a template ${strng} literal `;
let out=`This is a template ${1+2+3} literal `; //first value is computed then it becomes a string
console.log(out);
console.log(sentence);
console.log(strng.charAt(3));
//str.slice(start, end?) end is optional // returns part of string
//str.replace( searchVal, newVal)

//string is immutable, replace can work but cannot update string with going on the index



//Lec 4- Arrays
// push,pop,shift,unshift,slice

//Lect5- Functions and Methods

function functionName(){
    console.log("Function Called");
}

functionName();

// Methoda vs Functions:
// str.toUpperCase(); -- here toUpperCase is method as it is associated with an Object, only can be used with a string
// while function are written by us for a certain input and do some work

// forEach loop in Arrays, since it is now associate with Array datastructure it is method
// ArrayName.forEach(callBackFunction)
//callBackFunction are the functions that are passed as a parameter
// Here callBackFunction is a function to execute each element in an array
let arr=[22,33,44,55,66];
arr.forEach(function printVal(val){
console.log(val)
}); // Each value at each index will be stored in val variable
//OR

arr.forEach((val)=> {
    console.log(val);
});

arr.forEach((val,idx,arr)=> {
    console.log(val,idx,arr);
});


let sum=(a,b)=>{
    return (a+b);
}

console.log(sum(1,2));

let num=[1,2,3,4,5]
let square=(a) =>{
    return a*a;
    
}

num.forEach((val) =>{
    // console.log(square(val));
    console.log(val*val);
    
})
//Higher Order Functions : that takes or returns other functions


//IIFE: Immediately Invoked Function Expression

(function(){
    console.log("Hello")
})()  // get called with ()


console.log("hello");

// JS is dynamically typed, as we can store any data under any varibale. we dont define datatype of
//  variable


//prompt always take string as input

// for of loop (with string or arrays)

 str="thisIsMyName";
for(let i of str){
    console.log(i);
};

//for in loop (with objects and arrays)

////*************For in gives index  while for of gives direct value------------------------------ */

let student={
    name:"Sam",
    class:12,
    year:2025

}

for(let i in student){
    console.log(i ,":" ,student[i]);
    
};

for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


//Arrays: Collection of items : mutable
let ar=[1,2,3];
arr[0]=4;
console.log(ar);

for(let i of ar){
    console.log(i);
}

//for of loop can be used when we work with values only, if we need index as well we use normal forloop

//Array Methods
// push( ) : add to end
// pop( ) : delete from end & return
// toString( ) : converts array to string //returns a new string
// concat( ) : joins multiple arrays & returns result
// unshift( ) : add to start
// shift( ) : delete from start & return
// slice( ) : returns a piece of the array
// slice( startIdx, endIdx )
// splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )
//splice changes original value but slice doesn't

//Read about array.find,some,every,sort,indexof  methods 
//Map,Reduce,Filter

//Map: returns a new array, else similar to forEach function

// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array

// arr.map( callbackFnx( value, index, array ) )

let array=[22,3,44]

let  op= array.map((val)=>{
    return val*2;
})

console.log(op);

//Filter : ek ek indix pr jake filter krna based on some condition
//Creates a new array of elements that give true for a condition/filter.

let out1= array.filter((val)=>{
    return val %2 === 0;
});

console.log(out1); //store even/filtered number in new array
//output is  [22, 44]

// and if we use map:

out1= array.map((val)=>{
    return val %2 === 0;
});

console.log(out1); //output is [true, false, true]

//Reduce Method: Performs some operations & reduces the array to a single value. 
// It returns that single value. (like sum, average)

let red=[1,2,3,4]
out1=red.reduce((res,val)=>{
    return res+val;  // results getting stored in res at each step
})
console.log(out1); 

let addition=red.reduce((acc,num)=> acc+num,0) // will assign 0 to acc

//Normal function
add=0;
function abc() {
for (let i in red){
    add=add+red[i];
}
console.log(add)
};

abc();

let fruits=["cherry","apple","banana"]
console.log(fruits.sort()) //This wiil sort fruits alphabetically.

//It does not work woth numbers directly, have to pass two arguments that tkes 1&2 elements by default for comparison

let numbers=[1,5,2,6,3]

console.log(numbers.sort()) //won't work

let res =  numbers.sort((a,b)=> a-b)


