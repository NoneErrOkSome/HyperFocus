

```rust
struct Point {
    x: f64,
    y: f64,
}

// Implementation block, all `Point` associated functions & methods go in here.
impl Point {
    // This is an "associated function" because this function is associated with
    // a particular type, that is, Point.
    //
    // Associated functions don't need to be called with an instance.
    // These functions are generally used like constructors.
    fn origin() -> Point {
        Point { x: 0.0, y: 0.0 }
    }

    // Another associated function, taking two arguments:
    fn new(x: f64, y: f64) -> Point {
        Point { x: x, y: y }
    }
}

struct Rectangle {
    p1: Point,
    p2: Point,
}

impl Rectangle {
    // This is a method.
    // `&self` is sugar for `self: &Self`, where `Self` is the type of the
    // caller object. In this case `Self` = `Rectangle`
    fn area(&self) -> f64 {
        // `self` gives access to the struct fields via the dot operator.
        let Point { x: x1, y: y1 } = self.p1;
        let Point { x: x2, y: y2 } = self.p2;

        // `abs` is a `f64` method that returns the absolute value of the
        // caller
        ((x1 - x2) * (y1 - y2)).abs()
    }

    fn perimeter(&self) -> f64 {
        let Point { x: x1, y: y1 } = self.p1;
        let Point { x: x2, y: y2 } = self.p2;

        2.0 * ((x1 - x2).abs() + (y1 - y2).abs())
    }

    // This method requires the caller object to be mutable
    // `&mut self` desugars to `self: &mut Self`
    fn translate(&mut self, x: f64, y: f64) {
        self.p1.x += x;
        self.p2.x += x;

        self.p1.y += y;
        self.p2.y += y;
    }
}

// `Pair` owns resources: two heap allocated integers.
struct Pair(Box<i32>, Box<i32>);

impl Pair {
    // This method "consumes" the resources of the caller object
    // `self` desugars to `self: Self`
    fn destroy(self) {
        // Destructure `self`
        let Pair(first, second) = self;

        println!("Destroying Pair({}, {})", first, second);

        // `first` and `second` go out of scope and get freed.
    }
}

fn main() {
    let rectangle = Rectangle {
        // Associated functions are called using double colons
        p1: Point::origin(),
        p2: Point::new(3.0, 4.0),
    };

    // Methods are called using the dot operator.
    // Note that the first argument `&self` is implicitly passed, i.e.
    // `rectangle.perimeter()` === `Rectangle::perimeter(&rectangle)`
    println!("Rectangle perimeter: {}", rectangle.perimeter());
    println!("Rectangle area: {}", rectangle.area());

    let mut square = Rectangle {
        p1: Point::origin(),
        p2: Point::new(1.0, 1.0),
    };

    // Error! `rectangle` is immutable, but this method requires a mutable
    // object.
    // rectangle.translate(1.0, 0.0);
    // TODO ^ Try uncommenting this line

    // Okay! Mutable objects can call mutable methods
    square.translate(1.0, 1.0);

    let pair = Pair(Box::new(1), Box::new(2));

    pair.destroy();

    // Error! Previous `destroy` call "consumed" `pair`
    // pair.destroy();
    // TODO ^ Try uncommenting this line
}
```

## Method

1. 🌟🌟 Methods are similar to functions: Declare with `fn`, have parameters and a return value. Unlike functions, methods are defined within the context of a struct (or an enum or a trait object), and their first parameter is always `self`, which represents the instance of the struct the method is being called on.


```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Complete the area method which returns the area of a Rectangle.
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    assert_eq!(rect1.area(), 1500);

    println!("Success!");
}
```

**Question:**

The given Rust code defines a struct `Rectangle` with fields `width` and `height`. There is an incomplete method `area` in the implementation block for `Rectangle`, which needs to be completed such that it returns the area of the rectangle. In the `main` function, an instance `rect1` of `Rectangle` is created and the `area` method is called on it. How can we complete the `area` method to correctly calculate and return the area of a rectangle?

**Answer:**

In Rust, methods are defined under an `impl` block for the corresponding struct. The `area` method of a `Rectangle` should return the product of its `width` and `height`. The method definition should look like the following:

```rust
fn area(&self) -> u32 {
    self.width * self.height
}
```

Here, `&self` is a reference to the instance of the `Rectangle` struct that the method is called on. This way, we can access the fields of the instance (`width` and `height` in this case).

