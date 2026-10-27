const IMAGE_DIR = "/shopimgs";
// Images are expected to be named after the product model, e.g.
// public/shopimgs/NVR301-08S3.webp
const imageFor = (model) => `${IMAGE_DIR}/${model}.webp`;




const RAW = [
  // NVR
  { n: "Uniview 8CH 4K NVR", model: "NVR301-08S3", c: "Server & Storage", p: 7000, s: "8-channel 4K NVR, ONVIF/RTSP support, HDMI/VGA output and 1 SATA HDD up to 8TB. 1-year warranty.", img: "/shopimgs/NVR301-08S3.jpg" },
  { n: "Uniview 8CH PoE NVR", model: "NVR301-08S3-P8", c: "Server & Storage", p: 11200, s: "8-channel NVR with 8 PoE ports, 4K HDMI output and HDD support up to 8TB. 1-year warranty.", img: "/shopimgs/NVR301-08S3-P8.jpg" },
  { n: "Uniview 16CH 4K NVR", model: "NVR301-16S3", c: "Server & Storage", p: 10400, s: "16-channel 4K NVR with HDMI/VGA output and ONVIF/RTSP support. 1-year warranty.", img: "/shopimgs/NVR301-16S3.jpg" },
  { n: "Uniview 16CH 4K Smart NVR", model: "NVR302-16B-IQ", c: "Server & Storage", p: 15500, s: "16-channel NVR, 160Mbps incoming bandwidth, dual SATA support, AcuSearch and AcuTrack. 1-year warranty.", img: "/shopimgs/NVR302-16B-IQ.jpg" },
  { n: "Uniview 16CH 4K NVR", model: "NVR304-16B-IQ", c: "Server & Storage", p: null, s: "16-channel NVR with 4 SATA HDD support, up to 40TB total storage. Contact us for current price.", img: "/shopimgs/NVR304-16B-IQ.jpg" },
  { n: "Uniview 32CH 4K Smart NVR", model: "NVR302-32B-IQ", c: "Server & Storage", p: 19000, s: "32-channel NVR with 160Mbps incoming bandwidth and AcuSearch/AcuTrack support. 1-year warranty.", img: "/shopimgs/NVR302-32B-IQ.jpg" },
  { n: "Uniview 32CH 4K NVR", model: "NVR304-32B-IQ", c: "Server & Storage", p: 28500, s: "32-channel NVR with 4 SATA HDD support and up to 40TB total storage. 1-year warranty.", img: "/shopimgs/NVR304-32B-IQ.png" },
  { n: "Uniview 64CH 4K NVR", model: "NVR508-64B", c: "Server & Storage", p: 62000, s: "64-channel NVR, 320Mbps incoming bandwidth, 8 SATA bays and N+1 hot spare support. 2-year warranty.", img: "/shopimgs/NVR508-64B.jpg" },
  { n: "Uniview 64CH 4K Smart NVR", model: "NVR508-64E-R-IQ", c: "Server & Storage", p: null, s: "64-channel smart NVR with RAID 0/1/5/6/10 and 8 SATA bays. Contact us for current price.", img: "/shopimgs/NVR508-64E-R-IQ.jpg" },

  // IP Cameras — Bullet
  { n: "2MP Network IR Mini Bullet Camera", model: "IPC2122LB-SF40-A", c: "IP Camera", p: 3250, s: "Metal/plastic housing, Smart IR up to 30m, Ultra 265/H.265/H.264 and 4KV surge protection. 1-year warranty.", img: "/shopimgs/IPC2122LB-SF40-A.jpg" },
  { n: "2MP Network IR Mini Bullet Camera", model: "IPC2122LB-CL-P", c: "IP Camera", p: 3550, s: "4mm lens, Smart IR up to 40m and Ultra 265/H.265/H.264 video formats. 1-year warranty.", img: "/shopimgs/IPC2122LB-CL-P.jpg" },
  { n: "2MP HD WDR Fixed IR Bullet Camera", model: "IPC2122LB-ADF40KM-G", c: "IP Camera", p: 4900, s: "Metal housing, built-in microphone, microSD support up to 128GB and IP67 protection. 1-year warranty." },
  { n: "2MP Dual-Light Bullet Network Camera", model: "IPC2312LB-AF40-DL-A1", c: "IP Camera", p: 3600, s: "Dual-light camera with IR up to 50m, warm light up to 15m, built-in microphone and IP67 protection. 1-year warranty." },
  { n: "2MP Fixed Dual-Light Bullet Camera", model: "IPC2122LB-AF40K-DL2", c: "IP Camera", p: 4200, s: "Dual-light camera, IR up to 30m, built-in microphone, microSD support up to 512GB and IP67 protection. 1-year warranty." },
  { n: "2MP OwlView Wise-ISP Bullet Camera", model: "IPC2312LE-ADF40K-WP-L", c: "IP Camera", p: 5000, s: "Warm-light bullet camera with built-in microphone, microSD support up to 512GB, IP67 and reset button. 1-year warranty." },
  { n: "2MP Network IR Bullet Camera", model: "IPC222ER-F36", c: "IP Camera", p: 4500, s: "Metal housing, triple streams, corridor format, low-light surveillance and two-way audio support. 1-year warranty." },
  { n: "2MP Varifocal Network IR Bullet Camera", model: "IPC2322EBR-P", c: "IP Camera", p: 10500, s: "Varifocal 2.8–12mm lens, microSD support up to 128GB and two-way audio. 1-year warranty." },
  { n: "4MP Mini Fixed Bullet Camera", model: "IPC2124LB-SF40-A", c: "IP Camera", p: 5200, s: "Smart IR up to 30m, IP67, digital defog and 4KV surge protection. 1-year warranty." },
  { n: "4MP Mini Fixed Bullet Camera", model: "IPC2124LB-CL-P", c: "IP Camera", p: 6450, s: "Metal/plastic housing, 4mm lens, Smart IR up to 40m, IP67 and digital defog. 1-year warranty." },
  { n: "4MP Mini Fixed Bullet Camera", model: "IPC2124LR3-PF40M-D", c: "IP Camera", p: 4000, s: "Metal housing, Smart IR, IP67 protection, digital defog and 2KV surge protection. 1-year warranty." },
  { n: "4MP SD Card Network IR Mini Bullet Camera", model: "IPC2124SR3-ADPF40M-F", c: "IP Camera", p: 7500, s: "Built-in microphone, microSD support up to 256GB, Smart IR up to 30m and IP67. 1-year warranty." },
  { n: "4MP ColorHunter Dual-Light Bullet Camera", model: "IPC2124LB-AF40K-DL2", c: "IP Camera", p: 5500, s: "ColorHunter/dual-light bullet camera. See model specifications for lens, lighting and storage details. 1-year warranty." },
  { n: "4MP OwlView Wise-ISP Bullet Camera", model: "IPC2314LE-ADF40K-WP-L", c: "IP Camera", p: 7200, s: "Wise-ISP bullet camera with warm light and weather-resistant design. 1-year warranty." },
  { n: "5MP Fixed Bullet Network Camera", model: "IPC2125LB-AF40-A2", c: "IP Camera", p: 5600, s: "5MP network bullet camera for IP surveillance. 1-year warranty." },
  { n: "4MP ColorHunter Bullet Camera", model: "IPC245LP-ADF40KC-WP", c: "IP Camera", p: 9200, s: "ColorHunter bullet network camera for detailed surveillance. 1-year warranty." },

  // IP Cameras — Turret / Dome
  { n: "2MP Network IR Turret Camera", model: "IPC3612LB-SF28-A", c: "IP Camera", p: 3250, s: "2MP fixed turret network camera for indoor/outdoor IP surveillance. 1-year warranty." },
  { n: "2MP Dual-Light Turret Camera", model: "IPC3612LB-AF28-DL-A1", c: "IP Camera", p: 3800, s: "2MP turret camera with dual-light surveillance. 1-year warranty." },
  { n: "2MP Fixed Dual-Light Turret Camera", model: "IPC3612LB-AF28K-DL2", c: "IP Camera", p: 4200, s: "2MP turret camera with dual-light functionality. 1-year warranty." },
  { n: "2MP OwlView Turret Camera", model: "IPC3622LE-ADF28K-WP-L", c: "IP Camera", p: 5000, s: "2MP OwlView network turret camera for IP surveillance. 1-year warranty." },
  { n: "2MP Network Dome Camera", model: "IPC3612ER3-PF40-B / IPC3612SR3-PF36", c: "IP Camera", p: 4350, s: "2MP network dome camera. Confirm the exact model variant when ordering. 1-year warranty." },
  { n: "2MP Network Dome Camera", model: "IPC3232ER-VS", c: "IP Camera", p: 9500, s: "2MP network dome camera for professional surveillance. 1-year warranty." },
  { n: "2MP Network Dome Camera", model: "IPC322SR3-DVSPF40-B", c: "IP Camera", p: 7000, s: "Network dome camera for IP surveillance. 1-year warranty." },
  { n: "2MP Network Dome Camera", model: "IPC322ER3-DVPF36", c: "IP Camera", p: 7900, s: "Network dome camera for IP surveillance. 1-year warranty." },
  { n: "4MP Network IR Turret Camera", model: "IPC3614LB-SF28-A", c: "IP Camera", p: 5200, s: "4MP fixed turret camera for clear IP surveillance. 1-year warranty." },
  { n: "4MP Network Dome Camera", model: "IPC324ER3-DVPF36", c: "IP Camera", p: 9000, s: "4MP network dome camera for professional surveillance. 1-year warranty." },
  { n: "4MP Fixed Dual-Light Turret Camera", model: "IPC3614LB-AF28K-DL2", c: "IP Camera", p: 5500, s: "4MP turret camera with dual-light surveillance. 1-year warranty." },
  { n: "4MP OwlView Turret Camera", model: "IPC3624LE-ADF28K-WP-L", c: "IP Camera", p: 7200, s: "4MP OwlView network turret camera for IP surveillance. 1-year warranty." },
  { n: "5MP Fixed IR Turret Camera", model: "IPC3615LB-AF28-A2", c: "IP Camera", p: 5600, s: "Graphene/plastic housing, built-in microphone, IP67 and human-body detection 2.0. 1-year warranty." },
  { n: "5MP Fixed Dome Network Camera", model: "IPC3615LR3-PF28-D", c: "IP Camera", p: 6800, s: "Metal/plastic housing, Smart IR up to 30m, digital defog and 2KV surge protection. 1-year warranty." },

  // PTZ Cameras
  { n: "5MP 5X ColorHunter Tri-Guard PTZ Camera", model: "IPC6325LFW-AX5C-VG", c: "IP Camera", p: 18600, s: "5MP PTZ, 5X optical zoom, built-in microphone/speaker, microSD up to 512GB and IP66. 1-year warranty." },
  { n: "4MP+4MP Dual-Lens PTZ Camera", model: "IPC94144SFW-X25-F40C", c: "IP Camera", p: 55800, s: "Dual-lens PTZ camera with 25X optical zoom, auto tracking, speaker and microSD support. 2-year warranty." },
  { n: "4MP 33X Lighthunter IR PTZ Camera", model: "IPC6624SR-X33-VF", c: "IP Camera", p: 88000, s: "33X optical zoom, IR up to 150m, auto tracking, microSD up to 512GB and heater support. 2-year warranty." },

  // PoE Switches
  { n: "Uniview 4-Port PoE + 2-Port Uplink Switch", model: "NSW2010-6T-POE-S-IN", c: "Networking", p: 2900, s: "6 network ports including 4 PoE ports, 60W total PoE capacity and VLAN/extend modes. 1-year warranty." },
  { n: "Uniview 8-Port PoE + 2-Port Uplink Switch", model: "NSW2010-10T-POE-S-IN", c: "Networking", p: 4200, s: "10 network ports including 8 PoE ports, 96W total PoE capacity and VLAN/extend modes. 1-year warranty." },
  { n: "Uniview 16-Port PoE + 2G Combo Switch", model: "NSW2010-16T2GC-POE-IN", c: "Networking", p: 14500, s: "16 PoE ports, 2 Gigabit combo ports, 250W PoE capacity and two cooling fans. 1-year warranty." },
  { n: "Uniview 16-Port Gigabit Cloud PoE Switch", model: "NSW2100-17GT1GP1GC-POE-IN", c: "Networking", p: 18900, s: "16 Gigabit PoE ports, Gigabit uplink/SFP connectivity, 250W PoE capacity and VLAN support. 1-year warranty." },
  { n: "Uniview 24-Port Cloud Managed Switch", model: "NSW3000-24T1GT1GC-POE-IN", c: "Networking", p: 21500, s: "24 PoE ports plus Gigabit uplink/combo connectivity, up to 370W PoE power and VLAN management. 1-year warranty." },

  // Monitors
  { n: 'Uniview 22-inch LED IPS FHD Monitor', model: "MW-LC22IS3", c: "Computer", p: 13500, s: "21.5-inch LED IPS display, up to 100Hz, 5ms response, 1920×1080 resolution, HDMI and VGA. 3-year warranty." },
  { n: 'Uniview 24-inch LED IPS FHD Monitor', model: "MW-LC24-C", c: "Computer", p: 15800, s: "23.8-inch LED IPS display, up to 100Hz, 5ms response, 1920×1080 resolution, HDMI and VGA. 3-year warranty." },

  // Smart Interactive Displays
  { n: 'Uniview 65-inch Smart Interactive Display', model: "MW3565-U-CE", c: "Computer", p: null, s: "65-inch 4K UHD interactive display with Android 13, 8GB RAM and 128GB eMMC. Contact us for current price. 3-year warranty." },
  { n: 'Uniview 75-inch Smart Interactive Display', model: "MW3575-U-CE", c: "Computer", p: 400000, s: "75-inch 4K UHD interactive display with Android 13, 8GB RAM and 128GB eMMC. 3-year warranty." },
  { n: 'Uniview 86-inch Smart Interactive Display', model: "MW3586-U-CE", c: "Computer", p: null, s: "86-inch 4K UHD interactive display with Android 13, 8GB RAM and 128GB eMMC. Contact us for current price. 3-year warranty." },
  { n: "Uniview Core i7 Pluggable PC Module", model: "HB-7099-SW", c: "Computer", p: 84500, s: "Core i7-12650H, 8GB DDR4 RAM, 256GB SSD and WLAN. Windows is not activated. 1-year warranty." },

  // Accessories
  { n: "Uniview Cat6 UTP Cable", model: "CAB-LC3100A-E-IN", c: "Camera Accessories", p: null, s: "UL-certified Cat6 UTP cable. Contact us for current price." },
  { n: "Uniview Cat6 CCA Orange Cable", model: "CAB-LC3100B-CCA-IN", c: "Camera Accessories", p: 8800, s: "Cat6 CCA orange cable for network installations." },
  { n: "Uniview IP PTZ Camera Control Keyboard", model: "KB-1100", c: "Camera Accessories", p: null, s: "LCD display, four-dimensional joystick, multi-device support and Ethernet connectivity. Contact us for current price." },
  { n: "Uniview PTZ Dome Wall Mount", model: "TR-WE45-IN", c: "Camera Accessories", p: null, s: "Aluminium alloy wall mount for PTZ dome cameras. Contact us for current price." },
  { n: "Uniview PTZ Dome Wall Mount", model: "TR-WE45-A-IN", c: "Camera Accessories", p: 4500, s: "Aluminium alloy wall mount for PTZ dome cameras." },
  { n: "Uniview 12V 1A AC/DC Power Adapter", model: "PWR-DC1201B-EU", c: "Camera Accessories", p: 280, s: "AC 100–240V input, DC 12V/1A output and 1.2m DC5521 cable." },
];

export const PRODUCTS = RAW.map((product) => ({
  id: product.model,
  ...product,
  brand: "Uniview",
  img: product.img || imageFor(product.model),
}));

export const CATEGORIES = [
  "IP Camera",
  "Camera Accessories",
  "Server & Storage",
  "Networking",
  "Access Control",
  "Computer",
  "IP PBX",
];

export const RACK = CATEGORIES.map((category) => ({
  name: category,
  href: `/shop?category=${encodeURIComponent(category)}`,
}));
