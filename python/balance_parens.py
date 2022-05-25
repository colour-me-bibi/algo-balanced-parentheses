def balance_parens(string):  # TODO disgusting
    """
    This function returns all substrings which are balanced within the given string.

    Args:
        string (str): A string possibly containing parenthesis.

    Returns:
        str: A string containing all substrings which are balanced within the given string.
    """

    stack, result = list(), str()
    slow, fast = 0, 0

    while slow < len(string):
        if fast > len(string) - 1:
            stack = list()
            fast = slow = slow + 1
            continue

        if string[fast] == "(":
            stack.append("(")
        elif string[fast] == ")":
            if stack and stack[-1] == "(":
                stack.pop()
                if not stack:
                    result += string[slow:fast + 1]
                    slow = fast = fast + 1
                    continue
            else:
                stack = list()
                fast = slow = slow + 1
                continue
        elif not stack:
            result += string[fast]
            slow = fast = fast + 1
            continue

        fast += 1

    return result
