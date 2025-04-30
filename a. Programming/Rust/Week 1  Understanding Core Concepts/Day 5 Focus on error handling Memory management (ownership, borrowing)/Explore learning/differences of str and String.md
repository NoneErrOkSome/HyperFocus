In Rust, `str` and `String` are two different types used to represent textual data, but they have different characteristics and use cases. Here's a breakdown of their differences:

### 1. `str`

- **Type**: `str` is a slice type that represents a sequence of UTF-8 bytes. It is often used as a borrowed type `&str`.

- **Immutability**: `str` is immutable, meaning that you cannot change the content of a string slice once it has been created.

- **Memory Allocation**: `str` typically refers to a fixed sequence of characters stored in a string literal or a part of a `String`. It doesn't own the memory it refers to.

- **Usage**: It's often used as a view into a string. You can take a slice of a `String` and use it temporarily, without taking ownership of the whole string.

- **Creation**: It is usually not created directly, but rather used as a borrowed reference like `&str`.

### 2. `String`

- **Type**: `String` is a growable, heap-allocated data structure. It's part of the Rust standard library.

- **Mutability**: Unlike `str`, a `String` is mutable. You can modify its contents, append to it, etc.

- **Memory Allocation**: `String` owns its contents, and the memory is allocated on the heap. When a `String` is dropped, its memory is freed.

- **Usage**: `String` is often used when you need to store or manipulate text data that can change in size.

- **Creation**: You can create a `String` directly, typically from a string literal or from an existing `&str`.

### Comparison Table:

| Feature               | `str`      | `String`  |
|-----------------------|------------|-----------|
| Memory Allocation     | Stack or static | Heap      |
| Mutability            | Immutable  | Mutable   |
| Ownership             | Borrowed   | Owned     |
| Typical Usage         | Views, literals | Manipulation |
| Method of Creation    | Borrowed/reference | Direct   |

### Example:

Here's a simple example that illustrates both:

```rust
fn main() {
    let my_str: &str = "Hello, world!"; // Immutable borrowed string slice
    let mut my_string: String = String::from("Hello, world!"); // Mutable heap-allocated string

    // This is allowed:
    my_string.push_str(" How are you?");

    // This is not allowed and will cause a compile error:
    // my_str.push_str(" How are you?");
}
```

In this example, `my_str` is an immutable reference to a string slice, while `my_string` is a mutable, growable string that you can modify.

In summary, use `String` when you need ownership and the ability to modify the string, and use `&str` when you only need a temporary or immutable view of the string.