Here's a detailed, step-by-step explanation of the **VLSM subnetting** from **08-07-VLSM-Example-Part-2.pdf** based strictly on the project file's scope and teaching method.

---

## 🔢 VLSM Subnetting Breakdown (Part 2)

We’ve been allocated the IP **200.15.10.0/24**, and we need to divide it among departments with different host needs.

---

### ✅ **Step 1: New York Sales – Needs 14 Hosts**

#### 🧠 Determine Subnet Mask:

- Required: 14 hosts
- Formula: $$2^n - 2 \geq 14 \Rightarrow 2^4 = 16 \Rightarrow 16 - 2 = 14 \quad \text{(perfect fit)}
$$

- So, **4 host bits** → **/28 subnet mask** Subnet mask=255.255.255.240\text{Subnet mask} = 255.255.255.240

#### 📍 Choose Available Range:

- Engineering already used up: `200.15.10.0` to `200.15.10.63`
- Next available block: starts at `200.15.10.64`
- Block size: $$
256 - 240 = 16 \Rightarrow \text{next subnet is at } 64 + 16 = 80
$$


#### 🧾 Subnet Info:

- **Network Address**: `200.15.10.64/28`
- **Broadcast Address**: `200.15.10.79`
- **Valid Hosts**: `200.15.10.65` → `200.15.10.78`

---

### ✅ **Step 2: Boston Sales – Needs 7 Hosts**

#### 🧠 Determine Subnet Mask:

- Required: 7 hosts
- Try **/29** (3 host bits): 
$$
\text{Try } /29: \quad 2^3 - 2 = 6 \text{ (too small)}
$$

- So again, we use **/28**, which supports **14 hosts**

#### 📍 Choose Available Range:

- `200.15.10.64` to `200.15.10.79` is taken
- Next available is: 


$$
64 + 16 = 80 \Rightarrow \text{start at } 200.15.10.80

$$

#### 🧾 Subnet Info:

- **Network Address**: `200.15.10.80/28`
- **Broadcast Address**: `200.15.10.95`
- **Valid Hosts**: `200.15.10.81` → `200.15.10.94`

---

### ✅ **Step 3: Point-to-Point Link (New York ↔ Boston)**

#### 🧠 Determine Subnet Mask:

- Needs only **2 hosts** (1 IP per router)
- Use **/30**: 

$$
2^2 - 2 = 2 \text{ hosts}
$$

- Subnet mask: $$ 255.255.255.252255.255.255.252 $$

#### 📍 Choose Available Range:

- Last subnet ended at `200.15.10.95`
- Block size =
$$
256 - 252 = 4 \Rightarrow \text{start at } 96
$$

#### 🧾 Subnet Info:

- **Network Address**: `200.15.10.96/30`
- **Broadcast Address**: `200.15.10.99`
- **Valid Hosts**: `200.15.10.97` and `200.15.10.98`

---

### 🧠 Final Diagram Summary:

|Subnet|Dept.|Mask|Network|Hosts Range|Broadcast|
|---|---|---|---|---|---|
|.0|Eng NY|/27|200.15.10.0|.1 - .30|.31|
|.32|Eng BOS|/27|200.15.10.32|.33 - .62|.63|
|.64|Sales NY|/28|200.15.10.64|.65 - .78|.79|
|.80|Sales BOS|/28|200.15.10.80|.81 - .94|.95|
|.96|Link|/30|200.15.10.96|.97 - .98|.99|

---

Would you like me to rewrite this in Markdown and LaTeX format for note-taking or Obsidian use?