Day 6 - 7 - Review; Hands-on Coding challenge

Certainly! Here's a comprehensive hands-on coding challenge that encompasses the concepts learned from Day 1 to Day 5 in Rust.

### Challenge: Library Management System

You are tasked with creating a simplified library management system. This system will manage books, authors, and patrons of the library.

#### Requirements:

1. **Data Types and Variables:**
   - Define structures for `Book`, `Author`, and `Patron`. Include relevant information like title, author, availability for books, and name, list of books for authors and patrons.

2. **Control Flow and Error Handling:**
   - Implement functions to handle borrowing and returning books, ensuring that you properly check if a book is available.
   - If a book is not available or some other error condition is met, handle it gracefully.

3. **Functions and Methods:**
   - Encapsulate the logic related to each structure within associated functions or methods.
   - Create functions for common tasks like listing all available books, listing all books by an author, etc.

4. **Memory Management:**
   - Pay careful attention to ownership, borrowing, and lifetimes to manage the relationships between books, authors, and patrons without duplication or invalid references.

#### Example Functions:
- `borrow_book(patron: &mut Patron, book: &mut Book) -> Result<(), String>`
- `return_book(patron: &mut Patron, book: &mut Book) -> Result<(), String>`
- `list_books(library: &Library)`
- `list_authors(library: &Library)`
- `find_books_by_author(author_name: &str, library: &Library) -> Vec<Book>`

#### Bonus:
- Implement user interaction where the user can choose to perform different actions like borrowing a book, returning a book, listing all books, etc., through the console.

This challenge will require a good understanding of the concepts taught from Day 1 to Day 5, including data types, control flow, functions, error handling, and memory management. You may break down the task into smaller functions and tackle each one systematically.

Feel free to ask if you need assistance or clarification on any part of the challenge!