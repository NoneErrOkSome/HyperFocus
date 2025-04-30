## 🧱 IPv4 Header Fields (Standard Format)

| **Field Name**            | **Size**             | **Description**                                   |
|---------------------------|----------------------|---------------------------------------------------|
| Version                   | $4$ bits             | Always $4$ for IPv4                               |
| Header Length (IHL)       | $4$ bits             | Length of the IPv4 header in 32-bit words         |
| Type of Service (ToS) / DSCP | $8$ bits         | Indicates packet priority / service class         |
| Total Length              | $16$ bits            | Total length of the packet (header + data)        |
| Identification            | $16$ bits            | Used to identify and reassemble fragmented packets|
| Flags                     | $3$ bits             | Controls fragmentation behavior                   |
| Fragment Offset           | $13$ bits            | Position of this fragment in original packet      |
| Time to Live (TTL)        | $8$ bits             | Limits lifespan of the packet (hop count)         |
| Protocol                  | $8$ bits             | Indicates encapsulated Layer 4 protocol (e.g., TCP = 6, UDP = 17) |
| Header Checksum           | $16$ bits            | Error-checking for header                         |
| Source IP Address         | $32$ bits            | Sender's IP address                               |
| Destination IP Address    | $32$ bits            | Receiver's IP address                             |
| Options (optional)        | $0$–$40$ bytes       | Extra features; rarely used                       |
| Padding                   | variable             | Ensures header ends on 32-bit boundary            |

---

### 🧮 Total Header Size

Minimum header size (no options):

$$
20 \text{ bytes} = 160 \text{ bits}
$$

Maximum header size (with options):

$$
60 \text{ bytes} = 480 \text{ bits}
$$
