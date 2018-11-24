/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {
  if (width < 2) {
    throw new Error('Error, minimun width is 2');
  }

  const output = [];
  const smallestStripeHeight = Math.round(Math.sqrt(width));
  const repeatCharByWidth = (char) => char.repeat(width);
  const piece = (rowNumber, columnNumber) =>
    rowNumber / smallestStripeHeight > 3 - columnNumber
      ? repeatCharByWidth('@') + ' '.repeat(smallestStripeHeight)
      : repeatCharByWidth(' ');

  for (let i = 0; i < 3 * smallestStripeHeight; i++) {
    output.push(`${ ' '.repeat(i % smallestStripeHeight) }${ piece(i + 1, 1) }${ piece(i + 1, 2) }${ repeatCharByWidth('@') }`);
  }

  return output.join('\n');
};
