const myFile = require('./myFile');
const fs = require('fs');

fs.mkdir('./myDir',() => {
    console.log('created');
});

for (let i = 0; i < 10; i++) {

    fs.appendFile('./myDir/text.txt', '\n Hello text!',() => {
        console.log('created text');
    });
}

fs.readFile('./text.txt', ((err, data) => {
console.log(err, data.toString())
}));

let readStream = fs.createReadStream('./text.txt');
readStream.on('data', data =>{
    console.log(data.toString());
});

let writeStream = fs.createWriteStream('./SomeFile.txt');
writeStream.write('Some Text');

console.log(myFile)
