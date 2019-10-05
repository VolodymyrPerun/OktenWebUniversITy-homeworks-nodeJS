// const fs = require('fs');
//
// function addPhoto(setPhoto, getPhoto) {
//     fs.createReadStream(getPhoto).pipe(fs.createWriteStream(setPhoto));
//     console.log('photo inject');
//     fs.createReadStream(`./img/${getPhoto}`)
//         .pipe(fs.createWriteStream(`./${group}/${name}/`))
// }
//
// module.exports = addPhoto;