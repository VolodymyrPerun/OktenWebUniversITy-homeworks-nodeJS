module.exports = (newHouseData) => {

    const  {square, city, price} = newHouseData;

    if (!square || !city || !price){
        throw new Error('New house data is  not correct')
    }
};