import { Router } from 'express'
import { v4 as uuid } from 'uuid';

import { usersDB } from '../db/users.js';
import { TDashboardData, UserType } from '../game/static.js';
import { ExpressHandler } from './api.js';

const fetchDashboard: ExpressHandler<TDashboardData> = (req, res) => {
	const {loginToken} = req.body;

	console.log(usersDB.data);
	console.log(loginToken)
	
	const user = usersDB.chain.find(_user => _user.loginToken === loginToken);

	if(user.value() === undefined) {
		res.sendStatus(401);
	}else {
		// TODO: add dashboard data
		res.status(200).send(undefined);
	}
}

const login: ExpressHandler<any> = (req, res) => {
	const {username, password} = req.body;

	const user = usersDB.chain.find(_user => _user.username === username && _user.password === password);

	if(user.value() === undefined) {
		res.sendStatus(401);
	}else {
		const loginToken = uuid();
		user.set('loginToken', loginToken);
		res.status(200).send({loginToken});
	}
}

const register: ExpressHandler<any> = (req, res) => {
	const {username, password}: {username: string, password: string} = req.body;
	
	const user = usersDB.chain.find(_user => _user.username === username);

	if(user.value() === undefined) {
		const loginToken = uuid() as string;
		usersDB.chain.push({
			username,
			password,
			userType: UserType.Normal,
			loginToken
		})
		user.set('loginToken', loginToken);
		res.status(200).send({loginToken});
	}else {
		res.sendStatus(406);
	}
}

export default function (router: Router) {
	router.post('/account/fetchDashboard', fetchDashboard);
	router.post('/account/login', login);
	router.post('/account/register', register);
}