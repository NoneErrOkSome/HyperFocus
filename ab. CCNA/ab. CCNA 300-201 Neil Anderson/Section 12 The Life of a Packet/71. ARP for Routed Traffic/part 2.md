Here’s **Part 2: Sender Resolves Default Gateway’s MAC and Sends the Packet**, explained step-by-step in my own words based on the lecture content:

---

# 🌐 Part 2: Sender Resolves Default Gateway’s MAC and Sends the Packet

---

## 🧭 Where We Left Off

We learned that when the destination IP is **outside the sender’s subnet**, the sender must:

- **Send the packet to its default gateway**
    
- **Use ARP to discover the MAC address of the gateway**
    

Let’s walk through what actually happens on the wire.

---

## 📍 Example Setup

|Role|IP Address|MAC Address|
|---|---|---|
|**Sender**|`172.23.4.1`|`1111.2222.3333`|
|**Default GW**|`172.23.4.254`|`4444.5555.6666`|
|**Destination**|`192.168.10.1`|(unknown to sender)|

---

## 🧾 Step 1: Sender Needs MAC of Default Gateway

The sender (Host A) wants to send data to `192.168.10.1`, but it first needs to get the **MAC address of `172.23.4.254`**, its default gateway.

### 🔹 It sends an ARP Request:

|Field|Value|
|---|---|
|**Sender IP**|`172.23.4.1`|
|**Sender MAC**|`1111.2222.3333`|
|**Target IP**|`172.23.4.254` (gateway)|
|**Target MAC**|`FF:FF:FF:FF:FF:FF` (broadcast)|

- This is a **Layer 2 broadcast**
    
- It goes out to **everyone in the subnet**
    
- The sender **holds the IP packet** while waiting for the ARP reply
    

---

## 📩 Step 2: Router Responds to ARP

- The router sees the ARP request and recognizes that it is the **target**
    
- It sends back a **unicast ARP reply** to the sender
    

### 🔹 ARP Reply:

|Field|Value|
|---|---|
|**Source IP**|`172.23.4.254` (router)|
|**Source MAC**|`4444.5555.6666`|
|**Dest MAC**|`1111.2222.3333` (sender)|

The router also stores the sender’s IP/MAC mapping in its own ARP cache:

```
172.23.4.1 → 1111.2222.3333
```

---

## 🧠 Step 3: Sender Builds the Full Packet

Now that the sender knows the MAC address of the default gateway, it completes the Ethernet frame and sends the packet.

### ✉️ Outgoing Packet:

|Layer|Source|Destination|
|---|---|---|
|**Source MAC**|`1111.2222.3333`||
|**Dest MAC**|`4444.5555.6666`||
|**Source IP**|`172.23.4.1`||
|**Dest IP**|`192.168.10.1`||

### 🔑 Key Point:

- The **IP addresses are end-to-end**
    
- The **MAC addresses are hop-by-hop**
    

---

## 🔀 Step 4: Packet Reaches the Router

- The packet hits the router’s interface at `172.23.4.254`
    
- The router:
    
    - Sees the packet is for **192.168.10.1**
        
    - Forwards it toward that destination (we’ll handle this in Part 3)
        

---

## ✅ Summary – What Just Happened

|Step|What Occurred|
|---|---|
|Sender noticed destination IP was remote|Triggered use of default gateway|
|ARP request sent for router IP|Standard Layer 2 broadcast|
|ARP reply received from router|MAC address learned and stored in ARP cache|
|IP packet sent to router|Destination IP unchanged; MAC = router’s MAC address|

---

Up next: **Part 3: Router Resolves Destination MAC in Next Subnet and Forwards**, where we’ll see how the router completes the journey to the final host.

Let me know when you're ready!