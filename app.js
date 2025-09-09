//invocamos express
const express = require('express');
const app = express();


// set urlencoded para que el servidor entienda los datos que le enviamos desde un formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//invocar a dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

//directorio publico
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

console.log(__dirname);

//motor de plantillas
app.set('view engine', 'ejs');

//invocar a bcryptjs
const bcryptjs = require('bcryptjs');

//variables de sesion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))

//invocar a la conexcion de la base de datos

//establecer las rutas
app.get('/', (req, res) => {
    res.render('index', {msg:'Este es el mensaje desde app.js'});
});

app.get('/login', (req, res) => {
    res.render('login', {msg:'Este es el mensaje desde app.js'});
});

app.get('/register', (req, res) => {
    res.render('register', {msg:'Este es el mensaje desde app.js'});
});

app.listen(3000, (req, res) => {
    console.log('Servidor corriendo en http://localhost:3000');
});

// Registro
app.post('/register', async (req, res) => {
    const registro_academico = req.body.registro_academico;
    const password = req.body.password;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    let passwordHaash = await bcryptjs.hash(password, 8);

    //conectar con la base de datos (conectionquery)
    
})