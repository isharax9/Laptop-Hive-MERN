const User = require("../models/User");

const users = [
    {
        _id: "67d3217248bd863743939900",
        name: "Admin",
        email: "admin@gmail.com",
        password: '$2a$10$eAG75e8hjZ7NR9ZyG5cXReBOO2xQeIlV4ZdG43OSrmnCl4l3sbLoO',
        isVerified: true,
        isAdmin: true,
        __v: 0,
    },
    {
        _id: "65b8e564ea5ce114184ccb01",
        name: "User1",
        email: "user1@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "65b8e564ea5ce114184ccb02",
        name: "User2",
        email: "user2@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "65b8e564ea5ce114184ccb03",
        name: "User3",
        email: "user3@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "65b8e564ea5ce114184ccb04",
        name: "User4",
        email: "user4@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "65b8e564ea5ce114184ccb05",
        name: "User5",
        email: "user5@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
];

exports.seedUser = async () => {
    try {
        await User.insertMany(users);
        console.log("User seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
