const {provider} = require('../../dataBase');

module.exports = async (req, res, next) =>{
    try {
        const {id} = req.body;
        const query = `SELECT * FROM user WHERE id = ${id}`;

        const [findingUser] = await provider.promise().query(query);

        if(!findingUser.length){
            throw new Error('NOT FOUND SUCH USER')
        }

        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};

