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
    // if fast pointer out of bounds, reset stack and set pointers to slow + 1
    if (fast > string.length - 1) {
      stack = 0;
      slow++;
      fast = slow;
      continue;
    }

    // if c is ( increment the stack
    if (string[fast] === "(") {
      stack++;
    } else if (string[fast] === ")") {
      // if c is ) and there's no matching parenthesis, reset stack and set pointers to slow + 1
      if (stack === 0) {
        slow++;
        fast = slow;
        continue;
      }

      stack--;

      // if this ) emptied the stack, append the valid substring to the result
      //     and set pointers to fast + 1
      if (stack === 0) {
        result += string.substring(slow, fast + 1);
        fast++;
        slow = fast;
        continue;
      }
    // capture characters outside of valid parenthesis and set pointers to fast + 1
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
