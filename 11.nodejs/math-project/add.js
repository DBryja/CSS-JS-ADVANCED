const addNumber = (...numbers) => {
  console.log(numbers.reduce((sum, value) => sum + value));
};

module.exports = addNumber;
