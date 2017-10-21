## Arrow Functions

`function () {...}` vs `() => {...}`

#### Benefits:
- Arrow functions are anonymous.
>Anonymous functions usually don't have a named identifier.
We declare them using operator rather than function keyword.


`Case 1`
> This function uses the function keyword inorder to declare, and uses 'blastoff' as keyname. We have named identifier 'blastoff' for this function.
```
function blastoff() {
    console.log('3.. 2.. 1.. blastoff!');
}

blastoff();
```
=> On console; 3.. 2.. 1.. blastoff!
_________________________________________________________________________________________________

`Case 2`
> This time we don't have a named identifier, hence its an anonyous function.

```
 setTimeout(function() {
     console.log('3...2...1... blastoff!')
}, 1000);
```
=> 3...2...1... blastoff!

This function runs this code after certain period of time, 1000ms (1 sec)

> In previous example, we used function keyword to declare, this time we're still using the keyword but not using the named identifier, so unlike previous example where we can call the function blastoff, setTimeOut is not the name of the function.

#### Refactoring into Arrow function -
```
setTimeout(() => {
     console.log('3...2...1... blastoff!')
}, 1000);
```

Another anonymous arrow function -
> This time set it to a variable name, so that we can have name of a function.

```
const blastoff = () => {
    console.log('3...2...1... blastoff!');
}

blastoff();
```
=> 3...2...1... blastoff!

_________________________________________________________________________________________________
_______________________________________________________________________________


## Arrow functions ignoring `this`

Benefits of arrow function -
- They don't bind their own `this` to the expression.
- Each function has its own scope, and `this` is an object within that function scope. The function then binds keys and values to the `this` object.

> Arrow functions don't create `this` object. They allow to bind to global `this` object.

Example -

All parts:

`this.a = 25; // declaring globally`

part 1:

```
let print = function() {
    console.log('this.a', this.a); // this.a undefined
    }
print();
```

part 2:
```
let print = function() {
    this.a = 50;
    console.log('this.a', this.a); // this.a 50
}
print();
```

part 3:
```
let arrowPrint = () => {
    console.log('this.a in arrowPrint', this.a); // this.a in arrowPrint 25
}
arrowPrint();
```

__________________________________________________________________________________________

#### Quiz

Create an anonymous arrow function, 'fire' that returns "bulls-eye". Consider using the 'eye' variable with a template string for ease.
```
let eye = "eye";

const fire = () => {
  return `bulls-${eye}`;
};
```
____________________________________________________________________________________________