Here’s your code inside a copy box:

```go
package main

import (
	"fmt"
	"html/template"
	"net/http"
)

// Home page handler
func Home(w http.ResponseWriter, r *http.Request) {
	renderTemplates(w, "home.gohtml")
}

// Math page handler
func Math(w http.ResponseWriter, r *http.Request) {
	renderTemplates(w, "math.gohtml")
}

// Function to render the templates
func renderTemplates(w http.ResponseWriter, gohtml string) {
	parsedTemp, err := template.ParseFiles("./gohtml/" + gohtml) // Handle the error
	if err != nil {
		fmt.Println("Error parsing template:", err) // Log the error
		http.Error(w, "Template not found", http.StatusInternalServerError)
		return
	}

	err = parsedTemp.Execute(w, nil) // Execute the template
	if err != nil {
		fmt.Println("Error executing template:", err) // Log error if execution fails
		http.Error(w, "Error executing template", http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/math", Math)

	fmt.Println("Starting server on port 8080...")

	err := http.ListenAndServe(":8080", nil) // Start the server
	if err != nil {
		fmt.Println("Error starting server:", err) // Log error if server startup fails
	}
}
```