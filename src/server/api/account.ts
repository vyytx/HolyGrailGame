import { Router } from 'express'
import { usersDB } from '../db/users.js';
import { TDashboardData } from '../game/static.js';
import { ExpressHandler } from './api.js';

const fetchDashboard: ExpressHandler<TDashboardData> = (req, res) => {
    const {loginToken} = req.body;

        const user = usersDB.chain.find(_user => _user.loginToken === loginToken);

        console.log('Client:', loginToken);
        console.log('Find user:', user);
        if(user.isUndefined()) {
            res.sendStatus(401);
        }else {
            // TODO: add dashboard data
            res.status(200).send(undefined);
        }
}

export default function (router: Router) {
    router.post('/account/fetchDashboard', fetchDashboard);
}