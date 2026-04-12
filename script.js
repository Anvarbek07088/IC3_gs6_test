// -------------------- 450+ TA REAL IC3 GS6 ATAMALARI --------------------
const  fullGlossary = [
  // ==================== ASOSIY ATAMALAR ====================
  { en: "antivirus software", uz: "antivirus dastur", category: "IC3 Security" },
  { en: "backup", uz: "zaxira nusxa", category: "IC3 Security" },
  { en: "cloud storage", uz: "bulutli xotira", category: "IC3 Internet" },
  { en: "external hard drive", uz: "tashqi qattiq disk", category: "IC3 Hardware" },
  { en: "password", uz: "parol", category: "IC3 Security" },
  { en: "phishing", uz: "fishing (fişing)", category: "IC3 Security" },
  { en: "spyware", uz: "josuslik dasturi", category: "IC3 Security" },
  { en: "trojan", uz: "troyan", category: "IC3 Security" },
  { en: "virus", uz: "virus", category: "IC3 Security" },
  { en: "worm", uz: "qurt", category: "IC3 Security" },
  { en: "ransomware", uz: "to‘lov talab qiluvchi virus", category: "IC3 Security" },
  { en: "malware", uz: "zararli dastur", category: "IC3 Security" },
  { en: "firewall", uz: "xavfsizlik devori", category: "IC3 Security" },
  { en: "encryption", uz: "shifrlash", category: "IC3 Security" },
  { en: "decryption", uz: "shifrni ochish", category: "IC3 Security" },
  { en: "public key", uz: "ochiq kalit", category: "IC3 Security" },
  { en: "private key", uz: "maxfiy kalit", category: "IC3 Security" },
  { en: "digital signature", uz: "raqamli imzo", category: "IC3 Security" },
  { en: "digital certificate", uz: "raqamli sertifikat", category: "IC3 Security" },
  { en: "two-factor authentication", uz: "ikki bosqichli autentifikatsiya", category: "IC3 Security" },
  { en: "multi-factor authentication", uz: "ko‘p bosqichli autentifikatsiya", category: "IC3 Security" },
  { en: "biometrics", uz: "biometrik", category: "IC3 Security" },
  { en: "password manager", uz: "parol boshqaruvchi", category: "IC3 Security" },
  { en: "strong password", uz: "kuchli parol", category: "IC3 Security" },
  { en: "weak password", uz: "zaif parol", category: "IC3 Security" },

  // ==================== INTERNET & BRAUZER ====================
  { en: "web browser", uz: "veb-brauzer", category: "IC3 Internet" },
  { en: "browser settings", uz: "brauzer sozlamalari", category: "IC3 Internet" },
  { en: "private browsing", uz: "maxfiy rejim", category: "IC3 Internet" },
  { en: "incognito mode", uz: "inkognito rejim", category: "IC3 Internet" },
  { en: "cookie", uz: "kuki", category: "IC3 Internet" },
  { en: "cache", uz: "kesh", category: "IC3 Internet" },
  { en: "browser history", uz: "brauzer tarixi", category: "IC3 Internet" },
  { en: "search engine", uz: "qidiruv tizimi", category: "IC3 Internet" },
  { en: "URL", uz: "veb-manzil", category: "IC3 Internet" },
  { en: "hyperlink", uz: "giperhavola", category: "IC3 Internet" },
  { en: "domain name", uz: "domen nomi", category: "IC3 Internet" },
  { en: "IP address", uz: "IP manzil", category: "IC3 Internet" },
  { en: "DNS", uz: "domen nomlari tizimi", category: "IC3 Internet" },
  { en: "HTTP", uz: "HTTP protokoli", category: "IC3 Internet" },
  { en: "HTTPS", uz: "xavfsiz HTTP", category: "IC3 Internet" },
  { en: "SSL", uz: "xavfsiz soket qatlami", category: "IC3 Security" },
  { en: "TLS", uz: "transport qatlami xavfsizligi", category: "IC3 Security" },
  { en: "VPN", uz: "virtual xususiy tarmoq", category: "IC3 Security" },
  { en: "proxy server", uz: "proksi server", category: "IC3 Internet" },
  { en: "ISP", uz: "internet provayderi", category: "IC3 Internet" },
  { en: "bandwidth", uz: "o‘tkazish qobiliyati", category: "IC3 Network" },
  { en: "latency", uz: "kechikish", category: "IC3 Network" },
  { en: "packet", uz: "ma'lumot paketi", category: "IC3 Network" },
  { en: "ping", uz: "ping", category: "IC3 Network" },
  { en: "DSL", uz: "raqamli abonent liniyasi", category: "IC3 Network" },
  { en: "Ethernet", uz: "Ethernet", category: "IC3 Network" },
  { en: "Wi-Fi", uz: "Wi-Fi", category: "IC3 Network" },
  { en: "router", uz: "router", category: "IC3 Network" },
  { en: "modem", uz: "modem", category: "IC3 Network" },
  { en: "LAN", uz: "mahalliy tarmoq", category: "IC3 Network" },
  { en: "WAN", uz: "keng tarmoq", category: "IC3 Network" },

  // ==================== ONLAYN XAVFSIZLIK & MAXFIYLIK ====================
  { en: "digital privacy", uz: "raqamli maxfiylik", category: "IC3 Security" },
  { en: "digital footprint", uz: "raqamli iz", category: "IC3 Security" },
  { en: "digital identity", uz: "raqamli shaxsiyat", category: "IC3 Security" },
  { en: "online identity", uz: "onlayn shaxsiyat", category: "IC3 Security" },
  { en: "online predator", uz: "onlayn yirtqich", category: "IC3 Security" },
  { en: "cyberbullying", uz: "kiberzoravonlik", category: "IC3 Security" },
  { en: "cyber attack", uz: "kiber hujum", category: "IC3 Security" },
  { en: "data breach", uz: "ma'lumotlar oqishi", category: "IC3 Security" },
  { en: "identity theft", uz: "shaxsni o‘g‘irlash", category: "IC3 Security" },
  { en: "catfishing", uz: "soxta shaxs yaratish", category: "IC3 Security" },
  { en: "trolling", uz: "trolling", category: "IC3 Communication" },
  { en: "FOMO", uz: "biror narsadan qolish qo‘rquvi", category: "IC3 Health" },
  { en: "social engineering", uz: "ijtimoiy muhandislik", category: "IC3 Security" },
  { en: "keylogger", uz: "klaviatura kuzatuvchi", category: "IC3 Security" },
  { en: "adware", uz: "reklama dasturi", category: "IC3 Security" },
  { en: "DDoS", uz: "tarqatilgan xizmat ko‘rsatishni rad etish hujumi", category: "IC3 Security" },
  { en: "botnet", uz: "bot tarmog‘i", category: "IC3 Security" },
  { en: "zero-day", uz: "nolinchi kun zaifligi", category: "IC3 Security" },
  { en: "vulnerability", uz: "zaiflik", category: "IC3 Security" },
  { en: "exploit", uz: "ekspluat", category: "IC3 Security" },
  { en: "patch", uz: "yangilanish", category: "IC3 Security" },
  { en: "update", uz: "yangilash", category: "IC3 Security" },
  { en: "Anti-tracking extension", uz: "kuzatuvga qarshi kengaytma", category: "IC3 Security" },
  { en: "GPS tracking", uz: "GPS kuzatuvi", category: "IC3 Security" },
  { en: "location tracking", uz: "joylashuvni kuzatish", category: "IC3 Security" },
  { en: "navigation tracking", uz: "navigatsiyani kuzatish", category: "IC3 Security" },

  // ==================== APPARATURA (HARDWARE) ====================
  { en: "CPU", uz: "markaziy protsessor", category: "IC3 Hardware" },
  { en: "RAM", uz: "tezkor xotira", category: "IC3 Hardware" },
  { en: "ROM", uz: "doimiy xotira", category: "IC3 Hardware" },
  { en: "hard disk drive", uz: "qattiq disk", category: "IC3 Hardware" },
  { en: "solid state drive", uz: "tezkor xotirali disk", category: "IC3 Hardware" },
  { en: "motherboard", uz: "ona plata", category: "IC3 Hardware" },
  { en: "graphics card", uz: "video karta", category: "IC3 Hardware" },
  { en: "GPU", uz: "grafik protsessor", category: "IC3 Hardware" },
  { en: "sound card", uz: "ovoz kartasi", category: "IC3 Hardware" },
  { en: "network card", uz: "tarmoq kartasi", category: "IC3 Hardware" },
  { en: "USB flash drive", uz: "fleshka", category: "IC3 Hardware" },
  { en: "USB", uz: "universal ketma-ket shina", category: "IC3 Hardware" },
  { en: "USB-C", uz: "USB-C", category: "IC3 Hardware" },
  { en: "Micro USB", uz: "Micro USB", category: "IC3 Hardware" },
  { en: "Lightning connector", uz: "Lightning ulagich", category: "IC3 Hardware" },
  { en: "HDMI", uz: "HDMI", category: "IC3 Hardware" },
  { en: "VGA", uz: "VGA", category: "IC3 Hardware" },
  { en: "DisplayPort", uz: "DisplayPort", category: "IC3 Hardware" },
  { en: "Thunderbolt", uz: "Thunderbolt", category: "IC3 Hardware" },
  { en: "monitor", uz: "monitor", category: "IC3 Hardware" },
  { en: "keyboard", uz: "klaviatura", category: "IC3 Hardware" },
  { en: "mouse", uz: "sichqoncha", category: "IC3 Hardware" },
  { en: "printer", uz: "printer", category: "IC3 Hardware" },
  { en: "scanner", uz: "skaner", category: "IC3 Hardware" },
  { en: "speaker", uz: "dinamik", category: "IC3 Hardware" },
  { en: "microphone", uz: "mikrofon", category: "IC3 Hardware" },
  { en: "webcam", uz: "veb-kamera", category: "IC3 Hardware" },
  { en: "headphones", uz: "quloqchin", category: "IC3 Hardware" },
  { en: "touch screen", uz: "sensorli ekran", category: "IC3 Hardware" },
  { en: "stylus", uz: "stilus", category: "IC3 Hardware" },
  { en: "trackpad", uz: "sensorli panel", category: "IC3 Hardware" },
  { en: "cooling fan", uz: "sovutish ventilyatori", category: "IC3 Hardware" },
  { en: "BIOS", uz: "BIOS", category: "IC3 Hardware" },
  { en: "CMOS battery", uz: "CMOS batareyasi", category: "IC3 Hardware" },

  // ==================== OPERATSION TIZIM ====================
  { en: "operating system", uz: "operatsion tizim", category: "IC3 OS" },
  { en: "Windows", uz: "Windows", category: "IC3 OS" },
  { en: "macOS", uz: "macOS", category: "IC3 OS" },
  { en: "Linux", uz: "Linux", category: "IC3 OS" },
  { en: "Android", uz: "Android", category: "IC3 OS" },
  { en: "iOS", uz: "iOS", category: "IC3 OS" },
  { en: "kernel", uz: "yadro", category: "IC3 OS" },
  { en: "shell", uz: "qobiq", category: "IC3 OS" },
  { en: "file system", uz: "fayl tizimi", category: "IC3 OS" },
  { en: "process", uz: "jarayon", category: "IC3 OS" },
  { en: "thread", uz: "ip", category: "IC3 OS" },
  { en: "multitasking", uz: "ko‘p vazifalilik", category: "IC3 OS" },
  { en: "multithreading", uz: "ko‘p iplik", category: "IC3 OS" },
  { en: "virtual memory", uz: "virtual xotira", category: "IC3 OS" },
  { en: "taskbar", uz: "vazifalar paneli", category: "IC3 OS" },
  { en: "start menu", uz: "ishga tushirish menyusi", category: "IC3 OS" },
  { en: "file explorer", uz: "fayl boshqaruvchisi", category: "IC3 OS" },
  { en: "command prompt", uz: "buyruq satri", category: "IC3 OS" },
  { en: "PowerShell", uz: "PowerShell", category: "IC3 OS" },
  { en: "registry", uz: "registr", category: "IC3 OS" },
  { en: "boot", uz: "yuklash", category: "IC3 OS" },
  { en: "shutdown", uz: "o‘chirish", category: "IC3 OS" },
  { en: "restart", uz: "qayta yuklash", category: "IC3 OS" },
  { en: "sleep", uz: "uyqu", category: "IC3 OS" },
  { en: "hibernate", uz: "gibernatsiya", category: "IC3 OS" },
  { en: "login", uz: "kirish", category: "IC3 OS" },
  { en: "logout", uz: "chiqish", category: "IC3 OS" },
  { en: "user account", uz: "foydalanuvchi hisobi", category: "IC3 OS" },
  { en: "administrator", uz: "administrator", category: "IC3 OS" },
  { en: "guest account", uz: "mehmon hisobi", category: "IC3 OS" },
  { en: "permission", uz: "ruxsat", category: "IC3 OS" },
  { en: "privilege", uz: "imtiyoz", category: "IC3 OS" },
  { en: "root", uz: "root", category: "IC3 OS" },
  { en: "superuser", uz: "superuser", category: "IC3 OS" },
  { en: "driver", uz: "drayver", category: "IC3 OS" },
  { en: "daemon", uz: "fon jarayoni", category: "IC3 OS" },

  // ==================== DASTURIY TA'MINOT ====================
  { en: "application software", uz: "amaliy dastur", category: "IC3 Software" },
  { en: "system software", uz: "tizim dasturi", category: "IC3 Software" },
  { en: "web application", uz: "veb-ilova", category: "IC3 Software" },
  { en: "desktop application", uz: "ish stoli ilovasi", category: "IC3 Software" },
  { en: "mobile app", uz: "mobil ilova", category: "IC3 Software" },
  { en: "open source", uz: "ochiq kod", category: "IC3 Software" },
  { en: "proprietary software", uz: "xususiy dastur", category: "IC3 Software" },
  { en: "freeware", uz: "bepul dastur", category: "IC3 Software" },
  { en: "shareware", uz: "sinov dasturi", category: "IC3 Software" },
  { en: "spreadsheet", uz: "jadval muharriri", category: "IC3 Software" },
  { en: "word processor", uz: "matn muharriri", category: "IC3 Software" },
  { en: "presentation software", uz: "taqdimot dasturi", category: "IC3 Software" },
  { en: "database", uz: "ma'lumotlar bazasi", category: "IC3 Software" },
  { en: "PDF", uz: "ko‘chma hujjat formati", category: "IC3 Software" },
  { en: "file extension", uz: "fayl kengaytmasi", category: "IC3 Software" },
  { en: ".exe", uz: "bajariladigan fayl", category: "IC3 Software" },
  { en: ".pdf", uz: "PDF fayl", category: "IC3 Software" },
  { en: ".docx", uz: "Word hujjati", category: "IC3 Software" },
  { en: ".xlsx", uz: "Excel jadvali", category: "IC3 Software" },
  { en: ".pptx", uz: "PowerPoint taqdimoti", category: "IC3 Software" },
  { en: ".txt", uz: "matn fayli", category: "IC3 Software" },
  { en: ".rtf", uz: "boy matn formati", category: "IC3 Software" },
  { en: ".jpg", uz: "rasm fayli", category: "IC3 Software" },
  { en: ".png", uz: "rasm fayli (shaffof fon)", category: "IC3 Software" },
  { en: ".gif", uz: "animatsion rasm", category: "IC3 Software" },
  { en: ".mp3", uz: "audio fayl", category: "IC3 Software" },
  { en: ".mp4", uz: "video fayl", category: "IC3 Software" },
  { en: ".zip", uz: "siqilgan fayl", category: "IC3 Software" },
  { en: "compression", uz: "siqish", category: "IC3 Software" },
  { en: "zipping", uz: "zip bilan siqish", category: "IC3 Software" },

  // ==================== HAMKORLIK & ALOQA ====================
  { en: "digital collaboration", uz: "raqamli hamkorlik", category: "IC3 Communication" },
  { en: "synchronous communication", uz: "sinxron aloqa", category: "IC3 Communication" },
  { en: "asynchronous communication", uz: "asinxron aloqa", category: "IC3 Communication" },
  { en: "video conferencing", uz: "video konferensiya", category: "IC3 Communication" },
  { en: "webinar", uz: "vebinar", category: "IC3 Communication" },
  { en: "instant messaging", uz: "tezkor xabar", category: "IC3 Communication" },
  { en: "text messaging", uz: "matnli xabar", category: "IC3 Communication" },
  { en: "email", uz: "elektron pochta", category: "IC3 Communication" },
  { en: "live chat", uz: "jonli chat", category: "IC3 Communication" },
  { en: "online forum", uz: "onlayn forum", category: "IC3 Communication" },
  { en: "social media", uz: "ijtimoiy tarmoq", category: "IC3 Communication" },
  { en: "digital etiquette", uz: "raqamli odob", category: "IC3 Communication" },
  { en: "netiquette", uz: "tarmoq odobi", category: "IC3 Communication" },
  { en: "Acceptable Use Policy", uz: "qabul qilinadigan foydalanish siyosati", category: "IC3 Communication" },
  { en: "inclusive language", uz: "inklyuziv til", category: "IC3 Communication" },
  { en: "textspeak", uz: "qisqartma til", category: "IC3 Communication" },
  { en: "emoji", uz: "emoji", category: "IC3 Communication" },
  { en: "Cc", uz: "nusxa", category: "IC3 Communication" },
  { en: "Bcc", uz: "yashirin nusxa", category: "IC3 Communication" },
  { en: "Reply All", uz: "hammaga javob", category: "IC3 Communication" },
  { en: "Forward", uz: "boshqaga yuborish", category: "IC3 Communication" },
  { en: "Reply", uz: "javob berish", category: "IC3 Communication" },
  { en: "subject line", uz: "mavzu qatori", category: "IC3 Communication" },
  { en: "spam", uz: "spam", category: "IC3 Communication" },

  // ==================== HAMKORLIKDA ISHLASH ====================
  { en: "coauthoring", uz: "birgalikda mualliflik", category: "IC3 Collaboration" },
  { en: "peer review", uz: "tengdosh tahriri", category: "IC3 Collaboration" },
  { en: "track changes", uz: "o‘zgarishlarni kuzatish", category: "IC3 Collaboration" },
  { en: "comment", uz: "izoh", category: "IC3 Collaboration" },
  { en: "feedback", uz: "fikr-mulohaza", category: "IC3 Collaboration" },
  { en: "constructive feedback", uz: "konstruktiv fikr", category: "IC3 Collaboration" },
  { en: "Google Docs", uz: "Google Docs", category: "IC3 Collaboration" },
  { en: "cloud sharing", uz: "bulutli almashish", category: "IC3 Collaboration" },
  { en: "shared document", uz: "umumiy hujjat", category: "IC3 Collaboration" },
  { en: "version control", uz: "versiya nazorati", category: "IC3 Collaboration" },
  { en: "file versioning", uz: "fayl versiyalari", category: "IC3 Collaboration" },
  { en: "macro", uz: "makros", category: "IC3 Collaboration" },

  // ==================== MUALLIFLIK HUQUQI & IQTIBOS ====================
  { en: "copyright", uz: "mualliflik huquqi", category: "IC3 Legal" },
  { en: "Creative Commons", uz: "Creative Commons litsenziyasi", category: "IC3 Legal" },
  { en: "CC BY", uz: "Attribution litsenziyasi", category: "IC3 Legal" },
  { en: "CC BY-SA", uz: "Attribution-ShareAlike", category: "IC3 Legal" },
  { en: "CC BY-ND", uz: "Attribution-NoDerivs", category: "IC3 Legal" },
  { en: "CC BY-NC", uz: "Attribution-NonCommercial", category: "IC3 Legal" },
  { en: "public domain", uz: "jamoat mulki", category: "IC3 Legal" },
  { en: "citation", uz: "iqtibos", category: "IC3 Legal" },
  { en: "attribution", uz: "manbaga ishora", category: "IC3 Legal" },
  { en: "referencing", uz: "havola qilish", category: "IC3 Legal" },
  { en: "bibliography", uz: "bibliografiya", category: "IC3 Legal" },
  { en: "plagiarism", uz: "plagiat", category: "IC3 Legal" },
  { en: "fair use", uz: "adolatli foydalanish", category: "IC3 Legal" },
  { en: "retrieval statement", uz: "qayta tiklash bayoni", category: "IC3 Legal" },

  // ==================== QIDIRUV VA MA'LUMOT ====================
  { en: "search query", uz: "qidiruv so‘rovi", category: "IC3 Research" },
  { en: "keyword", uz: "kalit so‘z", category: "IC3 Research" },
  { en: "search filter", uz: "qidiruv filtri", category: "IC3 Research" },
  { en: "Boolean search", uz: "Boolean qidiruvi", category: "IC3 Research" },
  { en: "AND operator", uz: "VA operatori", category: "IC3 Research" },
  { en: "OR operator", uz: "YOKI operatori", category: "IC3 Research" },
  { en: "NOT operator", uz: "EMAS operatori", category: "IC3 Research" },
  { en: "quotation marks", uz: "qo‘shtirnoq", category: "IC3 Research" },
  { en: "credible source", uz: "ishonchli manba", category: "IC3 Research" },
  { en: "bias", uz: "tarafkashlik", category: "IC3 Research" },
  { en: "unbiased information", uz: "xolis ma'lumot", category: "IC3 Research" },
  { en: "reliability", uz: "ishonchlilik", category: "IC3 Research" },
  { en: "accuracy", uz: "aniqlik", category: "IC3 Research" },
  { en: "relevance", uz: "dolzarblik", category: "IC3 Research" },
  { en: "publication date", uz: "nashr sanasi", category: "IC3 Research" },
  { en: ".gov domain", uz: "hukumat domeni", category: "IC3 Research" },
  { en: ".edu domain", uz: "ta'lim domeni", category: "IC3 Research" },
  { en: "Find feature", uz: "Topish funksiyasi", category: "IC3 Research" },

  // ==================== BOSIB CHIQARISH & HUJJATLAR ====================
  { en: "printing", uz: "chop etish", category: "IC3 Printing" },
  { en: "duplex printing", uz: "ikki tomonlama chop etish", category: "IC3 Printing" },
  { en: "double-sided printing", uz: "ikki tomonlama bosish", category: "IC3 Printing" },
  { en: "print settings", uz: "chop sozlamalari", category: "IC3 Printing" },
  { en: "pages per sheet", uz: "varaqda sahifalar", category: "IC3 Printing" },
  { en: "slides per page", uz: "sahifada slaydlar", category: "IC3 Printing" },
  { en: "print queue", uz: "chop navbati", category: "IC3 Printing" },
  { en: "inkjet printer", uz: "siyohli printer", category: "IC3 Printing" },
  { en: "laser printer", uz: "lazer printer", category: "IC3 Printing" },
  { en: "header", uz: "sarlavha", category: "IC3 Printing" },
  { en: "footer", uz: "taglavha", category: "IC3 Printing" },
  { en: "page number", uz: "sahifa raqami", category: "IC3 Printing" },
  { en: "margin", uz: "chegara", category: "IC3 Printing" },
  { en: "orientation", uz: "yo‘nalish", category: "IC3 Printing" },
  { en: "portrait", uz: "portret", category: "IC3 Printing" },
  { en: "landscape", uz: "peyzaj", category: "IC3 Printing" },

  // ==================== SALOMATLIK ====================
  { en: "eye strain", uz: "ko‘z zo‘riqishi", category: "IC3 Health" },
  { en: "repetitive strain injury", uz: "takroriy zo‘riqish shikasti", category: "IC3 Health" },
  { en: "RSI", uz: "RSI", category: "IC3 Health" },
  { en: "carpal tunnel", uz: "karpal tunnel", category: "IC3 Health" },
  { en: "ergonomic keyboard", uz: "ergonomik klaviatura", category: "IC3 Health" },
  { en: "back pain", uz: "bel og‘rig‘i", category: "IC3 Health" },
  { en: "neck discomfort", uz: "bo‘yin noqulayligi", category: "IC3 Health" },
  { en: "headache", uz: "bosh og‘rig‘i", category: "IC3 Health" },
  { en: "prolonged computer use", uz: "uzoq kompyuter ishlatish", category: "IC3 Health" },
  { en: "gaming burnout", uz: "o‘yin charchog‘i", category: "IC3 Health" },

  // ==================== BULUTLI TEXNOLOGIYALAR ====================
  { en: "cloud computing", uz: "bulutli hisoblash", category: "IC3 Cloud" },
  { en: "cloud service", uz: "bulutli xizmat", category: "IC3 Cloud" },
  { en: "Google Drive", uz: "Google Drive", category: "IC3 Cloud" },
  { en: "OneDrive", uz: "OneDrive", category: "IC3 Cloud" },
  { en: "Dropbox", uz: "Dropbox", category: "IC3 Cloud" },
  { en: "iCloud", uz: "iCloud", category: "IC3 Cloud" },
  { en: "auto backup", uz: "avtomatik zaxira", category: "IC3 Cloud" },
  { en: "file sync", uz: "fayl sinxronizatsiyasi", category: "IC3 Cloud" },

  // ==================== SUN'IY INTELLEKT (AI) ====================
  { en: "artificial intelligence", uz: "sun'iy intellekt", category: "IC3 AI" },
  { en: "AI", uz: "SI", category: "IC3 AI" },
  { en: "machine learning", uz: "mashinaviy o‘rganish", category: "IC3 AI" },
  { en: "natural language processing", uz: "tabiiy tilni qayta ishlash", category: "IC3 AI" },
  { en: "neural network", uz: "neyron tarmoq", category: "IC3 AI" },
  { en: "deep learning", uz: "chuqur o‘rganish", category: "IC3 AI" },
  { en: "robotics", uz: "robototexnika", category: "IC3 AI" },
  { en: "deepfake", uz: "chuqur soxta", category: "IC3 AI" },
  { en: "AI bias", uz: "sun'iy intellekt tarafkashligi", category: "IC3 AI" },
  { en: "generative AI", uz: "generativ sun'iy intellekt", category: "IC3 AI" },

  // ==================== BOSHQALAR ====================
  { en: "file naming convention", uz: "fayl nomlash qoidalari", category: "IC3 General" },
  { en: "digital wallet", uz: "raqamli hamyon", category: "IC3 General" },
  { en: "Google Pay", uz: "Google Pay", category: "IC3 General" },
  { en: "in-app purchase", uz: "ilova ichidagi xarid", category: "IC3 General" },
  { en: "digital payment", uz: "raqamli to‘lov", category: "IC3 General" },
  { en: "Single Sign-On", uz: "yagona kirish", category: "IC3 Security" },
  { en: "SSO", uz: "yagona kirish tizimi", category: "IC3 Security" },
  { en: "access token", uz: "kirish tokeni", category: "IC3 Security" },
  { en: "alias", uz: "taxallus", category: "IC3 General" },
  { en: "breadcrumb", uz: "navigatsiya yo‘li", category: "IC3 General" },



  // ==================== QO‘SHIMCHA 100 TA ATAMA (IC3 GS6) ====================

  // ==================== XAVFSIZLIK & MAXFIYLIK (20 ta) ====================
  { en: "account takeover", uz: "hisobni egallab olish", category: "IC3 Security" },
  { en: "anonymous browsing", uz: "anonim ko‘rish", category: "IC3 Security" },
  { en: "anti-spyware", uz: "anti-josuslik dasturi", category: "IC3 Security" },
  { en: "brute force attack", uz: "qo‘pol kuch hujumi", category: "IC3 Security" },
  { en: "credential stuffing", uz: "hisob ma'lumotlarini to‘ldirish", category: "IC3 Security" },
  { en: "data leakage", uz: "ma'lumotlar sizib chiqishi", category: "IC3 Security" },
  { en: "digital certificate", uz: "raqamli sertifikat", category: "IC3 Security" },
  { en: "end-to-end encryption", uz: "uchdan uchga shifrlash", category: "IC3 Security" },
  { en: "ethical hacking", uz: "axloqiy hakerlik", category: "IC3 Security" },
  { en: "identity spoofing", uz: "shaxsni aldash", category: "IC3 Security" },
  { en: "man-in-the-middle attack", uz: "o‘rtadagi odam hujumi", category: "IC3 Security" },
  { en: "one-time password", uz: "bir martalik parol", category: "IC3 Security" },
  { en: "PIN code", uz: "shaxsiy identifikatsiya raqami", category: "IC3 Security" },
  { en: "privacy policy", uz: "maxfiylik siyosati", category: "IC3 Security" },
  { en: "rootkit", uz: "rootkit (yashirin zararli dastur)", category: "IC3 Security" },
  { en: "security patch", uz: "xavfsizlik yangilanishi", category: "IC3 Security" },
  { en: "session hijacking", uz: "sessiyani o‘g‘irlash", category: "IC3 Security" },
  { en: "shoulder surfing", uz: "yelkadan kuzatish", category: "IC3 Security" },
  { en: "two-step verification", uz: "ikki bosqichli tekshiruv", category: "IC3 Security" },
  { en: "zero-click attack", uz: "nolinchi bosish hujumi", category: "IC3 Security" },

  // ==================== ONLAYN XULQ & ODOB (10 ta) ====================
  { en: "cyberstalking", uz: "kiberta'qib", category: "IC3 Communication" },
  { en: "doxxing", uz: "shaxsiy ma'lumotlarni oshkor qilish", category: "IC3 Communication" },
  { en: "flaming", uz: "dushmanona onlayn xabar", category: "IC3 Communication" },
  { en: "grooming", uz: "bolalarni onlayn aldash", category: "IC3 Communication" },
  { en: "hate speech", uz: "nafrat so‘zlari", category: "IC3 Communication" },
  { en: "online harassment", uz: "onlayn ta'qib", category: "IC3 Communication" },
  { en: "sexting", uz: "jinsiy mazmundagi xabar", category: "IC3 Communication" },
  { en: "sharenting", uz: "ota-onalarning bola haqida haddan tashqari post qilishi", category: "IC3 Communication" },
  { en: "subtrolling", uz: "yashirin trolling", category: "IC3 Communication" },
  { en: "viral content", uz: "virusli kontent", category: "IC3 Communication" },

  // ==================== APPARATURA (10 ta) ====================
  { en: "Bluetooth", uz: "Bluetooth", category: "IC3 Hardware" },
  { en: "docking station", uz: "dok stansiyasi", category: "IC3 Hardware" },
  { en: "dongle", uz: "dongle", category: "IC3 Hardware" },
  { en: "graphics tablet", uz: "grafik planshet", category: "IC3 Hardware" },
  { en: "KVM switch", uz: "KVM kaliti", category: "IC3 Hardware" },
  { en: "NVMe drive", uz: "NVMe disk", category: "IC3 Hardware" },
  { en: "optical drive", uz: "optik disk yuritgich", category: "IC3 Hardware" },
  { en: "power bank", uz: "quvvat banki", category: "IC3 Hardware" },
  { en: "RAID", uz: "RAID (zaxiralash tizimi)", category: "IC3 Hardware" },
  { en: "SATA", uz: "SATA", category: "IC3 Hardware" },

  // ==================== DASTURIY TA'MINOT (10 ta) ====================
  { en: "beta version", uz: "beta versiya", category: "IC3 Software" },
  { en: "bloatware", uz: "keraksiz oldindan o‘rnatilgan dastur", category: "IC3 Software" },
  { en: "cross-platform", uz: "platformalararo", category: "IC3 Software" },
  { en: "debugging", uz: "xatoliklarni tuzatish", category: "IC3 Software" },
  { en: "end-user license agreement", uz: "oxirgi foydalanuvchi litsenziya shartnomasi", category: "IC3 Software" },
  { en: "EULA", uz: "EULA", category: "IC3 Software" },
  { en: "legacy software", uz: "eski dastur", category: "IC3 Software" },
  { en: "middleware", uz: "oraliq dastur", category: "IC3 Software" },
  { en: "open beta", uz: "ochiq beta", category: "IC3 Software" },
  { en: "sandbox", uz: "qum qutisi (xavfsiz muhit)", category: "IC3 Software" },

  // ==================== TARMOQ (10 ta) ====================
  { en: "fiber optic", uz: "optik tola", category: "IC3 Network" },
  { en: "gateway", uz: "shlyuz", category: "IC3 Network" },
  { en: "mesh network", uz: "to‘r tarmoq", category: "IC3 Network" },
  { en: "network topology", uz: "tarmoq topologiyasi", category: "IC3 Network" },
  { en: "node", uz: "tugun", category: "IC3 Network" },
  { en: "packet loss", uz: "paket yo‘qolishi", category: "IC3 Network" },
  { en: "port forwarding", uz: "port yo‘naltirish", category: "IC3 Network" },
  { en: "SSID", uz: "tarmoq nomi", category: "IC3 Network" },
  { en: "subnet mask", uz: "pastki tarmoq niqobi", category: "IC3 Network" },
  { en: "throughput", uz: "o‘tkazuvchanlik", category: "IC3 Network" },

  // ==================== HAMKORLIK (8 ta) ====================
  { en: "asynchronous learning", uz: "asinxron o‘qish", category: "IC3 Collaboration" },
  { en: "brainstorming", uz: "aql hujumi", category: "IC3 Collaboration" },
  { en: "digital whiteboard", uz: "raqamli doska", category: "IC3 Collaboration" },
  { en: "fork (repository)", uz: "fork (nusxalash)", category: "IC3 Collaboration" },
  { en: "merge conflict", uz: "birlashtirish mojarosi", category: "IC3 Collaboration" },
  { en: "remote access", uz: "masofaviy kirish", category: "IC3 Collaboration" },
  { en: "screencast", uz: "ekran yozuvi", category: "IC3 Collaboration" },
  { en: "virtual classroom", uz: "virtual sinf", category: "IC3 Collaboration" },

  // ==================== QIDIRUV (7 ta) ====================
  { en: "advanced search", uz: "kengaytirilgan qidiruv", category: "IC3 Research" },
  { en: "auto-suggestion", uz: "avtomatik taklif", category: "IC3 Research" },
  { en: "filter bubble", uz: "filtr qobig‘i", category: "IC3 Research" },
  { en: "meta-search engine", uz: "meta-qidiruv tizimi", category: "IC3 Research" },
  { en: "search algorithm", uz: "qidiruv algoritmi", category: "IC3 Research" },
  { en: "search history", uz: "qidiruv tarixi", category: "IC3 Research" },
  { en: "wildcard search", uz: "yulduzcha bilan qidiruv", category: "IC3 Research" },

  // ==================== BRAUZER (7 ta) ====================
  { en: "bookmark bar", uz: "xatcho‘plar paneli", category: "IC3 Internet" },
  { en: "browser extension", uz: "brauzer kengaytmasi", category: "IC3 Internet" },
  { en: "developer tools", uz: "ishlab chiquvchi vositalari", category: "IC3 Internet" },
  { en: "incognito window", uz: "inkognito oynasi", category: "IC3 Internet" },
  { en: "pop-up blocker", uz: "qalqib chiquvchi oynalarni bloklash", category: "IC3 Internet" },
  { en: "tab browsing", uz: "tab bilan ko‘rish", category: "IC3 Internet" },
  { en: "user agent", uz: "foydalanuvchi agenti", category: "IC3 Internet" },

  // ==================== SALOMATLIK (5 ta) ====================
  { en: "blue light filter", uz: "ko‘k nur filtri", category: "IC3 Health" },
  { en: "digital detox", uz: "raqamli detoks", category: "IC3 Health" },
  { en: "ergonomics", uz: "ergonomika", category: "IC3 Health" },
  { en: "tech neck", uz: "texnologik bo‘yin", category: "IC3 Health" },
  { en: "text neck", uz: "matn bo‘yni", category: "IC3 Health" },

  // ==================== HISOBI & XARIDLAR (5 ta) ====================
  { en: "contactless payment", uz: "kontaktsiz to‘lov", category: "IC3 General" },
  { en: "cryptocurrency", uz: "kriptovalyuta", category: "IC3 General" },
  { en: "digital currency", uz: "raqamli valyuta", category: "IC3 General" },
  { en: "microtransaction", uz: "mikrotransaksiya", category: "IC3 General" },
  { en: "QR code payment", uz: "QR kod bilan to‘lov", category: "IC3 General" },

  // ==================== SUN'IY INTELLEKT (5 ta) ====================
  { en: "chatbot", uz: "chatbot", category: "IC3 AI" },
  { en: "computer vision", uz: "kompyuter ko‘rish", category: "IC3 AI" },
  { en: "hallucination (AI)", uz: "AI gallyutsinatsiyasi", category: "IC3 AI" },
  { en: "large language model", uz: "katta til modeli", category: "IC3 AI" },
  { en: "LLM", uz: "LLM", category: "IC3 AI" },

  // ==================== BOSHQALAR (3 ta) ====================
  { en: "breadcrumb trail", uz: "navigatsiya izi", category: "IC3 General" },
  { en: "digital divide", uz: "raqamli tafovut", category: "IC3 General" },
  { en: "digital literacy", uz: "raqamli savodxonlik", category: "IC3 General" },


  // ==================== YANGI 200 TA ATAMA ====================

// ==================== XAVFSIZLIK (IC3 Security) +30 ====================
{ en: "ransomware attack", uz: "to'lov talab qiluvchi hujum", category: "IC3 Security" },
{ en: "security breach", uz: "xavfsizlik buzilishi", category: "IC3 Security" },
{ en: "data encryption", uz: "ma'lumotlarni shifrlash", category: "IC3 Security" },
{ en: "hash function", uz: "xesh funksiyasi", category: "IC3 Security" },
{ en: "digital forensics", uz: "raqamli kriminalistika", category: "IC3 Security" },
{ en: "intrusion detection system", uz: "hujumni aniqlash tizimi", category: "IC3 Security" },
{ en: "intrusion prevention system", uz: "hujumni oldini olish tizimi", category: "IC3 Security" },
{ en: "security audit", uz: "xavfsizlik auditi", category: "IC3 Security" },
{ en: "penetration testing", uz: "penetratsion test", category: "IC3 Security" },
{ en: "white hat hacker", uz: "oq shapkali haker", category: "IC3 Security" },
{ en: "black hat hacker", uz: "qora shapkali haker", category: "IC3 Security" },
{ en: "gray hat hacker", uz: "kulrang shapkali haker", category: "IC3 Security" },
{ en: "social media privacy", uz: "ijtimoiy tarmoq maxfiyligi", category: "IC3 Security" },
{ en: "data minimization", uz: "ma'lumotlarni minimallashtirish", category: "IC3 Security" },
{ en: "privacy by design", uz: "dizayn bo'yicha maxfiylik", category: "IC3 Security" },
{ en: "consent management", uz: "rozilik boshqaruvi", category: "IC3 Security" },
{ en: "opt-in", uz: "rozilik berish", category: "IC3 Security" },
{ en: "opt-out", uz: "rozilikni bekor qilish", category: "IC3 Security" },
{ en: "data subject", uz: "ma'lumotlar subyekti", category: "IC3 Security" },
{ en: "data controller", uz: "ma'lumotlar nazoratchisi", category: "IC3 Security" },
{ en: "data processor", uz: "ma'lumotlar qayta ishlovchisi", category: "IC3 Security" },
{ en: "security token", uz: "xavfsizlik tokeni", category: "IC3 Security" },
{ en: "hardware token", uz: "apparat tokeni", category: "IC3 Security" },
{ en: "software token", uz: "dasturiy token", category: "IC3 Security" },
{ en: "biometric authentication", uz: "biometrik autentifikatsiya", category: "IC3 Security" },
{ en: "fingerprint scanner", uz: "barmoq izi skaneri", category: "IC3 Security" },
{ en: "facial recognition", uz: "yuzni tanish", category: "IC3 Security" },
{ en: "iris recognition", uz: "ko'z qorachig'ini tanish", category: "IC3 Security" },
{ en: "voice recognition", uz: "ovozni tanish", category: "IC3 Security" },
{ en: "behavioral biometrics", uz: "xulq-atvor biometrikasi", category: "IC3 Security" },

// ==================== APPARATURA (IC3 Hardware) +25 ====================
{ en: "cache memory", uz: "kesh xotira", category: "IC3 Hardware" },
{ en: "register", uz: "registr", category: "IC3 Hardware" },
{ en: "clock speed", uz: "soat chastotasi", category: "IC3 Hardware" },
{ en: "multi-core processor", uz: "ko'p yadroli protsessor", category: "IC3 Hardware" },
{ en: "hyperthreading", uz: "giperthreading", category: "IC3 Hardware" },
{ en: "thermal paste", uz: "termal pasta", category: "IC3 Hardware" },
{ en: "heat sink", uz: "issiqlik sochgich", category: "IC3 Hardware" },
{ en: "liquid cooling", uz: "suyuqlik sovutish", category: "IC3 Hardware" },
{ en: "expansion slot", uz: "kengaytirish uyasi", category: "IC3 Hardware" },
{ en: "PCIe slot", uz: "PCIe uyasi", category: "IC3 Hardware" },
{ en: "M.2 drive", uz: "M.2 disk", category: "IC3 Hardware" },
{ en: "eMMC storage", uz: "eMMC xotira", category: "IC3 Hardware" },
{ en: "hybrid drive", uz: "gibrid disk", category: "IC3 Hardware" },
{ en: "NAS", uz: "tarmoqqa ulangan xotira", category: "IC3 Hardware" },
{ en: "SAN", uz: "xotira tarmog'i", category: "IC3 Hardware" },
{ en: "blu-ray drive", uz: "blu-ray disk yuritgich", category: "IC3 Hardware" },
{ en: "DVD drive", uz: "DVD disk yuritgich", category: "IC3 Hardware" },
{ en: "CD drive", uz: "CD disk yuritgich", category: "IC3 Hardware" },
{ en: "touchpad", uz: "sensorli panel", category: "IC3 Hardware" },
{ en: "pointing stick", uz: "ko'rsatkich tayoqchasi", category: "IC3 Hardware" },
{ en: "mechanical keyboard", uz: "mexanik klaviatura", category: "IC3 Hardware" },
{ en: "membrane keyboard", uz: "membranali klaviatura", category: "IC3 Hardware" },
{ en: "gaming mouse", uz: "o'yin sichqonchasi", category: "IC3 Hardware" },
{ en: "3D printer", uz: "3D printer", category: "IC3 Hardware" },
{ en: "plotter", uz: "plotter", category: "IC3 Hardware" },

// ==================== OPERATSION TIZIM (IC3 OS) +20 ====================
{ en: "device driver", uz: "qurilma drayveri", category: "IC3 OS" },
{ en: "plug and play", uz: "uloq va o'yna", category: "IC3 OS" },
{ en: "system restore", uz: "tizimni tiklash", category: "IC3 OS" },
{ en: "safe mode", uz: "xavfsiz rejim", category: "IC3 OS" },
{ en: "task scheduler", uz: "vazifa rejalashtiruvchi", category: "IC3 OS" },
{ en: "event viewer", uz: "hodisalar ko'ruvchisi", category: "IC3 OS" },
{ en: "performance monitor", uz: "ishlash monitori", category: "IC3 OS" },
{ en: "resource monitor", uz: "resurslar monitori", category: "IC3 OS" },
{ en: "disk management", uz: "disk boshqaruvi", category: "IC3 OS" },
{ en: "device manager", uz: "qurilmalar boshqaruvi", category: "IC3 OS" },
{ en: "group policy", uz: "guruh siyosati", category: "IC3 OS" },
{ en: "local security policy", uz: "mahalliy xavfsizlik siyosati", category: "IC3 OS" },
{ en: "firewall settings", uz: "xavfsizlik devori sozlamalari", category: "IC3 OS" },
{ en: "windows update", uz: "Windows yangilanishi", category: "IC3 OS" },
{ en: "system information", uz: "tizim ma'lumotlari", category: "IC3 OS" },
{ en: "control panel", uz: "boshqaruv paneli", category: "IC3 OS" },
{ en: "settings app", uz: "sozlamalar ilovasi", category: "IC3 OS" },
{ en: "notification area", uz: "bildirishnoma hududi", category: "IC3 OS" },
{ en: "system tray", uz: "tizim treyi", category: "IC3 OS" },
{ en: "desktop background", uz: "ish stoli fon rasmi", category: "IC3 OS" },

// ==================== TARMOQ (IC3 Network) +20 ====================
{ en: "network switch", uz: "tarmoq kaliti", category: "IC3 Network" },
{ en: "network hub", uz: "tarmoq hubi", category: "IC3 Network" },
{ en: "network bridge", uz: "tarmoq ko'prigi", category: "IC3 Network" },
{ en: "network repeater", uz: "tarmoq takrorlagichi", category: "IC3 Network" },
{ en: "access point", uz: "kirish nuqtasi", category: "IC3 Network" },
{ en: "firewall", uz: "xavfsizlik devori", category: "IC3 Network" },
{ en: "proxy", uz: "proksi", category: "IC3 Network" },
{ en: "load balancer", uz: "yuk muvozanatlagichi", category: "IC3 Network" },
{ en: "network interface", uz: "tarmoq interfeysi", category: "IC3 Network" },
{ en: "network adapter", uz: "tarmoq adapteri", category: "IC3 Network" },
{ en: "wireless adapter", uz: "simsiz adapter", category: "IC3 Network" },
{ en: "network cable", uz: "tarmoq kabeli", category: "IC3 Network" },
{ en: "coaxial cable", uz: "koaksial kabel", category: "IC3 Network" },
{ en: "twisted pair cable", uz: "o'ralgan juft kabel", category: "IC3 Network" },
{ en: "fiber optic cable", uz: "optik tolali kabel", category: "IC3 Network" },
{ en: "RJ45 connector", uz: "RJ45 ulagich", category: "IC3 Network" },
{ en: "network port", uz: "tarmoq porti", category: "IC3 Network" },
{ en: "MAC filtering", uz: "MAC filtrlash", category: "IC3 Network" },
{ en: "IP filtering", uz: "IP filtrlash", category: "IC3 Network" },
{ en: "port blocking", uz: "portni bloklash", category: "IC3 Network" },

// ==================== INTERNET (IC3 Internet) +20 ====================
{ en: "responsive web design", uz: "moslashuvchan veb-dizayn", category: "IC3 Internet" },
{ en: "mobile-friendly", uz: "mobil qurilmalarga mos", category: "IC3 Internet" },
{ en: "web accessibility", uz: "veb qulayligi", category: "IC3 Internet" },
{ en: "SEO", uz: "qidiruv tizimini optimallashtirish", category: "IC3 Internet" },
{ en: "web analytics", uz: "veb-analitika", category: "IC3 Internet" },
{ en: "click-through rate", uz: "bosish darajasi", category: "IC3 Internet" },
{ en: "bounce rate", uz: "qaytish darajasi", category: "IC3 Internet" },
{ en: "conversion rate", uz: "konversiya darajasi", category: "IC3 Internet" },
{ en: "landing page", uz: "ochilish sahifasi", category: "IC3 Internet" },
{ en: "homepage", uz: "bosh sahifa", category: "IC3 Internet" },
{ en: "webpage", uz: "veb-sahifa", category: "IC3 Internet" },
{ en: "website navigation", uz: "veb-sayt navigatsiyasi", category: "IC3 Internet" },
{ en: "sitemap", uz: "sayt xaritasi", category: "IC3 Internet" },
{ en: "breadcrumb navigation", uz: "breadcrumb navigatsiyasi", category: "IC3 Internet" },
{ en: "footer", uz: "pastki qism", category: "IC3 Internet" },
{ en: "sidebar", uz: "yon panel", category: "IC3 Internet" },
{ en: "hero image", uz: "bosh rasm", category: "IC3 Internet" },
{ en: "call to action", uz: "harakatga chaqiruv", category: "IC3 Internet" },
{ en: "web form", uz: "veb-forma", category: "IC3 Internet" },
{ en: "captcha", uz: "CAPTCHA (robot emasligini tekshirish)", category: "IC3 Internet" },

// ==================== DASTURIY TA'MINOT (IC3 Software) +20 ====================
{ en: "software license", uz: "dasturiy litsenziya", category: "IC3 Software" },
{ en: "perpetual license", uz: "cheksiz litsenziya", category: "IC3 Software" },
{ en: "subscription license", uz: "obuna litsenziyasi", category: "IC3 Software" },
{ en: "trial version", uz: "sinov versiyasi", category: "IC3 Software" },
{ en: "freemium", uz: "freemium (bepul asosiy, pullik qo'shimcha)", category: "IC3 Software" },
{ en: "software update", uz: "dasturiy yangilanish", category: "IC3 Software" },
{ en: "software upgrade", uz: "dasturiy yangilanish (katta versiya)", category: "IC3 Software" },
{ en: "hotfix", uz: "tezkor tuzatish", category: "IC3 Software" },
{ en: "service pack", uz: "xizmatlar to'plami", category: "IC3 Software" },
{ en: "software repository", uz: "dasturiy ombor", category: "IC3 Software" },
{ en: "package manager", uz: "paket boshqaruvchisi", category: "IC3 Software" },
{ en: "dependency", uz: "bog'liqlik", category: "IC3 Software" },
{ en: "software architecture", uz: "dasturiy arxitektura", category: "IC3 Software" },
{ en: "frontend", uz: "old qism", category: "IC3 Software" },
{ en: "backend", uz: "orqa qism", category: "IC3 Software" },
{ en: "full-stack", uz: "to'liq stack", category: "IC3 Software" },
{ en: "API", uz: "dasturiy interfeys", category: "IC3 Software" },
{ en: "SDK", uz: "dasturiy ishlab chiqish to'plami", category: "IC3 Software" },
{ en: "framework", uz: "freymvork", category: "IC3 Software" },
{ en: "library", uz: "kutubxona", category: "IC3 Software" },

// ==================== MULOQOT (IC3 Communication) +15 ====================
{ en: "instant message", uz: "tezkor xabar", category: "IC3 Communication" },
{ en: "direct message", uz: "to'g'ridan-to'g'ri xabar", category: "IC3 Communication" },
{ en: "group chat", uz: "guruh suhbati", category: "IC3 Communication" },
{ en: "channel", uz: "kanal", category: "IC3 Communication" },
{ en: "thread", uz: "mavzu", category: "IC3 Communication" },
{ en: "mention", uz: "eslatish", category: "IC3 Communication" },
{ en: "hashtag", uz: "hashteg", category: "IC3 Communication" },
{ en: "tagging", uz: "teglash", category: "IC3 Communication" },
{ en: "reaction", uz: "reaksiya", category: "IC3 Communication" },
{ en: "poll", uz: "so'rovnoma", category: "IC3 Communication" },
{ en: "voice message", uz: "ovozli xabar", category: "IC3 Communication" },
{ en: "video message", uz: "video xabar", category: "IC3 Communication" },
{ en: "screen sharing", uz: "ekran almashish", category: "IC3 Communication" },
{ en: "file sharing", uz: "fayl almashish", category: "IC3 Communication" },
{ en: "link sharing", uz: "havola almashish", category: "IC3 Communication" },

// ==================== HAMKORLIK (IC3 Collaboration) +10 ====================
{ en: "project management", uz: "loyiha boshqaruvi", category: "IC3 Collaboration" },
{ en: "task assignment", uz: "vazifa tayinlash", category: "IC3 Collaboration" },
{ en: "deadline", uz: "muddat", category: "IC3 Collaboration" },
{ en: "milestone", uz: "muhim bosqich", category: "IC3 Collaboration" },
{ en: "kanban board", uz: "kanban doskasi", category: "IC3 Collaboration" },
{ en: "scrum", uz: "scrum", category: "IC3 Collaboration" },
{ en: "agile methodology", uz: "agile metodologiyasi", category: "IC3 Collaboration" },
{ en: "waterfall model", uz: "sharshara modeli", category: "IC3 Collaboration" },
{ en: "sprint", uz: "sprint", category: "IC3 Collaboration" },
{ en: "retrospective", uz: "retrospektiv", category: "IC3 Collaboration" },

// ==================== HUQUQIY MASALALAR (IC3 Legal) +10 ====================
{ en: "trademark", uz: "tovar belgisi", category: "IC3 Legal" },
{ en: "patent", uz: "patent", category: "IC3 Legal" },
{ en: "intellectual property", uz: "intellektual mulk", category: "IC3 Legal" },
{ en: "trade secret", uz: "savdo siri", category: "IC3 Legal" },
{ en: "non-disclosure agreement", uz: "oshkor qilmaslik shartnomasi", category: "IC3 Legal" },
{ en: "end user license agreement", uz: "oxirgi foydalanuvchi litsenziya shartnomasi", category: "IC3 Legal" },
{ en: "terms of service", uz: "xizmat ko'rsatish shartlari", category: "IC3 Legal" },
{ en: "privacy policy", uz: "maxfiylik siyosati", category: "IC3 Legal" },
{ en: "cookie policy", uz: "kuki siyosati", category: "IC3 Legal" },
{ en: "GDPR", uz: "GDPR (Yevropa ma'lumotlar himoyasi qonuni)", category: "IC3 Legal" },

// ==================== TADQIQOT (IC3 Research) +10 ====================
{ en: "primary source", uz: "birlamchi manba", category: "IC3 Research" },
{ en: "secondary source", uz: "ikkilamchi manba", category: "IC3 Research" },
{ en: "peer-reviewed journal", uz: "tengdosh tekshiruvli jurnal", category: "IC3 Research" },
{ en: "scholarly article", uz: "ilmiy maqola", category: "IC3 Research" },
{ en: "empirical study", uz: "empirik tadqiqot", category: "IC3 Research" },
{ en: "literature review", uz: "adabiyotlar tahlili", category: "IC3 Research" },
{ en: "research methodology", uz: "tadqiqot metodologiyasi", category: "IC3 Research" },
{ en: "qualitative research", uz: "sifatli tadqiqot", category: "IC3 Research" },
{ en: "quantitative research", uz: "miqdoriy tadqiqot", category: "IC3 Research" },
{ en: "data triangulation", uz: "ma'lumotlar triangulyatsiyasi", category: "IC3 Research" },

// ==================== SALOMATLIK (IC3 Health) +10 ====================
{ en: "digital addiction", uz: "raqamli giyohvandlik", category: "IC3 Health" },
{ en: "internet addiction", uz: "internet giyohvandligi", category: "IC3 Health" },
{ en: "social media addiction", uz: "ijtimoiy tarmoq giyohvandligi", category: "IC3 Health" },
{ en: "gaming disorder", uz: "o'yin buzilishi", category: "IC3 Health" },
{ en: "nomophobia", uz: "nomofobiya (telefonsiz qolish qo'rquvi)", category: "IC3 Health" },
{ en: "cybersickness", uz: "kiber kasallik", category: "IC3 Health" },
{ en: "zoom fatigue", uz: "zoom charchoqi", category: "IC3 Health" },
{ en: "dry eyes", uz: "quruq ko'zlar", category: "IC3 Health" },
{ en: "computer vision syndrome", uz: "kompyuter ko'rish sindromi", category: "IC3 Health" },
{ en: "texting thumb", uz: "matn yozish barmog'i", category: "IC3 Health" },

// ==================== BULUT (IC3 Cloud) +10 ====================
{ en: "IaaS", uz: "infratuzilma sifatida xizmat", category: "IC3 Cloud" },
{ en: "PaaS", uz: "platforma sifatida xizmat", category: "IC3 Cloud" },
{ en: "SaaS", uz: "dastur sifatida xizmat", category: "IC3 Cloud" },
{ en: "public cloud", uz: "ommaviy bulut", category: "IC3 Cloud" },
{ en: "private cloud", uz: "xususiy bulut", category: "IC3 Cloud" },
{ en: "hybrid cloud", uz: "gibrid bulut", category: "IC3 Cloud" },
{ en: "multi-cloud", uz: "ko'p bulutli", category: "IC3 Cloud" },
{ en: "cloud migration", uz: "bulutga ko'chish", category: "IC3 Cloud" },
{ en: "cloud backup", uz: "bulutli zaxira", category: "IC3 Cloud" },
{ en: "cloud disaster recovery", uz: "bulutli falokatdan tiklash", category: "IC3 Cloud" },

// ==================== SUN'IY INTELLEKT (IC3 AI) +10 ====================
{ en: "supervised learning", uz: "nazorat ostida o'rganish", category: "IC3 AI" },
{ en: "unsupervised learning", uz: "nazoratsiz o'rganish", category: "IC3 AI" },
{ en: "reinforcement learning", uz: "mustahkamlovchi o'rganish", category: "IC3 AI" },
{ en: "training data", uz: "o'rgatuvchi ma'lumotlar", category: "IC3 AI" },
{ en: "test data", uz: "test ma'lumotlari", category: "IC3 AI" },
{ en: "validation data", uz: "tekshiruv ma'lumotlari", category: "IC3 AI" },
{ en: "overfitting", uz: "ortiqcha moslashish", category: "IC3 AI" },
{ en: "underfitting", uz: "yetarlicha moslashmaslik", category: "IC3 AI" },
{ en: "model accuracy", uz: "model aniqligi", category: "IC3 AI" },
{ en: "precision and recall", uz: "aniqlik va esga olish", category: "IC3 AI" },

// ==================== UMUMIY (IC3 General) +10 ====================
{ en: "digital transformation", uz: "raqamli transformatsiya", category: "IC3 General" },
{ en: "digital ecosystem", uz: "raqamli ekotizim", category: "IC3 General" },
{ en: "digital native", uz: "raqamli mahalliy", category: "IC3 General" },
{ en: "digital immigrant", uz: "raqamli immigrant", category: "IC3 General" },
{ en: "digital citizen", uz: "raqamli fuqaro", category: "IC3 General" },
{ en: "digital rights", uz: "raqamli huquqlar", category: "IC3 General" },
{ en: "digital responsibility", uz: "raqamli mas'uliyat", category: "IC3 General" },
{ en: "digital wellness", uz: "raqamli farovonlik", category: "IC3 General" },
{ en: "digital inclusion", uz: "raqamli inklyuziya", category: "IC3 General" },
{ en: "digital equity", uz: "raqamli tenglik", category: "IC3 General" },






// ==================== 400 TA SO‘Z LUG‘ATI (IC3 GS6 savol variantlari asosida) ====================
// Kategoriya: "IC3 Words" — bu oddiy so‘zlar va iboralar, atamalar emas

  // ========== HARAKAT/FE’LLAR ==========
  { en: "protect", uz: "himoya qilmoq", category: "IC3 Words" },
  { en: "prevent", uz: "oldini olmoq", category: "IC3 Words" },
  { en: "avoid", uz: "chetlab o‘tmoq", category: "IC3 Words" },
  { en: "share", uz: "ulashmoq", category: "IC3 Words" },
  { en: "store", uz: "saqlamoq", category: "IC3 Words" },
  { en: "retrieve", uz: "qayta olmoq", category: "IC3 Words" },
  { en: "delete", uz: "o‘chirmoq", category: "IC3 Words" },
  { en: "remove", uz: "olib tashlamoq", category: "IC3 Words" },
  { en: "create", uz: "yaratmoq", category: "IC3 Words" },
  { en: "edit", uz: "tahrirlamoq", category: "IC3 Words" },
  { en: "modify", uz: "o‘zgartirmoq", category: "IC3 Words" },
  { en: "update", uz: "yangilamoq", category: "IC3 Words" },
  { en: "install", uz: "o‘rnatmoq", category: "IC3 Words" },
  { en: "uninstall", uz: "o‘chirib tashlamoq", category: "IC3 Words" },
  { en: "download", uz: "yuklab olmoq", category: "IC3 Words" },
  { en: "upload", uz: "yuklamoq", category: "IC3 Words" },
  { en: "transfer", uz: "ko‘chirmoq", category: "IC3 Words" },
  { en: "copy", uz: "nusxalamoq", category: "IC3 Words" },
  { en: "paste", uz: "qo‘ymoq", category: "IC3 Words" },
  { en: "cut", uz: "kesmoq", category: "IC3 Words" },
  { en: "save", uz: "saqlamoq", category: "IC3 Words" },
  { en: "open", uz: "ochmoq", category: "IC3 Words" },
  { en: "close", uz: "yopmoq", category: "IC3 Words" },
  { en: "run", uz: "ishlatmoq", category: "IC3 Words" },
  { en: "execute", uz: "bajarmoq", category: "IC3 Words" },
  { en: "launch", uz: "ishga tushirmoq", category: "IC3 Words" },
  { en: "terminate", uz: "to‘xtatmoq", category: "IC3 Words" },
  { en: "enable", uz: "yoqmoq", category: "IC3 Words" },
  { en: "disable", uz: "o‘chirmoq", category: "IC3 Words" },
  { en: "configure", uz: "sozlamoq", category: "IC3 Words" },
  { en: "customize", uz: "moslashtirmoq", category: "IC3 Words" },
  { en: "reset", uz: "qayta tiklamoq", category: "IC3 Words" },
  { en: "restore", uz: "tiklamoq", category: "IC3 Words" },
  { en: "recover", uz: "qaytarib olmoq", category: "IC3 Words" },
  { en: "backup", uz: "zaxiralmoq", category: "IC3 Words" },
  { en: "restart", uz: "qayta ishga tushirmoq", category: "IC3 Words" },
  { en: "shut down", uz: "o‘chirmoq", category: "IC3 Words" },
  { en: "log in", uz: "tizimga kirmoq", category: "IC3 Words" },
  { en: "log out", uz: "tizimdan chiqmoq", category: "IC3 Words" },
  { en: "sign in", uz: "kirish", category: "IC3 Words" },
  { en: "sign out", uz: "chiqish", category: "IC3 Words" },
  { en: "register", uz: "ro‘yxatdan o‘tmoq", category: "IC3 Words" },
  { en: "verify", uz: "tekshirmoq", category: "IC3 Words" },
  { en: "confirm", uz: "tasdiqlamoq", category: "IC3 Words" },
  { en: "approve", uz: "ma’qullamoq", category: "IC3 Words" },
  { en: "deny", uz: "rad etmoq", category: "IC3 Words" },
  { en: "allow", uz: "ruxsat bermoq", category: "IC3 Words" },
  { en: "block", uz: "bloklamoq", category: "IC3 Words" },
  { en: "restrict", uz: "cheklamoq", category: "IC3 Words" },
  { en: "limit", uz: "chegaralamoq", category: "IC3 Words" },
  { en: "monitor", uz: "kuzatmoq", category: "IC3 Words" },
  { en: "track", uz: "izlamoq", category: "IC3 Words" },
  { en: "scan", uz: "skanerlamoq", category: "IC3 Words" },
  { en: "check", uz: "tekshirmoq", category: "IC3 Words" },
  { en: "review", uz: "ko‘rib chiqmoq", category: "IC3 Words" },
  { en: "compare", uz: "solishtirmoq", category: "IC3 Words" },
  { en: "select", uz: "tanlamoq", category: "IC3 Words" },
  { en: "choose", uz: "tanlamoq", category: "IC3 Words" },
  { en: "click", uz: "bosmoq", category: "IC3 Words" },
  { en: "double-click", uz: "ikki marta bosmoq", category: "IC3 Words" },
  { en: "right-click", uz: "o‘ng tugmasini bosmoq", category: "IC3 Words" },
  { en: "drag", uz: "sudramoq", category: "IC3 Words" },
  { en: "drop", uz: "tashlamoq", category: "IC3 Words" },
  { en: "scroll", uz: "aylantirmoq", category: "IC3 Words" },
  { en: "zoom", uz: "kattalashtirmoq", category: "IC3 Words" },
  { en: "refresh", uz: "yangilamoq", category: "IC3 Words" },
  { en: "reload", uz: "qayta yuklamoq", category: "IC3 Words" },
  { en: "navigate", uz: "harakatlanmoq", category: "IC3 Words" },
  { en: "browse", uz: "ko‘rib chiqmoq", category: "IC3 Words" },
  { en: "search", uz: "qidirmoq", category: "IC3 Words" },
  { en: "find", uz: "topmoq", category: "IC3 Words" },
  { en: "replace", uz: "almashtirmoq", category: "IC3 Words" },
  { en: "sort", uz: "tartiblamoq", category: "IC3 Words" },
  { en: "filter", uz: "filtrlamoq", category: "IC3 Words" },
  { en: "organize", uz: "tartibga solmoq", category: "IC3 Words" },
  { en: "manage", uz: "boshqarmoq", category: "IC3 Words" },
  { en: "control", uz: "nazorat qilmoq", category: "IC3 Words" },
  { en: "access", uz: "kirish", category: "IC3 Words" },
  { en: "connect", uz: "ulamoq", category: "IC3 Words" },
  { en: "disconnect", uz: "uzmoq", category: "IC3 Words" },
  { en: "attach", uz: "biriktirmoq", category: "IC3 Words" },
  { en: "detach", uz: "ajratmoq", category: "IC3 Words" },
  { en: "insert", uz: "kiritmoq", category: "IC3 Words" },
  { en: "remove", uz: "chiqarmoq", category: "IC3 Words" },
  { en: "add", uz: "qo‘shmoq", category: "IC3 Words" },
  { en: "subtract", uz: "ayirmoq", category: "IC3 Words" },
  { en: "calculate", uz: "hisoblamoq", category: "IC3 Words" },
  { en: "measure", uz: "o‘lchamoq", category: "IC3 Words" },
  { en: "estimate", uz: "baholamoq", category: "IC3 Words" },
  { en: "evaluate", uz: "qimmatlamoq", category: "IC3 Words" },
  { en: "assess", uz: "baholamoq", category: "IC3 Words" },
  { en: "analyze", uz: "tahlil qilmoq", category: "IC3 Words" },
  { en: "summarize", uz: "xulosa qilmoq", category: "IC3 Words" },
  { en: "explain", uz: "tushuntirmoq", category: "IC3 Words" },
  { en: "describe", uz: "tasvirlamoq", category: "IC3 Words" },
  { en: "define", uz: "aniqlamoq", category: "IC3 Words" },
  { en: "identify", uz: "aniqlamoq", category: "IC3 Words" },
  { en: "recognize", uz: "tanimoq", category: "IC3 Words" },
  { en: "distinguish", uz: "farqlamoq", category: "IC3 Words" },
  { en: "differentiate", uz: "farqlamoq", category: "IC3 Words" },
  { en: "classify", uz: "tasniflamoq", category: "IC3 Words" },
  { en: "categorize", uz: "kategoriyalarga ajratmoq", category: "IC3 Words" },
  { en: "group", uz: "guruhlamoq", category: "IC3 Words" },
  { en: "combine", uz: "birlashtirmoq", category: "IC3 Words" },
  { en: "separate", uz: "ajratmoq", category: "IC3 Words" },
  { en: "merge", uz: "birlashtirmoq", category: "IC3 Words" },
  { en: "split", uz: "bo‘lmoq", category: "IC3 Words" },
  { en: "divide", uz: "bo‘lmoq", category: "IC3 Words" },
  { en: "multiply", uz: "ko‘paytirmoq", category: "IC3 Words" },
  { en: "increase", uz: "oshirmoq", category: "IC3 Words" },
  { en: "decrease", uz: "kamaytirmoq", category: "IC3 Words" },
  { en: "expand", uz: "kengaytirmoq", category: "IC3 Words" },
  { en: "reduce", uz: "kamaytirmoq", category: "IC3 Words" },
  { en: "improve", uz: "yaxshilamoq", category: "IC3 Words" },
  { en: "enhance", uz: "kuchaytirmoq", category: "IC3 Words" },
  { en: "optimize", uz: "optimallashtirmoq", category: "IC3 Words" },
  { en: "simplify", uz: "soddalashtirmoq", category: "IC3 Words" },
  { en: "complicate", uz: "murakkablashtirmoq", category: "IC3 Words" },
  { en: "solve", uz: "yechmoq", category: "IC3 Words" },
  { en: "fix", uz: "tuzatmoq", category: "IC3 Words" },
  { en: "repair", uz: "ta’mirlamoq", category: "IC3 Words" },
  { en: "maintain", uz: "saqlamoq", category: "IC3 Words" },
  { en: "support", uz: "qo‘llab-quvvatlamoq", category: "IC3 Words" },
  { en: "assist", uz: "yordam bermoq", category: "IC3 Words" },
  { en: "help", uz: "yordam bermoq", category: "IC3 Words" },
  { en: "guide", uz: "yo‘l ko‘rsatmoq", category: "IC3 Words" },
  { en: "teach", uz: "o‘rgatmoq", category: "IC3 Words" },
  { en: "learn", uz: "o‘rganmoq", category: "IC3 Words" },
  { en: "study", uz: "o‘qimoq", category: "IC3 Words" },
  { en: "practice", uz: "mashq qilmoq", category: "IC3 Words" },
  { en: "train", uz: "mashq qildirmoq", category: "IC3 Words" },

  // ========== SIFATLAR ==========
  { en: "secure", uz: "xavfsiz", category: "IC3 Words" },
  { en: "unsafe", uz: "xavfli", category: "IC3 Words" },
  { en: "dangerous", uz: "xavfli", category: "IC3 Words" },
  { en: "harmful", uz: "zararli", category: "IC3 Words" },
  { en: "malicious", uz: "zararli", category: "IC3 Words" },
  { en: "legitimate", uz: "qonuniy", category: "IC3 Words" },
  { en: "illegal", uz: "noqonuniy", category: "IC3 Words" },
  { en: "unauthorized", uz: "ruxsatsiz", category: "IC3 Words" },
  { en: "authorized", uz: "ruxsatli", category: "IC3 Words" },
  { en: "private", uz: "shaxsiy", category: "IC3 Words" },
  { en: "public", uz: "ommaviy", category: "IC3 Words" },
  { en: "confidential", uz: "maxfiy", category: "IC3 Words" },
  { en: "sensitive", uz: "nozik", category: "IC3 Words" },
  { en: "personal", uz: "shaxsiy", category: "IC3 Words" },
  { en: "professional", uz: "professional", category: "IC3 Words" },
  { en: "academic", uz: "akademik", category: "IC3 Words" },
  { en: "educational", uz: "ta’limiy", category: "IC3 Words" },
  { en: "commercial", uz: "tijoriy", category: "IC3 Words" },
  { en: "free", uz: "bepul", category: "IC3 Words" },
  { en: "paid", uz: "pullik", category: "IC3 Words" },
  { en: "expensive", uz: "qimmat", category: "IC3 Words" },
  { en: "cheap", uz: "arzon", category: "IC3 Words" },
  { en: "affordable", uz: "qulay narxli", category: "IC3 Words" },
  { en: "reliable", uz: "ishonchli", category: "IC3 Words" },
  { en: "unreliable", uz: "ishonchsiz", category: "IC3 Words" },
  { en: "accurate", uz: "aniq", category: "IC3 Words" },
  { en: "inaccurate", uz: "noaniq", category: "IC3 Words" },
  { en: "correct", uz: "to‘g‘ri", category: "IC3 Words" },
  { en: "incorrect", uz: "noto‘g‘ri", category: "IC3 Words" },
  { en: "valid", uz: "haqiqiy", category: "IC3 Words" },
  { en: "invalid", uz: "yaroqsiz", category: "IC3 Words" },
  { en: "true", uz: "rost", category: "IC3 Words" },
  { en: "false", uz: "yolg‘on", category: "IC3 Words" },
  { en: "real", uz: "haqiqiy", category: "IC3 Words" },
  { en: "fake", uz: "soxta", category: "IC3 Words" },
  { en: "original", uz: "asl", category: "IC3 Words" },
  { en: "duplicate", uz: "nusxa", category: "IC3 Words" },
  { en: "temporary", uz: "vaqtinchalik", category: "IC3 Words" },
  { en: "permanent", uz: "doimiy", category: "IC3 Words" },
  { en: "automatic", uz: "avtomatik", category: "IC3 Words" },
  { en: "manual", uz: "qo‘lda", category: "IC3 Words" },
  { en: "digital", uz: "raqamli", category: "IC3 Words" },
  { en: "physical", uz: "fizik", category: "IC3 Words" },
  { en: "virtual", uz: "virtual", category: "IC3 Words" },
  { en: "actual", uz: "haqiqiy", category: "IC3 Words" },
  { en: "online", uz: "onlayn", category: "IC3 Words" },
  { en: "offline", uz: "oflayn", category: "IC3 Words" },
  { en: "local", uz: "mahalliy", category: "IC3 Words" },
  { en: "remote", uz: "masofaviy", category: "IC3 Words" },
  { en: "internal", uz: "ichki", category: "IC3 Words" },
  { en: "external", uz: "tashqi", category: "IC3 Words" },
  { en: "built-in", uz: "o‘rnatilgan", category: "IC3 Words" },
  { en: "removable", uz: "olinadigan", category: "IC3 Words" },
  { en: "portable", uz: "ko‘chma", category: "IC3 Words" },
  { en: "desktop", uz: "ish stoli", category: "IC3 Words" },
  { en: "laptop", uz: "noutbuk", category: "IC3 Words" },
  { en: "mobile", uz: "mobil", category: "IC3 Words" },
  { en: "wireless", uz: "simsiz", category: "IC3 Words" },
  { en: "wired", uz: "simli", category: "IC3 Words" },
  { en: "fast", uz: "tez", category: "IC3 Words" },
  { en: "slow", uz: "sekin", category: "IC3 Words" },
  { en: "quick", uz: "tez", category: "IC3 Words" },
  { en: "rapid", uz: "tez", category: "IC3 Words" },
  { en: "instant", uz: "bir zumda", category: "IC3 Words" },
  { en: "delayed", uz: "kechikkan", category: "IC3 Words" },
  { en: "immediate", uz: "darhol", category: "IC3 Words" },
  { en: "direct", uz: "to‘g‘ridan-to‘g‘ri", category: "IC3 Words" },
  { en: "indirect", uz: "bilvosita", category: "IC3 Words" },
  { en: "explicit", uz: "aniq", category: "IC3 Words" },
  { en: "implicit", uz: "yashirin", category: "IC3 Words" },
  { en: "clear", uz: "tushunarli", category: "IC3 Words" },
  { en: "unclear", uz: "tushunarsiz", category: "IC3 Words" },
  { en: "obvious", uz: "ravshan", category: "IC3 Words" },
  { en: "subtle", uz: "nozik", category: "IC3 Words" },
  { en: "simple", uz: "oddiy", category: "IC3 Words" },
  { en: "complex", uz: "murakkab", category: "IC3 Words" },
  { en: "easy", uz: "oson", category: "IC3 Words" },
  { en: "difficult", uz: "qiyin", category: "IC3 Words" },
  { en: "hard", uz: "qattiq/qiyin", category: "IC3 Words" },
  { en: "soft", uz: "yumshoq", category: "IC3 Words" },
  { en: "strong", uz: "kuchli", category: "IC3 Words" },
  { en: "weak", uz: "kuchsiz", category: "IC3 Words" },
  { en: "high", uz: "yuqori", category: "IC3 Words" },
  { en: "low", uz: "past", category: "IC3 Words" },
  { en: "large", uz: "katta", category: "IC3 Words" },
  { en: "small", uz: "kichik", category: "IC3 Words" },
  { en: "big", uz: "katta", category: "IC3 Words" },
  { en: "little", uz: "kichik", category: "IC3 Words" },
  { en: "wide", uz: "keng", category: "IC3 Words" },
  { en: "narrow", uz: "tor", category: "IC3 Words" },
  { en: "long", uz: "uzun", category: "IC3 Words" },
  { en: "short", uz: "qisqa", category: "IC3 Words" },
  { en: "full", uz: "to‘la", category: "IC3 Words" },
  { en: "empty", uz: "bo‘sh", category: "IC3 Words" },
  { en: "available", uz: "mavjud", category: "IC3 Words" },
  { en: "unavailable", uz: "mavjud emas", category: "IC3 Words" },
  { en: "necessary", uz: "zarur", category: "IC3 Words" },
  { en: "unnecessary", uz: "keraksiz", category: "IC3 Words" },
  { en: "essential", uz: "muhim", category: "IC3 Words" },
  { en: "optional", uz: "ixtiyoriy", category: "IC3 Words" },
  { en: "required", uz: "talab qilinadi", category: "IC3 Words" },
  { en: "mandatory", uz: "majburiy", category: "IC3 Words" },
  { en: "voluntary", uz: "ixtiyoriy", category: "IC3 Words" },
  { en: "common", uz: "umumiy", category: "IC3 Words" },
  { en: "rare", uz: "noyob", category: "IC3 Words" },
  { en: "typical", uz: "odatiy", category: "IC3 Words" },
  { en: "unusual", uz: "g‘ayrioddiy", category: "IC3 Words" },
  { en: "normal", uz: "normal", category: "IC3 Words" },
  { en: "abnormal", uz: "anormal", category: "IC3 Words" },
  { en: "standard", uz: "standart", category: "IC3 Words" },
  { en: "custom", uz: "maxsus", category: "IC3 Words" },
  { en: "default", uz: "standart", category: "IC3 Words" },
  { en: "alternative", uz: "muqobil", category: "IC3 Words" },
  { en: "different", uz: "boshqacha", category: "IC3 Words" },
  { en: "similar", uz: "o‘xshash", category: "IC3 Words" },
  { en: "same", uz: "bir xil", category: "IC3 Words" },
  { en: "unique", uz: "noyob", category: "IC3 Words" },
  { en: "multiple", uz: "ko‘p", category: "IC3 Words" },
  { en: "single", uz: "bitta", category: "IC3 Words" },
  { en: "various", uz: "turli", category: "IC3 Words" },
  { en: "specific", uz: "maxsus", category: "IC3 Words" },
  { en: "general", uz: "umumiy", category: "IC3 Words" },
  { en: "particular", uz: "alohida", category: "IC3 Words" },
  { en: "certain", uz: "ma’lum", category: "IC3 Words" },
  { en: "any", uz: "har qanday", category: "IC3 Words" },
  { en: "some", uz: "ba’zi", category: "IC3 Words" },
  { en: "no", uz: "yo‘q", category: "IC3 Words" },
  { en: "all", uz: "barcha", category: "IC3 Words" },
  { en: "every", uz: "har bir", category: "IC3 Words" },
  { en: "each", uz: "har bir", category: "IC3 Words" },
  { en: "both", uz: "ikkalasi ham", category: "IC3 Words" },
  { en: "either", uz: "ikkalasidan biri", category: "IC3 Words" },
  { en: "neither", uz: "hech biri", category: "IC3 Words" },
  { en: "none", uz: "hech qaysi", category: "IC3 Words" },
  { en: "only", uz: "faqat", category: "IC3 Words" },
  { en: "just", uz: "shunchaki", category: "IC3 Words" },
  { en: "also", uz: "ham", category: "IC3 Words" },
  { en: "too", uz: "ham", category: "IC3 Words" },
  { en: "very", uz: "juda", category: "IC3 Words" },
  { en: "extremely", uz: "nihoyatda", category: "IC3 Words" },
  { en: "completely", uz: "butunlay", category: "IC3 Words" },
  { en: "partially", uz: "qisman", category: "IC3 Words" },
  { en: "fully", uz: "to‘liq", category: "IC3 Words" },
  { en: "mostly", uz: "asosan", category: "IC3 Words" },
  { en: "almost", uz: "deyarli", category: "IC3 Words" },
  { en: "approximately", uz: "taxminan", category: "IC3 Words" },
  { en: "exactly", uz: "aniq", category: "IC3 Words" },
  { en: "precisely", uz: "aniq", category: "IC3 Words" },
  { en: "roughly", uz: "taxminan", category: "IC3 Words" },
  { en: "frequently", uz: "tez-tez", category: "IC3 Words" },
  { en: "rarely", uz: "kamdan-kam", category: "IC3 Words" },
  { en: "always", uz: "har doim", category: "IC3 Words" },
  { en: "never", uz: "hech qachon", category: "IC3 Words" },
  { en: "sometimes", uz: "ba’zida", category: "IC3 Words" },
  { en: "usually", uz: "odatda", category: "IC3 Words" },
  { en: "often", uz: "ko‘pincha", category: "IC3 Words" },
  { en: "occasionally", uz: "vaqti-vaqti bilan", category: "IC3 Words" },
  { en: "regularly", uz: "muntazam", category: "IC3 Words" },
  { en: "constantly", uz: "doimiy", category: "IC3 Words" },
  { en: "continuously", uz: "uzluksiz", category: "IC3 Words" },
  { en: "immediately", uz: "darhol", category: "IC3 Words" },
  { en: "eventually", uz: "oxir-oqibat", category: "IC3 Words" },
  { en: "finally", uz: "nihoyat", category: "IC3 Words" },
  { en: "initially", uz: "dastlab", category: "IC3 Words" },
  { en: "previously", uz: "avval", category: "IC3 Words" },
  { en: "previously", uz: "oldingi", category: "IC3 Words" },
  { en: "currently", uz: "hozir", category: "IC3 Words" },
  { en: "recently", uz: "yaqinda", category: "IC3 Words" },
  { en: "previously", uz: "ilgari", category: "IC3 Words" },
  { en: "subsequently", uz: "keyin", category: "IC3 Words" },
  { en: "consequently", uz: "natijada", category: "IC3 Words" },
  { en: "therefore", uz: "shuning uchun", category: "IC3 Words" },
  { en: "however", uz: "ammo", category: "IC3 Words" },
  { en: "otherwise", uz: "aks holda", category: "IC3 Words" },
  { en: "instead", uz: "o‘rniga", category: "IC3 Words" },
  { en: "rather", uz: "aksincha", category: "IC3 Words" },
  { en: "besides", uz: "bundan tashqari", category: "IC3 Words" },
  { en: "moreover", uz: "bundan tashqari", category: "IC3 Words" },
  { en: "furthermore", uz: "qolaversa", category: "IC3 Words" },
  { en: "additionally", uz: "qo‘shimcha", category: "IC3 Words" },
  { en: "conversely", uz: "aksincha", category: "IC3 Words" },
  { en: "similarly", uz: "o‘xshash", category: "IC3 Words" },
  { en: "likewise", uz: "xuddi shunday", category: "IC3 Words" },

  // ========== OT/ISMLAR ==========
  { en: "user", uz: "foydalanuvchi", category: "IC3 Words" },
  { en: "owner", uz: "egasi", category: "IC3 Words" },
  { en: "creator", uz: "yaratuvchi", category: "IC3 Words" },
  { en: "author", uz: "muallif", category: "IC3 Words" },
  { en: "publisher", uz: "nashriyot", category: "IC3 Words" },
  { en: "developer", uz: "ishlab chiquvchi", category: "IC3 Words" },
  { en: "administrator", uz: "administrator", category: "IC3 Words" },
  { en: "manager", uz: "menejer", category: "IC3 Words" },
  { en: "operator", uz: "operator", category: "IC3 Words" },
  { en: "technician", uz: "texnik", category: "IC3 Words" },
  { en: "expert", uz: "mutaxassis", category: "IC3 Words" },
  { en: "beginner", uz: "yangi boshlovchi", category: "IC3 Words" },
  { en: "student", uz: "talaba", category: "IC3 Words" },
  { en: "teacher", uz: "o‘qituvchi", category: "IC3 Words" },
  { en: "employee", uz: "xodim", category: "IC3 Words" },
  { en: "employer", uz: "ish beruvchi", category: "IC3 Words" },
  { en: "customer", uz: "mijoz", category: "IC3 Words" },
  { en: "client", uz: "mijoz", category: "IC3 Words" },
  { en: "visitor", uz: "tashrifchi", category: "IC3 Words" },
  { en: "guest", uz: "mehmon", category: "IC3 Words" },
  { en: "member", uz: "a’zo", category: "IC3 Words" },
  { en: "participant", uz: "ishtirokchi", category: "IC3 Words" },
  { en: "audience", uz: "tomoshabin", category: "IC3 Words" },
  { en: "viewer", uz: "ko‘ruvchi", category: "IC3 Words" },
  { en: "reader", uz: "o‘quvchi", category: "IC3 Words" },
  { en: "listener", uz: "tinglovchi", category: "IC3 Words" },
  { en: "sender", uz: "yuboruvchi", category: "IC3 Words" },
  { en: "receiver", uz: "qabul qiluvchi", category: "IC3 Words" },
  { en: "recipient", uz: "oluvchi", category: "IC3 Words" },
  { en: "device", uz: "qurilma", category: "IC3 Words" },
  { en: "equipment", uz: "uskuna", category: "IC3 Words" },
  { en: "tool", uz: "asbob", category: "IC3 Words" },
  { en: "instrument", uz: "vosita", category: "IC3 Words" },
  { en: "machine", uz: "mashina", category: "IC3 Words" },
  { en: "system", uz: "tizim", category: "IC3 Words" },
  { en: "component", uz: "komponent", category: "IC3 Words" },
  { en: "part", uz: "qism", category: "IC3 Words" },
  { en: "piece", uz: "bo‘lak", category: "IC3 Words" },
  { en: "element", uz: "element", category: "IC3 Words" },
  { en: "feature", uz: "xususiyat", category: "IC3 Words" },
  { en: "function", uz: "funksiya", category: "IC3 Words" },
  { en: "capability", uz: "qobiliyat", category: "IC3 Words" },
  { en: "ability", uz: "qobiliyat", category: "IC3 Words" },
  { en: "option", uz: "variant", category: "IC3 Words" },
  { en: "choice", uz: "tanlov", category: "IC3 Words" },
  { en: "setting", uz: "sozlama", category: "IC3 Words" },
  { en: "configuration", uz: "konfiguratsiya", category: "IC3 Words" },
  { en: "preference", uz: "afzallik", category: "IC3 Words" },
  { en: "requirement", uz: "talab", category: "IC3 Words" },
  { en: "condition", uz: "shart", category: "IC3 Words" },
  { en: "rule", uz: "qoida", category: "IC3 Words" },
  { en: "policy", uz: "siyosat", category: "IC3 Words" },
  { en: "guideline", uz: "ko‘rsatma", category: "IC3 Words" },
  { en: "instruction", uz: "ko‘rsatma", category: "IC3 Words" },
  { en: "direction", uz: "yo‘nalish", category: "IC3 Words" },
  { en: "step", uz: "qadam", category: "IC3 Words" },
  { en: "process", uz: "jarayon", category: "IC3 Words" },
  { en: "procedure", uz: "protsedura", category: "IC3 Words" },
  { en: "method", uz: "usul", category: "IC3 Words" },
  { en: "technique", uz: "texnika", category: "IC3 Words" },
  { en: "strategy", uz: "strategiya", category: "IC3 Words" },
  { en: "approach", uz: "yondashuv", category: "IC3 Words" },
  { en: "solution", uz: "yechim", category: "IC3 Words" },
  { en: "answer", uz: "javob", category: "IC3 Words" },
  { en: "response", uz: "javob", category: "IC3 Words" },
  { en: "result", uz: "natija", category: "IC3 Words" },
  { en: "outcome", uz: "natija", category: "IC3 Words" },
  { en: "effect", uz: "ta’sir", category: "IC3 Words" },
  { en: "impact", uz: "ta’sir", category: "IC3 Words" },
  { en: "consequence", uz: "oqibat", category: "IC3 Words" },
  { en: "benefit", uz: "foyda", category: "IC3 Words" },
  { en: "advantage", uz: "afzallik", category: "IC3 Words" },
  { en: "disadvantage", uz: "kamchilik", category: "IC3 Words" },
  { en: "risk", uz: "xavf", category: "IC3 Words" },
  { en: "threat", uz: "tahdid", category: "IC3 Words" },
  { en: "danger", uz: "xavf", category: "IC3 Words" },
  { en: "issue", uz: "muammo", category: "IC3 Words" },
  { en: "problem", uz: "muammo", category: "IC3 Words" },
  { en: "error", uz: "xato", category: "IC3 Words" },
  { en: "mistake", uz: "xato", category: "IC3 Words" },
  { en: "failure", uz: "muvaffaqiyatsizlik", category: "IC3 Words" },
  { en: "success", uz: "muvaffaqiyat", category: "IC3 Words" },
  { en: "purpose", uz: "maqsad", category: "IC3 Words" },
  { en: "goal", uz: "maqsad", category: "IC3 Words" },
  { en: "objective", uz: "maqsad", category: "IC3 Words" },
  { en: "target", uz: "nishon", category: "IC3 Words" },
  { en: "reason", uz: "sabab", category: "IC3 Words" },
  { en: "cause", uz: "sabab", category: "IC3 Words" },
  { en: "source", uz: "manba", category: "IC3 Words" },
  { en: "origin", uz: "kelib chiqish", category: "IC3 Words" },
  { en: "example", uz: "misol", category: "IC3 Words" },
  { en: "sample", uz: "namuna", category: "IC3 Words" },
  { en: "instance", uz: "holat", category: "IC3 Words" },
  { en: "case", uz: "holat", category: "IC3 Words" },
  { en: "situation", uz: "vaziyat", category: "IC3 Words" },
  { en: "scenario", uz: "stsenariy", category: "IC3 Words" },
  { en: "context", uz: "kontekst", category: "IC3 Words" },
  { en: "environment", uz: "muhit", category: "IC3 Words" },
  { en: "background", uz: "fon", category: "IC3 Words" },
  { en: "detail", uz: "tafsilot", category: "IC3 Words" },
  { en: "information", uz: "ma’lumot", category: "IC3 Words" },
  { en: "data", uz: "ma’lumotlar", category: "IC3 Words" },
  { en: "content", uz: "kontent", category: "IC3 Words" },
  { en: "material", uz: "material", category: "IC3 Words" },
  { en: "resource", uz: "resurs", category: "IC3 Words" },
  { en: "source", uz: "manba", category: "IC3 Words" },
  { en: "reference", uz: "havola", category: "IC3 Words" },
  { en: "link", uz: "havola", category: "IC3 Words" },
  { en: "connection", uz: "ulanish", category: "IC3 Words" },
  { en: "access", uz: "kirish", category: "IC3 Words" },
  { en: "entry", uz: "kirish", category: "IC3 Words" },
  { en: "exit", uz: "chiqish", category: "IC3 Words" },
  { en: "way", uz: "yo‘l", category: "IC3 Words" },
  { en: "method", uz: "usul", category: "IC3 Words" },
  { en: "means", uz: "vosita", category: "IC3 Words" },
  { en: "medium", uz: "vositachi", category: "IC3 Words" },
  { en: "channel", uz: "kanal", category: "IC3 Words" },
  { en: "platform", uz: "platforma", category: "IC3 Words" },
  { en: "network", uz: "tarmoq", category: "IC3 Words" },
  { en: "internet", uz: "internet", category: "IC3 Words" },
  { en: "web", uz: "veb", category: "IC3 Words" },
  { en: "site", uz: "sayt", category: "IC3 Words" },
  { en: "page", uz: "sahifa", category: "IC3 Words" },
  { en: "document", uz: "hujjat", category: "IC3 Words" },
  { en: "file", uz: "fayl", category: "IC3 Words" },
  { en: "folder", uz: "papka", category: "IC3 Words" },
  { en: "directory", uz: "katalog", category: "IC3 Words" },
  { en: "location", uz: "joylashuv", category: "IC3 Words" },
  { en: "path", uz: "yo‘l", category: "IC3 Words" },
  { en: "name", uz: "nom", category: "IC3 Words" },
  { en: "title", uz: "sarlavha", category: "IC3 Words" },
  { en: "label", uz: "yorliq", category: "IC3 Words" },
  { en: "tag", uz: "teg", category: "IC3 Words" },
  { en: "key", uz: "kalit", category: "IC3 Words" },
  { en: "value", uz: "qiymat", category: "IC3 Words" },
  { en: "field", uz: "maydon", category: "IC3 Words" },
  { en: "box", uz: "quti", category: "IC3 Words" },
  { en: "window", uz: "oyna", category: "IC3 Words" },
  { en: "screen", uz: "ekran", category: "IC3 Words" },
  { en: "display", uz: "displey", category: "IC3 Words" },
  { en: "menu", uz: "menyu", category: "IC3 Words" },
  { en: "bar", uz: "panel", category: "IC3 Words" },
  { en: "toolbar", uz: "asboblar paneli", category: "IC3 Words" },
  { en: "button", uz: "tugma", category: "IC3 Words" },
  { en: "icon", uz: "ikonka", category: "IC3 Words" },
  { en: "symbol", uz: "belgi", category: "IC3 Words" },
  { en: "sign", uz: "ishora", category: "IC3 Words" },
  { en: "indicator", uz: "ko‘rsatkich", category: "IC3 Words" },
  { en: "message", uz: "xabar", category: "IC3 Words" },
  { en: "notification", uz: "bildirishnoma", category: "IC3 Words" },
  { en: "alert", uz: "ogohlantirish", category: "IC3 Words" },
  { en: "warning", uz: "ogohlantirish", category: "IC3 Words" },
  { en: "error", uz: "xato", category: "IC3 Words" },
  { en: "success", uz: "muvaffaqiyat", category: "IC3 Words" },
  { en: "status", uz: "holat", category: "IC3 Words" },
  { en: "progress", uz: "jarayon", category: "IC3 Words" },
  { en: "time", uz: "vaqt", category: "IC3 Words" },
  { en: "date", uz: "sana", category: "IC3 Words" },
  { en: "duration", uz: "davomiylik", category: "IC3 Words" },
  { en: "period", uz: "davr", category: "IC3 Words" },
  { en: "frequency", uz: "chastota", category: "IC3 Words" },
  { en: "speed", uz: "tezlik", category: "IC3 Words" },
  { en: "rate", uz: "daraja", category: "IC3 Words" },
  { en: "amount", uz: "miqdor", category: "IC3 Words" },
  { en: "number", uz: "raqam", category: "IC3 Words" },
  { en: "quantity", uz: "miqdor", category: "IC3 Words" },
  { en: "size", uz: "hajm", category: "IC3 Words" },
  { en: "length", uz: "uzunlik", category: "IC3 Words" },
  { en: "width", uz: "kenglik", category: "IC3 Words" },
  { en: "height", uz: "balandlik", category: "IC3 Words" },
  { en: "depth", uz: "chuqurlik", category: "IC3 Words" },
  { en: "weight", uz: "og‘irlik", category: "IC3 Words" },
  { en: "volume", uz: "hajm", category: "IC3 Words" },
  { en: "space", uz: "joy", category: "IC3 Words" },
  { en: "area", uz: "maydon", category: "IC3 Words" },
  { en: "range", uz: "oralig‘", category: "IC3 Words" },
  { en: "limit", uz: "chegara", category: "IC3 Words" },
  { en: "boundary", uz: "chegara", category: "IC3 Words" },
  { en: "level", uz: "daraja", category: "IC3 Words" },
  { en: "degree", uz: "daraja", category: "IC3 Words" },
  { en: "standard", uz: "standart", category: "IC3 Words" },
  { en: "quality", uz: "sifat", category: "IC3 Words" },
  { en: "quantity", uz: "miqdor", category: "IC3 Words" },
  { en: "price", uz: "narx", category: "IC3 Words" },
  { en: "cost", uz: "xarajat", category: "IC3 Words" },
  { en: "value", uz: "qiymat", category: "IC3 Words" },
  { en: "worth", uz: "qimmat", category: "IC3 Words" }



];

