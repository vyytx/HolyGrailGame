import { Router } from 'express'
import { usersDB } from '../db/users.js';

function decryptLoginToken(loginToken: string): {username: string, password: string} {
    return undefined;
    // TODO: fixed this
}

// export default function (router: Router) {
//     router.post('/account/isTokenValid', (req, res) => {
//         const {loginToken} = req.body;
//         const user = usersDB.chain.find(ele => ele.token == loginToken);
//         if(user == undefined) {
//             res.send(false)
//         }else {
//             res.send(true);
//         }
//     })
// }
