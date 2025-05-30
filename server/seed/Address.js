const Address = require("../models/Address");

const addresses = [
    {
        _id: "65c26398e1e1a2106ac8fb01",
        user: "65b8e564ea5ce114184ccb01",
        type: "Home",
        country: "Sri Lanka",
        state: "Southern Province",
        city: "Galle",
        street: "Watareka Road",
        phoneNumber: "077123456",
        postalCode: "80000",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb02",
        user: "65b8e564ea5ce114184ccb01",
        type: "Work",
        country: "USA",
        state: "California",
        city: "Los Angeles",
        street: "Sunset Boulevard",
        phoneNumber: "+1 2135678901",
        postalCode: "90001",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb03",
        user: "65b8e564ea5ce114184ccb02",
        type: "Home",
        country: "United Kingdom",
        state: "England",
        city: "London",
        street: "Baker Street",
        phoneNumber: "+44 2071234567",
        postalCode: "NW1 6XE",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb04",
        user: "65b8e564ea5ce114184ccb02",
        type: "Office",
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        street: "Yonge Street",
        phoneNumber: "+1 4167890123",
        postalCode: "M5B 2H1",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb05",
        user: "65b8e564ea5ce114184ccb03",
        type: "Home",
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        street: "George Street",
        phoneNumber: "+61 291234567",
        postalCode: "2000",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb06",
        user: "65b8e564ea5ce114184ccb03",
        type: "Apartment",
        country: "Germany",
        state: "Bavaria",
        city: "Munich",
        street: "Marienplatz",
        phoneNumber: "+49 8912345678",
        postalCode: "80331",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb07",
        user: "65b8e564ea5ce114184ccb04",
        type: "Work",
        country: "France",
        state: "Île-de-France",
        city: "Paris",
        street: "Champs-Élysées",
        phoneNumber: "+33 145678901",
        postalCode: "75008",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb08",
        user: "65b8e564ea5ce114184ccb04",
        type: "Home",
        country: "Japan",
        state: "Tokyo",
        city: "Shinjuku",
        street: "Kabukicho",
        phoneNumber: "+81 312345678",
        postalCode: "160-0021",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb09",
        user: "65b8e564ea5ce114184ccb05",
        type: "Office",
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        street: "Marine Drive",
        phoneNumber: "+91 9876543210",
        postalCode: "400020",
        __v: 0,
    },
    {
        _id: "65c26398e1e1a2106ac8fb10",
        user: "65b8e564ea5ce114184ccb05",
        type: "Home",
        country: "Brazil",
        state: "Rio de Janeiro",
        city: "Rio de Janeiro",
        street: "Copacabana",
        phoneNumber: "+55 2198765432",
        postalCode: "22070-011",
        __v: 0,
    },
];

exports.seedAddress = async () => {
    try {
        await Address.insertMany(addresses);
        console.log("Address seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
