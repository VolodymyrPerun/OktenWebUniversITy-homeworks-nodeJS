const {dataBase} = require ('../../dataBase').getInstance();
module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const housesModel = dataBase.getModel('House');

        const houses = await housesModel.findByPk(house_id);

        if (!houses.length) {
            throw new Error(`House with ID ${house_id} doesn't exist`)
        }

        req.house = houses;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}