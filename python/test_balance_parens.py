from balance_parens import balance_parens
import unittest


class TestBalanceParens(unittest.TestCase):
    def test_balance_parens(self):
        self.assertEqual(balance_parens("()"), "()")
        self.assertEqual(balance_parens("a(b)c)"), "a(b)c")
        self.assertEqual(balance_parens("(a)(bdd)c)"), "(a)(bdd)c")
        self.assertEqual(balance_parens("a(dbvb)c)"), "a(dbvb)c")
        self.assertEqual(balance_parens("a(b)(c)()"), "a(b)(c)()")
        self.assertEqual(balance_parens(")("), "")
        self.assertEqual(balance_parens("((((("), "")
        self.assertEqual(balance_parens(")(())("), "(())")
        self.assertEqual(balance_parens("(()()("), "()()")
        self.assertEqual(balance_parens(")())(()()("), "()()()")
        self.assertEqual(balance_parens("abc(d)e(fgh))(i)j)k"), "abc(d)e(fgh)(i)jk")
        self.assertEqual(balance_parens("abc((d)e(fgh)(i)j(k"), "abc(d)e(fgh)(i)jk")

        # Challenge: nested parentheses...
        self.assertEqual(balance_parens(")(())("), "(())")
        self.assertEqual(balance_parens("abc(d)(ef(g(h))ij)k)lm()o)p"), "abc(d)(ef(g(h))ij)klm()op")
