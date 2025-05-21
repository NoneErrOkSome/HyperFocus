To **properly use HTML tags** for better organization, follow these modern best practices:

---

## 🧱 1. Use Semantic HTML Tags

Semantic tags clearly describe their purpose. This helps **browsers, developers, and screen readers** understand your layout.

|Purpose|Recommended Tag|
|---|---|
|Main container|`<main>`|
|Header section|`<header>`|
|Navigation links|`<nav>`|
|Article content|`<article>`|
|Section of content|`<section>`|
|Aside/sidebar|`<aside>`|
|Footer|`<footer>`|

✅ Example:

```html
<body>
  <header>Site Logo + Nav</header>
  <nav>Main Navigation</nav>
  <main>
    <article>
      <h1>Blog Post Title</h1>
      <p>Paragraph of text...</p>
    </article>
    <aside>Related links</aside>
  </main>
  <footer>Contact info</footer>
</body>
```

---

## 📦 2. Group Content Logically

Wrap related content in containers using:

- `<div>` for generic blocks (non-semantic)
    
- `<section>` for logically grouped content
    
- `<ul>` and `<ol>` for lists
    
- `<form>` for form controls
    

✅ Example:

```html
<section>
  <h2>Features</h2>
  <ul>
    <li>Fast</li>
    <li>Responsive</li>
    <li>Accessible</li>
  </ul>
</section>
```

---

## 🪧 3. Use Headings in Hierarchy

Use heading tags in order from `<h1>` to `<h6>`:

```html
<h1>Main Title</h1>
  <h2>Subsection</h2>
    <h3>Detail</h3>
```

Don’t skip heading levels for styling — use CSS for visual sizes, but keep semantic hierarchy intact.

---

## 🖼️ 4. Add Attributes Where Needed

- `alt=""` for images
    
- `href=""` for links
    
- `type=""` for inputs
    
- `lang="en"` for the root `<html>` tag
    

✅ Example:

```html
<img src="dog.jpg" alt="Golden Retriever playing in park" />
<a href="/about.html">About Us</a>
```

---

## 🔍 5. Indent for Readability

Use **2 or 4 spaces** per indentation level consistently:

```html
<main>
  <section>
    <h2>About</h2>
    <p>We make cool websites.</p>
  </section>
</main>
```

---

Want me to give you a **challenge or template** to practice using these guidelines?