
This function `createTemplateCache()` creates a cache of templates from files located in a `./templates` directory. Here is a step-by-step explanation of what the function does:

### 1. Initialize the `templateCache`
```go
templateCache := map[string]*template.Template{}
```
- The function starts by initializing an empty map called `templateCache`. This map is used to store the parsed templates.
- The map's key is a string representing the template name (such as `home.page.gohtml`), and the value is a pointer to the parsed `template.Template` object.

### 2. Get all `*.page.gohtml` files
```go
pageFiles, _ := filepath.Glob("./templates/*.page.gohtml")
```
- The function then uses `filepath.Glob()` to get all files in the `./templates` directory that match the pattern `*.page.gohtml` (e.g., files like `home.page.gohtml`, `about.page.gohtml`).
- These files represent individual pages.
- The function ignores any error returned by `filepath.Glob()`, denoted by the `_`.

### 3. Loop through each page file
```go
for _, pageFile := range pageFiles {
```
- The function then loops through each file found in the previous step.
- Each `pageFile` is the full path to a template file (e.g., `./templates/home.page.gohtml`).

### 4. Get the base file name
```go
pageName := filepath.Base(pageFile)
```
- Inside the loop, it uses `filepath.Base()` to extract the base file name (e.g., `home.page.gohtml` from `./templates/home.page.gohtml`).
- This base name is used as the key in the `templateCache` map.

### 5. Parse the page template
```go
parsedTemplate, _ := template.New(pageName).ParseFiles(pageFile)
```
- It creates a new `template.Template` using the base name (e.g., `home.page.gohtml`) and parses the corresponding template file (e.g., `./templates/home.page.gohtml`).
- The function ignores any errors that may occur during this parsing step (`_` is used to discard the error).

### 6. Get all layout files
```go
layoutFiles, _ := filepath.Glob("./templates/*.layout.gohtml")
```
- After parsing the page template, the function attempts to get any layout files in the directory that match the pattern `*.layout.gohtml` (e.g., `base.layout.gohtml`).
- Layout files are used to define common structures (headers, footers, etc.) that can be applied to multiple pages.

### 7. Parse the layout templates if they exist
```go
if len(layoutFiles) > 0 {
    parsedTemplate, _ = parsedTemplate.ParseGlob("./templates/*.layout.gohtml")
}
```
- If layout files are found (`len(layoutFiles) > 0`), the function uses `parsedTemplate.ParseGlob()` to associate the layout files with the current page template.
- This allows the page templates to use layout files as part of their structure.
- Again, any errors returned by `ParseGlob()` are ignored.

### 8. Store the parsed template in the cache
```go
templateCache[pageName] = parsedTemplate
```
- After parsing both the page and the layout templates, the function stores the parsed template in the `templateCache` map.
- The key is the `pageName` (e.g., `home.page.gohtml`), and the value is the parsed `template.Template`.

### 9. Return the cache
```go
return templateCache
```
- Finally, the function returns the `templateCache` map, which now contains all the parsed templates.
- These templates can be used later to render different pages without needing to parse the template files again.

---

### Overall Processing Flow:
1. **Initialize** an empty template cache (`templateCache`).
2. **Find all page templates** (`*.page.gohtml`) in the `./templates` folder.
3. **Loop through each page template**, get its base name, and parse the template.
4. **Check for any layout templates** (`*.layout.gohtml`) in the same folder.
5. **If layout files exist**, associate them with the parsed page template.
6. **Store the parsed template** in the `templateCache` map.
7. **Return the complete template cache**, ready to be used for rendering web pages.

By following these steps, the function ensures that all templates (both page templates and layout templates) are loaded into memory and can be reused efficiently.