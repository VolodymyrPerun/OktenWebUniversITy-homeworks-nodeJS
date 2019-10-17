const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {name, email, password, surname, city} = req.body;
        const query = (`INSERT INTO user (name, email, password, surname, city) VALUES (?, ?, ?, ?, ?)`);

        await provider.promise().query(query, [name, email, password, surname, city]);

        res.redirect('/login');
    }catch (e) {
        res.json(e.message)
    }

};