Of course. This is a great note to create as it's our first searching algorithm.

Here is the in-depth note for **01 - Linear Search.md** based on our conversations.

---

# Linear Search 🚶‍♂️🔎

**Linear Search** is the most basic and straightforward searching algorithm. It's a fundamental part of a programmer's toolkit.

Its main strategy is very simple:

> **Look at every single item in a list, one by one, from the beginning, until you find the item you're looking for.**

---

## The "Messy Bookshelf" Analogy

Imagine you have a bookshelf where all the books are in a completely random, messy order.

If you are looking for one specific book, you have no choice but to use a linear search.

1. You start at the far left of the shelf.
2. You pull out the first book and check its title.
3. If it's not the right one, you put it back and pull out the second book.
4. You repeat this one-by-one process until you find the book you want.

You might get lucky and find it on your very first try! Or, in the worst case, you might have to look through every single book on the shelf.

---

## Big O Rating

The worst-case "slowness rating" for Linear Search is [[O(n) - Slow (Linear)]].

This is because in the worst-case scenario—where the item is at the very end of the list or not in the list at all—you have to look at all **n** items to be sure. The amount of work you do grows in a perfect straight line with the number of items in the list.

---

## The Python Code

Here is a simple way to write a Linear Search function in Python. The function looks for an item and tells you which index (position) it's at.

Python

```Python
def linear_search(data_list, item_to_find):
    """
    Looks through a list one-by-one to find an item.
    Returns the index of the item if found.
    Otherwise, returns -1.
    """
    # We use 'enumerate' to get both the index and the value for each item.
    for index, value in enumerate(data_list):
        # We check if the value we are currently looking at is the one we want.
        print(f"Checking index {index}, which has the value {value}...")
        if value == item_to_find:
            # If we find it, we stop the search immediately and return the index!
            print("Found it!")
            return index

    # If the loop finishes without finding the item, it means it wasn't there.
    print("Item was not found in the list.")
    return -1

# --- How to use it ---
my_numbers = [8, 2, 0, 1, 5]
item = 0
position = linear_search(my_numbers, item)

print(f"The number {item} is at position: {position}")
```

---

## When to Use Linear Search

The biggest advantage of Linear Search is that it **works on any list**, even if it is completely messy and unsorted.

This is different from more powerful algorithms like [[02 - Binary Search (The Shortcut).md]], which require the list to be sorted before they can work.

---

Tags: `#algorithm` `#searching`