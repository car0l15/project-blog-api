import users from "../models/users";
import User from "../interfaces/IUser";

const getAllUsers = async () => 
{
    const user = await users.findAll();
    return user;
}

const createUsers = async (body: User) => 
{
    const { displayName, email, password, image } = body;
    const user = await users.create({ displayName, email, password, image });

    return user;
}

export { getAllUsers, createUsers};