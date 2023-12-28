import { IUser } from './bookelf.interface';
import User from './bookself.model';

export const createUserToDB = async (payload: IUser) : Promise<IUser> =>{
    console.log(payload);
    const user = new User(payload);
    await user.save();
    return user;
}


export const getUsersFromDB = async () : Promise<IUser[]> =>{
    const users = await User.find(); 
    return users;
}