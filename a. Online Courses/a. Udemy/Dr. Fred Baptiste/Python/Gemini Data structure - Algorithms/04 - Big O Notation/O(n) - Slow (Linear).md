Of course. Let's create the note for the `O(n)` rating. This is one of the most common ratings you will see.

Here is the note for **O(n) - Slow (Linear).md**, created from our conversation.

---

# O(n) - Slow (Linear) 🚶‍♂️

The **O(n)** rating is for an algorithm where the amount of work grows in a **perfect straight line** with the number of items you give it. Its formal name is **Linear Time**.

It's slower than [[O(1) - Instant]]` and `[[O(log n) - Excellent]], but it's much faster than an [[O(n^2) - Very Very Slow]] algorithm. It's a very common and important rating in our [[What is Big O (The Slowness Rating)]] system.

---

## The Main Idea: "No Shortcuts"

As you figured out yourself, the best way to think about an `O(n)` algorithm is that there are **"no shortcuts."**

To get the job done, you have to look at or touch every single item in the list, one by one, from the beginning to the end.

### Analogy: The Messy Bookshelf

Imagine looking for a specific book on a messy bookshelf. You have no choice but to start at one end, check the first book, then the second, then the third, and so on, until you find your book. You can't skip any.

---

## What O(n) Looks Like

If we were to draw `O(n)` on a chart, it would be a **perfect, straight diagonal line**.

This shows that as the "Number of Items" on the bottom gets bigger, the "Time / Work" on the side goes up by the exact same amount. It's a fair and predictable growth pattern.

```
Time / Work ⏰
   |           /
   |          /
   |         /
   |        /
   |_______/_______________
        Number of Items 📚
```

---

## Examples of O(n) Actions

Any time you have a simple `for` loop that has to visit every item in a list once, you are likely looking at an `O(n)` action.

The main examples we have seen are:

[[01 - Linear Search]]

This is the classic example, where you have to check every single item in the worst case to find what you're looking for.

[[02 - Why Removing from the Front is Slow]]

This was our other important example. Removing an item from the front of a list is O(n) because all the other n-1 items have to do the work of shuffling forward.

---

Tags: `#big-o` `#performance`