So, your complete code would look like this:

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Complete the area method which return the area of a Rectangle.
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    assert_eq!(rect1.area(), 1500);

    println!("Success!");
}
```

In this complete code, the `area` method calculates the area of the `Rectangle` instance by multiplying the `width` and `height` fields. In the `main` function, we create a `Rectangle` instance `rect1` and use the `area` method to calculate its area, verifying that it's correct with `assert_eq!`.

---
2. 🌟🌟 `self` will take the ownership of current struct instance, however, `&self` will only borrow a reference from the instance.

```rust

// Only fill in the blanks, DON'T remove any line!
#[derive(Debug)]
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    pub fn show_state(__)  {
        println!("the current state is {}", __.color);
    }
}
fn main() {
    let light = TrafficLight{
        color: "red".to_owned(),
    };
    // Don't take the ownership of `light` here.
    light.show_state();
    // ... Otherwise, there will be an error below
    println!("{:?}", light);
}
```

**Question:**

In the given Rust code, a struct `TrafficLight` is defined with a field `color`. An associated method `show_state` is defined within an `impl` block for `TrafficLight`. This function `show_state` is meant to print the current color of the `TrafficLight` instance without consuming it (i.e., without taking ownership). In the `main` function, a `TrafficLight` instance named `light` is created and the `show_state` method is invoked on it. However, there are blanks within the code that need to be filled. What should be placed in these blanks to ensure the `show_state` method does not take ownership of the `TrafficLight` instance, yet still can access its `color` field?

**Answer:**

Rust defines methods with a special parameter type of `self`, which can be `self`, `&self`, or `&mut self`. These variants determine how the method can interact with the struct's fields. To prevent taking ownership while still being able to access the struct's fields, you should use `&self`.

In addition, when accessing the struct's fields within the method, you should use `self.color` (i.e., `self` followed by a dot and the field name) to reference the `color` field.

Here is the corrected code:

```rust
#[derive(Debug)]
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    pub fn show_state(&self)  {
        println!("the current state is {}", self.color);
    }
}

fn main() {
    let light = TrafficLight{
        color: "red".to_owned(),
    };
    // We are not taking the ownership of `light` here.
    light.show_state();
    // ... Therefore, there is no error below
    println!("{:?}", light);
}
```

In the updated code, `show_state` accepts a reference to `self` (`&self`), meaning it borrows `self` rather than taking ownership. This allows it to read the fields of `self` (in this case, `color`), but not change them. In the `main` function, we can call `light.show_state()` without losing ownership of `light`, enabling its usage afterwards (for instance, for the `println!` call).

---
3. 🌟🌟 The `&self` is actually short for `self: &Self`. Within an `impl` block, the type `Self` is an alias for the type that the `impl` block is for. Methods must have a parameter named `self` of type `Self` for their first parameter, so Rust lets you abbreviate this with only the name `self` in the first parameter spot.
```rust
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    // Using `Self` to fill in the blank.
    pub fn show_state(__)  {
        println!("the current state is {}", self.color);
    }

    // Fill in the blank, DON'T use any variants of `Self`.
    pub fn change_state(__) {
        self.color = "green".to_string()
    }
}
fn main() {
    println!("Success!");
}
```

**Question:**

The provided Rust code defines a struct `TrafficLight` with a `color` field of type `String`. In the `impl` block for `TrafficLight`, two methods are being defined - `show_state` and `change_state`. The `show_state` method is supposed to print the current color of the `TrafficLight` instance, while `change_state` is supposed to modify the `color` field of the instance to `"green"`. The question asks for filling in the blanks for the `self` parameters in both method definitions, but with different constraints - for `show_state`, `Self` should be used, and for `change_state`, variants of `Self` should not be used. How can the blanks be filled to make the code work as expected?

**Answer:**

In Rust, methods take a special first parameter that represents the instance on which the method is being called. This special parameter is commonly referred to as `self`. There are three forms that this `self` parameter can take: `self`, `&self`, and `&mut self`. 

- `self` takes ownership of the instance, which means you can't use the instance after calling this method.
- `&self` borrows the instance immutably, so you can't modify the instance inside this method, but can still use the instance after calling the method.
- `&mut self` borrows the instance mutably, so you can modify the instance inside this method, but you can't use the instance simultaneously elsewhere.

To use `Self` as a type, you must use a reference since you can't pass ownership to `Self` directly. So, in `show_state` method, we will use `self: &Self`.

Since we want to mutate the `color` field in `change_state` method and we are not supposed to use `Self`, we will use `&mut self` instead.

Here's the corrected code:

```rust
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    // Using `Self` to fill in the blank.
    pub fn show_state(self: &Self)  {
        println!("the current state is {}", self.color);
    }

    // Fill in the blank, DON'T use any variants of `Self`.
    pub fn change_state(&mut self) {
        self.color = "green".to_string()
    }
}

