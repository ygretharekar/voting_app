import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.COLLECTION}`;


mongoose.Promise = global.Promise;

try {
    mongoose.connect(uri);
} catch (err) {
    mongoose.createConnection(uri);
}

mongoose
    .connection
    .once('open', () => {
        console.log('MongoDB is connected!');
    })
    .on('error', (err) => {
        throw err;
    });
