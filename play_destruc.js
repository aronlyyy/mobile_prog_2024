//? Destructuring objects and arrays
//Sept 2024
const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading','cooking'],
    greet: function(){
        console.log('Hello, my name is '+this.name+'and I am'+this.age+"years old.")
    }
}

//When to use destructuring?
//Destructing is useful when you only need a specific property of an object.

//regulat function
//regular passing of object
//even though we are passing the whole object, we are only using the name property
const printName=(personData)=>{
    console.log(personData.name);
}

// ! DESTRUCTURING THE OBJECT
//if we are only intereted in the name property of the object, we can use destructing
//destructuring the object
//const printName=({name})=>{
    //}

//we pass the object as an argument to the function
printName(person);

// ! WITHOUR FUNCTION OR DESTRUCTURING

const {name,age} = person;
console.log(name,age);

//destructing arrays
const hobbies = ['reading','cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

/* Reminders when using destructing
- The property name must match the object property name.
- The property name must be enclosed with curly braces.
- The property name must be followed by a colon.
*/

//instructions
//recode the following code snippets
//play with destructuring and arrays