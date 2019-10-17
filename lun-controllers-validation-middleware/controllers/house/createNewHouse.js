const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {square, city, price} = req.body;
        const query = (`INSERT INTO house (square, city, price) VALUES (?, ?, ?)`);

        await provider.promise().query(query, [square, city, price]);

        res.redirect('/');
    }catch (e) {
        res.json(e.message)
    }
};