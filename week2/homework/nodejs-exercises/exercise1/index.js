const express = require('express');
const app = express();
const fs = require("fs");
const path = require('path')
const PORT = 3000;

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
app.use(express.json());

// create new posts
app.post('/blogs', (req, res) => {
    const title =  req.body.title;
    const content = req.body.content;
    // console.log(title);
    // console.log(content);
    fs.writeFileSync(title, content);
    res.end('ok')
    
});

// update existing posts
app.put('/blogs', (req, res) => {
    const title =  req.body.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end("ok");
    } else {
      res.end('post does not exist');
    }
})

//Delete posts
app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.end("post does not exist");
  }
})

//Reading posts
app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  // console.log(title);
  if (fs.existsSync(title)) {
    res.sendFile(title);
  } else {
    res.end("post does not exist");
  }
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
