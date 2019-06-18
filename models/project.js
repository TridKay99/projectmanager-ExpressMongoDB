const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema ({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
},
  { collection: 'project'}
)

module.exports = mongoose.model('project', projectSchema)