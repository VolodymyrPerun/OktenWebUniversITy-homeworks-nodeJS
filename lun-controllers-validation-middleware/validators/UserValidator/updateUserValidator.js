module.exports = (UpdateUserData) => {

   const {userID, email, name, password} = UpdateUserData;

    if (!userID || !email || !name || !password) {
        throw new Error('Bad request (UpdateUserData is not valid)')
    }
};