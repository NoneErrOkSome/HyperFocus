Great! Below are the **correct answers** for each question. Compare them with yours and see how well you did. ✅

---

## **🔹 Section 1: Subnet Calculations**

**1.** Given **192.168.10.0/24**, subnets needed:

|**Department**|**Hosts Needed**|**Smallest Subnet Mask**|**Usable Hosts**|**Network Address**|**Broadcast Address**|
|---|---|---|---|---|---|
|Sales|50|`/26` (255.255.255.192)|62|`192.168.10.0`|`192.168.10.63`|
|HR|20|`/27` (255.255.255.224)|30|`192.168.10.64`|`192.168.10.95`|
|IT|10|`/28` (255.255.255.240)|14|`192.168.10.96`|`192.168.10.111`|
|Point-to-Point|2|`/30` (255.255.255.252)|2|`192.168.10.112`|`192.168.10.115`|

---

## **🔹 Section 2: Subnet Mask and Usable Hosts**

**2.** Usable hosts in **/26**:

(26)−2=62(2^6) - 2 = 62

✅ **62 usable hosts**

**3.** **Subnet mask for /22**:

255.255.252.0255.255.252.0

**4.** Given **172.16.0.0/20**, find:

- **Number of /24 subnets:** 2(24−20)=24=162^{(24-20)} = 2^4 = 16 ✅ **16 subnets**
- **Usable hosts per /24 subnet:** (28)−2=254(2^8) - 2 = 254 ✅ **254 hosts per subnet**

---

## **🔹 Section 3: Network Address & Broadcast Address**

**5.** **Network Address for 10.1.5.200/21**

- Subnet increment = `256 - 248 = 8`
- **Network Address** = `10.1.0.0`  
    ✅ **`10.1.0.0`**

**6.** **Broadcast Address for 192.168.50.33/27**

- Subnet increment = `256 - 224 = 32`
- **Network Address** = `192.168.50.32`
- **Broadcast Address** = `192.168.50.63`  
    ✅ **`192.168.50.63`**

**7.** Given **200.25.100.64/28**:

- **First usable host** = `200.25.100.65`
- **Last usable host** = `200.25.100.78`  
    ✅ **`65 – 78`**

---

## **🔹 Section 4: Routing & VLANs**

**8.** Given subnets:

- **10.10.1.0/25**
- **10.10.1.128/25**
- **10.10.2.0/24**
- **192.168.5.0/26**

**a) Total subnets:** **4**  
**b) Which can support 100+ hosts?**

- **10.10.2.0/24** ✅ (254 hosts)

**9.** VLAN 10 (`192.168.1.0/26`) & VLAN 20 (`192.168.1.64/26`) need:  
✅ **A Layer 3 switch (or a router) for Inter-VLAN routing**

**10.** Static routes:

```plaintext
ip route 192.168.20.0 255.255.255.0 192.168.1.1
ip route 192.168.30.0 255.255.255.0 192.168.1.2
```

✅ **192.168.1.1 & 192.168.1.2 are the next-hop IPs (gateway addresses) to reach those networks.**

---

## **🔹 Section 5: Troubleshooting Subnetting Issues**

**11.** Network **192.168.5.0/27** has issues:

- Possible misconfigured **subnet mask**
- **Overlapping IP assignments**
- **Wrong gateway IP**
- **Fix:** Verify **subnet mask**, **IP allocation**, and **routing settings**.

**12.** Subnet mismatch for **172.16.100.200/20**:

- Check **device subnet mask**
- Ensure **consistent mask on all network devices**
- Device must use **255.255.240.0**

---

## **🔹 Bonus Challenge Questions 🔥**

**13.** Given **172.16.0.0/16**:

- **Number of /24 subnets:** 2(24−16)=28=2562^{(24-16)} = 2^8 = 256 ✅ **256 subnets**
- **Number of /30 subnets:** 2(30−16)=214=16,3842^{(30-16)} = 2^{14} = 16,384 ✅ **16,384 point-to-point links**

**14.** **Splitting `192.168.10.0/24` into 8 subnets**

- Subnet mask: **`/27` (255.255.255.224)**
- Network addresses:
    
    ```
    192.168.10.0/27
    192.168.10.32/27
    192.168.10.64/27
    192.168.10.96/27
    192.168.10.128/27
    192.168.10.160/27
    192.168.10.192/27
    192.168.10.224/27
    ```
    

✅ **Correct subnets and subnet mask: `/27`**

---

## **🚀 How Did You Do?**

🎯 **Score yourself:**

- **13+ correct** = **Subnetting Master!** 🔥
- **10-12 correct** = **Great Job!** ✅
- **7-9 correct** = **Keep Practicing!** 💡
- **<7 correct** = **Need more practice? Let’s review together!** 😃

Let me know **which ones you got wrong** and I’ll help explain them further! 🚀