const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Sale = sequelize.define("Sale", {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull:false

    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    sale_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
timestamps: false
});

module.exports = Sale;