 const fs = require('fs');

function addPhoto(group, name, getPhoto) {
    // fs.createReadStream(getPhoto).pipe(fs.createWriteStream(setPhoto));
    // console.log('photo inject');
    fs.createReadStream(`./${getPhoto}`)
        .pipe(fs.createWriteStream(`./${group}/${name}/${name}.png`))
}

module.exports = addPhoto;