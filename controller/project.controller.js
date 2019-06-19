const myProject = require('../models/project')

const showAllProjects = (req, res)=> {
  myProject.find({})
  .then( allProjects => {
    res.send(allProjects)
  })
  .catch (err => {
    console.log(err);
  })
}

const showOneProject = (req, res) => {
  const { id } = req.params;
  myProject.find({ id: id })
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
  myProject.findOne({id})
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
  console.log(req);
  const { id } = req.params
  myProject.findOneAndDelete({ id })
  .then( doc => {
    if(!doc) return res.send(`No Project found at name ${name}`)
    res.send(`${doc.name} deleted from database`)
  })
  .catch((err) => {
    return res.json(err)
  });
};

const createProject = (req,res) => {
  const { id, name, price } = req.body
  console.log("hello");
  myProject.create({ id, name, price })
  .then( newProject => {
    console.log(newProject);
    res.json(newProject);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {showAllProjects, showOneProject, updateProject, deleteProject, createProject}