const express = require('express')
const app = express()
const port = 7019

app.get('/', (req, res) => res.send('keydrag.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
