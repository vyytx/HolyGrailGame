<script lang='ts'>
	import {SunIcon, MoonIcon} from 'svelte-feather-icons';

    import { onMount } from 'svelte';
	import { TUserType } from './../../../types/db/user.ts';

	let burgerIsActive = false

	export let userType: TUserType;
	export let isPlayer: boolean;

	type TView = Exclude<TUserType, 'NORMAL'> | 'PLAYER' | 'SPECTATOR'
	const TupleView: TView[] = ['ADMIN', 'GM', 'PLAYER', 'SPECTATOR'];
	let view: TView = 'ADMIN'

	let isLightOn = localStorage.getItem('isLightOn') === 'true';

	

	function isInView(_view: TView): boolean {
		if(userType == 'ADMIN')
			return _view == view;
		else if(userType == 'NORMAL')
			return _view == (isPlayer ? 'PLAYER': 'SPECTATOR');
		return _view == userType
	}

	onMount(() => {
		document.documentElement.classList.add('has-navbar-fixed-top')
	})

</script>

<nav class="navbar is-fixed-top">
	<div class="navbar-brand">
		<!--<a class="navbar-item" href="https://bulma.io">
		<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
	  </a>-->
		<h1 class="navbar-item">日研聖杯</h1>

		<button class="navbar-burger" class:is-active={burgerIsActive} on:click={() => burgerIsActive = !burgerIsActive}>
			<span />
			<span />
			<span />
		</button>
	</div>

	<div id="navbarMenu" class="navbar-menu" class:is-active={burgerIsActive}>
		<div class="navbar-start">
			<a class="navbar-item" href='/game/'> 首頁 </a>

			{#if isInView('ADMIN')}
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link" href={null}> 地圖 </a>
					<div class="navbar-dropdown">
						<a class="navbar-item" href='/game/admin/fullmap'> 全地圖 </a>
						<hr class="navbar-divider" />
						<a class="navbar-item" href='/game/admin/fullmap?edit=true'> 編輯器 </a>
					</div>
				</div>
			{:else}
				<a class="navbar-item" href='/game/fullmap'> 全地圖 </a>
			{/if}

			{#if isInView('ADMIN') || isInView('GM')}
				<a class="navbar-item" href='/game/gm/message'> 全局聊天室 </a>
				<a class="navbar-item" href='/game/gm/infoNotes'> 全局情報筆記 </a>
				<a class="navbar-item" href='/game/gm/command'> 指令室 </a>
			{:else if isInView('PLAYER')}
				<a class="navbar-item" href='/game/player/message'> 聊天室 </a>
				<a class="navbar-item" href='/game/player/infoNotes'> 情報筆記 </a>
			{:else if isInView('SPECTATOR')}
				<a class="navbar-item" href='/game/spectator/message'> 觀眾全局聊天室 </a>
			{/if}
			
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<button class="button is-light" on:click={() => {isLightOn = !isLightOn; localStorage.setItem('isLightOn', isLightOn.toString())}}>
					<span class="icon">
						{#if isLightOn}
							<MoonIcon />
						{:else}
							<SunIcon />
						{/if}
					</span>
				</button>
			</div>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href={null}> 更多 </a>
				<div class="navbar-dropdown">
					<a class="navbar-item" href='/game/stat'> 細項數值 </a>

					{#if userType == 'ADMIN'}
						<hr class="navbar-divider" />
						{#each TupleView as itemView}
							<a class="navbar-item" class:is-disabled={view == itemView} href={null} on:click={() => {if(view != itemView) view = itemView}}> 更換視角為<strong>{itemView}</strong> </a>
						{/each}
					{/if}

					<hr class="navbar-divider" />
					<a class="navbar-item" href='/game/report'> 回報問題(不要鞭我) </a>
				</div>
			</div>

			<div class="navbar-item">
				<button class="button is-light">
					<strong>登出</strong>
				</button>
			</div>
		</div>
	</div>
</nav>

<style lang='scss'>
	a.navbar-item.is-disabled {
		background: #AAAAAA;
		cursor: not-allowed;

		&:hover {
			background: #AAAAAA;
		}
	}
</style>