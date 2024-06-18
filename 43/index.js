function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to magicians great through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names//
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// making a copy og original array through . slice() function
var copy_magician_names = magician_names.slice();
// modify the copy array to include " The Great " with their name //
var copy_great_magicians = make_great(copy_magician_names);
// show both array original and copied//
// original 
console.log("Original Array\n");
show_magicians(magician_names);
// copied
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
