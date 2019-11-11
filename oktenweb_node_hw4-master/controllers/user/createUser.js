const dataBase = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const usersModel = dataBase.getModel('User');

        await usersModel.create(userToCreate);

        res.redirect('users')
    }
    catch (e) {
        res.json(e.message);
    }
};