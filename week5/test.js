function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// Example usage:
let num1 = 5;
let num2 = 3;

let additionResult = add(num1, num2);
console.log("Addition:", additionResult);

let subtractionResult = subtract(num1, num2);
console.log("Subtraction:", subtractionResult);

let multiplicationResult = multiply(num1, num2);
console.log("Multiplication:", multiplicationResult);
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
}
function sum(x,y){
    sum =(x+y);
    return sum; 
}
let value = sum(8, 3);
console.log(value)
const arrowSum =(a,b)=>{
    console.log(a+b)
}

let arrowAdd = (a, b) => {
    console.log(a + b);
};
arrowAdd(3,4);
let arrowSub= (a, b) => {
    console.log(a-b);
};
arrowSub(3,4);
let arrowMul = (a, b) => {
    console.log(a*b);
};
arrowMul(8,7);



let str='anas mian';
console.log(str); // Output: "
let str2='anas mian';
console.log(str2[0]); // Output: "
//export function
export let arrowShift = (a, b) => {
    console.log(a*b);
}
let nums=[2,4,6,8]
 nums .forEach(nums => {
    console.log(nums*nums);
});
    
