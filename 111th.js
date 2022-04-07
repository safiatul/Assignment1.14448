let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);

let wrongRegex = /kevin/;
wrongRegex.test(testStr);