/**
 * This function returns all substrings which are balanced within the given string.
 *
 * @param {String} string A string possibly containing parenthesis.
 * @returns {String} A string containing all substrings which are balanced within the given string.
 */
const balanceParens = (string) => {
  // TODO disgusting
  let stack = 0;
  let result = "";

  let slow = 0;
  let fast = 0;

  while (slow < string.length) {
    if (fast > string.length - 1) {
      stack = 0;
      slow++;
      fast = slow;
      continue;
    }

    if (string[fast] === "(") {
      stack++;
    } else if (string[fast] === ")") {
      if (stack === 0) {
        slow++;
        fast = slow;
        continue;
      }

      stack--;

      if (stack === 0) {
        result += string.substring(slow, fast + 1);
        fast++;
        slow = fast;
        continue;
      }
    } else if (stack === 0) {
      result += string[fast];
      fast++;
      slow = fast;
      continue;
    }

    fast++;
  }

  return result;
};

module.exports = { balanceParens };
