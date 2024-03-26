require('dotenv').config()
// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const hbs = require('express-hbs')
const port = process.env.PORT || 3000

const app = express()

// Set handlebars as the view engine for dynamic HTML pages
app.engine(
	'hbs',
	hbs.express4({
		partialsDir: __dirname + '/views/partials',
	})
)
app.set('view engine', 'hbs')

// Define the directory where your static used files and the views for rendering HTML are located
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(__dirname + '/static'))

// Middleware for Express

// Database Initialization
db().catch((err) => console.log(err))
async function db() {
	await mongoose.connect(process.env.MONGOOSE_DATABASE_STRING)
	console.log('Database running and connected...')
}

// Routes section
app.get('/', async (req, res) => {
	res.status(200).render('landing')
})

// Listen on Port X
app.listen(port, () => {
	console.log(`Server running on PORT:${port}`)
})
