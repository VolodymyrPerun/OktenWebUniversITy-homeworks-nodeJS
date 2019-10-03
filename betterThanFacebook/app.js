const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const indexPath = path.join(__dirname, 'index.html');
const db = [{
    name: 'Victor',
    surname: 'Fazer',
    password: '12345',
    email: 'victor@mail.ru',
    id:1
}];
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(indexPath));

app.post('/user', (req, res) => {
    const {name, surname, password, email} = req.body;
    // const id = db.length + 1;
    const user = {
        name:name,
        surname:surname,
        email,
        id: db.length + 1
    }
    db.push(user);
    console.log('USER IS CREATED');
    res.redirect('/');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  let user = db.find(u => u.id == userId);
  if (!user) user = 'User is not found';
    res.json(user);
});

app.use((req, res, next) => {
    // console.log('error 404');
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, err => {
    if (err) console.log(err);
    console.log(`Example app listening on port 3000!`);
});