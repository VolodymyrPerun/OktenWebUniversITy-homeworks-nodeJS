const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res) => {
    try{
        const housesModel = dataBase.getModel('House');

        const houses = await housesModel.findAll();

        if (!houses.length) {
            throw new Error('There is no house');
        }

        res.json(houses)
    }

    catch (e) {
        res.json(e.message);
    }
};
