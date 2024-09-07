//?Async functions are a way to work with asynchronous code in a more synchronous way. The way they are built on top of promises and are synctic sugar for promises.

console.log("Ordering your pizza...");

//!Creating a promise
const pizzaPromise=()=> {
    return new Promise((resolve, reject) => {
    //resolve and reject are callback functions
    //what is callback function?
    //A callback function is a function that is passed as an argument to another function , to be "called back" at a later time.
    let order = true;

    if (order){
        setTimeout(() => {
            //set Timeout is used to simulate a delay
            resolve("After 5 seconds, Pizza delivered!");
        }, 5000);
    } else {
          setTimeout(() => {//setTimeout is used to simulate a delay
          reject("After 5 seconds, Pizza not delivered!");
          },5000);
    }
});
};

//calling the function with a promise
//use .then() to handle the resolved promise
//use .catch() to handle the rejcted promise
pizzaPromise()
.then((result)=>{console.log(result);
})
.catch((error)=>{console.log(error);

});

console.log("Waiting for your pizza");

//!Terminology
//Prom ise: An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Resolve: A callback function that us used when the promise is fulfilled.
//Reject: A callback function that is used when the promise is rejected.
//.then(): A method that is used to handle the resolved promise.
//.catch(): A method that is used to handle the rejected promise.
    
