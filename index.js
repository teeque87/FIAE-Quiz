const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use('/static', express.static(__dirname + '/static'))

// Database Init
main().catch((err) => console.log(err))
async function main() {
	await mongoose.connect(process.env.MONGOOSE_DATABASE_STRING)
	console.log('Database running...')
}

app.get('/', function (req, res) {
	res.send(' ')
})

app.listen(3000)
