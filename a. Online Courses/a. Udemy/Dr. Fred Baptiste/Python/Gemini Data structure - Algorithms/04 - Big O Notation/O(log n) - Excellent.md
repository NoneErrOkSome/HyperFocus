Of course. Let's create the note for the `O(log n)` rating, which is our "Excellent" category.

Here is the note for **O(log n) - Excellent.md**, based on our conversation.

---

# O(log n) - Excellent 🏆

The **O(log n)** rating is for algorithms that are incredibly fast and efficient, especially when they have to work with huge amounts of data. This is also called **Logarithmic Time**.

This is the **second-fastest rating** we have learned. It is much faster than [[O(n) - Slow (Linear)]], but not quite as fast as [[O(1) - Instant]].

It is one of the ratings described in [[What is Big O (The Slowness Rating)]].

---

## The "Number Guessing Game" Analogy

The best way to understand `O(log n)` is to think of the **number guessing game**.

If you have to guess a number between 1 and 100, your first guess is **50**. With that one guess, you eliminate half of all the possible numbers. Your second guess might be **75**, and you eliminate half of what's left.

Algorithms with an `O(log n)` rating get their amazing speed from this **"divide and conquer"** strategy. They cut the amount of work they have to do in half with every single step.

---

## What O(log n) Looks Like

If we were to draw `O(log n)` on a chart, it would be a curve that starts by going up but then gets **very flat, very quickly**.

This shows that even as the "Number of Items" on the bottom gets huge, the "Time / Work" on the side barely increases at all. Doubling the amount of data only adds one more tiny step of work.

```
Time / Work ⏰
   |
   |
   |        _________ (a curve that flattens)
   |      /
   |____/______________________
        Number of Items 📚
```

---

## Example of an O(log n) Algorithm

The most famous example of an `O(log n)` algorithm is **Binary Search**.

It's able to find an item in a huge sorted list so quickly because it uses the "divide and conquer" strategy we just talked about. You can read all about it in its own note:

[[02 - Binary Search (The Shortcut)]]

---

Tags: `#big-o` `#performance`