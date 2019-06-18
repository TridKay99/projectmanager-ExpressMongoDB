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



app.get('/allProjects', (req, res)=>{
  Project.find({})
  .then( allProjects => {
    return res.json(allProjects)
  })
  .catch (err => {
    console.log(err);
  })
})

app.get('/projects/:id', (req, res)=>{
  const { id } = req.params
  Project.find({id: id})
  .then( project => {
    return res.json(project)
  })
  .catch( err => {
    return res.json(err)
  });
})


app.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { newName } = req.body
  Project.findOne({id})
  .then( project => {
    project.name = newName
    project.save()
    .then( (doc) => {
      res.send(`${doc.name} has been updated`)
    })
    .catch( error => console.log(error) )
  })
  .catch( err => res.json(err))
  })



app.delete('/projects/:id', (req, res)=>{
  const { id } = req.params
  Project.findOneAndDelete({ id })
  .then( doc => {
    if(!doc) return res.send(`No project found at name ${name}`)
    res.send(`${doc.name} deleted from database`)
  })
  .catch((err) => {
    return res.json(err)
  });
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



app.post('/project', (req, res) => {
  // requires all of these in postman to post
  const { id, name, moves, height } = req.body

  Pokemon.create({ id, name, moves, height })
  .then( newPoke => {
    console.log(newPoke);
    res.json(newPoke);
  })
  .catch((err) => {
    console.log(err);
  });
});
