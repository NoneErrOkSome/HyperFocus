### **Part 3: Subnetting Verification, Routing Considerations, and Best Practices**

Now that we have assigned **subnet addresses** efficiently using **VLSM**, it is important to **verify the subnet design**, **ensure proper routing**, and follow **best practices** to avoid network issues.

---

## **1. Verifying the Subnetting Design**

Once the subnets are assigned, we must **double-check** that:  
✅ **Each subnet has the correct number of usable hosts.**  
✅ **Network addresses and broadcast addresses are correctly assigned.**  
✅ **No subnets overlap with each other.**  
✅ **Subnet boundaries align with the correct increments (e.g., `/27` subnets increment by 32).**

### **Subnet Verification Checklist**

|**Department/Link**|**Network Address**|**Subnet Mask**|**Usable Hosts**|**Broadcast Address**|
|---|---|---|---|---|
|**NY Engineering**|`200.15.10.0/27`|`255.255.255.224`|`200.15.10.1 – 200.15.10.30`|`200.15.10.31`|
|**Boston Engineering**|`200.15.10.32/27`|`255.255.255.224`|`200.15.10.33 – 200.15.10.62`|`200.15.10.63`|
|**NY Sales**|`200.15.10.64/28`|`255.255.255.240`|`200.15.10.65 – 200.15.10.78`|`200.15.10.79`|
|**Boston Sales**|`200.15.10.80/28`|`255.255.255.240`|`200.15.10.81 – 200.15.10.94`|`200.15.10.95`|
|**NY ↔ Boston Link**|`200.15.10.96/30`|`255.255.255.252`|`200.15.10.97 – 200.15.10.98`|`200.15.10.99`|

🔹 **Verifying subnet boundaries helps prevent routing conflicts and IP misconfigurations.**

---

## **2. Routing Considerations for the Subnetted Network**

Once subnetting is verified, we need to ensure **proper routing** so that devices in different subnets can communicate.

### **A. Configuring Routing Between Subnets**

Since each **subnet is separate**, devices must communicate **through a router**.

- The router must have **an IP assigned from each subnet** (interface IPs).
- **Static routes or a dynamic routing protocol (RIP, OSPF, EIGRP, BGP) must be used**.

### **B. Example of Router Interface Configuration**

Let’s assign IPs to **router interfaces** for inter-subnet communication.

|**Router Interface**|**Assigned IP**|**Subnet Mask**|**Connected Subnet**|
|---|---|---|---|
|**NY Router (LAN)**|`200.15.10.1`|`255.255.255.224 (/27)`|NY Engineering|
|**NY Router (LAN)**|`200.15.10.65`|`255.255.255.240 (/28)`|NY Sales|
|**NY Router (WAN)**|`200.15.10.97`|`255.255.255.252 (/30)`|NY ↔ Boston Link|
|**Boston Router (LAN)**|`200.15.10.33`|`255.255.255.224 (/27)`|Boston Engineering|
|**Boston Router (LAN)**|`200.15.10.81`|`255.255.255.240 (/28)`|Boston Sales|
|**Boston Router (WAN)**|`200.15.10.98`|`255.255.255.252 (/30)`|NY ↔ Boston Link|

### **C. Configuring Static Routes**

If using **static routing**, we must add routes so each router **knows how to reach other subnets**.

#### **On the NY Router:**

```
ip route 200.15.10.32 255.255.255.224 200.15.10.98
ip route 200.15.10.80 255.255.255.240 200.15.10.98
```

#### **On the Boston Router:**

```
ip route 200.15.10.0 255.255.255.224 200.15.10.97
ip route 200.15.10.64 255.255.255.240 200.15.10.97
```

🔹 **If using a dynamic routing protocol (OSPF, EIGRP, RIP), the routes will be learned automatically.**

---

## **3. Best Practices for Subnetting**

Following **best practices** ensures a network is **scalable, secure, and easy to manage**.

### **A. Keep Subnets Sequential & Contiguous**

✔ Allocate subnets **sequentially** (from largest to smallest).  
✔ Avoid **fragmented** IP assignments, which cause confusion in routing tables.

### **B. Plan for Scalability (Real-World vs. Exam)**

✔ **In real-world networks,** leave **room for growth** in subnet sizes.  
✔ **For CCNA exams,** use **the smallest possible subnet** as per the question’s requirements.

### **C. Use Standardized Naming & Documentation**

✔ **Document all subnets, assigned IPs, and router configurations.**  
✔ This prevents **IP conflicts and routing misconfigurations**.

---

## **4. Summary of Part 3**

✔ **Subnetting verification ensures proper IP allocation & subnet boundaries.**  
✔ **Routing must be configured so that different subnets can communicate.**  
✔ **Best practices ensure a scalable, secure, and manageable network.**

📌 **In Part 4, we will discuss network security, VLAN integration, and troubleshooting subnetting issues. Would you like me to continue?** 😃🚀