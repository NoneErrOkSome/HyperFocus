Alright, let’s deep-dive into this CLI intro video like you’re sitting next to a friend who’s walking you through it, not like a lecture. I'm gonna explain everything in plain, casual terms—details included.

---

## 🖥️ Getting into the Cisco World

So Jeremy kicks things off saying _we're finally touching real Cisco gear_—this is where the actual configuration begins. If this was a video game, we just got through the tutorial, and now we’re picking up our first weapon.

### 🧠 IOS? CLI? GUI?

- **Cisco IOS** is just the operating system on Cisco devices—think of it like Windows on your laptop, but this one runs your network gear like routers and switches.
    
- **CLI (Command Line Interface)** is how you talk to the IOS—just text commands, no clicking.
    
- **GUI (Graphical User Interface)** exists, but network engineers barely use it. It’s like preferring to use a keyboard shortcut over hunting down a button in a menu.
    

---

## 🔌 How You Connect to a Cisco Device (Physically)

To start working with a device, you don’t connect over Wi-Fi or SSH at first. Nope. You **plug in directly** via the **console port**.

### Two Console Port Types:

1. **RJ45 console port** (looks like Ethernet)
    
2. **USB mini-B console port** (the funky-looking one like a PS3 controller cable)
    

### You need:

- A **rollover cable** (not crossover) – wires are flipped around inside.
    
- A **DB9 to USB adapter**, because modern laptops don’t have serial ports.
    

---

## 🖥️ Using Software to Talk to the CLI

You open up a terminal emulator (like PuTTY), choose **Serial**, and hit connect.

### Default serial settings:

- **Speed**: 9600 bits/sec
    
- **Data bits**: 8
    
- **Stop bits**: 1
    
- **Parity**: none
    
- **Flow control**: none
    

Most of the time, you just plug in and go. But knowing these is important for the exam.

---

## 🚪 Modes in the CLI

There are **three major modes** you’ll use constantly.

### 1. **User EXEC Mode** (low-power mode)

- Prompt: `Router>`
    
- You can look, but you can't touch (no config allowed).
    

### 2. **Privileged EXEC Mode**

- Enter with: `enable` (shortcut: `en`)
    
- Prompt: `Router#`
    
- You can view everything, reboot the device, copy files, etc.
    

### 3. **Global Configuration Mode**

- Enter with: `configure terminal` (shortcut: `conf t`)
    
- Prompt: `Router(config)#`
    
- This is the mode for **making real changes**—changing names, passwords, interfaces, etc.
    

---

## 🔑 Setting Passwords

You don’t want anyone randomly typing `enable` and getting full access.

### Add a password to the `enable` command:

```bash
enable password CCNA
```

Important detail: Passwords are **case-sensitive**.

You’ll notice when you type the password, nothing shows up—no asterisks or anything. It’s a security thing.

---

## 👀 What’s Up with the Config Files?

Cisco has **two config files**:

- **Running-config**: The one that's live right now.
    
- **Startup-config**: What gets loaded when the device reboots.
    

If you configure something and reboot before saving it—you lose it.

### How to save your config:

You can do any of these:

```bash
write
write memory
copy running-config startup-config
```

All three save the running config to the startup config.

---

## 🔐 Password Visibility and Security

Uh-oh. If you look at your config, your password is just... there in **plain text**. Big no-no.

### Add basic password encryption:

```bash
service password-encryption
```

Now the password is scrambled, but don’t celebrate too hard—it’s weak (Type 7), and can be cracked easily online.

### Use this instead:

```bash
enable secret Cisco
```

- This uses MD5 (Type 5 encryption).
    
- **If both `enable password` and `enable secret` are set, `enable secret` takes priority.**
    

Also, `enable secret` is **always encrypted**, no matter what.

---

## 🧽 Removing Stuff

Let’s say you want to undo something. Just stick a `no` in front of the command:

```bash
no service password-encryption
```

If you do that:

- **Existing encrypted passwords stay encrypted.**
    
- **Future ones won’t be encrypted.**
    

---

## ✨ Cool CLI Tricks

- **TAB key**: Auto-completes commands.
    
- **?**: Shows available options. Use it with and without spaces to see different things.
    
- **Shortcuts**: You can abbreviate commands as long as they’re unambiguous.
    

Examples:

```bash
en      # for enable
conf t  # for configure terminal
```

---

## 🧠 Review of Commands

Here's a cheat sheet from the video:

|Command|What It Does|
|---|---|
|`enable`|Enter privileged exec mode|
|`configure terminal` or `conf t`|Enter global config mode|
|`enable password XYZ`|Set enable password|
|`enable secret XYZ`|Set encrypted enable password|
|`service password-encryption`|Encrypt plain-text passwords|
|`no` + command|Cancel a command|
|`show running-config`|See current config|
|`show startup-config`|See saved config|
|`write`, `write memory`, `copy running-config startup-config`|Save config|
|`do` + command|Run exec command from config mode|
|`exit`|Exit current mode|

---

## 🧠 Quiz Highlights (from the video)

1. **Cable to use for console port?** → _Rollover_
    
2. **Password not accepted?** → _Probably Caps Lock_ (they’re case-sensitive)
    
3. **Most secure password command?** → `enable secret`
    
4. **If both `enable password` & `enable secret` are set?** → Only `enable secret` is used.
    
5. **Full version of `conf t`?** → `configure terminal`
    

---

Let me know if you want this turned into a Markdown note for Obsidian or want visual diagrams!