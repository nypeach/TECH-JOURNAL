//================================================================================================================
// GENERAL INFORMATION ABOUT REQUEST
//================================================================================================================
  // Requests are made from the client to the server
  // Routing refers to how an application’s endpoints (URIs) respond to client requests.
  // The server handles the requests and responds back to the client
  // GET request are used to retrieve information
  // POST requests are used to send information

//================================================================================================================
// SERVER SIDE ROUTING RESPONSES
//================================================================================================================
  // These are often created during server side setup before the client requests are made
  // Sometimes the server needs to make a request of another API before responding to the client
  // See "fullStack-REACT-02-Server.js" for express setups and app.use

  // GET REQUEST RESPONSE (SIMPLE) =======================================

    // ex: response when GET request made to homepage
    app.get('/', function (req, res) {
      res.send('hello world')
    })

    // response using arrow function
    app.get('/', (req, res) => {
      res.send('Hello from the server!');
    })

  // GET REQUEST RESPONSE (MORE COMPLEX) =================================

    // request for data, server queries database before responding
    // variables are created from request often used to retrieve db data
    app.get('/endpoint', (req, res) => {
      var name = req.body.name;
      var description = req.body.description;
      db.selectQuery(name, description, (error, result) => {
        if (error) {
          res.status(400).json('Query Failed ' + error);
          return;
        }
        res.status(200).json(result);
      });
    });

  // GET REQUEST RESPONSE (CALLING FUNC W/PROMISE) =======================

    // request for data, server queries database before responding
    app.get('/endpoint', (req, res) => {
      db.getAll()
        .then(data => {
          res.send(data);
        });
    });


  // POST REQUEST RESPONSE (CALLING FUNC NO PROMISE) ===================

    // request to add new item to list
    // variables are created from request often used to insert into db
    // error handling

    app.post('/endpoint', (req, res) => {
      var name = req.body.name;
      var desc = req.body.description;
      db.insertQuery(name, description, (error, result) => {
        if (error) {
          res.status(400).json('Query Failed ' + error);
        } else {
          res.status(200).json(`{name: ${name}, description: ${desc}}`);
        }
      });
    });


  // POST REQUEST RESPONSE (CALLING FUNC W/PROMISE) ======================

    // request to add new item to list
    // variables are created from request often used to insert data to db
    // catch error handling will skip the then block, log error

    app.post('/endpoint', (req, res) => {
      var name = req.body.name;
      var description = req.body.description;
      db.create({ name, description })
        .then((data) => {
          res.status(201).send('new cow created!');
        });
        .catch ((error) => {
          console.log(error);
        });
    });



//================================================================================================================
// CLIENT SIDE AJAX GET REQUEST TO SERVER
//================================================================================================================
  // Success is always going to want a function.
  // You can create a function outside and then call it at success
  // You can use the response data to setState of the objects in state
  // Note: any function you create inside an Ajax request requires binding to the original "this" context
        // this.funcName = this.funcName.bind(this)  <<always put in constructor section below "super(props);"

  $.ajax({
    url: '/endpoint',
    type: 'GET',
    success: function (data || this.funcName) {
      console.log(data);
    },
    error: function (error) {
      console.error('Failed to get data from the Server', error);
    }
  });

//================================================================================================================
// CLIENT SIDE AXIOS GET REQUEST TO SERVER WITH PROMISES
//================================================================================================================

  axios.get('/someEndpoint')
    .then((data) => {
      // do something with data like pass it to your props
      // basically the equivalent of the 'success: ' on an ajax request
    })
    .catch((error) => {
      // if there's an error, it will skip the then block
      // this is basically the equivalent of the 'error: ' on a jquery ajax request
      // probably a good idea to log the error to try and see what went wrong
      console.log(error);
    });

//================================================================================================================
// CLIENT SIDE AJAX POST REQUEST TO SERVER
//================================================================================================================
  // Used to send data to the server for example to add an item to a list
  // A post request success may include a subsequent GET request to refresh a list with updated information
  // Success is always going to want a function.
  // You can do a function outside and then call it at success
  // Note: any function you create inside an Ajax request requires binding to the original "this" context
        // this.funcName = this.funcName.bind(this)  <<always put in section

  $.ajax({
    url: '/endpoint',
    type: 'POST',
    data: { objectWithKey: valuePairs },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      alert('Failed to post data to the Server ', error);
    }
  });

//================================================================================================================
// CLIENT SIDE AXIOS POST REQUEST TO SERVER WITH PROMISES
//================================================================================================================

  axios.post('/someEndpoint', options)
    // options will be some kind of object containing the data you want to post
    // the property names will need to correspond with what your post handler on the server side is expecting
    .then((response) => {
      // this will be the response from the client
      // you can log it to see what they said
    })
    .catch((error) => {
      // if there's an error, it will skip the then block
      // this is basically the equivalent of the 'error: ' on a jquery ajax request
      // probably a good idea to log the error
      console.log(error);
    });

