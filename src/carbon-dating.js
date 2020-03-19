const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity === undefined) {
    return false;
  }

  if(typeof(sampleActivity) != "string") {
    return false;
  }

  let number = Number.parseFloat(sampleActivity);

  if(isNaN(number)) {
    return false;
  }

  if(number <= 0 || number >= 15) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / number) / k);

  return age;
};
