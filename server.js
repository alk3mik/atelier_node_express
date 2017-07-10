'use strict'

const express = require('express');
const bodyParser = require('body-parser');
// create application/json parser 
const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: false });
const port = process.env.PORT || 9000;
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');

const app = express();

// Enable CORS (Cross-Origin Resource Sharing) header on ExpressJS
// more info in https://www.html5rocks.com/en/tutorials/cors/
//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// use the ninja favicon public/assets/img/ninja.ico
app.use(favicon(path.join(__dirname, 'public/assets/img', 'ninja.ico')));

// use the logger *morgan*
app.use(morgan('dev'));

// to support JSON-encoded bodies
app.use(jsonParser);
// to support URL-encoded bodies
app.use(urlParser);

// To serve static files such as images, CSS files, and JavaScript
// files, contained in the directory 'public', use the express.static
// built-in middleware function in Express.
//
app.use(express.static('public'));

// We will create 4+1 CRUD (create, read, update, and delete) routes.
//
// Create (POST) - Make something
// Read (GET)_- Get something
// Update (PUT) - Change something
// Delete (DELETE)- Remove something

var db = require('./mocks/ninjas.json');
// console.log(db, typeof db);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// GET (R.ead) all the ninjas JSON file
app.get('/ninja', function(req, res) {
	res.send(db);
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
	
	let newNinja = createNinja(req.body);
	db.ninjas.push(newNinja);
	res.sendStatus(200); // equivalent to res.status(200).send('OK')
});

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

	let ninjaIndex = findNinja(req.params.id);
	res.json(db.ninjas[ninjaIndex]);

});

//PUT (U.pdate)
app.put('/ninja/:id', function(req, res) {
	let currentNinja = db.ninjas[findNinja(req.params.id)];
	let newNinja = createNinja(req.body);
// To merge obj2 into obj1 we can use either ES6 (EcmaScript 2015) or ES5 (EcmaScript 20??).
// 
// With ES6 we can use the *assign* method:
//
// Object.assign(obj1, obj2); where only obj1 is mutated and returned.
// Later properties overwrite earlier properties with the same name.
// There's no limit to the number of objects one can merge; all objects get
// merged into the first object:
//
// const allRules = Object.assign({}, obj1, obj2, obj3, etc);

	Object.assign(currentNinja, newNinja);
	res.sendStatus(200); // equivalent to res.status(200).send('OK')
	
// With ES5 we define a mergeObjects function (see below).

	// let updatedNinja = mergeObjects(currentNinja, newNinja);
	// console.log(currentNinja, newNinja, updatedNinja);

// res.status(200).send("put! i.e. update!");
});

//DELETE (D.elete)
app.delete('/ninja/:id', function(req, res) {
	console.log("We will remove the ninja with ID" + req.params.id);
	let ninjaIndex = findNinja(req.params.id);
	db.ninjas.splice(ninjaIndex, 1); //remove 1 item at the "ninjaIndex"-th position
	res.sendStatus(200); // equivalent to res.status(200).send('OK')
	// res.status(200);
	// console.log(db.ninjas, db.ninjas[ninjaIndex]);
});

/*
	FUNCTIONS DEFINITION
*/

function generateID() {
  // Adapted from https://gist.github.com/gordonbrander/2230317
  //
  // It generates a 24-digits ID in hexadecimal base.
  //
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 24 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 24);
}

function createNinja(reqBody) {

	let ninjaCreated = {
		// _id 		 : reqBody._id,
		_id 		 : generateID(),
		age 		 : reqBody.age,
		eyeColor : reqBody.eyeColor,
		name 		 : {
								first: reqBody.name.first,
								last: reqBody.name.last
							 },
		gender	 : reqBody.gender,
		clan 		 : reqBody.clan
	}

	return ninjaCreated;

}

function findNinja(reqParamsId) {

	let len = db.ninjas.length;
	let i = 0;

	while (i < len) {
		if (db.ninjas[i]._id === reqParamsId) {
			// return db.ninjas[i];
			return i;
			break;
		}
		i++;
	}

}

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function mergeObjects(obj1, obj2) {
    let obj3 = {};
    for (let attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (let attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /ninjas
// app.use('/ninjas', express.Router());

// app listening on port 9000 (the server functions on port 9000)
app.listen(port, function() {
    console.log("Adresse du serveur : http://localhost:" + port);
});
 
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