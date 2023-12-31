import { IUser } from './bookelf.interface';
import User from './bookself.model';
import {
  IComment,
  INewBook,
} from './newbook.interface';
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


export const deleteSpecificBookFromDB = async (
    payload: string
  ): Promise<string> => {
    try {
      const result = await Book.deleteOne({ _id: payload });
      if (result.deletedCount && result.deletedCount > 0) {
        return 'Book deleted successfully';
      } else {
        return 'Book delation failed';
      }
    } catch (error) {
      throw error;
    }
  };


  export const updateSpecificBookFromDB = async (
    bookId: string,
    updatedBookData: Partial<INewBook>
  ): Promise<string> => {
    try {
      const updatedBook = await Book.findOneAndUpdate(
        { _id: bookId },
        { $set: updatedBookData },
        { new: true }
      );
  
      if (updatedBook) {
        return 'Book updated successfully';
      } else {
        return 'Book update failed';
      }
    } catch (error) {
      throw error;
    }
  };
  
  
  export const addCommentToBookDB = async (
    bookId: string,
    commentData: Partial<IComment>
  ): Promise<INewBook | null> => {
    try {
      const updatedBook = await Book.findOneAndUpdate(
        { _id: bookId },
        { $push: { comments: commentData } },
        { returnOriginal: false }
      );
      return updatedBook;
    } catch (error) {   
      throw error;
    }
};

  
  