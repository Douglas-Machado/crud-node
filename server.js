const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('pages/index')
})

app.get('/list', function(req, res){
  res.render('pages/list', {

  })
})

app.post('/list', function(req, res
  ){
  res.render('pages/list')
})

app.listen(8080, () =>{
  console.log('listening on 8080')
})