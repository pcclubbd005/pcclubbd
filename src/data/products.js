// Placeholder photos. Replace `img` with a real URL or a file in /public/images (e.g. '/images/dome-cam.jpg').
const ph = (t) =>
  'https://placehold.co/480x360/E3E8EC/10212B.png?text=' + encodeURIComponent(t.replace(/ /g, '\n'));

export const CATEGORIES = [
  'IP Camera',
  'Camera Accessories',
  'Server & Storage',
  'Networking',
  'Access Control',
  'Computer',
  'PBX',
];

// Sample data: replace names and prices with real stock.
const RAW = [
  { id: 1, n: '4MP Dome IP Camera', c: 'IP Camera', p: 6800, o: 7500, s: 'PoE, night vision, indoor and outdoor.', img: '/hello_ecomm2/shopimgs/dom_cam.webp', },
  { id: 2, n: '5MP Bullet IP Camera', c: 'IP Camera', p: 7900, s: 'Weatherproof, 30 m IR range, PoE.', img: '/hello_ecomm2/shopimgs/bullet_cam.webp', },
  { id: 3, n: '4-Camera CCTV Kit', c: 'IP Camera', p: 24500, o: 27000, s: '4 cameras, recorder and 1 TB disk. Installation quoted separately.', img: '/hello_ecomm2/shopimgs/cctv_kit.webp', },
  { id: 4, n: '8-Channel 4K NVR', c: 'Server & Storage', p: 12900, s: 'Records 8 IP cameras, HDMI out, mobile viewing.', img: '/hello_ecomm2/shopimgs/nvr.webp', },
  { id: 5, n: 'Tower Server Xeon 32GB', c: 'Server & Storage', p: 118000, o: 128000, s: 'Xeon CPU, 32 GB RAM, RAID-ready for office file and app servers.', img: '/hello_ecomm2/shopimgs/tower_server.webp', },
  { id: 6, n: 'Netgear 24-Port Gigabit Switch', c: 'Networking', p: 14500, s: 'Rack-mount managed switch for office networks.', img: '/hello_ecomm2/shopimgs/switch.webp', },
  { id: 7, n: 'Cisco Dual-WAN Router', c: 'Networking', p: 21000, s: 'Two internet lines, VPN and firewall.' },
  { id: 8, n: 'Wi-Fi 6 Ceiling Access Point', c: 'Networking', p: 8900, s: 'Dual-band, PoE, covers about 150 sq m.' },
  { id: 9, n: 'Fingerprint Attendance Terminal', c: 'Access Control', p: 9800, s: 'Fingerprint and card, reports exported to Excel.' },
  { id: 10, n: 'Smart Fingerprint Door Lock', c: 'Access Control', p: 15500, o: 17000, s: 'Fingerprint, PIN and key backup.' },
  { id: 11, n: 'Core i5 Office Desktop', c: 'Computer', p: 52000, s: '16 GB RAM, 512 GB SSD, monitor included.' },
  { id: 12, n: '14-inch Business Laptop', c: 'Computer', p: 68000, o: 72000, s: 'Core i5, 16 GB RAM, 512 GB SSD.' },
  { id: 13, n: '8-Line IP PBX', c: 'PBX', p: 28000, s: 'Office phone system with extensions and call recording.' },
  { id: 14, n: 'CAT6 Cable 305 m Box', c: 'Camera Accessories', p: 9200, s: 'Pure copper, for camera and network runs.' },
  { id: 15, n: '12V Camera Power Supply', c: 'Camera Accessories', p: 850, s: '12V 5A, steady power for analog and IP cameras.' },
];

export const PRODUCTS = RAW.map((x) => ({ ...x, img: x.img || ph(x.n) }));

export const RACK = [
  ['CCTV and IP cameras', 'IP Camera'],
  ['Servers and storage', 'Server & Storage'],
  ['Networking and Wi-Fi', 'Networking'],
  ['Biometric and access control', 'Access Control'],
  ['PCs and laptops', 'Computer'],
  ['PBX and phone lines', 'PBX'],
];
