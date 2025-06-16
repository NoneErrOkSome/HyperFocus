```go
package render

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

// RenderTemplateTest is used to render templates without caching
// It reads the template files from disk every time it is called
// This approach is inefficient as it reads from disk on each request
func RenderTemplateTest(w http.ResponseWriter, gohtml string) {
	// Parse the requested template and the base layout from disk
	parsedTemplate, _ := template.ParseFiles("./templates/"+gohtml, "./templates/base.layout.gohtml")

	// Execute the parsed template and write it to the response writer
	err := parsedTemplate.Execute(w, nil)
	if err != nil {
		fmt.Println("error parsing template:", err)
	}
}

var templateCache = make(map[string]*template.Template)

func RenderTemplate(w http.ResponseWriter, gohtml string) {
	var tmpl *template.Template
	var err error
	// comma-ok Idiom
	_, inMap := templateCache[gohtml]
	if !inMap {
		log.Println("creating template and adding to cache")
		err = createTemplateCache(gohtml)
		if err != nil {
			log.Println(err)
		}
	} else {
		log.Println("using cached template")
	}

	tmpl = templateCache[gohtml]

	err = tmpl.Execute(w, nil)
	if err != nil {
		log.Println(err)
	}
}

func createTemplateCache(gohtml string) error {
	templates := []string{
		fmt.Sprintf(
			"./templates/%s", gohtml),
		"./templates/base.layout.gohtml",
	}

	tmpl, err := template.ParseFiles(templates...)
	if err != nil {
		return err
	}

	// Add the parsed template to the cache
	templateCache[gohtml] = tmpl

	// Return nil indicating success
	return nil
}
```

---
# Part 2

To build an understanding of `template.ParseFiles(templates...)` from basic Go programming concepts, let's start with some fundamental concepts and work our way up to `ParseFiles(templates...)`.

### 1. **Variables and Slices in Go:**
At a basic level, Go lets us define variables and collections of data, such as **slices**. A slice is a dynamically-sized list of elements.

For example:
```go
templates := []string{"file1.tmpl", "file2.tmpl"}
```
Here, `templates` is a slice of strings that holds file paths (in this case, template files).

### 2. **Functions in Go:**
Go supports functions that take arguments and return values. For example, a simple function might look like this:

```go
func add(a int, b int) int {
    return a + b
}
```
In the context of `ParseFiles(templates...)`, we are calling a function that takes file paths (template file paths) as arguments and processes them.

### 3. **Variadic Functions in Go:**
Go has a feature called **variadic functions**. These are functions that can take a variable number of arguments. This is where the ellipsis (`...`) comes into play.

A variadic function allows you to pass any number of arguments. Here's an example of a basic variadic function:
```go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}
```
You can call this function with any number of arguments:
```go
result := sum(1, 2, 3, 4)
fmt.Println(result)  // Outputs 10
```
The `numbers ...int` argument means the function can accept multiple `int` values. Inside the function, `numbers` is treated as a slice.

### 4. **Template Package in Go:**
Go’s `html/template` package is used to parse and execute templates. Templates in Go can be files that contain HTML with special placeholders for dynamic data. The `template` package provides functions to load and parse these templates.

To load and parse a template file, we can use the `ParseFiles` function from the `template` package:
```go
tmpl, err := template.ParseFiles("file1.tmpl", "file2.tmpl")
```
Here:
- `template.ParseFiles()` is a variadic function that takes one or more file paths as arguments and parses those template files.
- It returns a `*template.Template` object that represents the parsed templates, or an error if the files cannot be parsed.

### 5. **Understanding `ParseFiles(templates...)`:**
Now, with the background in place, let’s understand how `template.ParseFiles(templates...)` works in your example.

The function `template.ParseFiles()` expects one or more file paths as arguments. It’s a **variadic function**, meaning you can pass multiple file paths to it.

In your code, this line:
```go
tmpl, err := template.ParseFiles(templates...)
```
does the following:
- **`templates...`** is a **slice** of strings containing file paths.
- The `...` in `templates...` **unpacks the slice** and passes each file path as an individual argument to `ParseFiles()`. This is necessary because `ParseFiles` expects a variable number of arguments, not a single slice.
- **`ParseFiles()`** will read and parse all the template files specified in the `templates` slice (such as `"./templates/home.page.gohtml"` and `"./templates/base.layout.gohtml"`).

For example, if the `templates` slice looks like this:
```go
templates := []string{"./templates/home.page.gohtml", "./templates/base.layout.gohtml"}
```
the line `template.ParseFiles(templates...)` is equivalent to calling:
```go
tmpl, err := template.ParseFiles("./templates/home.page.gohtml", "./templates/base.layout.gohtml")
```
This is how the slice is unpacked and the individual files are passed to `ParseFiles`.

### 6. **Putting It All Together:**
- **`templates`** is a slice containing template file paths.
- **`...`** unpacks the slice so that its elements are passed as individual arguments to the function.
- **`ParseFiles(templates...)`** reads and parses each file, creating a combined template object that includes all the templates.
- This parsed template can later be executed to generate dynamic content (such as HTML pages).

By using `ParseFiles(templates...)`, you are efficiently parsing multiple template files at once, which allows for structured and reusable templates (like a base layout and a content page).

### Summary:
- **Variadic functions** like `ParseFiles()` can take multiple arguments or a slice that’s unpacked using the `...` operator.
- **Slices** in Go can store multiple values (in this case, file paths).
- **Unpacking a slice** with `...` passes each element of the slice as individual arguments to a variadic function like `ParseFiles()`.

Thus, `template.ParseFiles(templates...)` takes the file paths in the `templates` slice, unpacks them, and parses them into a combined template for rendering.