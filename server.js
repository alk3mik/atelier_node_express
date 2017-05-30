'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// create application/json parser 
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({ extended: false });

// To serve static files such as images, CSS files, and JavaScript
// files, contained in the directory 'public', use the express.static
// built-in middleware function in Express.
//
app.use(express.static('public'));

// Enable CORS (Cross-Origin Resource Sharing) header on ExpressJS
// more info in https://www.html5rocks.com/en/tutorials/cors/
//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// to support JSON-encoded bodies
app.use(jsonParser);
// to support URL-encoded bodies
app.use(urlParser);

// We will create 4+1 CRUD (create, read, update, and delete) routes.
//
// Create (POST) - Make something
// Read (GET)_- Get something
// Update (PUT) - Change something
// Delete (DELETE)- Remove something

var db = require('./mocks/ninjas.json');
// console.log(db, typeof db);

// GET (R.ead) all the ninjas JSON file
app.get('/ninja',  function(req, res) {
	// res.json({ message: 'hooray! welcome to our api!' });
	res.send(db);
	// var test = require('url').parse(req.url).query;
	// console.log(test);
	// console.log(req.body, req.query);
	// console.log(req.query, req.body);
	// res.send(req.query);

	// res.send(req.params);
	// res.send('mocks/ninjas.json');
	// res.status(200).sendFile(__dirname + '/mocks/ninjas.json');
});

//POST (C.reate)
app.post('/ninja', function (req, res) {
// We send the ninja to be created (added) in POSTMAN 
// as *raw* data and set the type to *application/json*
/*
	{
		"_id": "666b66666f666666a6666c66",
		"age": 99,
		"eyeColor": "red",
		"name": {
			"first": "Thurston",
			"last": "Moore"
		},
		"gender": "unknown",
		"clan": "SONIC YOUTH"
	}
*/

	// res.json(req.body);
	
	var newNinja = createNinja(req.body);
	console.log(newNinja);
});

function createNinja(reqBody) {

	var ninjaCreated = {
		_id: reqBody._id,
		age: reqBody.age,
		eyeColor: reqBody.eyeColor,
		name: {
				first: reqBody.name.first,
				last: reqBody.name.last
			},
		gender: reqBody.gender,
		clan: reqBody.clan
	}

	return ninjaCreated;

}

// // GET only one ninja from the JSON file
//
// Route parameters.
//
// Route parameters are named URL segments that are used to capture the values
// specified at their position in the URL. The captured values are populated in
// the req.params object, with the name of the route parameter specified in the
// path as their respective keys.
//
// Example:
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" } .
//
app.get('/ninja/:id', function(req, res) {

	// for (var prop in db) {
	// 	// ...do something...
	// }

	var gotNinja = findNinja(req.params.id);
	res.json(gotNinja);

});

function findNinja(reqParamsId) {

	var len = db.ninjas.length;
	var i = 0;

	while (i < len) {
		if (db.ninjas[i]._id === reqParamsId) {
			return db.ninjas[i];
			break;
		}
		i++;
	}

}

//PUT (U.pdate)
app.put('/mocks', function (req, res) {
	res.status(200).send("put! i.e. update!");
      // res.json({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
});
//DELETE (D.elete)
app.delete('/mocks', function (req, res) {
	res.status(200).send("delete! i.e. delete!");
	  // res.json({message : "Suppression d'une piscine dans la liste", methode : req.method});  
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /ninjas
// app.use('/ninjas', express.Router());

// app listening on port 9000 (the server functions on port 9000)
app.listen(9000);
 
// // // Nous demandons à l'application d'utiliser notre routeur
// // app.use(myRouter);  
 
// // // Démarrer le serveur 
// // app.listen(port, hostname, function(){
// // 	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
// // });

// // app.get(path, callback)
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + 'mocks/ninjas.json');
//   // Note: __dirname is directory that contains the JavaScript source code,
//   // that is: /Users/max/Work/JavaScript/WildCodeSchool/Ateliers/NodeJS/atelier_node_express
// });

/*

    // À utiliser:
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.json());

*/