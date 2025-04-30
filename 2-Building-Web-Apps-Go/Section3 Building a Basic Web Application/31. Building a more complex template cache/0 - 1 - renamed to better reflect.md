Here's a more descriptive and common-sense version of your code, renamed to better reflect what each function and variable does:

```go
package render

import (
	"bytes"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

// RenderPage looks up and renders the requested template
func RenderPage(w http.ResponseWriter, templateName string) {
	// Build the cache of templates
	templateCache, err := buildTemplateCache()
	if err != nil {
		log.Fatal("Error creating template cache:", err)
	}

	// Look up the template in the cache
	pageTemplate, found := templateCache[templateName]
	if !found {
		log.Fatal("Template not found in cache:", err)
	}

	// Create a buffer to hold the rendered template content
	buffer := new(bytes.Buffer)

	// Execute the template and write the content to the buffer
	err = pageTemplate.Execute(buffer, nil)
	if err != nil {
		log.Println("Error executing template:", err)
	}

	// Write the rendered content from the buffer to the response
	_, err = buffer.WriteTo(w)
	if err != nil {
		log.Println("Error writing response:", err)
	}
}

// buildTemplateCache scans template files, parses them, and returns a cache
func buildTemplateCache() (map[string]*template.Template, error) {
	templateCache := map[string]*template.Template{}

	// Find all page templates (*.page.tmpl) in the templates folder
	pageTemplates, err := filepath.Glob("./templates/*.page.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Loop through the found page templates
	for _, page := range pageTemplates {
		// Extract just the file name from the full path
		templateName := filepath.Base(page)
		// Parse the page template
		parsedTemplate, err := template.New(templateName).ParseFiles(page)
		if err != nil {
			return templateCache, err
		}

		// Look for layout templates (*.layout.tmpl)
		layoutFiles, err := filepath.Glob("./templates/*.layout.tmpl")
		if err != nil {
			return templateCache, err
		}

		// If there are layout templates, associate them with the page template
		if len(layoutFiles) > 0 {
			parsedTemplate, err = parsedTemplate.ParseGlob("./templates/*.layout.tmpl")
			if err != nil {
				return templateCache, err
			}
		}

		// Add the parsed template to the cache
		templateCache[templateName] = parsedTemplate
	}

	// Return the filled cache
	return templateCache, nil
}
```

### Explanation:
1. **Function names**: I renamed `RenderTemplate` to `RenderPage` because the function is specifically responsible for rendering a page template. I renamed `createTemplateCache` to `buildTemplateCache` to make it clear that it's creating the cache of parsed templates.

2. **Variable names**: 
   - `tc` became `templateCache` to describe what it is.
   - `t` became `pageTemplate` to reflect the specific template we are retrieving.
   - `buf` became `buffer`, to clarify its purpose as a temporary storage buffer.
   
This approach emphasizes clarity and makes the code more readable, so it tells a clearer story of what's happening.