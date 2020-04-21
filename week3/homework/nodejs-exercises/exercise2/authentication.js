const fetch = require('node-fetch');
const URL = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';

const authenticate = function(url) {
  fetch(url, { headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' } })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

authenticate(URL);