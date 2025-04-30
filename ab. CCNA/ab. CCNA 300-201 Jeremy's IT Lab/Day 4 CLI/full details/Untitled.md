Here is a **clear, casually structured, plain-text Markdown list** of the contents from **Free CCNA | Intro to the CLI | Day 4**, with **timestamps** included:

---

## ⌨️ Intro to the Cisco CLI – Day 4

- **00:00:01** Jeremy's IT Lab CCNA course intro – completely free.
    
- **00:00:26** Start of Lesson 4: Begin configuring Cisco devices via CLI.
    

---

### 💻 What is Cisco IOS & CLI?

- **00:00:35** Cisco IOS is the OS for Cisco devices (like Windows/macOS).
    
- **00:00:54** CLI = Command Line Interface (vs. GUI).
    
- **00:01:19** GUI example: Cisco ASDM – not used in this course.
    
- **00:01:48** Initial connection via **console port**.
    
- **00:02:15** RJ45 and USB-mini console ports shown.
    
- **00:02:36** Rollover cable (RJ45 to DB9) explained.
    
- **00:03:05** Most laptops require a USB adapter for console cable.
    

---

### 🔌 Terminal Emulator Setup

- **00:03:50** Use PuTTY (putty.org) for serial CLI access.
    
- **00:04:28** Default serial settings for Cisco:
    
    - Speed (baud): 9600 bps
        
    - 8 data bits, 1 stop bit
        
    - No parity, no flow control
        

---

### 🔐 CLI Modes Overview

- **00:05:21** Initial login message, reject initial config dialog.
    
- **00:05:43** CLI mode 1: **User EXEC mode** (`>` symbol)
    
- **00:06:33** CLI mode 2: **Privileged EXEC mode** (`#` symbol)
    
    - Command: `enable`
        
- **00:07:06** Comparison of User vs Privileged EXEC commands
    

---

### 🧠 CLI Shortcuts

- **00:07:52** Use `?` to list commands.
    
- **00:08:02** Use `Tab` for auto-complete (`en` → `enable`).
    
- **00:08:34** Shortest unique command abbreviation usable.
    
- **00:09:16** Use `?` with a space for next argument hints.
    

---

### 🛠️ Entering Global Configuration Mode

- **00:09:39** CLI mode 3: **Global Configuration Mode**
    
    - Command: `configure terminal` or shortcut `conf t`
        
- **00:10:29** Set password for privileged EXEC mode:
    
    - Command: `enable password CCNA`
        

---

### ⚠️ Password Handling

- **00:11:02** Passwords are case-sensitive.
    
- **00:11:17** `cr` = carriage return; no further arguments expected.
    
- **00:12:13** Password not displayed while typing.
    
- **00:13:04** Wrong password 3x = "bad secrets"
    

---

### 📄 Config Files on Cisco Devices

- **00:14:33** Two config files:
    
    - **running-config**: current active config
        
    - **startup-config**: loaded after reboot
        
- **00:15:14** View configs:
    
    - `show running-config`
        
    - `show startup-config`
        

---

### 💾 Save the Configuration

- **00:16:00** 3 ways to save:
    
    - `write`
        
    - `write memory`
        
    - `copy running-config startup-config`
        

---

### 🔒 Enable Password Security

- **00:17:03** Password is stored in **plain text**
    
- **00:17:18** Use `service password-encryption` to obfuscate password
    
- **00:18:14** Result = type 7 encrypted password (weak)
    

---

### 🔐 Use `enable secret` Instead

- **00:19:05** Stronger method: `enable secret Cisco`
    
- **00:19:24** Use `do` to run `show` in config mode
    
- **00:19:55** `enable secret` uses **type 5 (MD5)** encryption
    
- **00:20:13** If both `enable password` and `enable secret` are set,
    
    - **Only `enable secret` is used**
        

---

### ❌ Deleting Commands

- **00:20:51** Use `no` in front of commands to remove them
    
- **00:21:14** `no service password-encryption` stops encrypting future passwords
    
- **00:21:52** Already encrypted ones remain encrypted
    

---

## 📋 Summary of CLI Modes & Commands

### CLI Modes

- User EXEC Mode – `>`
    
- Privileged EXEC Mode – `#`
    
- Global Configuration Mode – `(config)#`
    

### Key Commands

- `enable` – go to privileged EXEC
    
- `configure terminal` – enter global config
    
- `enable password` – set basic password
    
- `enable secret` – set stronger password (type 5)
    
- `service password-encryption` – encrypts passwords (type 7)
    
- `no` – remove command
    
- `show running-config` – view active config
    
- `show startup-config` – view boot config
    
- `write`, `write memory`, or `copy run start` – save config
    
- `do` – run exec commands in config mode
    

---

## 🧠 Quiz Review

### Q1: Cable for RJ45 console?

- ✅ A: Rollover cable
    

### Q2: Password not accepted – why?

- ✅ C: Caps Lock is on
    

### Q3: Most secure password method?

- ✅ A: `enable secret`
    

### Q4: If both enable secret & password set?

- ✅ C: Only `enable secret` is used
    

### Q5: Full command of `conf t`?

- ✅ B: `configure terminal`
    

---

Let me know if you'd like a **study flashcard set**, **lab checklist**, or **packet tracer config cheat sheet** from this lesson!