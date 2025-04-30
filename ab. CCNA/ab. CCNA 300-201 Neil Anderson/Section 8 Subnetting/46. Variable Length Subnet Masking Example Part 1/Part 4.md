### **Part 4: Network Security, VLAN Integration, and Troubleshooting Subnetting Issues**

Now that we have verified the subnetting, configured routing, and followed best practices, the final step is **securing the network**, **integrating VLANs**, and **troubleshooting common subnetting issues**.

---

## **1. Network Security Considerations for Subnetted Networks**

Subnetting alone does **not** provide security—it simply divides the network into **smaller, manageable segments**. However, we can enhance security by applying **access control policies and firewalls**.

### **A. Isolating Departments for Security**

✔ **Subnetting naturally separates network segments.**  
✔ **Firewalls and ACLs (Access Control Lists) can restrict inter-subnet communication.**  
✔ **Critical departments (e.g., Accounting, HR) should have strict access controls.**

#### **Example: ACL to Restrict Access to the Accounting Subnet**

```plaintext
access-list 100 deny ip any 192.168.10.0 0.0.0.255
access-list 100 permit ip any any
```

✅ This **blocks access to the `192.168.10.0/24` (Accounting)** subnet but allows everything else.

---

### **B. Securing the Point-to-Point Link**

✔ **Use a /30 subnet for point-to-point links** to minimize exposure.  
✔ **Apply router authentication (OSPF, EIGRP authentication)** to prevent unauthorized routing updates.  
✔ **Enable encryption (IPSec, GRE tunnels) if needed for WAN links.**

---

## **2. VLAN Integration with Subnetting**

In modern networks, **subnetting and VLANs (Virtual LANs) work together** to create **logical network segmentation**.

### **A. Why Use VLANs with Subnets?**

✔ **VLANs allow devices to be in the same subnet, even if physically separate.**  
✔ **Traffic between VLANs is routed at Layer 3 (using a router or Layer 3 switch).**  
✔ **Prevents excessive broadcast traffic** in large networks.

### **B. VLAN-to-Subnet Mapping Example**

Each VLAN is mapped to a **specific subnet** for easier management.

|**VLAN**|**Department**|**Subnet**|**VLAN ID**|
|---|---|---|---|
|**VLAN 10**|NY Engineering|`200.15.10.0/27`|`10`|
|**VLAN 20**|Boston Engineering|`200.15.10.32/27`|`20`|
|**VLAN 30**|NY Sales|`200.15.10.64/28`|`30`|
|**VLAN 40**|Boston Sales|`200.15.10.80/28`|`40`|

🔹 **Inter-VLAN routing is required for VLANs to communicate with each other.**  
🔹 **Layer 3 switches or routers perform this function.**

✅ **Example Configuration for a Layer 3 Switch:**

```plaintext
interface vlan 10
 ip address 200.15.10.1 255.255.255.224
!
interface vlan 20
 ip address 200.15.10.33 255.255.255.224
!
interface vlan 30
 ip address 200.15.10.65 255.255.255.240
!
ip routing
```

✅ **Now, VLANs can communicate using the Layer 3 switch.**

---

## **3. Troubleshooting Common Subnetting Issues**

Even with a well-planned subnetting design, **issues can occur**. Here’s how to fix the most common problems.

### **A. Incorrect Subnet Mask**

✔ **Problem:** Devices cannot communicate with other subnets.  
✔ **Fix:** Ensure the **correct subnet mask is used on all devices**.  
✔ **Example:**

- If a device in `200.15.10.0/27` has **`/24` instead of `/27`**, it will think **all subnets are one big network**.

### **B. Overlapping Subnets**

✔ **Problem:** Two subnets share an IP range, causing routing issues.  
✔ **Fix:** Recalculate subnet ranges and **reassign conflicting addresses**.  
✔ **Example:**

- `200.15.10.32/27` and `200.15.10.48/27` overlap because they **don't align with the correct subnet increment**.

### **C. Routing Issues**

✔ **Problem:** Devices cannot communicate between subnets.  
✔ **Fix:** Ensure **routers have correct static routes or a working dynamic routing protocol**.  
✔ **Example:**

- If `200.15.10.0/27` cannot reach `200.15.10.32/27`, check **route tables** and **default gateways**.

### **D. Misconfigured VLANs**

✔ **Problem:** Devices in the same subnet but different VLANs cannot communicate.  
✔ **Fix:** **Ensure VLAN interfaces are correctly assigned** and **routing is enabled**.

---

## **4. Summary of Part 4**

✔ **Security measures must be applied to protect subnets from unauthorized access.**  
✔ **VLANs and subnetting work together to logically separate networks.**  
✔ **Troubleshooting subnetting issues requires checking subnet masks, routing, and VLAN settings.**

🚀 **Congratulations! You now have a complete understanding of VLSM, subnetting, routing, VLAN integration, and security. Would you like a subnetting practice quiz to test your knowledge?** 😃