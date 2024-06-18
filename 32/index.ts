
// Array of current users
let current_users = ["Usman","Ali","Areeba","Zain","Osama"];

//Array of new users
let new_users = ["hamza","ayesha","Ali","Mahad","Areeba"];
//loop through new-users to check for username avaiablity
new_users.forEach(new_one_user => {
    
    //making a condition for username already exits and save in our_condition variable
    let our_condition = current_users.some(current_one_user=> current_one_user.toLowerCase()===new_one_user.toLowerCase())
    
    //print different messages using if-else statement
    if(our_condition)
        {
  console.log(`sorry ${new_one_user},is already taken!`)
}
 else {
     console.log(`This Username ${new_one_user} is available`)

}
    
})
