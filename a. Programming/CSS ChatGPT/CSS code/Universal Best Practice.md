```css
/* ================= UNIVERSAL BEST PRACTICES ================= */

/* 1. Global Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  box-sizing: inherit;
}

/* 2. Root Variables (For Theme Consistency) */
:root {
  --primary-color: #007bff;
  --primary-dark: #0056b3;
  --background-color: #f4f4f4;
  --container-bg: white;
  --text-color: #333;
  --border-radius: 10px;
  --shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 3. Base Styles */
html {
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow-x: hidden;
  min-height: 100vh;
  height: 100dvh;
}

/* 4. Responsive Defaults */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

/* 5. Ensure Images & Media Are Responsive */
img, video, iframe, canvas {
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* 6. Remove Default List Styles */
ul, ol {
  list-style: none;
}

/* 7. Remove Default Link Styles */
a {
  text-decoration: none;
  color: inherit;
}

/* 8. Accessibility Enhancements */
:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 3px;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
}

:focus-visible {
  outline: 2px solid var(--primary-dark);
}

/* 9. Improved Scrollbar (Minimal but Visible) */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

/* 10. Reset Buttons & Inputs */
button {
  all: unset;
  display: inline-block;
  font: inherit;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  transition: background 0.3s ease;
}

input, textarea, select {
  font: inherit;
  border: none;
  outline: none;
  background: none;
}

/* ================= END UNIVERSAL BEST PRACTICES ================= */

```