const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const axios = require('axios');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get("/", function(req, res) {
    res.render("index");
  });


app.post("/weather", function(req, res) {
  const cityName = req.body.cityName;
  if (cityName) {
    res.render('index', {cityName})
  } else {
    res.send("City not found!");
  }
})

app.listen(PORT)