Is it possible to check if a value exists in a map without using the key?

No, in Go, maps are primarily designed to be **key-value** pairs, where you always **lookup by key**, not by value. There is no direct way to search for a value in a map without providing a key. The map itself doesn’t have a built-in function to search for values directly.

If you want to check if a **value** exists in a map (without knowing the key), you would need to iterate over all the key-value pairs and manually compare the values.

### Example: Checking for a Value in a Map
Here's how you can iterate over a map to check if a certain value exists:
```go
myMap := map[string]int{"apple": 5, "banana": 3, "orange": 8}

valueToFind := 3
found := false

for _, value := range myMap {
    if value == valueToFind {
        found = true
        break
    }
}

if found {
    fmt.Println("Value exists in the map")
} else {
    fmt.Println("Value not found in the map")
}
```

### Explanation:
- We iterate over the map using a `for` loop.
- The loop retrieves only the **values** (`_` is used to ignore the keys).
- If the value matches what we’re searching for (`valueToFind`), we set `found` to `true` and break the loop.
  
So, **maps are inherently designed for key lookups** in Go. For searching by value, manual iteration is the only way.

---
The underscore (`_`) in Go means **ignore the value**. It's used to skip a value that you don't need, either a key, a value, or an error, depending on the context. 

For example, when iterating over a map, using `_` for the key means you're ignoring the key and only caring about the value:

```go
for _, value := range myMap {
    // process value, key is ignored
}
```

In this case, the underscore skips or ignores the key.