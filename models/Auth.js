const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require("bcrypt");

const Auth = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING(256),
    email: Sequelize.STRING(256),
    userName: Sequelize.STRING(256), 
    password: Sequelize.STRING(100),
    mobile: Sequelize.STRING(20),
    joiningDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
});

Auth.beforeCreate((user,options)=>{
    // // adding hash async
    // bcrypt.hash(user.password, 10, function(err, hash) {
    //     // Store hash in your password DB.
    //     user.password = hash;

    //   });

    var hash = bcrypt.hashSync(user.password,10);
    user.password = hash;
})

module.exports = Auth;