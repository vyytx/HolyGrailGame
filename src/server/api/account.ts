import { Router } from 'express'
import { v4 as uuid } from 'uuid';

import { usersDB } from '../db/users.js';
import { IExpressHandler } from '../../types/api/api.ts';
import { FlowCheckToken, FlowFetchDashboard, FlowLogin, FlowRegister } from '../../types/api/account.ts';
import { UserType } from '../../types/db/user.ts';


const fetchDashboard: IExpressHandler<FlowFetchDashboard> = (req, res) => {
	const {loginToken} = req.body;
	
	const user = usersDB.chain.find(_user => _user.loginToken === loginToken);

	if(user.value() === undefined) {
		res.sendStatus(401);
	}else {
		// TODO: add dashboard data
		res.status(200).send(undefined);
	}
}

const login: IExpressHandler<FlowLogin> = (req, res) => {
	const {username, password} = req.body;

	const user = usersDB.chain.find(_user => _user.username === username && _user.password === password);

	if(user.value() === undefined) {
		res.sendStatus(401);
	}else {
		const loginToken = uuid();
		user.update('loginToken', loginToken);
		res.status(200).send({loginToken});
	}
}

const register: IExpressHandler<FlowRegister> = (req, res) => {
	const {username, password}: {username: string, password: string} = req.body;
	
	const user = usersDB.chain.find(_user => _user.username === username);

	if(user.value() === undefined) {
		const loginToken = uuid() as string;
		usersDB.chain.push({
			username,
			password,
			userType: UserType.NORMAL,
			loginToken
		})
		user.set('loginToken', loginToken);
		res.status(200).send({loginToken});
	}else {
		res.sendStatus(406);
	}
}

const checkToken: IExpressHandler<FlowCheckToken> = (req, res) => {
	const {loginToken} = req.body;
	
	const user = usersDB.chain.find(_user => _user.loginToken === loginToken);
	
	console.log(usersDB.data)
	console.log(loginToken, user.value() === undefined)

	if(user.value() === undefined) {
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