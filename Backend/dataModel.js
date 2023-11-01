const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  Project: {
    Title: String,
    Technologies: String,
  },
  Technical_Skillset: {
    Frontend: String,
    Backend: String,
  },
  Other_Information: {
    Availability: String,
  },
});

const ProjectModel = mongoose.model('demo', projectSchema);

module.exports = ProjectModel;
