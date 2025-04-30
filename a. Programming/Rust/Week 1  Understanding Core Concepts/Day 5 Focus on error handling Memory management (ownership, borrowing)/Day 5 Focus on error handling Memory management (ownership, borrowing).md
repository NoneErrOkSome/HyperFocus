# Mini lesson
### Day 5 Mini Lesson: Error Handling in Rust 📖

Error handling is an essential aspect of writing robust code. It helps your program to gracefully handle unexpected situations without crashing. In Rust, we deal with errors primarily through two categories: recoverable errors and unrecoverable errors.

#### 1. **Recoverable Errors with `Result`**
Recoverable errors are those that you can report to the user and try to correct.

- **Result Type**: The `Result` enum is used to handle recoverable errors. It has two variants:
    - `Ok(value)`: The operation was successful, and the value contains the success data.
    - `Err(e)`: The operation failed, and `e` contains information about the error.

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

- **Example**:

```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str> {
    if b != 0 {
        Ok(a / b)
    } else {
        Err("Cannot divide by zero")
    }
}
```

#### 2. **Unrecoverable Errors with `panic!`**
Unrecoverable errors are serious errors that terminate your program immediately.

- **`panic!` Macro**: The `panic!` macro will stop the program's execution and unwind the stack, providing error information.

- **Example**:

```rust
fn main() {
    panic!("This is an unrecoverable error!");
}
```

#### 3. **The `?` Operator**
The `?` operator can be used to propagate errors and simplify error handling in functions that return a `Result`.

- **Example**:

```rust
fn foo() -> Result<(), &'static str> {
    // some code
}

fn bar() -> Result<(), &'static str> {
    foo()?; // Propagates the error if foo() returns Err
    // other code
    Ok(())
}
```

#### 4. **Custom Error Types**
You can define your own error types to provide more specific error information.

- **Example**:

```rust
#[derive(Debug)]
enum MyError {
    DivisionByZero,
    NegativeValue,
    // Other variants
}

fn my_function(a: i32) -> Result<i32, MyError> {
    if a < 0 {
        Err(MyError::NegativeValue)
    } else {
        // other logic
        Ok(a)
    }
}
```

### Summary
Rust’s error handling features are designed to help you write more robust code. Understanding how to work with the `Result` type and the `panic!` macro, and knowing when to use them, will help you write programs that can handle unexpected situations gracefully.

In the next session, we'll explore exercises that focus on applying these error-handling techniques, along with a deeper look into Rust's memory management. Make sure to practice what you've learned so far, and don't hesitate to ask questions if you need further clarification. Happy coding! 🚀

---
### Day 5 Mini Lesson Continued: Error Handling and Memory Management in Rust 📖➡️

#### 5. **Error Handling with `Option` Type**
Rust has an `Option` type, used for optional values, that can also be used for error handling where `None` represents the absence of a value. 

- **Example**:
```rust
fn divide(a: i32, b: i32) -> Option<i32> {
    if b != 0 {
        Some(a / b)
    } else {
        None
        }
}
```

#### 6. **Memory Management in Rust**

Memory management is crucial in systems programming, and Rust provides mechanisms to manage memory safely without a garbage collector. Here's a look at some key concepts:

- **Ownership**: In Rust, a value can have only one owner at a time. When ownership is transferred, the previous owner cannot use the value.
- **Borrowing**: You can borrow references to a value without taking ownership. Borrowing comes in two flavors:
    - **Mutable Borrowing**: Allows you to modify the borrowed value.
    - **Immutable Borrowing**: Allows read-only access to the borrowed value.

- **Lifetimes**: Lifetimes are annotations that help the compiler to ensure references do not outlive the data they point to.

- **Memory Safety Rules**:
    - At most one mutable reference or any number of immutable references are allowed at a time.
    - References must be valid for the duration of their lifetime.

- **Example**:

```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &mut s; // Mutable borrow
    // let r2 = &mut s; // Error! Cannot have more than one mutable borrow
    println!("{}", r1);
}
```

- **Box**: A box allows you to store data on the heap rather than the stack. Boxed data can be moved without changing the pointer to the data.

- **Example**:

```rust
fn main() {
    let b = Box::new(5); // Value is stored on the heap
    println!("b = {}", b);
}
```

- **Rc and Arc**: These are reference-counted smart pointers. `Rc` allows multiple owners of the same data, while `Arc` is the atomic version that can be used in concurrent programming.

- **Example**:

```rust
use std::rc::Rc;

fn main() {
    let five = Rc::new(5);
    let _ = Rc::clone(&five); // Creates a new pointer to the same data
}
```

### Summary

Understanding error handling in Rust involves learning about various ways to handle both recoverable and unrecoverable errors. By leveraging the `Result`, `Option`, and `panic!` constructs, you can write robust code that can gracefully handle unexpected conditions.

Memory management in Rust centers around the concepts of ownership, borrowing, lifetimes, and smart pointers. By adhering to these rules, you can write efficient and safe code without the need for a garbage collector.

This concludes our mini-lesson on error handling and memory management in Rust. Feel free to experiment with these concepts, and don't hesitate to reach out with any questions or concerns. Happy coding! 🛠️

---
# Mini lesson 2

Great! Let's dive into Day 5's mini lesson on Error Handling and Memory Management in Rust. 

## 📖 Error Handling

Rust has a robust error-handling model that embraces the use of explicit and recoverable errors. 

### Result Type

Rust provides a `Result<T, E>` type for recoverable errors, where `T` is the type of the value that will be returned in the success case within the `Ok` variant, and `E` is the type of the error that will be returned in the failure case within the `Err` variant.

Example:

