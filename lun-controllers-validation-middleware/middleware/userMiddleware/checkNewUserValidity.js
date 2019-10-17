const {userValidator} = require('../../validators');
//Create validation middleware
module.exports = (req, res, next) => {
    try {
        const newUserData = req.body;

        userValidator.newUserValidator(newUserData);
        next()

    } catch (e) {
        res.status(400).json(e.message);
    }
};