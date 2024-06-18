function show_magicians(magicians : string[])
{
    magicians.forEach(name => console.log(name));
}
 
// function to magicians great through .map() it will modify array 
function make_great(magicians: string[] )
     {
   return magicians.map(name => `The Great ${name}`);
} 

// define an array of magicians names//
let magician_names = ["Harry Poter","Hamza","Usman"]

// making a copy og original array through . slice() function
let copy_magician_names = magician_names.slice()

// modify the copy array to include " The Great " with their name //
let copy_great_magicians = make_great(copy_magician_names);

// show both array original and copied//

// original 
console.log("Original Array\n");
show_magicians(magician_names);

// copied
console.log("Copied Array\n");
show_magicians(copy_great_magicians);