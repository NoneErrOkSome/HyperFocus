### **How ARP Works: Step-by-Step Process**

ARP (Address Resolution Protocol) is used to map an IP address to a MAC (Media Access Control) address within a local network. Here’s how it works step by step:

---

### **1. Device Checks ARP Table**

- When a device (e.g., **PC1**) wants to communicate with another device (**PC2**) in the same network, it first checks its **ARP table (cache)**.
- The ARP table stores IP-to-MAC address mappings.
- If the MAC address for **PC2’s IP address** is already in the ARP table, **PC1** sends the data directly using that MAC address.
- **If the MAC address is not in the table, the ARP process begins.**

---

### **2. Sending an ARP Request (Broadcast)**

- Since **PC1** does not know the MAC address of **PC2**, it sends an **ARP Request**.
- This request is a **broadcast** frame sent to **all devices on the network**.
- The frame contains:
    - **Sender MAC Address:** MAC of PC1
    - **Sender IP Address:** IP of PC1
    - **Target MAC Address:** Unknown (set to 00:00:00:00:00:00)
    - **Target IP Address:** IP of PC2
- The **destination MAC address in the Ethernet frame** is set to **FF:FF:FF:FF:FF:FF** (broadcast address), meaning all devices on the local network will receive it.

---

### **3. Receiving the ARP Request**

- Every device on the network receives the ARP request.
- Each device checks whether the **target IP address in the ARP request** matches its own IP address.
- Only the device with the matching IP address (**PC2**) responds.

---

### **4. Sending an ARP Reply (Unicast)**

- **PC2** prepares an **ARP Reply** and sends it back to **PC1** as a **unicast** frame (only PC1 receives it).
- The ARP reply contains:
    - **Sender MAC Address:** MAC of PC2
    - **Sender IP Address:** IP of PC2
    - **Target MAC Address:** MAC of PC1
    - **Target IP Address:** IP of PC1

---

### **5. Updating the ARP Table**

- **PC1** receives the ARP reply and updates its **ARP table**, mapping **PC2’s IP address** to its MAC address.
- Now, PC1 can send data frames to PC2 using the correct MAC address.
- **PC2 may also update its own ARP table** with PC1’s MAC address for future communication.

---

### **6. Communication Begins**

- Now that **PC1** knows **PC2’s MAC address**, it can send data directly using the **Ethernet frame**.
- Future communications between **PC1 and PC2** will not require an ARP request until the ARP entry expires or changes.

---

### **Example Scenario**

Let’s say **PC1 (192.168.1.10, MAC: AA:BB:CC:DD:EE:01)** wants to communicate with **PC2 (192.168.1.20, MAC: AA:BB:CC:DD:EE:02)**.

#### **Step-by-Step Packet Exchange:**

1. **PC1 checks ARP table** → No MAC address found for **192.168.1.20**.
2. **PC1 broadcasts an ARP Request:**
    
    ```
    Who has 192.168.1.20? Tell 192.168.1.10
    ```
    
    (Sent to MAC **FF:FF:FF:FF:FF:FF**)
3. **PC2 receives the request**, recognizes its IP, and sends back an ARP Reply:
    
    ```
    192.168.1.20 is at AA:BB:CC:DD:EE:02
    ```
    
    (Sent directly to PC1’s MAC address)
4. **PC1 updates its ARP table**:
    
    ```
    192.168.1.20 → AA:BB:CC:DD:EE:02
    ```
    
5. **PC1 sends data** to PC2 using the resolved MAC address.

---

### **Extra Notes:**

- ARP is only used within the **same local network**. If **PC1** wants to communicate with a device on another network, it will ARP for the **default gateway (router)** instead.
- ARP **entries expire** after a few minutes to account for changes in the network.
- ARP can be exploited in attacks like **ARP Spoofing**, where an attacker sends fake ARP replies to manipulate network traffic.

Would you like a real-world demonstration using ARP commands? 🚀