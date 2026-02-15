// -------------------- 450+ TA REAL IC3 GS6 ATAMALARI --------------------
const fullGlossary = [
  // ==================== HARDWARE (80 ta) ====================
  {
    en: "Central Processing Unit",
    uz: "Markaziy protsessor",
    category: "Hardware",
  },
  { en: "Random Access Memory", uz: "Tezkor xotira", category: "Hardware" },
  { en: "Hard Disk Drive", uz: "Qattiq disk", category: "Hardware" },
  { en: "Solid State Drive", uz: "Tezkor xotirali disk", category: "Hardware" },
  { en: "Motherboard", uz: "Ona plata", category: "Hardware" },
  { en: "Power Supply Unit", uz: "Elektr manbai", category: "Hardware" },
  { en: "Graphics Card", uz: "Video karta", category: "Hardware" },
  { en: "Sound Card", uz: "Ovoz kartasi", category: "Hardware" },
  { en: "Network Interface Card", uz: "Tarmoq kartasi", category: "Hardware" },
  { en: "USB Flash Drive", uz: "Fleshka", category: "Hardware" },
  { en: "External Hard Drive", uz: "Tashqi qattiq disk", category: "Hardware" },
  { en: "Keyboard", uz: "Klaviatura", category: "Hardware" },
  { en: "Mouse", uz: "Sichqoncha", category: "Hardware" },
  { en: "Monitor", uz: "Monitor", category: "Hardware" },
  { en: "Printer", uz: "Printer", category: "Hardware" },
  { en: "Scanner", uz: "Skaner", category: "Hardware" },
  { en: "Speaker", uz: "Dinamik", category: "Hardware" },
  { en: "Microphone", uz: "Mikrofon", category: "Hardware" },
  { en: "Webcam", uz: "Veb-kamera", category: "Hardware" },
  { en: "Projector", uz: "Proyektor", category: "Hardware" },
  { en: "Router", uz: "Router", category: "Hardware" },
  { en: "Modem", uz: "Modem", category: "Hardware" },
  { en: "Switch", uz: "Switch", category: "Hardware" },
  { en: "Access Point", uz: "Kirish nuqtasi", category: "Hardware" },
  { en: "Ethernet Cable", uz: "Ethernet kabel", category: "Hardware" },
  { en: "USB Cable", uz: "USB kabel", category: "Hardware" },
  { en: "HDMI Cable", uz: "HDMI kabel", category: "Hardware" },
  { en: "VGA Cable", uz: "VGA kabel", category: "Hardware" },
  { en: "DisplayPort", uz: "DisplayPort", category: "Hardware" },
  { en: "Thunderbolt", uz: "Thunderbolt", category: "Hardware" },
  { en: "Bluetooth Adapter", uz: "Bluetooth adapter", category: "Hardware" },
  { en: "Wi-Fi Adapter", uz: "Wi-Fi adapter", category: "Hardware" },
  { en: "Touch Screen", uz: "Sensorli ekran", category: "Hardware" },
  { en: "Stylus", uz: "Stilus", category: "Hardware" },
  { en: "Trackpad", uz: "Sensorli panel", category: "Hardware" },
  { en: "Cooling Fan", uz: "Sovutish ventilyatori", category: "Hardware" },
  { en: "Heat Sink", uz: "Issiqlik sochgich", category: "Hardware" },
  { en: "BIOS", uz: "BIOS", category: "Hardware" },
  { en: "CMOS Battery", uz: "CMOS batareyasi", category: "Hardware" },
  { en: "Expansion Slot", uz: "Kengaytirish uyasi", category: "Hardware" },
  { en: "PCI Express", uz: "PCI Express", category: "Hardware" },
  { en: "SATA Port", uz: "SATA port", category: "Hardware" },
  { en: "Power Button", uz: "Quvvat tugmasi", category: "Hardware" },
  { en: "Reset Button", uz: "Qayta yuklash tugmasi", category: "Hardware" },
  { en: "LED Indicator", uz: "LED ko'rsatkichi", category: "Hardware" },
  { en: "Cooling Pad", uz: "Sovutish paneli", category: "Hardware" },
  { en: "Docking Station", uz: "Dok stansiyasi", category: "Hardware" },
  { en: "KVM Switch", uz: "KVM switch", category: "Hardware" },
  { en: "Barcode Reader", uz: "Shtrix kod o'quvchi", category: "Hardware" },
  {
    en: "Magnetic Stripe Reader",
    uz: "Magnit lenta o'quvchi",
    category: "Hardware",
  },
  { en: "Smart Card Reader", uz: "Smart karta o'quvchi", category: "Hardware" },
  { en: "Biometric Scanner", uz: "Biometrik skaner", category: "Hardware" },
  { en: "Fingerprint Reader", uz: "Barmoq izi o'quvchi", category: "Hardware" },
  { en: "Iris Scanner", uz: "Ko'z skaneri", category: "Hardware" },
  { en: "Game Controller", uz: "O'yin kontrolleri", category: "Hardware" },
  { en: "Joystick", uz: "Joystik", category: "Hardware" },
  { en: "VR Headset", uz: "VR ko'zoynak", category: "Hardware" },
  { en: "Graphics Tablet", uz: "Grafik planshet", category: "Hardware" },
  { en: "MIDI Keyboard", uz: "MIDI klaviatura", category: "Hardware" },
  { en: "Digital Camera", uz: "Raqamli kamera", category: "Hardware" },
  {
    en: "computing devices",
    uz: "hisoblash qurilmalari",
    category: "Hardware",
  },
  {
    en: "Keyboard damage",
    uz: "klaviatura shikastlanishi",
    category: "Hardware",
  },
  { en: "input devices", uz: "kirish qurilmalari", category: "Hardware" },
  { en: "output devices", uz: "chiqarish qurilmalari", category: "Hardware" },
  { en: "USB types", uz: "USB turlari", category: "Hardware" },
  { en: "USB-C", uz: "USB-C", category: "Hardware" },
  { en: "Micro USB", uz: "Micro USB", category: "Hardware" },
  { en: "Lightning connector", uz: "Lightning ulagich", category: "Hardware" },
  {
    en: "HDMI",
    uz: "yuqori aniqlikdagi multimedia interfeysi",
    category: "Hardware",
  },
  { en: "RAM", uz: "tezkor xotira (RAM)", category: "Hardware" },
  { en: "ROM", uz: "doimiy xotira (ROM)", category: "Hardware" },
  { en: "wired network", uz: "simli tarmoq", category: "Hardware" },
  { en: "Wi-Fi", uz: "Wi-Fi", category: "Hardware" },
  { en: "Ethernet", uz: "ethernet", category: "Hardware" },
  { en: "USB Flash Drive", uz: "USB flesh-xotira", category: "Hardware" },
  {
    en: "Digital Subscriber Line (DSL)",
    uz: "raqamli abonent liniyasi (DSL)",
    category: "Hardware",
  },

  // ==================== SOFTWARE (80 ta) ====================
  { en: "Operating System", uz: "Operatsion tizim", category: "Software" },
  { en: "Application Software", uz: "Amaliy dastur", category: "Software" },
  { en: "System Software", uz: "Tizim dasturi", category: "Software" },
  { en: "Driver", uz: "Drayver", category: "Software" },
  { en: "Firmware", uz: "Mikrodastur", category: "Software" },
  { en: "Word Processor", uz: "Matn muharriri", category: "Software" },
  { en: "Spreadsheet", uz: "Jadval muharriri", category: "Software" },
  { en: "Presentation Software", uz: "Taqdimot dasturi", category: "Software" },
  { en: "Database Software", uz: "Ma'lumotlar bazasi", category: "Software" },
  { en: "Web Browser", uz: "Veb brauzer", category: "Software" },
  { en: "Email Client", uz: "Email dasturi", category: "Software" },
  { en: "Media Player", uz: "Media pleer", category: "Software" },
  { en: "Graphics Software", uz: "Grafik dastur", category: "Software" },
  { en: "Video Editor", uz: "Video muharrir", category: "Software" },
  { en: "Audio Editor", uz: "Audio muharrir", category: "Software" },
  { en: "Antivirus", uz: "Antivirus", category: "Software" },
  { en: "Firewall", uz: "Xavfsizlik devori", category: "Software" },
  { en: "Compression Tool", uz: "Siqish dasturi", category: "Software" },
  { en: "PDF Reader", uz: "PDF o'quvchi", category: "Software" },
  { en: "Cloud Storage", uz: "Bulutli xotira", category: "Software" },
  { en: "Virtual Machine", uz: "Virtual mashina", category: "Software" },
  { en: "Emulator", uz: "Emulyator", category: "Software" },
  { en: "Compiler", uz: "Kompilyator", category: "Software" },
  { en: "Interpreter", uz: "Interpretator", category: "Software" },
  { en: "IDE", uz: "Integratsiyalangan muhit", category: "Software" },
  { en: "Version Control", uz: "Versiya nazorati", category: "Software" },
  {
    en: "Database Management",
    uz: "Ma'lumotlar bazasi boshqaruvi",
    category: "Software",
  },
  { en: "CRM Software", uz: "CRM dasturi", category: "Software" },
  { en: "ERP Software", uz: "ERP dasturi", category: "Software" },
  {
    en: "Accounting Software",
    uz: "Buxgalteriya dasturi",
    category: "Software",
  },
  { en: "Project Management", uz: "Loyiha boshqaruvi", category: "Software" },
  { en: "Time Tracking", uz: "Vaqt kuzatuvi", category: "Software" },
  { en: "Screen Recorder", uz: "Ekran yozuvchi", category: "Software" },
  { en: "Screenshot Tool", uz: "Ekran tasvirchi", category: "Software" },
  { en: "Remote Desktop", uz: "Masofaviy ish stoli", category: "Software" },
  { en: "VPN Client", uz: "VPN mijoz", category: "Software" },
  { en: "Backup Software", uz: "Zaxira dasturi", category: "Software" },
  {
    en: "Recovery Software",
    uz: "Qayta tiklash dasturi",
    category: "Software",
  },
  { en: "Disk Cleanup", uz: "Disk tozalash", category: "Software" },
  { en: "Disk Defragmenter", uz: "Disk defragmentatori", category: "Software" },
  { en: "Task Manager", uz: "Vazifa menejeri", category: "Software" },
  { en: "Registry Editor", uz: "Registr muharriri", category: "Software" },
  { en: "Command Prompt", uz: "Buyruq satri", category: "Software" },
  { en: "PowerShell", uz: "PowerShell", category: "Software" },
  { en: "Text Editor", uz: "Matn muharriri", category: "Software" },
  { en: "Notepad", uz: "Bloknot", category: "Software" },
  { en: "Calculator", uz: "Kalkulyator", category: "Software" },
  { en: "Calendar App", uz: "Taqvim", category: "Software" },
  { en: "Contacts App", uz: "Kontaktlar", category: "Software" },
  { en: "Maps App", uz: "Xaritalar", category: "Software" },
  { en: "Weather App", uz: "Ob-havo", category: "Software" },
  { en: "News App", uz: "Yangiliklar", category: "Software" },
  { en: "Social Media App", uz: "Ijtimoiy tarmoq", category: "Software" },
  { en: "Messaging App", uz: "Xabar almashish", category: "Software" },
  { en: "Video Call App", uz: "Video qo'ng'iroq", category: "Software" },
  { en: "Office Suite", uz: "Ofis to'plami", category: "Software" },
  { en: "Adobe Reader", uz: "Adobe Reader", category: "Software" },
  { en: "WinRAR", uz: "WinRAR", category: "Software" },
  { en: "7-Zip", uz: "7-Zip", category: "Software" },
  { en: "TeamViewer", uz: "TeamViewer", category: "Software" },
  { en: "proprietary software", uz: "xususiy dastur", category: "Software" },
  {
    en: "open source software",
    uz: "ochiq kodli dastur",
    category: "Software",
  },
  {
    en: "software applications",
    uz: "dasturiy ta'minot ilovalari",
    category: "Software",
  },
  { en: "Application", uz: "ilova", category: "Software" },
  { en: "App", uz: "qisqa ilova", category: "Software" },
  { en: "Web-based Application", uz: "veb-ilova", category: "Software" },
  { en: "Desktop Application", uz: "ish stoli ilovasi", category: "Software" },
  { en: "Open Source", uz: "ochiq kod", category: "Software" },
  { en: "Driver", uz: "drayver", category: "Software" },
  { en: "malware", uz: "zararli dastur", category: "Software" },
  { en: "Antivirus", uz: "antivirus", category: "Software" },
  { en: "Firewall", uz: "xavfsizlik devori", category: "Software" },
  { en: "Browser", uz: "brauzer", category: "Software" },
  { en: "web browsers", uz: "veb-brauzerlar", category: "Software" },

  // ==================== NETWORK (75 ta) ====================
  { en: "Local Area Network", uz: "Mahalliy tarmoq", category: "Network" },
  { en: "Wide Area Network", uz: "Keng tarmoq", category: "Network" },
  { en: "Wireless Network", uz: "Simsiz tarmoq", category: "Network" },
  { en: "Wi-Fi", uz: "Wi-Fi", category: "Network" },
  { en: "Ethernet", uz: "Ethernet", category: "Network" },
  { en: "IP Address", uz: "IP manzil", category: "Network" },
  { en: "MAC Address", uz: "MAC manzil", category: "Network" },
  { en: "DNS", uz: "DNS", category: "Network" },
  { en: "DHCP", uz: "DHCP", category: "Network" },
  { en: "Gateway", uz: "Gateway", category: "Network" },
  { en: "Subnet Mask", uz: "Pastki tarmoq niqobi", category: "Network" },
  { en: "Protocol", uz: "Protokol", category: "Network" },
  { en: "TCP/IP", uz: "TCP/IP", category: "Network" },
  { en: "HTTP", uz: "HTTP", category: "Network" },
  { en: "HTTPS", uz: "HTTPS", category: "Network" },
  { en: "FTP", uz: "FTP", category: "Network" },
  { en: "SMTP", uz: "SMTP", category: "Network" },
  { en: "POP3", uz: "POP3", category: "Network" },
  { en: "IMAP", uz: "IMAP", category: "Network" },
  { en: "SSH", uz: "SSH", category: "Network" },
  { en: "Telnet", uz: "Telnet", category: "Network" },
  { en: "VPN", uz: "Virtual xususiy tarmoq", category: "Network" },
  { en: "LAN Cable", uz: "LAN kabel", category: "Network" },
  { en: "Fiber Optic", uz: "Optik tola", category: "Network" },
  { en: "Bandwidth", uz: "O'tkazish qobiliyati", category: "Network" },
  { en: "Latency", uz: "Kechikish", category: "Network" },
  { en: "Ping", uz: "Ping", category: "Network" },
  { en: "Packet", uz: "Paket", category: "Network" },
  { en: "Router", uz: "Router", category: "Network" },
  { en: "Switch", uz: "Switch", category: "Network" },
  { en: "Hub", uz: "Hub", category: "Network" },
  { en: "Bridge", uz: "Ko'prik", category: "Network" },
  { en: "Repeater", uz: "Repeater", category: "Network" },
  { en: "Access Point", uz: "Kirish nuqtasi", category: "Network" },
  { en: "Modem", uz: "Modem", category: "Network" },
  { en: "Firewall", uz: "Xavfsizlik devori", category: "Network" },
  { en: "Proxy Server", uz: "Proksi server", category: "Network" },
  { en: "Load Balancer", uz: "Yuk balanslagich", category: "Network" },
  { en: "Network Topology", uz: "Tarmoq topologiyasi", category: "Network" },
  { en: "Star Topology", uz: "Yulduz topologiyasi", category: "Network" },
  { en: "Bus Topology", uz: "Shina topologiyasi", category: "Network" },
  { en: "Ring Topology", uz: "Halqa topologiyasi", category: "Network" },
  { en: "Mesh Topology", uz: "To'r topologiyasi", category: "Network" },
  { en: "Peer to Peer", uz: "Tengdosh", category: "Network" },
  { en: "Client Server", uz: "Mijoz-server", category: "Network" },
  { en: "Cloud Computing", uz: "Bulutli hisoblash", category: "Network" },
  { en: "Data Center", uz: "Ma'lumotlar markazi", category: "Network" },
  { en: "Server", uz: "Server", category: "Network" },
  { en: "Client", uz: "Mijoz", category: "Network" },
  { en: "Host", uz: "Host", category: "Network" },
  { en: "Node", uz: "Tugun", category: "Network" },
  { en: "Domain", uz: "Domen", category: "Network" },
  { en: "URL", uz: "URL", category: "Network" },
  { en: "Web Server", uz: "Veb server", category: "Network" },
  { en: "Mail Server", uz: "Pochta serveri", category: "Network" },
  { en: "FTP Server", uz: "FTP server", category: "Network" },
  { en: "DNS Server", uz: "DNS server", category: "Network" },
  { en: "DHCP Server", uz: "DHCP server", category: "Network" },
  { en: "VPN Server", uz: "VPN server", category: "Network" },
  {
    en: "network infrastructure",
    uz: "tarmoq infratuzilmasi",
    category: "Network",
  },
  {
    en: "connected to the Internet",
    uz: "internetga ulangan",
    category: "Network",
  },
  {
    en: "Internet Service Provider (ISP)",
    uz: "internet xizmat provayderi (ISP)",
    category: "Network",
  },
  {
    en: "Domain Name Service (DNS)",
    uz: "domen nomlari xizmati (DNS)",
    category: "Network",
  },
  { en: "Ethernet", uz: "ethernet", category: "Network" },
  { en: "Wi-Fi", uz: "Wi-Fi", category: "Network" },
  { en: "Router", uz: "router", category: "Network" },
  { en: "Modem", uz: "modem", category: "Network" },
  {
    en: "Data plan from a cellular carrier",
    uz: "uyali aloqa operatori ma'lumot paketi",
    category: "Network",
  },
  {
    en: "Digital Subscriber Line (DSL)",
    uz: "raqamli abonent liniyasi (DSL)",
    category: "Network",
  },
  { en: "wired network", uz: "simli tarmoq", category: "Network" },
  {
    en: "HyperText Markup Language (HTML)",
    uz: "gipermatn belgilash tili (HTML)",
    category: "Network",
  },

  // ==================== SECURITY (90 ta) ====================
  { en: "Malware", uz: "Zararli dastur", category: "Security" },
  { en: "Virus", uz: "Virus", category: "Security" },
  { en: "Worm", uz: "Qurt", category: "Security" },
  { en: "Trojan", uz: "Troyan", category: "Security" },
  { en: "Ransomware", uz: "To'lov talab qiluvchi", category: "Security" },
  { en: "Spyware", uz: "Josus dastur", category: "Security" },
  { en: "Adware", uz: "Reklama dasturi", category: "Security" },
  { en: "Keylogger", uz: "Klaviatura kuzatuvchi", category: "Security" },
  { en: "Phishing", uz: "Fishing", category: "Security" },
  {
    en: "Social Engineering",
    uz: "Ijtimoiy muhandislik",
    category: "Security",
  },
  { en: "Password", uz: "Parol", category: "Security" },
  { en: "Strong Password", uz: "Kuchli parol", category: "Security" },
  {
    en: "Two-Factor Authentication",
    uz: "Ikki bosqichli autentifikatsiya",
    category: "Security",
  },
  { en: "Biometrics", uz: "Biometrik", category: "Security" },
  { en: "Firewall", uz: "Xavfsizlik devori", category: "Security" },
  { en: "Antivirus", uz: "Antivirus", category: "Security" },
  { en: "Encryption", uz: "Shifrlash", category: "Security" },
  { en: "Decryption", uz: "Shifrni ochish", category: "Security" },
  { en: "Public Key", uz: "Ochiq kalit", category: "Security" },
  { en: "Private Key", uz: "Maxfiy kalit", category: "Security" },
  { en: "Digital Signature", uz: "Raqamli imzo", category: "Security" },
  { en: "Certificate", uz: "Sertifikat", category: "Security" },
  { en: "HTTPS", uz: "HTTPS", category: "Security" },
  { en: "SSL", uz: "SSL", category: "Security" },
  { en: "TLS", uz: "TLS", category: "Security" },
  { en: "VPN", uz: "VPN", category: "Security" },
  { en: "Proxy", uz: "Proksi", category: "Security" },
  { en: "Backup", uz: "Zaxira", category: "Security" },
  { en: "Recovery", uz: "Qayta tiklash", category: "Security" },
  { en: "Patch", uz: "Yangilanish", category: "Security" },
  { en: "Update", uz: "Yangilash", category: "Security" },
  { en: "Vulnerability", uz: "Zaiflik", category: "Security" },
  { en: "Exploit", uz: "Ekspluat", category: "Security" },
  { en: "Zero-Day", uz: "Nolinchi kun", category: "Security" },
  { en: "DDoS", uz: "DDoS hujum", category: "Security" },
  { en: "Botnet", uz: "Bot tarmog'i", category: "Security" },
  { en: "Hacker", uz: "Haker", category: "Security" },
  { en: "Cracker", uz: "Kraker", category: "Security" },
  { en: "White Hat", uz: "Oq shapkali", category: "Security" },
  { en: "Black Hat", uz: "Qora shapkali", category: "Security" },
  { en: "Gray Hat", uz: "Kulrang shapkali", category: "Security" },
  { en: "Penetration Testing", uz: "Penetratsion test", category: "Security" },
  { en: "Security Audit", uz: "Xavfsizlik auditi", category: "Security" },
  { en: "Access Control", uz: "Kirish nazorati", category: "Security" },
  { en: "Authentication", uz: "Autentifikatsiya", category: "Security" },
  { en: "Authorization", uz: "Avtorizatsiya", category: "Security" },
  { en: "Accounting", uz: "Hisobga olish", category: "Security" },
  { en: "Privacy", uz: "Maxfiylik", category: "Security" },
  { en: "Confidentiality", uz: "Konfidensiallik", category: "Security" },
  { en: "Integrity", uz: "Butunlik", category: "Security" },
  { en: "Availability", uz: "Mavjudlik", category: "Security" },
  { en: "Non-Repudiation", uz: "Rad etmaslik", category: "Security" },
  { en: "GDPR", uz: "GDPR", category: "Security" },
  { en: "HIPAA", uz: "HIPAA", category: "Security" },
  { en: "PCI DSS", uz: "PCI DSS", category: "Security" },
  { en: "ISO 27001", uz: "ISO 27001", category: "Security" },
  { en: "Data Breach", uz: "Ma'lumotlar oqishi", category: "Security" },
  { en: "Identity Theft", uz: "Shaxsni o'g'irlash", category: "Security" },
  { en: "Cyber Attack", uz: "Kiber hujum", category: "Security" },
  {
    en: "personal data online",
    uz: "shaxsiy ma'lumotlar onlaynda",
    category: "Security",
  },
  {
    en: "personal security issues",
    uz: "shaxsiy xavfsizlik muammolari",
    category: "Security",
  },
  { en: "password reset", uz: "parolni tiklash", category: "Security" },
  {
    en: "digital security threat",
    uz: "raqamli xavfsizlik tahdidi",
    category: "Security",
  },
  { en: "Trojan", uz: "troyan", category: "Security" },
  { en: "Malware", uz: "zararli dastur", category: "Security" },
  { en: "Spyware", uz: "josuslik dasturi", category: "Security" },
  { en: "Ransomware", uz: "to'lov talab qiluvchi virus", category: "Security" },
  { en: "Virus", uz: "virus", category: "Security" },
  { en: "Phishing", uz: "fishing (fişing)", category: "Security" },
  { en: "cyberbullying", uz: "kiberzoravonlik", category: "Security" },
  {
    en: "navigation tracking",
    uz: "joylashuvni kuzatish",
    category: "Security",
  },
  {
    en: "Anti-tracking browser extension",
    uz: "kuzatuvga qarshi brauzer kengaytmasi",
    category: "Security",
  },
  { en: "Single Sign-On (SSO)", uz: "yagona kirish", category: "Security" },
  {
    en: "benefits of Single Sign-On",
    uz: "yagona kirish afzalliklari",
    category: "Security",
  },
  { en: "Access Token", uz: "kirish tokeni", category: "Security" },
  { en: "alias", uz: "taxallus", category: "Security" },
  { en: "actual name", uz: "haqiqiy ism", category: "Security" },
  { en: "Cookie", uz: "kukilar", category: "Security" },
  { en: "Fair Use", uz: "adolatli foydalanish", category: "Security" },
  {
    en: "private mode browsing",
    uz: "maxfiy rejimda ko'rish",
    category: "Security",
  },
  { en: "digital footprint", uz: "raqamli iz", category: "Security" },
  { en: "digital identity", uz: "raqamli shaxsiyat", category: "Security" },
  { en: "online identity", uz: "onlayn shaxsiyat", category: "Security" },

  // ==================== OS (80 ta) ====================
  { en: "Windows", uz: "Windows", category: "OS" },
  { en: "macOS", uz: "macOS", category: "OS" },
  { en: "Linux", uz: "Linux", category: "OS" },
  { en: "Android", uz: "Android", category: "OS" },
  { en: "iOS", uz: "iOS", category: "OS" },
  { en: "Kernel", uz: "Yadro", category: "OS" },
  { en: "Shell", uz: "Qobiq", category: "OS" },
  { en: "File System", uz: "Fayl tizimi", category: "OS" },
  { en: "Process", uz: "Jarayon", category: "OS" },
  { en: "Thread", uz: "Ip", category: "OS" },
  { en: "Multitasking", uz: "Ko'p vazifalilik", category: "OS" },
  { en: "Multithreading", uz: "Ko'p iplik", category: "OS" },
  { en: "Virtual Memory", uz: "Virtual xotira", category: "OS" },
  { en: "Paging", uz: "Sahifalash", category: "OS" },
  { en: "Segmentation", uz: "Segmentatsiya", category: "OS" },
  { en: "Scheduling", uz: "Rejalashtirish", category: "OS" },
  { en: "Interrupt", uz: "Uzilish", category: "OS" },
  { en: "System Call", uz: "Tizim chaqiruvi", category: "OS" },
  { en: "API", uz: "API", category: "OS" },
  { en: "Device Driver", uz: "Qurilma drayveri", category: "OS" },
  { en: "User Interface", uz: "Foydalanuvchi interfeysi", category: "OS" },
  { en: "GUI", uz: "Grafik interfeys", category: "OS" },
  { en: "CLI", uz: "Buyruq satri", category: "OS" },
  { en: "Desktop", uz: "Ish stoli", category: "OS" },
  { en: "Taskbar", uz: "Vazifalar paneli", category: "OS" },
  { en: "Start Menu", uz: "Ishga tushirish menyusi", category: "OS" },
  { en: "File Explorer", uz: "Fayl boshqaruvchisi", category: "OS" },
  { en: "Finder", uz: "Finder", category: "OS" },
  { en: "Terminal", uz: "Terminal", category: "OS" },
  { en: "Command Prompt", uz: "Buyruq satri", category: "OS" },
  { en: "PowerShell", uz: "PowerShell", category: "OS" },
  { en: "Registry", uz: "Registr", category: "OS" },
  { en: "Boot", uz: "Yuklash", category: "OS" },
  { en: "Shutdown", uz: "O'chirish", category: "OS" },
  { en: "Restart", uz: "Qayta yuklash", category: "OS" },
  { en: "Sleep", uz: "Uyqu", category: "OS" },
  { en: "Hibernate", uz: "Gibernatsiya", category: "OS" },
  { en: "Log In", uz: "Kirish", category: "OS" },
  { en: "Log Out", uz: "Chiqish", category: "OS" },
  { en: "User Account", uz: "Foydalanuvchi hisobi", category: "OS" },
  { en: "Administrator", uz: "Administrator", category: "OS" },
  { en: "Guest Account", uz: "Mehmon hisobi", category: "OS" },
  { en: "Permission", uz: "Ruxsat", category: "OS" },
  { en: "Privilege", uz: "Imtiyoz", category: "OS" },
  { en: "Root", uz: "Root", category: "OS" },
  { en: "Superuser", uz: "Superuser", category: "OS" },
  { en: "Environment Variable", uz: "Muhit o'zgaruvchisi", category: "OS" },
  { en: "Path", uz: "Yo'l", category: "OS" },
  { en: "Directory", uz: "Katalog", category: "OS" },
  { en: "Folder", uz: "Papka", category: "OS" },
  { en: "File", uz: "Fayl", category: "OS" },
  { en: "Extension", uz: "Kengaytma", category: "OS" },
  { en: "Executable", uz: "Bajariladigan", category: "OS" },
  { en: "Library", uz: "Kutubxona", category: "OS" },
  { en: "DLL", uz: "DLL", category: "OS" },
  { en: "Service", uz: "Xizmat", category: "OS" },
  { en: "Daemon", uz: "Fon jarayoni", category: "OS" },
  { en: "Process ID", uz: "Jarayon ID", category: "OS" },
  { en: "Priority", uz: "Prioritet", category: "OS" },
  { en: "Resource", uz: "Resurs", category: "OS" },
  { en: "operating systems", uz: "operatsion tizimlar", category: "OS" },
  {
    en: "mobile device operating systems",
    uz: "mobil qurilma operatsion tizimlari",
    category: "OS",
  },
  {
    en: "primary desktop computer operating systems",
    uz: "asosiy ish stoli operatsion tizimlari",
    category: "OS",
  },
  {
    en: "operating system concepts",
    uz: "operatsion tizim tushunchalari",
    category: "OS",
  },
  { en: "Taskbar", uz: "vazifalar paneli", category: "OS" },
  { en: "Boot", uz: "yuklash (boot)", category: "OS" },
  { en: "Driver", uz: "drayver", category: "OS" },
  { en: "Daemon", uz: "demon (fon jarayoni)", category: "OS" },
  { en: "Open Source", uz: "ochiq kod", category: "OS" },

  // ==================== INTERNET / WEB (70 ta) ====================
  {
    en: "World Wide Web",
    uz: "Butunjahon o'rgimchak to'ri",
    category: "Internet",
  },
  { en: "Website", uz: "Veb-sayt", category: "Internet" },
  { en: "Web Page", uz: "Veb-sahifa", category: "Internet" },
  { en: "Home Page", uz: "Bosh sahifa", category: "Internet" },
  { en: "Hyperlink", uz: "Giperhavola", category: "Internet" },
  { en: "URL", uz: "URL", category: "Internet" },
  { en: "Domain Name", uz: "Domen nomi", category: "Internet" },
  { en: "IP Address", uz: "IP manzil", category: "Internet" },
  { en: "DNS", uz: "DNS", category: "Internet" },
  { en: "Web Server", uz: "Veb server", category: "Internet" },
  { en: "Web Hosting", uz: "Veb xosting", category: "Internet" },
  { en: "Browser", uz: "Brauzer", category: "Internet" },
  { en: "Search Engine", uz: "Qidiruv tizimi", category: "Internet" },
  { en: "Google", uz: "Google", category: "Internet" },
  { en: "Bing", uz: "Bing", category: "Internet" },
  { en: "Yahoo", uz: "Yahoo", category: "Internet" },
  { en: "Bookmark", uz: "Xatcho'p", category: "Internet" },
  { en: "History", uz: "Tarix", category: "Internet" },
  { en: "Cache", uz: "Kesh", category: "Internet" },
  { en: "Cookie", uz: "Cookie", category: "Internet" },
  { en: "Session", uz: "Sessiya", category: "Internet" },
  { en: "HTML", uz: "HTML", category: "Internet" },
  { en: "CSS", uz: "CSS", category: "Internet" },
  { en: "JavaScript", uz: "JavaScript", category: "Internet" },
  { en: "HTTP", uz: "HTTP", category: "Internet" },
  { en: "HTTPS", uz: "HTTPS", category: "Internet" },
  { en: "FTP", uz: "FTP", category: "Internet" },
  { en: "Email", uz: "Elektron pochta", category: "Internet" },
  { en: "Spam", uz: "Spam", category: "Internet" },
  { en: "Attachment", uz: "Qo'shimcha", category: "Internet" },
  { en: "Download", uz: "Yuklab olish", category: "Internet" },
  { en: "Upload", uz: "Yuklash", category: "Internet" },
  { en: "Streaming", uz: "Streaming", category: "Internet" },
  { en: "Social Media", uz: "Ijtimoiy tarmoq", category: "Internet" },
  { en: "Facebook", uz: "Facebook", category: "Internet" },
  { en: "Twitter", uz: "Twitter", category: "Internet" },
  { en: "Instagram", uz: "Instagram", category: "Internet" },
  { en: "LinkedIn", uz: "LinkedIn", category: "Internet" },
  { en: "YouTube", uz: "YouTube", category: "Internet" },
  { en: "Blog", uz: "Blog", category: "Internet" },
  { en: "Forum", uz: "Forum", category: "Internet" },
  { en: "Chat", uz: "Chat", category: "Internet" },
  { en: "Instant Messaging", uz: "Tezkor xabar", category: "Internet" },
  { en: "VoIP", uz: "VoIP", category: "Internet" },
  { en: "Video Conference", uz: "Video konferensiya", category: "Internet" },
  { en: "Webinar", uz: "Vebinar", category: "Internet" },
  { en: "E-commerce", uz: "Elektron tijorat", category: "Internet" },
  { en: "Online Banking", uz: "Onlayn banking", category: "Internet" },
  { en: "Cloud", uz: "Bulut", category: "Internet" },
  { en: "Cloud Storage", uz: "Bulutli xotira", category: "Internet" },
  { en: "Google Drive", uz: "Google Drive", category: "Internet" },
  { en: "Dropbox", uz: "Dropbox", category: "Internet" },
  { en: "OneDrive", uz: "OneDrive", category: "Internet" },
  { en: "iCloud", uz: "iCloud", category: "Internet" },
  { en: "Wikipedia", uz: "Vikipediya", category: "Internet" },
  {
    en: "social media site",
    uz: "ijtimoiy tarmoq sayti",
    category: "Internet",
  },
  {
    en: "social media guidelines",
    uz: "ijtimoiy tarmoq qoidalari",
    category: "Internet",
  },
  {
    en: "browser three-dot menu",
    uz: "brauzer uch nuqta menyusi",
    category: "Internet",
  },
  { en: "web browsers", uz: "veb-brauzerlar", category: "Internet" },
  { en: "browser settings", uz: "brauzer sozlamalari", category: "Internet" },
  {
    en: "digital collaboration",
    uz: "raqamli hamkorlik",
    category: "Internet",
  },
  { en: "gaming forum", uz: "o'yin forumi", category: "Internet" },
  {
    en: "accurate and unbiased information",
    uz: "aniq va xolis ma'lumot",
    category: "Internet",
  },
  { en: "citation", uz: "iqtibos (havola)", category: "Internet" },
  { en: "copyright", uz: "mualliflik huquqi", category: "Internet" },
  {
    en: "CC-BY Creative Commons License",
    uz: "CC-BY Creative Commons litsenziyasi",
    category: "Internet",
  },
  {
    en: "retrieval statement",
    uz: "qayta tiklash bayoni (kirish sanasi va URL)",
    category: "Internet",
  },
  {
    en: "locating information in a file",
    uz: "faylda ma'lumot topish",
    category: "Internet",
  },

  // ==================== PRINTING & DOCUMENTS (30 ta) ====================
  {
    en: "double-sided printing",
    uz: "ikki tomonlama chop etish",
    category: "Printing",
  },
  { en: "Duplex printing", uz: "dupleks chop etish", category: "Printing" },
  { en: "print settings", uz: "chop etish sozlamalari", category: "Printing" },
  { en: "Slides per page", uz: "sahifada slaydlar soni", category: "Printing" },
  { en: "Pages per sheet", uz: "varaqda sahifalar soni", category: "Printing" },
  { en: "printing methods", uz: "chop etish usullari", category: "Printing" },
  {
    en: "attribution and referencing",
    uz: "manbaga ishora va havola qilish",
    category: "Printing",
  },
  {
    en: "file-naming conventions",
    uz: "fayl nomlash qoidalari",
    category: "Printing",
  },
  { en: "research paper", uz: "ilmiy maqola", category: "Printing" },
  { en: "data storage", uz: "ma'lumot saqlash", category: "Printing" },
  {
    en: "Hard Disk Drive (HDD)",
    uz: "qattiq disk (HDD)",
    category: "Printing",
  },
  {
    en: "Solid State Drive (SSD)",
    uz: "qattiq holatdagi disk (SSD)",
    category: "Printing",
  },
  { en: "USB Flash Drive", uz: "USB flesh-disk", category: "Printing" },
  { en: "auto backup", uz: "avtomatik zaxira nusxa", category: "Printing" },
  { en: "cloud service", uz: "bulutli xizmat", category: "Printing" },

  // ==================== COMMUNICATION & ETIQUETTE (35 ta) ====================
  { en: "inclusive language", uz: "inklyuziv til", category: "Communication" },
  {
    en: "digital etiquette for visual collaboration",
    uz: "video hamkorlikdagi raqamli odob",
    category: "Communication",
  },
  {
    en: "synchronous communication",
    uz: "sinxron aloqa",
    category: "Communication",
  },
  {
    en: "asynchronous communication",
    uz: "asinxron aloqa",
    category: "Communication",
  },
  {
    en: "textspeak",
    uz: "qisqartma til (matn tili)",
    category: "Communication",
  },
  {
    en: "Acceptable Use Policies",
    uz: "qabul qilinadigan foydalanish qoidalari",
    category: "Communication",
  },
  { en: "digital etiquette", uz: "raqamli odob", category: "Communication" },
  {
    en: "email response options",
    uz: "elektron pochta javob opsiyalari",
    category: "Communication",
  },
  { en: "Cc", uz: "nusxa", category: "Communication" },
  { en: "Bcc", uz: "yashirin nusxa", category: "Communication" },
  { en: "Reply All", uz: "hammaga javob", category: "Communication" },
  { en: "Forward", uz: "boshqaga yuborish", category: "Communication" },
  { en: "Reply", uz: "javob berish", category: "Communication" },
  { en: "To", uz: "kimga", category: "Communication" },
  {
    en: "digital photos",
    uz: "raqamli fotosuratlar",
    category: "Communication",
  },
  {
    en: "visual collaboration",
    uz: "vizual hamkorlik",
    category: "Communication",
  },
  { en: "derogatory memes", uz: "haqoratli memlar", category: "Communication" },
  {
    en: "Breadcrumb",
    uz: "breadcrumb (ierarxik navigatsiya yo'li)",
    category: "Communication",
  },

  // ==================== HEALTH & WELLNESS (20 ta) ====================
  {
    en: "prolonged computer and device usage",
    uz: "uzoq muddatli kompyuter va qurilma foydalanish",
    category: "Health",
  },
  {
    en: "physical health threats",
    uz: "jismoniy salomatlik xavflari",
    category: "Health",
  },
  { en: "Vision problems", uz: "ko'rish muammolari", category: "Health" },
  { en: "Muscular issues", uz: "mushak muammolari", category: "Health" },
  { en: "Social issues", uz: "ijtimoiy muammolar", category: "Health" },
  { en: "Gaming burnout", uz: "o'yin charchoqligi", category: "Health" },
];

