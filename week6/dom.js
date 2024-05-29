console.log(document);
console.dir(document);
let firstObject = {
    num: `123`,
    str : `abc`
};
console.log(firstObject);
// using push pop 
let anasMarks = [93,98,95];
console.log(anasMarks);

anasMarks.push(90);
console.log(anasMarks);

let aliMarks = [90,98,95];
console.log(aliMarks);


aliMarks.pop();
console.log(aliMarks);



let aliMarks2 = aliMarks.slice();
console.log(aliMarks2);

aliMarks2.shift();
console.log(aliMarks2);
//slice shift

let aliMarks3 = aliMarks.slice();
console.log(aliMarks3);

aliMarks3.unshift(90);
console.log(aliMarks3);
// clone
let secondObject = {...firstObject}
console.log(secondObject)