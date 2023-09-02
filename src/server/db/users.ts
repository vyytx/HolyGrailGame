import path from 'path'
import {v4 as uuid} from 'uuid';

import { __dirname, LowWithLodash } from './databases.js';
import { UserType } from '../../types/db/user.ts';

const dbPath = path.join(__dirname, 'storage', 'users.json');

type TypeUserDB = {
	username: string;
	password: string;
	userType: UserType;
	loginToken: string;
}[]

export const usersDB = new LowWithLodash<TypeUserDB>(dbPath, [
	{
		username: 'admin',
		password: 'admin',
		userType: UserType.ADMIN,
		loginToken: uuid()
	}
]);

usersDB.write();