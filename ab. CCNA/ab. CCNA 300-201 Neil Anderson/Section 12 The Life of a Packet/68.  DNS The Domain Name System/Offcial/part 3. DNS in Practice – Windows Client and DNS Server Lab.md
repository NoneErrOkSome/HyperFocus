Absolutely! Here's **Part 3** — a full deep dive into **DNS in Practice – Windows Client and DNS Server Lab**, based entirely on the lecture scope and rewritten in my own words.

---

# 🖥️ Part 3: DNS in Practice – Windows Client and DNS Server Lab

Now that we’ve covered DNS theory and enterprise architecture, let’s look at how it works in **real-world practice** using a **Windows-based lab setup**. This part walks through what’s happening on the **client** and **server** side of DNS inside a local network.

---

## 🧑‍💻 Step 1: Checking the DNS Configuration on a Client (Windows)

The first step is to inspect the client’s network configuration to verify:

- IP address
    
- Subnet mask
    
- Default gateway
    
- DNS server
    
- DNS domain
    

You do this using the `ipconfig /all` command.

### ▶️ Command:

```cmd
ipconfig /all
```

### 🖥️ Output Example:

|Field|Value|
|---|---|
|IP Address|`172.23.1.10`|
|Subnet Mask|`255.255.255.0 (/24)`|
|Default Gateway (Router)|`172.23.1.254`|
|DNS Server|`172.23.4.1`|
|DNS Suffix (Domain)|`flackboxa.lab`|

This tells us the client is part of the `flackboxa.lab` domain and uses the internal DNS server at `172.23.4.1`.

---

## 🧑‍💼 Step 2: Exploring the Internal DNS Server (Windows Server)

On the **DNS server**, you can open **DNS Manager** through Server Manager.

### ▶️ How to Access DNS Manager:

1. Open **Server Manager**
    
2. Go to **Tools > DNS**
    

You’ll see the server listed and its **authoritative zones**.

In this case, the DNS server is **authoritative** for:

```
flackboxa.lab
```

Meaning it owns and manages all the DNS records for this domain.

---

### 🧾 Inside the DNS Zone: Host Records (A Records)

Inside the `flackboxa.lab` zone, the administrator has created **A (Address) records** for devices.

#### Example Records:

|Hostname|IP Address|
|---|---|
|engineeringa|`172.23.6.10`|
|engineeringb|`172.23.6.11`|
|linuxa|`172.23.4.2`|

These records allow internal clients to resolve names like:

- `linuxa.flackboxa.lab`
    
- `engineeringa.flackboxa.lab`
    

---

## 🌐 Step 3: DNS Forwarder Configuration

If a query is made for an external domain like `www.google.com`, this DNS server **won’t have that info**.

Instead, it should **forward** the request to a public DNS server.

### ▶️ To Configure a Forwarder:

1. In DNS Manager, right-click the server name
    
2. Select **Properties**
    
3. Go to the **Forwarders** tab
    
4. Click **Edit** and enter the IP address of a public DNS server (e.g., `8.8.8.8`)
    

This lets internal clients reach Internet resources via DNS, even though the internal DNS server doesn’t have that data itself.

---

## 🧪 Step 4: Testing DNS Resolution from the Client

Let’s test resolution using two commands: `nslookup` and `ping`.

### ▶️ Command 1: `nslookup linuxa`

```cmd
nslookup linuxa
```

This sends a DNS query to the configured DNS server (in our case, `172.23.4.1`).

✅ Expected Result:

- DNS responds with `linuxa.flackboxa.lab`
    
- IP address is returned: `172.23.4.2`
    

### ▶️ Command 2: `ping linuxa`

```cmd
ping linuxa
```

This verifies that the name has been resolved correctly. If the IP address appears and the ping is successful, DNS is working fine.

✅ The device can now be reached by:

- Hostname (`linuxa`)
    
- FQDN (`linuxa.flackboxa.lab`)
    
- IP Address (`172.23.4.2`)
    

---

## ✅ Summary of Part 3

|Step|Action|
|---|---|
|`ipconfig /all`|Shows DNS server, IP, and domain info on the client|
|DNS Manager in Windows|Manages zones and records for internal domain|
|A Records|Map hostnames to IP addresses inside the enterprise|
|Forwarders Tab|Set public DNS servers for unknown external domains|
|`nslookup` and `ping`|Test if DNS resolution works properly on the network|

---

Next up is **Part 4: Practical Testing and Validation** — where we confirm name resolution using different name formats and explore what happens behind the scenes during DNS queries.

Let me know when you're ready!