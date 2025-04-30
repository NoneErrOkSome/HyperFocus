Awesome! Here's your **Part 4: Practical Testing and Validation** — rewritten casually for clear understanding without complex words, but still keeping the key terms and structure:

---

# 🧪 Part 4: Testing DNS – Make Sure It’s Working

---

## 🧑‍🔬 What’s Going On?

Now that DNS is set up, let’s make sure it actually works. We’re testing on a **Windows client** that’s using an **internal DNS server** to look up names like:

- `linuxa.flackboxa.lab` → `172.23.4.2`
    

You’ll use simple tools to check if:

- Names are being turned into IPs correctly (DNS resolution)
    
- The devices can **talk to each other** (network connection)
    

---

## 🔍 Tool #1: `nslookup` – Ask DNS Directly

This command checks if DNS is giving back the right IP.

### ▶️ Try This:

```cmd
nslookup linuxa
```

### What’s Happening:

- The system adds `.flackboxa.lab` behind the scenes
    
- It asks the DNS server for the IP of `linuxa.flackboxa.lab`
    
- You should get something like:
    

```
Name: linuxa.flackboxa.lab
Address: 172.23.4.2
```

✅ If you see this, DNS is working fine for that name.

---

## 🧰 Tool #2: `ping` – Test DNS + Network

This command not only checks DNS but also if the machine is **reachable**.

### ▶️ Try This:

```cmd
ping linuxa
```

### What’s Happening:

1. DNS is used to turn `linuxa` into an IP
    
2. Then it sends a test message to that IP (called a "ping")
    

✅ If everything works, you’ll see:

```
Reply from 172.23.4.2: bytes=32 time<1ms TTL=128
```

That means:

- DNS worked
    
- The network is fine
    
- The other machine is online and answering
    

---

## 🧠 What Each Test Really Tells You

|Command|What It Checks|
|---|---|
|`nslookup linuxa`|Just DNS (name → IP)|
|`ping linuxa`|DNS + if the machine is reachable|
|`ping 172.23.4.2`|Only the network (no DNS involved)|

So if `ping linuxa` fails but `ping 172.23.4.2` works, your DNS might be broken. But if both fail, the network is probably the issue.

---

## 🧪 Try Different Formats

|Type|Example|What It Does|
|---|---|---|
|Hostname|`linuxa`|Adds `.flackboxa.lab` automatically|
|FQDN|`linuxa.flackboxa.lab`|Full name, no guessing needed|
|IP Address|`172.23.4.2`|Skips DNS completely|

---

## 💡 Quick Tips

- If **ping by name works** → DNS is working
    
- If **ping by IP works but name doesn’t** → DNS issue
    
- If **neither works** → Check network stuff (firewall, gateway, etc.)
    

---

## ✅ Simple Summary

|Test|Checks|
|---|---|
|`nslookup linuxa`|Does DNS give the right IP?|
|`ping linuxa`|Can it find + talk to the other device?|
|`ping 172.23.4.2`|Can it talk to the IP directly?|

---

Let me know if you want a **visual cheat sheet**, a **mini quiz**, or want to start **Part 5: DNS Record Types** (A, CNAME, PTR, MX, etc.) in the same style!