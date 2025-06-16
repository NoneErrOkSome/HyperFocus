Of course. It's very useful to have a dedicated note for the practical uses of a data structure.

Here is the note for **02 - How to Use a Stack (Undo Button).md**, created from the details of our conversation.

---

# How to Use a Stack 💡

A [[01 - Stack - The Pile of Plates (LIFO)]] is one of the most useful data structures because it's perfect for any problem that involves **"going backward,"** **"reversing order,"** or **"undoing"** something.

Its **LIFO** (Last-In, First-Out) rule is the key. Here are the three main examples we talked about.

---

## Example 1: The "Undo" Button ↩️

This is the most famous use for a Stack. Imagine a simple drawing app.

### The Idea

Every time you draw something (a line, a circle, a color fill), the program **Pushes** a description of that action onto a stack.

### The Action

When you click the "Undo" button, the program simply **Pops** the last action from the stack. Now it knows exactly what action to reverse (for example, to erase the last circle you drew).

### How it Looks in Code

Python

```Python
# This stack stores a history of all actions
actions_stack = []

# User draws a circle at position (10, 20)
actions_stack.append("drew circle at (10, 20)")
# actions_stack is now: ["drew circle at (10, 20)"]

# User draws a square at position (50, 60)
actions_stack.append("drew square at (50, 60)")
# actions_stack is now: ["drew circle...", "drew square..."]

# User clicks the UNDO button!
last_action = actions_stack.pop()

# The 'last_action' variable now holds "drew square at (50, 60)".
# The program knows exactly what to erase!
# The stack now just contains ["drew circle at (10, 20)"]
```

---

## Example 2: Solving a Maze 🗺️

A stack is perfect for finding your way out of a maze because it can remember the path you took.

### The Idea

Think of the stack as your **"trail of breadcrumbs."**

### The Action

- When you move to a new spot or junction, you **Push** your location onto the stack.
- If you hit a **dead end**, you know you made a mistake. You **Pop** the last location from the stack, which takes you right back to the last place where you had a choice.

### How it Looks in Code

Python

```Python
path_i_took = []

# You start at the Entrance and move to a Crossroad
path_i_took.append("Entrance")
path_i_took.append("Crossroad")
# path_i_took is now: ["Entrance", "Crossroad"]

# At the Crossroad, you decide to go Left and hit a Dead End
path_i_took.append("Dead End")
# path_i_took is now: ["Entrance", "Crossroad", "Dead End"]

# Oops! Time to go back.
last_place = path_i_took.pop() # last_place becomes "Dead End"

# The top of the stack is now "Crossroad", so you know where you are.
# You can now try going Right instead!
```

---

## Example 3: A Deck of Cards 🃏

A real-life deck of cards that you draw from the top is a perfect stack.

### The Idea

The card on top of the deck is the last one that was placed there during shuffling, and it's the first one to be drawn.

### The Action

- When you prepare the game, you can imagine **Pushing** all 52 cards onto the stack.
- When a player needs to "draw a card," the program just **Pops** the top card from the stack. This guarantees it's the top card and it can't be drawn again.

### How it Looks in Code

Python

```Python
# Imagine this is a full deck of cards
card_deck = ["Ace of Spades", "King of Hearts", "Queen of Clubs"]

# A player draws a card
top_card = card_deck.pop()

# top_card is now "Queen of Clubs"
# The deck is now smaller: ["Ace of Spades", "King of Hearts"]
```

---

Tags: `#stack` `#use-case` `#data-structure` `#algorithm-idea`