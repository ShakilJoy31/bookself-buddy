import {
  model,
  Schema,
} from 'mongoose';

import { IUser } from './bookelf.interface';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model<IUser>("User", userSchema);

export default User; 