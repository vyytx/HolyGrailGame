<script lang='ts'>
	import { UserIcon, LockIcon } from 'svelte-feather-icons';
	import FieldInputIconLeft from './FieldInputIconLeft.svelte'

	let username: string;
	let password: string;

	export let hasRegisterBtn: boolean = false;
	export let registerFunc: (username: string, password: string) => any = undefined;
	export let loginFunc: (username: string, password: string) => any;

	function registerBtnClick(e) {
		e.preventDefault()
		registerFunc(username, password);
	}

	function loginBtnClick(e) {
		e.preventDefault()
		loginFunc(username, password);
	}
</script>

<h3 class="title">登入</h3>
<hr>
<p class="subtitle">請輸入使用者名稱與密碼以繼續</p>
<div class="box">
	<FieldInputIconLeft icon={UserIcon} bind:value={username} placeholder="使用者名稱 < 20字" type="text"></FieldInputIconLeft>
	<FieldInputIconLeft icon={LockIcon} bind:value={password} placeholder="密碼 < 20字" type="password"></FieldInputIconLeft>
	<p class="help">*由於我懶得做加密，所以請不要使用自己常用的密碼</p>

	<div class="field is-grouped mt-5">
		{#if hasRegisterBtn}
				<div class="control is-expanded">
					<button class="button is-fullwidth" on:click={registerBtnClick}>註冊</button>
				</div>
		{/if}
		<div class="control is-expanded">
			<button class="button is-fullwidth is-info" on:click={loginBtnClick}>登入</button>
		</div>
	</div>
</div>