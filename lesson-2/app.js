const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/',(req, res) => {
    console.error(__filename);
    console.error(__dirname);
    console.error(path.join(__dirname, 'static'));
res.end('ok')
});

app.get('/login',(req, res) => {
    res.end('login page')
});

app.listen(3000, () => {
    console.log('Server listen on port 3000...');
});