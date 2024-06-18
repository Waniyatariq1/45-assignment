var guests = ["Ali", "Bilal", "carry", "Dawood", "Humza"];
console.log("Due to limited space , only two people can be invited for dinner");
//resolving guests until only two names remain//
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry , ".concat(removedGuest, ", you are no longer invited to dinner"));
}
console.log("invitation to the last two guest");
//printing invitations to the remaining two guuests //
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are still invited to dinner"));
});
//removing the last two names from the list //
guests.pop();
guests.pop();
// printing the final list to confirming its empty //
console.log("Final guest list:", guests);
