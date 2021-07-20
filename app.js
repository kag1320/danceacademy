// (copy code)
const express = require("express");
const app = express();
const path = require("path");
const port = 80;

// using command npm init for setting up npm package,command npm install express.


// mongoose specific stuff (npm install mongoose)
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });

// Defining mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String
});
const Contact = mongoose.model('Contact', contactSchema);


// EXPRESS SPECIFIC STUFF (copy code)
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF (copy code)
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS (copy code)
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params); // here we are serving home.pug now,previously we were serving index.pug
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params); // here we are serving home.pug now,previously we were serving index.pug
})

// START THE SERVER (copy code)
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})