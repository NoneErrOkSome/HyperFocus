When you encounter the error message **"An attempt was made to access a socket in a way forbidden by its access permissions"**, it's usually because a network service or permission issue is preventing your application from binding to a specific port (like port 8080). This often occurs in environments where network configurations are managed by virtual adapters, such as with Docker or other virtualization software.

One potential solution is to **restart the Host Network Service (HNS)** on Windows, which controls many of the virtual networking functions used by containers and other services.

### Explanation:
1. **Host Network Service (HNS)**: HNS is a service on Windows that manages networking for containers and virtual adapters. If there’s a problem with how these virtual networks are set up or if a configuration gets stuck, it can lead to network-related errors, like the one you're seeing.

2. **Why Restarting HNS Helps**: 
   - Sometimes, the **HNS** gets into a state where it doesn't allow certain applications to bind to ports, or it holds onto resources that should be released. Restarting HNS clears these states and resets the network configuration, resolving conflicts or issues with port access.

3. **How to Restart HNS**:
   - Open an **admin** PowerShell or Command Prompt by right-clicking and selecting **Run as Administrator**.
   - Run the following commands to restart the Host Network Service:
     ```bash
     net stop hns
     net start hns
     ```
   - **Stopping HNS** releases the control of virtual networks and clears any stuck configurations.
   - **Starting HNS** reinitializes the network configurations, allowing your application to properly bind to the port it needs.

4. **Result**:
   After restarting the HNS service, the system should clear any restrictions or conflicts on the socket or port, allowing your application to bind to it without encountering the "forbidden by its access permissions" error.

In summary, restarting HNS essentially resets Windows networking for virtual environments, clearing issues with network permissions and allowing your application to work correctly.