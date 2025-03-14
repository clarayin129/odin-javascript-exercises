const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedString = string
    .toLowerCase()
    // split into array of characters
    .split('')
    // keep valid ones
    .filter((character) => alphanumerical.includes(character))
    .join('');

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
