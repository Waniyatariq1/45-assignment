
let guestArr : string[] = ["Moiz" ,"Ammar", "Rayaan" , "Wajahat"];
    let middleGuest : string = "Fatima";
let middleIndex = guestArr.length/3;
guestArr.splice(middleIndex,0,middleGuest);
console.log(guestArr);