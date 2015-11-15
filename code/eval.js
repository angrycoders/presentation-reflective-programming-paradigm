
// evaluate a string, into a reference (to a variable)
eval("var i = 55");


// you can now reference the variable, as if it were
// declared outside the `eval` expression
console.log("var i = " + i);


// evaluate a string, into a function invocation
function func() {
    console.log("invoked");
}


// this is almost the same as `func()`
eval("func()");

