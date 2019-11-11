const {houseValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const house = req.body;
        houseValidator.newHouseValidator(house);
        next()
    }
    catch (e) {
        res.json (400).json(e.message)
    }
};