//async await >> promise chains >> callback hell


//fetch apis
const URL = "https://cat-fact.herokuapp.com/facts";

//let promise=fetch(url,[option])


let promise=fetch(URL);
console.log(promise);

const getFacts = async() => {
    let response = await fetch(URL);
    console.log(response) ;
}

