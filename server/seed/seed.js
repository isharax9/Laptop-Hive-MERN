const {seedBrand} = require("./Brand")
const {seedCategory} = require("./Category")
const {seedProduct} = require("./Product")
const {seedUser} = require("./User")
const {seedAddress} = require("./Address")
const {seedReview} = require("./Review")
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
        await seedReview()

        console.log('\x1b[34mSeed completed successfully\x1b[0m');
    } catch (error) {
        console.log(error);
    }
}

seedData()