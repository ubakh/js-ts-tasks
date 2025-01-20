/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let millisInOneDay = 1000 * 60 * 60 * 24;
  let target: Date;
  if (typeof targetDate === 'string') {
    target = new Date(targetDate.split('.').reverse().toString());
  } else {
    target = targetDate;
  }

  let newYear = new Date(2024, 0, 1, 0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  let distance = Math.abs(newYear.getTime() - target.getTime());
  return Math.floor(distance / millisInOneDay);
};
