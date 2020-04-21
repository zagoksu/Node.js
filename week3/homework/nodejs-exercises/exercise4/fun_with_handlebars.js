const Handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];

const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

const randomCard = function(arr) {
    return arr[Math.floor(Math.random() * 7)]
}


const source = ` {{subject}} is necessary to {{punchline}}  `;
const template = Handlebars.compile(source);
 
const data = {  subject : randomCard(subjects),
    punchline : randomCard(punchlines)};
const result = template(data);


console.log(result);