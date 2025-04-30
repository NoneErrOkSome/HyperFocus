Borrowing and ownership are core concepts in Rust's memory safety system, and they apply to both `str` and `String`. Here's how these concepts relate to each type:

### Ownership with `String`

- **Ownership**: When you have a `String`, you own the data, and it's allocated on the heap. The variable holding the `String` is responsible for cleaning up the memory when it's no longer needed.

- **Moving Ownership**: If you assign a `String` to another variable or pass it to a function, ownership is transferred (moved), and the original variable becomes invalid.

- **Borrowing**: You can borrow a `String` by taking a reference to it using the `&` operator. You can have as many immutable borrows as you want, or a single mutable borrow.

### Borrowing with `&str`

- **Immutable Borrow**: A `&str` is an immutable borrow of some string data. You can think of it as a view into a `String` or a string literal.

- **No Ownership**: A `&str` does not own the data it refers to. It's a temporary reference that allows you to read the data.

- **Lifetime**: The lifetime of a `&str` must be tied to the data it references. That ensures that the `&str` doesn't outlive the data it points to.

### Examples

#### 1. Ownership Transfer with `String`

```rust
fn takes_string(s: String) {
    // s is now owned by this function.
}

let my_string = String::from("Hello");
takes_string(my_string); // Ownership is moved.

// my_string is now invalid and cannot be used.
```

#### 2. Borrowing a `String`

```rust
fn takes_str_slice(s: &str) {
    // s is a borrowed reference.
}

let my_string = String::from("Hello");
takes_str_slice(&my_string); // Borrowing the string as an immutable slice.

// my_string is still valid and can be used here.
```

#### 3. Mutable Borrowing of a `String`

```rust
fn takes_mut_str_slice(s: &mut String) {
    s.push_str(" World");
}

let mut my_string = String::from("Hello");
takes_mut_str_slice(&mut my_string); // Borrowing the string as a mutable slice.

// my_string has been modified and can still be used.
```

### Summary

- A `String` owns its data and can be modified. It can be moved or borrowed either mutably or immutably.
- A `&str` is a borrowed reference to string data, and it does not own the data it refers to. It's typically used to access a part of a `String` or a string literal without taking ownership.
- Rust's borrowing and ownership rules ensure that at any given time, you can have either one or the other: many immutable references or a single mutable reference, preventing data races and ensuring memory safety.