const sumAll = function (int1, int2) {
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR";
  }

  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  }
  let sum = 0;

  const start = Math.min(int1, int2);
  const end = Math.max(int1, int2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
