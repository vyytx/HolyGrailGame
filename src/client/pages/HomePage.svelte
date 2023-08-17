<script lang='ts' context='module'>
	import FormInputBtnHori from "../components/FormInputBtnHori.svelte";

	import axios from 'axios';
</script>

<section class="hero is-info is-fullheight">
	<div class="hero-head">
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				<h1 class="title">
					Holy Grail Game
				</h1>
				<br>
				<h2 class="subtitle">
					A tool for Holy Grail TRPG game, including dynamic map, an appropriate chatting system, basic flow controlling based on rule and others.
				</h2>
				<div class="box">
					<FormInputBtnHori placeholder="輸入你的真名" btnText="啟動 !" whenClick={login}/>
				</div>
			</div>	
		</div>
	</div>
</section>

<script lang='ts'>
	function login(shinmei: string) {
		console.log(shinmei)
		axios.post('/api/login', {
			shinmei: shinmei
		}).then(x => {

		}).catch(err => console.error(err))
	}
</script>

<style lang='scss'>
</style>