const User = require('../model/userModel')
const bcrypt = require('bcrypt');


//desc  get all user
//route get :api/user
//access private
const getUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}


//desc Create new user
//route  post: api/user
//access private
const createUser = async (req, res) => {

    const {username,email,password}=req.body;
    if(!username||email,password){
        res.status(400).json({message:"all fields are required"})
    }

    try {

        hashPassword=  await bcrypt.hash(password,10);
        const newUser= await username.create({
            username :req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        console.log(req.body);
        res.status(200).json(req.body)
    } catch (error) {
        console.error('error creating user',error);
    }
  
}

//desc  update user
//route  Put: api/user/:id
//access private
const updateUser = async (req, res) => {
    res.status(200).json({ message: "Update User" })
}


//desc  delete   user
//route  delete: api/user/:id
//access private
const deleteUser = async (req, res) => {
    res.status(200).json({ message: "delete User" })
}




module.exports = {
    getUser,
    updateUser,
    createUser,
    deleteUser,

}