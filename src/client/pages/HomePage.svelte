<script lang='ts'>
    import axios from "axios";
	import { checkLoginStatus } from "../ts/util.ts";

	checkLoginStatus()
		.catch(() => {
			location.href = 'login';
		})
		.then(() => {
			loadPage();
		})

	function loadPage() {
		
	}
	// function click() {
	// 	axios.post('/api/account/isOnline', {username: "vyytx", password: '123'})
	// 	.then(x => {
	// 		console.log(x)
	// 	})
	// }
</script>

<!-- <button on:click={click}>click me</button> -->

<!-- <script lang='ts'>
	function login(shinmei: string) {
		console.log(shinmei)
		axios.post('/api/login', {
			shinmei: shinmei
		}).then(x => {

		}).catch(err => console.error(err))
	}
</script> -->

<style lang='scss'>
</style>