// -------------------- FULL GLOSSARY (SIZ O'ZINGIZ YOZASIZ) --------------------
// const fullGlossary = [ ... ]; // Siz shu yerga o'z atamalaringizni yozasiz

// -------------------- KATEGORIYALAR --------------------
// -------------------- KATEGORIYALAR (fullGlossary ga moslashtirilgan) --------------------
const categories = [
  { id: "IC3 Hardware", name: "Apparat ta'minoti", icon: "💻" },
  { id: "IC3 Software", name: "Dasturiy ta'minot", icon: "🖥️" },
  { id: "IC3 Network", name: "Tarmoq", icon: "🌐" },
  { id: "IC3 Security", name: "Xavfsizlik", icon: "🔒" },
  { id: "IC3 OS", name: "Operatsion tizim", icon: "⚙️" },
  { id: "IC3 Internet", name: "Internet va web", icon: "🌍" },
  { id: "IC3 Printing", name: "Chop etish", icon: "🖨️" },
  { id: "IC3 Communication", name: "Muloqot", icon: "💬" },
  { id: "IC3 Health", name: "Salomatlik", icon: "❤️" },
  { id: "IC3 Collaboration", name: "Hamkorlik", icon: "🤝" },
  { id: "IC3 Legal", name: "Huquqiy masalalar", icon: "⚖️" },
  { id: "IC3 Research", name: "Tadqiqot", icon: "🔍" },
  { id: "IC3 Cloud", name: "Bulutli texnologiyalar", icon: "☁️" },
  { id: "IC3 AI", name: "Sun'iy intellekt", icon: "🤖" },
  { id: "IC3 General", name: "Umumiy tushunchalar", icon: "📚" },
  { id: "IC3 Words", name: "So'zlar lug'ati", icon: "📖" }
];

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
let loginBtn, username, password, fish, loginError, logoutBtn, loggedUser;
let backBtn, resetTestBtn, showResultsBtn, prevBtn, nextBtn;
let closeResultsBtn, retryBtn, homeBtn;
let categoryContainer, testCategoryTitle, testProgress;
let currentQuestionType, currentQuestionNumber, questionText, optionsContainer;
let totalQuestions, answeredQuestions, remainingQuestions, correctAnswers, wrongAnswers, percentageScore;
let questionNavButtons;
let resultPercentage, resultTotal, resultCorrect, resultWrong, resultUnanswered, resultGrade, resultMessage;
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
  username.addEventListener("keypress", (e) => e.key === "Enter" && handleLogin());
  password.addEventListener("keypress", (e) => e.key === "Enter" && handleLogin());

  logoutBtn.addEventListener("click", handleLogout);
  backBtn.addEventListener("click", handleBack);
  resetTestBtn.addEventListener("click", resetCurrentQuiz);
  showResultsBtn.addEventListener("click", showResults);
  prevBtn.addEventListener("click", () => navigateQuestion(-1));
  nextBtn.addEventListener("click", () => navigateQuestion(1));

  closeResultsBtn.addEventListener("click", () => (resultsModal.style.display = "none"));
  retryBtn.addEventListener("click", handleRetry);
  homeBtn.addEventListener("click", handleHome);

  window.addEventListener("click", (e) => {
    if (e.target === resultsModal) resultsModal.style.display = "none";
    if (e.target === blockModal) blockModal.style.display = "none";
  });

  // Kategoriyalardagi atamalar sonini hisoblash (fullGlossary mavjud bo'lganda ishlaydi)
  if (typeof fullGlossary !== 'undefined' && fullGlossary.length > 0) {
    categories.forEach((cat) => {
      cat.count = fullGlossary.filter((t) => t.category === cat.id).length;
    });
    updateDashboard();
    renderCategories();
  } else {
    console.log("Iltimos, fullGlossary ni to'ldiring!");
  }
});

