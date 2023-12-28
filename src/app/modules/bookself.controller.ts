import {
  NextFunction,
  Request,
  Response,
} from 'express';

import {
  createUserToDB,
  getUsersFromDB,
} from './bookself.service';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = {
      name:'Shakil',
      email: 'shakil@gmail.com',
      phone: '0123478975',
      password: '12345'
    }; 
    const user = await createUserToDB(data);
    res.status(200).json({
        status: 'success',
        data: user
    })
}


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status: 'success',
        data: user
    })
}