fn main() {
    let mut traffic_light = TrafficLight { color: "red".to_string() };

    traffic_light.show_state();
    traffic_light.change_state();
    traffic_light.show_state();

    println!("Success!");
}
```

In the `main` function, a mutable `TrafficLight` instance is created and the `show_state` and `change_state` methods are called on it. After calling `change_state`, the `color` field is changed to `"green"`. So, when `show_state` is called again, it prints `"green"`.


---
4. 🌟🌟 All functions defined within an `impl` block are called associated functions because they’re associated with the type named after the `impl`. We can define associated functions that don’t have `self` as their first parameter (and thus are not methods) because they don’t need an instance of the type to work with.

```rust
#[derive(Debug)]
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    // 1. Implement an assotiated function `new`,
    // 2. It will return a TrafficLight contains color "red"
    // 3. Must use `Self`, DONT use `TrafficLight` in fn signatures or body
    pub fn new() 

    pub fn get_state(&self) -> &str {
        &self.color
    }
}

fn main() {
    let light = TrafficLight::new();
    assert_eq!(light.get_state(), "red");

    println!("Success!");
}

```


**Question:**

The provided Rust code defines a struct `TrafficLight` with a `color` field of type `String`. In the `impl` block for `TrafficLight`, a method `get_state` is already defined that borrows `self` and returns a reference to the `color` field. The task is to define an associated function `new` that returns an instance of `TrafficLight` with the `color` set to `"red"`. The function signature and body must use `Self` instead of `TrafficLight`. How can the associated function `new` be defined to meet the above constraints?

**Answer:**

An associated function in Rust is a function that is associated with a type (in this case, `TrafficLight`) and not with its instances. The `new` function we are defining is an example of such a function. 

Here's the key point: within an `impl` block, the type `Self` is an alias for the type that the `impl` block is for. So, in the case of `impl TrafficLight`, `Self` is equivalent to `TrafficLight`.

In the function body, we are asked to use `Self` to construct a new `TrafficLight` object. This can be done by using `Self` in place of `TrafficLight` when constructing the new object. The `new` function doesn't take any parameters and returns an instance of `Self` with `color` set to `"red"`.

Here's the completed code:

```rust
#[derive(Debug)]
struct TrafficLight {
    color: String,
}

impl TrafficLight {
    // Implement an associated function `new`,
    // It will return a TrafficLight contains color "red"
    // Using `Self`, DONT use `TrafficLight` in function signatures or body
    pub fn new() -> Self {
        Self {
            color: "red".to_string(),
        }
    }

    pub fn get_state(&self) -> &str {
        &self.color
    }
}

fn main() {
    let light = TrafficLight::new();
    assert_eq!(light.get_state(), "red");

    println!("Success!");
}
```

In the `main` function, we use the `TrafficLight::new()` associated function to create a new `TrafficLight` instance, `light`. We then use `get_state` method on `light` to assert that the `color` of the `light` is indeed `"red"`.

---
## Multiple impl blocks
5. 🌟 Each struct is allowed to have multiple impl blocks.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

// Using multiple `impl` blocks to rewrite the code below.
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}


fn main() {
    println!("Success!");
}

```

**Question:**

The given Rust code defines a struct `Rectangle` with fields `width` and `height`. There is a single `impl` block which contains methods `area` and `can_hold`. The task is to refactor the code such that each method `area` and `can_hold` is placed in separate `impl` blocks. How can this code be rewritten to have multiple `impl` blocks for `Rectangle`?

**Answer:**

In Rust, it's completely valid and sometimes useful to have multiple `impl` blocks for a single struct. Each `impl` block can contain one or many methods. The methods can be split among `impl` blocks in any way you choose.

Here's how you can refactor your code to have two `impl` blocks for `Rectangle`, one for the `area` method and another for the `can_hold` method:

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

// First `impl` block
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

// Second `impl` block
impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    println!("Success!");
}
```

In this refactored code, the `area` method is in the first `impl` block, and the `can_hold` method is in the second `impl` block. Both of these `impl` blocks are for the `Rectangle` struct. The main function is unmodified. This approach can be used to logically group methods, such as putting all getter methods in one `impl` block and all setter methods in another `impl` block.

---
## Enum
6. 🌟🌟🌟 We can also implement methods for enums.

```rust
#[derive(Debug)]
enum TrafficLightColor {
    Red,
    Yellow,
    Green,
}

// Implement TrafficLightColor with a method.
impl TrafficLightColor {
    
}

