const express = require('express');
const path = require('path'); 

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome Page', message: 'Hello, Express with EJS!' });
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