// -------------------- KATEGORIYALARNI YANGILASH --------------------
const categories = [
  { id: "Hardware", name: "Apparat ta'minoti", icon: "💻" },
  { id: "Software", name: "Dasturiy ta'minot", icon: "🖥️" },
  { id: "Network", name: "Tarmoq", icon: "🌐" },
  { id: "Security", name: "Xavfsizlik", icon: "🔒" },
  { id: "OS", name: "Operatsion tizim", icon: "⚙️" },
  { id: "Internet", name: "Internet", icon: "🌍" },
  { id: "Printing", name: "Chop etish", icon: "🖨️" },
  { id: "Communication", name: "Muloqot", icon: "💬" },
  { id: "Health", name: "Salomatlik", icon: "❤️" },
  { id: "Kurs", name: "IC3 GS6 kursi", icon: "📒" },
];

// Har bir kategoriyadagi atamalar sonini hisoblash
categories.forEach((cat) => {
  cat.count = fullGlossary.filter((t) => t.category === cat.id).length;
});

// console.log('Jami atamalar:', fullGlossary.length);
// console.log('Kategoriyalar:', categories.map(c => `${c.name}: ${c.count} ta`));

// -------------------- GLOBAL O'ZGARUVCHILAR --------------------
let currentUser = null;
let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let score = 0;
let testFormat = "mixed";
let completedTests = 0;
let totalScore = 0;

