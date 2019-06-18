const express = require('express'),
router = express.Router(),
controllerMethods = require('../controller/project.controller')


router.get('/getAllProjects', controllerMethods.showAllProjects)

router.get('/projects/:id', controllerMethods.showOneProject)

router.put('/projects/:id', controllerMethods.updateProject)

router.delete('/projects/:id', controllerMethods.deleteProject)

router.post('/newProject', controllerMethods.createProject)

module.exports = router