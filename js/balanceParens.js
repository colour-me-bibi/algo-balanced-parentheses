/**
 * This function returns all substrings which are balanced within the given string.
 *
 * @param {String} string A string possibly containing parenthesis.
 * @returns {String} A string containing all substrings which are balanced within the given string.
 */
const balanceParens = (string) => {
  let stack = 0;
  let result = "";

  let slow = 0;
  let fast = 0;

  while (slow < string.length) {
    if (fast > string.length - 1) {
      stack = 0;
      fast = slow = slow + 1;
      continue;
    }

    switch (string[fast]) {
      case "(":
        stack++;
        break;
      case ")":
        if (stack === 0) {
          fast = slow = slow + 1;
          continue;
        }

        stack--;

        if (stack === 0) {
          result += string.substring(slow, fast + 1);
          slow = fast = fast + 1;
          continue;
        }
        break;
      default:
        if (stack === 0) {
          result += string[fast];
          slow = fast = fast + 1;
          continue;
        }
        break;
    }

    fast += 1;
  }

  return result;
};

module.exports = { balanceParens };
