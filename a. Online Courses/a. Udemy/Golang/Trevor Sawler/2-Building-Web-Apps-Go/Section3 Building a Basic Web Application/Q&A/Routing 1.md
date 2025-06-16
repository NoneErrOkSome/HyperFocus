Here are more examples of routing in Go using `http.HandleFunc()`. Each route corresponds to a different URL path, and the server responds with different content based on the path that the client requests.

### Example 1: Basic Routing with Multiple Routes

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Root Route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to the homepage!")
	})

	// About Route
	http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "About Page: Learn more about us here!")
	})

	// Contact Route
	http.HandleFunc("/contact", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Contact Page: You can reach us here!")
	})

	// Services Route
	http.HandleFunc("/services", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Services Page: These are the services we offer.")
	})

	// Start the server
	_ = http.ListenAndServe(":8080", nil)
}
```

#### How it works:
- `"/"`: If the user visits `http://localhost:8080/`, they'll see **"Welcome to the homepage!"**.
- `"/about"`: If the user visits `http://localhost:8080/about`, they'll see **"About Page: Learn more about us here!"**.
- `"/contact"`: If the user visits `http://localhost:8080/contact`, they'll see **"Contact Page: You can reach us here!"**.
- `"/services"`: If the user visits `http://localhost:8080/services`, they'll see **"Services Page: These are the services we offer."**

### Example 2: Route with Path Variables

In more advanced routing, you may want to handle routes that contain variables in the path. In Go, you'll need to manually parse the path if you want to extract variables.

```go
package main

import (
	"fmt"
	"net/http"
	"strings"
)

func main() {
	// Dynamic Route: `/hello/<name>`
	http.HandleFunc("/hello/", func(w http.ResponseWriter, r *http.Request) {
		// Extract the name from the URL path
		name := strings.TrimPrefix(r.URL.Path, "/hello/")
		if name == "" {
			name = "Stranger"
		}
		fmt.Fprintf(w, "Hello, %s!", name)
	})

	// Start the server
	_ = http.ListenAndServe(":8080", nil)
}
```

#### How it works:
- **Dynamic Route `/hello/<name>`**: 
  - If the user visits `http://localhost:8080/hello/John`, they will see **"Hello, John!"**.
  - If the user visits `http://localhost:8080/hello/`, they will see **"Hello, Stranger!"** (default if no name is provided).

### Example 3: Handling Query Parameters

You can also handle query parameters in your routes, which are passed in the URL after a `?`.

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Route that reads a query parameter
	http.HandleFunc("/greet", func(w http.ResponseWriter, r *http.Request) {
		// Extract the "name" query parameter
		name := r.URL.Query().Get("name")
		if name == "" {
			name = "Guest"
		}
		fmt.Fprintf(w, "Hello, %s!", name)
	})

	// Start the server
	_ = http.ListenAndServe(":8080", nil)
}
```

#### How it works:
- If the user visits `http://localhost:8080/greet?name=Alice`, they will see **"Hello, Alice!"**.
- If the user visits `http://localhost:8080/greet`, they will see **"Hello, Guest!"** (default if the `name` query parameter is missing).

### Example 4: Handling Different HTTP Methods (GET, POST, etc.)

In some cases, you want to respond differently based on the HTTP method (GET, POST, PUT, etc.). You can check the method and respond accordingly.

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Route that responds differently to GET and POST
	http.HandleFunc("/submit", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			fmt.Fprintf(w, "Please submit your data via POST.")
		} else if r.Method == "POST" {
			fmt.Fprintf(w, "Thank you for your submission!")
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	// Start the server
	_ = http.ListenAndServe(":8080", nil)
}
```

#### How it works:
- If the user visits `http://localhost:8080/submit` using a **GET** request (e.g., by simply typing the URL in the browser), they will see **"Please submit your data via POST."**
- If the user submits a **POST** request (e.g., through a form submission), they will see **"Thank you for your submission!"**
- If a request is made with a method other than GET or POST, the server will respond with a **405 Method Not Allowed** error.

### Example 5: Serving Static Files

You can also serve static files like HTML, CSS, or JavaScript files using routing.

```go
package main

import (
	"net/http"
)

func main() {
	// Serve files from the "static" directory
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	// Start the server
	_ = http.ListenAndServe(":8080", nil)
}
```

#### How it works:
- This route will serve static files from the `./static` directory.
- If the user visits `http://localhost:8080/static/example.html`, the server will look for and serve the file `./static/example.html`.

---

These examples demonstrate different ways you can implement routing in Go. You can define specific paths, handle dynamic paths, query parameters, and HTTP methods, or serve static content. All of these are examples of **routing**, where you define how your server responds to different URL paths and HTTP methods.