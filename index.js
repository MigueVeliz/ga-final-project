const express = require('express'),
	bodyParser	= require('body-parser'),
	cors = require('cors'),
	app	= express(),
	PORT = process.env.PORT || 8080;

// 1. set up the view engines
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));

// cross-origin requests will not work from react server to express
// server with out this
app.use(cors());

// app.engine('html', mustacheExpress());

// 2. set body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 3. connect controller
app.use('/api', require('./controllers/take_five'));
app.use('/api/numbers', require('./controllers/numbers'));
app.use('/api/quick_draw', require('./controllers/quick_draw'));

// 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));
