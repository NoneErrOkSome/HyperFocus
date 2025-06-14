Of course. Creating a central note to explain the concept of sorting is an excellent idea.

Here is the note for **What is Sorting.md**, based on our conversation.

---

# What is Sorting? 📉

**Sorting** is the process of arranging items in a list into a specific, predictable order.

Usually, this means ordering them from smallest to largest for numbers, or in alphabetical order (A-Z) for words.

Think of it like tidying up a messy bookshelf so that all the books are lined up neatly by the author's last name.

---

## Why is Sorting Important?

Sorting is one of a programmer's most common jobs. We do it for two main reasons:

1. **It makes data easy for humans to read.** A list of high scores is much more useful when the highest score is at the top. A list of names is easier to look through when it's in alphabetical order.
    
2. **It makes searching super fast.** This is the most important reason for a computer. While a simple [[01 - Linear Search]] works on any list, very fast searching algorithms are only possible if the list is already sorted. Sorting allows us to use powerful "shortcut" algorithms like [[02 - Binary Search (The Shortcut)]], which is one of the fastest ways to find things.
    

---

## Different Sorting Strategies

There is no single way to sort a list. Different algorithms use different strategies to get the job done, just like different chefs might have different recipes for the same cake.

The two main strategies we have learned are:

[[01 - Bubble Sort]]

This algorithm uses the strategy of repeatedly comparing and swapping side-by-side neighbors until the list is in order.

[[02 - Selection Sort]]

This algorithm uses the strategy of finding the absolute smallest item in the unsorted part and moving it to the front.

Even though their strategies are different, both of these sorting methods have the same "slowness rating" of [[O(n^2) - Very Very Slow]] for their worst case.

---

Tags: `#algorithm` `#sorting` `#core-concept`