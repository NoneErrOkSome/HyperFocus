Here is your code with comments added inline to explain each section:

```go
package main

import (
	"bufio"        // Importing for handling input from the user
	"fmt"          // Importing for printing output to the console
	"os"           // Importing for reading from standard input
	"strconv"      // Importing for converting strings to integers
	"strings"      // Importing for manipulating strings, such as trimming spaces
)

func main() {
	// Creating a map to store food items with the order number as the key and the food item as the value
	myMap := make(map[int64]string)
	myMap[1] = "Pizza"   // Adding the order number 1 for Pizza
	myMap[2] = "Donut"   // Adding the order number 2 for Donut
	myMap[3] = "Sushi"   // Adding the order number 3 for Sushi

	// Prompting the user to enter an order number
	reader := bufio.NewReader(os.Stdin) // Creating a new reader to read user input from the console
	fmt.Println("Enter order number: 1, 2, or 3")

	// Reading the input from the user
	input, _ := reader.ReadString('\n')   // Reading the input from the user until they press "Enter"
	input = strings.TrimSpace(input)      // Removing any extra spaces or newline characters from the input

	// Converting the input string to an integer
	orderNumber, err := strconv.ParseInt(input, 10, 64) // Converting the input to an integer (base 10, 64-bit)
	if err != nil {                                    // Checking if the input was invalid (not a number)
		fmt.Println("Invalid input. Please enter a number.") // Displaying an error message for invalid input
		return                                          // Exiting the program if the input is not a valid number
	}

	// Checking if the order number exists in the map using the comma-ok idiom
	if food, exists := myMap[orderNumber]; exists {     // Checking if the entered order number exists in the map
		fmt.Println("You ordered:", food)               // Printing the corresponding food item if it exists
	} else {
		fmt.Println("Invalid order number. Please choose 1, 2, or 3.") // Displaying a message if the order number doesn't exist
	}
}
```

### Explanation of Comments:
- Each part of the code is explained, starting with the package imports and leading down through the map creation, input reading, string trimming, input conversion, and map lookup using the comma-ok idiom.
- The comments help understand the role of each line and how the code works, making it clear and easy to follow.