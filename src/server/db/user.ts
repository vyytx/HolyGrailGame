import path from 'path'
import {v4 as uuid} from 'uuid';

import { __dirname, LowExp } from './databases.js';
import { TUserType } from '../../types/db/user.ts';

const dbPath = path.join(__dirname, 'storage', 'user.json');

type TypeUserDB = {
	username: string;
	password: string;
	userType: TUserType;
	loginToken: string;
}[]

export const userDB = new LowExp<TypeUserDB>(dbPath, [
	{
		username: 'admin',
		password: 'admin',
		userType: TUserType.ADMIN,
		loginToken: uuid()
	}
]);

userDB.write();