// A function can be defined as a reusable block of code that performs a specific task when you call it

// 1. Normal function

function greet(){
    console.log("hello, everyone");
}

greet();

// 2. Function expression

const greetWell = function (){
    console.log("omo, hello");
}

greetWell();

// 3. Arrow function

const hello = () => {
    console.log("hello, this is arrow");
}

hello()

// 4. Anonymous function

setTimeout(function () {
    console.log("done");
}, 2000);

// 5. IIFE - immediately invoked function expression
(function (params){
    console.log("instantly");
})()

function anu(){
    console.log("hello Anu");
}

anu();

