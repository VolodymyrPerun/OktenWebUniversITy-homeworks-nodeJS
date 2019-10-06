const express = require('express');

const app = express();

app.get('/',(req, res) => {
res.end('ok')
});

app.get('/login',(req, res) => {
    res.end('login page')
});

app.listen(3000, () => {
    console.log('Server listen on port 3000...');
});