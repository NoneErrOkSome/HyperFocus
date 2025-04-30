To make a web page dynamic, you pass data from your backend (the Go server, in this case) to the HTML templates, which then render the data within the template. This allows the content to change based on the input or data provided by the server, rather than displaying only fixed, static content.

Here's an example of passing data from a handler to a template in Go to create a dynamic page:

### Step 1: Define the `TemplateData` struct

The `TemplateData` struct holds all possible data that may be passed to templates. This lets you organize different types of data you might want to pass.

```go
// models/template_data.go

package models

// TemplateData holds data sent from handlers to templates
type TemplateData struct {
	StringMap map[string]string
	IntMap    map[string]int
	FloatMap  map[string]float32
	Data      map[string]interface{}
	CSRFToken string
	Flash     string
	Warning   string
	Error     string
}
```

### Step 2: Create a Handler Function to Pass Data

In the handler function, populate the `TemplateData` struct with the values you want to render. For instance, we could pass a `Message` that we want to display on the page.

```go
// handlers/home.go

package handlers

import (
	"myapp/pkg/models"
	"myapp/pkg/render"
	"net/http"
)

// HomePage renders the home page with dynamic data
func (repo *AppRepository) HomePage(w http.ResponseWriter, r *http.Request) {
	data := make(map[string]string)
	data["Message"] = "Welcome to the dynamic home page!"

	// Create TemplateData and set the StringMap
	td := &models.TemplateData{
		StringMap: data,
	}

	// Render the template with the populated TemplateData
	render.RenderTemplateWithCache(w, "home.page.tmpl", td)
}
```

### Step 3: Set Up `RenderTemplateWithCache` to Use Template Data

This function is responsible for rendering templates and injecting dynamic data into the template:

```go
// render/render.go

package render

import (
	"bytes"
	"html/template"
	"log"
	"myapp/pkg/config"
	"myapp/pkg/models"
	"net/http"
)

var appConfig *config.AppConfig

// RenderTemplateWithCache renders a template using data from TemplateData
func RenderTemplateWithCache(w http.ResponseWriter, tmpl string, data *models.TemplateData) {
	var templateCache map[string]*template.Template

	if appConfig.UseCache {
		templateCache = appConfig.TemplateCache
	} else {
		templateCache, _ = BuildTemplateCache()
	}

	// Get the template by name from the cache
	t, ok := templateCache[tmpl]
	if !ok {
		log.Fatal("Could not get template from template cache")
	}

	// Execute the template with the provided data
	buf := new(bytes.Buffer)
	_ = t.Execute(buf, data)

	_, err := buf.WriteTo(w)
	if err != nil {
		log.Println("Error writing template to browser:", err)
	}
}
```

### Step 4: Modify the Template to Render Dynamic Data

In the template file, you can now use the data passed in `StringMap` to render dynamic content:

```html
<!-- templates/home.page.tmpl -->
{{ template "base" . }}

{{ define "content" }}
  <h1>{{ index .StringMap "Message" }}</h1>
  <p>This message is dynamically generated!</p>
{{ end }}
```

### Explanation of Dynamic Rendering

1. **TemplateData Struct**: Acts as a flexible container for all types of data that might be rendered in templates.
2. **Handler**: The handler (e.g., `HomePage`) populates `TemplateData` with values (like `Message`) that make the page dynamic.
3. **RenderTemplateWithCache**: This function renders the template and injects the data from `TemplateData` into the placeholders within the HTML file.
4. **Template File**: `home.page.tmpl` displays the dynamic `Message` by referencing the `StringMap` data passed from the handler.

By using `TemplateData` and handler functions to pass different data for each page request, you make the pages dynamic rather than static, adapting the content based on user interactions, requests, or application state.