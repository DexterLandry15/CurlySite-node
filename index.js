const express = require('express')
const exphbs = require('express-handlebars')
const Route = require('./routes/headlers')
const PORT = '80'

const app = express()

app.use(express.static('public'));

const hbs = exphbs.create({
    defaultLayout: 'main' ,
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(Route)

async function start() {
    try{
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()