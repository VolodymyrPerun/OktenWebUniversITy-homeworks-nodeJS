const {dataBase} = require('../../dataBase').getInstance();

module.exports  = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const UserModel = dataBase.getModel('User');

        const userInDb = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id', 'name', 'email']
        });
        if (!userInDb) {
            throw new Error('Wrong data')
        }

        req.user = userInDb;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};