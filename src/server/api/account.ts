import { Router } from 'express'
import { v4 as uuid } from 'uuid';

import { userDB } from '../db/user.ts';
import { IExpressHandler } from '../../types/api/api.ts';
import { FlowCheckToken, FlowLogin, FlowRegister, FlowFetchUserData } from '../../types/api/account.ts';


//const fetchDashboard: IExpressHandler<FlowFetchDashboard> = (req, res) => {
//	const {loginToken} = req.body;
	
//	const user = userDB.data.find(u => u.loginToken === loginToken);

//	if(user === undefined) {
//		res.sendStatus(401);
//	}else {
//		// TODO: add dashboard data
//		// TODO: build GameDB and link isPlayer status to
//		res.status(200).send({
//			userType: user.userType,
//			isPlayer: false
//		} as TDashboardData);
//	}
//}

const login: IExpressHandler<FlowLogin> = (req, res) => {
	const {username, password} = req.body;

	const user = userDB.data.find(_user => _user.username === username && _user.password === password);

	if(user === undefined) {
		// TODO: add other rejection
		res.send({
			success: false,
			reason: 'PASSWORD_INCORRECT'
		})
	}else {
		const loginToken = uuid();
		user.loginToken = loginToken;
		res.send({
			success: true,
			loginToken
		});
	}
}

const register: IExpressHandler<FlowRegister> = (req, res) => {
	const {username, password}: {username: string, password: string} = req.body;
	
	const user = userDB.data.find(_user => _user.username === username);

	if(user === undefined) {
		const loginToken = uuid() as string;
		userDB.data.push({
			username,
			password,
			userType: 'NORMAL',
			loginToken
		})
		user.loginToken = loginToken;
		res.send({
			success: true,
			loginToken
		});
	}else {
		// TODO: add other rejection
		res.send({
			success: false,
			reason: 'USER_ALREADY_EXIST'
		});
	}
}

const checkToken: IExpressHandler<FlowCheckToken> = (req, res) => {
	const {loginToken} = req.body;
	
	const user = userDB.data.find(_user => _user.loginToken === loginToken);
	
	if(user === undefined) {
		res.send({
			success: true,
			isValid: false
		});
	}else {
		res.send({
			success: true,
			isValid: true
		});
	}
}

const fetchUserData: IExpressHandler<FlowFetchUserData> = (req, res) => {
	const {loginToken} = req.body;

	const user = userDB.data.find(_user => _user.loginToken === loginToken);
	
	if(user === undefined) {
		res.send({
			success: false,
			reason: 'USER_NOT_FOUND_BY_TOKEN'
		});
	}else {
		res.send({
			success: true,
			...user
		});
	}
}

export default function (router: Router) {
	router.post('/account/checkToken', checkToken)

	router.post('/account/login', login)
	router.post('/account/register', register)

	router.post('/account/fetchUserData', fetchUserData)
	//router.post('/account/fetchDashboard', fetchDashboard);
}