To illustrate how each field in `TemplateData` can be used dynamically in the template, let’s add values to each data type in the `TemplateData` struct, pass them to the template, and use those values within the template file.

### Updated `TemplateData` Struct

```go
// models/template_data.go

package models

// TemplateData holds data sent from handlers to templates
type TemplateData struct {
	StringMap map[string]string       // Stores string data (e.g., titles, messages)
	IntMap    map[string]int          // Stores integer data (e.g., counts, IDs)
	FloatMap  map[string]float32      // Stores float data (e.g., ratings, percentages)
	Data      map[string]interface{}  // Stores any kind of complex data (e.g., structs, arrays)
	CSRFToken string                  // CSRF Token for security
	Flash     string                  // Flash message for success
	Warning   string                  // Warning message
	Error     string                  // Error message
}
```

### Step 1: Populate `TemplateData` in the Handler

In the handler function, populate each field in the `TemplateData` struct with different data types. This will make all the fields available to the template and illustrate how to use each in a dynamic way.

```go
// handlers/page.go

package handlers

import (
	"myapp/pkg/models"
	"myapp/pkg/render"
	"net/http"
)

// ExamplePage demonstrates populating all TemplateData fields dynamically
func (repo *AppRepository) ExamplePage(w http.ResponseWriter, r *http.Request) {
	// Populate StringMap
	stringData := map[string]string{
		"Title":   "Welcome to the Example Page",
		"Message": "This page demonstrates dynamic data with different types.",
	}

	// Populate IntMap
	intData := map[string]int{
		"UserCount": 42,
		"PageViews": 1234,
	}

	// Populate FloatMap
	floatData := map[string]float32{
		"Rating":    4.5,
		"Percentage": 99.9,
	}

	// Populate Data (can be any complex type)
	complexData := map[string]interface{}{
		"Items": []string{"Item 1", "Item 2", "Item 3"},
	}

	// Create TemplateData instance with all fields populated
	td := &models.TemplateData{
		StringMap: stringData,
		IntMap:    intData,
		FloatMap:  floatData,
		Data:      complexData,
		CSRFToken: "example-csrf-token-12345",
		Flash:     "Data loaded successfully!",
		Warning:   "This is a warning message.",
		Error:     "This is an error message.",
	}

	// Render the template with populated TemplateData
	render.RenderTemplateWithCache(w, "example.page.tmpl", td)
}
```

### Step 2: Use `TemplateData` in the Template

In the template, use `TemplateData` fields dynamically. Here’s an example template that makes use of each field in `TemplateData`.

```html
<!-- templates/example.page.tmpl -->
{{ template "base" . }}

{{ define "content" }}
  <h1>{{ index .StringMap "Title" }}</h1>
  <p>{{ index .StringMap "Message" }}</p>

  <h3>Statistics</h3>
  <ul>
    <li>Number of Users: {{ index .IntMap "UserCount" }}</li>
    <li>Page Views: {{ index .IntMap "PageViews" }}</li>
  </ul>

  <h3>Ratings and Percentages</h3>
  <ul>
    <li>Rating: {{ index .FloatMap "Rating" }}</li>
    <li>Completion Percentage: {{ index .FloatMap "Percentage" }}%</li>
  </ul>

  <h3>Complex Data</h3>
  <ul>
    {{ range .Data.Items }}
      <li>{{ . }}</li>
    {{ end }}
  </ul>

  <h3>Security and Messaging</h3>
  <p>CSRF Token: {{ .CSRFToken }}</p>
  <p>Flash Message: {{ .Flash }}</p>
  <p>Warning Message: {{ .Warning }}</p>
  <p>Error Message: {{ .Error }}</p>
{{ end }}
```

### Explanation of Dynamic Usage in the Template

1. **`StringMap`**: Accessed with `index .StringMap "Key"`, this renders string data like titles or messages, making the content flexible based on data passed by the handler.
   
2. **`IntMap`**: Accessed similarly with `index .IntMap "Key"`, this renders integer values, ideal for counters or statistics.

3. **`FloatMap`**: Accessed with `index .FloatMap "Key"`, this renders floating-point numbers, making it suitable for ratings or percentages.

4. **`Data`**: Treated as a flexible map, this can contain any type. Here, we pass a list of items that the template renders using `range` to create a list dynamically.

5. **`CSRFToken`**: Displays a security token, commonly used in forms to protect against Cross-Site Request Forgery attacks.

6. **`Flash`, `Warning`, `Error`**: These provide feedback messages dynamically. They can be used for user notifications, such as success messages, warnings, or error notifications.

### Summary

With these fields in `TemplateData`, you can make every aspect of your page dynamic. By changing the values in the handler, the page content, messages, statistics, and complex data adjust accordingly. This flexibility makes the `TemplateData` struct a powerful way to manage dynamic content across templates.