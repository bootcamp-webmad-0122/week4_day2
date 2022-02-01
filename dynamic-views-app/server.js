const express = require('express')

const app = express()

app.use(express.static('public'))
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

// ROUTING
app.get('/', (req, res) => {

    const studentInfo = {
        name: 'Gloria',
        lastName: 'Suárez',
        address: {
            street: 'Whatever Street',
            neighbourhood: '<em>Prospe</em>',
            number: 23,
            postalCode: 28002
        },
        campus: 'Madrid',
        bootcamp: 'Web development',
        subjects: ['HTML', 'CSS', 'Express', 'React', 'Node'],
        teacher: undefined,
        debt: 5000,
        bankAccount: undefined
    }

    res.render('index-page', studentInfo)
})

app.listen(5005, () => console.log('Servidor levantado en puerto 5005'))