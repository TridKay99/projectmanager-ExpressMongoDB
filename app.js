const express = require('express'),
app = express(),
mongoose = require('mongoose'),
Project = require('./models/project'),
projectManager = require('./models/projectManager')


const port = process.env.PORT || 5000

require('dotenv').config()
const mongoURIENV = process.env.MONGO_URI

mongoose.connect(mongoURIENV, { useNewUrlParser: true }, (err) => {
  if(err) return console.log(`${err}`)
  console.log("connected to mongodb")
})

app.use(express.json())

app.listen(port, () => console.log(`listening on port ${port}...`));



app.get('/', (req,res) => {
  res.send('butts')
})


app.post('/newProject', (req,res) => {
  const { id, name } = req.body
  
  Project.create({ id, name })
  .then( newProject => {
    console.log(newProject);
    res.json(newProject);
  })
  .catch((err) => {
    console.log(err);
  });
});
