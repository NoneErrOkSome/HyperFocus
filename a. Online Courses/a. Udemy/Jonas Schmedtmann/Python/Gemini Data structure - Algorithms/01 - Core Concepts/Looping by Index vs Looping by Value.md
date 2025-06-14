Of course! That was a very important topic. Capturing it in a note is a great idea.

Here is a note for your Obsidian vault based on our conversation, complete with links to your other notes.

---

# Looping by Index vs Looping by Value

When we use a `for` loop to go through a list in Python, there are two main ways to do it. Choosing the right one makes your code easier to read and more powerful. It can be confusing at first, but the rule is actually very simple.

The two methods are:

1. **Looping by Value:** The simple way, for reading.
2. **Looping by Index:** The powerful way, for changing things.

---

## 1. Looping by VALUE (The "For-Each" Loop) 📖

This is the simplest and most common way to loop. You use it when you only need to **read the value** of each item in order, one by one.

### Analogy: Reading a Shopping List

Imagine you have a shopping list. You just want to read each item out loud: "Milk", then "Bread", then "Apples". You don't care if "Milk" is item #1 or item #5 on the list. You just care about the item itself.

### When to Use It

Use this method when your main goal is to **look at or use each item**, and you **do not need to change the list itself**.

### How it Looks in Code

The variable `game` holds the actual value from the list (`"Roblox"`, then `"Minecraft"`, etc.).

Python

```Python
games = ["Roblox", "Minecraft", "LEGO"]

print("I like to play:")
for game in games:
    print(game)
```

---

## 2. Looping by INDEX (The "Position" Loop) ✍️

This is the more powerful way. You use this when you need to know the **position (the index)** of an item, or when you need to **change or swap** items in the list.

### Analogy: Organizing a Bookshelf

Imagine you are a librarian organizing a bookshelf. You don't just care _what_ a book is; you care _where_ it is on the shelf. You need to know, "The book at **position 3** needs to be swapped with the book at **position 5**." You need the addresses (the indexes) to do your job.

### When to Use It

Use this method when you need to:

- Know the index of an item.
- Modify (change) an item at a specific position.
- **Swap two items**, which is essential for sorting algorithms like [[01 - Bubble Sort]] and [[02 - Selection Sort]].

### How it Looks in Code

The variable `i` holds the **index** (`0`, then `1`, then `2`, etc.). You use `numbers[i]` to get the value at that position.

Python

```Python
numbers = [10, 20, 99, 40]

# i will be 0, 1, 2, 3
for i in range(len(numbers)):
    # Let's change any number bigger than 50 to be 50
    if numbers[i] > 50:
        # To change the list, we MUST use the index!
        numbers[i] = 50

# The list is now [10, 20, 50, 40]
print(numbers)
```

---

## Cheat Sheet: Which Loop Should I Use?

|   |   |   |
|---|---|---|
|**Your Goal in the Loop...**|**Use Loop by VALUE? (for item in list)**|**Use Loop by INDEX? (for i in range(len(list)))**|
|**Just to read or print each item?**|**Yes, use this!**|This works, but it's more complicated.|
|**To know the item's position/index?**|No.|**Yes, use this!**|
|**To CHANGE or SWAP items in the list?**|No.|**Yes, use this!**|

---

Tags: `#core-concept` `#python` `#loops`