var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//store the locations in an array//
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// print rthe array in its original order//
console.log("Original order :", placesToVisit);
// print the array in alphabetical order witout modifying the acual list //
console.log("Alphabetical order :", __spreadArray([], placesToVisit, true).sort());
//show that the array still in its orignal order
console.log("Original order after sorting :", placesToVisit);
//print the arrar in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order :", __spreadArray([], placesToVisit, true).sort().reverse());
//show thet the array is still in its original order//
console.log("Original ordeer of after reverse sorting :", placesToVisit);
//revrse the order of the list //
placesToVisit.reverse();
console.log("Reverse order :", placesToVisit);
//Reverse the order og the list again to get back to the original order//
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//sort the array in alphabetical order//
placesToVisit.sort();
console.log("Sorted in alphabetical :", placesToVisit);
//sort the array in reverse alphabetical order//
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
