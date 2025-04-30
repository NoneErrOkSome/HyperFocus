### **Part 2: Subnet Allocation Strategy**

Now that we understand the **network requirements and the importance of VLSM**, the next step is **allocating subnets** efficiently. This means **assigning network addresses to each department while minimizing IP waste**.

---

## **1. Steps to Efficiently Allocate Subnets**

To properly design a network using VLSM, we follow these **step-by-step subnetting rules**:

1️⃣ **Start with the largest subnet first**

- Allocate the largest subnet at the beginning of the available IP range.
- Ensures that large departments receive the necessary IPs without running out of space.

2️⃣ **Move to the next largest subnet**

- Assign subnets in **descending order of host size** to optimize space.
- Prevents fragmentation and keeps IPs **contiguous**.

3️⃣ **Continue assigning smaller subnets**

- Departments with fewer hosts receive smaller subnets.
- Point-to-point links get the smallest possible subnet.

4️⃣ **Ensure sequential subnet assignments**

- Helps with **routing efficiency** and **easier network management**.
- Avoids **scattered subnets** that may cause complexity.

---

## **2. Choosing the Right Subnet Mask for Each Department**

We need to **select the correct subnet mask** for each department based on the number of hosts required.

|**Department**|**Hosts Needed**|**Smallest Subnet Size**|**CIDR**|**Usable Hosts**|
|---|---|---|---|---|
|**NY Engineering**|28|`/27`|`/27`|30|
|**Boston Engineering**|28|`/27`|`/27`|30|
|**NY Sales**|14|`/28`|`/28`|14|
|**Boston Sales**|7|`/28` (rounded up)|`/28`|14|
|**Point-to-Point Link**|2|`/30`|`/30`|2|

✅ **We choose `/27`, `/28`, and `/30` to avoid IP waste.**

---

## **3. Assigning Network Addresses**

Now, let’s sequentially assign **network addresses** starting from **200.15.10.0/24**.

|**Department/Link**|**Network Address**|**Subnet Mask**|**Usable Hosts**|**Broadcast Address**|
|---|---|---|---|---|
|**NY Engineering**|`200.15.10.0/27`|`255.255.255.224`|`200.15.10.1 – 200.15.10.30`|`200.15.10.31`|
|**Boston Engineering**|`200.15.10.32/27`|`255.255.255.224`|`200.15.10.33 – 200.15.10.62`|`200.15.10.63`|
|**NY Sales**|`200.15.10.64/28`|`255.255.255.240`|`200.15.10.65 – 200.15.10.78`|`200.15.10.79`|
|**Boston Sales**|`200.15.10.80/28`|`255.255.255.240`|`200.15.10.81 – 200.15.10.94`|`200.15.10.95`|
|**NY ↔ Boston Link**|`200.15.10.96/30`|`255.255.255.252`|`200.15.10.97 – 200.15.10.98`|`200.15.10.99`|

---

## **4. How We Calculated the Network and Broadcast Addresses**

To find the **network and broadcast addresses**, we follow a **pattern** based on the **subnet increment**.

### **Example: NY Engineering (`/27` Subnet)**

- **Subnet Mask:** `/27` → **Subnet Increment = 32** 256−224=32256 - 224 = 32
- **Subnet Range:** `200.15.10.0` → `200.15.10.31`
- **Network Address:** `200.15.10.0`
- **Broadcast Address:** `200.15.10.31`
- **Usable Hosts:** `200.15.10.1 – 200.15.10.30`

### **Example: NY Sales (`/28` Subnet)**

- **Subnet Mask:** `/28` → **Subnet Increment = 16** 256−240=16256 - 240 = 16
- **Subnet Range:** `200.15.10.64` → `200.15.10.79`
- **Network Address:** `200.15.10.64`
- **Broadcast Address:** `200.15.10.79`
- **Usable Hosts:** `200.15.10.65 – 200.15.10.78`

🔹 **We repeat this process for each department.**

---

## **5. Why This Allocation Is Efficient**

✔ **No wasted IPs:** Each department gets exactly what it needs.  
✔ **Sequential allocation:** Makes routing and network management easier.  
✔ **No subnet overlaps:** Every department has a distinct subnet.

🚀 **In Part 3, we will discuss subnetting verification, routing considerations, and best practices. Would you like me to continue?** 😃