// -------------------- LOGIN HANDLER --------------------
function handleLogin() {
  const user = username.value.trim();
  const pass = password.value.trim();
  const fi = fish ? fish.value.trim() : "";

  if (!user || !pass) {
    loginError.textContent = "Ma'lumotlarni to'liq kiriting!";
    return;
  }

  if (blockUntil && new Date() < blockUntil) {
    const seconds = Math.ceil((blockUntil - new Date()) / 1000);
    showBlockModal(seconds);
    return;
  }

  const VALID_USERNAME = "IC3GS6";
  const VALID_PASSWORD = "lugat600";

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
  if (fish) fish.value = "";
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
  if (timer) timer.textContent = remaining;

  if (blockTimer) clearInterval(blockTimer);

  blockTimer = setInterval(() => {
    remaining--;
    if (timer) timer.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(blockTimer);
      blockModal.style.display = "none";
    }
  }, 1000);
}

// -------------------- DASHBOARD --------------------
function updateDashboard() {
  const totalTermsEl = document.getElementById("totalTerms");
  const totalCategoriesEl = document.getElementById("totalCategories");
  
  if (totalTermsEl && typeof fullGlossary !== 'undefined') {
    totalTermsEl.textContent = fullGlossary.length;
  }
  if (totalCategoriesEl) totalCategoriesEl.textContent = categories.length;
  if (completedTestsSpan) completedTestsSpan.textContent = completedTests;

  const avg = completedTests > 0 ? Math.round(totalScore / completedTests) : 0;
  if (avgScoreSpan) avgScoreSpan.textContent = avg + "%";
}

