// Task 1


const hel = "Hello"
const wo = "World"

console.log(`${hel} ${wo}`); 

// Task 2


const  multiply = (x, y) => (x * y || x * 1);

console.log(multiply(4, 2))


// Task 3



// first solution

const args1 = [4, 5, 6] 

const average1 = (...args1) => args1.reduce((p, c) => p + c);

const result1 = average1(4,5,6) / args1.length

console.log(result1);

// Second solution

let args = [1, 2, 4, 5, 6] 

const [first, second, ...rest] = args ;

const average = (args) =>  args.reduce((p, c) => p + c);

const result = average(rest) / rest.length

console.log(result);


 // Task 4



 args = []

 const grades = [...args, 1, 5, 5, 5, 4, 3, 3, 2, 1]

 const result2 = average(grades) / grades.length

 console.log(result2);
 console.log(grades.length);


 // Task 5



const weirdoArray = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = weirdoArray;

console.log(firstname);
console.log(lastname);


