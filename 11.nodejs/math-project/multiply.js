const multiply = (...numbers) => {
  return numbers.reduce((sum, value) => sum * value);
};

// module.exports.multiply = multiply;
// module.exports.description = "mnożenie to działanie matematyczne...";

module.exports = {
  multiply,
  description: "mnożenie to działanie matematyczne...",
};
