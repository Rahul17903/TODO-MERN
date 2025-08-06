const express = require('express')
const connectDB = require('./config/db')
const authRouter = require('./route/auth')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()


dotenv.config()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())
connectDB()

app.use('/api/auth',authRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
