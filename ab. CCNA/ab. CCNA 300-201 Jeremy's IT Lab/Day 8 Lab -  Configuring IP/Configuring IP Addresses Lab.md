Alright, let’s deep dive into **Day 8 Lab - Configuring IP Addresses** from Jeremy’s IT Lab, in a natural, laid-back way, but still detailed and clear. This is where the rubber hits the road—you're actually _configuring_ stuff now.

---

### 🧰 **What's Going On in This Lab?**

You're taking a router—R1—and giving it some IP addresses on its interfaces so that it can communicate with other devices (like switches and PCs). This is foundational Layer 3 (Network Layer) config work, based on everything Jeremy's been explaining in the earlier lessons.

---

### 🛠️ Step-by-Step Breakdown

#### **1. Naming the Router**

By default, Cisco routers are just called `Router`. You give R1 its name:

```bash
Router> enable
Router# conf t
Router(config)# hostname R1
```

Boom. Now it’s officially called R1, and your prompt changes to `R1(config)#`.

---

#### **2. Checking Interfaces**

You run:

```bash
R1(config)# do show ip interface brief
```

Why `do`? Because you're still in config mode, but `show` commands are usually for _privileged exec mode_. `do` lets you cheat a little and run it from anywhere.

You'll see all the interfaces like `GigabitEthernet0/0`, `0/1`, `0/2`, etc. Most of them will be:

- IP: `unassigned`
    
- Status: `administratively down`
    
- Protocol: `down`
    

Why? Because routers come with their interfaces **shut down by default**. You have to bring them up manually.

---

#### **3. Configuring IP Addresses + Descriptions**

Now the fun begins. You're assigning actual IP addresses to the interfaces.

Here’s the breakdown:

|Interface|IP Address|Subnet Mask|Description|
|---|---|---|---|
|Gig0/0|15.255.255.254|255.0.0.0|`## to SW1 ##`|
|Gig0/1|182.98.255.254|255.255.0.0|`## to SW2 ##`|
|Gig0/2|201.191.20.254|255.255.255.0|`## to SW3 ##`|

Example for `Gig0/0`:

```bash
R1(config)# int g0/0
R1(config-if)# ip address 15.255.255.254 255.0.0.0
R1(config-if)# description ## to SW1 ##
R1(config-if)# no shutdown
```

Each time you do `no shutdown`, you'll see a system message saying the interface came up—both _Layer 1_ and _Layer 2_ are UP.

Repeat for the other interfaces.

---

#### **4. Confirm Everything Is Up**

Back to `privileged exec` mode:

```bash
R1# show ip interface brief
```

You should see:

- IP addresses assigned ✔
    
- Method: `manual`
    
- Status: `up`
    
- Protocol: `up`
    

Success ✅

---

#### **5. Save the Configuration**

Don’t forget this step, or your config goes bye-bye after a reboot:

```bash
R1# wr
```

That’s a shortcut for `write memory` a.k.a. `copy running-config startup-config`.

---

#### **6. Configuring the PCs**

Using Packet Tracer’s GUI:

- Go to each PC (PC1, PC2, PC3)
    
- Click `Config` > `FastEthernet0`
    
- Assign the IP address and observe that the subnet mask auto-fills based on the IP class
    

|PC|IP Address|Subnet Mask|Gateway (pre-configured)|
|---|---|---|---|
|PC1|15.0.0.1|255.0.0.0|15.255.255.254|
|PC2|182.98.0.1|255.255.0.0|182.98.255.254|
|PC3|201.191.20.1|255.255.255.0|201.191.20.254|

Note: The _Gateway_ is the router’s IP for that subnet—this is how the PC sends traffic out of its own LAN.

---

#### **7. Test with PING**

From PC1's `Command Prompt`:

```bash
ping 182.98.0.1   # Ping PC2
ping 201.191.20.1 # Ping PC3
```

If you see replies, you nailed it. 🎯

---

### 🧠 Deep Concepts Under the Hood

- **Default Shutdown**: Routers come with their interfaces off. `no shutdown` turns them on.
    
- **Show IP Interface Brief**: Your best friend. Gives a quick summary of what’s configured and working.
    
- **Classes (A, B, C)**:
    
    - Class A: `15.x.x.x`, mask: `255.0.0.0` (/8)
        
    - Class B: `182.x.x.x`, mask: `255.255.0.0` (/16)
        
    - Class C: `201.x.x.x`, mask: `255.255.255.0` (/24)
        
- **Descriptions**: Optional but helpful. Use them to document what each interface is connected to.
    
- **Manual IP Assignment**: Method shows `manual` in `show ip int brief`.
    

---

### ✅ Summary

By the end of this lab, you’ve:

- Configured a router’s interfaces with classful IPs
    
- Enabled them with `no shutdown`
    
- Added interface descriptions
    
- Configured end devices (PCs) with matching IPs and gateways
    
- Verified everything works with `ping`
    

Let me know if you want a Markdown + LaTeX summary or a diagram of the topology!