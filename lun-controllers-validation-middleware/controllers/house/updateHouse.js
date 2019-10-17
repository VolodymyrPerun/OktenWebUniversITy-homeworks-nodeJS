const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        console.log(provider);
        const {id ,square, city, price} = req.body;
        const query = `UPDATE house SET square = ?, city = ?, price = ? WHERE id = ${id}`;

        const [updatedHouse] = await provider.promise().query(query, [square, city, price]);

        res.redirect(`houses/${id}`)
    } catch (e) {
        res.json(e.message)
    }

};