const Project = require('../models/project.model.js');
module.exports = {
    index: async (req, res, next) => {
        try {
            var projects = await Project.find({});
            console.log(projects);
            res.status(200).json(projects);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
    ,
    newProject: async (req, res, next) => {
        try {
            const newProject = new Project(req.body);
            await newProject.save();
            console.log(newProject);
            res.status(201).json(newProject)
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
};
