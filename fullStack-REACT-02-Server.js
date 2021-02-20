//================================================================================================================
//SERVER SETUP (server/index.js)
//================================================================================================================

// IMPORTS //=============================================================
  // This is where we put anything we are importing from other files
  // It can include exported functions, middleware, databases, etc.
const express = require('express');
const db = require('../database');
const morgan = require('morgan'); // Optional
const bodyParser = require('body-parser');
const path = require('path'); // See note 2
const models = require('./models'); // Not always used, see ex: line 39

// MIDDLEWARE //==========================================================
  // For every Middleware layer you want to use, add an app.use line
  let app = express();
  app.use(morgan('dev')); // Optional
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true/false })); // See note 1
  app.use(express.static(__dirname + '/../client/dist')); // See note 2

  // NOTE 1
  app.use(bodyParser.urlencoded({ extended: true/false }));
  // This object will contain key - value pairs
  // Value can be a string or array (when extended is false)
  // Value can be any type (when extended is true).

  // NOTE 2
  app.use(express.static(path.join(__dirname, './public')));
    // If path is used on line 11 swap line 18 with line 27


// RESTFUL ROUTES FOR CRUD OPERATIONS //==================================
  // See fullstack-REACT-03-Requests.js for full details and examples
  // Don't always use all of these
  // These usually call some function created elsewhere
    // ex: database folder index.js file (need to require see line 9)
    // ex: models folder model.js file (need to require see line 13)
    // functions called can have params, callback and error handling

  // CREATE (C)RUD >> COLLECTION ROUTE
    // POST request handler, creates record in db from req data
    app.post('/endpoint', (req, res) => {
      db.create() // example
    });

  // READ ALL C(R)UD >> COLLECTION ROUTE
    // GET request handler, gets all records in db
    app.get('/endpoint', (req, res) => {
      db.readAll(para)
    });

  // READ ONE C(R)UD >> MEMBER ROUTE
    // GET request handler, gets one record in db
    app.get('/endpoint', (req, res) => {
      db.readOne()
    });

  // UPDATE CR(U)D >> MEMBER ROUTE
    // PUT request handler, updates existing record in db
    app.put('/endpoint', (req, res) => {
      db.update()
    });

  // DELETE CRU(D) >> MEMBER ROUTE
  // DELETE request handler, deletes existing record in db
    app.put('/endpoint', (req, res) => {
      db.delete()
    });

// SERVER PORT AND LISTENING SETUP //=====================================
  // Sets the port and starts the server listening

    // Arrow function example
    const port = 3000; // use whatever port
    app.listen(port, () => {
      console.log('CRUDdy Todo server is running in the terminal');
      console.log(`To get started, visit: http://localhost:${port}`);
    });

    // Regular function example
    let port = 1128; // use whatever port
    app.listen(port, function () {
      console.log(`listening on port ${port}`);
    });








