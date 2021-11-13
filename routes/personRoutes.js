const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

/
// Create - criação de dados
router.post('/', async (req, res) => {

    // req.body

    // {name: "Alan", salary: 1600, approved: false}
    const {name, salary, approved} = req.body

    if (!name) {
        res.status(422).json({error: 'O nome é obrigatório!'})
    }

    const person = {
        name,
        salary,
        approved
    }

    try {

        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})

    } catch(error) {
        res.status(500).json({error: error})
    }
})

// Read - leitura de dados

module.exports = router