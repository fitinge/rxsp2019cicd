var express = require('express')

var app = express()

app.get('/', (req, res) => res.send('ok'))

app.listen(3000, () => console.log('Rodando na porta 3000'))