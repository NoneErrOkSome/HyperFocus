

# Selection Sort 🃏

**Selection Sort** is another simple [[What is Sorting]] algorithm. Its strategy is very different from [[01 - Bubble Sort]].

While Bubble Sort focuses on comparing side-by-side neighbors, Selection Sort acts more like a manager. Its main idea is to:

> **Find the absolute smallest item from the unsorted part of the list and swap it to the beginning of that part.**

---

## The "Sorting a Hand of Cards" Analogy

The easiest way to understand Selection Sort is to imagine sorting a hand of playing cards.

1. You scan your **entire hand** to find the lowest card (e.g., the 2 of clubs). You pick it up and place it on the far left. That first position is now considered "sorted" and you don't touch it again.
2. Now, ignoring the first card, you scan the **rest of your hand** to find the next lowest card (e.g., the 3 of hearts). You pick it up and place it in the second position from the left. That spot is now sorted.
3. You repeat this process—finding the smallest card among the remaining ones and moving it to the front of the unsorted section—until your entire hand is in order.

---

## Big O Rating

Just like Bubble Sort, Selection Sort has a worst-case "slowness rating" of [[O(n^2) - Very Very Slow]].

This is because it also uses a loop inside another loop. The outer loop runs about `n` times (once for each position in the list). For each of those runs, the inner loop has to scan the rest of the list to find the smallest number, which is also an amount of work related to `n`. This `n` work done `n` times gives us the `n * n` pattern.

---
To see a full example, look at the [[02a - Selection Sort (Detailed Trace)]].
## The Python Code


```python
# List of numbers to sort
numbers = [8, 2, 0, 1, 5]

# Total count of numbers
n = len(numbers)

# Outer loop to move the boundary between sorted and unsorted parts
for i in range(n):
    min_position = i

    # Inner loop to find the smallest number in the unsorted section
    for j in range(i + 1, n):
        if numbers[j] < numbers[min_position]:
            min_position = j
            
    # Swap the found smallest number with the current position
    numbers[i], numbers[min_position] = numbers[min_position], numbers[i]

# Print the sorted list
print(f"The sorted list is: {numbers}")
```


This is the standard way to write Selection Sort. The comments explain how the code follows our "find the smallest and swap" strategy.

Python

```Python
# Our list of numbers to sort
numbers = [8, 2, 0, 1, 5]

# n holds the total count of numbers
n = len(numbers)

# The outer loop 'i' moves the boundary between the sorted part (on the left)
# and the unsorted part (on the right). We are trying to fill the spot at index 'i'.
for i in range(n):
    
    # --- Start of the "Find the Smallest" part for this round ---
    
    # We start by assuming the smallest number is at the beginning of our unsorted section.
    # 'min_position' is our "sticky note" to remember where the smallest number is.
    min_position = i 
    
    # The inner loop 'j' is the "scanner". Its job is to look at every other
    # card in the unsorted section to see if we can find a smaller one.
    for j in range(i + 1, n):
        
        # If we find a number that is smaller than the one at our 'min_position'...
        if numbers[j] < numbers[min_position]:
            # ...we update our sticky note with this new, better position.
            min_position = j
            
    # --- End of the "Find the Smallest" part ---
            
    # Now that the inner 'j' loop has finished its scan, 'min_position' holds
    # the exact location of the smallest number in the unsorted section.
    # We do ONE single swap to move it to the correct place.
    numbers[i], numbers[min_position] = numbers[min_position], numbers[i]

# Finally, we print the sorted list.
print(f"The sorted list is: {numbers}")
```

---

Tags: `#algorithm` `#sorting`

generate selection sort without comment
