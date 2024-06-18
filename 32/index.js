// Array of current users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
//Array of new users
var new_users = ["hamza", "ayesha", "Ali", "Mahad", "Areeba"];
//loop through new-users to check for username avaiablity
new_users.forEach(function (new_one_user) {
    //making a condition for username already exits and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different messages using if-else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, ",is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
