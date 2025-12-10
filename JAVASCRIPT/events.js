// The change in the state of an object is known as an Event
// Event Handling
// node.event = ( ) => {
// //handle here
// }

//-------*** Imp: Js handling more priority than inline**---//

let btn1= document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("Buton clicked through JS");
}

// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
// Event type like click/Mouse/keyboard, target like on which like div/button and where it is effecting on screen

btn1.onclick=(e)=>{
    console.log("Buton clicked through JS");
    console.log(e); // e is the event object
    //e.type give type of event , e.target, e.clientX,e.clientY
}

btn1.onclick=(e)=>{
    console.log("Buton clicked through JS override");
    console.log(e); // e is the event object
    //e.type give type of event , e.target, e.clientX,e.clientY
}

///**** Ek event k upar ek hi handler lgta h, jo baad me ayega vo override kr dega */

//Event Listeners
// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )
// *Note : the callback reference should be same to remove

btn1.addEventListener("click", ()=>{
    console.log("Handler1 ");
})

btn1.addEventListener("click",()=>{
    console.log("Handler2 ");
}) // we can pass event object here as well

//Here with EventListeners we can have multiple handlers on same event

// btn1.addEventListener("click",()=>{
//     console.log("Handler3 ");
// })

btn1.addEventListener("click",()=>{
    console.log("Handler4 ");
})

//Now we want to reove handler 3, but acc to syntax we pass a callback function which needs to be removed

// If we do like below:
btn1.removeEventListener("click", ()=>{
    console.log("Handler3 ");
})

// This will not work as this function is taking separate space in memory. Thoigh logging is same
//We need to have exact reference of callback function, hence we'll store in variable while adding 
//so that we can remove exact same function

const hand3= ()=>{
    console.log("Handler3 ");
}

btn1.addEventListener("click",hand3)
btn1.removeEventListener("click",hand3);

let mode= document.querySelector("#mode")

mode.addEventListener("click",()=>{
     if(mode.innerText == "Dark Mode")
     {  
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        console.log("Switched to Dark Mode");
        mode.innerText= "Light Mode";
     }
     else{
        mode.innerText= "Dark Mode";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        console.log("Switched to Light Mode");

     }

})