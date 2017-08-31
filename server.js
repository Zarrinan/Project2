
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request-promise-native');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;


const methodOverride = require('method-override');
const emotionRoutes = require('./routes/emotion-routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/emotions', emotionRoutes);

app.get('/test', (req, res) => {

  const options = {
    method: 'post',
    url:    'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
    qs:     {
      a: 3,
      g: 78,
    },
    json:   true,
    headers: {
      'Ocp-Apim-Subscription-Key': '1d5ac4d7edda4b41a8681d3a8fcdb337',
    },
    body:   {
      url: req.query.fileName,
    },

  };

  request(options)
  .then(data => res.json(data))
  .catch(error => res.json(error));


});


app.get('/', (req, res) => {
  res.render('index');
});



app.use((err, req, res, next) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});









