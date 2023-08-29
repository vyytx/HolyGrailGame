import path from 'path'

import { UserType } from '../game/static.js';
import { __dirname, LowWithLodash } from './databases.js';

const dbPath = path.join(__dirname, 'storage', 'users.json');

type TypeUserDB = {
    username: string;
    password: string;
    userType: UserType;
    uuid: string;
}[]

export const usersDB = new LowWithLodash<TypeUserDB>(dbPath, [
    {
        username: 'admin',
        password: 'admin',
        userType: UserType.Admin,
        uuid: '00000000-0000-0000-0000-000000000000'
    }
]);