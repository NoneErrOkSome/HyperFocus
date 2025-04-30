Here's the code with detailed comments explaining what you have learned:

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Create a new reader from standard input
	// This initializes a buffered reader to read input from the console (standard input)
	// `bufio.NewReader` helps read input more efficiently, especially when handling larger input data
	reader := bufio.NewReader(os.Stdin)

	// Print a prompt asking the user to enter some text
	// This gives feedback to the user on what the program expects them to do next
	fmt.Print("Enter some text: ")
	
	// Read input until newline character is encountered
	// The `ReadString('\n')` function reads user input until a newline character is encountered
	// This means it captures everything the user types, including the newline
	input, err := reader.ReadString('\n')

	// Check for errors during input reading
	// If there's an error while reading input (e.g., an unexpected end of input), the error is handled here
	if err != nil {
		fmt.Println("Error reading input:", err) // Print an error message if something goes wrong
		return                                   // Exit the function early if an error occurs
	}

	// Print the entered text
	// The `input` variable contains what the user typed, including the newline character at the end
	fmt.Println("You entered:", input)
}
```

### **What You've Learned:**
1. **Using `bufio.Reader` for Input:**
   - You learned how to create a buffered reader (`bufio.NewReader`) to handle user input efficiently.
   - This technique is particularly useful when you need to read multiple lines of input or larger amounts of data.

2. **Reading Input with `ReadString('\n')`:**
   - You learned to use `ReadString('\n')` to capture user input until a newline character is encountered.
   - This method reads everything the user types, including the newline, making it simple to capture complete input strings.

3. **Error Handling:**
   - You learned how to handle potential errors when reading input. This is important because input operations can fail (e.g., if the input is interrupted).
   - Checking the error value returned from `ReadString` ensures your program can respond appropriately to issues.

4. **Prompting the User for Input:**
   - You learned to prompt users with `fmt.Print()` before reading input, giving clear instructions on what is expected from them.

5. **Outputting User Input:**
   - You learned to display the captured input using `fmt.Println()`, which helps confirm to the user what was entered.

This code demonstrates essential Go skills for interacting with users, managing input and output, and handling errors gracefully—fundamental practices in writing interactive command-line programs!