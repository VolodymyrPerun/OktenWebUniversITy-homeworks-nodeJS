
const mongoose = require('mongoose');
const PersonModel = require('./models/Person');
mongoose.connect('mongodb://localhost:27017/humans', { useNewUrlParser: true, useFindAndModify:false});

// async function init() {
// let john = new PersonModel({
//     name: 'John',
//     age: 40,
//     skills:['JS', 'JAVA', 'PHP'],
//     hair:true
// });
// let savedJohn = await john.save();
// console.log(savedJohn);
// };

// init().then();///////вносимо в базу одного



// async function init() {
//     let peoples = await PersonModel.create({
//         name: 'Will',
//         age: 20,
//         skills: ['JScript', 'JAVA', 'PHP'],
//         hair: true
//     }, 
//     {
//         name: 'Dolly',
//         age: 22,
//         skills: ['JScript', 'CSS', 'HTML'],
//         hair: true
//     }, 
//     {
//         name: 'Ivan-John',
//         age: 48,
//         skills: ['C++', 'CSharp', 'Python'],
//         hair: false
//     }, 
//     {
//         name: 'Lily',
//         age: 16,
//         skills: ['CSS'],
//         hair: true
//     }, 
//     {
//         name: 'Tod',
//         age: 22,
//         skills: ['JScript', 'JAVA', 'PHP'],
//         hair: false
//     }
//     );
//     console.log(peoples);
// };

// init().then();////вносимо в базу багато об'єктів, але нижче кращий варіант





// async function init() {
//     await PersonModel.insertMany(
//     [
//     {   name: 'Will',
//         age: 20,
//         skills: ['JScript', 'JAVA', 'PHP'],
//         hair: true
//     }, 
//     {
//         name: 'Dolly',
//         age: 22,
//         skills: ['JScript', 'CSS', 'HTML'],
//         hair: true
//     }, 
//     {
//         name: 'Ivan-John',
//         age: 48,
//         skills: ['C++', 'CSharp', 'Python'],
//         hair: false
//     }, 
//     {
//         name: 'Lily',
//         age: 16,
//         skills: ['CSS'],
//         hair: true
//     }, 
//     {
//         name: 'Tod',
//         age: 22,
//         skills: ['JScript', 'JAVA', 'PHP'],
//         hair: false 
//     }
// ]

// );

// }

// init().then();



// async function init() {
//     await PersonModel.create({
// name: 'xxx'
// });   
// }

// init().then();//////не спрацює, так як стоїть валідація на ім'я 'xxx' та на age



// async function init() {
//     await PersonModel.updateMany({name: 'Will'}, {name: 'xxx'}, {runValidators: true});   
// }

// init().then()


// async function init() {
//     await PersonModel.updateMany({name: 'Will'}, {name: 'xxx'}, {runValidators: true});   
// }

// init().then()///////////////замінюю настройки в базі окрім не валідних



// async function init() {
//     await PersonModel.findByIdAndUpdate('5cdaf34331a9581c84278236', {age: '107'}, {runValidators: true});
// }

// init().then() ///////////////замінюю настройки в базі, окрім не валідних, шукаю по id



// async function init() {
//     await PersonModel.findByIdAndDelete('5cdaf34331a9581c84278237');
// }

// init().then() ///////////////видаляю ою'єкт з бази по id




// async function init() {
// let founded = await PersonModel.find().sort('age: 1').skip(2).limit(2);
// console.log(founded);;
// }

// init().then() ///////////////шукаю об'єкт в базі і сортую по віку в порядку зростання, пропускаю 2-х, ліміт -2



// async function init() {
//     let founded = await PersonModel.find({hair: false});
//     console.log(founded);;
// }

// init().then() ///////////////шукаю об'єкти в якому hair: false 



// async function init() {
//     let founded = await PersonModel.find().findOlderThen(30).exec();
//     console.log(founded);;
// }

// init().then() ///////////////шукаю об'єкти в якому через findOlderThen вік більше 30 і веріант оброблення через ф-ю exec 



// async function init() {
// let IvanJohn = await PersonModel.findById('5cdaf34331a9581c84278235');
// console.log(await IvanJohn.findOlder());;
// }

//init().then() ///////////////шукаю об'єкти в якому через findOlder вік більше, ніж у вибраного по id об'єкта



async function init() {
    let IvanJohn = await PersonModel.findByAge(48);
    console.log(IvanJohn);
}

init().then() ///////////////шукаю об'єкти в якому через findByAge вказано певний вік напр. 48 років



