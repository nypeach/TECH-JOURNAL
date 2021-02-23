//================================================================================================================
// MYSQL DATABASE (database/index.js)
//================================================================================================================

  // Setting up the Connection //===========================================

  const mysql = require('mysql');

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'somelist'
  });

  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MySQL!')
    }
  });

  // Querying the Database //===========================================

  // select query
  var selectQuery = function (callback) {
    connection.query('SELECT * FROM somelist', callback)
  };

  // insert query
  var insertQuery = function (name, description, callback) {
    connection.query(`INSERT INTO somelist (item_name , item_description) VALUES ('${name}', '${description}');`, callback);
  }

  // Exporting the Database //===========================================
  module.exports = {
    selectQuery: selectQuery,
    insertQuery: insertQuery
  }

//================================================================================================================
// MYSQL SCHEMA (schema.sql)
//================================================================================================================
  CREATE DATABASE somelist;

  USE somelist;

  CREATE TABLE items(
    id INT PRIMARY KEY,
    item_name VARCHAR(15),
    item_description TEXT
  );

  // Create other tables and define schemas for them here!
  // Execute this file from the command line by typing:
      // mysql -u root < server/schema.sql
  // to create the database and the tables.

//================================================================================================================
// MYSQL COMMAND LINE FUNCTIONS
//================================================================================================================

  // initiate database
  mysql
  // select which database to use
  use somelist;
  // show all tables
  show tables;
  // see all data in a table
  select * from <table>
  // delete items from a table
  delete * from <table> where <someColumnName> = "someValueName";


  // if you find you get an error message that says Client does not support authentication
    // protocol requested by server; consider upgrading MySQL client

  // create new mysql user
CREATE USER 'jodi'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'jodi'@'localhost';
ALTER USER 'jodi'@'localhost' IDENTIFIED WITH mysql_native_password BY 'minteger';//database name
flush privileges;
