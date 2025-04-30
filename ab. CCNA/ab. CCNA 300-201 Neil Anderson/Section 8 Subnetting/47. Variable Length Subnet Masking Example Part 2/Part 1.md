### **Part 1: Subnetting New York Sales Department**

In this part, we will determine the **optimal subnet mask** for the **New York Sales Department**, which requires **14 hosts**. We will also calculate the **network address, broadcast address, and usable host range**.

---

## **1. Choosing the Correct Subnet Mask**

We need to support **14 hosts**, so we must choose a subnet that provides **at least 14 usable IPs**.

🔹 **Formula for usable hosts in a subnet:**

2Host Bits−22^{\text{Host Bits}} - 2

(The `-2` accounts for the **network and broadcast addresses**).

Let’s check the **smallest possible subnet** that supports **at least 14 hosts**:

|**Subnet Mask (CIDR)**|**Host Bits**|**Total IPs**|**Usable Hosts**|
|---|---|---|---|
|**/28**|4|16|14 ✅|
|**/29**|3|8|6 ❌ (too small)|

✅ **A `/28` subnet is the best choice because it provides exactly 14 usable hosts.**

📌 **Subnet Mask for New York Sales: `/28` (`255.255.255.240`)**

---

## **2. Assigning the Network Address**

Since **New York Engineering (`/27`) used `200.15.10.0 – 200.15.10.63`**,  
The **next available subnet starts at**:

✅ **Network Address = `200.15.10.64`**

---

## **3. Finding the Broadcast Address**

The **broadcast address** is always **one less than the next subnet’s starting address**.

- **Subnet increment for `/28`**: 256−240=16256 - 240 = 16
- **Next subnet starts at**:
    
    ```
    200.15.10.64 + 16 = 200.15.10.80
    ```
    
- **Broadcast Address = `200.15.10.80 - 1 = 200.15.10.79`**

✅ **Broadcast Address: `200.15.10.79`**

---

## **4. Finding the Usable Host Range**

- **First usable IP**:
    
    ```
    Network Address + 1 = 200.15.10.64 + 1 = 200.15.10.65
    ```
    
- **Last usable IP**:
    
    ```
    Broadcast Address - 1 = 200.15.10.79 - 1 = 200.15.10.78
    ```
    

✅ **Usable Host Range: `200.15.10.65 – 200.15.10.78` (14 usable hosts)**

---

### **Final Summary for New York Sales**

|**Type**|**IP Address**|
|---|---|
|**Network Address**|`200.15.10.64`|
|**Usable Hosts**|`200.15.10.65 – 200.15.10.78`|
|**Broadcast Address**|`200.15.10.79`|
|**Subnet Mask**|`255.255.255.240`|

📌 **Next in Part 2:** We will repeat this process for **Boston Sales (7 hosts)** and explain why **/28 is chosen instead of /29**. 🚀

Would you like me to continue with **Part 2 now?** 😃