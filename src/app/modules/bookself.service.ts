import { IUser } from './bookelf.interface';
import User from './bookself.model';
import { INewBook } from './newbook.interface';
import Book from './newbook.model';

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  try {
    const user = new User(payload)
    await user.save()
    return user
  } catch (error) {
    throw error
  }
}

export const createBookToDB = async (payload: INewBook): Promise<INewBook> => {
  try {
    const user = new Book(payload)
    await user.save()
    return user
  } catch (error) {
    throw error
  }
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw error
  }
}

export const getLoggedInUserFromDB = async (
  emailToFind: string,
  passwordToMatch: string
) => {
  try {
    const user = await User.findOne({ email: emailToFind })
    if (user?.password === passwordToMatch) {
      return user
    } else {
      return null
    }
  } catch (error) {
    throw error
  }
}

export const getBooksFromDB = async (): Promise<INewBook[]> => {
  try {
    const books = await Book.find()
    return books
  } catch (error) {
    throw error
  }
}

export const getSpecificBookFromDB = async (
  payload: string
): Promise<INewBook | null> => {
  try {
    const user = await Book.findOne({ _id: payload })
    return user
  } catch (error) {
    throw error
  }
}