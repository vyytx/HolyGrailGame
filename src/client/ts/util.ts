import axios, { Axios, AxiosResponse } from 'axios';
import { MSGloginTokenOnly } from '../../types/api/account.ts';

export function checkToken(loginToken: string) {
	return axios.post('/api/account/checkToken', {loginToken}).catch(console.error)
		.then(res => {
			if(res)
				return res.data
		})
}

export function readURLQuery(query: string) : {[param: string]: string}{
	const regex = /([\w]+)=([\w%-]+)/g;
	const arr = (query.match(regex) || []).map(x => x.split('='));
	return Object.fromEntries(arr);
}