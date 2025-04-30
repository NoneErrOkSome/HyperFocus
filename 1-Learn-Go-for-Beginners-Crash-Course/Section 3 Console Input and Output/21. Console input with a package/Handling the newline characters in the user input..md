The issue you're experiencing is due to the way you're handling the newline characters in the user input. Specifically, on certain operating systems like Windows, the newline character is represented by a carriage return followed by a line feed (`"\r\n"`), not just a line feed (`"\n"`). This means that when you read the input and try to remove only `"\n"`, the carriage return `"\r"` remains in the string, causing the comparison `userInput == "quit"` to fail.

Here's what's happening step by step:

1. **Reading the Input:**

   ```go
   userInput, _ := reader.ReadString('\n')
   ```

   This reads the user's input until a newline character is encountered. The returned string includes the newline character(s).

2. **Replacing the Newline Character:**

   ```go
   userInput = strings.Replace(userInput, "\n", "", -1)
   ```

   This line attempts to remove the newline character `"\n"` from the input. However, on Windows systems, the input may include `"\r\n"` at the end of the string, so only the `"\n"` is removed, leaving the `"\r"` intact.

3. **Comparison Fails:**

   ```go
   if userInput == "quit" {
       break
   }
   ```

   Since `userInput` may still contain the `"\r"` character, the comparison with `"quit"` fails, even if you typed `"quit"`.

**Solution:**

To fix this issue, you should use `strings.TrimSpace`, which removes all leading and trailing whitespace from a string, including `"\n"`, `"\r"`, tabs, and spaces. This ensures that any newline or carriage return characters are removed, and your comparison works as expected.

**Updated Code:**

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    reader := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("-> ")

        userInput, _ := reader.ReadString('\n')

        userInput = strings.TrimSpace(userInput)

        if userInput == "quit" {
            break
        } else {
            fmt.Println(userInput)
        }
    }
}
```

**Explanation:**

- **Using `strings.TrimSpace`:**

  ```go
  userInput = strings.TrimSpace(userInput)
  ```

  This function removes all leading and trailing whitespace characters from the input, including both `"\n"` and `"\r"`, regardless of the operating system.

**Testing the Updated Code:**

Now, when you run your program and type `"quit"`, it should correctly break out of the loop and stop asking for input.

**Additional Tips:**

- **Debugging Output:**

  If you want to see what's actually being read, you can print the input using `fmt.Printf` with the `%q` verb, which will show hidden characters:

  ```go
  fmt.Printf("Input read: %q\n", userInput)
  ```

  This can help you see any extra characters in the string.

- **Handling Errors:**

  While you're currently ignoring the error returned by `ReadString`, it's a good practice to check it:

  ```go
  userInput, err := reader.ReadString('\n')
  if err != nil {
      fmt.Println("An error occurred while reading input. Please try again.")
      continue
  }
  ```

- **Case Insensitivity:**

  If you want to allow the user to type `"Quit"` or `"QUIT"` and still exit, you can convert the input to lower case before comparison:

  ```go
  if strings.ToLower(userInput) == "quit" {
      break
  }
  ```

**Understanding the Root Cause:**

The core of the issue is that different operating systems use different newline characters:

- **Unix/Linux/macOS:** Uses `"\n"` (line feed).
- **Windows:** Uses `"\r\n"` (carriage return followed by line feed).

By using `strings.TrimSpace`, you make your code platform-independent because it removes all leading and trailing whitespace characters, including spaces, tabs, carriage returns, and line feeds.

**Reference for `strings.TrimSpace`:**

From the [Go documentation](https://pkg.go.dev/strings#TrimSpace):

> **TrimSpace** returns a slice of the string s, with all leading and trailing white space removed, as defined by Unicode.

**Conclusion:**

Replace your line that removes the newline character with `strings.TrimSpace`, and your program should work correctly across different operating systems.

**Final Updated Code:**

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    reader := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("-> ")

        userInput, _ := reader.ReadString('\n')

        userInput = strings.TrimSpace(userInput)

        if userInput == "quit" {
            break
        } else {
            fmt.Println(userInput)
        }
    }
}
```

**Example Run:**

```
-> hello
hello
-> quit
```

The program exits after typing `"quit"`.

**Feel free to ask if you have any more questions or need further assistance!**