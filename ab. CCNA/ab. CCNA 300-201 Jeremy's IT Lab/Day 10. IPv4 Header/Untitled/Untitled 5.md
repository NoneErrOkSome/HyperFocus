## 📊 Layer 2 vs Layer 3 Comparison Table

| Feature / Aspect            | **Layer 2 – Data Link**                       | **Layer 3 – Network**                          |
|-----------------------------|-----------------------------------------------|------------------------------------------------|
| **OSI Layer Number**        | Layer 2                                       | Layer 3                                        |
| **Main Responsibility**     | Local delivery within the same network        | Routing and delivering between different networks |
| **Unit of Data (PDU)**      | **Frame**                                     | **Packet**                                     |
| **Addressing Type**         | **MAC Address**                               | **IP Address**                                 |
| **Examples of Addresses**   | `00:1A:2B:3C:4D:5E`                           | `192.168.1.1`, `8.8.8.8`                        |
| **Scope**                   | **Local network (LAN)**                       | **Global or inter-network**                    |
| **Devices Involved**        | Switches, NICs                                | Routers, Layer 3 switches                      |
| **Protocol Examples**       | Ethernet, Wi-Fi, PPP                          | IPv4, IPv6                                     |
| **Hardware vs Logical**     | **Hardware-based addressing** (MAC)           | **Logical addressing** (IP)                    |
| **Encapsulation Layer**     | Adds Ethernet header and trailer              | Adds IPv4 or IPv6 header                        |
| **Switches work here?**     | ✅ Yes                                         | ❌ No (unless it's a Layer 3 switch)           |
| **Routers work here?**      | ❌ No                                          | ✅ Yes                                          |
| **Header Includes**         | Source/Dest MAC, EtherType, CRC               | Source/Dest IP, TTL, Protocol, Checksum        |
| **Example Use Case**        | PC to PC on the same LAN                      | PC to a server across the internet             |

---

### 🔁 TL;DR Summary:

- **Layer 2** = Local delivery with MAC addresses  
- **Layer 3** = Global delivery with IP addresses
