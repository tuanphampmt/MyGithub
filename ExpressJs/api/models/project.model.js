const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = Schema({
    nameProject: String,
    descProject: String,
    task: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
});





module.exports = mongoose.model('Project', projectSchema);
