const express = require('express');
const exprHb = require('express-handlebars');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));


app.engine('.hbs', exprHb({
    defaultLayout: null,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {getUsersPages, getHousesPages} = require('./getPages');
let {user, house} = require('./controllers');
let {userMiddleware, houseMiddleware} = require('./middleware');
let {userRouter, houseRouter} = require('./router');

app.get ('/', getUsersPages.getMainPage);
app.get ('/register', getUsersPages.getRegisterPage);
app.get ('/login', getUsersPages.getLoginPage);
app.get ('/new-house', getHousesPages.getHouseMainPage);

app.post('/auth', userMiddleware.checkUserIsInDb, user.getUser);


app.use('/users', userRouter);
app.use('/houses', houseRouter);


app.all('*', getUsersPages.getErrorPage);


app.listen(5000, () => {
    console.log('HELLO');
});