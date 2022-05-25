let bp = require("./balanceParens");

test("should return string of valid substrings", () => {
  expect(bp.balanceParens("()")).toBe("()");
  expect(bp.balanceParens("a(b)c)")).toBe("a(b)c");
  expect(bp.balanceParens("(a)(bdd)c)")).toBe("(a)(bdd)c");
  expect(bp.balanceParens("a(dbvb)c)")).toBe("a(dbvb)c");
  expect(bp.balanceParens("a(b)(c)()")).toBe("a(b)(c)()");
  expect(bp.balanceParens(")(")).toBe("");
  expect(bp.balanceParens("(((((")).toBe("");
  expect(bp.balanceParens(")(())(")).toBe("(())");
  expect(bp.balanceParens("(()()(")).toBe("()()");
  expect(bp.balanceParens(")())(()()(")).toBe("()()()");
  expect(bp.balanceParens("abc(d)e(fgh))(i)j)k")).toBe("abc(d)e(fgh)(i)jk");
  expect(bp.balanceParens("abc((d)e(fgh)(i)j(k")).toBe("abc(d)e(fgh)(i)jk");

  // # Challenge: nested parentheses...
  expect(bp.balanceParens(")(())(")).toBe("(())");
  expect(bp.balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p")).toBe("abc(d)(ef(g(h))ij)klm()op");
});
