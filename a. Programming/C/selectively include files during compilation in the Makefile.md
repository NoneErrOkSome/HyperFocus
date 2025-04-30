The **least complicated way** is to **selectively include files during compilation in the `Makefile`**, without using conditional compilation (preprocessor macros). You can directly control which files to compile by modifying the `Makefile` based on the files you want to include.

Here’s the simplest solution:

---

### **Setup**

1. Keep all your files (e.g., `main.c`, `circle.c`, `circle.h`, etc.) in the same folder.
2. Modify the `Makefile` to allow toggling files by adding or removing them from the list of source files.

---

### **Makefile**

Here’s a minimal and straightforward `Makefile`:

```Makefile
# Compiler and flags
CC = gcc
CFLAGS = -Wall -Wextra -std=c17 -g

# Define the files to include
SRCS = main.c        # Always include main.c
# Uncomment the files you want to compile:
# SRCS += circle.c
# SRCS += triangle.c

# Build the executable
all: main

main: $(SRCS)
	$(CC) $(CFLAGS) -o main $(SRCS)

# Clean up the compiled files
clean:
	rm -f main
```

---

### **How It Works**

1. **Enable or Disable Files**:
    
    - To include `circle.c` in the compilation, uncomment the `SRCS += circle.c` line:
        
        ```Makefile
        SRCS += circle.c
        ```
        
    - To exclude it, comment the line:
        
        ```Makefile
        # SRCS += circle.c
        ```
        
2. **Compile**: Run the `make` command in your terminal:
    
    ```bash
    make
    ```
    
3. **Run the Program**:
    
    ```bash
    ./main
    ```
    
4. **Clean Up**: Remove the compiled executable with:
    
    ```bash
    make clean
    ```
    

---

### **Why This is Simple**

- No need to modify your source code (`main.c`, `circle.c`, etc.).
- Toggling files is as simple as commenting or uncommenting lines in the `Makefile`.
- No need for preprocessor macros like `#ifdef` or `#define`.

---

### **Example Use Cases**

#### **Case 1: Compile Only `main.c`**

Default `Makefile`:

```Makefile
SRCS = main.c
```

Command:

```bash
make
```

Result: Only `main.c` is compiled.

#### **Case 2: Compile `main.c` with `circle.c`**

Update `Makefile`:

```Makefile
SRCS = main.c
SRCS += circle.c
```

Command:

```bash
make
```

Result: Both `main.c` and `circle.c` are compiled.

#### **Case 3: Compile `main.c` with Multiple Files**

Add more files:

```Makefile
SRCS = main.c
SRCS += circle.c
SRCS += triangle.c
```

Command:

```bash
make
```

Result: `main.c`, `circle.c`, and `triangle.c` are compiled.

---

This approach avoids complexity, works as intended, and keeps the `Makefile` straightforward. Let me know if you need help setting this up!