```rust
fn divide(a: f64, b: f64) -> Result<f64, &'static str> {
    if b != 0.0 {
        Ok(a / b)
    } else {
        Err("Cannot divide by zero")
    }
}
```

### The `?` Operator

The `?` operator can be used to propagate errors up the call stack. If the value is an `Ok`, the value inside the `Ok` will get returned. If the value is an `Err`, the `Err` will be returned from the whole function as if you had used the `return` keyword so the error value gets propagated to the calling code.

### Panic

For non-recoverable errors, Rust has the `panic!` macro. When the `panic!` macro executes, your program will print a failure message, unwind, and clean up the stack, and then quit. 

## Memory Management

Rust's ownership system ensures memory safety without needing a garbage collector. Key concepts include:

### Ownership

Ownership rules in Rust:

1. **Each value in Rust has a variable that’s called its owner.**
2. **There can only be one owner at a time.**
3. **When the owner goes out of scope, the value will be dropped.**

### Borrowing

Borrowing is where the ownership of a piece of data is temporarily transferred. There are two types of borrows: mutable and immutable.

### Lifetimes

Lifetimes are a way of expressing the scope of validity of a reference within the program. They are used to prevent "dangling references."

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

### Smart Pointers

Smart pointers, like `Box<T>`, `Rc<T>`, and `RefCell<T>`, enable more complex use cases and allow for custom memory management.

These concepts form the foundation for error handling and memory management in Rust, promoting robust and efficient code. In the next part of the lesson, we'll explore further and provide examples to solidify understanding.

---
Continuing our exploration into Error Handling and Memory Management, let's delve further into some key concepts.

### Panic vs Result

Understanding when to use `panic!` versus the `Result` type is essential. Generally, you’ll use `Result` when you want the calling code to handle the possibility of failure, and `panic!` when there’s no way for the calling code to handle the situation.

### Unwrapping and Expecting

Methods like `unwrap` and `expect` can be used on `Option` and `Result` types to handle errors. 

- `unwrap`: Will return the value if `Ok`, or panic if `Err`.
- `expect`: Similar to `unwrap`, but allows you to provide a custom error message.

### Memory Efficiency with Smart Pointers

Smart pointers like `Box<T>`, `Rc<T>`, and `RefCell<T>` enable you to have multiple owners, enforce borrowing rules at runtime, and allow for dynamic sizing.

- **Box**: Boxes allow you to store data on the heap rather than the stack. They are useful when you have a large amount of data and you want to transfer ownership but not copy the data.
- **Rc**: Reference counting is a way of keeping track of the number of references to a value. It allows for multiple ownership, and the data gets cleaned up once there are zero references to it.
- **RefCell**: Provides interior mutability, where you can mutate the contents while keeping the variable itself immutable.

Example:

```rust
use std::rc::Rc;
use std::cell::RefCell;

fn main() {
    let value = Rc::new(RefCell::new(5));
    let a = value.clone();
    let b = value.clone();

    *a.borrow_mut() += 10;

    println!("a: {}, b: {}", *a.borrow(), *b.borrow()); // a: 15, b: 15
}
```

### Custom Errors with Enum

You can define custom error types using enums, making your error handling more descriptive and organized.

```rust
enum MyError {
    IoError(std::io::Error),
    ParseError(std::num::ParseIntError),
}

fn read_file() -> Result<String, MyError> {
    // logic here
}
```

### Conclusion

Error handling and memory management are vital aspects of programming in Rust. They enable the development of robust, efficient, and safe code. By combining these principles, you can create applications that are highly performant and resilient against common programming pitfalls. In the next challenge section, you will get to apply these principles through hands-on exercises.

---


# Challenge
### Day 5 Challenge Day: Error Handling and Memory Management 🎯

For this challenge, we will focus on exercises related to error handling, ownership, borrowing, and other aspects of memory management in Rust. 

#### Task 1: Function with `Result`
Create a function that takes two numbers and returns their division. If the divisor is zero, return a custom error using the `Result` type.

#### Task 2: Using `Option` for Error Handling
Write a function that takes a string and converts it to an integer. If the string is not a valid integer, return `None`. Otherwise, return the integer wrapped in `Some`.

#### Task 3: Ownership and Borrowing
Create a function that takes ownership of a `String` and returns its length. Then create another function that takes a borrowed reference to a `String` and prints it. Demonstrate the usage of these functions in the main program.

#### Task 4: Lifetimes
Write a function that takes two string slices and returns the one that is longer. Use lifetimes to ensure that the references are valid.

#### Task 5: Working with `Box`
Create a function that takes an integer and returns a boxed integer. Demonstrate using this function and accessing the value within the box.

#### Task 6: Reference Counting with `Rc`
Write a program that creates an `Rc` (reference-counted) pointer to an integer. Clone the `Rc` pointer and print the reference count.

#### Task 7: Creating Custom Errors
Define a custom error type that can represent different kinds of errors. Use it in a function that can return multiple types of errors.

#### Task 8: Optional Extra Challenge
Write a program that demonstrates using `Arc` (atomic reference counted) with threading. Share the `Arc` among multiple threads and observe the behavior.

### Tips:
- For Tasks 1 and 2, use the `Result` and `Option` types for error handling.
- For Task 3, understand the difference between ownership and borrowing.
- For Task 4, explore lifetimes and how they are used with references.
- For Tasks 5 and 6, experiment with different kinds of smart pointers in Rust.
- For Task 7, look into defining custom error types using enums and implementing the `std::error::Error` trait.
- For Task 8, delve into concurrent programming with Rust's threading model and atomic reference counting.

These exercises will help you get hands-on experience with error handling and memory management in Rust. It will deepen your understanding of Rust's safety features and how they enable writing robust and efficient code. Happy coding! 🎉

---
