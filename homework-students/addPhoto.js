 const fs = require('fs');

function addPhoto(group, name, getPhoto) {

    fs.createReadStream(`./${getPhoto}`)
        .pipe(fs.createWriteStream(`./${group}/${name}/${name}.png`))
}

module.exports = addPhoto;