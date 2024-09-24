const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("bd", "root", "",{
    host: "localhost",
    dialect: "mysql"
});
module.exports = sequelize;
