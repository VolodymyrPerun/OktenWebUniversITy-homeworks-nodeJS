const dataBase = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const housesModel = dataBase.getModel('House');

        await housesModel.create(houseToCreate);

        res.redirect('houses');
    }
    catch (e) {
        res.json(e.message);
    }
};