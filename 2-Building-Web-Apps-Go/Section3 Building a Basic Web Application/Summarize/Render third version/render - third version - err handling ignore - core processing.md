Here is the code with comments pointing out where error handling is being ignored:

```go
func createTemplateCache() map[string]*template.Template {
	templateCache := map[string]*template.Template{}

	// Get all the files named *.page.gohtml from ./templates
	// Ignoring error returned by filepath.Glob
	pageFiles, _ := filepath.Glob("./templates/*.page.gohtml")

	// Loop through all files ending with *.page.gohtml
	for _, pageFile := range pageFiles {
		pageName := filepath.Base(pageFile)
		// Ignoring error returned by template.New and template.ParseFiles
		parsedTemplate, _ := template.New(pageName).ParseFiles(pageFile)

		// Get all layout files (*.layout.gohtml) from ./templates
		// Ignoring error returned by filepath.Glob
		layoutFiles, _ := filepath.Glob("./templates/*.layout.gohtml")

		// Parse all layout files and associate them with the page template
		if len(layoutFiles) > 0 {
			// Ignoring error returned by parsedTemplate.ParseGlob
			parsedTemplate, _ = parsedTemplate.ParseGlob("./templates/*.layout.gohtml")
		}

		// Store the parsed template in the template cache
		templateCache[pageName] = parsedTemplate
	}

	return templateCache
}
```

### Comments Explanation:
1. **`_ := filepath.Glob()`**: Indicates we're ignoring any error that could come from fetching template file paths.
2. **`_ := template.New(pageName).ParseFiles(pageFile)`**: Indicates that we're ignoring any errors that could occur when creating and parsing individual template files.
3. **`_ := parsedTemplate.ParseGlob()`**: Indicates that we're ignoring any errors while parsing layout templates and associating them with page templates. 

Each underscore is where error handling would usually take place but is deliberately ignored in this version.

---
# Part 2

Here's an explanation of what each line does:

### 1. `filepath.Glob("./templates/*.page.gohtml")`
- **What it does**: 
  - `filepath.Glob` searches for all files that match a specific pattern (in this case, all files ending with `.page.gohtml` in the `./templates` directory).
  - It returns a slice of file paths that match the pattern.

- **Example**:
  - If you have `home.page.gohtml` and `about.page.gohtml` in the `./templates` folder, `filepath.Glob` will return:
    ```go
    []string{"./templates/home.page.gohtml", "./templates/about.page.gohtml"}
    ```

### 2. `filepath.Base(pageFile)`
- **What it does**:
  - `filepath.Base` extracts the last element of a file path, effectively returning the name of the file without its directory path.
  - It strips out everything but the filename.

- **Example**:
  - For a file path like `"./templates/home.page.gohtml"`, `filepath.Base(pageFile)` will return:
    ```go
    "home.page.gohtml"
    ```

### 3. `template.New(pageName).ParseFiles(pageFile)`
- **What it does**:
  - This creates a new template with the name `pageName` using the `template.New()` method.
  - `ParseFiles` then parses the file `pageFile` and associates the contents of the file with the template.
  - This essentially reads the content of the file and loads it into the template object for later rendering.

- **Example**:
  - If `pageFile` is `"./templates/home.page.gohtml"`, and it contains HTML code, this line reads the file and prepares the template `home.page.gohtml` for use.

### 4. `parsedTemplate.ParseGlob("./templates/*.layout.gohtml")`
- **What it does**:
  - `ParseGlob` looks for all files matching the pattern `"./templates/*.layout.gohtml"` and parses them.
  - It adds the contents of these files (usually layout files) to the `parsedTemplate`.
  - Layout templates are often used to define common parts of the HTML (e.g., headers, footers, etc.) that are shared across multiple pages.

- **Example**:
  - If you have `base.layout.gohtml`, it will parse this layout template and associate it with the existing template. The result is that when the main template is executed, it can include the layout (wrapping the page in a common structure).

### Summary:
- `filepath.Glob`: Finds all files that match a certain pattern.
- `filepath.Base`: Extracts the file name from a full file path.
- `template.New(...).ParseFiles(...)`: Creates a new template and parses the content from a specified file.
- `parsedTemplate.ParseGlob`: Adds additional layout templates to the main template for rendering.

---
# Part 3 - Does `filepath.Base()` extract the file name from a directory path and return it as a string?

Yes, exactly! `filepath.Base()` takes a full file path and **extracts the file name** (as a string) from that path.

For example:
```go
fullPath := "./templates/home.page.gohtml"
fileName := filepath.Base(fullPath) // "home.page.gohtml"
```

It just **returns the file name** (without the directory) as a string.

---

# Part 4 - In the line `ts, err := template.New(name).ParseFiles(page)`, which is executed first: `template.New(name)` or `.ParseFiles(page)`?

In the line:

```go
ts, err := template.New(name).ParseFiles(page)
```

**`template.New(name)`** is executed first, followed by **`ParseFiles(page)`**.

Here’s the breakdown:

1. **`template.New(name)`**: This creates a new template with the given name (`name`). At this point, it's just an empty template, initialized with a name.
   
2. **`.ParseFiles(page)`**: After creating the template, this method is called to parse the actual content of the file (`page`) and associate it with the newly created template.

So, **`template.New(name)`** is executed first, and then the file specified by `page` is parsed and added to the template.

---


