//=================================================================================================//
// IMPORTING AND EXPORTING js FILES
//=================================================================================================//
// A Node.js file can import functionality exposed by other Node.js files.
const library = require('./library');

// In this file, functionality must be exposed before it can be imported by other files.
  // Assign just an object to import
    module.exports = objectName
    // in the other file
    const objectName = require('./objectName')
// The second way is to add the exported object as a property of exports.
// This way allows you to export multiple objects, functions or data:
    exports.objectName = objectName
    // in the other file, you'll use it by referencing a property of your import:
    const items = require('./items')
    items.objectNmae
// What's the difference between module.exports and exports?
  // module.exports > exposes the object it points to.
  // exports > exposes the properties of the object it points to.


//=================================================================================================//
  //NPM
//=================================================================================================//
// NPM manages downloads of dependencies of your project.
  // Installing all dependencies
     npm install
  // Installing a single package
      npm install < package-name >
  // Updating packages
      npm update
  // Updating specific packages
      npm update < package-name >
  // Running Tasks
      npm run < task-name >
      // EXAMPLE
      {
        "scripts": {
          "watch": "webpack --watch --progress --colors --config webpack.conf.js",
          "dev": "webpack --progress --colors --config webpack.conf.js",
          "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
        },
      }
      npm run watch
      npm run dev
      npm run prod

    // Where does npm install the packages?
      // the package is installed in the current file tree, under the node_modules subfolder.
      // npm also adds the lodash entry in the dependencies property of the package.json file present in the current folder.

    // How do you use or execute a package installed using npm?
        // To use it in your code, you just need to import it into your program using require:
           const _ = require('packageName')
        // What if your package is an executable?
          // In this case, it will put the executable file under the node_modules /.bin / folder.


//=================================================================================================//
// PACKAGE.JSON NOTES
//=================================================================================================//
  // The package.json file is kind of a manifest for your project.
  // It can do a lot of things, completely unrelated.
  // It's a central repository of configuration for tools, for example.
  // It's also where npm and yarn store the names and versions for all the installed packages.

  // PROPERTIES
    // https://nodejs.dev/learn/the-package-json-guide

  // package-lock.json
    // In version 5, npm introduced the package-lock.json file.
      // The goal of package - lock.json file is to keep track of the exact version of every package
      // that is installed so that a product is 100 % reproducible in the same way even if packages
      // are updated by their maintainers.


//=================================================================================================//
// JAVASCRIPT TIMERS
//=================================================================================================//

  // setTimeout()
    // delays the execution of a function.
    // You specify a callback function to execute later,
      // and a value expressing how later you want it to run, in milliseconds:
        setTimeout(cbFunction, milliseconds)

        setTimeout(() => {
          // runs after 50 milliseconds
        }, 50)

  // setInterval()
    // instead of running the callback function once, it will run it forever,
      // at the specific time interval you specify (in milliseconds):
      setInterval(cbFunction, milliseconds)


//=================================================================================================//
// ERROR FIRST CALL BACK
//=================================================================================================//

// How do you handle errors with callbacks?
// One very common strategy is to use what Node.js adopted:
// the first parameter in any callback function is the error object: error-first callbacks
// If there is no error, the object is null.
// If there is an error, it contains some description of the error and other information.

    //EXAMPLE
    fs.readFile('/file.json', (err, data) => {
      if (err !== null) {
        //handle error
        console.log(err)
        return
      }
      //no errors, process data
      console.log(data)
    })


//=================================================================================================//
// PROMISES
//=================================================================================================//

'https://nodejs.dev/learn/understanding-javascript-promises'