// -------------------- KATEGORIYALARNI CHIZISH --------------------
function renderCategories() {
  if (!categoryContainer) return;
  categoryContainer.innerHTML = "";

  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";
    
    const count = (typeof fullGlossary !== 'undefined') ? (fullGlossary.filter((t) => t.category === cat.id).length || 0) : 0;
    
    card.innerHTML = `
      <div class="category-icon">${cat.icon}</div>
      <span class="category-name">${cat.name}</span>
      <span class="category-count">${count} ta atama</span>
    `;

    card.addEventListener("click", () => loadCategoryTest(cat.id));
    categoryContainer.appendChild(card);
  });
}

// -------------------- TESTNI YUKLASH --------------------
function loadCategoryTest(categoryId) {
  if (typeof fullGlossary === 'undefined') {
    alert("Iltimos, avval fullGlossary ni to'ldiring!");
    return;
  }
  
  currentCategory = categories.find((c) => c.id === categoryId);
  if (!currentCategory) return;

  const categoryTerms = fullGlossary.filter((t) => t.category === categoryId);
  
  if (categoryTerms.length === 0) {
    alert("Bu kategoriyada hali atamalar mavjud emas!");
    return;
  }

  // 10 ta savol generatsiya qilish (ko'pi bilan 20)
  // const questionCount = Math.min(categoryTerms.length, 10);
  const questionCount = categoryTerms.length;  // 70 ta atama bo'lsa 70 ta savol
  currentQuestions = generateQuestions(categoryTerms, questionCount);

  currentIndex = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  score = 0;

  mainSection.style.display = "none";
  testSection.style.display = "block";
  testCategoryTitle.innerHTML = `${currentCategory.icon} ${currentCategory.name}`;

  renderQuestion();
}

