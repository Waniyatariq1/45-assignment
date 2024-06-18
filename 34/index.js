// creating array
var pizza = ["Chicken TIka ", "Malai Cheese", "Fajita"];
//using for =-loop//
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
// print a message outsite of the for-loop
console.log("Pizza is love");
console.log("I eat Pizza");
