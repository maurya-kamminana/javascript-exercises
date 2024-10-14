const repeatString = function(str, numRepetitions) {
    if(numRepetitions < 0) return 'ERROR';
    if(numRepetitions === 0) return '';
    let result = '';
    while(numRepetitions--){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
