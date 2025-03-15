const {seedBrand} = require("./Brand")
const {seedCategory} = require("./Category")
const {seedProduct} = require("./Product")
const {seedUser} = require("./User")
const {seedAddress} = require("./Address")
const {seedWishlist} = require("./Wishlist")
const {seedCart} = require("./Cart")
const {seedReview} = require("./Review")
const {seedOrder} = require("./Order")
const {DBConnection} = require("../database/DBConnection")
const mongoose = require("mongoose");

const seedData = async () => {
    try {
        await DBConnection()
        await mongoose.connection.dropDatabase();

        await seedBrand()
        await seedCategory()
        await seedProduct()
        await seedUser()
        await seedAddress()
        // await seedWishlist()
        // await seedCart()
        // await seedReview()
        // await seedOrder()

        console.log('\x1b[34mSeed completed successfully\x1b[0m');
    } catch (error) {
        console.log(error);
    }
}

seedData()