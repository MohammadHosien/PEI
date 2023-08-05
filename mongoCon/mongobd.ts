const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDBConection).then(() => {
    console.log("connected to data base")
});

