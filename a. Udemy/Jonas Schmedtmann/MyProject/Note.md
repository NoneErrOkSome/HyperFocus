

**Starred Blocks:**

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>

<main>
    <body>
        <nav class="navbar">
            <div class="navbar__container">
                <ul class="nav_links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                <div class="logo">
                    My Logo
                </div>

                <div class="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </nav>
    </body>
</main>

</html>
```

```css
*, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.logo {
    position: absolute; /* Position the logo absolutely */
    left: 50%; /* Move it to the horizontal center */
    transform: translateX(-50%); /* Center it perfectly */
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}

.logo:hover {
    color:#007bff;
}

.navbar {
    position: relative;
    background-color: #f2f2f2;
    padding: 1rem; /* Add padding for better spacing */
    border-bottom: 1px solid #ddd; /* Add a subtle border for separation */
}

.navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Ensure items are vertically aligned */
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem; /* Add horizontal padding for responsiveness */
}

.nav_links {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav_links a {
    text-decoration: none;
    color: #333; /* Add a default color for links */
    font-weight: 500; /* Slightly bold for better readability */
   transition : color 0.3s ease ;/* Smooth transition for hover effect */

} 

.nav_links a:hover { 
   color :#007BFF ;/* Add hover effect for better interactivity */ 
}
```

---