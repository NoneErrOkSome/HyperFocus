**`inline-block`** combines characteristics of both **inline** and **block** elements:

### **Behavior of `inline-block`**

1. **Inline Behavior:**
    
    - Elements with `inline-block` can sit next to each other on the same line, like inline elements.
    - They only take up as much horizontal space as their content or defined width.
2. **Block Behavior:**
    
    - You can apply block-level properties such as top and bottom margins, padding, and width/height.
    - The element retains a box model, making it possible to style it fully.

### **Use Cases**

- Aligning multiple elements (e.g., navigation items, buttons) in a horizontal row.
- Maintaining block-level styling capabilities while preserving inline layout.

### **Example**

```html
<style>
  .nav-item {
    display: inline-block;
    margin: 10px;
    padding: 10px 15px;
    background-color: lightblue;
    border: 1px solid gray;
  }
</style>

<nav>
  <div class="nav-item">Home</div>
  <div class="nav-item">About</div>
  <div class="nav-item">Contact</div>
</nav>
```

**Output:** The navigation items align horizontally, with margins and padding applied like block elements.