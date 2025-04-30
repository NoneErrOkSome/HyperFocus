Here’s **Part 3: How to Configure a Cisco Router as a DNS Server**, rewritten in a structured, deep-dive format based on the lecture and expanded for clarity:

---

# 🖥️ Part 3: How to Configure a Cisco Router as a DNS Server

Although it’s not common in production networks, Cisco routers can be configured to **act as DNS servers**. This is useful for **lab environments**, **testing**, or **isolated networks** with no dedicated DNS infrastructure.

---

## ✅ Goal

Configure a router (R3 in our example) to:

- Act as a **DNS server**
    
- Respond to DNS requests from clients (like R1)
    
- Host static entries for known devices (like R1, R2, R3)
    

---

## 🔧 1. Start with Global Configuration Mode

```bash
conf t
```

This puts you in the configuration context required to enter all commands.

---

## 🔧 2. Enable DNS Functionality

Before a router can act as a DNS server, it must be allowed to **perform DNS resolution**.

```bash
ip domain-lookup
```

Even though this is more commonly used on DNS **clients**, it's still required on the server for internal lookups.

---

## 🔧 3. Set the Local DNS Server's IP

Even though the router is acting as its own DNS server, we still explicitly define its own address:

```bash
ip name-server 10.10.20.1
```

This can be useful when the router needs to resolve names that **itself is authoritative for**.

---

## 🔧 4. Define the Primary Domain

```bash
ip domain-name flackbox.lab
```

This sets the local DNS zone the router is authoritative for. Any host entries added will be under this domain.

---

## 🔧 5. Enable DNS Server Mode

This is the key command that makes the router act as a DNS server:

```bash
ip dns server
```

Now the router will **listen for DNS queries** and respond with any known host entries you configure.

---

## 🧾 6. Add Static Host Entries

To allow name-to-IP resolution, you must add records manually using:

```bash
ip host [NAME] [IP]
```

You can add short hostnames or full FQDNs.

### ▶️ Examples:

```bash
ip host R1 10.10.10.1
ip host R2 10.10.10.2
ip host R3 10.10.20.1

ip host R1.flackbox.lab 10.10.10.1
ip host R2.flackbox.lab 10.10.10.2
ip host R3.flackbox.lab 10.10.20.1
```

🧠 **Note:** You can enter **both** short names and full FQDNs. The router will match either.

---

## 📜 Final Configuration Summary (on R3 – DNS Server)

```bash
conf t
ip domain-lookup
ip name-server 10.10.20.1
ip domain-name flackbox.lab
ip dns server

ip host R1 10.10.10.1
ip host R2 10.10.10.2
ip host R3 10.10.20.1

ip host R1.flackbox.lab 10.10.10.1
ip host R2.flackbox.lab 10.10.10.2
ip host R3.flackbox.lab 10.10.20.1
end
```

---

## 📌 When Is This Useful?

- Lab testing and simulations (like CCNA/CCNP labs)
    
- Networks without a full-featured DNS server (e.g., no Windows/Linux DNS)
    
- Lightweight setups where basic static name resolution is enough
    

---

## 🚫 When Not to Use This

- Large-scale or production environments
    
- Where dynamic DNS, forwarding, or external resolution is needed
    
- If you need DNS logging, analytics, or zone transfers
    

---

## 🧠 Summary Table

|Command|Function|
|---|---|
|`ip dns server`|Enables DNS server mode on the router|
|`ip host [name] [IP]`|Adds static hostname-to-IP mapping|
|`ip domain-name`|Sets domain for FQDNs (like `.lab`)|
|`ip name-server`|Used for recursive lookups if needed|

---

Let me know when you're ready for **Part 4: Testing DNS Resolution Between Routers**, where we confirm that name lookups from the client (R1) work correctly through the server (R3)!