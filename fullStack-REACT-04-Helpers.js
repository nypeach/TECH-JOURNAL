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