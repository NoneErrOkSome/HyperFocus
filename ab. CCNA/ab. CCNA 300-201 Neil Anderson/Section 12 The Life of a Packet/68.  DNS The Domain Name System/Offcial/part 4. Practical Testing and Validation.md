Here’s **Part 4** of the DNS deep dive — **Practical Testing and Validation** — explained clearly and fully based on the lecture scope:

---

# 🧪 Part 4: Practical Testing and Validation

In this part, we focus on **confirming that DNS is working** correctly through real-world testing. You’ll learn how to verify resolution using both **command-line tools** and by observing how DNS resolves names at different levels: hostname, FQDN, and IP.

---

## 🧑‍🔬 Scenario Recap

We’re working on a Windows client that is part of the `flackboxa.lab` domain. The DNS server is internal and has records for devices like:

- `linuxa.flackboxa.lab` → `172.23.4.2`
    

Let’s now see how we can test whether DNS is functioning correctly.

---

## 🔍 Tool 1: `nslookup` – Name Resolution Check

The `nslookup` command is used to **query the DNS server directly** to see how it resolves a name.

### ▶️ Example:

```cmd
nslookup linuxa
```

### 🧠 What Happens:

- The system appends the DNS domain (`flackboxa.lab`) to the name if needed
    
- So `linuxa` becomes `linuxa.flackboxa.lab`
    
- The DNS server at `172.23.4.1` is contacted
    
- If successful, the server returns:
    
    ```
    Name: linuxa.flackboxa.lab
    Address: 172.23.4.2
    ```
    

✅ This shows that the **name-to-IP resolution is working** for internal hosts.

---

## 🧰 Tool 2: `ping` – Full Stack Test (Resolution + Connectivity)

Once name resolution is confirmed, the next step is to **test reachability** using the `ping` command.

### ▶️ Example:

```cmd
ping linuxa
```

### 🧠 What Happens:

- The system first uses **DNS to resolve** `linuxa` to an IP
    
- Then, it sends **ICMP echo requests** (pings) to that IP
    

✅ If both DNS and network are functioning, you’ll see replies like:

```
Reply from 172.23.4.2: bytes=32 time<1ms TTL=128
```

This confirms that:

- DNS resolution is successful
    
- Network path is reachable
    
- Host is responding
    

---

## 🧠 What You’re Actually Testing

|Test|What It Confirms|
|---|---|
|`nslookup linuxa`|DNS resolution only|
|`ping linuxa`|DNS + IP-level network connectivity|
|`ping 172.23.4.2`|Network connectivity only (bypasses DNS)|

---

## 🧪 You Can Use:

|Type|Format Example|Use Case|
|---|---|---|
|**Hostname**|`linuxa`|Relies on domain suffix like `.lab`|
|**FQDN**|`linuxa.flackboxa.lab`|Explicit full name (no domain guessing)|
|**IP Address**|`172.23.4.2`|Direct access, bypasses DNS entirely|

---

## 💡 Quick Notes:

- If the `ping` by name works, it means **DNS is functioning** correctly.
    
- If `ping` by IP works but not by name, it’s likely a **DNS misconfiguration**.
    
- If neither works, it’s likely a **network issue** (routing, firewall, etc.).
    

---

## ✅ Summary of Part 4

|Action|Confirms|
|---|---|
|`nslookup linuxa`|Can DNS resolve hostname to IP?|
|`ping linuxa`|Can system resolve and reach the host using the name?|
|`ping 172.23.4.2`|Can system reach the host IP directly?|
|Works with hostname, FQDN, or IP|Tests different lookup mechanisms|

---

With that, you’ve completed the full DNS walkthrough from **OSI Layer integration** to **real-world testing**. Let me know if you’d like a visual summary sheet or a short quiz to lock it in!