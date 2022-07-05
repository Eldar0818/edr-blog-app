const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const authRoute = require('./routes/auth')
const blogsRoute = require('./routes/blogs')
const usersRoute = require('./routes/users')

dotenv.config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
        .then(()=> console.log("Database is connected..."))
        .catch(err=> console.log(err))

  
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoute)
app.use('/blogs', blogsRoute)
app.use('/users', usersRoute)

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Server is running ...`);
})