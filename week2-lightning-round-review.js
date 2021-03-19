// APP ACADEMY WEEK 2: LIGHTNING ROUND REVIEW - EMPTY

// MONDAY: Running JS Locally Lesson Learning Objectives
// 1. Match the commands ls, cd, pwd to their descriptions
    // ls - inspect directories and files
    // cd - navigate to
    // pwd - path to working directory

// 2. Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.
    // QUIZ: match-the-path-quiz

// 3. Use VSCode to create a folder. Within the folder create a .js file containing console.log('hello new world'); and save it.
    // !IMPORTANT

// 4. Use node to execute a JavaScript file in the terminal
    // TERMINAL COMMAND: node filename.js

// MONDAY: Advanced Array Methods
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// TUESDAY: Plain Old JS Object Lesson Learning Objectives
// 1. Identify when to use . vs [] when accessing values of an object
    // Dot notation:
        // easier to read/write
        // cannot use variables as keys
        // keys can't contain numbers as their first character (object.1key doesn't work!)
    // Bracket notation:
        // can use variables (assigned to string values) as keys
        // okay to use variables and Strings that start with numbers as keys (use object['1key'] does work, while object.1key does not)
        let myDog = {};
        myDog.name = "Fido";
    
        // let's use a variable as our key and some bracket notation:
        let myKey = "name";
        console.log(myDog); // prints `{name: "Fido"}`
        console.log(myDog[myKey]); // prints `Fido`
    
        // what if we try to use the variable in dot notation:
        // the below is interpreted as myDog['myKey']
        console.log(myDog.myKey); // prints: undefined
    
    // 2. Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object
        let car = {color: "Blue", seats: 2}
    
        car["color"] // => "Blue"
        car["color"] === undefined; // => false
        car["weight"] === undefined; // => true
    
    // 3. Utilize Object.keys and Object.values in a function
        function keysInObject(obj) {
            return Object.keys(obj);
        }
    
        function valuesInObject(obj) {
            return Object.values(obj);
        }
    
    // 4. Iterate through an object using a for...in loop
        let obj = { name: "Rose", cats: 2 };
    
        for (let key in obj) {
        let value = obj[key];
        console.log(value);
        }
    
    // 5. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments
        function logArguments(...allArguments) {
            console.log(allArguments);
        }
        
        logArguments("apple", 15, 3); // prints: ["apple", 15, 3]
    
    // 6. Use ...spread syntax for Object literals and Array literals
        let numArray = [1, 2, 3];
        let moreNums = [...numArray, 4, 5, 6];
        moreNums // => [1, 2, 3, 4, 5, 6]
    
        let colors = { red: "scarlet", blue: "aquamarine" };
        let newColors = { ...colors };
        newColors // => { red: "scarlet", blue: "aquamarine" };
    
    // 7. Destructure an array to reference specific elements
        let numArray = [10, 20];
        let [firstEl, secondEl] = numArray;
    
        console.log(firstEl); //=> 10
        console.log(secondEl); //=> 20
    
    // 8. Destructure an object to reference specific values
        let obj = { name: "Apples", breed: ["tabby", "short hair"] };
        let { name, breed } = obj;
    
        console.log(name); // "Apples"
        console.log(breed); // ["tabby", "short hair"]
    
    // 9. Write a function that accepts an array as an argument and returns an object representing the count of each character in the array
        // EXERCISE: POJO-project/problems/12-array-converter.js
    
    // 10. Label variables as either Primitive vs. Reference
        // QUIZ: primitive-vs-reference-quiz
    
    // WEDNESDAY: Callbacks Lesson Learning Objectives
    // 1. Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.
        // They can be stored in variables
    
    // 2. Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed
        let foobar = function(callback) {
            console.log("foo");
            callback();
            console.log("bar");
        };
        
        foobar(function() {
            console.log("hello");
        }); // prints
        // foo
        // hello
        // bar
    // 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
        // EXERCISE: try-out-callbacks/problems/19-greater-callback-value.js
    
    // 4. Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.map.
        // EXERCISE: try-out-callbacks/problems/02-my-map.js
    
    // 5. Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.filter.
        // EXERCISE: try-out-callbacks/problems/04-my-filter.js
    
    // 6. Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.every.
        // EXERCISE: try-out-callbacks/problems/10-my-every.js
    
    // THURSDAY: Scope Lesson Learning Objectives
    // 1. Identify the difference between const, let, and var declarations
        // let: Allows you to reassign that variable. Block-scoped.
        // const: Does NOT allow variable reassignmment. Block-scoped
        // var: May or may not be reassigned, and the variable is scoped to a function.
    
    // 2. Explain the difference between const, let, and var declarations
        // Const and let are block-scoped while var is function-scoped.
    
    // 3. Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
        // QUIZ: scope-quiz
    
    // 4. Define an arrow function
        // function declaration
        let average = function(num1, num2) {
            let avg = (num1 + num2) / 2;
            return avg;
        };
        
        // fat arrow function style
        let averageArrow = (num1, num2) => {
            let avg = (num1 + num2) / 2;
            return avg;
        };
    
    // 5. Implement a closure and explain how the closure effects scope
        function climbTree(treeType) {
            let treeString = "You climbed a ";
        
            function sayClimbTree() {
            // this inner function has access to the variables in the outer scope
            // in which is was defined - including any defined parameters
            return treeString + treeType;
            }
        
            return sayClimbTree();
        }
        
        // We assign the result to a variable
        const sayFunction = climbTree("Pine");
        
        // So we can call it, and indeed the variables have been saved in the closure
        // and the sayFunction prints out their values.
        console.log(sayFunction); // You climbed a Pine
    
        //In the above snippet the sayClimbTree function captures and uses the treeString and treeType variables within its own inner scope.