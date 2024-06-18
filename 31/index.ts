let userNames = ["Maahad","Ali","Zeeshan","ADmin","Usman"];
 userNames =[];

 //If statement for checking length of our  array is empty

if(userNames.length === 0){
    console.log("your Array in Empty Me need to find some users");
    }
else 
{
    // if array is not empty use ForEach loop onArray
userNames.forEach(oneUser => {
    if ( oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report ?`);
    
    }
     else
    {
    console.log(`Hello ${oneUser},thank you for logging in again.`);
    }
    })  
    
}
