### **Subnetting Practice Quiz** 📝

**Instructions:** Answer the following questions based on your knowledge of **VLSM, subnetting, routing, and VLAN integration**.

---

### **🔹 Section 1: Subnet Calculations**

**1.** You are given the network **192.168.10.0/24** and need to create subnets for different departments.

- **Sales** needs **50 hosts**
- **HR** needs **20 hosts**
- **IT** needs **10 hosts**
- **Point-to-Point link** needs **2 hosts**

**Question:**  
a) What is the **smallest subnet mask** for each department?  
b) What are the **network and broadcast addresses** for each subnet?  
c) How many **usable hosts** does each subnet provide?

---

### **🔹 Section 2: Subnet Mask and Usable Hosts**

**2.** How many **usable hosts** are available in a **/26** subnet?

**3.** What is the subnet mask for a **/22** network in dotted decimal notation?

**4.** A company is assigned **172.16.0.0/20**.

- How many **subnets** can be created if the company subnets into **/24** networks?
- How many **usable hosts** are in each **/24** subnet?

---

### **🔹 Section 3: Network Address & Broadcast Address**

**5.** What is the **network address** for the IP **10.1.5.200/21**?

**6.** What is the **broadcast address** for **192.168.50.33/27**?

**7.** Your ISP assigns you **200.25.100.64/28**.

- What is the **first usable host**?
- What is the **last usable host**?

---

### **🔹 Section 4: Routing & VLANs**

**8.** Your network has the following subnets:

- **10.10.1.0/25**
- **10.10.1.128/25**
- **10.10.2.0/24**
- **192.168.5.0/26**

a) How many **total subnets** are there?  
b) Which subnets can support at least **100 hosts**?

**9.** Your **VLAN 10** (Sales) is assigned **192.168.1.0/26**, and **VLAN 20** (HR) is assigned **192.168.1.64/26**.

- What device is needed to allow VLAN 10 and VLAN 20 to communicate?

**10.** You configure a router with static routes:

```
ip route 192.168.20.0 255.255.255.0 192.168.1.1
ip route 192.168.30.0 255.255.255.0 192.168.1.2
```

- What does **192.168.1.1** and **192.168.1.2** represent in this routing table?

---

### **🔹 Section 5: Troubleshooting Subnetting Issues**

**11.** A network engineer configured a subnet **192.168.5.0/27**, but some devices cannot communicate.

- What might be wrong?
- How can the issue be fixed?

**12.** A network admin assigned an IP **172.16.100.200/20**, but the system shows a **subnet mismatch** error.

- What should be checked to resolve this issue?

---

### **Bonus Challenge Questions 🔥**

**13.** You are designing a large corporate network using **172.16.0.0/16**.

- How many **/24 subnets** can you create?
- How many **/30 point-to-point links** can you create from this block?

**14.** Your company has **192.168.10.0/24** and wants to create **8 equal subnets**.

- What **subnet mask** should you use?
- What will be the **network addresses** of the subnets?

---

🚀 **Take your time and solve each question. Let me know when you're ready to check your answers!** 😃