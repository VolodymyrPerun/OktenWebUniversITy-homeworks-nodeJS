const {houseValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const updateHouseData = req.body;

        houseValidator.updateHouseValidator(updateHouseData);
        next()

    }catch (e) {
        res.status(400).json(e.message)
    }

};