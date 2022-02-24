const express = require('express')
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express()
const taskRoutes = require('./routes/tasks_routes')
const regRoutes = require('./routes/registration_routes')
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: true}))

//const tasks = require('./controllers/tasks')

// let db = new sqlite3.Database('backend');

// const sequelize = new Sequelize('backend',null,null,{ //ya no se necesita escribir el codigo para conectarse y desconectarse a la base de datos ya que sequelize lo hace
//   dialect:'sqlite',
//   storage:'./backend'
// });
app.engine('pug', require('pug').__express) //para usar pug

app.set('view engine','pug');

app.use(methodOverride('_method'));

app.use(taskRoutes);
app.use(regRoutes);

//app.get('/tasks',tasks.home)

//db.run('CREATE TABLE task(id int AUTO_INCREMENT, descripcion varchar(255))');
//ya fue creada

//app.post('/pendientes',function(req,res){
     
 // db.run(`INSERT INTO task (descripcion) VALUES(?)`,req.body.descripcion);

 // res.send('Insercion finalizada');

//})

app.listen(3000)


// process.on('SIGINT',function(){
// console.log("Adios atte, el servidor")
// db.close();
// process.exit();
// })

