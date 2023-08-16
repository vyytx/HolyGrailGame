<section class="hero is-info is-fullheight">
	<div class="hero-head">
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				<h1 class="title">
					日研聖杯 Fate/XXX
				</h1>
				<h2 class="subtitle">
					A tool for Holy Grail TRPG game, including dynamic map, an appropriate chatting system, basic flow controlling based on rule and others.
				</h2>
				<div class="box" id="loginBox">
					<div class="field is-grouped">
						<p class="control is-expanded">
							<input class="input" type="text" placeholder="輸入你的真名">
						</p>
						<p class="control">
							<a class="button is-info" href="/">
								啟動！
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang='ts'>
	
</script>

<style lang='scss'>
	section {
		background: no-repeat fixed center center url("../assets/img/sevenServantsBg.png");
		background-size: cover;
	}

	#loginBox {
		background-color: #000000AA;

		& input {
			background-color: transparent;
			outline: none;
			border: 0px;
			box-shadow: none;

			color: #EEEEFF;

			&::placeholder {
				color: #DDDDDD
			}
		}
	}
</style>