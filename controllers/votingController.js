const sequelize = require('sequelize');
const Exp = require('../models/Vote');

module.exports.index= async(req,res)=>{
    let allTopics = await Exp.Vote.findAll({
        order:[
            ['id','desc']
        ],
       attributes:['id','topic']
    });
    console.log(allTopics.dataValues)
    res.render('vote/index',{
        topics:allTopics
    })
}
module.exports.addform = async(req,res)=>{
    res.render('vote/addform');
}
module.exports.save = async(req,res)=>{
    const topic = req.body.topic;
    const options = req.body.options;
    const availableDates = req.body.availableDates;
    var optionsData = '';
    const votingData =  await Exp.Vote.create({
         topic:topic
     });
     for(let val of options){
         optionsData = await Exp.Options.create({
            votingId:votingData.dataValues.id,
            options:val
        })
    }
    for(let date of availableDates)
    {
        let optionDate = await Exp.optionsDate.create({
            votingOptionId:optionsData.dataValues.id,
            availableDates:date
        });
    }
    res.redirect('/vote')
} 


