const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')



const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

// templace engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
// app.engine('handlebars', handlebars());
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')



app.get('/', (req, res) => {
 
    res.render('home');

})

app.get('/news', (req, res) => {
 
  res.render('news');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  