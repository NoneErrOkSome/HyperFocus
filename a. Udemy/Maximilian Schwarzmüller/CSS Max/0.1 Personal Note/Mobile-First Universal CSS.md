Here is a **complete, production-ready universal CSS base** that follows **mobile-first, responsive, and modern best practices**, all in one clean file — **from smallest to largest screens**.

---

## ✅ Mobile-First Universal CSS Boilerplate

```css
/* ----------------------------------
   1. Universal Reset (Normalize base)
---------------------------------- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ----------------------------------
   2. Base HTML Setup
---------------------------------- */
html {
  font-size: 16px; /* base size for rem units */
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  background-color: #fff;
  color: #111;
  padding: 1rem;
}

/* ----------------------------------
   3. Media Elements Responsive
---------------------------------- */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* ----------------------------------
   4. Form Elements Normalize
---------------------------------- */
input, button, textarea, select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

/* ----------------------------------
   5. Layout Utility (Mobile-First)
---------------------------------- */
.container {
  width: 100%;
  padding: 1rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Responsive typography with clamp */
h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

/* ----------------------------------
   6. Responsive Scaling (Tablet + Desktop)
---------------------------------- */
@media (min-width: 600px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 900px) {
  html {
    font-size: 18px;
  }

  .container {
    max-width: 900px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
```

---

### ✅ What You Can Do Next:

- Put this in `base.css` or `reset.css`
    
- Link it in your HTML:
    
    ```html
    <link rel="stylesheet" href="base.css" />
    ```
    
- Start layering your layout, grid, or component styles on top
    

Would you like me to include a matching **HTML template** to test this with?d