const {houseValidator} = require('../../validators');
//Create validation middleware
module.exports = (req, res, next) => {
    try {
        const newHouseData = req.body;

        houseValidator.newHouseValidator(newHouseData);
        next()

    } catch (e) {
        res.status(400).json(e.message);
    }
};