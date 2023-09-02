<script lang='ts'>
	import axios from 'axios';

	import FormLogin from "../components/FormLogin.svelte";
	import { readURLQuery } from '../ts/util.ts';

	const {toURL} = readURLQuery(location.search);

	function loginOrRegister(type: 'login'|'register', username: string, password: string) {
		axios.post(`/api/account/${type}`, {username, password})
			.then(res => {
				const {loginToken} = res.data;
				localStorage.setItem('loginToken', loginToken);
				if(toURL) {
					location.href = `.${decodeURIComponent(toURL)}`;
				}
			})
			.catch(err => {
				console.error(err);
			})
	}

	async function clk() {
		const loginToken = localStorage.getItem('loginToken');
		console.log(await axios.post('/api/account/checkToken', {loginToken}))
	}
</script>

<svelte:head>
	<title>日研聖杯 | 登入</title>
</svelte:head>

<section class="hero is-fullheight">
	<div class="hero-body">
		<div class="container">
			<div class="column is-4 is-offset-4 has-text-centered">
				<button class="button" on:click={clk}>click</button>
				<FormLogin 
					loginFunc={(u, p) => loginOrRegister('login', u, p)}
					registerFunc={(u, p) => loginOrRegister('register', u, p)}
					hasRegisterBtn />
			</div>
		</div>
	</div>
</section>