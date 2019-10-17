module.exports = (req, res) => {
    const house = req.house;
    res.json(house);
};