const Product = require("../models/Product");

const products = [
    {
        _id: "65a7e45902e12c44f599444e",
        title: "MSI Cyborg Gaming 15 AI A1VFK – Ultra 7",
        description: "Intel Core Ultra 7 155H Processor\n" +
            "1TB M.2 NVME GEN4 SSD\n" +
            "16GB DDR5 4800MHZ RAM\n" +
            "15.6″ FHD (1920*1080), 144Hz, IPS Display\n" +
            "8GB Nvidia GeForce RTX 4060 GDDR6 Graphics\n" +
            "4-Zone RGB Gaming Keyboard\n" +
            "Windows11 Home",
        price: 1500,
        discountPercentage: 10,
        stockQuantity: 100,
        brand: "65a7e20102e12c44f59943e0", // MSI
        category: "65a7e24602e12c44f5994433", // Gaming Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f599444f",
        title: "Asus TUF Gaming F15 FX507VV- i7",
        description: "Intel Core i7 – 13620H Processor\n" +
            "512GB PCIe 4.0 NVMe M.2 SSD\n" +
            "16GB DDR5 4800MHz RAM\n" +
            "15.6″, FHD (1920 x 1080), 144Hz Refresh Rate Display\n" +
            "8GB NVIDIA GeForce RTX 4060 Graphics\n" +
            "Backlit RGB Keyboard\n" +
            "FreeDOS",
        price: 1300,
        discountPercentage: 8,
        stockQuantity: 150,
        brand: "65a7e20102e12c44f59943dc", // Asus
        category: "65a7e24602e12c44f5994433", // Gaming Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/11/Asus-TUF-Gaming-F15-FX507VV-i7.png",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/11/Asus-TUF-Gaming-F15-FX507VV-i7.png",
            "https://www.laptop.lk/wp-content/uploads/2024/05/Asus-TUF-Gaming-F15-FX507VU-02.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/05/Asus-TUF-Gaming-F15-FX507VU-03.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/05/Asus-TUF-Gaming-F15-FX507VU-04.webp",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994450",
        title: "Lenovo LOQ Gaming 15ARP9 – Ryzen 7",
        description: "AMD Ryzen 7 7435HS AI Processor\n" +
            "512GB M.2 NVMe SSD\n" +
            "24GB DDR5-4800 RAM\n" +
            "15.6″ FHD (1920×1080) IPS 300nits Anti-glare Display\n" +
            "100% sRGB, 144Hz, G-SYNC Display\n" +
            "6GB NVIDIA GeForce RTX 4050 Graphics\n" +
            "White Backlit Keyboard\n" +
            "Windows 11 Home",
        price: 1300,
        discountPercentage: 8,
        stockQuantity: 150,
        brand: "65a7e20102e12c44f59943df", // lenovo
        category: "65a7e24602e12c44f5994433", // Gaming Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/10/Lenovo-LOQ-Gaming-15ARP9-%E2%80%93-Ryzen-7.jpg",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/10/Lenovo-LOQ-Gaming-15ARP9-%E2%80%93-Ryzen-7.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/10/Lenovo-LOQ-2.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/10/Lenovo-LOQ-3.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/10/Lenovo-LOQ-Gaming-4.webp",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994451",
        title: "Hp Victus 15 fb2132Ax Gaming – Ryzen 7",
        description: "AMD Ryzen 7-8845HS Processor\n" +
            "1TB Gen4 NVMe Performance M.2 SSD\n" +
            "16GB DDR5-5600 RAM\n" +
            "6GB NVIDIA GeForce RTX 3050 Graphics\n" +
            "15.6″ FHD 144Hz IPS Anti-Glare Display\n" +
            "Backlit, performance blue keyboard\n" +
            "Windows 11 Home",
        price: 1100,
        discountPercentage: 5,
        stockQuantity: 200,
        brand: "65a7e20102e12c44f59943de", // HP
        category: "65a7e20102e12c44f59943df", // Gaming Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/11/Hp-Victus-fb2132Ax-Gaming-Ryzen-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/11/Hp-Victus-fb2132Ax-Gaming-Ryzen-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/11/HP-Victus-15-Gaming-Laptop-02-1.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/11/HP-Victus-15-Gaming-Laptop04.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/11/HP-Victus-15-Gaming-Laptop-03-1.webp",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994453",
        title: "Logitech Z906 5.1 Surround Sound Speaker System",
        description: "Total watts (RMS): 500 W\n" +
            "Subwoofer: 165 W\n" +
            "Satellites: 4 x 67 W, wall mountable\n" +
            "Center channel speaker: 1 x 67 W, wall mountable\n" +
            "Digital optical input: 2\n" +
            "Digital coaxial input: 1\n" +
            "Six-channel direct input: 1\n" +
            "3.5mm input: 1\n" +
            "Headphone jack: 1\n" +
            "\n",
        price: 400,
        discountPercentage: 2,
        stockQuantity: 200,
        brand: "65a7e20102e12c44f59943e9", // Speakers
        category: "65a7e24602e12c44f5994446", // Logitech
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2020/12/108.jpg",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2020/12/108.jpg",
            "https://www.laptop.lk/wp-content/uploads/2020/12/109.jpg",
            "https://www.laptop.lk/wp-content/uploads/2020/12/110.jpg",
            "https://www.laptop.lk/wp-content/uploads/2020/12/111-1.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994452",
        title: "HP Omen 15 – AMD Ryzen 9",
        description: "AMD Ryzen 9 5900HX\n1TB SSD\n16GB DDR4 RAM\n15.6″, 300Hz, IPS Display\nNvidia RTX 3070 8GB\nRGB Keyboard\nWindows 11 Home",
        price: 2100,
        discountPercentage: 8,
        stockQuantity: 40,
        brand: "65a7e20102e12c44f59943e4", // HP
        category: "65a7e24602e12c44f5994433", // Gaming Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994454",
        title: "Dell XPS 15 OLED",
        description: "Intel Core i7-11800H\n512GB SSD\n16GB DDR4 RAM\n15.6″ OLED, 60Hz Display\nNvidia GTX 1650 Ti 4GB\nWindows 11 Home",
        price: 1800,
        discountPercentage: 10,
        stockQuantity: 45,
        brand: "65a7e20102e12c44f59943e5", // Dell
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994455",
        title: "Microsoft Surface Laptop 4",
        description: "Intel Core i7-1185G7\n512GB SSD\n16GB RAM\n13.5″ PixelSense Display\nWindows 11 Home",
        price: 1700,
        discountPercentage: 10,
        stockQuantity: 25,
        brand: "65a7e20102e12c44f59943e6", // Microsoft
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994456",
        title: "HP Envy x360 13",
        description: "Intel Core i5-1135G7\n256GB SSD\n8GB RAM\n13.3″ FHD Display\nWindows 11 Home",
        price: 1200,
        discountPercentage: 20,
        stockQuantity: 70,
        brand: "65a7e20102e12c44f59943e4", // HP
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994457",
        title: "Asus ZenBook 14",
        description: "Intel Core i7-1165G7\n512GB SSD\n16GB RAM\n14″ FHD Display\nWindows 11 Pro",
        price: 1500,
        discountPercentage: 10,
        stockQuantity: 80,
        brand: "65a7e20102e12c44f59943e1", // Asus
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994458",
        title: "Samsung Galaxy Book Pro",
        description: "Intel Core i5-1135G7\n512GB SSD\n8GB RAM\n13.3″ FHD AMOLED Display\nWindows 11 Home",
        price: 1400,
        discountPercentage: 5,
        stockQuantity: 100,
        brand: "65a7e20102e12c44f59943e7", // Samsung
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994459",
        title: "Microsoft Surface Laptop Studio",
        description: "Intel Core i7-11370H\n1TB SSD\n32GB RAM\n14.4″ PixelSense Display\nWindows 11 Pro",
        price: 3000,
        discountPercentage: 12,
        stockQuantity: 20,
        brand: "65a7e20102e12c44f59943e6", // Microsoft
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994460",
        title: "Lenovo ThinkPad X1 Carbon Gen 9",
        description: "Intel Core i7-1165G7\n512GB SSD\n16GB RAM\n14″ FHD Display\nWindows 11 Pro",
        price: 2200,
        discountPercentage: 15,
        stockQuantity: 25,
        brand: "65a7e20102e12c44f59943e2", // Lenovo
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994461",
        title: "Asus VivoBook 15",
        description: "Intel Core i5-1135G7\n512GB SSD\n8GB RAM\n15.6″ FHD Display\nWindows 11 Home",
        price: 1000,
        discountPercentage: 20,
        stockQuantity: 60,
        brand: "65a7e20102e12c44f59943e1", // Asus
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994462",
        title: "Razer Blade 15 Advanced",
        description: "Intel Core i9-11900H\n1TB SSD\n32GB DDR4 RAM\n15.6″ 4K OLED, 120Hz Display\nNvidia RTX 3080 16GB\nWindows 11 Pro",
        price: 3500,
        discountPercentage: 15,
        stockQuantity: 10,
        brand: "65a7e20102e12c44f59943e3", // Razer
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994463",
        title: "Alienware X17",
        description: "Intel Core i9-11980HK\n1TB SSD\n32GB DDR4 RAM\n17.3″ 4K, 120Hz Display\nNvidia RTX 3080 16GB\nWindows 11 Pro",
        price: 4000,
        discountPercentage: 10,
        stockQuantity: 8,
        brand: "65a7e20102e12c44f59943e8", // Alienware
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994464",
        title: "MacBook Pro 16 M1 Max",
        description: "Apple M1 Max Chip\n1TB SSD\n64GB Unified Memory\n16″ Retina Display, 120Hz\nmacOS Monterey",
        price: 5500,
        discountPercentage: 8,
        stockQuantity: 5,
        brand: "65a7e20102e12c44f59943e9", // Apple
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994465",
        title: "Acer Predator Helios 300",
        description: "Intel Core i7-11800H\n512GB SSD\n16GB DDR4 RAM\n15.6″ FHD, 165Hz Display\nNvidia RTX 3060 6GB\nWindows 11 Home",
        price: 2000,
        discountPercentage: 12,
        stockQuantity: 30,
        brand: "65a7e20102e12c44f59943e0", // Acer
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994466",
        title: "Lenovo Legion 5 Pro",
        description: "AMD Ryzen 7 5800H\n1TB SSD\n16GB DDR4 RAM\n16″ WQXGA, 165Hz Display\nNvidia RTX 3070 8GB\nWindows 11 Home",
        price: 2500,
        discountPercentage: 15,
        stockQuantity: 15,
        brand: "65a7e20102e12c44f59943e2", // Lenovo
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
    {
        _id: "65a7e45902e12c44f5994467",
        title: "MSI GE76 Raider",
        description: "Intel Core i7-11800H\n1TB SSD\n32GB DDR4 RAM\n17.3″ 4K, 144Hz Display\nNvidia RTX 3080 16GB\nWindows 11 Pro",
        price: 3500,
        discountPercentage: 10,
        stockQuantity: 10,
        brand: "65a7e20102e12c44f59943e3", // MSI
        category: "65a7e24602e12c44f5994432", // Laptops
        thumbnail: "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
        images: [
            "https://www.laptop.lk/wp-content/uploads/2024/04/MSI-Cyborg-Gaming-15-AI-A1VFK-%E2%80%93-Ultra-7.webp",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-02.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-03.jpg",
            "https://www.laptop.lk/wp-content/uploads/2024/03/MSI-Cyborg-Gaming-15-AI-A1VFK-Ultra-7-04.jpg",
        ],
        isDeleted: false,
        updatedAt: "2025-03-14T12:17:01.482Z",
    },
];

exports.seedProduct = async () => {
    try {
        await Product.insertMany(products);
        console.log("Product seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
