const express = require('express');
const path = require('path')
const app = express();


const PORT = process.env.PORT || 5050;


app.use(express.static(path.join(__dirname, '..', 'Frontend')));
app.use(express.static(path.join(__dirname, '..', 'Backend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Frontend', 'html', 'index.html'));
});


app.get

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  });