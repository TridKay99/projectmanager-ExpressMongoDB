const express = require('express'),
app = express(),
cors = require('cors'),
mongoose = require('mongoose'),
Project = require('./models/project'),
projectRoutes = require('./routes/project.routes'),

projectManager = require('./models/projectManager')

app.use(express.json())
app.use(cors())

app.use('/', projectRoutes)
app.use("/",express.static('public'))




const port = process.env.PORT || 5000


require('dotenv').config()
const mongoURIENV = process.env.MONGO_URI

mongoose.connect(mongoURIENV, { useNewUrlParser: true }, (err) => {
  if(err) return console.log(`${err}`)
  console.log("connected to mongodb")
})


app.listen(port, () => console.log(`listening on port ${port}...`));