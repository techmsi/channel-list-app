const { resolve } = require('path');
const { readFileSync } = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3004;
const channels = require('./data/channel.json');

const reactHtmlFilePath = resolve(__dirname, '..', 'dist/index.html');
const reactHtmlFile = readFileSync(reactHtmlFilePath, 'utf8');

app.use(express.static('dist'));
app.use(cors());

app.listen(port, (err) => {
  if (err) {
    return console.log('Error: Ooops', err);
  }

  console.log(`Server is listening on ${port}`);
});

app.get('/api', (req, res) => {
  res.send('Welcome');
});

app.get('/channel/:authorName?', (req, res) => {
  const { authorName = null } = req.params;

  let channelsByAuthor = channels;

  if (authorName) {
    console.log('Requested author', authorName);

    channelsByAuthor = channels.filter(
      ({ instructorName }) => instructorName === authorName
    );
  }

  res.json(channelsByAuthor);
});

app.use('/', (req, res) => res.send(reactHtmlFile));

// For testing
module.exports = app;
