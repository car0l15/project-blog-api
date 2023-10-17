const{ users }= require('../models/users')
const { User } = require('../Interfaces/IUser')

const createUser = async(body: User) =>
{
    const {displayName, email, password, image } = body;
    const newUser = await users.create({ displayName, email, password, image });

    console.log(newUser);

    return newUser;
}

module.exports = {
    createUser
}