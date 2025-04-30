Absolutely! Here's **Part 4: Lab Example – Viewing and Verifying ARP on Cisco Routers**, explained clearly in my own words to wrap up the topic:

---

# 🖥️ Part 4: Lab Example – Viewing and Verifying ARP on Cisco Routers

---

## 🎯 Goal

Now that you understand how ARP works across routed subnets, let’s see how this process looks in a **Cisco router’s CLI** — where we can view the **ARP cache** and verify that routers are tracking IP-to-MAC mappings for devices in their connected subnets.

---

## 🧪 Lab Setup Recap

|Device|IP Address|Notes|
|---|---|---|
|R1|`10.10.10.1`|Connected to Host A|
|R2|`10.10.10.2`|Same subnet as R1 (peer)|
|R3|`10.10.20.1`|Connected to a different subnet|

We’ll check the **ARP table** entries on each of these routers using the CLI.

---

## 🔍 Step 1: Viewing ARP Cache on R1

On **Router R1**, run:

```bash
show arp
```

This will display known IP-to-MAC mappings and associated interfaces.

### Sample Output:

```
Protocol  Address          Age (min)  Hardware Addr   Type   Interface
Internet  10.10.10.1       -          0011.2233.4455  ARPA   FastEthernet0/0
Internet  10.10.10.2       3          0022.3344.5566  ARPA   FastEthernet0/0
```

✅ Here’s what it means:

- `10.10.10.1` is R1’s own interface (no age value)
    
- `10.10.10.2` is a peer it has communicated with — R1 knows its MAC address and interface
    

---

## 🔍 Step 2: Viewing ARP Cache on R3

Now check the ARP cache on **Router R3**:

```bash
enable
show arp
```

### Sample Output:

```
Protocol  Address          Age (min)  Hardware Addr   Type   Interface
Internet  10.10.20.1       -          00aa.bbcc.ddee  ARPA   FastEthernet0/1
Internet  10.10.20.2       1          00cc.ddee.ff00  ARPA   FastEthernet0/1
```

This confirms:

- `10.10.20.2` has been learned via ARP
    
- R3 is storing the MAC mapping and knows which port to forward traffic to
    

---

## 🧹 Optional: Clearing the ARP Cache

To **flush the ARP cache** on a Cisco router (for testing or troubleshooting):

```bash
clear arp-cache
```

This removes all entries so ARP will be re-triggered the next time communication occurs.

---

## 🧠 Why This Is Useful

- Helps verify that communication is working as expected
    
- Lets you **troubleshoot Layer 2/3 problems**
    
- Confirms whether **ARP resolution is complete** between routers and hosts
    

---

## ✅ Summary – What You Can Do from CLI

|Command|Purpose|
|---|---|
|`show arp`|View ARP cache entries|
|`clear arp-cache`|Flush ARP table to force re-resolution|
|`enable`|Needed to enter privileged mode|

This matches what we expect from the ARP theory — **MACs are learned and cached per interface**, only for IPs within directly connected subnets.

---

🎉 That completes the full explanation of **ARP for routed traffic** — from theory, to per-hop resolution, to CLI verification.

Let me know if you'd like:

- A **summary diagram**
    
- A **visual MAC/IP hop-by-hop table**
    
- Or to move on to the **next lecture’s topic**!