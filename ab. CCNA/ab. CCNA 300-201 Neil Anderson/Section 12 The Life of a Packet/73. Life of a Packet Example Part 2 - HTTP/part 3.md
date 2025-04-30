Excellent! Here’s **Part 3: Router B Resolves the Web Server’s MAC**, where the packet gets closer to its final destination. Let’s walk through this next hop in the journey:

---

# 🛰️ Part 3: Router B Resolves the Web Server’s MAC

---

## 🧭 Where We Are Now

- Router B just received the **HTTP packet** from Router A.
    
- The **destination IP** is `10.10.12.10` — the web server.
    
- Router B **has an interface** in the `10.10.12.0/24` subnet (e.g., `10.10.12.1`).
    
- But Router B does **not yet know** the MAC address of the web server.
    

So, before Router B can deliver the packet, it must perform an **ARP request** for `10.10.12.10`.

---

## 🔍 Step 1: Router B Sends ARP Request

### ARP Request Details:

|Field|Value|
|---|---|
|Source IP|`10.10.12.1` (Router B)|
|Source MAC|`7777.8888.9999`|
|Target IP|`10.10.12.10` (Web Server)|
|Target MAC|`FFFF.FFFF.FFFF` (Broadcast)|

- Sent out of Router B’s interface into the `10.10.12.0/24` subnet
    
- Received by **Switch 2**, which is connected to the web server
    

---

## 🔄 Step 2: Switch 2 Processes the ARP Broadcast

- Switch 2 adds Router B’s MAC to its MAC address table:
    
    ```
    7777.8888.9999 → Port 1
    ```
    
- Switch floods the ARP request to all other ports (e.g., **Port 2**, where the web server is connected)
    

---

## 📨 Step 3: Web Server Replies to ARP

The web server receives the ARP request and sees that it is **the target** (`10.10.12.10`).

### ARP Reply Details:

|Field|Value|
|---|---|
|Source IP|`10.10.12.10` (Web Server)|
|Source MAC|`2222.3333.4444`|
|Destination MAC|`7777.8888.9999` (Router B)|

The Web Server also:

- Learns the MAC for `10.10.12.1` and stores it in its ARP cache:
    
    ```
    10.10.12.1 → 7777.8888.9999
    ```
    

---

## 🔀 Step 4: Switch 2 Forwards the ARP Reply

- Switch adds the Web Server’s MAC to its table:
    
    ```
    2222.3333.4444 → Port 2
    ```
    
- Sends the ARP reply **only to Port 1**, where Router B is plugged in
    

---

## 🚀 Step 5: Router B Forwards the HTTP Request to the Web Server

Now that Router B has the MAC address of the web server, it forwards the **original HTTP request** from Host A.

### Final Ethernet Frame to Web Server:

|Layer|Value|
|---|---|
|Source MAC|`7777.8888.9999` (Router B)|
|Destination MAC|`2222.3333.4444` (Web Server)|
|Source IP|`10.10.10.10` (Host A)|
|Destination IP|`10.10.12.10` (Web Server)|
|Transport|TCP, Port 80|
|Application|HTTP GET `/`|

📌 As always: **IP addresses remain unchanged** end-to-end. **MAC addresses change per hop**.

---

## ✅ Summary – Router B’s Role

|Step|Description|
|---|---|
|Checked destination IP|Saw that it belongs to a connected subnet (10.10.12.0/24)|
|Performed ARP|Resolved MAC for `10.10.12.10`|
|Updated ARP & MAC tables|Stored mapping for future efficiency|
|Forwarded packet|Delivered HTTP request to the Web Server using correct MAC|

---

At this point, the **HTTP request reaches the Web Server**!

Let me know when you're ready for **Part 4: Web Server Processes the HTTP Request**, where we walk through how the server handles and understands the packet it just received.