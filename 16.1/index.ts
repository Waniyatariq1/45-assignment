let guestArr:string[] = ["Ammar","Haseeb","Wajahat"];
let cannotAttend:string="Haseeb";
let newGuest:string = "Rayaan";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items)=>
console.log(`Dear ${items}, I found a bigger dinner table so  I am invited more peoples.`));
