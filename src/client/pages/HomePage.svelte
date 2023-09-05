<script lang='ts'>
	import Dashboard from './../components/home/Dashboard.svelte';
    import axios, { AxiosResponse } from "axios";
    import { checkToken } from "../ts/util.ts";
    import { MSGloginTokenOnly, TDashboardData } from "../../types/api/account.ts";
    import Navbar from '../components/home/Navbar.svelte';

	const loginToken = localStorage.getItem('loginToken');


	const checkTokenPromise = checkToken(loginToken)
		.then(isValid => {
			console.log('isValid:', isValid);
			if(!isValid) {
				console.log('not valid')
				location.href = `login?toURL=${encodeURIComponent('/')}`
			}
			else
				return isValid;
		}).then(isValid => {
			return axios.post<TDashboardData, AxiosResponse<TDashboardData>, MSGloginTokenOnly>('/api/account/fetchDashboard', {loginToken,}).catch(console.error)
		}).then(data => {
			if(data) return data.data;
		})
</script>

<svelte:head>
	<title>日研聖杯</title>
</svelte:head>

{#await checkTokenPromise}
	loading
{:then dashboardData}
	<Navbar userType={dashboardData.userType} isPlayer={dashboardData.isPlayer}/>
	<Dashboard data={dashboardData} />
{:catch error}
	{error}
{/await}