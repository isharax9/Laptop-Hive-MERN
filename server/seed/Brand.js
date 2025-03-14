const Brand = require("../models/Brand");

const brands = [
    {_id: "65a7e20102e12c44f59943da", name: "Acer"},
    {_id: "65a7e20102e12c44f59943db", name: "Apple"},
    {_id: "65a7e20102e12c44f59943dc", name: "Asus"},
    {_id: "65a7e20102e12c44f59943dd", name: "Dell"},
    {_id: "65a7e20102e12c44f59943de", name: "HP"},
    {_id: "65a7e20102e12c44f59943df", name: "Lenovo"},
    {_id: "65a7e20102e12c44f59943e0", name: "MSI"},
    {_id: "65a7e20102e12c44f59943e1", name: "Razer"},
    {_id: "65a7e20102e12c44f59943e2", name: "Samsung"},
    {_id: "65a7e20102e12c44f59943e3", name: "Sony"},
    {_id: "65a7e20102e12c44f59943e4", name: "LG"},
    {_id: "65a7e20102e12c44f59943e5", name: "Huawei"},
    {_id: "65a7e20102e12c44f59943e6", name: "Xiaomi"},
    {_id: "65a7e20102e12c44f59943e7", name: "OnePlus"},
    {_id: "65a7e20102e12c44f59943e8", name: "Google"},
    {_id: "65a7e20102e12c44f59943e9", name: "Logitech"},
    {_id: "65a7e20102e12c44f59943ea", name: "Corsair"},
    {_id: "65a7e20102e12c44f59943eb", name: "SteelSeries"},
    {_id: "65a7e20102e12c44f59943ec", name: "HyperX"},
    {_id: "65a7e20102e12c44f59943ed", name: "Epson"}
];

exports.seedBrand = async () => {
    try {
        await Brand.insertMany(brands);
        console.log('Brand seeded successfully');
    } catch (error) {
        console.log(error);
    }
};
