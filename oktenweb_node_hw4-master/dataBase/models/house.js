module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,

        },
        metres: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    }, {
        tableName: 'houses',
        timestamps: false
    });
    const User = sequelize.import('./user.js');
    House.belongsTo(User, {foreignKey: 'user_id'});
    return House;
}
