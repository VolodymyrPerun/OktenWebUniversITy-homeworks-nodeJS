// Зробити функцію, яка буде робити профайли стуентів по групах.
//     Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten
// . В той файл потрібно записати інфу про студента. ЙОго данні. Довільні.
//     Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати
//     в папку з профіайлом студента стрімами.

// * Поміняти місцями студентів з 18 та з 20 години
// Ну і само собою все робить ТІЛЬКИ через FS

const createStudent = require('./createStudent');
const addPhoto = require('./addPhoto')

createStudent('jscx-1800', 'Victor_Okten', {
    name: 'Victor',
    age: 23,
    status: 'middle'
});

createStudent('jscx-2000', 'Volodymyr_Okten', {
    name: 'Volodymyr',
    age: 33,
    status: 'student'
});
createStudent('jscx-2000', 'Volodymyr_Okten', {
    name: 'Volodymyr',
    age: 33,
    status: 'student'
});

createStudent('jscx-2000', 'Andriy_Okten', {
    name: 'Andriy',
    age: 25,
    status: 'student'
});

addPhoto('jscx-1800', 'Victor_Okten', './img/Fazer.png');
addPhoto('jscx-2000', 'Volodymyr_Okten', './img/myAvatar.jpg');
addPhoto('jscx-2000', 'Andriy_Okten', './img/Andriy.jpg');