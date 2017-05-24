const express = require('express');
const app = express();

// app listening on port 9000 (the server functions on port 9000)
app.listen(9000);

// To serve static files such as images, CSS files, and JavaScript
// files, contained in the directory 'public', use the express.static
// built-in middleware function in Express.
app.use(express.static('public'));

// We will create 4+1 CRUD (create, read, update, and delete) routes.
//
// Create (POST) - Make something
// Read (GET)_- Get something
// Update (PUT) - Change something
// Delete (DELETE)- Remove something
//
// app.get(path, callback)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // Note: __dirname is directory that contains the JavaScript source code,
  // that is: /Users/max/Work/JavaScript/WildCodeSchool/Ateliers/NodeJS/atelier_node_express
});



/*

    // À utiliser:
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.json());

*/