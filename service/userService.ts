const { users } = require('../models/users');
const { User } = require('../interfaces/IUser')

const createUser = async (body: typeof User) =>
{
    const { displayName, email, password, image } = body;
    const newUser = await users.create({displayName, email, password, image})

    return newUser; 
}

module.exports = {
    createUser
}