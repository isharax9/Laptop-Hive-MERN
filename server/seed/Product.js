const Product = require("../models/Product");

const products = [
    {
        _id: "65a7e45902e12c44f5994001",
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
        _id: "65a7e45902e12c44f5994002",
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
        _id: "65a7e45902e12c44f5994003",
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
        _id: "65a7e45902e12c44f5994004",
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
        _id: "65a7e45902e12c44f5994005",
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
        _id: "65a7e45902e12c44f5994006",
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
        _id: "65a7e45902e12c44f5994007",
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
        _id: "65a7e45902e12c44f5994008",
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
        _id: "65a7e45902e12c44f5994009",
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
        _id: "65a7e45902e12c44f5994010",
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
        _id: "65a7e45902e12c44f5994011",
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
        _id: "65a7e45902e12c44f5994012",
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
        _id: "65a7e45902e12c44f5994013",
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
        _id: "65a7e45902e12c44f5994014",
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
        _id: "65a7e45902e12c44f5994015",
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
        _id: "65a7e45902e12c44f5994016",
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
        _id: "65a7e45902e12c44f5994017",
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
        _id: "65a7e45902e12c44f5994018",
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
        _id: "65a7e45902e12c44f5994019",
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
        _id: "65a7e45902e12c44f5994020",
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
];

exports.seedProduct = async () => {
    try {
        await Product.insertMany(products);
        console.log("Product seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