fn main() {
    let c = TrafficLightColor::Yellow;

    assert_eq!(c.color(), "yellow");

    println!("{:?}",c);
}
```

**Question:**

The provided Rust code defines an enum `TrafficLightColor` with variants `Red`, `Yellow`, and `Green`. The task is to implement a method for the `TrafficLightColor` enum. The method should return the color of the current `TrafficLightColor` instance as a string. In the `main` function, the `color` method is called on an instance `c` of `TrafficLightColor`, with an expectation that it returns "yellow". How can the method be implemented to achieve this?

**Answer:**

In Rust, just like structs, enums can also have methods. These methods can be defined inside an `impl` block associated with the enum. Inside a method, we can use `match` or `if let` expressions to determine the variant of the enum and perform variant-specific operations. In this case, we need to return the color of the `TrafficLightColor` instance as a string.

Here's how you can implement the `color` method for the `TrafficLightColor` enum:

```rust
#[derive(Debug)]
enum TrafficLightColor {
    Red,
    Yellow,
    Green,
}

impl TrafficLightColor {
    fn color(&self) -> &'static str {
        match self {
            TrafficLightColor::Red => "red",
            TrafficLightColor::Yellow => "yellow",
            TrafficLightColor::Green => "green",
        }
    }
}

fn main() {
    let c = TrafficLightColor::Yellow;

    assert_eq!(c.color(), "yellow");

    println!("{:?}", c);
}
```

In the updated code, the `color` method takes a reference to `self` and returns a static string slice (`&'static str`). The `match` expression inside the `color` method checks the variant of `self` and returns the corresponding color string. This makes it possible to call `c.color()` in the `main` function and get the expected string "yellow".

---
Associated functions are a feature in Rust that allow functions to be associated with a particular type. They are defined within an `impl` block of a struct or an enum but are not methods because they don't take `self` as their first parameter. Instead, they are associated with the type itself.

Here are the key points about associated functions:

1. **Definition:** They are defined in the same way as methods but without taking `self` as the first parameter. They are defined within an `impl` block and are associated with the type for which the `impl` block is defined.

2. **Purpose:** Associated functions are often used to create new instances of a particular type. They are commonly used to implement constructors in Rust.

3. **Invocation:** They are called using the `::` syntax on the type itself, not on an instance of the type. For example, if we have a struct `Foo` with an associated function `new`, it would be called like `Foo::new()`.

4. **Use of Self and self:** Within the `impl` block, `Self` refers to the type that the block is implementing methods for. `self` refers to the instance of the type `Self`. In the context of an associated function (which doesn't take `self`), `Self` can be used to refer to the type, but `self` cannot be used because there's no instance.

An example of an associated function can be a `new` function for a struct, which is a common pattern in Rust:

```rust
struct Foo {
    bar: i32,
    baz: i32,
}

impl Foo {
    fn new(bar: i32, baz: i32) -> Self {
        Self {
            bar,
            baz,
        }
    }
}

fn main() {
    let foo = Foo::new(10, 20);
}
```

In this example, `new` is an associated function for `Foo`. It takes two parameters and returns a new instance of `Foo`. The keyword `Self` is used to refer to the type `Foo`, and it makes it easier to change the type's name later if needed.

---

In Rust, functions that are associated with a type (struct, enum, etc.) are called associated functions. They are defined within an `impl` block for the type. These functions are similar to static methods in other languages. The most common example of an associated function is the `new` function, often used to create a new instance of a struct.

Here's a summary of what we discussed above about associated functions:

1. Associated functions are defined within an `impl` block and do not take `self` as a parameter. This means they do not operate on an instance of the type, but rather the type itself. They can be thought of as "static methods" in other languages. 

2. An example of an associated function is the `new` function, often used to create a new instance of a struct. 

3. They can be called using the `::` syntax. For example, `TrafficLight::new()` calls the `new` associated function on the `TrafficLight` type.

4. `Self` keyword is used as an alias for the type that the `impl` block is associated with. This allows us to avoid repeating the type's name. For instance, `fn new() -> Self` is an associated function that returns an instance of the type it is defined on.

5. You can have multiple `impl` blocks for the same type. This can be used to organize associated functions (and methods) in a logical way or to conditionally implement functions based on traits or feature flags.

6. While associated functions do not take a `self` parameter and hence do not have access to instance data, they can still use type parameters of the type they are associated with.

Remember, though associated functions are defined within an `impl` block, they are not methods because they do not have a `self` parameter. The lack of `self` parameter is what differentiates associated functions from methods.