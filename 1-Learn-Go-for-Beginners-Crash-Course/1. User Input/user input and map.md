Your current code has a couple of issues. The input from the `bufio.NewReader` is not being correctly handled, and you are comparing `reader` directly to integers, which won't work as expected because `reader` is an object, not the actual input value.

To fix this, you'll need to properly capture the input from the user and convert it to an integer for comparison. Here's the corrected version of your code:

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// Creating a map with food items
	myMap := make(map[int64]string)
	myMap[1] = "Pizza"
	myMap[2] = "Donut"
	myMap[3] = "Sushi"

	// Prompting the user to enter an order number
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter order number: 1, 2, or 3")

	// Reading the input from the user
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input) // Trimming any newline or extra space

	// Converting the input to an integer
	orderNumber, err := strconv.ParseInt(input, 10, 64)
	if err != nil {
		fmt.Println("Invalid input. Please enter a number.")
		return
	}

	// Checking if the order number exists in the map and printing the corresponding food item
	if food, exists := myMap[orderNumber]; exists {
		fmt.Println("You ordered:", food)
	} else {
		fmt.Println("Invalid order number. Please choose 1, 2, or 3.")
	}
}
```

### Key Changes:
1. **Input Handling**: Use `reader.ReadString('\n')` to read the input, then trim it using `strings.TrimSpace`.
2. **Input Conversion**: The input is a string, so we convert it to an integer using `strconv.ParseInt`.
3. **Map Lookup**: The input number is checked in the map using the key. If it exists, the corresponding value is printed; otherwise, an error message is shown. 

This should now work as expected when you enter `1`, `2`, or `3`!