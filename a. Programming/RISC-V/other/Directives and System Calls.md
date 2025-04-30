### **Directives and System Calls in RISC-V Assembly**

In **RISC-V Assembly**, everything relies on **directives** and **system calls (`ecall`)**. Let’s break down **what they do**.

---

## **1️⃣ What Are Directives? (`.section`, `.global`, etc.)**

**Directives** are **commands for the assembler** (they do not generate machine code).  
They help **organize code**, define **data**, and set up **memory**.

|**Directive**|**What It Does**|**Example**|
|---|---|---|
|`.section .text`|Marks the **code section**|`.section .text`|
|`.section .data`|Marks the **data section** (for variables)|`.section .data`|
|`.global _start`|Makes `_start` **visible to the linker**|`.global _start`|
|`.asciz "Hello"`|Stores a **null-terminated string**|`msg: .asciz "Hello"`|
|`.word 10`|Stores a **32-bit integer**|`var: .word 10`|

💡 **Directives are only used at assembly time** → The CPU **never sees them**.

---

## **2️⃣ What Are System Calls (`ecall`)?**

System calls are how **assembly interacts with the operating system (Linux)**.  
They allow us to **print text, read input, exit, and more**.

🔹 **System calls use registers:**

|**Register**|**Purpose**|
|---|---|
|`a7`|**Syscall number** (which syscall to use)|
|`a0`|**1st argument** (e.g., file descriptor, exit code)|
|`a1`|**2nd argument** (e.g., string address)|
|`a2`|**3rd argument** (e.g., string length)|

🔹 **Common Syscalls:**

|**Syscall Number (`a7`)**|**Syscall Name**|**Purpose**|
|---|---|---|
|`64`|`write`|Print text|
|`63`|`read`|Read input|
|`93`|`exit`|Exit program|

---

## **3️⃣ Example: Printing a String (Using `.asciz` and `write` Syscall)**

```assembly
.section .data
msg: .asciz "Hello, RISC-V!\n"

.section .text
.global _start

_start:
    la   a1, msg   # Load address of msg into a1
    li   a0, 1     # File descriptor (1 = stdout)
    li   a2, 15    # Length of string
    li   a7, 64    # Syscall number (write)
    ecall          # Call kernel to print

    li   a7, 93    # Syscall number (exit)
    li   a0, 0     # Exit code
    ecall
```

✅ **This prints `"Hello, RISC-V!"` and exits cleanly.**

---

## **4️⃣ Example: Reading Input (Using `read` Syscall)**

```assembly
.section .data
buffer: .space 20  # Reserve 20 bytes for input

.section .text
.global _start

_start:
    li   a0, 0      # File descriptor (0 = stdin)
    la   a1, buffer # Address of input buffer
    li   a2, 20     # Max input length
    li   a7, 63     # Syscall number (read)
    ecall           # Call kernel to read input

    li   a7, 93     # Syscall number (exit)
    li   a0, 0      # Exit code
    ecall
```

✅ **This waits for user input (up to 20 bytes), then exits.**

---

## **📌 Summary**

|**Concept**|**Used For**|**Example**|
|---|---|---|
|**Directives**|Organizing code (`.text`, `.data`)|`.section .text`|
|**Directives**|Declaring variables|`.word 10`, `.asciz "Hello"`|
|**System Calls (`ecall`)**|Printing text (`write`)|`li a7, 64`|
|**System Calls (`ecall`)**|Reading input (`read`)|`li a7, 63`|
|**System Calls (`ecall`)**|Exiting program (`exit`)|`li a7, 93`|

🔹 **Directives** = **Assembler-only** (not seen by CPU).  
🔹 **Syscalls** = **Ask OS to do something (printing, exiting, etc.).**

Would you like an **example of using `read` and `write` together**? 😊