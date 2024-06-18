var guestArr = ["Ali", "Haseeb", "Wajahat"];
var cannotAttend = "Ali";
console.log(cannotAttend, "cannot attend the dinner");
var newGuest = "Ammar";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner:"));
});
