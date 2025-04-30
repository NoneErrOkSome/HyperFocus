Awesome! Here’s **Part 3: Router Resolves Destination MAC in Next Subnet and Forwards**, fully explained in my own words and in step-by-step detail:

---

# 🛰️ Part 3: Router Resolves Destination MAC in Next Subnet and Forwards

---

## 🧭 Where We Are Now

- **Host A** (172.23.4.1) sent a packet destined for **192.168.10.1**
    
- The packet reached its **default gateway**, which is a router at **172.23.4.254**
    
- The router must now **forward** the packet to the final destination, but first:
    
    - It needs the **MAC address** of 192.168.10.1
        
    - If it doesn’t already have that in its ARP cache, it must perform **ARP again**
        

---

## 📍 Router’s Interface Context

|Interface|IP Address|MAC Address|
|---|---|---|
|Inside Interface|172.23.4.254|4444.5555.6666|
|Outside Interface|192.168.10.254|4444.5555.7777|

The router will forward the packet **out of its 192.168.10.254 interface**, because that interface is part of the destination subnet.

---

## 🔍 Step 1: Router Checks for MAC of Destination

- Destination IP is **192.168.10.1**
    
- Router doesn’t have the MAC for that yet
    
- So it **holds the packet** and sends an **ARP request**
    

---

## 📣 Step 2: ARP Request from Router to Destination Subnet

### ARP Request Details:

|Field|Value|
|---|---|
|Sender IP|`192.168.10.254` (Router)|
|Sender MAC|`4444.5555.7777`|
|Target IP|`192.168.10.1` (Final Host)|
|Target MAC|`FF:FF:FF:FF:FF:FF` (Broadcast)|

- This is a **Layer 2 broadcast**
    
- Sent into the **192.168.10.0/24** subnet
    
- Received by **all hosts** in that subnet, including the destination host
    

---

## 💬 Step 3: Destination Host Replies with Its MAC

Host `192.168.10.1` receives the ARP request and replies:

### ARP Reply Details:

|Field|Value|
|---|---|
|Source IP|`192.168.10.1`|
|Source MAC|`2222.3333.4444`|
|Destination MAC|`4444.5555.7777` (Router)|

✅ Both devices now store each other’s IP–MAC mappings in their **ARP caches**.

---

## 🚀 Step 4: Router Forwards the Original Packet

Now the router can **forward the original IP packet** it was holding from Host A.

### Ethernet Frame to Final Host:

|Layer|Value|
|---|---|
|Source MAC|`4444.5555.7777` (Router’s outgoing interface)|
|Destination MAC|`2222.3333.4444` (Receiver)|
|Source IP|`172.23.4.1` (Host A)|
|Destination IP|`192.168.10.1` (Final Host)|

📌 **The IP header is untouched**, but the **MAC addresses are swapped out** per hop.

---

## 💡 MAC Changes vs IP Persistence

|Layer|Behavior|
|---|---|
|**IP Layer**|Source and destination IP **do not change**|
|**MAC Layer**|Source and destination MAC **change hop by hop**|

This is fundamental to how **Ethernet + IP routing** works together.

---

## ✅ Summary – Router’s Forwarding Role

|Action|Explanation|
|---|---|
|ARP request for 192.168.10.1|Router discovers final host’s MAC address|
|ARP reply received|Router caches MAC address|
|Packet forwarded|Uses updated MAC headers, IP header remains unchanged|

---

Next, we’ll wrap this up in **Part 4: Lab Example – Viewing and Verifying ARP on Cisco Routers**, where we confirm this behavior using real router CLI output (`show arp` and `clear arp-cache`).

Let me know when you're ready!