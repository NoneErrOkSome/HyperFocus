Certainly! Let's create a custom enumeration to represent multiple kinds of errors, and we'll write functions that may return these errors. We'll handle these errors in the calling code to demonstrate how to work with multiple custom error types.

Here's an example:

```rust
// Define a custom enum with multiple error variants
enum MyError {
    DivideByZero,
    NegativeNumber,
    Other(String),
}

// Function that might divide by zero
fn divide(a: i32, b: i32) -> Result<i32, MyError> {
    if b == 0 {
        Err(MyError::DivideByZero)
    } else {
        Ok(a / b)
    }
}

// Function that might encounter a negative number
fn square_root(a: i32) -> Result<i32, MyError> {
    if a < 0 {
        Err(MyError::NegativeNumber)
    } else {
        Ok((a as f64).sqrt() as i32)
    }
}

pub fn main() {
    let a = 10;
    let b = 0;

    // Handling divide error
    match divide(a, b) {
        Ok(result) => println!("The division result is: {}", result),
        Err(MyError::DivideByZero) => println!("Cannot divide by zero!"),
        _ => println!("Unknown error in division"),
    }

    let number = -9;

    // Handling square root error
    match square_root(number) {
        Ok(result) => println!("The square root is: {}", result),
        Err(MyError::NegativeNumber) => println!("Cannot take the square root of a negative number!"),
        _ => println!("Unknown error in square root"),
    }
}
```

In this code:

- We define a custom error enum, `MyError`, with three variants: `DivideByZero`, `NegativeNumber`, and `Other(String)`.
- The `divide` function returns a `Result`, and if the denominator is zero, it returns `Err(MyError::DivideByZero)`.
- The `square_root` function returns a `Result`, and if the input is negative, it returns `Err(MyError::NegativeNumber)`.
- In the `main` function, we use pattern matching to handle each error variant separately, printing an appropriate error message.

This code showcases how to create custom errors, associate them with different conditions, and handle them appropriately using pattern matching. 🚀🧩