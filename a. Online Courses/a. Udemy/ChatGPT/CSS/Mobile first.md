To apply the **mobile-first responsive design** concept to your current HTML and CSS, you would start with a simple layout optimized for mobile devices (e.g., a single-column layout) and progressively enhance it for larger screens (e.g., two-column layout). Here's how you can implement it:

---

### **Step 1: Mobile-First Base Layout**
For mobile devices, the layout should stack all elements vertically. This is the default layout without any media queries.

#### Updated CSS:
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr; /* Single column for mobile */
    grid-template-rows: auto 1fr auto; /* Navbar, content, footer */
    grid-template-areas:
        "navbar"
        "content"
        "footer";
    height: 100vh; /* Full viewport height */
}

.navbar {
    grid-area: navbar;
    background-color: #f2f2f2;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
}

.content {
    grid-area: content;
    padding: 2rem;
    background-color: #fff;
}

.footer {
    grid-area: footer;
    background-color: #f2f2f2;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #ddd;
}
```

#### Explanation:
- The `grid-template-columns: 1fr;` ensures all elements stack vertically in a single column.
- The `grid-template-areas` defines the layout for mobile:
  - Navbar at the top.
  - Content in the middle.
  - Footer at the bottom.

---

### **Step 2: Enhance for Larger Screens**
For larger screens (e.g., tablets and desktops), you can use media queries to create a two-column layout.

#### Updated CSS with Media Queries:
```css
@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
        grid-template-areas:
            "navbar navbar" /* Navbar spans both columns */
            "content sidebar" /* Content in the first column, sidebar in the second */
            "footer footer"; /* Footer spans both columns */
    }

    .content {
        grid-area: content;
        padding: 2rem;
        background-color: #fff;
    }

    .sidebar {
        grid-area: sidebar;
        padding: 2rem;
        background-color: #f9f9f9;
        border-left: 1px solid #ddd;
    }
}
```

#### Explanation:
- The `@media (min-width: 768px)` applies styles for screens wider than 768px.
- The `grid-template-columns: 1fr 1fr;` creates two equal-width columns.
- The `grid-template-areas` defines a new layout:
  - Navbar spans both columns.
  - Content occupies the first column.
  - Sidebar (if added) occupies the second column.
  - Footer spans both columns.

---

### **Step 3: Add Sidebar for Larger Screens**
You can add a sidebar to the HTML for larger screens.

#### Updated HTML:
```html
<div class="grid-container">
    <nav class="navbar">
        <div class="navbar__container">
            <ul class="nav_links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div class="logo">My Logo</div>
            <div class="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    </nav>
    <main class="content">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
    </main>
    <aside class="sidebar">
        <h2>Sidebar</h2>
        <p>This is the sidebar content.</p>
    </aside>
    <footer class="footer">
        <p>Footer Content</p>
    </footer>
</div>
```

---

### **Step 4: Responsive Navbar**
Ensure the navbar is responsive by stacking the links vertically on smaller screens and displaying them inline on larger screens.

#### Updated CSS for Navbar:
```css
.nav_links {
    display: flex;
    flex-direction: column; /* Stack links vertically for mobile */
    list-style: none;
    gap: 0.5rem;
}

@media (min-width: 768px) {
    .nav_links {
        flex-direction: row; /* Display links inline for larger screens */
        gap: 1rem;
    }
}
```

---

### **Final Layout Behavior**
1. **Mobile (Default)**:
   - Single-column layout.
   - Navbar links stack vertically.
   - No sidebar.

2. **Tablet/Desktop (768px and above)**:
   - Two-column layout.
   - Navbar spans both columns.
   - Content in the first column, sidebar in the second column.
   - Navbar links display inline.

This approach ensures a **mobile-first responsive design** that progressively enhances for larger screens. Let me know if you'd like further clarification or additional features!

Similar code found with 1 license type