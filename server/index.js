const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const PORT = 8080

const characterRoutes = require('./routes/character');
app.use('/character', characterRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))