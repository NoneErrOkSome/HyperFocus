### **Part 3: Subnetting the Point-to-Point Link (New York ↔ Boston)**

Now, we will determine the **optimal subnet mask** for the **Point-to-Point link** between the **New York and Boston routers**, which requires **2 hosts**. We will also calculate the **network address, broadcast address, and usable host range**.

---

## **1. Choosing the Correct Subnet Mask**

Since the **point-to-point link** only needs **2 hosts** (one IP for each router interface), we must select the smallest possible subnet.

🔹 **Formula for usable hosts in a subnet:**

2Host Bits−22^{\text{Host Bits}} - 2

(The `-2` accounts for the **network and broadcast addresses**).

Let’s check the **smallest possible subnet** that supports **at least 2 hosts**:

|**Subnet Mask (CIDR)**|**Host Bits**|**Total IPs**|**Usable Hosts**|
|---|---|---|---|
|**/31**|1|2|2 ✅ (used in some networks)|
|**/30**|2|4|2 ✅ (standard subnet for routing)|

---

### **Should We Use `/30` or `/31`?**

✔ **/31** allows 2 hosts and eliminates the need for a broadcast address, but is used mainly in **modern** point-to-point networks.  
✔ **/30** is the **standard subnet mask** used in exams and traditional networks.

📌 **For CCNA, always use `/30` unless explicitly told to use `/31`.**

✅ **Subnet Mask for Point-to-Point Link: `/30` (`255.255.255.252`)**

---

## **2. Assigning the Network Address**

Since **Boston Sales (`/28`) used `200.15.10.80 – 200.15.10.95`**,  
The **next available subnet starts at**:

✅ **Network Address = `200.15.10.96`**

---

## **3. Finding the Broadcast Address**

The **broadcast address** is always **one less than the next subnet’s starting address**.

- **Subnet increment for `/30`**: 256−252=4256 - 252 = 4
- **Next subnet starts at**:
    
    ```
    200.15.10.96 + 4 = 200.15.10.100
    ```
    
- **Broadcast Address = `200.15.10.100 - 1 = 200.15.10.99`**

✅ **Broadcast Address: `200.15.10.99`**

---

## **4. Finding the Usable Host Range**

- **First usable IP**:
    
    ```
    Network Address + 1 = 200.15.10.96 + 1 = 200.15.10.97
    ```
    
- **Last usable IP**:
    
    ```
    Broadcast Address - 1 = 200.15.10.99 - 1 = 200.15.10.98
    ```
    

✅ **Usable Host Range: `200.15.10.97 – 200.15.10.98` (2 usable hosts for the router interfaces).**

---

### **5. Assigning Router Interface IPs**

For point-to-point links, **the first available host address is typically assigned to one router**, and **the second to the other router**.

|**Router**|**Assigned IP**|
|---|---|
|**New York Router (WAN Interface)**|`200.15.10.97`|
|**Boston Router (WAN Interface)**|`200.15.10.98`|

---

### **Final Summary for the Point-to-Point Link**

|**Type**|**IP Address**|
|---|---|
|**Network Address**|`200.15.10.96`|
|**Usable Hosts**|`200.15.10.97 – 200.15.10.98`|
|**Broadcast Address**|`200.15.10.99`|
|**Subnet Mask**|`255.255.255.252`|

📌 **Next in Part 4:** We will complete the **network diagram** with **subnet labels and router interface IPs**. 🚀

Would you like me to continue with **Part 4 now?** 😃