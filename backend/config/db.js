const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('Connected to db');
    } catch(err) {
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectDB;