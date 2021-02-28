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
