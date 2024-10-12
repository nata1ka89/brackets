module.exports = function check(str, bracketsConfig) {
  const array = [];
  const bracketsPair = bracketsConfig.reduce((acc, pair) => {
    const [open, close] = pair;
    acc[close] = open;
    return acc;
  }, {});
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === '|' && array[array.length - 1] === '|') {
      array.pop();
    } else if (bracketsPair[currentChar] && array[array.length - 1] === bracketsPair[currentChar]) {
      array.pop();
    } else {
      array.push(currentChar);
    }
  }
  if (array.length === 0) {
    return true;
  } else {
    return false;
  }
}
