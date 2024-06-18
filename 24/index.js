var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["orange", "banana", "apple"];
//test for equality and inequality with string//
console.log(" Is apple is equal to apple");
console.log(apple == "apple");
console.log(" Is apple is not equal to apple");
console.log(apple != "apple");
// tests using lower case function//
console.log(" Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests//
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is equal to twenty?");
console.log(ten != twenty);
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
console.log("\nIs twenty  is less than 10y?");
console.log(twenty < 10);
// greater than or equal to//
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to//
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// using && (and)
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//  using  || (OR)
console.log("20  is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20  is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//  test whe"ther an item is include in arrary//
console.log("Is orange include in my fruits array");
console.log(fruits.includes("orange"));
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));
