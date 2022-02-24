const express = require('express')

const app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('assets',{
    etag: false, //cache etag desactivado
    maxAge:'5h'
})); // carpeta estatica para servir archivos //use inserta un nuevo middleware en el stack de middlewares


app.get('/',function(req,res){
  // res.sendFile('index.html',{root: __dirname});
  res.render('index')
 //
})

app.listen(3000)