Here’s a clean list of the **command review** from **Day 4 – Intro to the CLI**, with each command followed by a **clear explanation**:

---

## 🧾 Cisco CLI Command Review (with Explanations)

### 1. `enable`

- **Purpose:** Enter **privileged EXEC mode** from user EXEC mode.
    
- **Prompt change:** From `>` to `#`
    

---

### 2. `configure terminal` (shortcut: `conf t`)

- **Purpose:** Enter **global configuration mode** from privileged EXEC mode.
    
- **Prompt change:** From `#` to `(config)#`
    

---

### 3. `enable password [PASSWORD]`

- **Purpose:** Set a **basic password** for accessing privileged EXEC mode.
    
- **Note:** Stored in **plain text**, not secure by default.
    

---

### 4. `service password-encryption`

- **Purpose:** Encrypt all passwords configured (like `enable password`)
    
- **Encryption type:** Type 7 (weak, easily crackable)
    
- **Note:** Only affects plain-text passwords, _not_ `enable secret`.
    

---

### 5. `enable secret [PASSWORD]`

- **Purpose:** Set a **secure encrypted password** for privileged EXEC mode.
    
- **Encryption type:** Type 5 (MD5)
    
- **Note:** Overrides `enable password` if both are set.
    

---

### 6. `do`

- **Purpose:** Run **privileged EXEC commands** (like `show`) while inside configuration modes.
    
- **Example:** `do show running-config` inside global config mode.
    

---

### 7. `no [COMMAND]`

- **Purpose:** Remove or undo a previously entered command.
    
- **Example:** `no service password-encryption`
    

---

### 8. `show running-config`

- **Purpose:** View the **active configuration** currently running in memory.
    

---

### 9. `show startup-config`

- **Purpose:** View the **saved configuration** that loads after a reboot.
    

---

### 10. `write`

- **Purpose:** Save the current running configuration to startup-config.
    
- **Same as:** `write memory` and `copy running-config startup-config`
    

---

### 11. `write memory`

- **Purpose:** Alternate form of `write`, same function.
    

---

### 12. `copy running-config startup-config`

- **Purpose:** Copy the running config to startup config (most explicit and descriptive).
    

---

Let me know if you want this formatted into **flashcards**, **quiz questions**, or a **lab checklist**!