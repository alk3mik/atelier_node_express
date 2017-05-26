'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// create application/json parser 
var jsonParser = bodyParser.json();

// To serve static files such as images, CSS files, and JavaScript
// files, contained in the directory 'public', use the express.static
// built-in middleware function in Express.
app.use(express.static('public'));

// Enable CORS (Cross-Origin Resource Sharing) header on ExpressJS
// more info in https://www.html5rocks.com/en/tutorials/cors/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// to support JSON-encoded bodies
app.use(jsonParser);

// We will create 4+1 CRUD (create, read, update, and delete) routes.
//
// Create (POST) - Make something
// Read (GET)_- Get something
// Update (PUT) - Change something
// Delete (DELETE)- Remove something

// GET (R.ead) all the ninjas JSON file
app.get('/mocks', function(req, res, next) {
	res.status(200).sendFile(__dirname + '/mocks/ninjas.json');
	console.log(res.json(__dirname + '/mocks/ninjas.json'));
});

//POST (C.reate)
// app.post('/mocks', function (req, res, next) {
// 	var myNinjaObj = {
// 		_id: "666b66666f666666a6666c66",
// 		age: 99,
//         eyeColor: "red",
//         name: {
//                 first: "Thurston",
//                 last: "Moore"
//               },
//         gender: "unknown",
//         clan: "SONIC YOUTH"
// 	};

// 	req.body = myNinjaObj;  
    
// 	// res.status(200).send("post! i.e. create!");
// 	console.log(req.body);
// 	res.send(req.body);
//       // res.json({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
// });

// // GET only one ninja from the JSON file
// app.get('/mocks/:591b03816f472697a9056c92', function(req, res, next) {
// 	console.log(req.query.id);
// 	var profile_id = req.query.id;
//     res.render('mocks', {id:profile_id});
// });

// //PUT (U.pdate)
// app.put('/mocks', function (req, res) {
// 	res.status(200).send("put! i.e. update!");
//       // res.json({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
// });
// //DELETE (D.elete)
// app.delete('/mocks', function (req, res) {
// 	res.status(200).send("delete! i.e. delete!");
// 	  // res.json({message : "Suppression d'une piscine dans la liste", methode : req.method});  
// });

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