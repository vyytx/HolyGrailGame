<script lang='ts'>
	import { TUserData } from './../server/db/user.ts';
	import Navbar from './components/Navbar.svelte';
	import {Router, Route} from "svelte-routing";
	import HomePage from "./pages/HomePage.svelte";
	import LoginPage from "./pages/LoginPage.svelte"

	import 'bulma/css/bulma.css';
	
	export let url = "";

	import axios from 'axios'
    import { onMount } from 'svelte';

	const loginToken = localStorage.getItem('loginToken');
	$: getUserData = axios.post('/api/account/fetchUserData', {loginToken})

	onMount(() => {
		console.log('getloginToken:', localStorage.getItem('loginToken'))
	})
</script>

<Router url="{url}" basepath="/game">
	<!-- HomePage is just a redirector -->
	<Route path="/" component={HomePage} />
	<Route path="/login" let:params>
		<LoginPage />
	</Route>
	<Route path="/dashboard" let:params>
		<script lang='ts'>
			console.log('hello')
		</script>
		loginToken: {(() => {console.log(loginToken); return loginToken})()}
		{#if true}
			 <!-- content here -->
		{:else}
			 <!-- else content here -->
		{/if}
	</Route>
	<Route>
		<h1>Not Found</h1>
	</Route>
</Router>