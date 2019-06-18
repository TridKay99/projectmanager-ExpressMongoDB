const Project = require('../models/project')

const showAllProjects = (req, res)=> {
  Project.find({})
  .then( allProjects => {
    res.send(allProjects)
  })
  .catch (err => {
    console.log(err);
  })
}

const showOneProject = (req, res) => {
  const { id } = req.params;
  Project.find({ id: id })
    .then(project => {
      return res.send(project);
    })
    .catch(err => {
      return res.json(err);
    });
};

const updateProject = (req, res) => {
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
}

const deleteProject = (req, res) => {
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
}

const createProject = (req,res) => {
  const { id, name } = req.body
  
  Project.create({ id, name })
  .then( newProject => {
    console.log(newProject);
    res.json(newProject);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {showAllProjects, showOneProject, updateProject, deleteProject, createProject}