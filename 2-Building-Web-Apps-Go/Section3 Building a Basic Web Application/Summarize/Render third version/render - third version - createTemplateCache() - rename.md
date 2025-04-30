Here's your code with more meaningful variable names:

```go
func createTemplateCache() (map[string]*template.Template, error) {
	templateCache := map[string]*template.Template{}

	// Get all the files named *.page.gohtml from ./templates
	pageFiles, err := filepath.Glob("./templates/*.page.gohtml")
	if err != nil {
		return templateCache, err
	}

	// Loop through all files ending with *.page.gohtml
	for _, pageFile := range pageFiles {
		pageName := filepath.Base(pageFile)
		parsedTemplate, err := template.New(pageName).ParseFiles(pageFile)
		if err != nil {
			return templateCache, err
		}

		layoutFiles, err := filepath.Glob("./templates/*.layout.gohtml")
		if err != nil {
			return templateCache, err
		}

		if len(layoutFiles) > 0 {
			parsedTemplate, err = parsedTemplate.ParseGlob("./templates/*.layout.gohtml")
			if err != nil {
				return templateCache, err
			}
		}

		templateCache[pageName] = parsedTemplate
	}

	return templateCache, nil
}
```

### Renamed variables:
- `myCache` → `templateCache`: This makes it clearer that it's a cache for templates.
- `pages` → `pageFiles`: Indicates that it's a collection of page template file paths.
- `name` → `pageName`: Represents the name of each page template.
- `ts` → `parsedTemplate`: Represents the parsed template object.
- `matches` → `layoutFiles`: Represents the collection of layout template file paths. 

These changes make the code easier to understand by aligning variable names with their actual roles.