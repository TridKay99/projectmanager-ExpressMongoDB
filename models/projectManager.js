const mongoose = require('mongoose')

const projectManagerSchema = new mongoose.Schema ({
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
  image: {
    type: String,
    required: true,
    unique: false
  },
},
  { collection: 'projectManager'}
)

module.exports = mongoose.model('projectManager', projectManagerSchema)