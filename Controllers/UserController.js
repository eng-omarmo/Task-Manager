const User = require('../model/userModel')


//desc  get all user
//route get :api/user
//access private
const getUser = async(req, res) => {

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'internal server error' })

    }
}


//desc Create new user
//route  post: api/user
//access private
const createUser = async (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "create Users" })
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