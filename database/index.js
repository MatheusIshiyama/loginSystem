const mongoose = require("mongoose");
try {
    const config = require("./config.json");
    mongoKey = config.mongoKey;
} catch {
    mongoKey = process.env.MONGO_KEY;
}

mongoose
    .connect(mongoKey, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("[MONGODB] Connected Mongodb");
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;
