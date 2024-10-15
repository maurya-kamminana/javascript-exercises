const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
