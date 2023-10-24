import users from "../models/users";
const { User } = require('../interfaces/IUser')

const getAllUsers = async () => {
    const user = await users.findAll();
    return user;
}

export { getAllUsers};
