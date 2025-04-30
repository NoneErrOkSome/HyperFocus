Great! Here’s **Part 1: Host A Composes and Sends the HTTP Request**, clearly explained in my own words based on the lecture content:

---

# 🔁 Part 1: Host A Composes and Sends the HTTP Request

Now that **Host A** has successfully resolved the IP address of `www.flackbox.com` to `10.10.12.10` via DNS, it can finally send the actual HTTP request.

But because the web server is **in a different subnet**, Host A will send the packet to its **default gateway**, Router A. Let's walk through what happens in detail.

---

## 🧱 OSI Stack Completion (Web Packet)

Earlier, Host A couldn’t complete the **Layer 3 (Network)** section of the OSI stack because it didn’t yet know the destination IP address.  
Now that DNS has replied with `10.10.12.10`, Host A can finish building the packet.

### ✅ Finalized Packet Headers:

|Layer|Value|
|---|---|
|Layer 7|HTTP GET request (Application)|
|Layer 6|Formatting/encoding (Presentation)|
|Layer 5|Session setup|
|Layer 4|TCP (Transport), destination port **80**|
|Layer 3|Source IP: `10.10.10.10` (Host A) Destination IP: `10.10.12.10` (Web Server)|
|Layer 2|Source MAC: `1111.2222.3333` Destination MAC: **Default Gateway's MAC** `4444.5555.6666`|

🧠 Even though the ultimate destination is the **Web Server**, the **MAC address** is that of the **default gateway**, because the server is **outside Host A’s subnet**.

---

## 🌐 What Host A Knows:

- **Destination IP**: ✅ `10.10.12.10`
    
- **MAC of default gateway**: ✅ Already learned via ARP earlier
    
- **Subnet Check**: `10.10.12.10` is **not** in `10.10.10.0/24` → So Host A must send the packet to the **default gateway**
    

---

## 📨 Sending the Packet

- Host A puts the packet on the **physical wire**
    
- MAC Destination = Router A (`4444.5555.6666`)
    
- IP Destination = Web Server (`10.10.12.10`)
    

### ✉️ Outgoing Frame from Host A:

|Type|Value|
|---|---|
|Source MAC|`1111.2222.3333`|
|Destination MAC|`4444.5555.6666`|
|Source IP|`10.10.10.10`|
|Destination IP|`10.10.12.10`|
|Protocol|TCP, port 80|
|Payload|HTTP GET `/`|

---

## 🔀 Switch 1 Forwards the Packet

- Switch 1 sees **destination MAC = Router A**
    
- Looks it up in its **MAC address table**
    
- Forwards the packet only to **Port 2**, where Router A is connected
    

---

## ✅ Summary – What Just Happened

|Step|Description|
|---|---|
|Host A finished packet|Now knows destination IP (`10.10.12.10`) from DNS|
|MAC address selected|Chose MAC of default gateway (`4444.5555.6666`)|
|Packet sent|Delivered to Router A via Switch 1|
|Packet contents|IP header = Host A → Web Server, MAC header = Host A → Router A|

---

Host A has now **sent the HTTP request to Router A**, which will **route it toward the final destination**. In the next step, Router A will check its routing table and forward it to **Router B**.

Let me know when you’re ready for **Part 2: Router A Forwards to Router B via Static Route**, and I’ll continue the walkthrough!