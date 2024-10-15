const sumAll = function(s, e) {
    if(s < 0 || e < 0) return "ERROR";
    if(typeof s !== "number" || typeof e !== "number") return "ERROR";
    if(!Number.isInteger(s) || !Number.isInteger(e)) return "ERROR";
    if(s > e) [s,e] = [e,s];

    function sumN(val){
        return val * (val + 1) / 2;
    }

    let sum = 0;
    sum = sumN(e) - sumN(s-1);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
