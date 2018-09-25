const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://159.203.1.199:27017/messages');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api/getmessage', (req, res) => {
  db.collection('messages').find().skip(1).limit(1).sort({createdOn:-1})
    .on('data', function(doc){
      res.send(doc)
    })
    .on('error', function(err){
      console.log(err);
      res.send(err);
    });
});

app.put('/api/sendmessage', (req, res) => {
  let from = req.body.from;
  if (!from) from = 'anonymous';
  let text = req.body.message;
  if (!text) text = 'Uh oh! There is no message.';

  let message = {
    text,
    from,
    createdOn: Date.now(),
  };

  db.collection('messages').insertOne(message)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));