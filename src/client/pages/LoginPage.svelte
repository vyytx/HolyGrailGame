<script lang='ts'>
	import axios, { AxiosResponse } from 'axios';

	import FormLogin from "../components/FormLogin.svelte";
    import { navigate } from 'svelte-routing';
    import { MSGUsernamePassword, MSGloginToken, ResponseCheckLogin } from '#types/api/account.ts';
    import { axiosPost } from '#client/ts/util.ts';

	const toURL: string = history.state?.toURL;
	let nowType: 'login'|'register';
	let nowErrorMsg: string;

	function loginOrRegister(type: 'login'|'register', username: string, password: string) {
		nowType = type;

		axiosPost<MSGloginToken, MSGUsernamePassword>(`/api/account/${type}`, {username, password})
			.then(res => {
				const {loginToken} = res.data;
				localStorage.setItem('loginToken', loginToken);
				
				setTimeout(() => {
					if(toURL)
						navigate(`.${toURL}`);
					else
						location.href = `./`;
				}, 2000);
			})
			.catch(err => {
				console.error(err);
			})
	}
</script>

<svelte:head>
	<title>日研聖杯 | 登入</title>
</svelte:head>

<section class="hero is-fullheight">
	<div class="hero-body">
		<div class="container">
			<div class="column is-4 is-offset-4 has-text-centered">
				<FormLogin 
					loginFunc={(u, p) => loginOrRegister('login', u, p)}
					registerFunc={(u, p) => loginOrRegister('register', u, p)}
					hasRegisterBtn />
			</div>
		</div>
	</div>
</section>

<div id='failModel' class="modal">
	<div class="modal-background"></div>
	<div class="modal-content">
		<div class="card">
			<div class="card-content">
				<p class="title"> {nowType == 'login' ? '登入' : '註冊'}失敗 </p>
				<p class="subtitle"> {nowErrorMsg} </p>
			</div>
		  </div>
	</div>
	<button class="modal-close is-large" aria-label="close"></button>
</div>