// making function
function make_shirt(size : string = " Large", printMessage : string = " I LOVE TYPE SCRIPT")
{
    console.log (`Creating a ${size} shirt with the ${printMessage} print on shirt`);

}
// calling a function with by default values
make_shirt();


// calling a function now with Medium size and default message//
make_shirt ("Medium");

// calling a function with small size and also diffrent print message//
make_shirt("Small","I LOve Java SCript");