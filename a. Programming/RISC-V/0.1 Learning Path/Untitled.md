C:\GITHUB\GOLANG-BY-TREVORS-UDEMY\RISC-V
├── 0. Installation and Compilation
│   ├── 1. Installation Step by Step.md
│   ├── 2. Fix - RISC-V Toolchain Build Failed.md
│   ├── 3. Issue - fatal error - Killed signal terminated program cc1plus.md
│   ├── 4. Summarized.md
│   ├── 5. Choosing an Editor for RISC-V Assembly in WSL.md
│   ├── 6. Setting Up VS Code for RISC-V Assembly.md
│   ├── 7. Assemble - Object - Executable.md
│   ├── 8. Shell Script - One-Step Compilation.md
│
├── 0.1 Learning Path
│   ├── 1. Overview of the Learning Path.md
│   ├── 2. Suggested Study Order.md
│   ├── 3. Tips for Learning RISC-V Efficiently.md
│   ├── 4. Learning Path Reinforcement.md
│
├── 1. Understanding the Basics (Foundational)
│   ├── 1.1 Original Note
│   │   ├── 1.1.1 What is the basic structure of a RISC-V assembly program.md
│   │   ├── 1.1.2 RISC-V Syntax & How Instructions Are Written.md
│   │   ├── 1.1.3 What are directives in assembly, and why do we use them.md
│   │
│   ├── 1.2 Reinforcement
│   │   ├── 1.2.1 How the Assembler Processes a RISC-V Program.md
│   │   ├── 1.2.2 What Happens During Assembling, Linking, and Execution.md
│
├── 2. How the CPU Executes Code (Execution Flow)
│   ├── 2.1 Original Note
│   │   ├── 2.1.1 How does a RISC-V CPU start execution - Where does it get its first instruction.md
│   │   ├── 2.1.2 What is the relationship between CPU and memory in assembly execution.md
│   │
│   ├── 2.2 Reinforcement
│   │   ├── 2.2.1 How the CPU Fetches and Decodes Instructions.md
│   │   ├── 2.2.2 What Happens Inside the CPU When Executing an Instruction.md
│   │   ├── 2.2.3 How Register Usage Affects Performance.md
│
├── 3. Minimum Requirements to Run a Program
│   ├── 3.1 Original Note
│   │   ├── 3.1.1 What is the absolute minimum needed to run a RISC-V assembly program.md
│   │   ├── 3.1.2 Why do we need .global _start, and what does it do.md
│   │
│   ├── 3.2 Reinforcement
│   │   ├── 3.2.1 How Execution Starts from `_start`.md
│   │   ├── 3.2.2 What Happens if `_start` is Missing.md
│   │   ├── 3.2.3 What the Linker Does in RISC-V.md
│
├── 4. Registers & Data Storage (Before System Calls)
│   ├── 4.1 Original Note
│   │   ├── 4.1.1 What are a0, a1, etc., and why do we use them.md
│   │   ├── 4.1.2 How do I declare a variable and assign a value in RISC-V.md
│   │   ├── 4.1.3 Why can 0 be used multiple times in assembly What is x0.md
│   │
│   ├── 4.2 Reinforcement
│   │   ├── 4.2.1 How the CPU Handles `lw` and `sw` at the Hardware Level.md
│   │   ├── 4.2.2 How Memory Alignment Affects Performance.md
│   │   ├── 4.2.3 How `x0` Works Internally.md
│
├── 5. System Calls & Interacting with the OS
│   ├── 5.1 Original Note
│   │   ├── 5.1.1 What are system calls (`ecall`), and how do they work in RISC-V.md
│   │   ├── 5.1.2 What Is the Difference Between Directives and System Calls in RISC-V.md
│   │
│   ├── 5.2 Reinforcement
│   │   ├── 5.2.1 How `ecall` Works at the OS Level.md
│   │   ├── 5.2.2 Difference Between User Mode and Supervisor Mode.md
│   │   ├── 5.2.3 How System Calls Are Processed by the OS.md
│
├── 6. Core Assembly Operations
│   ├── 6.1 Original Note
│   │   ├── 6.1.1 Basic Arithmetic.md
│   │   ├── 6.1.2 Loading & Storing Data in Memory.md
│   │   ├── 6.1.3 Loops & Function Calls.md
│   │   ├── 6.1.4 Branching & Conditions.md
│   │
│   ├── 6.2 Reinforcement
│   │   ├── 6.2.1 How Arithmetic Instructions Work at the Hardware Level.md
│   │   ├── 6.2.2 What Happens When Register Overflows in Arithmetic.md
│   │   ├── 6.2.3 How Signed and Unsigned Numbers Work in RISC-V.md
│
├── 7. Control Flow & Loops
│   ├── 7.1 Original Note
│   │   ├── 7.1.1 Overview of Control Flow in RISC-V.md
│   │   ├── 7.1.2 Branching Instructions.md
│   │   ├── 7.1.3 Jumping Instructions in RISC-V.md
│   │   ├── 7.1.4 Looping in RISC-V.md
│   │   ├── 7.1.5 Function Calls & Stack.md
│   │
│   ├── 7.2 Reinforcement
│   │   ├── 7.2.1 How Nested Loops Work in Assembly.md
│   │   ├── 7.2.2 Understanding the Difference Between `beq` and `blt`.md
│   │   ├── 7.2.3 How Function Calls Use Stack (`sp`) for Local Variables.md
│
├── 8. Handling Function Recursion with Stack Frames
│   ├── 8.1 Original Note
│   │   ├── 8.1.1 How recursive functions work in RISC-V.md
│   │   ├── 8.1.2 Stack frame management for recursive calls.md
│   │   ├── 8.1.3 Base case and recursive case handling.md
│   │
│   ├── 8.2 Reinforcement
│   │   ├── 8.2.1 How recursive calls store return addresses in the stack.md
│   │   ├── 8.2.2 Understanding stack overflow in recursion.md
│
├── 9. Calling Conventions (How Multiple Functions Interact)
│   ├── 9.1 Original Note
│   │   ├── 9.1.1 Caller-saved vs. callee-saved registers.md
│   │   ├── 9.1.2 How functions pass and return multiple values.md
│   │   ├── 9.1.3 Preserving registers across function calls.md
│   │
│   ├── 9.2 Reinforcement
│   │   ├── 9.2.1 Deep dive into function call stack behavior.md
│   │   ├── 9.2.2 How multiple function calls interact in nested function calls.md
