Great! Here's **Part 2: Host A Initiates DNS Query – ARP for Default Gateway**, fully broken down and explained in my own words based on the lecture content:

---

# 🌐 Part 2: Host A Initiates DNS Query – ARP for Default Gateway

---

## 🎯 Objective

Host A wants to open a webpage by visiting `www.flackbox.com`, but:

- It only has the **FQDN**
    
- It needs the **IP address**
    
- The **DNS server is in a different subnet**
    

So before sending a DNS request, Host A must:

1. Determine that the DNS server is in a different subnet
    
2. Find the MAC address of its **default gateway** using **ARP**
    
3. Send the DNS query through the router (Router A)
    

---

## 🧠 Step-by-Step Process

---

### 🔹 Step 1: Host A Prepares to Resolve `www.flackbox.com`

- Host A tries to reach `www.flackbox.com`
    
- It needs to perform a **DNS lookup**
    
- DNS server is at IP `10.10.100.10`
    
- Host A checks: “Is this IP in my subnet?”
    

#### Calculation:

- Host A: `10.10.10.10/24`
    
- DNS Server: `10.10.100.10/24`
    

Since they are **not in the same subnet**, Host A knows the DNS packet must be sent to its **default gateway** at `10.10.10.1`.

---

### 🔹 Step 2: Host A Sends an ARP Request for Default Gateway

Before it can send anything to `10.10.10.1`, Host A must find that device’s **MAC address**.  
So it broadcasts an **ARP request** on the local subnet:

#### ARP Request Details:

|Field|Value|
|---|---|
|Source IP|`10.10.10.10` (Host A)|
|Source MAC|`1111.2222.3333`|
|Target IP|`10.10.10.1` (Default Gateway)|
|Target MAC|`FFFF.FFFF.FFFF` (Broadcast)|

---

### 🔹 Step 3: Switch 1 Handles the ARP Request

- Host A is connected to **Switch 1**
    
- Switch 1 receives the broadcast and:
    
    - Adds Host A’s MAC to its **MAC address table** (maps to Port 1)
        
    - **Floods** the ARP request out all other ports (e.g., Port 2)
        

---

### 🔹 Step 4: Router A Replies to ARP

- Router A (at `10.10.10.1`) receives the ARP request
    
- It sees that it is the **target** of the request
    
- It responds with a **unicast ARP reply** directly to Host A
    

#### ARP Reply Details:

|Field|Value|
|---|---|
|Source IP|`10.10.10.1` (Router A)|
|Source MAC|`4444.5555.6666`|
|Destination IP|`10.10.10.10` (Host A)|
|Destination MAC|`1111.2222.3333`|

Router A also:

- Learns Host A’s IP/MAC mapping and stores it in its **ARP cache**
    

---

### 🔹 Step 5: Switch 1 Forwards the ARP Reply

- The ARP reply is **unicast**, not broadcast
    
- Switch 1 already knows Host A is on **Port 1**
    
- It sends the ARP reply only to Host A
    

---

### 🔹 Step 6: Host A Updates Its ARP Cache

- Host A receives the ARP reply
    
- It adds this entry to its **ARP table**:
    
    ```
    10.10.10.1 → 4444.5555.6666
    ```
    

Now, it knows how to reach the gateway at the data link (MAC) level.

---

## ✅ Summary

|Step|What Happened|
|---|---|
|Host A checked subnet|Realized DNS server is outside its local network|
|ARP request broadcast|Sent to learn MAC of default gateway|
|Switch behavior|Added MAC table entries and flooded ARP broadcast|
|Router A replied|Sent unicast ARP reply with its MAC address|
|Host A updated ARP cache|Learned and stored the MAC for `10.10.10.1`|

---

Host A is now ready to send the actual **DNS request** to `10.10.100.10` **via** Router A.

Let me know when you’re ready for **Part 3: DNS Query Routed to DNS Server**, where we’ll follow how the DNS request moves through the router and how the next subnet resolves MAC addresses!