let loginAttempts = 0;
let blockUntil = null;
let blockTimer = null;

// -------------------- DOM ELEMENTLAR --------------------
let loginSection, mainSection, testSection, resultsModal, blockModal;
let loginBtn, username, password, loginError, logoutBtn, loggedUser;
let backBtn, resetTestBtn, showResultsBtn, prevBtn, nextBtn;
let closeResultsBtn, retryBtn, homeBtn;
let categoryContainer, testCategoryTitle, testProgress;
let currentQuestionType, currentQuestionNumber, questionText, optionsContainer;
let totalQuestions,
  answeredQuestions,
  remainingQuestions,
  correctAnswers,
  wrongAnswers,
  percentageScore;
let questionNavButtons;
let resultPercentage,
  resultTotal,
  resultCorrect,
  resultWrong,
  resultUnanswered,
  resultGrade,
  resultMessage;
let completedTestsSpan, avgScoreSpan;

// -------------------- INITIALIZATION --------------------
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  loginSection = document.getElementById("loginSection");
  mainSection = document.getElementById("mainSection");
  testSection = document.getElementById("testSection");
  resultsModal = document.getElementById("resultsModal");
  blockModal = document.getElementById("blockModal");

  loginBtn = document.getElementById("loginBtn");
  username = document.getElementById("username");
  password = document.getElementById("password");
  fish = document.getElementById("fish");
  loginError = document.getElementById("loginError");
  logoutBtn = document.getElementById("logoutBtn");
  loggedUser = document.getElementById("loggedUser");

  backBtn = document.getElementById("backToCategoriesBtn");
  resetTestBtn = document.getElementById("resetTestBtn");
  showResultsBtn = document.getElementById("showResultsBtn");
  prevBtn = document.getElementById("prevQuestionBtn");
  nextBtn = document.getElementById("nextQuestionBtn");

  closeResultsBtn = document.getElementById("closeResultsModal");
  retryBtn = document.getElementById("retryTestBtn");
  homeBtn = document.getElementById("goHomeBtn");

  categoryContainer = document.getElementById("categoriesContainer");
  testCategoryTitle = document.getElementById("testCategoryTitle");
  testProgress = document.getElementById("testProgress");

  currentQuestionType = document.getElementById("currentQuestionType");
  currentQuestionNumber = document.getElementById("currentQuestionNumber");
  questionText = document.getElementById("questionText");
  optionsContainer = document.getElementById("optionsContainer");

  totalQuestions = document.getElementById("totalQuestions");
  answeredQuestions = document.getElementById("answeredQuestions");
  remainingQuestions = document.getElementById("remainingQuestions");
  correctAnswers = document.getElementById("correctAnswers");
  wrongAnswers = document.getElementById("wrongAnswers");
  percentageScore = document.getElementById("percentageScore");

  questionNavButtons = document.getElementById("questionNavButtons");

  resultPercentage = document.getElementById("resultPercentage");
  resultTotal = document.getElementById("resultTotal");
  resultCorrect = document.getElementById("resultCorrect");
  resultWrong = document.getElementById("resultWrong");
  resultUnanswered = document.getElementById("resultUnanswered");
  resultGrade = document.getElementById("resultGrade");
  resultMessage = document.getElementById("resultMessage");

  completedTestsSpan = document.getElementById("completedTests");
  avgScoreSpan = document.getElementById("avgScore");

  // Format radio
  document.querySelectorAll('input[name="testFormat"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      testFormat = this.value;
    });
  });

  // Event listeners
  loginBtn.addEventListener("click", handleLogin);
  username.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleLogin(),
  );
  password.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleLogin(),
  );

  logoutBtn.addEventListener("click", handleLogout);
  backBtn.addEventListener("click", handleBack);
  resetTestBtn.addEventListener("click", resetCurrentQuiz);
  showResultsBtn.addEventListener("click", showResults);
  prevBtn.addEventListener("click", () => navigateQuestion(-1));
  nextBtn.addEventListener("click", () => navigateQuestion(1));

  closeResultsBtn.addEventListener(
    "click",
    () => (resultsModal.style.display = "none"),
  );
  retryBtn.addEventListener("click", handleRetry);
  homeBtn.addEventListener("click", handleHome);

  window.addEventListener("click", (e) => {
    if (e.target === resultsModal) resultsModal.style.display = "none";
    if (e.target === blockModal) blockModal.style.display = "none";
  });

  // Update stats
  updateDashboard();
});

