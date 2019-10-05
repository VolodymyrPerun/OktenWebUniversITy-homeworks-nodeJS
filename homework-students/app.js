// Зробити функцію, яка буде робити профайли стуентів по групах.
//     Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten
// . В той файл потрібно записати інфу про студента. ЙОго данні. Довільні.
//     Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати
//     в папку з профіайлом студента стрімами.

// * Поміняти місцями студентів з 18 та з 20 години
// Ну і само собою все робить ТІЛЬКИ через FS

const createStudens = require('./createStudent');


createStudens('jscx-1800', 'Victor_Okten', {
    name: 'Victor',
    age: 23,
    status: 'middle'
},
    './img/Fazer.png');

createStudens('jscx-2000', 'Volodymyr_Okten', {
    name: 'Volodymyr',
    age: 33,
    status: 'student'
},
    './img/myAvatar.jpg');



// let readStream2 = fs.createReadStream('C:/PROGRAMMING/MAIN/myAvatar.jpg');
// readStream.on('data', data => {
//     console.log(data);
//     console.log('read data 2');
// });
//
// readStream2.pipe(fs.createWriteStream('./jscx-2000/Volodymyr_Okten/' +
//     'Volodymyr.jpg'));


// for (let i = 0; i < 10; i++) {
//
//     fs.appendFile('./myDir/text.txt', '\n Hello text!',() => {
//         console.log('created text');
//     });
// }
//
// fs.readFile('./text.txt', ((err, data) => {
//     console.log(err, data.toString())
// }));
//
// let readStream = fs.createReadStream('./text.txt');
// readStream.on('data', data =>{
//     console.log(data.toString());
// });
//
// let writeStream = fs.createWriteStream('./SomeFile.txt');
// writeStream.write('Some Text');
//
// console.log(myFile);

