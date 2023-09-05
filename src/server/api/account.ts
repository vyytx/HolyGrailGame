import { Router } from 'express'
import { v4 as uuid } from 'uuid';

import { userDB } from '../db/user.ts';
import { IExpressHandler } from '../../types/api/api.ts';
import { FlowCheckToken, FlowFetchDashboard, FlowLogin, FlowRegister, TDashboardData } from '../../types/api/account.ts';


const fetchDashboard: IExpressHandler<FlowFetchDashboard> = (req, res) => {
	const {loginToken} = req.body;
	
	const user = userDB.data.find(u => u.loginToken === loginToken);

	if(user === undefined) {
		res.sendStatus(401);
	}else {
		// TODO: add dashboard data
		// TODO: build GameDB and link isPlayer status to
		res.status(200).send({
			userType: user.userType,
			isPlayer: false
		} as TDashboardData);
	}
}

const login: IExpressHandler<FlowLogin> = (req, res) => {
	const {username, password} = req.body;

	const user = userDB.data.find(_user => _user.username === username && _user.password === password);

	if(user === undefined) {
		res.sendStatus(401);
	}else {
		const loginToken = uuid();
		user.loginToken = loginToken;
		res.status(200).send({loginToken});
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
		res.status(200).send({loginToken});
	}else {
		res.sendStatus(406);
	}
}

const checkToken: IExpressHandler<FlowCheckToken> = (req, res) => {
	const {loginToken} = req.body;
	
	const user = userDB.data.find(_user => _user.loginToken === loginToken);
	
	if(user === undefined) {
		res.send(false);
	}else {
		res.send(true);
	}
}

export default function (router: Router) {
	router.post('/account/checkToken', checkToken)

	router.post('/account/login', login);
	router.post('/account/register', register);

	router.post('/account/fetchDashboard', fetchDashboard);
}