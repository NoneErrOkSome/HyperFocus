Of course. This is a very important rating to understand, as it helps us identify algorithms that might become slow with a lot of data.

Here is the note for **O(n^2) - Very Very Slow.md**, based on our conversation.

---

# O(n²) - Very Very Slow 🐢

The **O(n²)** rating, which you say as "O of n squared," is the 'slowness rating' for an algorithm that gets slow very quickly as you add more data. Its formal name is **Quadratic Time**.

This is the slowest rating we have learned about. It is one of the ratings described in [[What is Big O (The Slowness Rating)]].

---

## The "Loop Inside a Loop" Pattern

This rating almost always appears when your code has a **loop running inside another loop**, and both loops are related to the number of items (`n`).

### Analogy: The Group Conversation

Imagine you have a group of n friends in a room.

You tell the first friend to go and have a one-minute conversation with every other friend in the room. That's about n conversations.

Then you tell the second friend to do the exact same thing.

...and so on, until every friend has talked to every other friend.

You are making `n` friends do an `n`-step job. This `n * n` work is what gives us the `O(n²)` rating.

---

## What O(n²) Looks Like

If we were to draw `O(n²)` on a chart, it would be a curve that gets **very steep, very fast**.

This shows that as the "Number of Items" on the bottom gets just a little bigger, the "Time / Work" on the side shoots up dramatically.

```
Time / Work ⏰
   |         /
   |        /
   |       /
   |      /
   |_____/_____________________
        Number of Items 📚
```

---

## Examples of O(n²) Algorithms

The two `[[What is Sorting.md]]` algorithms we learned are classic examples of `O(n²)` because they both use a nested loop to do their work.

[[01 - Bubble Sort]]

Its inner loop compares neighbors again and again.

[[02 - Selection Sort]]

Its inner loop scans the list again and again to find the minimum.

This `O(n²)` rating is why they are considered simple to learn, but not very efficient for sorting very large lists.

---

Tags: `#big-o` `#performance`