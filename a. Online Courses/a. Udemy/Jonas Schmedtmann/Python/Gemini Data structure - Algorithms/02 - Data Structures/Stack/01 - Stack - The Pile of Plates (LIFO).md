Of course. Let's create the note for the Stack data structure.

Here is the note for **01 - Stack - The Pile of Plates (LIFO).md** based on our conversation.

---

# Stack - The Pile of Plates (LIFO) 🥞

A **Stack** is a simple and useful data structure. The easiest way to understand it is to think of a **stack of plates**, a pile of books, or a can of Pringles.

A Stack has one very important rule that it must always follow.

### The LIFO Rule: Last-In, First-Out

This means the **last item** you put onto the stack is the **first item** you can take off.

When you add a new plate to a stack of plates, you place it on top. When you take a plate, you also take it from the top. The plate at the very bottom was the first one there, and it will be the last one you can get to.

---

## The Two Main Actions of a Stack

A Stack is very simple and only has two main actions. Because these actions are so simple, they are also extremely fast.

1. **Push**: This means adding a new item to the **top** of the stack.
2. **Pop**: This means removing the item from the **top** of the stack.

Both of these actions get the "slowness rating" of [[O(1) - Instant]] because they don't have to move any other items in the stack.

---

## How to Build a Stack in Python

You can easily use a normal Python [[01 - Array - The Line of Boxes]] (a `list`) to act as a stack.

- To **Push** (add to the top), you use the `.append()` command.
- To **Pop** (remove from the top), you use the `.pop()` command _without any index inside_.

Python

```Python
# Our stack starts empty
my_stack = []

# We PUSH items onto the stack
my_stack.append("Book A")
my_stack.append("Book B")
my_stack.append("Book C") # Book C is now on top

# my_stack is now: ["Book A", "Book B", "Book C"]

# We POP an item from the stack
removed_item = my_stack.pop()

# removed_item is "Book C"
# my_stack is now: ["Book A", "Book B"]
```

---

## Why Stacks Are Useful

Stacks are used everywhere in programming to manage tasks that need to be undone or handled in reverse order. You can learn more in this note:

[[02 - How to Use a Stack (Undo Button)]]

---

Tags: `#data-structure` `#stack`