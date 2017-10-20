### Spread Operator
- Makes ES6 code concise.
- Spread/rest Operator manipulates arrays and objects.

```
Example - 
let a = [7, 8, 9];
let b = [6, ...a, 10];
console.log(b); => [6,7,8,9,10]
```

- Spread operator (...) spreads its individual values and insert them within original array context.
```
function print(a, b, c) {
    console.log(a, b, c);
}
let z = [1, 2, 3];
print(...z);
```
 => On console 1,2,3

- It can also be used as argument of a function -
```
function print(...z) {
    console.log(z);
}
print(1,2,3); 
```
=> On console [1,2,3]

#### Quiz
We have a function 'butter'. Right now it only returns the array 'a', [1, 2, 3];
Later on, we call, butter(4, 5, 6). But instead of [1, 2, 3], we want butter to return [1, 2, 3, 4, 5, 6];
How can we take advantage of the spread operator to make butter simply return [1, 2, 3, 4, 5, 6]?
Hint: we have to use the spread syntax ( ... ) twice, and don't forget to return the output. Also, make sure the code works if you call butter(4, 5, 6)!
_________________________________________________________________________________________________

```
function butter(...z) {
  let a = [1, 2, 3, ...z];
  return a;
}

butter(4, 5, 6);
```
_____________________________________________________________________________________________

### Destructuring Assignment - Arrays
Destructuring assignement allows to extract data from arrays/objects into separate variables.
```
let c = [100, 200];
let a = c[0];
let b = c[1];

console.log(a, b);
```
=> 100, 200

Destructuring assignment allows us to condense the above code -
```
let c = [100, 200];
let [a, b] = c;
//Here, a is the 0th element and B is the first element of c

console.log(a, b);
```
=> 100, 200

Another example,
```
let fellowship = ["Frodo", "Gandalf", "Aragron"];
let [hobbit, wizard, ranger] = fellowship;

console.log(hobbit, wizard, ranger);
```
=> Frodo, Gandalf, Aragorn

Another example,
```
let c = [100, 200, 300, 400, 500];

//variable a = 100 & array b = value of the rest
let [a, ...b] = c;

console.log(a, b);
```
=> 100
[200, 300, 400, 500]

#### Quiz

1. Consider this array
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"]; 

Which of the following statements will give me the variable, wizard, with the value of "Gandalf"?
a) let [hobbit, wizard, ranger, elf, dwarf] = fellowship; // =====> correct answer
b) let [...characters] = fellowship;
c) let [wizard, hobbit, elf, dwarf, ranger];

> Destructuring assignment looks at the order in the array. Because the wizard variable is the second element in the assignment array, it assigns to the fellowship array's second element, "Gandalf".

_________________________________________________________________________________________________

2. Consider the same array
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"]; 

Which of the following statements gives me the array, three_amigos, with the value ["Aragorn", "Legolas", "Gimli"]?

a) let [...three_amigos] = fellowship;
explanation: This statement actually assign the entire fellowship array to three_amigos.

b) let [hobbit, ...three_amigos] = fellowship;
explanation: This statement assigns hobbit to "Frodo", but doesn't capture only ["Aragorn", "Legolas", "Gimli"] in three_amigos.

c) let [hobbit, wizard, ...three_amigos] = fellowship; // =====> correct answer
explanation: Correct! 
>This statement assigns hobbit to "Frodo" and wizard to "Gandalf". Using the spread operator, three_amigos captures the rest of the fellowship, ["Aragorn", "Legolas", "Gimli"].
________________________________________________________________________________________________________________

### Destructuring Assignment - Objects
In ES5 -

```
let wizard = {magical: true, power: 10};
let magical = wizard.magical;
let power = wizard.power;

console.log(magical, power);
```
=> true, 10

Destructuring by ES6 shorthand syntax. Very similar to destructuring arrays -
```
let wizard = {magical: true, power: 10};
let {magical, power} = wizard;
//matches variable name with the key property of object and automatically assigns it

console.log(magical, power);
```
=> true, 10

Another example - 
```
let ranger = {magical: false, power: 9};
let {magical, power} = ranger;
//matches variable name with the key property of object and automatically assigns it

console.log(magical, power);
```
=> false, 9

Another example -
Since in previous examples, values of magical and power were already pre-defined.
```
let magical = true;
let power = 2;

let ranger = {magical: false, power: 9};

console.log(magical, power);
```
=> true, 2

```
let magical = true;
let power = 2;

let ranger = {magical: false, power: 9};
let {magical, power} = ranger;
//we're re-assigning magical and power, which is not possible

console.log(magical, power);
```
=> throws error on console

For fixing, wrap the entire statement in parenthesis -
```
let magical = true;
let power = 2;

let ranger = {magical: false, power: 9};
(let {magical, power} = ranger);
//we're re-assigning magical and power, which is not possible

console.log(magical, power);
```
=> false, 9
_________________________________________________________________________________
#### Quiz
1. Consider this object
const lion = { size: 'large', sound: 'roar' };

Which of the following statements uses destructuring assignment to give the variable, sound, the value of 'roar'?
a) let sound = lion.roar;
explanation: Incorrect because this does not use destructuring assignment. Although sound does = 'roar';

b) let { sound } = lion; //======> correct answer
explanation: Correct! 
>This uses destructuring assignment to set the sound property in lion of 'roar', to the sound variable.

c) let sound = 'roar'; 
explanation: Incorrect because this does not use destructuring assignment. It just sets the value of sound to 'roar'.
_______________________________________________________________________________________________

2. Consider this object
const mouse = { size: 'small', sound: 'squeak '};

Which of the following statements uses destructuring assignment to assign two variables, size to 'small', and sound to 'squeak'?
a) let { size } = mouse; 
explanation: Incorrect. Although this uses destructuring assignment, we want both size and sound, not just size.

b) { size, sound } = mouse;
 explanation: Incorrect. Although this looks like destructuring assignment, it's actually a scoped coding block that will throw a syntax error.

c) let { size, sound } = mouse; //=====> correct answer 
explanation: Correct! 
> This uses destructuring assignment to assign both the size and sound variable to the properties in mouse.
______________________________________________________________________________________
### Review
- The es6 spread operator spreads the contents of an array or object into multiple variables. Its syntax uses three periods (…)
- Destructuring Assignment in es6 allows us to extract data from arrays or objects into separate, distinct variables.

- Array Destructuring Assignment assigns multiple variables from an array. For instance, let [a, b] = c, where values ‘a’ and ‘b’ assign in order to the respective elements in ‘c’.

- Object Destructuring Assignment assigns multiple variables form an object. For instance, let { a, b } = c, where values ‘a’ and ‘b’ assign to the ‘a’ and ‘b’ properties in ‘c’.

- Overall, the spread and operator and destructuring assignment will significantly reduce the length of your JavaScript code. 