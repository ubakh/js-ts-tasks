/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  let x1 = firstPoint.X;
  let y1 = firstPoint.Y;

  let x2 = secondPoint.X;
  let y2 = secondPoint.Y;

  if (x1 === x2 && y1 === y2) {
    return 0;
  }
  // d=√((x_2-x_1)²+(y_2-y_1)²)
  let pow2 = 2;
  let distance = Math.sqrt(Math.pow(x2 - x1, pow2) + Math.pow(y2 - y1, pow2));
  return distance.toFixed(2) * 1;
};
