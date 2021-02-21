//================================================================================================================
// MONGO DB DATABASE (database/index.js)
//================================================================================================================

  // Setting up the Connection //=========================================
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

  // Creating the Schema //===============================================
  let somelistSchema = mongoose.Schema({
    list_id: String,
    name: String,
    owner: String,
    item_count: Number

  });
  // Compiling the Schema to Model //=====================================
  let SomeList = mongoose.model('SomeList', someListSchema);


  // Setting up Queries and Methods //====================================

  let save = (listItems, callback) => {
  //listItems is an array of one or multiple objects
  mongoData = listItems.data.map((item) => {
    return {
      list_id: item.id,
      name: item.name,
      owner: item.owner.login,
      item_count: Number(item_count)
    }
  })

  let deleteList = (list_id, callback) => {
    SomeList.deleteMany({ "owner": item.id }, callback);
  }

  // save multiple documents to the collection referenced by SomeList Model
  SomeList.create(mongoData, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sucessfully Saved');
    }
  });
}

  // Exporting functions //===============================================
  module.exports.save = save;
  module.exports.deleteList = deleteList;

//================================================================================================================
// MONGO COMMAND LINE FUNCTIONS
//================================================================================================================

  // initiate database
  mongo
  // list all databases
  show databases
  // select which database to use
  use somelist;
  // show all collections
  show collections;
  // count documents in collections by specific name
  db.somelist.countDocuments({owner: "someOwner"});
  // delete documents in a collection
  db.somelist.deleteMany({ owner: "someOwner" });
  // see all documents in a collection
  db.somelist.find()
  // find, sort, limit records
  db.somelist.find().sort({ item_count: -1 }).limit(25);
