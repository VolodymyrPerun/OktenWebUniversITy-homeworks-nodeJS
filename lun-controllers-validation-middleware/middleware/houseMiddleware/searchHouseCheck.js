const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
            const {city} = req.body
            const query = `SELECT * FROM house WHERE city = '${city}'`;

            const [findingHouses] = await provider.promise().query(query);

            if(!findingHouses){
                throw new Error('Not found any houses')
            }

            req.houses = findingHouses;
            next()
    }catch (e) {
            res.status(404).json(e.message);
        }




};