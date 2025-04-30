Here is the full detailed summary of the transcript from the video **"Basic Arithmetic in Python"** using Jupyter Notebook:

---

### 🎯 **Goal of the Video**

- Learn how to use Python to perform **basic arithmetic operations**, treating Python as a **calculator**.
    
- Demonstrate this using **Jupyter Notebook**.
    

---

### 🖥️ **Getting Started in Jupyter Notebook**

- Open a new notebook.
    
- Click inside a code cell.
    
- Write arithmetic expressions like you would on a calculator.
    

#### Example:

- `4 + 5` → Output: `9`
    
- Use `Ctrl + Enter` to run the code and display the result in the same cell.
    
- Modify inputs as desired (e.g. change `5` to `8`) and re-run.
    
- Use `Shift + Enter` to both **run the code** and **open a new input cell** below.
    

---

### ➕ **Addition**

- You can add more than two numbers in one line:
    

```python
4 + 1 + 5  # Output: 10
```

---

### ➖ **Subtraction**

- Uses the minus `-` sign:
    

```python
5 - 3  # Output: 2
```

- Spacing does **not** affect calculation:
    
    - `5-3`, `5 -3`, `5 - 3` → All work the same.
        
- However, **spacing becomes important** in other Python structures (e.g., `if`, `for`), but **not** here.
    

---

### ✖️ **Multiplication**

- **Incorrect:** `3 x 3` → Throws **SyntaxError**
    
- **Correct:** Use the asterisk `*` instead:
    

```python
3 * 3  # Output: 9
```

---

### ➕➖✖️ **Mixing Operators**

- You can combine operations:
    

```python
3 * 3 + 1 - 5  # Output: 5
```

- Python follows **order of operations (PEMDAS)**:
    
    - `*` before `+`, `-`, unless overridden by **parentheses**.
        
    - So: `3 * 3 + 1` = `9 + 1 = 10`, then `10 - 5 = 5`
        

---

### ⚠️ **Order of Operations**

- Python uses the **standard math precedence rules**:
    
    1. Parentheses `()`
        
    2. Exponents `**`
        
    3. Multiplication `*` and Division `/`
        
    4. Addition `+` and Subtraction `-`
        

A separate video will go deeper into **overriding order with parentheses**.

---

### ➗ **Division**

- Use the **forward slash `/`**:
    

```python
3 / 4  # Output: 0.75
```

- **Wrong slash** (`\`) → Causes **SyntaxError**
    
- Think of it as writing a **fraction**: numerator `/` denominator
    

---

### 🧮 **Using Parentheses**

- Parentheses group expressions to **override default precedence**.
    

#### Example:

```python
1 + 3 / 4  # Output: 1.75 (Python evaluates 3 / 4 first, then adds 1)
```

```python
(1 + 3) / 4  # Output: 1.0 (Python adds 1 + 3 first, then divides)
```

- Use spacing around operators and parentheses for better readability.
    

---

### 🧠 **Exercises**

#### Exercise 1:

```python
5 - (2 / 4 * (3 / 5))  # Output: 4.7
```

#### Exercise 2:

```python
4 - 5 / (3 + 5 * 6)  # Output: ≈ -0.030303...
```

- Without parentheses in the denominator, the order of operations would be wrong.
    
- Must **wrap the full denominator** `(3 + 5 * 6)` in parentheses to ensure correct grouping.
    

---

### 📌 **Key Takeaways**

- Python can be used as a calculator using:
    
    - `+` for addition
        
    - `-` for subtraction
        
    - `*` for multiplication
        
    - `/` for division
        
- **Syntax matters**: e.g., use `*` not `x`, and use `/` not `\`.
    
- **Parentheses** help control **order of operations**.
    
- Spaces don’t matter for arithmetic, but will for control structures later.
    
- The output is shown directly below the input when using `Ctrl + Enter` or `Shift + Enter`.
    

---

### 🔜 **Next Step**

- Learn to use **variables** instead of numbers.
    
- This will **level up** how you do arithmetic and represent expressions in Python.
    

Let me know if you want this in LaTeX, Markdown, or exported for use in Obsidian.