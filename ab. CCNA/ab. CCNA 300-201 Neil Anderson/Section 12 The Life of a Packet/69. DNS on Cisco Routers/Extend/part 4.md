Here’s **Part 4: Testing DNS Resolution Between Routers**, completing the full walkthrough. This part focuses on validating your DNS configuration through real-world tests directly on Cisco routers.

---

# 🔁 Part 4: Testing DNS Resolution Between Routers

With **R3 acting as the DNS server** and **R1 configured as a DNS client**, it’s time to verify that everything works as expected. This step is crucial to ensure that name resolution is properly set up, both for **hostnames** and **FQDNs**.

---

## 🎯 Goal

From **R1**, test whether:

- Hostnames like `R2` and `R3` resolve to their IPs via DNS
    
- FQDNs like `R2.flackbox.lab` also resolve
    
- The resolved IP is reachable (e.g., via `ping`)
    

---

## ✅ What’s Already Configured?

### On **R3 (DNS Server)**:

- Has static DNS records:
    
    - `R1` → `10.10.10.1`
        
    - `R2` → `10.10.10.2`
        
    - `R3` → `10.10.20.1`
        
- Also has full entries like:
    
    - `R2.flackbox.lab` → `10.10.10.2`
        

### On **R1 (DNS Client)**:

- DNS lookup enabled: `ip domain-lookup`
    
- DNS server set: `ip name-server 10.10.20.1`
    
- Domain suffix: `ip domain-list flackbox.lab`
    

---

## 🧪 Step-by-Step Test Procedure

### 🔎 Step 1: From R1, Ping Hostname

```bash
ping R3
```

### ✅ What should happen:

- Router sends DNS query for `R3.flackbox.lab`
    
- DNS server at `10.10.20.1` resolves the name
    
- IP `10.10.20.1` is returned
    
- ICMP packets are sent and should receive replies
    

### 🧾 Output Example:

```bash
Translating "R3"...domain server (10.10.20.1)
Sending 5, 100-byte ICMP Echos to 10.10.20.1
.....
Success rate is 100 percent (5/5)
```

---

### 🔎 Step 2: Ping a Different Hostname

```bash
ping R2
```

### ✅ Expect:

- Resolves to `10.10.10.2`
    
- Success rate shows 5/5 replies
    

---

### 🔎 Step 3: Test FQDN Resolution (Optional)

```bash
ping R2.flackbox.lab
```

This directly uses the FQDN instead of relying on the `domain-list`.

✅ Should behave exactly like pinging `R2`.

---

### 🔎 Step 4: DNS Failover Check (Optional)

Try pinging an **unknown hostname** (like `r9`), to verify that DNS **fails gracefully**.

```bash
ping r9
```

🧾 Output:

```
Translating "r9"...domain server (10.10.20.1)
% Unknown host
```

This confirms:

- DNS is working
    
- The name isn’t found (as expected)
    

---

## 📋 Things to Check If It Fails

|Issue|Possible Cause|
|---|---|
|Ping fails to resolve|DNS client not configured (`ip domain-lookup`)|
|Wrong IP resolved|DNS server record mistake (`ip host`)|
|Ping times out|Routing issue or access list blocking ICMP|
|Translation never triggered|`ip domain-list` missing or wrong domain suffix|

---

## ✅ Summary – What You’ve Verified

|Action|Purpose|
|---|---|
|`ping R3`|Hostname resolved and reachable|
|`ping R2`|DNS name resolution working|
|`ping R2.flackbox.lab`|FQDN resolution confirmed|
|`ping r9` (fail case)|Proper handling of unknown names|

---

By now, you’ve completed a **full DNS configuration lab** using Cisco routers, including:

- DNS server setup
    
- DNS client setup
    
- Static DNS records
    
- Real-time DNS testing
    

Let me know if you’d like a **summary diagram**, **command cheat sheet**, or a **mini quiz** to test your understanding!