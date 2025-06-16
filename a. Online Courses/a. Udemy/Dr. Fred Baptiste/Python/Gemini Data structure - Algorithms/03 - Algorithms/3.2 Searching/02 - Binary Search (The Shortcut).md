Of course. Binary Search is a very important and powerful algorithm, and it's a great topic for a detailed note.

Here is the note for **02 - Binary Search (The Shortcut).md**, based on our conversation.

---

# Binary Search (The Shortcut) ✂️

**Binary Search** is a super-fast searching algorithm. It's one of the most famous algorithms because it is so clever and efficient.

It has one very important rule that you must always follow:

> **The list must be sorted first!**

This is the main reason we learn about [[What is Sorting]]. Sorting a list allows us to use powerful shortcut algorithms like this one.

Instead of checking one by one like [[01 - Linear Search]], the strategy of Binary Search is to **"divide and conquer."** It cuts the area you have to search in half with every single guess.

---

## The "Number Guessing Game" Analogy

The easiest way to understand Binary Search is to think of the number guessing game.

Imagine I'm thinking of a number between 1 and 100. You wouldn't guess 1, then 2, then 3... That would be a very slow linear search!

Instead, you would use a binary search strategy:

1. You would guess the number right in the middle: **50**.
2. I say, "Higher!"
3. Instantly, you know you can **ignore all the numbers from 1 to 50**. You have eliminated half the numbers in just one guess!
4. Now you only have to search between 51 and 100. You guess the new middle number: **75**.
5. I say, "Lower!"
6. Instantly, you eliminate all the numbers from 75 to 100.

You keep cutting the problem in half until you find the number. This is exactly how Binary Search works.

---

## Big O Rating

Binary Search has a "slowness rating" of [[O(log n) - Excellent]].

This is what makes it so amazing. It means that even if the list becomes gigantic, the number of steps to find something grows very, very slowly.

If it takes 20 steps to find a name in a phone book with 1 million pages, it will only take **21 steps** for a book with **2 million pages**. Doubling the list size only adds one extra step!

---

## Step-by-Step Example

Let's find the number 23 in this sorted list:

numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72]

We will use three "pointers" to keep track of our search area: `low`, `high`, and `mid`.

- `low` starts at index `0`.
- `high` starts at the last index, `8`.

### Guess 1:

1. We find the middle index: `mid = (0 + 8) // 2 = 4`.
2. We look at the number at `numbers[4]`, which is **16**.
3. Is `16` the number we want? No, `23` is **higher**.
4. So, we can eliminate the middle number and everything to its left. We move our `low` pointer to `mid + 1`. `low` is now `5`.

### Guess 2:

- Our search area is now between index 5 and 8.

1. We find the new middle: `mid = (5 + 8) // 2 = 6`.
2. We look at the number at `numbers[6]`, which is **38**.
3. Is `38` the number we want? No, `23` is **lower**.
4. So, we can eliminate the middle number and everything to its right. We move our `high` pointer to `mid - 1`. `high` is now `5`.

### Guess 3:

- Our search area is now between index 5 and 5.

1. We find the new middle: `mid = (5 + 5) // 2 = 5`.
2. We look at the number at `numbers[5]`, which is **23**.
3. Is `23` the number we want? **Yes! Found it!** The search is over in just 3 guesses.

---

## The Python Code

Python

```Python
def binary_search(sorted_list, item_to_find):
    """
    Finds an item in a SORTED list using Binary Search.
    Returns the index of the item if found.
    Otherwise, returns -1.
    """
    low = 0
    high = len(sorted_list) - 1

    # This loop continues as long as there is still a search area
    while low <= high:
        # Find the middle index
        mid = (low + high) // 2
        guess = sorted_list[mid]

        # --- The three possible outcomes ---
        if guess == item_to_find:
            # 1. We found it!
            return mid
        elif guess < item_to_find:
            # 2. Our guess was too low. We ignore the left half.
            low = mid + 1
        else: # guess > item_to_find
            # 3. Our guess was too high. We ignore the right half.
            high = mid - 1

    # If the loop finishes, it means low has crossed high, and the item was not found.
    return -1

# --- How to use it ---
# Remember, the list MUST be sorted!
my_sorted_numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72]
position = binary_search(my_sorted_numbers, 23) # position will be 5
```

---

Tags: `#algorithm` `#searching`