//================================================================================================================
// FOLDER STRUCTURE (projectName.git)
//================================================================================================================

// ROOT FOLDER //=========================================================
  package.json
  README.md
  webpack.config.js
  .gitignore
  .babelrc

// SERVER FOLDER //=======================================================
  index.js
  routes.js // if you want to have a separate routes file

// ROUTE FOLDER (LATER ON) //=============================================
  // We are not using this right now


// HELPERS OUTSIDE API HELPER //==========================================
  outsideAPI.js // one for each outside API


// DATABASE FOLDER  //====================================================

  // MONGOOSE STRUCTURE
  index.js

  // MYSQL STRUCTURE
  schema.sql
  index.js

// CLIENT FOLDER //=======================================================

  // DIST FOLDER
    bundle.js
    index.html
    styles.css

  // SRC FOLDER
    index.jsx

    // COMPONENTS
    Search.jsx
    TopicList.jsx (ex: CowList.jsx, MovieList.jsx, RepoList.jsx)
    TopicView.jsx (ex: CowListView.jsx, etc) //not necessary all the time




//================================================================================================================
// PACKAGE.JSON BASIC
//================================================================================================================

// APPLICATIONS - DEPENDENCIES//==========================================

// Dependencies are packages required by your applicaiton in production
  // Anytime someone will be using this app we need to have these

  "dependencies": {
  "axios": "^0.20.0",           // promise based, send asynchronous HTTP requests to REST endpoints
  "body-parser": "^1.19.0",     // extracts and parses the entire body portion of an incoming request
    "express": "^4.17.1",       // back end web app framework for Node.js used to create/maintain server
  "jquery": "^3.5.1",           // jquery used for ajax requests (can be used for DOM manipulation)
  "mysql": "^2.18.1",           // used to set up and maintain our connection to our mysql db
    "mongoose": "^5.10.15",     // Object Data Modeling (ODM) library for MongoDB and Node
  "react": "^16.13.1",          // used for building our react code client side (creating components)
  "react-dom": "^16.13.1"       // used for rendering our components to the DOM
},

  // DevDependencies are only needed for local development and testing
  // By the time the app is deployed, these are no longer needed

  "devDependencies": {
  "@babel/core": "^7.11.6",           // transpiles our JSX code to  javascript so that it can run anywhere
  "@babel/preset-env": "^7.11.5",
  "@babel/preset-react": "^7.10.4",
  "babel-loader": "^8.1.0",
  "file-loader": "^6.2.0",
  "nodemon": "^2.0.4",                // automatically restarting the node application when changes detected
  "webpack": "^4.44.2",               // takes all the code from your app and makes it usable in a browser
  "webpack-cli": "^3.3.12"
}

// WEBPACK RESOURCE
// https://www.valentinog.com/blog/webpack/