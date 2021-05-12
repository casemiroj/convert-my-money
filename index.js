const express = require('express')
const app = express()

app.listen(3000, err => {
  if (err) {
    console.error('Não foi possivel iniciar')
  } else {
    console.log('Convert My Money esta online')
  }
})