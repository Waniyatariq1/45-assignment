// define a function with a rest parameter that accept items arguments representing our sandwich //
function makeSandwich(...items : string[])
{
console.log("Making a sandwich the following  items : \n")
items.forEach(singleItem => console.log(singleItem));
console.log("\nNow Enjoy Sandwich\n");
}

// call the function 3 times different number of orguments
makeSandwich("Chicken","Cheese","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","mayo","Egg","Cheese","Chicken","Lettuce","Tomato");