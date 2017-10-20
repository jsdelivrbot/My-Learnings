### Variable scoping with 'let' - 
- Used in place of 'var'keyword for declaring variables, when the value can be changed over time.
```
let a = 'hello';
console.log(a);
```

- 'let' is also used for block scoping where we wrap the code inside curly braces {}
```
let a = 'hello';
console.log(a);
{
    let a = 'goodbye';
    console.log('a inside scope', a);
}
```
We see different values of a variable. With scoping we can re-use the same variable name, and therefore we can create pvt variables inside scope.
```
function run() {
    let b = 2;
    console.log(b);
    {
        let b =3;
        console.log(b);
    }
}
```
=> The console.logs output '2, 3'

### Constant-ly scoping
Another way of declaring scope variable - 'const', meaning constant, it's value can't be changed.
- It just assigns a value to the variable
- The value can be manipulated by JS methods
 >Eg - 
 ```
const array = [1, 2, 3];
array.push(4); 
//Although this line manipulates the const array. 
//It does not re-assign the actual array const itself. 
 ```

 console.log(array); => [1,2,3,4]

### Template literals/strings
In vanilla JS concatenation is done as below -
```
var a  = 'hello';
var b = 'world';
var c = a + '' + b;
console.log(c);
```
=> hello world

##### Refactoring the concat by ES6 method
Declaring strings by back ticks.
Template literal syntax, `${...}` -
```
let d = `hello ${b}`;
console.log(d);
```
=> hello world

OR
```
let e = `${a} world`;
console.log(e);
```
=> hello world

#### Review
- Block scoping binds variable declarations to blocks of code, { .. }.

- The let keyword replaces var in es6.

- The const keyword declares a variable that cannot be re-assigned.

- Template literals in es6 are strings with embedded variables or code inside. They have surrounding backticks `` with interpolated ${} symbols for variables.