// -------------------- LOGIN HANDLER --------------------
function handleLogin() {
  const user = username.value.trim();
  const pass = password.value.trim();
  const fi = fish.value.trim();

  if (!user || !pass || !fi) {
    loginError.textContent = "Ma'lumotlarni to'lliq kiriting!";
    return;
  }

  if (blockUntil && new Date() < blockUntil) {
    const seconds = Math.ceil((blockUntil - new Date()) / 1000);
    showBlockModal(seconds);
    return;
  }

  // Bu yerda siz o'zingizning login/parol tekshirish logikangizni yozasiz
  // Masalan, ma'lum bir login va parolni tekshirish:

  const VALID_USERNAME = "demo";
  const VALID_PASSWORD = "demo123";

  if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
    currentUser = user;
    loginSection.style.display = "none";
    mainSection.style.display = "block";
    loggedUser.textContent = user;
    loginError.textContent = "";
    loginAttempts = 0;
    renderCategories();
  } else {
    loginAttempts++;
    loginError.textContent = `Noto'g'ri login yoki parol! (${loginAttempts}/3)`;

    if (loginAttempts >= 3) {
      blockUntil = new Date(Date.now() + 30000);
      showBlockModal(30);
      loginAttempts = 0;
    }
  }
}

// -------------------- LOGOUT HANDLER --------------------
function handleLogout() {
  currentUser = null;
  mainSection.style.display = "none";
  testSection.style.display = "none";
  loginSection.style.display = "flex";
  username.value = "";
  password.value = "";
}

