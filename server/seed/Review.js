const Review = require("../models/Review");

const reviews = [
    {
        _id: "67d514b9a097a8c070adbd01",
        user: "65b8e564ea5ce114184ccb01",
        product: "65a7e45902e12c44f5994001",
        rating: 5,
        comment: "Exceeded expectations! This phone is a gaming laptop in disguise. The performance is top-notch, and the battery life is impressive. Highly recommend for gamers and power users!",
        createdAt: "2025-03-15T05:48:41.068Z",
    },
    {
        _id: "67d514b9a097a8c070adbd02",
        user: "65b8e564ea5ce114184ccb02",
        product: "65a7e45902e12c44f5994001",
        rating: 5,
        comment: "This gaming laptop is a beast! Runs all the latest games at high settings smoothly. The cooling system is fantastic, keeping temperatures low even during long gaming sessions. The display is sharp and vibrant, making every detail pop. Definitely a great investment for serious gamers!",
        createdAt: "2025-01-15T05:48:41.068Z",
    },
    {
        _id: "67d514b9a097a8c070adbd03",
        user: "65b8e564ea5ce114184ccb03",
        product: "65a7e45902e12c44f5994001",
        rating: 2,
        comment: "Disappointed with the battery life. It barely lasts 3 hours even with light usage. The laptop heats up quickly, making it uncomfortable to use on my lap. While performance is decent, the lack of battery optimization is a deal-breaker for me. If you're looking for portability, this might not be the best choice.",
        createdAt: "2024-03-15T05:48:41.068Z",
    },
    {
        _id: "67d514b9a097a8c070adbd04",
        user: "65b8e564ea5ce114184ccb04",
        product: "65a7e45902e12c44f5994001",
        rating: 4,
        comment: "The laptop is good, but the keyboard is uncomfortable for long typing sessions. The keys feel a bit stiff, and the layout takes some time to get used to. However, the trackpad is responsive, and the overall build quality is solid. If you’re a heavy typist, you may want to consider an external keyboard.",
        createdAt: "2022-03-15T05:48:41.068Z",
    },
    {
        _id: "67d514b9a097a8c070adbd05",
        user: "65b8e564ea5ce114184ccb05",
        product: "65a7e45902e12c44f5994001",
        rating: 4,
        comment: "The screen is amazing, and the colors are very vibrant. A great choice for designers! The high-resolution display makes photo and video editing a pleasure, with deep blacks and true-to-life colors. The only downside is that it could be a bit brighter for outdoor use, but overall, it’s one of the best screens I’ve seen on a laptop.",
        createdAt: "2020-03-15T05:48:41.068Z",
    },
];

exports.seedReview = async () => {
    try {
        await Review.insertMany(reviews);
        console.log("Review seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
