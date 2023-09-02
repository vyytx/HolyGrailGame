<script lang='ts'>
    import axios from "axios";
    import { checkToken } from "../ts/util.ts";
    import { MSGloginTokenOnly, TDashboardData } from "../../types/api/account.ts";

	const loginToken = localStorage.getItem('loginToken');

	checkToken(loginToken)
		.then(isValid => {
			console.log('isValid:', isValid);
			if(!isValid) {
				console.log('not valid')
				// location.href = `login?toURL=${encodeURIComponent('/')}`
			}
			else
				return isValid;
		}).then(isValid => {
			return axios.post<any, TDashboardData, MSGloginTokenOnly>('/api/account/fetchDashboard', {loginToken}).catch(console.error)
		}).then(data => {
			// do something
		})
</script>

<svelte:head>
	<title>日研聖杯</title>
</svelte:head>