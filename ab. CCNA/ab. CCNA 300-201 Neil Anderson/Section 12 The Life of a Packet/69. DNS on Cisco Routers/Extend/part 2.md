Here’s **Part 2: How to Configure a Cisco Router as a DNS Client**, explained step by step in my own words, with real use-case logic and purpose behind each command:

---

# 🛠️ Part 2: How to Configure a Cisco Router as a DNS Client

Once you understand _why_ a router might need DNS client capability (from Part 1), this part shows you **how to configure it** using simple but powerful Cisco IOS commands.

---

## ✅ Goal

Enable the router to:

- Resolve **hostnames** (like `r3`)
    
- Resolve **FQDNs** (like `r3.flackbox.lab`)
    
- Use one or more DNS servers for resolution
    
- Try additional suffixes if needed
    

---

## 🔧 1. Enable DNS Lookup

By default, **DNS lookup is disabled** on Cisco routers. So the first thing you must do is enable it.

### ▶️ Command:

```bash
ip domain-lookup
```

This command tells the router:

> “You’re allowed to send DNS queries if someone enters a hostname you don’t recognize.”

📌 Without this, the router won’t even _try_ to resolve names—it will just error out.

---

## 🔧 2. Define the DNS Server(s)

Now tell the router **which DNS server to use** when it needs to resolve a name.

### ▶️ Command:

```bash
ip name-server [IP_ADDRESS]
```

🧪 Example:

```bash
ip name-server 10.10.20.1
```

You can add **multiple servers** by separating them with spaces:

```bash
ip name-server 10.10.20.1 8.8.8.8
```

💡 The router will try them **in order** if the first one doesn’t respond.

---

## 🔧 3. Set the Default Domain Name (Optional)

If you mostly resolve hosts in your own company or lab domain, you can **pre-fill** the domain suffix.

### ▶️ Command:

```bash
ip domain-name [PRIMARY_DOMAIN]
```

🧪 Example:

```bash
ip domain-name flackbox.lab
```

Now if you try to ping `r3`, the router will **automatically assume** you're referring to `r3.flackbox.lab`.

---

## 🔧 4. Add Additional Search Suffixes (Optional)

You can define **extra domain suffixes** to try if the first one doesn’t match.

### ▶️ Command:

```bash
ip domain-list [ADDITIONAL_SUFFIX]
```

🧪 Example:

```bash
ip domain-list corp.lab
ip domain-list lab.local
```

📌 The router will append each suffix in this list and try resolving:

- `r3.corp.lab`
    
- `r3.lab.local`
    

If none of them resolve, it will return an error.

---

## 🎯 Final Configuration Example (R1)

```bash
conf t
ip domain-lookup
ip name-server 10.10.20.1
ip domain-name flackbox.lab
ip domain-list lab.local
end
```

This config allows:

- Name resolution
    
- Tries `r3.flackbox.lab` automatically
    
- If not found, tries `r3.lab.local`
    

---

## 🧠 Summary Table

|Command|Purpose|
|---|---|
|`ip domain-lookup`|Enables DNS query capability|
|`ip name-server`|Specifies DNS server(s) to contact|
|`ip domain-name`|Sets default suffix for hostname lookups|
|`ip domain-list`|Adds fallback suffixes to try in resolution attempts|

---

You’re now ready to move on to **Part 3: How to Configure a Cisco Router as a DNS Server**, where we set up another router (R3) to act as the DNS server itself. Just let me know when to begin!