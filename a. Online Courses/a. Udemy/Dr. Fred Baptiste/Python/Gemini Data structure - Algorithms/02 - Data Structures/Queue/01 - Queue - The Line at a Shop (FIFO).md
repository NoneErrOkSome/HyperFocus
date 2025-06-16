Of course. Let's create the detailed note for the **Queue** data structure based on our conversation.

Here is the note for **01 - Queue - The Line at a Shop (FIFO).md**.

---

# Queue - The Line at a Shop (FIFO) 🚶‍♂️🚶‍♀️🚶

A **Queue** is a data structure that is perfect for managing items that need to be handled in the exact order they arrived.

The easiest way to understand it is to think of a **line at a supermarket checkout** or a **queue for a popular ride**.

---

## The FIFO Rule: First-In, First-Out

A Queue has one simple and fair rule that it must always follow.

**FIFO** stands for **"First-In, First-Out."** This means the **first item** that gets into the line is the **first item** that gets to come out.

This is the exact opposite of the rule for a [[01 - Stack - The Pile of Plates (LIFO)]], where the _last_ item in is the first one out.

---

## The Two Main Actions of a Queue

A Queue has two main actions with special names:

1. **Enqueue**: This means adding a new item to the **end** of the line.
2. **Dequeue**: This means removing the item from the **front** of the line (because they are next to be served!).

---

## How to Build a Queue in Python

You can use a normal Python [[01 - Array - The Line of Boxes]] (a `list`) to work like a queue.

- **To Enqueue (add to the end):** You use the `.append()` command. This is very fast because a new person just joins the back of the line. This is an `[[O(1) - Instant]]` action.
    
- **To Dequeue (remove from the front):** You use the `.pop(0)` command. This is slow because when the first person leaves, everyone else has to shuffle forward to fill the gap. This is an [[O(n) - Slow (Linear)]] action. You can read the full explanation here: [[02 - Why Removing from the Front is Slow]].
    

### Code Example

Python

```Python
# Our line of customers starts empty
customer_queue = []

# Alex gets in line first, then Ben
customer_queue.append("Alex")
customer_queue.append("Ben")
# The queue is now: ["Alex", "Ben"]

# The cashier is ready. The DEQUEUE action serves the person at the front.
now_serving = customer_queue.pop(0)

# 'now_serving' is "Alex" because he was first.
# The queue is now just: ["Ben"]
```

---

## Why Queues Are Useful

Queues are used everywhere in programming to manage tasks or items in a fair, first-come, first-served order.

- **Printer Jobs:** When you print multiple documents, they wait in a queue to be printed in the order you sent them.
- **Game Servers:** When a popular game server is full, you are put in a queue and have to wait for your turn to join.
- **Customer Support Chats:** You are placed in a queue to be helped by the next available person.

---

Tags: `#data-structure` `#queue`