// -------------------- BACK HANDLER --------------------
function handleBack() {
  testSection.style.display = "none";
  mainSection.style.display = "block";
  updateDashboard();
}

// -------------------- RETRY HANDLER --------------------
function handleRetry() {
  resultsModal.style.display = "none";
  resetCurrentQuiz();
}

// -------------------- HOME HANDLER --------------------
function handleHome() {
  resultsModal.style.display = "none";
  testSection.style.display = "none";
  mainSection.style.display = "block";
}

// -------------------- NAVIGATE QUESTION --------------------
function navigateQuestion(direction) {
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < currentQuestions.length) {
    currentIndex = newIndex;
    renderQuestion();
  }
}

// -------------------- BLOCK MODAL --------------------
function showBlockModal(seconds) {
  blockModal.style.display = "flex";
  const timer = document.getElementById("blockTimer");

  let remaining = seconds;
  timer.textContent = remaining;

  if (blockTimer) clearInterval(blockTimer);

  blockTimer = setInterval(() => {
    remaining--;
    timer.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(blockTimer);
      blockModal.style.display = "none";
    }
  }, 1000);
}

// -------------------- DASHBOARD --------------------
function updateDashboard() {
  document.getElementById("totalTerms").textContent = fullGlossary.length;
  document.getElementById("totalCategories").textContent = categories.length;
  completedTestsSpan.textContent = completedTests;

  const avg = completedTests > 0 ? Math.round(totalScore / completedTests) : 0;
  avgScoreSpan.textContent = avg + "%";
}

