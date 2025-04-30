Yes, all three methods are valid in Go:

1. **`var appConfig config.AppConfig`**:
    
    - Declares `appConfig` and initializes it with the **zero value** of `config.AppConfig`.
2. **`var appConfig = config.AppConfig{}`**:
    
    - Declares and explicitly initializes `appConfig` with an **empty struct literal**.
3. **`appConfig := config.AppConfig{}`**:
    
    - Short-hand syntax for declaring and initializing `appConfig` with an **empty struct literal**.

### Key Differences:

- **1st**: Declares with type only; zero value is implicit.
- **2nd**: Explicitly initializes using `{}`.
- **3rd**: Compact syntax for declaration and initialization (preferred for local variables).
---
No, the second and third methods with `*config.AppConfig{}` are **invalid in Go** because you cannot dereference a struct literal (`*config.AppConfig{}`). Here's why:

### Breakdown of Each Method:

1. **`var appConfig *config.AppConfig`**:
    
    - ✅ This is valid.
    - It declares a variable `appConfig` of type `*config.AppConfig` (a pointer to `config.AppConfig`) and initializes it to the **zero value**, which is `nil`.
2. **`var appConfig = *config.AppConfig{}`**:
    
    - ❌ This is invalid.
    - You cannot dereference (`*`) a struct literal directly like this. The compiler will throw an error.
3. **`appConfig := *config.AppConfig{}`**:
    
    - ❌ This is also invalid for the same reason: you cannot dereference a struct literal.

### Correct Alternatives for Pointers:

If you want `appConfig` to hold a pointer to a `config.AppConfig`, you must create the struct first and then take its address:

1. **Using `new`:**
    
    ```go
    var appConfig = new(config.AppConfig) // Creates a pointer to an empty config.AppConfig
    ```
    
2. **Using `&` (address-of operator):**
    
    ```go
    var appConfig = &config.AppConfig{} // Creates a pointer to an empty struct
    ```
    
3. **Using short declaration with `&`:**
    
    ```go
    appConfig := &config.AppConfig{} // Compact and idiomatic
    ```
    

### Correct Usage of Pointers:

```go
package main

import "fmt"

type AppConfig struct {
	UseCache bool
}

func main() {
	// Using new
	appConfig1 := new(AppConfig)       // Pointer to an empty AppConfig
	appConfig1.UseCache = true         // Modify through pointer
	fmt.Printf("appConfig1: %+v\n", appConfig1)

	// Using &
	appConfig2 := &AppConfig{UseCache: false} // Pointer to a struct literal
	fmt.Printf("appConfig2: %+v\n", appConfig2)

	// Direct usage without a pointer
	var appConfig3 AppConfig           // Value (not pointer)
	fmt.Printf("appConfig3: %+v\n", appConfig3)
}
```

### Summary:

- **Invalid:** `var appConfig = *config.AppConfig{}` and `appConfig := *config.AppConfig{}`.
- **Valid:** Use `new(config.AppConfig)` or `&config.AppConfig{}` to create and initialize pointers to structs.