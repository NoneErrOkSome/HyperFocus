### **Summary of Layer 4: The Transport Layer Lecture**

#### **1. Overview of the Transport Layer**

- **Layer 4 (Transport Layer)** is responsible for **end-to-end communication**.
- It provides **flow control, error recovery, and session multiplexing**.
- These features are **optional** and depend on the **transport protocol** used.

#### **2. Flow Control & Session Multiplexing**

- **Flow Control**: Adjusts data flow between sender and receiver to **prevent overload**.
- **Session Multiplexing**: Manages multiple sessions over a single link by using **port numbers**.

#### **3. Port Numbers & Session Tracking**

- Each connection is identified using:
    - **Source Port** (random, above 1024)
    - **Destination Port** (well-known service ports)
- Example:
    - **HTTP traffic** → Destination Port **80**
    - **SMTP (email traffic)** → Destination Port **25**
- **Stateful Firewalls** use **source/destination port pairs** to track valid connections.

#### **4. TCP (Transmission Control Protocol)**

- **Connection-oriented**: A **reliable** protocol ensuring **data integrity**.
- **Three-way handshake**:
    1. **SYN** → Initiates the connection.
    2. **SYN-ACK** → Receiver acknowledges.
    3. **ACK** → Connection established.
- **Reliability Mechanisms**:
    - **Sequencing**: Ensures data is in **correct order**.
    - **Acknowledgments (ACKs)**: Confirms receipt of packets.
    - **Retransmission**: Resends lost packets.
    - **Flow Control**: Receiver can **slow down** the sender if overwhelmed.

#### **5. TCP Header Structure**

- **Source & Destination Ports** (Identifies applications).
- **Sequence & Acknowledgment Numbers** (Tracks order of packets).
- **Flags (SYN, ACK, FIN, etc.)** (Controls connection setup/termination).
- **Window Size** (Controls data flow rate).
- **Checksum** (Detects errors).

#### **6. UDP (User Datagram Protocol)**

- **Connectionless & Unreliable**:
    - No **handshake**, **acknowledgments**, or **retransmission**.
    - Sender **transmits data** without ensuring delivery.
- **Used for speed-sensitive applications** like **voice & video streaming**.

#### **7. UDP Header Structure**

- **Simpler than TCP**:
    - **Source & Destination Ports**.
    - **Length**.
    - **Checksum**.
    - **Data**.

#### **8. When to Use TCP vs. UDP**

- **TCP (Reliable, High Overhead)**
    - Used for **critical data transfer**:
        - **Web browsing (HTTP, HTTPS)**
        - **File transfers (FTP, SCP)**
        - **Email (SMTP, IMAP, POP3)**
- **UDP (Fast, Lightweight)**
    - Used for **real-time** or **low-latency** applications:
        - **VoIP (Voice over IP)**
        - **Live streaming**
        - **DNS lookups**

#### **9. Common TCP & UDP Ports**

|**Protocol**|**Transport**|**Port**|
|---|---|---|
|FTP (File Transfer)|TCP|21|
|SSH (Secure Shell)|TCP|22|
|Telnet|TCP|23|
|HTTP (Web)|TCP|80|
|HTTPS (Secure Web)|TCP|443|
|TFTP (Trivial File Transfer)|UDP|69|
|SNMP (Network Management)|UDP|161|
|DNS (Domain Name System)|**Both**|53|

#### **10. Conclusion**

- **TCP is reliable but slower due to error checking and retransmissions**.
- **UDP is fast but does not guarantee delivery**.
- **Application designers choose the protocol based on the requirements**.
- **Most internet traffic relies on TCP**, while **real-time applications prefer UDP**.

This lecture explained **how Layer 4 enables communication**, covering **TCP, UDP, flow control, port numbers, and session multiplexing**. 🚀