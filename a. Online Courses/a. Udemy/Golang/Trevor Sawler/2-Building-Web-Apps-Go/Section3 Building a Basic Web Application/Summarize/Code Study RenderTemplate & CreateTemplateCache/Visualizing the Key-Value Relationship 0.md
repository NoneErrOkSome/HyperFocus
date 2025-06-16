Let's visualize the entire `CreateTemplateCache` function and how it works behind the scenes. The goal of this function is to gather all the templates from the directory, parse them, and store them in a map (`templateCache`) where each template is associated with a key (the template file name).

Here’s a step-by-step breakdown of the process, followed by an imaginary visualization:

### Process:

1. **Step 1:** 
   - The function creates an empty map (`templateCache`) that will store the parsed templates.
   - Key: The template's file name (e.g., `home.page.gohtml`).
   - Value: The parsed template object.

2. **Step 2:** 
   - The function uses `filepath.Glob()` to get all files ending with `*.page.gohtml` (e.g., `home.page.gohtml`, `about.page.gohtml`).
   - These files are considered **page templates**.

3. **Step 3:** 
   - For each page template found:
     - It extracts the file name (e.g., `home.page.gohtml` becomes `home.page.gohtml` as `templateName`).
     - It creates a new template with `template.New(templateName)` and parses the file with `ParseFiles(pageFile)` (i.e., `home.page.gohtml`).

4. **Step 4:** 
   - The function uses `filepath.Glob()` again to find all layout files (`*.layout.gohtml`).
   - If any layout files are found, they are parsed and associated with the current page template using `parsedTemplate.ParseGlob()`.

5. **Step 5:** 
   - The parsed template (now including both the page and layout, if any) is added to the `templateCache` map with the page file name (`templateName`) as the key.

6. **Step 6:** 
   - Once all templates are processed, the map (`templateCache`) is returned.

---

### Visualization:

Let’s imagine this function is like organizing books on a shelf, where each book represents a parsed template and the title on the spine is the `templateName`.

**1. Initialize an empty map (bookcase):**

```
templateCache = {}
```

**2. Get all page templates (find books by a certain pattern, `*.page.gohtml`):**

Let’s say we have three page templates:
- `home.page.gohtml`
- `about.page.gohtml`
- `contact.page.gohtml`

Each of these pages will be parsed.

**3. Parse each page template and associate it with a layout (optional):**

For each page template, you create a new parsed template object. If there’s a layout (like a cover or a common header in all books), it will also be included.

- **home.page.gohtml:** 
    - Finds a layout (`base.layout.gohtml`) and parses both together.
    - Stored in the `templateCache` map as:
      ```
      "home.page.gohtml" -> parsedTemplateObjectForHome (with layout)
      ```

- **about.page.gohtml:**
    - Finds the layout and parses both.
    - Stored in the `templateCache` map as:
      ```
      "about.page.gohtml" -> parsedTemplateObjectForAbout (with layout)
      ```

- **contact.page.gohtml:**
    - Finds the layout and parses both.
    - Stored in the `templateCache` map as:
      ```
      "contact.page.gohtml" -> parsedTemplateObjectForContact (with layout)
      ```

**4. Final result in the `templateCache` map (our organized bookshelf):**

```
templateCache = {
    "home.page.gohtml": parsedTemplateObjectForHome (with layout),
    "about.page.gohtml": parsedTemplateObjectForAbout (with layout),
    "contact.page.gohtml": parsedTemplateObjectForContact (with layout),
}
```

Each key is the template’s file name (`templateName`), and the value is the corresponding parsed template object (`parsedTemplate`), ready to be used to render the page.

The map holds all the templates, meaning that when the application runs, it doesn’t have to re-read or re-parse the files from disk; it just pulls the templates from this cache (like grabbing a book from the shelf).