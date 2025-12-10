//Instructions executes in synchronus manner, one by one in a sequence
console.log("statement1")
console.log("statement2")
console.log("statement3")


//Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous
// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

console.log("one")
console.log("two")

// function func(){
//  console.log("Delayed by 6 sec")
// }

// setTimeout(func,6000)

console.log("Not impacted by delay")

// setTimeout(()=>{
//     console.log("Delayed by 4 sec");
// }, 4000) //timeout, 1s= 1000ms

//Output:
// one
// async.js:17 two
// async.js:25 Not impacted by delay
// async.js:28 Delayed by 4 sec
// async.js:20 Delayed by 6 sec


//A callback is a function passed as an argument to another function.

function getData(id){
  setTimeout(()=>{
       console.log("id",id)
  },2000)
   
}

getData(1);
getData(2); // These all two will invoke together after 2 sec

// I want to delay id 1 by 2 sec then id 2 after 2 sec 


function database(dataId,getnextData){
         setTimeout(()=>{
            console.log(dataId);
            if (getnextData) {  //call next data if next data exists during call
            getnextData();
            }
         },2000)
}

// database(1,database(2)); 
//This will give an error, because we cannot pass callback functions with paranthesis, they invoked immediately
database(1, ()=>{
    database(2) //iss call me getnextData ni h isliye upar if me dala h if exits then call
})
//Passed callback

// Callback Hell: Complex nested callbacks

/***
    database(5,()=>{
    database(6,()=>{
        database(7,()=>{
            database(8)
        })
    })
})  

*/


//To resolve this  we have: Promises

//States of Promise: Pending,fulfilled(resolved),rejected
//resolve and reject are callbacks provided by JS

let promise= new Promise ((resolve,reject)=>{
    console.log("this is promise");
    resolve("This is resolved")
    // reject("Some error")
})

//without resolve
/**[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
**/

//with resolve 

/**
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "This is resolved"
**/

//General me hum promises create ni krte, api hume promises return krke deti h

function getNewData(id,nextData){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                   console.log(id);
                   resolve("Id fetched")
                    if (nextData){
                        nextData()
                    }
                    
            },5000)
    })

}

let p1=getNewData(5)
console.log(p1)


