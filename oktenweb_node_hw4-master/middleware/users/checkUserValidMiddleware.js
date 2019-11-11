const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
 try {
     const user = req.body;
     userValidator.newUserValidator(user);
     next()
 }
catch (e) {
    res.json (400).json(e.message)
}
};
