<script lang='ts'>
	import { HTMLInputTypeAttribute } from 'svelte/elements';
	import { SvelteComponentTyped } from 'svelte/internal';
	type Icon = SvelteComponentTyped<{size?: string, strokeWidth?: number, class?: string}>;

	export let type: HTMLInputTypeAttribute = "text";
	export let icon: Icon;
	export let placeholder: string = "";
	export let value = undefined;

	const handleType = node => {
		node.type = type;
	}
</script>

<div class="field">
	<div class="control has-icons-left">
		<span class="icon is-left">
			<svelte:component this={icon} />
		</span>
		<input class="input" {placeholder} bind:value use:handleType>
	</div>
</div>