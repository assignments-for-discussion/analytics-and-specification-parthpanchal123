function average(numbers) {
  numbers = numbers.filter((number) => !isNaN(number));

  return numbers.reduce((p, c) => p + c, 0) / numbers.length;
}


module.exports = {average};
