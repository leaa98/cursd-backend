const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
   
 name:'session',
 keys:['33r43huf38hf3hujvb33332nv','4jh3++bvu43bbvu2445221?.']
}));

app.get('/',function(req,res){
    req.session.visits=req.session.visits||0 //si es undefined el valor por defecto será 0

    req.session.visits+=1

    res.send(`${req.session.visits} visita(s)`)
})

app.listen(3000)