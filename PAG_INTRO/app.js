const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

// app.get('/', (req, res) => res.render('index'));
app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'PAG SITE',
        titleHtml: '<i>AWESOME</i>',
    products: [
        {name:'tomato',price:100},
        {name: 'potato', price: 200 },
        {name: 'cucumber', price: 150 },
        {name: 'strawberry', price: 500 }
    ]
    });

});

app.use((req, res, next) => {
    console.log('error 404');
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port 3000!`);
});


