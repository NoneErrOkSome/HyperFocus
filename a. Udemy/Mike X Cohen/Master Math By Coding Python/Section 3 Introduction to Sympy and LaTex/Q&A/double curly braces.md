Excellent question — and you're asking about something **very important** in Python + LaTeX + f-string formatting:

---

## 🧠 Why use `\text{{...}}` with **double curly braces**?

### ✅ Quick Answer:

> In Python f-strings (like `f"..."` or `fr"..."`), we use **`{{` and `}}`** to mean **a literal `{` or `}`**.

---

### 🔍 Problem:

If you write this in an f-string:

```python
f"\text{With } x = {i}"
```

Python thinks:

- `{i}` → a variable ✅
    
- `\text{With }` → ❌ Python gets confused!  
    It tries to interpret `With }` as code!
    

---

### ✅ Solution:

Escape the curly braces **meant for LaTeX** by doubling them:

```python
fr"\text{{With }} x = {i}"
```

This tells Python:

- `{{` → print a literal `{`
    
- `}}` → print a literal `}`
    

So the final LaTeX string becomes:

```
\text{With } x = -2
```

---

## ✅ Summary Table:

|What you want in LaTeX|What to write in f-string|
|---|---|
|`\text{Hello}`|`fr"\text{{Hello}}"`|
|`\frac{a}{b}`|`fr"\frac{{a}}{{b}}"`|
|`{i}` as a variable|`{i}`|

---

Let me know if you want a mini cheat sheet for **LaTeX inside f-strings**!