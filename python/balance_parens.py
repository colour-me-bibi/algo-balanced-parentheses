def balance_parens(string):
    """
    This function returns the string composed of successive longest valid substrings within the given
    given string where a valid string contains matching parenthesis.

    Args:
        string (str): A string possibly containing parenthesis.

    Returns:
        str: A string containing all substrings which are balanced within the given string.
    """

    stack, result = 0, str()
    slow, fast = 0, 0

    # two pointer sliding window finding successive longest valid substrings
    while slow < len(string):
        if fast > len(string) - 1:  # if fast pointer out of bounds
            stack = 0               #   reset stack
            fast = slow = slow + 1  #   set pointers to slow + 1
            continue

        match string[fast]:
            case "(":
                stack += 1
            case ")":
                if stack == 0:              # if no matching "("
                    fast = slow = slow + 1  #   set pointers to slow + 1
                    continue

                stack -= 1

                if stack == 0:                          # if last paren popped
                    result += string[slow:fast + 1]     #   append valid substring
                    slow = fast = fast + 1              #   set pointers to fast + 1
                    continue
            case char if stack == 0:    # if char not a paren and outside of substrings
                result += char          #   char is valid substring, append to result
                slow = fast = fast + 1  #   set pointers to fast + 1
                continue

        fast += 1

    return result
