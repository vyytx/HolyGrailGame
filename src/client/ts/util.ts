import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import { MSGloginToken } from '../../types/api/account.ts';

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

//export async function getUserData(loginToken: string) {
//	await 
//}

export function axiosPost<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>{
	return axios.post<T, R, D>(url, data, config)
}