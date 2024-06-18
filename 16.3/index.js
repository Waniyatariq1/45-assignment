var guestArr = ["Moiz", "Ammar", "Rayaan", "Wajahat"];
var middleGuest = "Fatima";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
