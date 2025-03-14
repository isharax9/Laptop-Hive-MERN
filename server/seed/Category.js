const Category = require("../models/Category");

const categories = [
    {_id: "65a7e24602e12c44f599442c", name: "Brand New Laptops"},
    {_id: "65a7e24602e12c44f599442d", name: "Used Laptops"},
    {_id: "65a7e24602e12c44f5994433", name: "Gaming Laptops"},
    {_id: "65a7e24602e12c44f5994432", name: "Business Laptops"},
    {_id: "65a7e24602e12c44f5994434", name: "MacBooks"},
    {_id: "65a7e24602e12c44f5994435", name: "Chromebooks"},
    {_id: "65a7e24602e12c44f599442e", name: "Brand New PC"},
    {_id: "65a7e24602e12c44f599442f", name: "Used PC"},
    {_id: "65a7e24602e12c44f5994430", name: "Brand New Tablets"},
    {_id: "65a7e24602e12c44f5994431", name: "Used Tablets"},
    {_id: "65a7e24602e12c44f5994436", name: "Smartphones"},
    {_id: "65a7e24602e12c44f5994437", name: "Gaming Smartphones"},
    {_id: "65a7e24602e12c44f5994438", name: "Monitors"},
    {_id: "65a7e24602e12c44f5994439", name: "Gaming Monitors"},
    {_id: "65a7e24602e12c44f5994440", name: "4K Monitors"},
    {_id: "65a7e24602e12c44f5994442", name: "Gaming Mouse"},
    {_id: "65a7e24602e12c44f5994443", name: "Gaming Keyboards"},
    {_id: "65a7e24602e12c44f5994444", name: "Gaming Chair"},
    {_id: "65a7e24602e12c44f5994446", name: "Speakers"},
    {_id: "65a7e24602e12c44f5994445", name: "Others"},
];

exports.seedCategory = async () => {
    try {
        await Category.insertMany(categories);
        console.log("Category seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
