// console.log("one");
// console.log("two")

// //instruction executed in the manner of writing the instructions

// ///function hello(){
//    // console.log("hello");
// //}
// //setTimeout(hello,2000) //timeout, 2s=2000 ms

// setTimeout(()=>{
// console.log("hello");
// },4000);

// console.log("three");


// //***Promises: To avoid nested callbacks ****

// function getdata(dataId)
// {
//    setTimeout(()=> {
//       console.log("data",dataId);
//    },2000);
// } 

// getdata(1);
// getdata(2);
// getdata(3);
//this will execute all three statement at once


// //***To resolve this:
//  function getData(dataId,getNextData)
//  {
//    setTimeout(()=>{
//       console.log("data",dataId);
//       if(getNextData) {
//       getNextData();
//       }
//    },2000)
//  }

//  getData(1,()=> {
//    getData(2,()=> {
//       getData(3);
//    });
//  }); 
// //This can create callback hells


//***Promises---*** 
// let promise = new Promise((resolve,reject)=> {
//    console.log("This is promise");
//    resolve("Success"); or //reject("failed");
// })
// //state: pending,fulfilled,rejected

function getdata(dataId,getNextData)
{
   return new Promise((resolve,reject)=>{
      setTimeout(()=> {
         console.log("data",dataId);
         resolve("Data fetched")
         if(getNextData)
         {
            getNextData();
         }
      },2000);
   });

   }

   //***Use of Promises: 
   // If fulfilled : promise.then((res)=> {..})
   // If rejected : promise.catch((err)=> {..})

//    const getPromise = () => {
//       return new Promise ((resolve,reject) => {
//          console.log("I am promise");
//          resolve("success");
//          //reject("error");
//       });
//    }

// //***To use the result of an promise based on resolve/reject

// let promise = getPromise();

// promise.then( (res)=>{
//    console.log("promise fulfilled",res);
// }); //fulfilled , res is the value of resolved message i.e. success

// promise.catch((err)=>{
//    console.log("rejected".err);
// }); //rejected

// //****Promises Chains

// let p1=getdata(1);
// p1.then((res)=> {
//    console.log(res);
//    getdata(2).then(()=> {
//       console.log(res);
//    });
// });

// //****or simple way of above implementation:
// getdata(1)
// .then((res)=> {
//    return getdata(2);
// }
// ).then((res)=>{
//    return getdata(3);
// }

// ).then ((res)=>{
//    console.log(res);
// }

// )


//****Async Await:Async function always returns a promise
// async function myFun() {..}
// await pauses the execution of its surrounding async function until the promise is settled
//await can only be used inside async function

function api()
{
   return new Promise ((resolve,reject)=>
   {
                setTimeout(()=>{
                  console.log("weather data");
                  resolve(200);
                },2000);
   });
}













// //fetch apis
// const URL = "https://cat-fact.herokuapp.com/facts";

// //let promise=fetch(url,[option])


// let promise=fetch(URL);
// console.log(promise);

// const getFacts = async() => {
//     let response = await fetch(URL);
//     console.log(response) ;
// }

