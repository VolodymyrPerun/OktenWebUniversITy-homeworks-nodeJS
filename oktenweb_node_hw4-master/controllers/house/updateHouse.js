const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseObject = req.body;
        const {house_id} = req.params;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(HouseObject, {
            where: {
                id: house_id
            }
        });

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.json(e.message);
    }
};