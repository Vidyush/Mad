const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Vote = sequelize.define('voting',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    topic:Sequelize.STRING(255),
    createdDate: {type:Sequelize.DATE,defaultValue:Sequelize.NOW}
}),
Options = sequelize.define('voting_options',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    options:Sequelize.STRING(255)
}),
optionsDate = sequelize.define('voting_option_dates',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    availableDates:Sequelize.STRING(100)
});
/*,
UserVoting = sequelize.define('user_voting',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    voter_id:Sequelize.INTEGER(1),
    votingDate: {type:Sequelize.DATE,defaultValue:Sequelize.NOW}
});*/

Options.belongsTo(Vote);
optionsDate.belongsTo(Options);
//Vote.belongsToMany(UserVoting,{through:voter_id })
let exp = {Vote,Options,optionsDate};
module.exports = exp;

