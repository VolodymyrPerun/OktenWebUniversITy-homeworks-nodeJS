const fs = require('fs');
const addPhoto = require('./addPhoto');

function createStudent(group, name, data, getPhoto) {
    fs.mkdir(`./${group}/`, error => {
        if (!error) {
            console.log(`Group ${group} added`);
        }
    });

    fs.mkdir(`./${group}/${name}`, error => {
        if (!error) {
            console.log(`Student ${name} added`);
        }
    });

    fs.writeFile(`./${group}/${name}/info.txt`,
        ` name: ${data.name},\n age: ${data.age},\n status: ${data.status}.`,
        error => {
            if (!error) {
                console.log('info added');
            }
        });

    fs.createReadStream(`./${getPhoto}`)
        .pipe(fs.createWriteStream(`./${group}/${name}/`))
}

module.exports = createStudent;