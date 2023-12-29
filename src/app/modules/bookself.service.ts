import { IUser } from './bookelf.interface';
import User from './bookself.model';
import { INewBook } from './newbook.interface';
import Book from './newbook.model';

export const createUserToDB = async (payload: IUser) : Promise<IUser> =>{
    console.log(payload);
    const user = new User(payload);
    await user.save();
    return user;
}

export const createBookToDB = async (payload: INewBook) : Promise<INewBook> =>{
    console.log(payload);
    const user = new Book(payload);
    await user.save();
    return user;
}


export const getUsersFromDB = async () : Promise<IUser[]> =>{
    const users = await User.find(); 
    return users;
}


export const getBooksFromDB = async () : Promise<INewBook[]> =>{
    const books = await Book.find();
    return books;
}

export const getSpecificBookFromDB = async (
    payload: string
  ): Promise<INewBook | null> => {
    const user = await Book.findOne({ _id: payload });
    return user;
  };