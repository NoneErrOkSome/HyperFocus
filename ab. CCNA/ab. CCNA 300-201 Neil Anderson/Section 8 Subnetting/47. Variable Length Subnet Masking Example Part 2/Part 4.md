### **Part 4: Completing the Network Diagram with Subnet Labels & Router IP Assignments**

Now that we have **subnetted all departments and the point-to-point link**, the final step is to **label the network diagram with subnet information** and **assign router interface IPs**.

---

## **1. Summary of All Assigned Subnets**

We now have a fully subnetted network with **five subnets**. Below is a summary of each subnet, including **network addresses, usable hosts, broadcast addresses, and subnet masks**.

|**Department/Link**|**Network Address**|**Subnet Mask**|**Usable Hosts**|**Broadcast Address**|
|---|---|---|---|---|
|**NY Engineering**|`200.15.10.0/27`|`255.255.255.224`|`200.15.10.1 – 200.15.10.30`|`200.15.10.31`|
|**Boston Engineering**|`200.15.10.32/27`|`255.255.255.224`|`200.15.10.33 – 200.15.10.62`|`200.15.10.63`|
|**NY Sales**|`200.15.10.64/28`|`255.255.255.240`|`200.15.10.65 – 200.15.10.78`|`200.15.10.79`|
|**Boston Sales**|`200.15.10.80/28`|`255.255.255.240`|`200.15.10.81 – 200.15.10.94`|`200.15.10.95`|
|**NY ↔ Boston Link**|`200.15.10.96/30`|`255.255.255.252`|`200.15.10.97 – 200.15.10.98`|`200.15.10.99`|

✅ **Each department has a correctly sized subnet with no wasted IPs.**  
✅ **The point-to-point link is properly subnetted using `/30` (2 hosts).**

---

## **2. Assigning Router Interface IPs**

To allow communication between subnets, each **router interface** must have an IP from its respective subnet.

|**Router Interface**|**Assigned IP**|**Connected Subnet**|
|---|---|---|
|**NY Router (LAN – Engineering)**|`200.15.10.1`|NY Engineering (`/27`)|
|**NY Router (LAN – Sales)**|`200.15.10.65`|NY Sales (`/28`)|
|**NY Router (WAN – Point-to-Point Link)**|`200.15.10.97`|NY ↔ Boston Link (`/30`)|
|**Boston Router (LAN – Engineering)**|`200.15.10.33`|Boston Engineering (`/27`)|
|**Boston Router (LAN – Sales)**|`200.15.10.81`|Boston Sales (`/28`)|
|**Boston Router (WAN – Point-to-Point Link)**|`200.15.10.98`|NY ↔ Boston Link (`/30`)|

✅ **Each router interface gets the first available IP from its subnet.**  
✅ **The point-to-point link has two router IPs assigned correctly.**

---

## **3. Completing the Network Diagram**

Now, let’s label the **network diagram with subnet and router interface details**.

📌 **Diagram Components:**

- **Two routers** (NY Router & Boston Router).
- **Two switches in each location** (one for Engineering, one for Sales).
- **Point-to-Point Link between the routers**.

### **Network Diagram Labeling:**

```
[ NY Router ] --------------------- [ Boston Router ]
    |                                  |
    |                                  |
[ NY Switch ]                    [ Boston Switch ]
    |                                  |
[ NY Engineering (30 hosts) ]   [ Boston Engineering (30 hosts) ]
Subnet: 200.15.10.0/27          Subnet: 200.15.10.32/27
Router IP: 200.15.10.1          Router IP: 200.15.10.33

[ NY Switch ]                    [ Boston Switch ]
    |                                  |
[ NY Sales (14 hosts) ]         [ Boston Sales (14 hosts) ]
Subnet: 200.15.10.64/28         Subnet: 200.15.10.80/28
Router IP: 200.15.10.65         Router IP: 200.15.10.81

[ Point-to-Point Link ]
Subnet: 200.15.10.96/30
NY Router WAN IP: 200.15.10.97
Boston Router WAN IP: 200.15.10.98
```

✅ **The diagram now includes all subnets and router interfaces.**  
✅ **Each department is labeled with the correct subnet and router IP.**

---

## **4. Final Summary**

✔ **Each department has an appropriately sized subnet (`/27`, `/28`, `/30`).**  
✔ **Router interfaces are assigned using the first available host in each subnet.**  
✔ **The final network diagram correctly labels all subnet information.**

🚀 **Congratulations! You have now successfully subnetted and labeled an entire network using VLSM. Would you like subnetting practice problems to test your understanding?** 😃