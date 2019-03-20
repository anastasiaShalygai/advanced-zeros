module.exports = function getZerosCount(number, base) {
  let numberOfZeros = number;
  let primeNumber = base;

  for (let i = 2; i <= base; i++) {
    if ( primeNumber % i === 0) {
      let count = 0;
      while ( primeNumber % i === 0) {
        primeNumber /= i;     
        count++;
      }

      let power = 0;
      let remainder  = Math.floor(number / i);
      while (remainder  > 0) {
        power += remainder ;
        remainder  = Math.floor(remainder / i);
      }
      numberOfZeros = Math.min(numberOfZeros, Math.floor(power / count))
    }
  }

  return numberOfZeros;
}