def balance_parens(string):  # TODO disgusting
    """
    This function returns all substrings which are balanced within the given string.

    Args:
        string (str): A string possibly containing parenthesis.

    Returns:
        str: A string containing all substrings which are balanced within the given string.
    """

    stack, result = 0, str()
    slow, fast = 0, 0

    while slow < len(string):
        # if fast pointer out of bounds, reset stack and set pointers to slow + 1
        if fast > len(string) - 1:
            stack = 0
            fast = slow = slow + 1
            continue

        # if c is ( increment the stack
        if string[fast] == "(":
            stack += 1
        elif string[fast] == ")":
            # if c is ) and there's no matching parenthesis, reset stack and set pointers to fast + 1
            if stack == 0:
                fast = slow = slow + 1
                continue

            stack -= 1

            # if this ) emptied the stack, append the valid substring to the result
            #     and set pointers to fast + 1
            if stack == 0:
                result += string[slow:fast + 1]
                slow = fast = fast + 1
                continue
        
        # capture characters outside of valid parenthesis
        elif stack == 0:
            result += string[fast]
            slow = fast = fast + 1
            continue

        fast += 1

    return result