// -------------------- KATEGORIYALARNI CHIZISH --------------------
function renderCategories() {
  categoryContainer.innerHTML = "";

  categories.forEach((cat) => {
    if (cat.id != "Kurs") {
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
            <div class="category-icon">${cat.icon}</div>
            <span class="category-name">${cat.name}</span>
            <span class="category-count">${cat.count} ta atama</span>
        `;

      card.addEventListener("click", () => loadCategoryTest(cat.id));
      categoryContainer.appendChild(card);
    } else {
      const card = document.createElement("div");
      card.className = "category-card1";
      card.innerHTML = `
            <div class="category-icon">${cat.icon}</div>
            <span class="category-name">${cat.name}</span>
            <a href="https://t.me/Informatika_ic3_ser" class="tg_link">
              <button class="tg_kanal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                  />
                </svg>
                Digital Ustoz | Informatika
              </button></a
            >
        `;

      card.addEventListener("click", () => loadCategoryTest(cat.id));
      categoryContainer.appendChild(card);
    }
  });
}

// -------------------- TESTNI YUKLASH --------------------
function loadCategoryTest(categoryId) {
  if (categoryId != "Kurs") {
    currentCategory = categories.find((c) => c.id === categoryId);

    // Kategoriyadagi atamalarni olish
    const categoryTerms = fullGlossary.filter((t) => t.category === categoryId);

    // 10----------------- ta savol generatsiya qilish
    currentQuestions = generateQuestions(categoryTerms, categoryTerms.length);

    currentIndex = 0;
    userAnswers = new Array(60).fill(null);
    score = 0;

    mainSection.style.display = "none";
    testSection.style.display = "block";
    testCategoryTitle.innerHTML = `${currentCategory.icon} ${currentCategory.name}`;

    renderQuestion();
  }
}

// -------------------- SAVOLLARNI GENERATSIYA QILISH --------------------
function generateQuestions(terms, count) {
  const questions = [];
  const shuffled = [...terms].sort(() => Math.random() - 0.5);

  for (let i = 0; i < count; i++) {
    const term = shuffled[i % shuffled.length];

    if (testFormat === "mixed") {
      if (i % 2 === 0) {
        questions.push(createEn2UzQuestion(term, shuffled));
      } else {
        questions.push(createUz2EnQuestion(term, shuffled));
      }
    } else if (testFormat === "en2uz") {
      questions.push(createEn2UzQuestion(term, shuffled));
    } else {
      questions.push(createUz2EnQuestion(term, shuffled));
    }
  }

  return questions;
}

// -------------------- INGLIZCHA-O'ZBEKCHA SAVOL --------------------
function createEn2UzQuestion(term, allTerms) {
  const correct = term.uz;
  const others = allTerms
    .filter((t) => t.uz !== correct)
    .map((t) => t.uz)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  while (others.length < 3) {
    others.push("Noto'g'ri variant");
  }

  return {
    question: `"${term.en}" so'zining ma'nosi?`,
    options: [correct, ...others].sort(() => Math.random() - 0.5),
    correct: correct,
    type: "en2uz",
  };
}

// -------------------- O'ZBEKCHA-INGLIZCHA SAVOL --------------------
function createUz2EnQuestion(term, allTerms) {
  const correct = term.en;
  const others = allTerms
    .filter((t) => t.en !== correct)
    .map((t) => t.en)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  while (others.length < 3) {
    others.push("Wrong option");
  }

  return {
    question: `"${term.uz}" so'zining inglizcha tarjimasi?`,
    options: [correct, ...others].sort(() => Math.random() - 0.5),
    correct: correct,
    type: "uz2en",
  };
}

// -------------------- SAVOLNI KO'RSATISH --------------------
function renderQuestion() {
  const q = currentQuestions[currentIndex];
  const selected = userAnswers[currentIndex];

  // Savol turi
  currentQuestionType.innerHTML =
    q.type === "en2uz"
      ? "🇬🇧 Inglizcha → 🇺🇿 O'zbekcha"
      : "🇺🇿 O'zbekcha → 🇬🇧 Inglizcha";

  // Savol raqami
  currentQuestionNumber.innerHTML = `Savol ${currentIndex + 1} / ${currentQuestions.length}`;
  testProgress.innerHTML = `${currentIndex + 1} / ${currentQuestions.length}`;

  // Savol matni
  questionText.innerHTML = q.question;

  // Variantlar
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    const optionDiv = document.createElement("div");
    optionDiv.className = `option-item ${selected === opt ? "selected" : ""} ${selected ? "disabled" : ""}`;

    if (selected) {
      if (opt === q.correct) optionDiv.classList.add("correct");
      if (selected === opt && opt !== q.correct)
        optionDiv.classList.add("wrong");
    }

    optionDiv.innerHTML = `<span class="option-prefix">${letter}</span><span>${opt}</span>`;

    if (!selected) {
      optionDiv.addEventListener("click", () => selectAnswer(opt));
    }

    optionsContainer.appendChild(optionDiv);
  });

  // Navigatsiya tugmalari
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentQuestions.length - 1;

  // Natijalar tugmasi
  const answered = userAnswers.filter((a) => a !== null).length;
  showResultsBtn.style.display =
    answered === currentQuestions.length ? "block" : "none";

  updateStats();
  renderQuestionNav();
}

