const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  let data = JSON.parse(body);
  if (data.length) {
    console.log(data[0].description);
    //console.log(typeof data);
  } else if (data.length === 0) {
    console.log(`${breed} Breed not found`);
  } else {
    console.log('error:', error);
  }
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});