const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path'); //no se si es necesario?


// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});


// Configuración de Handlebars para plantillas
app.set('view engine', 'handlebars');
app.engine('handlebars', 
    exphbs.engine({
        defaultLayout: 'main', // principal
        layoutsDir: path.join(__dirname, 'views'), //test    
    partialsDir: path.join(__dirname, 'views'), // carpeta views
}));


// Middleware para servir archivos estáticos (Bootstrap y jQuery)
app.use(express.static(path.join(__dirname, 'public')));

//Carpeta assets
app.use(express.static(path.join(__dirname, 'assets')));

// Ruta raíz que renderiza la vista con el Dashboard
app.get('/', (req, res) => {
    const productos = ['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate'];
    res.render('dashboard', { productos });
});