// -------------------- JAVOB TANLASH --------------------
function selectAnswer(answer) {
  userAnswers[currentIndex] = answer;

  if (answer === currentQuestions[currentIndex].correct) {
    score++;
  }

  renderQuestion();
}

// -------------------- STATISTIKANI YANGILASH --------------------
function updateStats() {
  const total = currentQuestions.length;
  const answered = userAnswers.filter((a) => a !== null).length;
  const wrong = answered - score;

  totalQuestions.textContent = total;
  answeredQuestions.textContent = answered;
  remainingQuestions.textContent = total - answered;
  correctAnswers.textContent = score;
  wrongAnswers.textContent = wrong;

  const percent = answered > 0 ? Math.round((score / answered) * 100) : 0;
  percentageScore.textContent = percent + "%";
}

// -------------------- SAVOLLAR NAVIGATSIYASI --------------------
function renderQuestionNav() {
  questionNavButtons.innerHTML = "";

  for (let i = 0; i < currentQuestions.length; i++) {
    const btn = document.createElement("button");
    btn.className = `q-nav-btn ${userAnswers[i] ? "answered" : ""} ${i === currentIndex ? "current" : ""}`;
    btn.textContent = i + 1;

    btn.addEventListener("click", () => {
      currentIndex = i;
      renderQuestion();
    });

    questionNavButtons.appendChild(btn);
  }
}

