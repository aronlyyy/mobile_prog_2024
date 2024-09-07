// Basic Syntax 

    // 1. Declaration and assignment of variables
    let name = "Aaron";
    let age = 20;
    let hasHobbies = true;
    let stat = "Hungry"

    const nameThatCannotChange = "Max"; // Constants are used for values that should not change
    // This means const nameThatCannotChange = "Max"; cannot be changed in the entire scope

    // * Conditional Statements
    if (hasHobbies) {
        console.log("I Have Hobbies");
    }

    if (age > 29) {
        console.log("You are older than 29. You are ancient");
    } else if (age < 25) {
        console.log("You are younger than 25. Very Young");
    } else {
        console.log("You are 25 years old.");
    }

    if(stat = "Hungry")
{
    console.log("GET FOOD");
}
    switch (name) {
        case "Aaron":
            console.log("You are Aaron");
            break; // break is used to exit the switch statement
        default: // default is used when none of the cases are met
            console.log("You are not Aaron");
    }

    // 2. Printing to the console
    console.log(name);
    console.log(age);
    console.log(hasHobbies);

    console.log(nameThatCannotChange);

    console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Max and I am 29 years old.
    // ${name} is an example of string interpolation

    // 3. ARRAY DECLARATION

    let hobbies = ["Sleeping", "Cooking","Gaming", "Watching movies"]; // Fixed the capitalization of "hobbies"
    let fruits = ["Banana", "Apple", "Grapes"];

    // Printing the array
    console.log(hobbies); 
    console.log(fruits);// Output: ["Sports", "Cooking"]
    // Accessing an element in the array
    console.log(hobbies[0]); // Output: Sports

    for (let hobby of hobbies) {
        console.log(hobby);
    }

    // Adding an element to the array
    hobbies.push("Programming");

    console.log(hobbies); 

    // * MAPPING AN ARRAY
    // Mapping is used to loop through an array and modify the elements
    let modifiedHobbies = hobbies.map(hobby => {
        return hobby + " is challenging";
    });

    console.log(modifiedHobbies); // Output: ["Sports is fun", "Cooking is fun", "Programming is fun"]

    // 4. OBJECT DECLARATION

    let person = { 
        name: "Aaron", // This is a property/field
        age: 30, // This is a property/field
        hasHobbies: true, // This is a property/field
        stat: "Hungry",
        greet() {
            console.log("Hello, I am " + this.name);
        }
    };

    person.greet();
    // Accessing object properties
    console.log(person.name); // Output: Max
    console.log(person.age); // Output: 29 (Fixed capitalization of "Person" to "person")
    console.log(person.hasHobbies); 
    // Output: true
    // 5. FUNCTION DECLARATION
    function myFunction() {
        // Code
        console.log("Hello");
    }

    // Calling the function
    myFunction(); // Output: Hello
    const myOwnFunction = () => {
        // Code
        return "Hello"; // return is used to return a value from a function. You can return a string, number,
        // boolean, array, object, etc.
        // return stops the function from executing further
    };

    // In a function, you can add variables, if statements, loops, arrays, objects, etc.
    // Calling the function
    
    console.log(myOwnFunction()); // Output: "Hello"
    // * ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS
    function describeStudent(name, age) { // This is a function that takes in two parameters/arguments
        console.log("This person is " + name + " and is " + age + " years old");
    }

    describeStudent(name, age); // Output: This person is Max and is 29 years old

    // * ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
    const describeStudentArrow = (name, age) => {
        return `This person is ${name} and is ${age} years old`;
    };
    
    console.log(describeStudentArrow(name, age)); // Output: This person is Max and is 29 years old