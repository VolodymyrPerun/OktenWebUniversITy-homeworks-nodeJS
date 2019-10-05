const fs = require('fs');

function createStudent(group, name, data) {
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

    fs.writeFile(`./${group}/${name}/${name}_info.txt`,
        ` name: ${data.name},\n age: ${data.age},\n status: ${data.status}.`,
        error => {
            if (!error) {
                console.log('info added');
            }
        });
}

module.exports = createStudent;