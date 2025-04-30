```c
#include <stdio.h>

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    // Insertion Sort logic inside main
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        // Move elements that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Insert key at the correct position
    }

    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
```


### **Step-by-Step Explanation of Insertion Sort in `main`**

#### **Initial Array**

```c
int arr[] = {12, 11, 13, 5, 6};
```

Size of array: `n = 5`

### **Sorting Process**

The algorithm starts from the second element (`arr[1]`) and inserts it into its correct position in the already sorted portion (`arr[0]`).

---

### **Step 1: Sorting `arr[1] = 11`**

- `key = 11`, `j = 0`
- Compare `arr[0] = 12` with `key = 11`
- Since `12 > 11`, shift `12` to the right (`arr[1] = 12`)
- Insert `11` at `arr[0]`

**Array after Step 1:** `{11, 12, 13, 5, 6}`

---

### **Step 2: Sorting `arr[2] = 13`**

- `key = 13`, `j = 1`
- Compare `arr[1] = 12` with `key = 13`
- Since `12 < 13`, **no shifting needed** (13 is already in the correct place)

**Array after Step 2:** `{11, 12, 13, 5, 6}`

---

### **Step 3: Sorting `arr[3] = 5`**

- `key = 5`, `j = 2`
- Compare `arr[2] = 13` with `key = 5` → shift `13`
- Compare `arr[1] = 12` with `key = 5` → shift `12`
- Compare `arr[0] = 11` with `key = 5` → shift `11`
- Insert `5` at `arr[0]`

**Array after Step 3:** `{5, 11, 12, 13, 6}`

---

### **Step 4: Sorting `arr[4] = 6`**

- `key = 6`, `j = 3`
- Compare `arr[3] = 13` with `key = 6` → shift `13`
- Compare `arr[2] = 12` with `key = 6` → shift `12`
- Compare `arr[1] = 11` with `key = 6` → shift `11`
- Insert `6` at `arr[1]`

**Final Sorted Array:** `{5, 6, 11, 12, 13}`

---

### **Final Output**

```
Original array: 12 11 13 5 6 
Sorted array: 5 6 11 12 13 
```

### **Time Complexity Analysis**

- **Best Case (Already Sorted)**: **O(n)** (only one comparison per element)
- **Worst Case (Reverse Sorted)**: **O(n²)** (nested loop runs fully)
- **Average Case**: **O(n²)**

Would you like to see this with a **larger dataset**, or an animation-style breakdown? 🚀