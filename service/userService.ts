import users from "../models/users";

const getAllUsers = async () => {
    const user = await users.findAll();
    return user;
}

export { getAllUsers};