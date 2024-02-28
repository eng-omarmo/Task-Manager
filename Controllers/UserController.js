
//desc  get all user
//route get :api/user
//access private
const getUser = (req, res) => {
    res.status(200).json({ message: "get users" })
}


//desc Create new user
//route  post: api/user
//access private
const createUser = (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "create Users" })
}

//desc  update user
//route  Put: api/user/:id
//access private
const updateUser = (req, res) => {
    res.status(200).json({ message: "Update User" })
}


//desc  delete   user
//route  delete: api/user/:id
//access private
const deleteUser = (req, res) => {
    res.status(200).json({ message: "delete User" })
}




module.exports = {
    getUser,
    updateUser,
    createUser,
    deleteUser,

}