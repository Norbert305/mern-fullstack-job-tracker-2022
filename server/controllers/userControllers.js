
//get all users
//@route get /api/user
const getUsers = (req, res) => {
    res.status(200).json({message: 'get users'})
}
//post one user
//@route post /api/user
const postUser = (req, res) => {
    res.status(200).json({message: 'post user'})
}
//edit one user
//@route put /api/user/:id
const editUser = (req, res) => {
    res.status(200).json({message: 'edit users'})
}
//delete one user
//@route delete /api/user/:id
const deleteUser = (req, res) => {
    res.status(200).json({message: 'delete user'})
}

module.exports = {
    getUsers,
    postUser,
    editUser,
    deleteUser
}