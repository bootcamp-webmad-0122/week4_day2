// Require express
const express = require('express')

// Create express app
const app = express()

// Static resources setup
app.use(express.static('public'))

// Routing
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/popino', (req, res) => {
    res.sendFile(`${__dirname}/views/popino-page.html`)
})

// Server listen
app.listen(5005, () => console.log('Servidor levantacdo en puerto 5005'))