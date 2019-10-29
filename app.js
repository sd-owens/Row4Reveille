require('dotenv').config();

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

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
