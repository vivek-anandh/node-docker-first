import express from 'express';
import config from 'config';
import Logger from './common/logger.js';

const app = express();
console.log(`Starting app with env : ${process.env.NODE_ENV}`);
const port = config.get('port');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App started on port : ${port}`);
  Logger.debug(`App started on port : ${port}`);
});
