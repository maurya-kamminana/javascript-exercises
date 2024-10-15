function roundoff(val){
  return Math.round(val*10)/10;
}

const convertToCelsius = function(tempInF) {
  return roundoff((tempInF-32)*5/9);
};

const convertToFahrenheit = function(tempInC) {
  return roundoff((tempInC*9/5)+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
