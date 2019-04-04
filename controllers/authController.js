const sequelize = require('../config/db');
const auth = require("../models/Auth");

module.exports.index = async(req,res)=>{
    let allUser =  await auth.findAll({
        // where:{
        //     id:[]
        // },
        order:[
            ['id','desc']
        ],
        attributes: ['id','name','email','mobile','userName','joiningDate']
    });
    res.render('user/userlisting',{
        users:allUser,
        msg:''
    })
}
module.exports.userForm = async(req,res)=>{
    res.render('user/adduser');
}
module.exports.save = async(req,res)=>{
    
    let name = req.body.first_name+' '+req.body.last_name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let userName = req.body.userName;
    let password = req.body.password;
    let confirmPass = req.body.password_confirmation;

    let addUser = await auth.create({
        name:name,
        email:email,
        mobile:mobile,
        userName:userName,
        password:password
    })
   res.redirect('/auth')
}
module.exports.editForm = async(req,res)=>{
    let getUserDetails = await auth.findOne({
        where:{
            id:[req.params.id]
        },
        attributes: ['id','name','email','mobile','userName']
    });
   
   
   
    res.render('user/edituser',{
        details:getUserDetails
    })
    
}
module.exports.update = async(req,res)=>{
    let name = req.body.first_name+' '+req.body.last_name;
    let mobile = req.body.mobile;
    let id = req.params.id;

    let updateUser = await auth.update(
        {
            name:name,
            mobile:mobile
        },
        {returning: true, where: {id: id} }
    )
    res.redirect('/auth/');
}

module.exports.Delete = async(req,res)=>{
    let del = await auth.destroy({
        where:{id:req.params.id}
    })
    .then(deletedUser=>{
        var msg =`user ${deletedUser} has been deleted`;
        res.redirect('/auth/?msg=msg')
    })
}