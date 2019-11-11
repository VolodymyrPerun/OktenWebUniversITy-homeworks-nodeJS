module.exports = userObject => {
    const {name,email, password} = userObject;
    if (!email || !password || !name) {
        throw new Error('Not valid!')
    }
}