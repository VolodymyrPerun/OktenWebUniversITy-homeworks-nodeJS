const fs = require('fs');

function addPhoto(setPhoto, getPhoto) {
    fs.createReadStream(getPhoto).pipe(fs.createWriteStream(setPhoto));
    console.log('photo inject');
}

module.exports = addPhoto;