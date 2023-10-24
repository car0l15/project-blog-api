import users from "../models/users";
import User from "../interfaces/IUser";

const getAllUsers = async () => 
{
    const user = await users.findAll({ attributes: { exclude: ['password'] } });
    return user;
}

const createUsers = async (body: User) => 
{
    const { displayName, email, password, image } = body;

       
    const user = await users.create({ displayName, email, password, image });

    return user;
}


const getUserById = async (id: string) => {

    
    const user = users.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
  
    return user;
  };

export { getUserById ,getAllUsers, createUsers };