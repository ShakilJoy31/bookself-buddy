import {
  NextFunction,
  Request,
  Response,
} from 'express';

import {
  createBookToDB,
  createUserToDB,
  deleteSpecificBookFromDB,
  getBooksFromDB,
  getLoggedInUserFromDB,
  getSpecificBookFromDB,
  getUsersFromDB,
  updateSpecificBookFromDB,
} from './bookself.service';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body
    const user = await createUserToDB(data)
    res.status(200).json({
      status: 'success',
      data: user
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}

export const createBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body
    console.log(data)
    const user = await createBookToDB(data)
    res.status(200).json({
      status: 'success',
      data: user
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUsersFromDB()
    console.log(user)
    res.status(200).json({
      status: 'success',
      data: user
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}

export const getLoggedInUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body
    const user = await getLoggedInUserFromDB(email, password)
    if (user?.email === email && user?.password === password) {
      res.status(200).json({
        status: 'success',
        data: user
      })
    } else {
      res.status(400).json({
        status: 'failed',
        data: null
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await getBooksFromDB()
    console.log('hello')
    res.status(200).json({
      status: 'success',
      data: books
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}
// Getting particular book by Id
export const getSpecificBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const book = await getSpecificBookFromDB(id)
    res.status(200).json({
      status: 'success',
      data: book
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}



export const deleteBoookAccordingToId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deleteId } = req.params
    const book = await deleteSpecificBookFromDB(deleteId)
    console.log(book);
    res.status(200).json({
      status: 'success',
      data: book
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}



export const updateBoookAccordingToId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedData = req.body
    const book = await updateSpecificBookFromDB(id, updatedData)
    console.log(book);
    res.status(200).json({
      status: 'success',
      data: book
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    })
  }
}