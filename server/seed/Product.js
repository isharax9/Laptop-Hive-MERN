const Product = require("../models/Product");

const products = [
    {
        _id: "65a7e45902e12c44f599444e",
        title: "MSI Cyborg Gaming 15 AI A1VFK – Ultra 7",
        description: "Intel Core Ultra 7 155H Processor\n1TB M.2 NVME GEN4 SSD\n16GB DDR5 4800MHZ RAM\n15.6″ FHD (1920*1080), 144Hz, IPS Display\n8GB Nvidia GeForce RTX 4060 GDDR6 Graphics\n4-Zone RGB Gaming Keyboard\nWindows11 Home",
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
        title: "Lenovo Legion 5 Pro – 16GB, RTX 3070",
        description: "Intel Core i7-11800H\n512GB SSD\n16GB DDR4 RAM\n15.6″, 165Hz, IPS Display\nRTX 3070 8GB\nRGB Keyboard\nWindows 11 Pro",
        price: 2000,
        discountPercentage: 15,
        stockQuantity: 50,
        brand: "65a7e20102e12c44f59943e2", // Lenovo
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
        _id: "65a7e45902e12c44f5994450",
        title: "Apple MacBook Pro 14 - M1 Pro",
        description: "Apple M1 Pro Chip\n512GB SSD\n16GB Unified Memory\n14″ Retina Display\nMacOS Monterey\nTouch Bar",
        price: 2500,
        discountPercentage: 5,
        stockQuantity: 30,
        brand: "65a7e20102e12c44f59943e3", // Apple
        category: "65a7e24602e12c44f5994432", // MacBooks
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
        _id: "65a7e45902e12c44f5994451",
        title: "Acer Predator Helios 300",
        description: "Intel Core i7-12700H\n1TB NVMe SSD\n32GB DDR5 RAM\n17.3″, 144Hz, IPS Display\nNvidia RTX 3060 6GB\nRGB Backlit Keyboard\nWindows 11 Home",
        price: 1800,
        discountPercentage: 12,
        stockQuantity: 80,
        brand: "65a7e20102e12c44f59943e0", // Acer
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
        _id: "65a7e45902e12c44f5994453",
        title: "Asus ROG Strix G15",
        description: "Intel Core i9-11900H\n1TB SSD\n32GB DDR4 RAM\n15.6″, 144Hz, IPS Display\nRTX 3080 8GB\nRGB Keyboard\nWindows 11 Pro",
        price: 2500,
        discountPercentage: 7,
        stockQuantity: 60,
        brand: "65a7e20102e12c44f59943e1", // Asus
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
