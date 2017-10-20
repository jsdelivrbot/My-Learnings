### Spread Operator
- Makes ES6 code concise.
- Spread/rest Operator manipulates arrays and objects.

>Example - 
```
let a = [7, 8, 9];
let b = [6, ...a, 10];
console.log(b); 
```
=> [6, 7, 8, 9, 10]

- Spread operator (...) spreads its individual values and insert them within original array context.
```
function print(a, b, c) {
    console.log(a, b, c);
}
let z = [1, 2, 3];
print(...z);
```
 => On console 1,2,3

- It can aslo be used as argument of a function -
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