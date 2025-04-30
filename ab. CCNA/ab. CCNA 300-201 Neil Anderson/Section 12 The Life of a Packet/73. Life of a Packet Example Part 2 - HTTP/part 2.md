Perfect! Here's **Part 2: Router A Forwards to Router B via Static Route**, explained in full detail based on the lecture and restructured for clarity:

---

# 🌐 Part 2: Router A Forwards to Router B via Static Route

---

## 🧭 What’s Happening Now

Router A just received the **HTTP request packet** from Host A. It needs to **forward** the packet toward the final destination: the **Web Server** at `10.10.12.10`.

But Router A **doesn't have a directly connected interface** in the `10.10.12.0/24` subnet — so it must rely on a **static route** or a **routing protocol** to know where to forward the packet.

In our example, a **static route** has already been configured.

---

## 📍 Static Route Configuration (Preconfigured by Admin)

Router A has a static route like this:

```text
ip route 10.10.12.0 255.255.255.0 10.10.11.2
```

This tells Router A:

> “To reach any address in the `10.10.12.0/24` subnet, send the packet to **next hop** `10.10.11.2`.”

Router A has a directly connected interface in `10.10.11.0/24`:

- Its own IP in that subnet is `10.10.11.1`
    
- It will now try to forward the packet to **Router B** (`10.10.11.2`)
    

---

## 🔍 Router A Needs to Resolve Router B's MAC Address

Before Router A can send the packet to `10.10.11.2`, it must resolve its **MAC address** using ARP.

### 🔹 ARP Request Sent:

|Field|Value|
|---|---|
|Source IP|`10.10.11.1` (Router A)|
|Source MAC|`5555.6666.7777`|
|Target IP|`10.10.11.2` (Router B)|
|Target MAC|`FFFF.FFFF.FFFF` (broadcast)|

Router A sends this ARP request out of its interface in the `10.10.11.0/24` network.

---

## 🔁 Router B Responds to ARP

Router B receives the ARP request and sees that it is the **target**. It sends a **unicast ARP reply** back to Router A:

### 🔹 ARP Reply:

|Field|Value|
|---|---|
|Source IP|`10.10.11.2` (Router B)|
|Source MAC|`6666.7777.8888`|
|Destination MAC|`5555.6666.7777` (Router A)|

Router B also updates its own ARP cache:

```
10.10.11.1 → 5555.6666.7777
```

Router A does the same for:

```
10.10.11.2 → 6666.7777.8888
```

---

## 📨 Router A Forwards the Packet to Router B

Now that Router A knows Router B’s MAC address, it **forwards the original HTTP request** (from Host A) to Router B.

### ✉️ Updated Frame from Router A to Router B:

|Header Layer|Value|
|---|---|
|Source MAC|`5555.6666.7777` (Router A)|
|Dest MAC|`6666.7777.8888` (Router B)|
|Source IP|`10.10.10.10` (Host A)|
|Dest IP|`10.10.12.10` (Web Server)|

📌 **MAC addresses change per hop**, but the **IP addresses stay the same** from source to destination.

---

## ✅ Summary – Router A’s Role

|Action|Description|
|---|---|
|Checked routing table|Saw static route to 10.10.12.0/24 via 10.10.11.2|
|Performed ARP|Asked "What’s the MAC for 10.10.11.2?"|
|Received ARP reply|Learned Router B’s MAC address|
|Forwarded packet|Updated MAC headers, forwarded HTTP request to Router B|

---

Router B now has the HTTP request and will determine how to deliver it to the Web Server.

Let me know when you’re ready for **Part 3: Router B Resolves the Web Server’s MAC**, and we’ll continue the packet’s journey!