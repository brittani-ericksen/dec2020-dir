// named function
function logToConsole(argument) {
    console.log(argument);
}

// immediately invoked function expression
// IIFE
(function () {
    const foo = "Foo";
    logToConsole(foo);
})();