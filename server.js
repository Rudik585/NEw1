const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const browserSync = require('browser-sync');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(expressLayouts);
app.set('layout',  path.join(__dirname, 'views/layout'))
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome Page', message: 'Hello, Express with EJS and CSS/JS!' });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    description: 'This is the about page rendered dynamically with EJS, CSS, and JS!',
    team: ['Alice', 'Bob', 'Charlie']
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    description: 'Contact us page'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

browserSync.init({
  proxy: `http://localhost:${PORT}`,
  files: ["views/**/*.*", "public/**/*.*"],
  port: 3001,
  open: false,
  notify: false,
  reloadDelay: 500 
});