const express = require('express');
const app = express();
const port = process.env.PORT || 3004;
const isNotProduction = process.env.NODE_ENV !== 'production';
const webpackDevHelper = require('./webpackDevHelper');

// Webpack
if (isNotProduction) {
  webpackDevHelper.useWebpackMiddleware(app);
}

app.use(express.static('public'));

app.listen(port, err => {
  if (err) {
    return console.log('Error: Ooops', err);
  }

  console.log(`Server is listening on ${port}`);
});

app.get('/', (req, res) => {
  res.send();
})

app.get('/channel/:name?', (req, res) => {
  const authorName = req.params.name;
  let channelJson = require('./data/channel.json');
  let channelJsonForRequestedAuthor = channelJson.filter(o => o.instructorName === authorName);

  console.log('Requested author', authorName);
  res.json(authorName ? channelJsonForRequestedAuthor : channelJson);
})

// For testing
module.exports = app;
