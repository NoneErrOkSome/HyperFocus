Great! Here's **Part 3: ARP in Action – Lab Walkthrough**, where we bring theory to life by observing ARP behavior on real systems using Windows and Linux tools.

---

# 🧪 Part 3: ARP in Action – Lab Walkthrough

This part demonstrates how ARP behaves **behind the scenes** when two devices on the same subnet communicate. You’ll learn how to generate ARP traffic, inspect ARP cache tables, and understand what you’re seeing on both **Windows and Linux**.

---

## 🖧 Lab Setup

|Device|IP Address|OS|
|---|---|---|
|Host A|172.23.4.1|Windows|
|Host B|172.23.4.2|Linux|

Goal: From Host A, **ping Host B** to generate ARP traffic, then inspect ARP entries on both sides.

---

## 🔁 Step-by-Step Walkthrough

---

### 🔹 Step 1: Check IP Configuration on Windows Host

Open **Command Prompt** on Host A:

```cmd
ipconfig
```

Example output:

```
IPv4 Address. . . . . . . . . . . : 172.23.4.1
Subnet Mask . . . . . . . . . . . : 255.255.255.0
Default Gateway . . . . . . . . . : 172.23.4.254
```

Confirms the host’s IP and subnet.

---

### 🔹 Step 2: Ping the Linux Host (172.23.4.2)

Still on Host A (Windows), generate traffic:

```cmd
ping 172.23.4.2
```

This will trigger:

- DNS resolution (if hostname used)
    
- **ARP resolution** (if MAC not cached)
    
- ICMP echo request (ping)
    

Behind the scenes:

- Windows checks the **ARP cache**
    
- If no MAC for 172.23.4.2, sends **ARP request**
    
- Gets **ARP reply**
    
- Caches the mapping
    
- Sends ping over Ethernet
    

---

### 🔹 Step 3: View ARP Cache on Windows

```cmd
arp -a
```

Sample output:

```
Interface: 172.23.4.1 --- 0x3
  Internet Address      Physical Address      Type
  172.23.4.2            22-22-33-33-44-44     dynamic
```

✅ You now see the **MAC address** of Host B in the ARP cache.

---

### 🔹 Step 4: Check ARP Cache on Linux Host

On Host B (Linux), open a terminal and run:

```bash
arp -n
```

Sample output:

```
Address           HWtype  HWaddress           Iface
172.23.4.1        ether   11:11:22:22:33:33   eth0
```

✅ You now see the MAC of Host A on the Linux side.

---

## 📦 Behind the Scenes Recap

|Action|What Happened?|
|---|---|
|`ping 172.23.4.2`|Triggered ARP if MAC wasn’t cached|
|`arp -a` (Windows)|Showed dynamic MAC entry for 172.23.4.2|
|`arp -n` (Linux)|Showed dynamic MAC entry for 172.23.4.1|

---

## 🧠 Key Takeaways

- ARP entries are created **on demand** when traffic is first sent
    
- ARP entries are **cached** temporarily
    
- If no traffic is sent for a while, the entries **expire**
    
- Tools like `arp -a` and `arp -n` let you **inspect** what the OS learned
    

---

## 🔍 Optional: Clear the ARP Cache

For troubleshooting or testing, you may want to **flush** the cache:

### Windows:

```cmd
arp -d *
```

### Linux (depends on distro):

```bash
ip -s -s neigh flush all
```

---

## ✅ Summary

|Tool / Action|Purpose|
|---|---|
|`ping [IP]`|Generates ARP traffic if MAC is unknown|
|`arp -a` (Windows)|Shows current ARP cache|
|`arp -n` (Linux)|Shows ARP cache without hostname resolution|
|`arp -d *` or flush cmd|Clears ARP entries (for troubleshooting or retesting)|

---

Let me know when you're ready to move on to **Part 4: Managing and Troubleshooting the ARP Cache** — where we explore cache expiration, corruption, and practical use of ARP flushing!