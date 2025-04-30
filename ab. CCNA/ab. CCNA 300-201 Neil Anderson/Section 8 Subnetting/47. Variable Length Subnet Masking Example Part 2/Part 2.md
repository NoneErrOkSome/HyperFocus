### **Part 2: Subnetting Boston Sales Department**

Now, we will determine the **optimal subnet mask** for the **Boston Sales Department**, which requires **7 hosts**. We will also calculate the **network address, broadcast address, and usable host range**.

---

## **1. Choosing the Correct Subnet Mask**

We need to support **7 hosts**, so we must choose a subnet that provides **at least 7 usable IPs**.

🔹 **Formula for usable hosts in a subnet:**

2Host Bits−22^{\text{Host Bits}} - 2

(The `-2` accounts for the **network and broadcast addresses**).

Let’s check the **smallest possible subnet** that supports **at least 7 hosts**:

|**Subnet Mask (CIDR)**|**Host Bits**|**Total IPs**|**Usable Hosts**|
|---|---|---|---|
|**/29**|3|8|6 ❌ (too small)|
|**/28**|4|16|14 ✅|

✅ **A `/28` subnet is needed because `/29` only supports 6 hosts, which is not enough.**

📌 **Subnet Mask for Boston Sales: `/28` (`255.255.255.240`)**

---

## **2. Assigning the Network Address**

Since **New York Sales (`/28`) used `200.15.10.64 – 200.15.10.79`**,  
The **next available subnet starts at**:

✅ **Network Address = `200.15.10.80`**

---

## **3. Finding the Broadcast Address**

The **broadcast address** is always **one less than the next subnet’s starting address**.

- **Subnet increment for `/28`**: 256−240=16256 - 240 = 16
- **Next subnet starts at**:
    
    ```
    200.15.10.80 + 16 = 200.15.10.96
    ```
    
- **Broadcast Address = `200.15.10.96 - 1 = 200.15.10.95`**

✅ **Broadcast Address: `200.15.10.95`**

---

## **4. Finding the Usable Host Range**

- **First usable IP**:
    
    ```
    Network Address + 1 = 200.15.10.80 + 1 = 200.15.10.81
    ```
    
- **Last usable IP**:
    
    ```
    Broadcast Address - 1 = 200.15.10.95 - 1 = 200.15.10.94
    ```
    

✅ **Usable Host Range: `200.15.10.81 – 200.15.10.94` (14 usable hosts)**

---

### **Final Summary for Boston Sales**

|**Type**|**IP Address**|
|---|---|
|**Network Address**|`200.15.10.80`|
|**Usable Hosts**|`200.15.10.81 – 200.15.10.94`|
|**Broadcast Address**|`200.15.10.95`|
|**Subnet Mask**|`255.255.255.240`|

📌 **Next in Part 3:** We will subnet the **Point-to-Point Link between the New York and Boston routers** and explain why **/30 is chosen instead of /31**. 🚀

Would you like me to continue with **Part 3 now?** 😃