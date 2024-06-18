//define a function to creat a car object with optional options..
function create_car(manufacturer,model,...options){
// initialize a car object with manufacturer and model
let car = {
    manufacturer : manufacturer,
    model : model
};
// add additional options to the car object 
options.forEach(option=> {
    let[key,value]= option.split(":");
    car[key .trim()] = value.trim();

})
return car;
}
// call the  to creat a car  object
let my_car = create_car("Toyota","Carola","Color: Black","Sunroof:True","Year:2024");


console.log(my_car);