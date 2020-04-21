const express = require("express");
const exphbs = require("express-handlebars");
const axios = require('axios');
const app = express();
const PORT = 3000;

const API_KEY = require('./sources/keys.json').API_KEY;

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));


app.get("/", function(req, res) {
  res.render("index");
});


app.post("/weather", function(req, res) {
  const cityName = req.body.cityName;
  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`;
    axios
      .get(url)
      .then(response =>{
        console.log(response.data);
        res.render('index', {
          weatherText: `The temperature in ${cityName} is ${response.data.main.temp} °C!`,
        })
      }
      )
      .catch(() => res.render('index', { weatherText: 'City is not found' }));
  } else {
    res.render('index',{ weatherText: "Please, Enter a city name" });

}});


app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));