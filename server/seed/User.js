const User = require("../models/User");

const users = [
    {
        _id: "65b8e564ea5ce114184ccb96",
        name: "User",
        email: "kavithmathushal24@gmail.com",
        password: '$2a$10$I.4UkLLg.2Nbd9Mp2Id1FOaYPy75G/zkHhSO7CD/K2IbrPdzLeIsm',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "65c2526fdcd9253acfbaa731",
        name: "User2",
        email: "user2@gmail.com",
        password: '$2a$10$wbko7/YQkMwnEJU01fwkVuU.7KrWvYJRXRXCgCAC59H82BKhyDVsu',
        isVerified: true,
        isAdmin: false,
        __v: 0,
    },
    {
        _id: "67d3217248bd863743939927",
        name: "Admin",
        email: "kavithmathushal451@gmail.com",
        password: '$2a$10$eAG75e8hjZ7NR9ZyG5cXReBOO2xQeIlV4ZdG43OSrmnCl4l3sbLoO',
        isVerified: true,
        isAdmin: true,
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
