const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(URL, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null)
    }
    if (data.length === 0) {
      callback('No Data Available', null);
    }
    if (data.length) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
  });
  
};

module.exports = { fetchBreedDescription }