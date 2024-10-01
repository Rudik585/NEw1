const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Я не особо понял что такое второй маршрут !!!
app.get('/about', (req, res) => {
    res.send('This is the about page');
  });
  
  app.get('/contact', (req, res) => {
    res.send('This is the contact page');
  });




  app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
  });