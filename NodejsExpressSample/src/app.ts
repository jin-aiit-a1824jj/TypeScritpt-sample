import express from 'express';
const app = express();
app.get((req, res, next) => {
  console.log('hello!');
  next();
})
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
})
app.get((err,req, res, next) => {
  next();
})
app.listen(3000);
