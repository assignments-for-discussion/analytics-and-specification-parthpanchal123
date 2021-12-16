function average(numbers) {
  // considering 45 as the max temperature and 1 as the min temperature
  numbers = numbers.filter((number) => !isNaN(number)&&
  (number < 45 && number >= 1));
  return numbers.reduce((p, c) => p + c, 0) / numbers.length;
}


module.exports = {average};
