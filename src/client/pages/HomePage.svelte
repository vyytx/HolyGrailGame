<script lang='ts'>
    import axios, { Axios, AxiosError, AxiosResponse } from "axios";

	const loginToken = localStorage.getItem('loginToken');
	
	//TODO: fix here
	const loadDashboard = new Promise<void>((resolve, reject) => {
		axios.post('/api/account/fetchDashboard', {loginToken})
			.then(data => {
				console.log('data:', data);
				//TODO: update page
				resolve();
			})
			.catch((err: AxiosError) => {
				console.log('error:', err.code);
				reject();
			})
	});
	
</script>

{#await loadDashboard}
	loading
{:catch err}
	{location.href = `login?toURL=${encodeURIComponent('/game')}`}
{/await}

<style lang='scss'>
</style>