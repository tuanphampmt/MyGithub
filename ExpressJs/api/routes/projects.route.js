const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projects.controller');
// Không phải localhost:3000/ mà là localhost:3000/project/
router.route('/')
    .get(ProjectController.index)
    .post(ProjectController.newProject);


module.exports = router;
