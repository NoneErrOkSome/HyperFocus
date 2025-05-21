Here’s a **structured summary of the 5 CSS Tips & Tricks for Better Responsive Web Design** from the video by Coding to Go:

---

## 🔹 Tip 1: **Relative Padding with `min()`**

**Problem**: Fixed padding (e.g. `5em`) is too large for mobile, too small for desktop.  
**Traditional Fix**: Media queries for different screen sizes.  
**Modern Fix**:  
Use the `min()` function to combine fixed and relative values:

```css
padding: min(5em, 8%);
```

✅ Automatically chooses the smaller value  
✅ One line, no media query needed

---

## 🔹 Tip 2: **Responsive Font Sizes with `clamp()` or `calc()`**

### 🔸 Problem:

- `vw` (viewport width) units scale font too much on ultra-wide screens
    
- Too small on mobile
    
- Not zoomable with browser zoom
    

### 🔸 Solution 1 – `clamp()`:

```css
font-size: clamp(1.8rem, 10vw, 5rem);
```

- **1.8rem**: Minimum
    
- **10vw**: Preferred scaling
    
- **5rem**: Maximum
    

### 🔸 Solution 2 – `calc()` mix with zoomable units:

```css
font-size: calc(7vw + 1rem);
```

- Allows both responsive scaling and browser zoom
    

---

## 🔹 Tip 3: **Responsive Images**

### 🔸 Problem:

- Images overflow screen
    
- `max-width: 100%` alone can stretch/distort images with fixed `width` & `height` attributes (used for SEO/CLS)
    

### 🔸 Solution:

```css
img {
  max-width: 100%;
  height: auto;
}
```

### 🔸 For consistent dimensions:

```css
img {
  aspect-ratio: 16 / 9;
  object-fit: cover; /* or `contain` */
}
```

- `cover`: Fills the area, may crop
    
- `contain`: Fits whole image, may leave gaps
    

---

## 🔹 Tip 4: **Fix Mobile `100vh` Bug with `dvh`**

### 🔸 Problem:

- `height: 100vh` doesn’t account for mobile browser UI (address bar, etc.)
    

### 🔸 Solution:

```css
height: 100vh;
height: 100dvh; /* Fallback + fix */
```

✅ `dvh` = "dynamic viewport height" adjusts for browser UI  
✅ Combine both for compatibility

---

## 🔹 Tip 5: **Accessible Hidden Elements with `inert`**

### 🔸 Problem:

- `display: none` disables transitions
    
- Alternatives (`opacity`, `position`) keep element in **accessibility tree** (screen readers, tab focus)
    

### 🔸 Solution:

```html
<div id="menu" inert></div>
```

```js
// In JS
menu.removeAttribute("inert");
menu.setAttribute("inert", "");
```

✅ Prevents interaction via keyboard/screen reader  
✅ Use for menus, modals, etc.

---

Would you like a printable cheat sheet or working demo for these tips?