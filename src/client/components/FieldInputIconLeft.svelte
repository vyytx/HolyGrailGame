<script lang='ts' context='module'>
    import { HTMLInputTypeAttribute } from 'svelte/elements';
    import { SvelteComponentTyped } from 'svelte/internal';
    type Icon = SvelteComponentTyped<{size?: string, strokeWidth?: number, class?: string}>;

    // export let type: HTMLInputTypeAttribute = "text";

    // const handleType = node => {
    //     node.type = type;
    // }
</script>

<div class="field">
    <div class="control has-icons-left">
        <span class="icon is-left">
            <svelte:component this={icon} />
        </span>
        <!-- use:handleType -->
        <input class="input" {placeholder} bind:value={_value}>
    </div>
</div>

<script lang='ts'>
    export let icon: Icon;
    export let placeholder: string = "";
    export let _value;
</script>