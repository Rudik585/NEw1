const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

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
  res.render('about', {
    title: 'Contact',
    description: 'Contact us page'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
