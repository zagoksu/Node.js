const fetch = require('node-fetch');
const URL = 'http://api.icndb.com/jokes/random/';

const randomJoke = function(url) {
  fetch(url)
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => console.log(json.value.joke))
    .catch(err => console.log(err));
};

randomJoke(URL);