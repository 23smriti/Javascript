/**  DOM- Document Object Model
promt or alert stops the execution of page, waits till the prompt/alert is closed

Winow object : represents an open window in a browser. It is browser's objcet (not Javascript's)
and is automatically created by browser 

It is a global objcet with lots of properties and methods
Type window in console and you can check 

console.log("hello") or window.console.log("hello") have same output as console.log is a part of window object

DOM: 

All html code can be accessed in JS. This html code turned into objects in JS called dcuments
and this document is available in window object (window.document)
console.dir(window.document) --> to see methods and properties of document
DOM is a tree like structure

Window --> HTML
html k andar head and body and body k andar div...so on

We can't dynamically change html/css of a page through JS, instead of changing files at runtime

**/

console.dir(window.document.body);

console.log(document.body.childNodes[2]);
// Text nodes (like whitespace or line breaks between elements)

//*******IMP********** : 
// If we don't add </script> tag just before the ending of body tag or if we put it before body
// tag, we we'll not be able to acess Dom elements of body. Script will load before body
// In that case document.body will be null  */

// DOM MANIPULATION
//Selecting with id : document.getElementById(“myId”)

console.dir(document.getElementById("heading"));
//if there is no id, then it will return null

console.dir(document.getElementsByClassName("heading2")); //returns HTML collection
//if there is no class with this name, then it will return empty HTML Collection

console.dir(document.getElementsByTagName("p"));

console.dir(document.querySelector("p"));
console.log(document.querySelector("p"));
console.dir(document.querySelector("#heading"));
//document.querySelector(“#myId / .myClass / tag”)
//returns first element


console.log(document.querySelectorAll("p"));
// document.querySelectorAll(“#myId / .myClass / tag”)
//returns a NodeList -----***REMEMBER**

//Properties
// tagName : returns tag for element nodes

// innerText : returns the text content of the element and all its children

// innerHTML : returns the plain text or HTML contents in the element

// textContent : returns textual content even for hidden elements


//Alll work can be done on console as well

let tag= document.querySelector("h1");
console.log(tag.tagName); //output is H1

console.log(document.querySelector("h1").innerText)  //textual content
//returns  Welcome to Order Karo
// This is sub heading

console.log(document.querySelector("h1").innerHTML)
//Welcome to Order Karo 
 //   <p> This is sub heading</p>

//  document.querySelector("h1").innerText="This is Updated"
// document.querySelector("h1").innerHTML= "<i>This is Heading</i>"

let idx=0;
let divs= document.querySelectorAll(".items");
console.log(divs);
// divs[0].innerText="This is unique text1";

for (div of divs){
    div.innerText=`This is unique text ${idx}`;
       idx++; 
}

// divs.forEach((div) => {
//     div.innerText = `This is unique text ${idx}`;
//     idx++;
// });


let para= document.querySelector("div");
console.log(para.getAttribute("class"));

let paragraph= document.querySelector("p");
console.log(paragraph.getAttribute("id"));

//getAttribute() only works on a single element, and querySelector() returns only the first matching element in the DOM

paragraph.setAttribute("id","id2"); //changed id from para to id2

// getAttribute( attr ) //to get the attribute value
// setAttribute( attr, value ) //to set the attribute value
// Style
// node.style : only shows inline styling

// to getAttribute if we dont't want to slect first p tag
// let paras = document.querySelectorAll("p"); // returns a NodeList of all <p> elements
// let thirdPara = paras[2]; // index starts at 0
// console.log(thirdPara.getAttribute("id")); // or any attribute

let head2= document.querySelector("h3")
head2.style.color="red";

// Insert Elements
// node.append( el ) //adds at the end of node (inside)
// node.prepend( el ) //adds at the start of node (inside)
// let el = document.createElement(“div“)
// node.before( el ) //adds before the node (outside)
// node.after( el ) //adds after the node (outside)

// Delete Element
// node.remove( ) //removes the node

//Create Element first-

let el = document.createElement("button"); //create element
document.querySelector("#last-heading").append(el); //append inside div but in last
el.innerText="Click Me";
el.setAttribute("id","newBtn");

let el1= document.createElement("p")
document.querySelector("#last-heading").prepend(el1);
el1.innerText="Follow Me!"

let el2=document.createElement("button")
document.querySelector("ul").before(el2);
el2.innerText="Custom"


//Read about append child and remove child , classList

document.querySelectorAll(".items").forEach((item)=>{
item.classList.add("NewClass");
})  //adding new class through classList. Set attribute override the class/id

