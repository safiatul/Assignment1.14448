let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);