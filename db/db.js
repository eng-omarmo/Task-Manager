const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async (uri) => {
    try {
        const connect=await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('> Connected...'.bgCyan,connect.connection.host,connect.connection.name);
    } catch (error) {
        console.error(`> Error while connecting to MongoDB: ${error.message}`.underline.red);
        process.exit(1);
    }
}

module.exports = connectDb;
