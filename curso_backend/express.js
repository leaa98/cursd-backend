const express = require('express')
const bodyParser = require('body-parser')

const app= express(); //espeifica rutas a las cuales responde
app.use(bodyParser.urlencoded({extended:true}));

app.get('/saludo',function(req,res){  // ruta "/""
  res.send(`Hola ${req.query.name}`);
})

app.post('/',function(req,res){

    res.send(`Hola ${req.body.name}`)

})

app.listen(3000)
