const reverseString = function(string) {
    let array = string.split("");
    let returnString = "";
    for (let i = array.length - 1; i >= 0; i--) {
        returnString += array[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
