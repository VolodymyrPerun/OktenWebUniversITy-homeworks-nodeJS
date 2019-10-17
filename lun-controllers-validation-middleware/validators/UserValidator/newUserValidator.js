module.exports = (newUserData) => {

    const {email, name, password} = newUserData;

    if (!email || !name || !password){
        throw new Error('New userMiddleware data is  not correct')
    }
};