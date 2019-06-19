const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema ({
  id: {
    type: Number,
    required: false,
    unique: false,
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  }
},
  { collection: 'apple'}
)

module.exports = mongoose.model('myProject', projectSchema)