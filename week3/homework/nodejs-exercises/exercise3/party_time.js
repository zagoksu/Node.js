const fetch = require('node-fetch');
const URL = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const people = {
    "name": "zagoksu",
    "numberOfPeople": 4
  };

const makeReservation = function(url, body) {
  fetch(url, {  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' } })
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(err => console.log(err));
};

makeReservation(URL, people);


// axios
// .post(URL, people)
//   .then(response=> console.log(response))
//   .then(response=> console.log(response.data))
//   .catch(error=> console.log(error.response.status, error.response.statusText))