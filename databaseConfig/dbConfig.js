const Sequelize = require('sequelize');

const sequelize = new Sequelize('APIAssignment', 'root', 'angela123', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    logging: false
  });

// console.log(PromiseVal)
sequelize.authenticate()
.then(function(result){
    //console.log("Database Connected!!!");
})
.catch(function(err){
    console.log(err)
})

module.exports = {
    Sequelize, sequelize
}