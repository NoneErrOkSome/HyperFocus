Layer 7 – Application
├── Frontend
│   ├── HTTP/HTTPS requests
│   ├── Forms, Cookies
│   ├── WebSockets (client-side)
│   └── Browser rendering logic
└── Backend
    ├── HTTP Servers (Express, Django, etc.)
    ├── REST/gRPC APIs
    ├── API Gateways, Microservices
    └── WebSocket server handlers

Layer 6 – Presentation
├── Frontend
│   ├── TLS encryption (via HTTPS)
│   ├── JSON/XML parsing
│   └── Encoding formats (Base64, etc.)
└── Backend
    ├── TLS termination (reverse proxies, APIs)
    ├── Data compression (gzip, brotli)
    ├── Serialization (Protobuf, JSON)
    └── MIME type handling

Layer 5 – Session
├── Frontend
│   ├── Cookie-based sessions
│   └── Persistent WebSocket connections
└── Backend
    ├── Session validation (JWTs, DB sessions)
    ├── TLS session establishment
    └── WebSocket connection state

Layer 4 – Transport
├── Frontend
│   └── Rarely handled (implicitly via browser)
└── Backend
    ├── TCP/UDP sockets
    ├── Port binding (e.g., server.listen)
    └── Load balancer port configs

Layer 3 – Network
├── Frontend
│   └── DNS resolution (indirectly via browser)
└── Backend
    ├── IP routing and firewall configs
    └── Docker container networking

Layer 2 & 1 – Data Link & Physical
└── (Not directly used by frontend or backend devs – handled by OS/hardware)
