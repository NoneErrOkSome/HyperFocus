Of course. Here is an in-depth study guide covering the final part of working with strings, based on the concepts presented in your transcript.

---

### **Study Guide: Advanced String Manipulation (Part 3)**

This guide covers powerful string methods for splitting, joining, padding, and repeating strings. These techniques are essential for data formatting, parsing, and creating dynamic text content.

---

### **1. Splitting and Joining Strings**

These two methods are perfect opposites and are incredibly powerful when used together.

#### **`split(divider)`: From String to Array**

The `split()` method breaks a string into an array of smaller strings, using a specified "divider" to determine where the splits should occur.

- Example: Splitting a Name
    
    A very common use case is splitting a full name into first and last names based on the space character.
    
    JavaScript
    
    ```    JavaScript
    const name = 'Jonas Schmedtmann';
    
    // Splitting by the space character
    const [firstName, lastName] = name.split(' ');
    
    console.log(firstName); // 'Jonas'
    console.log(lastName);  // 'Schmedtmann'
    ```
    
    Here, `name.split(' ')` first creates the array `['Jonas', 'Schmedtmann']`, which is then immediately destructured into the `firstName` and `lastName` variables.
    

#### **`join(separator)`: From Array to String**

The `join()` method does the exact opposite: it takes an array of strings and joins them into a single string, using a specified "separator" to place between each element.

- Example: Creating a Formatted Name
    
    Let's build on the previous example to create a new, formatted name string.
    
    JavaScript
    
    ```    JavaScript
    const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
    console.log(newName); // 'Mr. Jonas SCHMEDTMANN'
    ```
    
    The `join(' ')` method took the elements of the array and connected them with a space.
    

#### **Practical Application: Capitalizing a Full Name**

By combining `split()` and `join()`, we can create a powerful function to capitalize the first letter of every word in a name, no matter how many words there are.

- **Strategy:**
    
    1. **Split** the full name string into an array of individual names.
    2. **Loop** over the array.
    3. For each name, **capitalize** the first letter and join it with the rest of the word.
    4. Push the capitalized word into a new array.
    5. Finally, **join** the new array of capitalized words back into a single string.
- **Code:**
    
    JavaScript
    
    ```    JavaScript
    const capitalizeName = function (name) {
      const names = name.split(' '); // 1. Split into an array
      const namesUpper = [];
    
      for (const n of names) { // 2. Loop
        // 3. Capitalize and push to the new array
        const capitalizedWord = n[0].toUpperCase() + n.slice(1);
        namesUpper.push(capitalizedWord);
      }
      // 5. Join back into a single string
      console.log(namesUpper.join(' '));
    };
    
    capitalizeName('jessica ann smith davis'); // 'Jessica Ann Smith Davis'
    capitalizeName('jonas schmedtmann');      // 'Jonas Schmedtmann'
    ```
    

---

### **2. Padding a String**

Padding means adding characters to a string until it reaches a specific length. This is very useful for formatting numbers and text to align nicely.

- `padStart(targetLength, padString)`: Adds characters to the **beginning** of the string.
- `padEnd(targetLength, padString)`: Adds characters to the **end** of the string.

#### **Practical Application: Masking a Credit Card Number**

A perfect real-world example is masking a credit card number, where only the last four digits are visible.

- **Strategy:**
    
    1. Convert the number to a string.
    2. Use `slice(-4)` to get the last four digits.
    3. Use `padStart()` on this slice. The target length will be the length of the original string, and the padding character will be a mask symbol like `*`.
- **Code:**
    
    JavaScript
    
    ```    JavaScript
    const maskCreditCard = function (number) {
      const str = String(number); // 1. Convert to string
      const lastFour = str.slice(-4); // 2. Get last four digits
    
      // 3. Pad the start of the last four digits
      return lastFour.padStart(str.length, '*');
    };
    
    console.log(maskCreditCard(4337846386464738)); // '************4738'
    console.log(maskCreditCard('33485949384775577')); // '*************5577'
    ```
    

---

### **3. Repeating a String**

The `repeat()` method is a simple way to create a new string by repeating an existing string a specified number of times.

#### **Example: Airport Announcements and Visuals**

You can use `repeat()` to create repetitive messages or simple visual representations.

- **Code:**
    
    JavaScript
    
    ```    JavaScript
    // Repeating a message
    const message = 'Bad weather... All Departures Delayed! ';
    console.log(message.repeat(3));
    // 'Bad weather... All Departures Delayed! Bad weather... All Departures Delayed! Bad weather... All Departures Delayed! '
    
    // Creating a visual queue of planes
    const planesInLine = function (n) {
      console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
    };
    
    planesInLine(5);  // There are 5 planes in line 🛩🛩🛩🛩🛩
    planesInLine(3);  // There are 3 planes in line 🛩🛩🛩
    ```
    

This method is great for generating patterns, placeholders, or any kind of repeated text content.