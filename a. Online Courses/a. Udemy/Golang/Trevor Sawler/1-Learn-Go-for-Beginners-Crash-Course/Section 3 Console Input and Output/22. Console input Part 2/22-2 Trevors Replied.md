This is a recent bug introduced in [github.com/eiannone/keyboard,](https://github.com/eiannone/keyboard,) for Windows users.

**The problem**

When running this program, pressing "1" (for example) gives no result. Pressing "1" again prints "You chose Cappucino", pressing "2" prints "You chose Cappucino" again, pressing "q" prints "You chose Latte", and pressing "q" quits the program.

**Solution**:

The solution is to use `GetKey()` function instead of `GetSingleKey().`

So this:

`char, _, err := keyboard.GetSingleKey()`

becomes this:

`char, _, err := keyboard.GetKey()`

That fixes it.

Here is the complete code:

  
```go
package main

import (
	"fmt"
	"log"
	"strconv"

	"github.com/eiannone/keyboard"
)

func main() {
	err := keyboard.Open()
	if err != nil {
		log.Fatal(err)
	}

	defer func() {
		_ = keyboard.Close()
	}()

	coffies := make(map[int]string)
	coffies[1] = "Cappuccino"
	coffies[2] = "Latte"
	coffies[3] = "Americano"
	coffies[4] = "Mocha"
	coffies[5] = "Macchiato"
	coffies[6] = "Espresso"

	fmt.Println("MENU")
	fmt.Println("----")
	fmt.Println("1 - Cappuccino")
	fmt.Println("2 - Latte")
	fmt.Println("3 - Americano")
	fmt.Println("4 - Mocha")
	fmt.Println("5 - Macchiato")
	fmt.Println("6 - Espresso")
	fmt.Println("Q - Quit the program")

	for {
		char, _, err := keyboard.GetKey()
		if err != nil {
			log.Fatal(err)
		}

		if char == 'q' || char == 'Q' {
			break
		}

		i, _ := strconv.Atoi(string(char))
		fmt.Println(fmt.Sprintf("You chose %s", coffies[i]))

	}

	fmt.Println("Program is ending")
}
```