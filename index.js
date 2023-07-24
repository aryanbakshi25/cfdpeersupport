const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

// Set up the public directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', async(req, res) => {
    res.send(await readFile('./public/index.html', 'utf8'));
});

// Server the CSS files
app.use(express.static('public/css files'));

// Serve the image files
app.use(express.static('public/images'));

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));