// -------------------- NATIJALARNI KO'RSATISH --------------------
function showResults() {
  const total = currentQuestions.length;
  const answered = userAnswers.filter((a) => a !== null).length;

  if (answered < total) {
    alert("Iltimos, avval barcha savollarga javob bering!");
    return;
  }

  const percent = Math.round((score / total) * 100);

  let grade = "";
  if (percent >= 90) grade = "⭐ Ajoyib";
  else if (percent >= 80) grade = "👍 Yaxshi";
  else if (percent >= 70) grade = "👌 Qoniqarli";
  else grade = "📚 O'rganish kerak";

  resultPercentage.textContent = percent + "%";
  resultTotal.textContent = total;
  resultCorrect.textContent = score;
  resultWrong.textContent = total - score;
  resultUnanswered.textContent = total - answered;
  resultGrade.textContent = grade;

  if (percent >= 90) {
    resultMessage.innerHTML = "Tabriklaymiz! Siz ajoyib natija ko'rsatdingiz!";
  } else if (percent >= 70) {
    resultMessage.innerHTML = "Yaxshi natija! Bir oz ko'proq mashq qiling.";
  } else {
    resultMessage.innerHTML = "Natija past. Atamalarni qayta o'rganib chiqing.";
  }

  // Statistikani yangilash
  completedTests++;
  totalScore += percent;
  updateDashboard();

  resultsModal.style.display = "flex";
}

// -------------------- TESTNI QAYTA BOSHLASH --------------------
function resetCurrentQuiz() {
  if (!currentCategory) return;

  const terms = fullGlossary.filter((t) => t.category === currentCategory.id);
  currentQuestions = generateQuestions(terms, terms.length);
  currentIndex = 0;
  userAnswers = new Array(10).fill(null);
  score = 0;

  renderQuestion();
}
