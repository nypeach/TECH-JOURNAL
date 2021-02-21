const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  name: String,
  full_name: String,
  owner_login: String,
  owner_repos_url: String,
  html_url: String,
  forks_count: Number,
  descrtiption: String

});
// compile schema to model
let Repo = mongoose.model('Repo', repoSchema);


let save = (repos, callback) => {
  // repos is an array of one or multiple objects
  // save multiple documents to the collection referenced by Book Model
  Repo.collection.insert(repos, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
}

module.exports.save = save;