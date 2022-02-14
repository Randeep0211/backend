const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use('/static', express.static('public'));

mongoose
  .connect(
    'mongodb+srv://user:user@mern.upbgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Database Connected');
  });

app.get('/data', (req, res) => {
  console.log(req.body);
  res.send([
    {
      image: 'http://localhost:4000/static/checklist.png',
      title: 'Top notch technology',
      description:
        'Stay at the top of the trends, we have used the latest tools and frameworks to keep your web neat and nice',
    },

    {
      image: 'http://localhost:4000/static/checklist.png',
      title: 'Reduce development time',
      description:
        'Because time matters. We have built Orenda to make your development and launching process as fast as possible',
    },

    {
      image: 'http://localhost:4000/static/checklist.png',
      title: 'Ready-to-use content',
      description:
        'Orenda comes with multiple design interfaces which you can use right out of the box you just focus on your business',
    },
  ]);
});

app.listen('4000', () => {
  console.log('Server Created');
});
