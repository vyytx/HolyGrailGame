import path from 'path'
import {v4 as uuid} from 'uuid';

import { __dirname, LowExp } from './databases.js';
import { TUserType } from '../../types/db/user.ts';

const dbPath = path.join(__dirname, 'storage', 'user.json');

export type TUserData = {
	username: string,
	password: string,
	userType: TUserType,
	loginToken: string
}

type TUserDB = TUserData[]

export const userDB = new LowExp<TUserDB>(dbPath, [
	{
		username: 'admin',
		password: 'admin',
		userType: 'ADMIN',
		loginToken: uuid()
	}
]);

userDB.write();