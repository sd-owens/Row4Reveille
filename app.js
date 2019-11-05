require('dotenv').config();

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get('x-forwarded-proto') !== 'https' &&
    process.env.NODE_ENV !== 'development'
  ) {
    res.redirect(`https://${req.get('host')}${req.url}`);
  }
  next();
}

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(requireHTTPS);

app.use(express.static(`${__dirname}/public`));

app.get('/', async (req, res) => {
  await res.render('home');
});

app.get('/home', async (req, res) => {
  await res.render('home');
});

app.listen(process.env.PORT || 3000, process.env.IP, async () => {
  await console.log('Server listening on port 3000');
});
