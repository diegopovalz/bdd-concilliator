const compareEquals = (a, b) => b.every((arr2Item) => a.includes(arr2Item));

const getDifference = (a, b) => b.filter((x) => !a.includes(x));

module.exports = {
  compareEquals,
  getDifference,
};
