Here’s a complete list of **HTML Core Properties** (more accurately called **HTML Attributes and Core Concepts**) that are essential in modern web development, especially in **FANG-level** (Facebook, Amazon, Netflix, Google) applications.

They focus on performance, accessibility, SEO, semantics, maintainability, and interactivity — following **modern best practices**.

---

## ✅ 1. **Global Attributes (Core to All Elements)**

These can be applied to _most HTML elements_:

|Attribute|Best Practice / Use Case|
|---|---|
|`id`|Unique per page; used for targeting, linking, scripting|
|`class`|Reusable, used with CSS and JS frameworks|
|`style`|Avoid inline styles in production; use CSS instead|
|`title`|Use for tooltips and accessibility hints|
|`data-*`|Use `data-` attributes to store custom data (e.g. `data-user-id`)|
|`hidden`|Hide elements without CSS; often used conditionally in JS|
|`tabindex`|Manage keyboard navigation order|
|`aria-*`|Essential for accessibility (e.g. `aria-label`, `aria-hidden`)|
|`role`|Define the purpose of an element for screen readers|
|`lang`|Always set `<html lang="en">` or appropriate language|

---

## ✅ 2. **Document-Level Essentials**

|Tag / Attribute|Best Practice|
|---|---|
|`<!DOCTYPE html>`|Always include it to trigger standards mode|
|`<html lang="en">`|Set language correctly for accessibility and SEO|
|`<head>` / `<meta>`|Use `<meta charset="UTF-8">`, `<meta name="viewport">` for responsive design|
|`<title>`|Descriptive, unique per page|
|`<meta name="description">`|Improve SEO and preview in search engines|
|`<link rel="canonical">`|Prevent duplicate content issues|

---

## ✅ 3. **Structural / Semantic Tags**

FANG-level applications prioritize **semantic HTML** for maintainability and accessibility:

|Tag|Use|
|---|---|
|`<header>`|Top of the page or section header|
|`<nav>`|Main or in-page navigation|
|`<main>`|Primary content of the page|
|`<section>`|Thematic grouping of content|
|`<article>`|Self-contained content (e.g., blog post, product card)|
|`<aside>`|Sidebar or additional info|
|`<footer>`|Page or section footer|
|`<h1>` to `<h6>`|Maintain a logical, hierarchical structure|
|`<div>`|Avoid unless no semantic alternative exists|
|`<span>`|For inline styling or JS targeting|

---

## ✅ 4. **Interactive / Input Elements**

|Element|Best Practice|
|---|---|
|`<button>`|Always use `<button>` over clickable `<div>` or `<span>`|
|`<input>`|Use correct `type` (`text`, `email`, `tel`, etc.)|
|`<label for="id">`|Connect to form inputs for accessibility|
|`<form>`|Always wrap related inputs; enable keyboard submission|
|`<fieldset>` & `<legend>`|Group related inputs, especially for accessibility|
|`<select>`, `<option>`|Use for dropdowns, always label them|
|`required`, `readonly`, `disabled`, `autofocus`, `autocomplete`|Use as needed for UX and accessibility|

---

## ✅ 5. **Media Elements**

|Element|Best Practice|
|---|---|
|`<img>`|Always use `alt` for accessibility; use responsive image techniques (`srcset`, `sizes`)|
|`<picture>`|For art direction and responsive images|
|`<video>`, `<audio>`|Use `controls`; include fallback content|
|`loading="lazy"`|Lazy load non-critical images for performance|

---

## ✅ 6. **Linking and Navigation**

|Element / Attribute|Best Practice|
|---|---|
|`<a href="#">`|Use only for real links, not buttons|
|`target="_blank"`|Add `rel="noopener noreferrer"` for security|
|Internal Routing|Use framework-based routing (`<RouterLink>` in Angular/React) but fallback to `<a>` with proper URLs for SEO|
|Anchor Navigation|Use `id` targets with accessible content|

---

## ✅ 7. **Performance & SEO Attributes**

|Attribute|Best Practice|
|---|---|
|`loading="lazy"`|Lazy load non-critical images or iframes|
|`rel="preload"`|Preload important resources (fonts, hero images)|
|`rel="prefetch"`|Preload likely-next resources|
|`meta name="robots"`|Control indexing, e.g. `noindex`, `nofollow`|

---

## ✅ 8. **Security / UX Considerations**

|Attribute|Best Practice|
|---|---|
|`rel="noopener noreferrer"`|Prevent tab-napping on external links|
|`autocomplete="off"`|For sensitive fields (e.g., credit cards)|
|`inputmode`|Optimize mobile keyboard (e.g., `numeric`)|
|`type="email"` / `type="tel"`|Validate and optimize mobile UI|

---

## 🔒 Bonus: FANG-Level Extra Practices

- Use **BEM naming convention** with `class` for maintainable CSS.
    
- Always test with **screen readers** and **keyboard navigation**.
    
- Optimize **Core Web Vitals**: lazy loading, semantic markup, responsive `<img>`, fast initial load.
    
- Use **framework-friendly structures** (React/Angular components map cleanly to semantic tags).
    

---

Would you like me to generate a folder structure for organizing HTML + CSS files with these best practices (including templates, readmes, and boilerplate)?