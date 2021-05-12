const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, err => {
  if (err) {
    console.error('Não foi possivel iniciar')
  } else {
    console.log('Convert My Money esta online')
  }
})