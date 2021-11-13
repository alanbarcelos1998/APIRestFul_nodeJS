// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')


app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req,res) => {
    // mostrar req

    res.json({message: "Olá usuário!"})
})

// entregar uma porta
const DB_USER = 'Alan'
const DB_PASSWORD = encodeURIComponent('YdnwZZQxj3nwrs4C')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.hi9js.mongodb.net/bancodaapi?retryWrites=true&w=majority`
).then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))