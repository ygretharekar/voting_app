import express from 'express';
import './config/database';
import middlewareConfig from './config/middlewares';
const app = express();

middlewareConfig(app);

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