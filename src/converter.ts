/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (from === to) {
    return value;
  }
  if (isDistance(from)) {
    return convertDistance(value, from);
  }
  if (isTemperature(from)) {
    return convertTemperature(value, from);
  }
  if (isWeight(from)) {
    return convertWeight(value, from);
  }
  throw new Error('not supported format');
};

function convertDistance(value: number, from: string): number {
  if ('m' === from.toLowerCase()) {
    return Number((value * 0.00062137).toFixed(2));
  }
  return Number((value * 1609.34).toFixed(2));
}

function isDistance(from: string) {
  return 'm' === from.toLowerCase() || 'mi' === from.toLowerCase();
}

function convertTemperature(value: number, from: string): number {
  if ('C' === from.toUpperCase()) {
    return Number((value + 273.15).toFixed(2));
  }
  return Number((value - 273.15).toFixed(2));
}

function isTemperature(from: string) {
  return 'C' === from.toUpperCase() || 'K' === from.toUpperCase();
}

function convertWeight(value: number, from: string): number {
  if ('gr' === from.toLowerCase()) {
    return Number((value * 0.0022).toFixed(2));
  }
  return Number((value * 453.592).toFixed(2));
}
function isWeight(from: string) {
  return 'gr' === from.toLowerCase() || 'pound' === from.toLowerCase();
}
