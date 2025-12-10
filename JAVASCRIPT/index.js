function x(){
  var a = 10;
     console.log("y called")

         function y(){
            console.log(a);
         }

      return y;
}

var z= x();
//Now execution context of x is vanished as soon as it returned

console.log(z);
//..........
z();
//still it will print 10



// Can be written as :

// function x(){
//   var a = 10;
//         return function y(){
//             console.log(a);
//          }

      
// }

// var z= x();
// //Now execution context of x is vanished as soon as it returned

// console.log(z);
// //..........
// z();


function p(){
      var i=2
      setTimeout(function func(){
      console.log(i)
      },2000)
}

p();

//Now print 1 then after 1 sec 2, then after 2 sec 3 , then 3 second baad 4


// function printNum(){
//      for (var i=1;i<=5;i++)
//      {
//          setTimeout(function(){
//              console.log(i)
//          },i*1000)
//      }
// }

// printNum()  

//Output: 6 6 6 6 6 : bcz setTimeout store at some different place but referencing to same i
//i gets updated before the timer gets expire

// function printSeq(){
//  for (let i=1;i<=5;i++)
//      {
//          setTimeout(function(){
//              console.log(i)
//          },i*1000)
//      }

// }
// printSeq()
// Now i is let which is block scope, each timeout function will be called with a updated i value
//1 2 3 4 5

//want to use var with same functionality

// function printAll(){
   
//    for (var i=1;i<=5;i++) {
//        function closure(i){

//             setTimeout(function(){
//                   console.log(i)
//                },i*1000);
                     
//          }
//          closure(i)  //due to closure, each timeout function has new i value from lexical env
//    }
   

// }
// printAll(); 

//1 2  3 4 5



let cnt=0;


document.getElementById("para2").addEventListener("click", function clickbtn(){
    console.log("button clicked" , ++cnt)
})
 // With Closure, we can hide data
 // we don't want to modify cnt with any other function as it is a global variable here.



function addEvent(){
    let count=0;
   document.getElementById("ClickMe").addEventListener("click", function clickbtn2(){
    console.log("button clicked" , ++count)
})
}

addEvent();


// Settimeout Trust Issue

// function setTime(){
//     setTimeout(()=>{
//         console.log("Callback dfunction")
//     },5000)
// }
// setTime();

// let startTime= new Date().getTime();
// let endDate= startTime;
// while (endDate<= startTime+10000) // Making the main threas busy even after timer expires
// {
//     endDate=new Date().getTime();
// }

// console.log("While expires")


//To defer a function , use setTimeout 0 (concurrency model)


const arr= [2,3,4,5,6]

//Calculate Area
let area= function CalcArre(radisuArr){
    let output=[];
     for (let i=0;i<radisuArr.length;i++)
     {
       output.push(Math.PI * radisuArr[i]*radisuArr[i])
     }

     return output;
}

console.log(area(arr));

//Calculate Diameter

let Circumf= function CalcCircum(arr){
     let dia = []
    for(let i=0;i<arr.length;i++){
          dia.push(2*Math.PI* arr[i])
    }
        return dia;
    }

console.log(Circumf(arr));

//Now we should not repeat the code.

let areaLogic = function(radius){
    return Math.PI*radius*radius;
}

let diaLogic= function(radius){
    return 2*radius;
}

let GeneralCalculate = function(arr,logic){
    let out= [];
    for(let i=0;i<arr.length;i++)
    {
        out.push(logic(arr[i]));
    }
    return out;
}

//Reusing code
console.log(GeneralCalculate(arr,areaLogic))
console.log(GeneralCalculate(arr,diaLogic))


let mapRes= arr.map((radius)=>{
    return radius*radius;
});
console.log(mapRes)

// Use of Reduce 
//Task: Return an object that contains particular age and its occurence

const Users =[
{Name: "A", age: 26},
{Name: "B", age: 21},
{Name: "C", age: 50},
{Name: "D", age: 26},
{Name: "E", age: 50},
{Name: "F", age: 25},
{Name: "G", age: 26},
];

const objectRes= Users.reduce( (acc,curr)=>{
    if(acc[curr.age]) //If curr.age exist in object
    {
            acc[curr.age]= ++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    } //put count as 1

    return acc;
},{}) //initial value will be an empty object

console.log(objectRes)


//Filter out names whose age is less than 30

console.log(Users.filter((x)=> x.age<30).map((x)=>x.Name));
//here map is running over output of filter


//Do same with reduce
let filterReduce= Users.reduce((acc,curr)=>{
       if(curr.age<30)
       {
        acc.push(curr.Name)
       }
       return acc;
},[])

console.log(filterReduce)


const cart=["apple","toys","Milk"]

api.createOrders(cart , function(){
    api.proceesToPayment(cart, function(){
        api.updateBalance();
    })
})  //This is a callback hell


