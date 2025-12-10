//Promise chain 

function asyncFunc1(){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            console.log("Data1")
            res("Data1 is fetched")
        },2000);
    })
}

function asyncFunc2(){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            console.log("Data2")
            res("data2 is fetched")
        },2000);
    })
}

// console.log("Fetching Data 1")
// let promise1= asyncFunc1();
//  promise1.then((res)=>{
//     console.log(res);
//  })
 
//  console.log("Fetching Data 2")
// let promise2= asyncFunc1();
//  promise2.then((res)=>{
//     console.log(res);
//  })

//hume krna h ki jab phela promise resolve ho tbhi dusre data k liye jaye

// console.log("fetching data 1") 
// let promise1= asyncFunc1();
// promise1.then((res)=>{
//   console.log(res);
//   //res milne k baad data 2 fetch krenhe
//    console.log("fetching data 2") 
//    let promise2=asyncFunc2()
//    promise2.then((res)=>{
//     console.log(res)
//    })
// })    
 

function getPromiseData(id){
 return new Promise((res,rej)=>{
     setTimeout(()=>{
         console.log(`Data ${id} fetch from promise`)
         res("Promise function result")
     },2000)
 })
}

// getPromiseData(1).then((res)=>{
//     console.log(res);
//     return getPromiseData(2);
// })
// .then ((res)=>{
//     console.log("Promise success")
// }).then((res)=>{
//     return getPromiseData(3);
// }).then((res)=>{
//     console.log("Final end")
// })

// getPromiseData(1).then((res)=>{
//     return getPromiseData(2);
// }).then((res)=>{
//     return getPromiseData(3);
// }).then((res)=>{
//     console.log(res)
// })

//res is the msg that is wriiten when resolve


//Promise chains also become difficult to understand

// Async function always returns a promise
//kisi bhi normal function ko async bna skte h


async function hello(){
    console.log("hello")
} //It will always returns a promise

// await pauses the execution of its surrounding async function until the promise is settled.

//await can only be used inside a async function

//To use await outside of any async function read type=module in html script tag

function api(){
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
   console.log("Weather Data")
    res("Fetched");
    },2000)
    
  })

}

// await api() //This will give error , hence use within a async fun


async function callApi(){
   await api() // 1st call
   await api ()  // 2nd call
}

callApi(); // not works without semicolon

//to avoid call of an  extra function we can use IIFEs

// (func) (); //function without name


(async function (){
   await api() // 1st call
   await api ()  // 2nd call

})();
//IIFEs can only be called once

// callApi() then (...)()	❌	JS thinks you're calling the result of callApi()
// callApi(); (...)()	✅	Separate statements, clearly ended


// let btn= document.querySelector("button")

// let btnPromise= new Promise ((res,rej)=>{
//        btn.addEventListener("click", ()=>{
//           res("Clicked")
//        })
// });

// btnPromise.then((res)=>{
//     console.log(res)
// })

function btnPromise() {
  return new Promise((resolve, reject) => {
    const btn = document.getElementById("btn"); // ✅ Get the button element
    btn.addEventListener("click", () => {
      resolve("Clicked");
    });
  });
}

async function callbtnPromise() {
  const result = await btnPromise(); // Wait until the button is clicked
  console.log(result) // Logs "Clicked"
}

callbtnPromise();

 // Starts waiting for the button click
//Don't assign event listener to a variable


////****Practise***---------------------------------------------------------------------------- */
//Q: Write a simple Promise that resolves after 2 seconds with the message "Done!".

let promiseMsg= new Promise ((res,rej)=>{
    setTimeout(()=>{
            //    console.log("Done")
               res("Done")
    },2000)
})

promiseMsg.then ((res)=> {
    console.log(res)
})

//Convert the following Promise-based code to use async/await.

function newPromiseMsg(){
    return new Promise((res)=>{
        setTimeout(()=>{
                 res("Data is fetched")
        },4000)
    });
}

async function callNewPromise(){
    const result= await newPromiseMsg()
    console.log(result) 
}

callNewPromise();


Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("Oops"); })
  .then(x => console.log(x))
  .catch(err => console.error(err.message)); //output is oops
  //Promise.resolve()	Creates an already-resolved Promise.
  //throw in .then()	Turns the chain into a rejection — skips to .catch().


//   Write a function retryPromise that tries to resolve a failing Promise up to 3 times before rejecting.


// Usage
let attempt = 0;
function unstablePromise() {
  return new Promise((resolve, reject) => {
    attempt++;
    if (attempt === 3) resolve("Success on attempt " + attempt);
    else reject("Fail on attempt " + attempt);
  });
}

function retryPromise(fn, retries = 3) {
  return fn().catch(err => {
    if (retries === 1) throw err;
    return retryPromise(fn, retries - 1);
  });
}

retryPromise(unstablePromise)
  .then(console.log)
  .catch(console.error);
// -----------------------------------------------------------------------


