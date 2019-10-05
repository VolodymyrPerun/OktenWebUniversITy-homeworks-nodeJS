// Зробити функцію, яка буде робити профайли стуентів по групах.
//     Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten
// . В той файл потрібно записати інфу про студента. ЙОго данні. Довільні.
//     Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати
//     в папку з профіайлом студента стрімами.

// * Поміняти місцями студентів з 18 та з 20 години
// Ну і само собою все робить ТІЛЬКИ через FS

const fs = require('fs');

fs.mkdir('./jscx-1800', () => {
    console.log('created repo jscx-1800');
});

fs.mkdir('./jscx-1800/Victor_Okten', () => {
    console.log('created repo Victor_Okten');
});

fs.appendFile('./jscx-1800/Victor_Okten/Victor_Okten_info.txt',
    '\n name: Victor,' +
    '\n study: Okten Web University, ' +
    '\n age: 23,' +
    '\n status: Middle,', () => {
    console.log('created text info about Victor');
});

fs.mkdir('./jscx-2000', () => {
    console.log('created repo jscx-2000');
});

fs.mkdir('./jscx-2000/Volodymyr_Okten', () => {
    console.log('created repo Volodymyr_Okten');
});

fs.appendFile('./jscx-2000/Volodymyr_Okten/Volodymyr_Okten_info.txt',
    '\n name: Volodymyr,' +
    '\n study: Okten Web University, ' +
    '\n age: 33,' +
    '\n status: student,', () => {
        console.log('created text info about Volodymyr');
    });
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

