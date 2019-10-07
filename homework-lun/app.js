const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

const users = [];
const houses = [];

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null //important thing!!!
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/house', (req, res) => {
    res.render('addHouse')
});

app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/register', (req, res) => {
    const newUser = req.body;
    newUser.user_id = users.length + 1;
    users.push(newUser);
    console.log(newUser);
    res.render('login');
    // res.redirect('users')
    // res.redirect(`/users/${newUser.user_id}`)
});

app.post('/house', (req, res) => {
    const newHouse = req.body;
    newHouse.house_id = houses.length + 1;

    houses.push(newHouse);
    console.log(newHouse);

    res.redirect(`/house/${newHouse.house_id}`)
});

app.get(`/users/:user_id`, (req, res) => {
    const foundUser = users.find(user => +req.params.user_id === user.user_id);

    foundUser ? res.json(foundUser) : res.status(404).end('USER DID NOT FIND');
});


app.get(`/house/:house_id`, (req, res) => {
    const foundHouse = houses.find(house => +req.params.house_id === house.house_id);

    foundHouse ? res.json(foundHouse) : res.status(404).end('HOUSE DID NOT FIND')
});

app.post(`/search`, (req, res) => {
    const searchingHouse = req.body;

    const FoundHouse = houses.find(house => house.city === searchingHouse.city);
    FoundHouse ? res.redirect(`/house/${FoundHouse.house_id}`) : res.status(404).end('HOUSE DID NOT FIND')
});

app.post('/login', (req, res) => {
    const loginUser = req.body;

    const FoundUser = users.find(user => user.email === loginUser.email && user.password === loginUser.password);
    FoundUser ? res.redirect(`/users/${FoundUser.user_id}`) : res.status(404).end('USER DID NOT FIND');
});

app.all('*', (req, res) => {
    console.log('error 404');
    res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});

app.listen(3000, () => {
    console.log('Server listen on port 3000...');
});
