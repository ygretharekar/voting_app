import mongoose from 'mongoose';
import dotenv from 'dot-env';

dotenv.config();

// mongodb : //<dbuser>:<dbpassword>@ds229465.mlab.com:29465/ygr_test

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.COLLECTION}`);

console.log('in database.js');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("// we're connected!");
});
