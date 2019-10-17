const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const query = `SELECT * FROM user WHERE id = ${id}`;
        const [findingUser] = await provider.promise().query(query);

        if (!findingUser.length ){
            throw new Error(`Bad request`)
        }

        [req.user] = findingUser;

        next();

    } catch (e) {
        req.status(400).json(e.message);
    }
};