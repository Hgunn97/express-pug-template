//Imports
const express = require('express');
const app = express();

//Server Config
const port = 3000

//Set up the view engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

//Index Page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
});

//About page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
});

//Listen to client requests on port 3000 as defined above
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));