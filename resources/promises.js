//================================================================================================================
// EXAMPLE OF A FUNCTION THAT TAKES A CALLBACK AS A PARAMETER
//================================================================================================================
  // This function passes in two parameters (user and callback)
  var getUserAvatarWithCallback = function(user, callback) {
    github.search.users({q: user}, function(err, res) {
      if (err) { callback(err, null); }
      else {
        var avatarUrl = res.items[0].avatar_url;
        callback(null, avatarUrl);
      }
    });
  };

  // This is the invocation of the function
  getUserAvatarWithCallback('nypeach', function(err, avatar) {
    console.log('got url with callback pattern')
  })


//================================================================================================================
// EXAMPLE OF THE SAME FUNCTION WITH PROMISES
//================================================================================================================
  // We are literally promising something when an asynchronous function completes??
  // resolve says whatever we were doing was successful, pass it on to the next thing in the chain.
  // reject says oh! there's an error, we need to bust out of this promise.

var getUserAvatarWithBluebird = function (user) {
  return new Promise(function(resolve, reject)) { //Promise is also taking a callback as a function
    github.search.users({ q: user }, function (err, res) {
      if (err) { reject(err); } // this is invoking the reject function passing it in the error instead of passing callback into main function (getUserAvatarWithCallback), the Promise has a reject function built into it.  Anything we reject or pass into our reject here will get passed into our catch block down the road when we invoke the function.
      else {
        var avatarUrl = res.items[0].avatar_url;
        resolve(avatarURL); // instead of invoking the callback again here, we resolve it passing in the avatarURL
       }
    });
  });
  }

  // This is the invocation of the function that was created with Promises
  getUserAvatarWithBluebird('nypeach') // because this is a promise, this returns an object right away
    .then(function (avatarURL) {  // what gets passed into the ".then" is another callback function
                                  // this callback function receives what was passed in to the "resolve "of your promise
      console.log('got url with bluebird promise', avatarURL);   // now we can do whatever we want with what was passed in
  });
    .catch(function (error) {  // what gets passed into the ".catch" is another callback function
                               // this callback function receives what was passed in to the "reject "of your promise
      console.log('error getting url bluebird promise', error);   // now if there is an error (maybe I passed in the wrong user)
                                                                  // the error message gets passed into the reject and the catch block function will run.  We can do whatever we want with the error inside the catch block.
   });


   // .then functions are chainable
   // ex: We can something with the avatarURL in the first then block and then pass it to another function
   // whatever you return in the first then block gets passed to the next then
   // you can keep returning something in the then block and it will get passed forever and ever
   // the second an error hit in any promise, that error bubbles up

  getUserAvatarWithBluebird('nypeach')
    .then(function (avatarUrl) {
      console.log('got url with bluebird promise', avatarUrl);
      return avatarUrl + 'Some appended text';  // this is an example of returning something to use in another .then
    })
    .then(function (appendedAvatarUrl) {
      console.log('check out the new appended url', appendedAvatarUrl);
    })
    .catch(function (error) {
      console.log('error getting url bluebird promise', error);
    })
    .finally(function() { // this last function runs whether there was an error or not down the chain
      console.log('This will always get run');
    });

//================================================================================================================
// SUPER COOL USE OF PROMISE ALL WITH AN ARRAY OF ASYNC FUNCTIONS
//================================================================================================================

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all


//================================================================================================================
// CONVERTING NODE-STYLE (ERROR FIRST) CALLBACKS TO PROMISES (See below this section for converting other styles)
//================================================================================================================

  // Sample type of function with callback
  const fs = require('fs')
  fs.readFile(filePath, options, callback) // This is the syntax for a read file

  // This is what it would look like actually executed
  fs.readFile('some-file', (err, data) => {
    if (err) {
      // Handle error
    } else {
      // Do something with data
    }
  })

  // If you encounter a callback of this pattern, you can convert it into a promise with Node’s util.promisify.
  const fs = require('fs')
  const util = require('util')

  const readFilePromise = util.promisify(fs.readFile)

  // Then you can use it like any other promise
  readFilePromise(filePath, options)
    .then(data => {/* Do something with data */ })
    .catch(err => {/* Handle error */ }

  // NOTE: Once in a while, you may run into APIs that do not conform to Node’s error-first callback format. For these situations, you cannot use util.promisify. You need to write your own promise.


//================================================================================================================
// CONVERTING OTHER CALLBACKS TO PROMISES
//================================================================================================================
  // Turning a non-Node-style callback into a promise is easy once you know how to construct a promise.
  // You follow the same steps:
    // Reject if there’s an error
    // Resolve otherwise

  const myPromise = new Promise((resolve, reject) => {
    setTimeout((error) => {
      if (error) {
        reject(error);
      } else {
        resolve('foo');
      }
    }, 300);
  });
  // *** JOSEPH *** WHERE WOULD BE PUT THE REJECT STATEMENT IN HERE???  I PUT IT ON 122 TO 124

  // example of usage
  myPromise
    .then(handleResolvedA)
    .then(handleResolvedB)
    .then(handleResolvedC)
    .catch(handleRejectedAny);
  // example of arrow function usage
  myPromise
    .then(value => { return value + ' and bar'; })
    .then(value => { return value + ' and bar again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) });
