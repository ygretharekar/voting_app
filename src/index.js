import express from 'express';
import './config/database';

const app = express();

app.get(
  '/',
  (req, res) => {
    res.send("working...!!");
  }
);

app.listen(
  process.env.PORT||3000,
  err => {
    if(err) throw err;

    console.log('listening');

  }
);