const reverseString = function(str) {
    j = str.length - 1;
    let result = '';
    while(j >= 0){
        result += str[j];
        j--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
