//==========================================================================================================
//SERVER SETUP (server/index.js)
//==========================================================================================================
const express = require('express');
const db = require('../database');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

//=============================================================
// GET AND POST REQUESTS SETUP
// Note you can have multiple get and post requests here
// See AXIOS AND AJAX Below

app.post('/endPoint', function (req, res) {
  // TODO - your code here!
  // This route posts information from the server to the client
  // This route can get information first using a get request
  // This route can insert data into your database
  // To test this route send a get request from postman and make sure you see res below
  res.send('Response from the Server')
});

app.get('/endPoint', function (req, res) {
  // TODO - your code here!
  // This route gets information from the server
  // This rout can get data from your database
  // To test this route send a get request from postman and make sure you see res below
  res.send('Hello from the Server')
});

//=============================================================
// SERVER PORT AND LISTENING SETUP

let port = 1128; // use whatever port

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});


//==========================================================================================================
//EXTERNAL API CONFIG SETUP (projectRoot/config.js)
//==========================================================================================================
  // Note: depending on the API requirements this may alter
  // Note: may need something else depending on API requirements
module.exports = {
  TOKEN: 'YOUR TOKEN HERE' // may be called API Key or other
};
//==========================================================================================================
//EXTERNAL API JS (projectRoot/helpers/externalAPIName.js)
//==========================================================================================================
  // Note: depending on the API requirements this may alter

const axios = require('axios');
const config = require('../config.js');

let getInfoFromAPI = (/* TODO */) => {
  // TODO - Use the axios module to request repos for a specific
  // information from the API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'FILL ME IN',
    headers: {
      'requiredHeaders': 'request',
      'Authorization': `token ${config.TOKEN}` //this is what will be imported from config file
    }
  };

}
//this export will have to be imported via require where you want to use it
module.exports.getInfoFromAPI = getInfoFromAPI;


//==========================================================================================================
//CLIENT SIDE AJAX POST REQUEST TO SERVER
//==========================================================================================================
$.ajax({
  url: '/endpoint',
  type: 'POST',
  data: { object with key:value pairs },
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    alert('Failed to post data to the Server ', error);
  }
});

//==========================================================================================================
//CLIENT SIDE AJAX GET REQUEST TO SERVER
//==========================================================================================================
  // Success is always going to want a function.
  // You can do a function outside and then call it at success
  // Note: any function you create inside an Ajax request requires binding to the original "this" context
    // this.funcName = this.funcName.bind(this)

$.ajax({
    url: '/repos',
    type: 'GET',
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error('Failed to get data from the Server', error);
    }
  });
}

//==========================================================================================================
//CLIENT SIDE AXIOS POST REQUEST TO SERVER
//==========================================================================================================
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

//==========================================================================================================
//CLIENT SIDE AXIOS GET REQUEST TO SERVER
//==========================================================================================================
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


//==========================================================================================================
//BASIC HTML PAGE SETUP (index.html)
//==========================================================================================================
< !doctype html >

  <html lang="en">

    <head>
      <meta charset="utf-8">

        <title>Basic HTML Setup with Meta Data</title>
        <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">

            <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

            <body>
            <h1>Tic Tac Toe</h1>

              <script src="app.js"></script>
            </body>

</html>