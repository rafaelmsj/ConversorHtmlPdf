const express = require('express');
const app = express();

const routes = require('./controllers/downloadUpload')

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index')
})

app.use('/', routes)

app.listen(3000, ()=> {
    console.log(`App online!`)
})