module.exports = (req, res) => {
    const houses = req.houses;
    res.json(houses);
};