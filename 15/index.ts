let guestArr : string[]  = ["Ali","Haseeb","Wajahat"];
let cannotAttend : string = "Ali";
console.log(cannotAttend, "cannot attend the dinner");
let newGuest : string = "Ammar";
guestArr[guestArr.indexOf(cannotAttend)]= newGuest ;
console.log(guestArr);
guestArr.map((items)=>
console.log(`Dear ${items}, you are invited to the dinner:`));