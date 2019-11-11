const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res) => {
    try {
        const usersModel = dataBase.getModel('User');

        const users = await usersModel.findAll();

        if (!users.length) {
            throw new Error('There is no user');
        }

        res.json (users)
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};
