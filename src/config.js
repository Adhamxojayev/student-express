const dotenv = require('dotenv')
const path = require('path')
const PORT = process.env.PORT || 3000  

const config = dotenv.config({
    path:path.resolve(process.cwd(), 'src', '.env')
}) 

const pgConfig = {
	user: process.env.PG_USER,
  	password: process.env.PG_PASSWORD,
  	host: process.env.PG_HOST,
  	port: process.env.PG_PORT,
  	database: process.env.PG_DATABASE
}

module.exports = {
	PORT,
	pgConfig
}