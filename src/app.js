const express = require('express')
const morgan = require('morgan')
const handlebars = require("express-handlebars").engine;
const path = require('path')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, 'public')));

// Express handle bar
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})