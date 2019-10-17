const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const query = `SELECT * FROM house WHERE id = ${id}`;
        const [findingHouse] = await provider.promise().query(query);

        if (!findingHouse.length ){
            throw new Error(`Bad request`)
        }

        [req.house] = findingHouse;

        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
};