<script lang='ts'>
    import { checkToken } from "../ts/util.ts";
    import { navigate } from 'svelte-routing';

	const loginToken = localStorage.getItem('loginToken');

	checkToken(loginToken)
		.then(isValid => {
			console.log('isValid:', isValid);
			if(!isValid) {
				console.log('not valid')
				navigate(`login`);
			}
			else
				navigate(`dashboard`)
		})
</script>