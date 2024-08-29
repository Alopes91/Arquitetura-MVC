const express = require('express')
const path = require('path')

// Controladores
const news = require('./src/controllers/news')

// Configurações do serviço
const app = express()
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'src','views','news'))

// Rotas
app.get('/', news.home)

// Executar o serviço
app.listen(8080, () => {
    console.log('Serviço executando em http://localhost:8080')
    console.log('Para parar o serviço aperte CRTL+C')
})