// -------------------- SAVOLLARNI GENERATSIYA QILISH --------------------
function generateQuestions(terms, count) {
  const questions = [];
  const shuffled = [...terms].sort(() => Math.random() - 0.5);
  
  const questionCount = Math.min(count, shuffled.length);

  for (let i = 0; i < questionCount; i++) {
    const term = shuffled[i];

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
    .filter((v, i, a) => a.indexOf(v) === i) // unique qilish
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
    .filter((v, i, a) => a.indexOf(v) === i) // unique qilish
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
  if (!currentQuestions.length) return;
  
  const q = currentQuestions[currentIndex];
  const selected = userAnswers[currentIndex];

  currentQuestionType.innerHTML = q.type === "en2uz"
    ? "🇬🇧 Inglizcha → 🇺🇿 O'zbekcha"
    : "🇺🇿 O'zbekcha → 🇬🇧 Inglizcha";

  currentQuestionNumber.innerHTML = `Savol ${currentIndex + 1} / ${currentQuestions.length}`;
  testProgress.innerHTML = `${currentIndex + 1} / ${currentQuestions.length}`;
  questionText.innerHTML = q.question;

  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    const optionDiv = document.createElement("div");
    optionDiv.className = `option-item ${selected === opt ? "selected" : ""}`;
    
    if (selected) {
      optionDiv.classList.add("disabled");
      if (opt === q.correct) optionDiv.classList.add("correct");
      if (selected === opt && opt !== q.correct) optionDiv.classList.add("wrong");
    }

    optionDiv.innerHTML = `<span class="option-prefix">${letter}</span><span>${opt}</span>`;

    if (!selected) {
      optionDiv.addEventListener("click", () => selectAnswer(opt));
    }

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentQuestions.length - 1;

  const answered = userAnswers.filter((a) => a !== null).length;
  showResultsBtn.style.display = answered === currentQuestions.length ? "block" : "none";

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
  if (!questionNavButtons) return;
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

  completedTests++;
  totalScore += percent;
  updateDashboard();

  resultsModal.style.display = "flex";
}

// -------------------- TESTNI QAYTA BOSHLASH --------------------
function resetCurrentQuiz() {
  if (!currentCategory) return;

  const terms = fullGlossary.filter((t) => t.category === currentCategory.id);
  const questionCount = Math.min(terms.length, 10);
  currentQuestions = generateQuestions(terms, questionCount);
  currentIndex = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  score = 0;

  renderQuestion();
}