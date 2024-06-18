var guestArr = ["Ammar", "Haseeb", "Wajahat"];
var cannotAttend = "Haseeb";
var newGuest = "Rayaan";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so  I am invited more peoples."));
});
