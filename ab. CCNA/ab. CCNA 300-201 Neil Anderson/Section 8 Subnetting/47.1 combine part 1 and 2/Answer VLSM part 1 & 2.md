# 🧠 **VLSM Design Summary – Real-World Example**

We've been allocated the IP block `200.15.10.0/24`.  
We'll now subnet this address space using **Variable Length Subnet Masks**, allocating just enough addresses for each department.

---

## ✅ **Step-by-Step VLSM Allocation**

We'll go from the **largest to smallest** requirement.

---

## 🏢 **1. New York Engineering (28 hosts)**

### ➕ Subnet Calculation

- Required: 28 hosts  
- Minimum bits:  
  $$
  2^5 = 32 \quad \Rightarrow \quad 32 - 2 = 30 \text{ usable hosts}
  $$
- ✅ Subnet size: `/27` → `255.255.255.224`

### 📦 Allocation

- Network: `200.15.10.0/27`  
- Broadcast: `200.15.10.31`  
- Host range: `200.15.10.1 – 200.15.10.30`

---

## 🏢 **2. Boston Engineering (28 hosts)**

Same subnet size: `/27`

### 📦 Allocation

- Network: `200.15.10.32/27`  
- Broadcast: `200.15.10.63`  
- Host range: `200.15.10.33 – 200.15.10.62`

---

## 🛍️ **3. New York Sales (14 hosts)**

### ➕ Subnet Calculation

- Required: 14 hosts  
- Minimum bits:  
  $$
  2^4 = 16 \quad \Rightarrow \quad 16 - 2 = 14 \text{ usable hosts}
  $$
- ✅ Subnet size: `/28` → `255.255.255.240`

### 📦 Allocation

- Network: `200.15.10.64/28`  
- Broadcast: `200.15.10.79`  
- Host range: `200.15.10.65 – 200.15.10.78`

---

## 🛍️ **4. Boston Sales (7 hosts)**

### ➕ Subnet Calculation

- Required: 7 hosts  
- Try `/29`:  
  $$
  2^3 = 8 \quad \Rightarrow \quad 8 - 2 = 6 \quad \text{❌ Too small}
  $$
- Use `/28` again:  
  $$
  2^4 = 16 \quad \Rightarrow \quad 16 - 2 = 14 \text{ usable hosts}
  $$

### 📦 Allocation

- Network: `200.15.10.80/28`  
- Broadcast: `200.15.10.95`  
- Host range: `200.15.10.81 – 200.15.10.94`

---

## 🔗 **5. Point-to-Point Link (2 hosts)**

### ➕ Subnet Calculation

- Required: 2 hosts  
- Use `/30`:  
  $$
  2^2 = 4 \quad \Rightarrow \quad 4 - 2 = 2 \text{ usable hosts}
  $$
- ✅ Standard for point-to-point

### 📦 Allocation

- Network: `200.15.10.96/30`  
- Broadcast: `200.15.10.99`  
- Host range: `200.15.10.97 – 200.15.10.98`

---

## 📊 **Final Summary Table**

| Department        | Subnet              | Subnet Mask        | Hosts | Host Range                   |
|------------------|---------------------|---------------------|-------|------------------------------|
| NY Engineering    | 200.15.10.0/27      | 255.255.255.224     | 30    | 200.15.10.1 – 200.15.10.30   |
| Boston Engineering| 200.15.10.32/27     | 255.255.255.224     | 30    | 200.15.10.33 – 200.15.10.62  |
| NY Sales          | 200.15.10.64/28     | 255.255.255.240     | 14    | 200.15.10.65 – 200.15.10.78  |
| Boston Sales      | 200.15.10.80/28     | 255.255.255.240     | 14    | 200.15.10.81 – 200.15.10.94  |
| P2P Link          | 200.15.10.96/30     | 255.255.255.252     | 2     | 200.15.10.97 – 200.15.10.98  |

---

## 🧠 Key Lessons

- Start with **largest subnets first**  
- Use the **smallest subnet possible** for efficiency  
- **/30** is best for P2P router links  
- Always subtract 2 for **network and broadcast**  
- For exams, follow **instructions exactly**, not real-world best practices

---

✅ Let me know if you want a **diagram layout** or **printable PDF version** next!


![[Mar 21, 2025, 11_00_55 AM.png]]
