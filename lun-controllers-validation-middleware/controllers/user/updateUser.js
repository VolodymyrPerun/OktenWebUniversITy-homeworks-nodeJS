const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {id, name, email, password, surname, city} = req.body;
        const query = `UPDATE user SET name = ?, email = ?, password = ?, surname = ?, city = ? WHERE id = ${id}`;

        const [updatedUser] = await provider.promise().query(query, [name, email, password, surname, city]);

        res.redirect(`users/${id}`)
    } catch (e) {
        res.json(e.message)
    }

};