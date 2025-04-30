Here is the **second part** of the flashcards with **detailed answers** for better clarity.

---

### **Flashcards for Ethernet LAN Switching (CCNA Day 5-1) – Part 2**

|Question|Answer|
|---|---|
|**What device operates at Layer 2 of the OSI model?**|A **switch** operates at **Layer 2 (Data Link Layer)** and uses **MAC addresses** to forward Ethernet frames.|
|**What device operates at Layer 3 of the OSI model?**|A **router** operates at **Layer 3 (Network Layer)** and forwards packets using **IP addresses** to connect different networks.|
|**What is the primary function of a switch?**|A switch **forwards frames** between devices based on **MAC addresses**, ensuring efficient communication within a LAN.|
|**What type of transmission medium does Ethernet use?**|Ethernet can use **copper cables (UTP), fiber-optic cables, or wireless signals** to transmit data.|
|**How does the Physical Layer (Layer 1) transmit data?**|The **Physical Layer** converts digital data into **electrical signals (for wired networks)** or **radio signals (for wireless networks)** for transmission.|
|**What are the standard transmission limits for Ethernet over UTP cables?**|Ethernet over **UTP cables** has a standard transmission distance of **100 meters** before requiring a signal booster or switch.|
|**What does the Ethernet header contain?**|The **Ethernet header** contains: - **Destination MAC Address** (where the frame is going) - **Source MAC Address** (where the frame came from) - **Type/Length field** (indicates the protocol or data size).|
|**What does the Ethernet trailer contain?**|The **Ethernet trailer** contains only **one field**, the **Frame Check Sequence (FCS)**, which detects errors in the transmitted frame.|
|**What is the function of the Source MAC Address field in an Ethernet frame?**|The **Source MAC Address** field identifies **the device that sent the frame**, allowing switches to learn which MAC addresses belong to which ports.|
|**What happens when two switches are connected in a network?**|When two switches are connected, they **learn and store MAC addresses dynamically**, ensuring efficient forwarding of frames between devices.|
|**What field in the Ethernet frame determines if the encapsulated data is IPv4 or IPv6?**|The **Type field** in an Ethernet frame indicates whether the payload is **IPv4, IPv6, or another network protocol**.|
|**What is a burned-in address (BIA)?**|A **Burned-In Address (BIA)** is the permanent **MAC address assigned to a network device** by the manufacturer. Unlike IP addresses, it doesn’t change unless manually overridden.|
|**What is the purpose of encapsulation in networking?**|**Encapsulation** is the process of adding **headers and trailers** at each OSI layer to ensure correct data transmission between devices.|
|**What is a frame flooding attack?**|A **frame flooding attack** occurs when a device sends **many frames with random MAC addresses**, forcing a switch to flood all frames and slow down the network.|
|**How does a switch forward frames when its MAC table is empty?**|If a switch doesn’t have a **destination MAC address** in its MAC table, it **floods the frame to all ports except the one it was received on**.|
|**What is the default aging time for dynamic MAC addresses on Cisco switches?**|Cisco switches remove **inactive MAC addresses** after **300 seconds (5 minutes)** to free up space in the MAC address table.|
|**What happens when a switch receives a broadcast frame?**|A **broadcast frame** is sent to **all devices in the network**, and the switch **forwards** it to all connected ports **except the sender**.|
|**What is a collision domain?**|A **collision domain** is a network segment where **data collisions** can occur when two devices send data at the same time. Switches **eliminate collisions** by creating separate domains for each port.|
|**How does a switch reduce collision domains?**|A switch **creates a separate collision domain for each port**, allowing devices to communicate without interference.|
|**What is a broadcast domain?**|A **broadcast domain** is a network segment where a broadcast frame is received by **all devices**. Switches do not break broadcast domains, but routers do.|
|**How do routers manage broadcast domains?**|**Routers separate broadcast domains** by blocking broadcast traffic from passing between networks, ensuring efficiency.|
|**What happens when two devices in the same LAN communicate?**|When two devices communicate in a LAN, the switch **forwards frames** between them using **MAC addresses**, ensuring direct and efficient communication.|
|**What happens if a switch's MAC table overflows?**|If a switch’s **MAC table is full**, it **floods unknown unicast frames** to all ports, causing network slowdowns.|
|**What is the default size of an Ethernet frame?**|A standard **Ethernet frame** has a size of **64 to 1518 bytes**, excluding **jumbo frames**.|
|**What is a jumbo frame?**|A **jumbo frame** is an Ethernet frame **larger than 1500 bytes**, used to improve efficiency in high-speed networks (e.g., data centers).|
|**What does full-duplex mode mean in Ethernet?**|**Full-duplex** mode allows **data to be sent and received simultaneously**, improving network performance and reducing collisions.|
|**What is the maximum data rate for Fast Ethernet (100BASE-TX)?**|The maximum speed of **Fast Ethernet** (100BASE-TX) is **100 Mbps**.|
|**What is the maximum data rate for Gigabit Ethernet (1000BASE-T)?**|The maximum speed of **Gigabit Ethernet** (1000BASE-T) is **1 Gbps (1000 Mbps)**.|
|**What is the role of an uplink port on a switch?**|An **uplink port** is used to connect a switch to another switch or a router to expand the network.|
|**What is the purpose of auto-negotiation in Ethernet?**|**Auto-negotiation** allows a switch and a connected device to automatically determine **the best speed and duplex mode** for communication.|
|**What happens when two switches connect using a crossover cable?**|When two switches connect using a **crossover cable**, they communicate directly without needing a **router** or **auto MDI/MDIX**.|
|**What is the function of MDI/MDIX in switches?**|**MDI/MDIX (Medium Dependent Interface, Auto-Crossover)** allows switches to **automatically detect** whether a straight-through or crossover cable is being used, eliminating the need for manual cable selection.|
|**How do switches handle loop prevention?**|Switches use the **Spanning Tree Protocol (STP)** to prevent network loops, ensuring stable communication in complex networks.|
|**What is the main difference between a hub and a switch?**|A **hub** broadcasts data to all devices, causing **collisions and network congestion**, while a **switch** intelligently forwards frames based on **MAC addresses**, improving efficiency.|

---

### **Improvements in this Version**:

✅ **Expanded answers** for clearer understanding.  
✅ **Technical terms explained in simple language**.  
✅ **Bullet points for key concepts in complex answers**.

Would you like me to now generate an **updated Anki file** with these improved flashcards? 🚀😊