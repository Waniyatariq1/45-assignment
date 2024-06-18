function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to magicians great through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names//
var magician_names = ["Harry Poter", "Hamza", "Usman"];
//calling function
var great_magicians = make_great(magician_names);
// call show_magicians that show modify list of magicians
show_magicians(great_magicians);
