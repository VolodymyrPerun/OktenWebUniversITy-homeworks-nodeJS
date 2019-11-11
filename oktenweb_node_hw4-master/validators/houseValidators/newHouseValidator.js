module.exports = houseObject => {
    const {city, metres, street,price} = houseObject;
    if (!city || !metres || !street || !price) {
        throw new Error('Not valid!')
    }
}