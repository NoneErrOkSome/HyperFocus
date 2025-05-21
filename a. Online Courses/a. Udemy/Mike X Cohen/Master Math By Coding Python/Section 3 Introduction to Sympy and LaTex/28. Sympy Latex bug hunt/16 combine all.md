## 🐛 SymPy Bug Hunt – Full Debugging Walkthrough (Parts 1–14)

---

### 🧩 Part 1 – Missing Imports: Fixing `sym` and `Math` Not Defined

**Problem:**

- `sym` not defined → `import sympy as sym`
    
- `Math` not defined → `from IPython.display import display, Math`
    

**Fix:** Always place these at the top of your notebook:

```python
import sympy as sym
from IPython.display import display, Math
```

---

### 🧾 Part 2 – Converting SymPy Expressions to LaTeX Strings for `Math()`

**Problem:**

```python
display(Math(expr))  # TypeError: Math expects a string
```

**Fix:**

```python
display(Math(sym.latex(expr)))
```

`Math()` only accepts LaTeX strings.

---

### 🔧 Part 3 – Fixing Single vs Double Backslashes in LaTeX Strings

**Problem:** LaTeX formatting breaks due to single backslashes.

**Fix:** Use raw strings with double backslashes:

```python
display(Math(r'\\frac{1}{2} + \\sqrt{5}'))
```

---

### 🔢 Part 4 – String Concatenation vs Integer Addition

**Problem:**

```python
A = '3'; B = '4'; A + B  # ➜ '34'
```

**Fix:**

```python
A = 3; B = 4; A + B  # ➜ 7
```

Or convert strings:

```python
int(A) + int(B)
```

---

### ⚖️ Part 5 – Fixing `=` vs `==` vs `Eq()` in SymPy Equations

- `=` is assignment
    
- `==` is Python comparison
    
- Use `sym.Eq(lhs, rhs)` for symbolic equality:
    

```python
sym.Eq(4 * x, 2)
```

---

### ❓ Part 6 – Understanding Why `Eq(expr)` Returns Unevaluated Expression

**Problem:** `Eq(4*x, 2)` returns symbolic equality.

**Fix:** Substitute values first:

```python
x = 1/2
sym.Eq(4*x, 2)  # True
```

---

### 🔺 Part 7 – Displaying Power Expressions: Caret (`^`) vs Asterisk (`**`)

- `^` is XOR in Python
    
- `**` is correct for powers:
    

```python
x ** 2
```

- `sympify("x^2")` correctly parses `^` as power.
    

---

### 🖨️ Part 8 – Using `sym.init_printing()` vs `Math()` for Pretty Output

- `sym.init_printing()` + `display(expr)` → Quick, auto-format
    
- `display(Math(sym.latex(expr)))` → Full control, supports mixed text/math
    

---

### 🔍 Part 9 – How `sympify()` Interprets `^` and `**` Inside Strings

```python
sym.sympify("x^2") == sym.sympify("x**2")  # True
```

- Both produce x2x^2
    
- Safe to use either inside strings
    

---

### 🔁 Part 10 – Comparing `Eq(q, r)` and Interpreting LaTeX vs Python Code

```python
q = sym.sympify("x^2")
r = sym.sympify("x**2")
sym.Eq(q, r)  # True
```

- SymPy correctly equates both as x2x^2
    

---

### 🧨 Part 11 – Misuse of `sym.subs()` Instead of `expr.subs(...)`

**Problem:**

```python
sym.subs(x, 3)  # ❌ Invalid
```

**Fix:**

```python
expr = x**2 + 1
expr.subs(x, 3)  # ✅
```

---

### 🔤 Part 12 – Importance of Case Sensitivity in Variable Names (`Y` vs `y`)

**Problem:** `NameError: Y is not defined`

**Cause:** Python treats `Y` ≠ `y`

**Fix:** Be consistent with casing:

```python
y = sym.Symbol("y")
display(y**2)
```

---

### ✅ Part 13 – Verifying Simplified Outputs and Numeric Substitution

```python
x = sym.Symbol("x")
expr = sym.sqrt(x**2 - 5*x + 10)
result = expr.subs(x, 3).evalf()  # ➜ 2.0
```

- Confirms symbolic expressions produce expected numerical results
    

---

### 🧠 Part 14 – Final Thoughts on Debugging LaTeX, SymPy, and Python Integration

**Key Takeaways:**

- Always import first
    
- Use `sym.latex(...)` with `Math(...)`
    
- Use `subs(...)` correctly on expressions
    
- Know when to use `==`, `Eq(...)`, or `.evalf()`
    
- Use `init_printing()` for easier math previews
    
- Respect variable name casing
    

With this foundation, you’re ready to confidently debug symbolic math in Python.

---