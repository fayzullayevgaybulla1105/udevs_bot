require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const router = require('./routes/index')
const ErrorHander = require('./middleware/ErrorHandlingMiddleware')

const PORT = 5009
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.urlencoded())
app.use(fileUpload({}))
app.use('/api', router)

//Obrabotka oshibok, posledniy Middleware
app.use(ErrorHander)


const start = async () => {
    try {

        // await sequelize.authenticate()
        // await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}


start()
